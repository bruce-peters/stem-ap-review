import { useState, useMemo } from "react";
import type { Topic } from "@/types";
import TopicCard from "@/components/TopicCard";
import TopicSheet from "@/components/TopicSheet";
import UnitSidebar from "@/components/UnitSidebar";
import LoginButton from "@/components/LoginButton";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import {
  Search,
  FlaskConical,
  BookOpen,
  Monitor,
  Star,
  CheckCircle2,
  Circle,
  PanelRight,
  LayoutTemplate,
  PenLine,
} from "lucide-react";

import NotesSidebar from "@/components/NotesSidebar";
import calcbc from "@/data/calcbc";
import physics from "@/data/physics";
import cs from "@/data/cs";

const ALL_TAGS = [
  "BC only",
  "FRQ",
  "MCQ frequent",
  "calculator active",
  "theorem",
];

const TAG_COLORS: Record<string, string> = {
  "BC only":
    "bg-blue-900/60 text-blue-300 border-blue-700 hover:bg-blue-900/80",
  FRQ: "bg-orange-900/60 text-orange-300 border-orange-700 hover:bg-orange-900/80",
  "MCQ frequent":
    "bg-green-900/60 text-green-300 border-green-700 hover:bg-green-900/80",
  "calculator active":
    "bg-purple-900/60 text-purple-300 border-purple-700 hover:bg-purple-900/80",
  theorem: "bg-zinc-700/80 text-zinc-300 border-zinc-500 hover:bg-zinc-700",
};

type Subject = "calcbc" | "physics" | "cs";

const SUBJECTS: {
  id: Subject;
  label: string;
  icon: typeof BookOpen;
  data: Topic[];
}[] = [
  { id: "calcbc", label: "Calc BC", icon: BookOpen, data: calcbc },
  { id: "physics", label: "Physics", icon: FlaskConical, data: physics },
  { id: "cs", label: "CS", icon: Monitor, data: cs },
];

