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
  /** Notes keyed by "subject:unitNumber" or "subject:all" */
  notes: Record<string, string>;
  saveNote: (key: string, text: string) => void;
  /** MCQ practice test state keyed by subject */
  practiceAnswers: Record<string, Record<number, number>>;
  practiceSubmitted: Record<string, number[]>;
  savePracticeState: (subject: string, answers: Record<number, number>, submitted: Set<number>) => void;
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
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [practiceAnswers, setPracticeAnswers] = useState<Record<string, Record<number, number>>>(() => {
    try {
      const s = localStorage.getItem("stem-review:practice_answers");
      return s ? JSON.parse(s) : {};
    } catch { return {}; }
  });
  const [practiceSubmitted, setPracticeSubmitted] = useState<Record<string, number[]>>(() => {
    try {
      const s = localStorage.getItem("stem-review:practice_submitted");
      return s ? JSON.parse(s) : {};
    } catch { return {}; }
  });

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

  /** Upsert completed/starred progress to Supabase */
  const syncProgressToDb = useCallback(
    async (completed: Set<string>, starred: Set<string>, userId: string) => {
      const { error } = await supabase.from("user_progress").upsert(
        {
          user_id: userId,
          completed_ids: [...completed],
          starred_ids: [...starred],
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id" }
      );
      if (error) {
        console.error("[stem-review] syncProgressToDb failed:", error);
        // Fall back to localStorage so progress isn't lost
        saveLocal(completed, starred);
      }
    },
    []
  );

  /** Upsert notes to Supabase (requires notes jsonb column) */
  const syncNotesToDb = useCallback(
    async (notesMap: Record<string, string>, userId: string) => {
      await supabase.from("user_progress").upsert(
        {
          user_id: userId,
          notes: notesMap,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id" }
      );
    },
    []
  );

  /** Upsert MCQ practice state to Supabase */
  const syncPracticeToDb = useCallback(
    async (answers: Record<string, Record<number, number>>, submitted: Record<string, number[]>, userId: string) => {
      await supabase.from("user_progress").upsert(
        {
          user_id: userId,
          practice_answers: answers,
          practice_submitted: submitted,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id" }
      );
    },
    []
  );

  /** Load progress from Supabase, merging localStorage data on first login */
  const loadFromDb = useCallback(async (userId: string) => {
    const { data, error } = await supabase
      .from("user_progress")
      .select("completed_ids, starred_ids, notes, practice_answers, practice_submitted")
      .eq("user_id", userId)
      .single();
    if (error && error.code !== "PGRST116") {
      // PGRST116 = no rows found (expected for new users), anything else is real
      console.error("[stem-review] loadFromDb failed:", error);
    }

    const localCompleted = loadLocalIds("stem-review:reviewed");
    const localStarred = loadLocalIds("stem-review:starred");

    const dbCompleted = new Set<string>(data?.completed_ids ?? []);
    const dbStarred = new Set<string>(data?.starred_ids ?? []);
    const dbNotes: Record<string, string> = (data as { notes?: Record<string, string> } | null)?.notes ?? {};
    const dbPracticeAnswers: Record<string, Record<number, number>> = (data as { practice_answers?: Record<string, Record<number, number>> } | null)?.practice_answers ?? {};
    const dbPracticeSubmitted: Record<string, number[]> = (data as { practice_submitted?: Record<string, number[]> } | null)?.practice_submitted ?? {};

    // Merge localStorage into DB on first login (union)
    const mergedCompleted = new Set([...dbCompleted, ...localCompleted]);
    const mergedStarred = new Set([...dbStarred, ...localStarred]);

    setCompletedIds(mergedCompleted);
    setStarredIds(mergedStarred);
    setNotes(dbNotes);
    setPracticeAnswers(dbPracticeAnswers);
    setPracticeSubmitted(dbPracticeSubmitted);
    dbSynced.current = true;

    // Persist the merge back to DB if there was anything local to add
    if (localCompleted.size > 0 || localStarred.size > 0) {
      await syncProgressToDb(mergedCompleted, mergedStarred, userId);
      localStorage.removeItem("stem-review:reviewed");
      localStorage.removeItem("stem-review:starred");
    }
  }, [syncProgressToDb]);

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
        setNotes({});
        try {
          const pa = localStorage.getItem("stem-review:practice_answers");
          setPracticeAnswers(pa ? JSON.parse(pa) : {});
          const ps = localStorage.getItem("stem-review:practice_submitted");
          setPracticeSubmitted(ps ? JSON.parse(ps) : {});
        } catch {
          setPracticeAnswers({});
          setPracticeSubmitted({});
        }
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
          syncProgressToDb(next, starredIds, user.id);
        } else {
          saveLocal(next, starredIds);
        }
        return next;
      });
    },
    [user, starredIds, syncProgressToDb]
  );

  const toggleStarred = useCallback(
    (id: string) => {
      setStarredIds((prev) => {
        const next = new Set(prev);
        next.has(id) ? next.delete(id) : next.add(id);
        if (user && dbSynced.current) {
          syncProgressToDb(completedIds, next, user.id);
        } else {
          saveLocal(completedIds, next);
        }
        return next;
      });
    },
    [user, completedIds, syncProgressToDb]
  );

  const saveNote = useCallback(
    (key: string, text: string) => {
      setNotes((prev) => {
        const next = { ...prev, [key]: text };
        if (user && dbSynced.current) {
          syncNotesToDb(next, user.id);
        }
        return next;
      });
    },
    [user, syncNotesToDb]
  );

  const savePracticeState = useCallback(
    (subject: string, answers: Record<number, number>, submitted: Set<number>) => {
      setPracticeAnswers((prev) => {
        const next = { ...prev, [subject]: answers };
        if (user && dbSynced.current) {
          setPracticeSubmitted((prevSub) => {
            const nextSub = { ...prevSub, [subject]: [...submitted] };
            syncPracticeToDb(next, nextSub, user.id);
            return nextSub;
          });
        } else {
          setPracticeSubmitted((prevSub) => {
            const nextSub = { ...prevSub, [subject]: [...submitted] };
            localStorage.setItem("stem-review:practice_answers", JSON.stringify(next));
            localStorage.setItem("stem-review:practice_submitted", JSON.stringify(nextSub));
            return nextSub;
          });
        }
        return next;
      });
    },
    [user, syncPracticeToDb]
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
        notes,
        saveNote,
        practiceAnswers,
        practiceSubmitted,
        savePracticeState,
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
