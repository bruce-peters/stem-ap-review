import type { Topic } from "@/types";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Math from "@/components/Math";
import { Star } from "lucide-react";

const TAG_COLORS: Record<string, string> = {
  "BC only": "bg-blue-900/60 text-blue-300 border-blue-700",
  FRQ: "bg-orange-900/60 text-orange-300 border-orange-700",
  "MCQ frequent": "bg-green-900/60 text-green-300 border-green-700",
  "calculator active": "bg-purple-900/60 text-purple-300 border-purple-700",
  theorem: "bg-zinc-700/80 text-zinc-300 border-zinc-500",
};

interface TopicCardProps {
  topic: Topic;
  onClick: () => void;
  isReviewed?: boolean;
  isStarred?: boolean;
  onToggleStarred?: (e: React.MouseEvent) => void;
}

function firstSentence(text: string): string {
  const match = text.match(/^[^.!?]+[.!?]/);
  return match ? match[0] : text;
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

export default function TopicCard({ topic, onClick, isReviewed, isStarred, onToggleStarred }: TopicCardProps) {
  return (
    <Card
      className={cn(
        "cursor-pointer border-border bg-card hover:bg-accent/40 transition-colors duration-150 flex flex-col gap-0",
        isReviewed && "border-green-600 bg-green-950/30 hover:bg-green-900/20",
        isStarred && !isReviewed && "border-amber-600 bg-amber-950/20 hover:bg-amber-900/20"
      )}
      onClick={onClick}
    >
      <CardHeader className="pb-2 pt-4 px-4">
        <div className="flex flex-wrap gap-1 mb-1.5 items-center">
          <div className="flex flex-wrap gap-1 flex-1">
            {topic.tags.map((tag) => (
              <span
                key={tag}
                className={cn(
                  "inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium",
                  TAG_COLORS[tag] ??
                    "bg-muted text-muted-foreground border-border"
                )}
              >
                {tag}
              </span>
            ))}
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); onToggleStarred?.(e); }}
            title={isStarred ? "Unstar" : "Star as difficult"}
            className={cn(
              "flex-shrink-0 rounded p-0.5 transition-colors",
              isStarred
                ? "text-amber-400 hover:text-amber-300"
                : "text-muted-foreground/40 hover:text-amber-400"
            )}
          >
            <Star className={cn("w-3.5 h-3.5", isStarred && "fill-amber-400")} />
          </button>
        </div>
        <CardTitle className="text-sm font-semibold leading-snug text-foreground">
          {topic.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-4 pt-0 flex flex-col gap-2">
        {topic.formula ? (
          <div className="font-mono text-xs bg-muted/50 rounded px-2 py-1.5 overflow-x-auto">
            <Math latex={topic.formula} inline={false} />
          </div>
        ) : (
          <p className="text-xs text-muted-foreground leading-relaxed">
            {renderInline(firstSentence(topic.description))}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export { TAG_COLORS };
