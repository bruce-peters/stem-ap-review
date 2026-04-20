import type { Topic } from "@/types";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import Math from "@/components/Math";
import CodeBlock from "@/components/CodeBlock";
import StepList from "@/components/StepList";
import MCQBlock from "@/components/MCQBlock";
import { TAG_COLORS } from "@/components/TopicCard";
import { cn } from "@/lib/utils";
import { CheckCircle2, Circle, Star } from "lucide-react";

interface TopicSheetProps {
  topic: Topic | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isReviewed: boolean;
  onToggleReviewed: () => void;
  isStarred: boolean;
  onToggleStarred: () => void;
  isCS?: boolean;
  viewMode?: "side" | "center";
}

function renderInline(text: string) {
  const parts = text.split(/(\$[^$]+\$)/g);
  return parts.map((part, i) => {
    if (part.startsWith("$") && part.endsWith("$")) {
      return <Math key={i} latex={part.slice(1, -1)} inline />;
    }
    return <span key={i}>{part}</span>;
  });
}

function TopicContent({
  topic,
  isReviewed,
  onToggleReviewed,
  isStarred,
  onToggleStarred,
  isCS,
  TitleComponent,
  DescriptionComponent,
}: {
  topic: Topic;
  isReviewed: boolean;
  onToggleReviewed: () => void;
  isStarred: boolean;
  onToggleStarred: () => void;
  isCS?: boolean;
  TitleComponent: React.ElementType;
  DescriptionComponent: React.ElementType;
}) {
  return (
    <>
      <div className="flex flex-wrap gap-1.5 mb-2">
        {topic.tags.map((tag) => (
          <span
            key={tag}
            className={cn(
              "inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium",
              TAG_COLORS[tag] ?? "bg-muted text-muted-foreground border-border"
            )}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-start justify-between gap-3">
        <TitleComponent className="text-xl font-bold leading-tight">
          {topic.name}
        </TitleComponent>
        <div className="flex items-center gap-1.5 flex-shrink-0 mt-0.5">
          <button
            onClick={onToggleStarred}
            title={isStarred ? "Unstar" : "Star as difficult"}
            className={cn(
              "flex items-center justify-center rounded-full w-7 h-7 border transition-colors",
              isStarred
                ? "bg-amber-900/40 text-amber-400 border-amber-700 hover:bg-amber-900/60"
                : "bg-muted/40 text-muted-foreground border-border hover:bg-muted hover:text-amber-400"
            )}
          >
            <Star
              className={cn("w-3.5 h-3.5", isStarred && "fill-amber-400")}
            />
          </button>
          <button
            onClick={onToggleReviewed}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium border transition-colors",
              isReviewed
                ? "bg-green-900/40 text-green-400 border-green-700 hover:bg-green-900/60"
                : "bg-muted/40 text-muted-foreground border-border hover:bg-muted hover:text-foreground"
            )}
          >
            {isReviewed ? (
              <CheckCircle2 className="w-3.5 h-3.5" />
            ) : (
              <Circle className="w-3.5 h-3.5" />
            )}
            {isReviewed ? "Reviewed" : "Mark reviewed"}
          </button>
        </div>
      </div>
      <DescriptionComponent className="text-sm text-muted-foreground mt-1">
        {topic.unit}
      </DescriptionComponent>
    </>
  );
}

function TopicBody({
  topic,
  isCS,
}: {
  topic: Topic;
  isCS?: boolean;
}) {
  return (
    <div className="px-6 py-5 flex flex-col gap-6">
      <section>
        <p className="text-sm text-foreground/90 leading-relaxed">
          {renderInline(topic.description)}
        </p>
      </section>

      {topic.formula && (
        <section>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Formula
          </h3>
          {isCS ? (
            <CodeBlock code={topic.formula} />
          ) : (
            <div className="bg-muted/40 rounded-lg px-4 py-3 overflow-x-auto font-mono">
              <Math latex={topic.formula} inline={false} />
            </div>
          )}
        </section>
      )}

      {isCS && topic.codeSnippet && (
        <section>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Code Snippet
          </h3>
          <CodeBlock code={topic.codeSnippet} />
        </section>
      )}

      {topic.steps && topic.steps.length > 0 && (
        <section>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Step-by-Step
          </h3>
          <StepList steps={topic.steps} />
        </section>
      )}

      {topic.examples && topic.examples.length > 0 && (
        <section>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Worked Example{topic.examples.length > 1 ? "s" : ""}
          </h3>
          <div className="flex flex-col gap-4">
            {topic.examples.map((ex, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-muted/20 overflow-hidden"
              >
                <div className="px-4 py-3 bg-muted/30 border-b border-border">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Problem
                  </p>
                  {isCS && ex.problem.includes("\n") ? (
                    <CodeBlock code={ex.problem} />
                  ) : (
                    <p className="text-sm text-foreground leading-relaxed">
                      {renderInline(ex.problem)}
                    </p>
                  )}
                </div>
                <div className="px-4 py-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Solution
                  </p>
                  {isCS && ex.solution.includes("\n") ? (
                    <CodeBlock code={ex.solution} />
                  ) : (
                    <p className="text-sm text-foreground/90 leading-relaxed">
                      {renderInline(ex.solution)}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {topic.mcqs && topic.mcqs.length > 0 && (
        <section>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Practice Questions
          </h3>
          <MCQBlock mcqs={topic.mcqs} isCS={isCS} />
        </section>
      )}
    </div>
  );
}

export default function TopicSheet({
  topic,
  open,
  onOpenChange,
  isReviewed,
  onToggleReviewed,
  isStarred,
  onToggleStarred,
  isCS,
  viewMode = "side",
}: TopicSheetProps) {
  if (!topic) return null;

  const sharedHeaderProps = {
    topic,
    isReviewed,
    onToggleReviewed,
    isStarred,
    onToggleStarred,
    isCS,
  };

  if (viewMode === "center") {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="p-0">
          <DialogHeader className="px-6 pt-6 pb-4 flex-shrink-0">
            <TopicContent
              {...sharedHeaderProps}
              TitleComponent={DialogTitle}
              DescriptionComponent={DialogDescription}
            />
          </DialogHeader>
          <Separator className="flex-shrink-0" />
          <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
            <TopicBody topic={topic} isCS={isCS} />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-2xl p-0 flex flex-col bg-card border-border"
      >
        <SheetHeader className="px-6 pt-6 pb-4 flex-shrink-0">
          <TopicContent
            {...sharedHeaderProps}
            TitleComponent={SheetTitle}
            DescriptionComponent={SheetDescription}
          />
        </SheetHeader>
        <Separator className="flex-shrink-0" />
        <ScrollArea className="flex-1 min-h-0">
          <TopicBody topic={topic} isCS={isCS} />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
