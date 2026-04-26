import type { ApushTopic, ApushCategory } from '@/data/apush/index'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import MCQBlock from '@/components/MCQBlock'
import { cn } from '@/lib/utils'
import { CATEGORY_COLORS } from './CategorySection'
import { THEME_COLORS } from './ThemeSection'

// ── Essay tag pill colors ──────────────────────────────────────────────────────
const TAG_COLORS: Record<string, string> = {
  'DBQ frequent':        'bg-orange-900/60 text-orange-300 border-orange-700',
  'LEQ':                 'bg-sky-900/60 text-sky-300 border-sky-700',
  'SAQ':                 'bg-teal-900/60 text-teal-300 border-teal-700',
  'causation':           'bg-rose-900/60 text-rose-300 border-rose-700',
  'continuity-and-change': 'bg-violet-900/60 text-violet-300 border-violet-700',
  'comparison':          'bg-zinc-700/80 text-zinc-300 border-zinc-500',
}

function CategoryBadge({ category }: { category: ApushCategory }) {
  const color = CATEGORY_COLORS[category]
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold',
        color
      )}
    >
      {category}
    </span>
  )
}

function PeriodBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
      {label}
    </span>
  )
}

interface ApushSheetProps {
  topic: ApushTopic | null
  open: boolean
  onOpenChange: (open: boolean) => void
  /** Called when a connection badge is clicked */
  onNavigateTo: (id: string) => void
}

function ApushSheetBody({
  topic,
  onNavigateTo,
}: {
  topic: ApushTopic
  onNavigateTo: (id: string) => void
}) {
  return (
    <div className="px-6 py-5 flex flex-col gap-6">
      {/* Why It Matters */}
      <section>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
          Why It Matters
        </h3>
        <p className="text-sm text-foreground/90 leading-relaxed">{topic.significance}</p>
      </section>

      {/* Before & After */}
      <section>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
          Before &amp; After
        </h3>
        <p className="text-sm text-foreground/80 leading-relaxed">{topic.context}</p>
      </section>

      {/* Themes */}
      {topic.themes.length > 0 && (
        <section>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            APUSH Themes
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {topic.themes.map((theme) => (
              <span
                key={theme}
                className={cn(
                  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-medium',
                  THEME_COLORS[theme] ?? 'bg-muted text-muted-foreground border-border'
                )}
              >
                {theme}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Connections */}
      {topic.connections.length > 0 && (
        <section>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Connections
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {topic.connections.map((id) => (
              <button
                key={id}
                onClick={() => onNavigateTo(id)}
                className="inline-flex items-center rounded-full border border-border bg-muted/30 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
              >
                {id}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* MCQs */}
      {topic.mcqs && topic.mcqs.length > 0 && (
        <section>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Practice Questions
          </h3>
          <MCQBlock mcqs={topic.mcqs} />
        </section>
      )}
    </div>
  )
}

export default function ApushSheet({
  topic,
  open,
  onOpenChange,
  onNavigateTo,
}: ApushSheetProps) {
  if (!topic) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 flex flex-col">
        <DialogHeader className="px-6 pt-6 pb-4 flex-shrink-0">
          {/* Badges row */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            <CategoryBadge category={topic.category} />
            <PeriodBadge label={topic.periodLabel} />
            {topic.tags.map((tag) => (
              <span
                key={tag}
                className={cn(
                  'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium',
                  TAG_COLORS[tag] ?? 'bg-muted text-muted-foreground border-border'
                )}
              >
                {tag}
              </span>
            ))}
          </div>
          <DialogTitle className="text-xl font-bold leading-tight">{topic.name}</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground mt-1">
            {topic.summary}
          </DialogDescription>
        </DialogHeader>
        <Separator className="flex-shrink-0" />
        <ScrollArea className="flex-1 min-h-0">
          <ApushSheetBody topic={topic} onNavigateTo={onNavigateTo} />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
