import type { Topic } from "@/types";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ClipboardList } from "lucide-react";

interface UnitSidebarProps {
  topics: Topic[];
  selectedUnit: number | null;
  onSelectUnit: (unit: number | null) => void;
  reviewedIds: Set<string>;
  mcqActive?: boolean;
  onSelectMCQ?: () => void;
  showMCQ?: boolean;
}

function getUnits(topics: Topic[], reviewedIds: Set<string>) {
  const map = new Map<number, { label: string; count: number; reviewed: number }>();
  for (const t of topics) {
    if (!map.has(t.unitNumber)) {
      map.set(t.unitNumber, { label: t.unit, count: 0, reviewed: 0 });
    }
    const entry = map.get(t.unitNumber)!;
    entry.count++;
    if (reviewedIds.has(t.id)) entry.reviewed++;
  }
  return Array.from(map.entries()).sort((a, b) => a[0] - b[0]);
}

function ProgressBar({ value, total, className }: { value: number; total: number; className?: string }) {
  const pct = total === 0 ? 0 : Math.round((value / total) * 100);
  return (
    <div className={cn("w-full", className)}>
      <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-green-500 transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function UnitSidebar({
  topics,
  selectedUnit,
  onSelectUnit,
  reviewedIds,
  mcqActive = false,
  onSelectMCQ,
  showMCQ = false,
}: UnitSidebarProps) {
  const units = getUnits(topics, reviewedIds);
  const totalReviewed = topics.filter((t) => reviewedIds.has(t.id)).length;
  const totalPct = topics.length === 0 ? 0 : Math.round((totalReviewed / topics.length) * 100);

  return (
    <aside className="w-56 flex-shrink-0 border-r border-border bg-card hidden md:flex flex-col">
      <div className="px-4 py-3 border-b border-border">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Units
        </p>
        <div className="mt-2.5">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] text-muted-foreground">Overall progress</span>
            <span className="text-[11px] font-medium text-foreground">{totalReviewed}/{topics.length}</span>
          </div>
          <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
            <div
              className="h-full rounded-full bg-green-500 transition-all duration-300"
              style={{ width: `${totalPct}%` }}
            />
          </div>
          <p className="text-[10px] text-muted-foreground mt-0.5 text-right">{totalPct}%</p>
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="py-2">
          <button
            onClick={() => onSelectUnit(null)}
            className={cn(
              "w-full flex items-center justify-between px-4 py-2 text-sm transition-colors rounded-none",
              selectedUnit === null
                ? "bg-accent text-foreground font-medium"
                : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
            )}
          >
            <span>All Units</span>
            <span className="text-xs bg-muted rounded-full px-1.5 py-0.5 text-muted-foreground">
              {topics.length}
            </span>
          </button>
          {showMCQ && (
            <button
              onClick={() => onSelectMCQ?.()}
              className={cn(
                "w-full flex items-center gap-2 px-4 py-2 text-sm transition-colors rounded-none text-left",
                mcqActive
                  ? "bg-accent text-foreground font-medium"
                  : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
              )}
            >
              <ClipboardList className="w-3.5 h-3.5 flex-shrink-0" />
              <span>MCQ Practice</span>
            </button>
          )}
          {units.map(([num, { label, count, reviewed }]) => (
            <button
              key={num}
              onClick={() => onSelectUnit(num)}
              className={cn(
                "w-full flex flex-col px-4 py-2 text-sm transition-colors rounded-none text-left gap-1.5",
                selectedUnit === num
                  ? "bg-accent text-foreground font-medium"
                  : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
              )}
            >
              <div className="flex items-center justify-between gap-2 w-full">
                <span className="leading-snug">{label}</span>
                <span className="text-xs bg-muted rounded-full px-1.5 py-0.5 text-muted-foreground flex-shrink-0">
                  {reviewed}/{count}
                </span>
              </div>
              <ProgressBar value={reviewed} total={count} />
            </button>
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
}
