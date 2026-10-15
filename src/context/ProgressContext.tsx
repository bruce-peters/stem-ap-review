import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";

interface ProgressContextValue {
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

const STORAGE_KEYS = {
  completed: "stem-review:reviewed",
  starred: "stem-review:starred",
  notes: "stem-review:notes",
  practiceAnswers: "stem-review:practice_answers",
  practiceSubmitted: "stem-review:practice_submitted",
};

function loadJson<T>(key: string, fallback: T): T {
  try {
    const stored = localStorage.getItem(key);
    return stored ? (JSON.parse(stored) as T) : fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage full or blocked — progress just won't persist this session
  }
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [completedIds, setCompletedIds] = useState<Set<string>>(
    () => new Set(loadJson<string[]>(STORAGE_KEYS.completed, []))
  );
  const [starredIds, setStarredIds] = useState<Set<string>>(
    () => new Set(loadJson<string[]>(STORAGE_KEYS.starred, []))
  );
  const [notes, setNotes] = useState<Record<string, string>>(() =>
    loadJson(STORAGE_KEYS.notes, {})
  );
  const [practiceAnswers, setPracticeAnswers] = useState<Record<string, Record<number, number>>>(() =>
    loadJson(STORAGE_KEYS.practiceAnswers, {})
  );
  const [practiceSubmitted, setPracticeSubmitted] = useState<Record<string, number[]>>(() =>
    loadJson(STORAGE_KEYS.practiceSubmitted, {})
  );

  // ── persist to localStorage ───────────────────────────────────────────────

  useEffect(() => saveJson(STORAGE_KEYS.completed, [...completedIds]), [completedIds]);
  useEffect(() => saveJson(STORAGE_KEYS.starred, [...starredIds]), [starredIds]);
  useEffect(() => saveJson(STORAGE_KEYS.notes, notes), [notes]);
  useEffect(() => saveJson(STORAGE_KEYS.practiceAnswers, practiceAnswers), [practiceAnswers]);
  useEffect(() => saveJson(STORAGE_KEYS.practiceSubmitted, practiceSubmitted), [practiceSubmitted]);

  // ── actions ───────────────────────────────────────────────────────────────

  const toggleCompleted = useCallback((id: string) => {
    setCompletedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const toggleStarred = useCallback((id: string) => {
    setStarredIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const saveNote = useCallback((key: string, text: string) => {
    setNotes((prev) => ({ ...prev, [key]: text }));
  }, []);

  const savePracticeState = useCallback(
    (subject: string, answers: Record<number, number>, submitted: Set<number>) => {
      setPracticeAnswers((prev) => ({ ...prev, [subject]: answers }));
      setPracticeSubmitted((prev) => ({ ...prev, [subject]: [...submitted] }));
    },
    []
  );

  return (
    <ProgressContext.Provider
      value={{
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
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
}
