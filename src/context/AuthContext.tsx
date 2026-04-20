import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
  type ReactNode,
} from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<{ error: string | null }>;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  /** Progress from DB (or null when logged out – use localStorage fallback) */
  completedIds: Set<string>;
  starredIds: Set<string>;
  toggleCompleted: (id: string) => void;
  toggleStarred: (id: string) => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [completedIds, setCompletedIds] = useState<Set<string>>(() =>
    loadLocalIds("stem-review:reviewed")
  );
  const [starredIds, setStarredIds] = useState<Set<string>>(() =>
    loadLocalIds("stem-review:starred")
  );

  // Whether we're currently synced to the database (user logged in)
  const dbSynced = useRef(false);

  // ── helpers ──────────────────────────────────────────────────────────────

  function loadLocalIds(key: string): Set<string> {
    try {
      const stored = localStorage.getItem(key);
      return stored ? new Set(JSON.parse(stored) as string[]) : new Set();
    } catch {
      return new Set();
    }
  }

  /** Save to localStorage (only used when logged out) */
  function saveLocal(completed: Set<string>, starred: Set<string>) {
    localStorage.setItem(
      "stem-review:reviewed",
      JSON.stringify([...completed])
    );
    localStorage.setItem("stem-review:starred", JSON.stringify([...starred]));
  }

  /** Upsert progress to Supabase */
  const syncToDb = useCallback(
    async (completed: Set<string>, starred: Set<string>, userId: string) => {
      await supabase.from("user_progress").upsert(
        {
          user_id: userId,
          completed_ids: [...completed],
          starred_ids: [...starred],
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id" }
      );
    },
    []
  );

  /** Load progress from Supabase, merging localStorage data on first login */
  const loadFromDb = useCallback(async (userId: string) => {
    const { data } = await supabase
      .from("user_progress")
      .select("completed_ids, starred_ids")
      .eq("user_id", userId)
      .single();

    const localCompleted = loadLocalIds("stem-review:reviewed");
    const localStarred = loadLocalIds("stem-review:starred");

    const dbCompleted = new Set<string>(data?.completed_ids ?? []);
    const dbStarred = new Set<string>(data?.starred_ids ?? []);

    // Merge localStorage into DB on first login (union)
    const mergedCompleted = new Set([...dbCompleted, ...localCompleted]);
    const mergedStarred = new Set([...dbStarred, ...localStarred]);

    setCompletedIds(mergedCompleted);
    setStarredIds(mergedStarred);
    dbSynced.current = true;

    // Persist the merge back to DB if there was anything local to add
    if (localCompleted.size > 0 || localStarred.size > 0) {
      await syncToDb(mergedCompleted, mergedStarred, userId);
      // Clear localStorage now that it's in the DB
      localStorage.removeItem("stem-review:reviewed");
      localStorage.removeItem("stem-review:starred");
    }
  }, [syncToDb]);

  // ── auth listener ─────────────────────────────────────────────────────────

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        loadFromDb(session.user.id).finally(() => setLoading(false));
      } else {
        setLoading(false);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        dbSynced.current = false;
        loadFromDb(session.user.id);
      } else {
        dbSynced.current = false;
        // Reload from localStorage when logged out
        setCompletedIds(loadLocalIds("stem-review:reviewed"));
        setStarredIds(loadLocalIds("stem-review:starred"));
      }
    });

    return () => subscription.unsubscribe();
  }, [loadFromDb]);

  // ── toggle helpers ────────────────────────────────────────────────────────

  const toggleCompleted = useCallback(
    (id: string) => {
      setCompletedIds((prev) => {
        const next = new Set(prev);
        next.has(id) ? next.delete(id) : next.add(id);
        if (user && dbSynced.current) {
          syncToDb(next, starredIds, user.id);
        } else {
          saveLocal(next, starredIds);
        }
        return next;
      });
    },
    [user, starredIds, syncToDb]
  );

  const toggleStarred = useCallback(
    (id: string) => {
      setStarredIds((prev) => {
        const next = new Set(prev);
        next.has(id) ? next.delete(id) : next.add(id);
        if (user && dbSynced.current) {
          syncToDb(completedIds, next, user.id);
        } else {
          saveLocal(completedIds, next);
        }
        return next;
      });
    },
    [user, completedIds, syncToDb]
  );

  // ── auth actions ──────────────────────────────────────────────────────────

  const signUp = async (email: string, password: string): Promise<{ error: string | null }> => {
    const { error } = await supabase.auth.signUp({ email, password });
    return { error: error?.message ?? null };
  };

  const signIn = async (email: string, password: string): Promise<{ error: string | null }> => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error: error?.message ?? null };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signUp,
        signIn,
        signOut,
        completedIds,
        starredIds,
        toggleCompleted,
        toggleStarred,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
