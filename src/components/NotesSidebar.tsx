import { useEffect, useRef, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PenLine, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface NotesSidebarProps {
  noteKey: string;
  unitLabel: string;
  value: string;
  onSave: (key: string, text: string) => void;
  className?: string;
}

export default function NotesSidebar({
  noteKey,
  unitLabel,
  value,
  onSave,
  className,
}: NotesSidebarProps) {
  const [draft, setDraft] = useState(value);
  const [saved, setSaved] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sync draft when the note key changes (unit switch)
  useEffect(() => {
    setDraft(value);
    setSaved(false);
  }, [noteKey, value]);

  function handleChange(text: string) {
    setDraft(text);
    setSaved(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      onSave(noteKey, text);
      setSaved(true);
      timerRef.current = setTimeout(() => setSaved(false), 1500);
    }, 600);
  }

  return (
    <aside className={cn("w-72 flex-shrink-0 border-l border-border bg-card hidden md:flex flex-col", className)}>
      <div className="px-4 py-3 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PenLine className="w-3.5 h-3.5 text-muted-foreground" />
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Notes
          </p>
        </div>
        {saved && (
          <span className="flex items-center gap-1 text-[10px] text-green-400">
            <Check className="w-3 h-3" />
            Saved
          </span>
        )}
      </div>
      <div className="px-3 py-2 border-b border-border">
        <p className="text-[11px] text-muted-foreground truncate">{unitLabel}</p>
      </div>
      <ScrollArea className="flex-1">
        <Textarea
          className="h-full min-h-[calc(100vh-10rem)] resize-none rounded-none border-0 border-none bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder={`Jot down notes for ${unitLabel}…`}
          value={draft}
          onChange={(e) => handleChange(e.target.value)}
        />
      </ScrollArea>
    </aside>
  );
}