function EmptyState({ subject }: { subject: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full py-24 px-8 gap-4">
      <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center">
        <BookOpen className="w-8 h-8 text-muted-foreground" />
      </div>
      <div className="text-center">
        <p className="text-foreground font-medium">Coming soon</p>
        <p className="text-muted-foreground text-sm mt-1">
          Content for {subject} hasn't been added yet.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-2 w-full max-w-xs">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-24 rounded-lg bg-muted/40 border border-border animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}

export default function SubjectTabs() {
  const {
    completedIds: reviewedIds,
    starredIds,
    toggleCompleted: toggleReviewed,
    toggleStarred,
    notes,
    saveNote,
  } = useAuth();

  const [subject, setSubject] = useState<Subject>("calcbc");
  const [search, setSearch] = useState("");
  const [selectedUnit, setSelectedUnit] = useState<number | null>(null);
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());
  const [openTopic, setOpenTopic] = useState<Topic | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"side" | "center">("center");
  const [notesOpen, setNotesOpen] = useState(false);
  // null = show all, true = reviewed only, false = unreviewed only
  const [reviewFilter, setReviewFilter] = useState<boolean | null>(null);
  const [starFilter, setStarFilter] = useState(false);

  const currentSubject = SUBJECTS.find((s) => s.id === subject)!;
  const topics = currentSubject.data;

  const noteKey = `${subject}:${selectedUnit ?? "all"}`;
  const noteUnitLabel =
    selectedUnit !== null
      ? topics.find((t) => t.unitNumber === selectedUnit)?.unit ?? `Unit ${selectedUnit}`
      : `${currentSubject.label} — All Units`;

  const filtered = useMemo(() => {
    let result = topics;
    if (selectedUnit !== null)
      result = result.filter((t) => t.unitNumber === selectedUnit);
    if (activeTags.size > 0)
      result = result.filter((t) =>
        [...activeTags].every((tag) => t.tags.includes(tag))
      );
    if (reviewFilter === true)
      result = result.filter((t) => reviewedIds.has(t.id));
    else if (reviewFilter === false)
      result = result.filter((t) => !reviewedIds.has(t.id));
    if (starFilter) result = result.filter((t) => starredIds.has(t.id));
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.summary.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }
    return result;
  }, [
    topics,
    selectedUnit,
    activeTags,
    reviewFilter,
    starFilter,
    reviewedIds,
    starredIds,
    search,
  ]);

  function toggleTag(tag: string) {
    setActiveTags((prev) => {
      const next = new Set(prev);
      next.has(tag) ? next.delete(tag) : next.add(tag);
      return next;
    });
  }

  function openCard(topic: Topic) {
    setOpenTopic(topic);
    setSheetOpen(true);
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background">
      {/* Top bar */}
      <header className="flex items-center gap-4 px-6 py-3 border-b border-border flex-shrink-0 bg-card/50 backdrop-blur-sm">
        <span className="font-semibold text-foreground text-base tracking-tight">
          AP Study
        </span>
        <nav className="flex gap-1">
          {SUBJECTS.map((s) => (
            <button
              key={s.id}
              onClick={() => {
                setSubject(s.id);
                setSelectedUnit(null);
                setSearch("");
                setActiveTags(new Set());
                setReviewFilter(null);
                setStarFilter(false);
              }}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                subject === s.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
            >
              <s.icon className="w-3.5 h-3.5" />
              {s.label}
            </button>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <div className="flex items-center rounded-md border border-border bg-muted/40 p-0.5 gap-0.5">
            <button
              onClick={() => setViewMode("side")}
              title="Side panel view"
              className={cn(
                "flex items-center justify-center rounded p-1.5 transition-colors",
                viewMode === "side"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <PanelRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewMode("center")}
              title="Center view"
              className={cn(
                "flex items-center justify-center rounded p-1.5 transition-colors",
                viewMode === "center"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <LayoutTemplate className="w-3.5 h-3.5" />
            </button>
          </div>
          <button
            onClick={() => setNotesOpen((v) => !v)}
            title="Toggle notes"
            className={cn(
              "flex items-center justify-center rounded-md border border-border p-1.5 transition-colors",
              notesOpen
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-muted/40 text-muted-foreground hover:text-foreground"
            )}
          >
            <PenLine className="w-3.5 h-3.5" />
          </button>
          <LoginButton />
        </div>
      </header>

      {/* Search + tag filters */}
      <div className="px-6 py-3 border-b border-border flex-shrink-0 flex flex-col gap-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <Input
            placeholder="Search topics, formulas, tags…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 bg-muted/40 border-border h-9 text-sm"
          />
        </div>
        {topics.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={cn(
                  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium transition-all",
                  activeTags.has(tag)
                    ? TAG_COLORS[tag]
                    : "bg-transparent text-muted-foreground border-border hover:border-zinc-500 hover:text-foreground"
                )}
              >
                {tag}
              </button>
            ))}
            <div className="w-px bg-border mx-0.5 self-stretch" />
            <button
              onClick={() => setStarFilter((v) => !v)}
              className={cn(
                "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-medium transition-all",
                starFilter
                  ? "bg-amber-900/60 text-amber-300 border-amber-700"
                  : "bg-transparent text-muted-foreground border-border hover:border-zinc-500 hover:text-foreground"
              )}
            >
              <Star className="w-3 h-3" />
              Starred
            </button>
            <button
              onClick={() =>
                setReviewFilter((v) => (v === false ? null : false))
              }
              className={cn(
                "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-medium transition-all",
                reviewFilter === false
                  ? "bg-zinc-700/80 text-zinc-200 border-zinc-500"
                  : "bg-transparent text-muted-foreground border-border hover:border-zinc-500 hover:text-foreground"
              )}
            >
              <Circle className="w-3 h-3" />
              Not reviewed
            </button>
            <button
              onClick={() => setReviewFilter((v) => (v === true ? null : true))}
              className={cn(
                "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-medium transition-all",
                reviewFilter === true
                  ? "bg-green-900/60 text-green-300 border-green-700"
                  : "bg-transparent text-muted-foreground border-border hover:border-zinc-500 hover:text-foreground"
              )}
            >
              <CheckCircle2 className="w-3 h-3" />
              Reviewed
            </button>
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="flex flex-1 min-h-0">
        {topics.length > 0 && (
          <UnitSidebar
            topics={topics}
            selectedUnit={selectedUnit}
            onSelectUnit={setSelectedUnit}
            reviewedIds={reviewedIds}
          />
        )}

        <main className="flex-1 min-w-0 overflow-y-auto">
          {topics.length === 0 ? (
            <EmptyState subject={currentSubject.label} />
          ) : filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-muted-foreground gap-2">
              <Search className="w-8 h-8 opacity-40" />
              <p className="text-sm">No topics match your search.</p>
            </div>
          ) : (
            <div className="p-6">
              <p className="text-xs text-muted-foreground mb-4">
                {filtered.length} topic{filtered.length !== 1 ? "s" : ""}
                {selectedUnit !== null && ` in Unit ${selectedUnit}`}
                {search && ` matching "${search}"`}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {filtered.map((topic) => (
                  <TopicCard
                    key={topic.id}
                    topic={topic}
                    onClick={() => openCard(topic)}
                    isReviewed={reviewedIds.has(topic.id)}
                    isStarred={starredIds.has(topic.id)}
                    isCS={subject === "cs"}
                    onToggleStarred={() => toggleStarred(topic.id)}
                  />
                ))}
              </div>
            </div>
          )}
        </main>

        {notesOpen && topics.length > 0 && (
          <NotesSidebar
            noteKey={noteKey}
            unitLabel={noteUnitLabel}
            value={notes[noteKey] ?? ""}
            onSave={saveNote}
          />
        )}
      </div>

      <TopicSheet
        topic={openTopic}
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        isReviewed={openTopic ? reviewedIds.has(openTopic.id) : false}
        onToggleReviewed={() => openTopic && toggleReviewed(openTopic.id)}
        isStarred={openTopic ? starredIds.has(openTopic.id) : false}
        onToggleStarred={() => openTopic && toggleStarred(openTopic.id)}
        isCS={subject === "cs"}
        viewMode={viewMode}
      />
    </div>
  );
}
