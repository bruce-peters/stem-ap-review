import type { ApushTopic, ApushCategory } from '@/data/apush/index'
import { cn } from '@/lib/utils'

const CATEGORY_COLORS: Record<ApushCategory, string> = {
  'People':                    'border-blue-500 bg-blue-500/10 text-blue-400',
  'Events':                    'border-red-500 bg-red-500/10 text-red-400',
  'Legislation & Documents':   'border-yellow-500 bg-yellow-500/10 text-yellow-400',
  'Court Cases':               'border-orange-500 bg-orange-500/10 text-orange-400',
  'Movements & Ideologies':    'border-purple-500 bg-purple-500/10 text-purple-400',
  'Economic Concepts':         'border-green-500 bg-green-500/10 text-green-400',
  'Foreign Policy':            'border-zinc-400 bg-zinc-400/10 text-zinc-300',
}

const CATEGORY_BORDER: Record<ApushCategory, string> = {
  'People':                    'border-l-blue-500',
  'Events':                    'border-l-red-500',
  'Legislation & Documents':   'border-l-yellow-500',
  'Court Cases':               'border-l-orange-500',
  'Movements & Ideologies':    'border-l-purple-500',
  'Economic Concepts':         'border-l-green-500',
  'Foreign Policy':            'border-l-zinc-400',
}

interface CategorySectionProps {
  category: ApushCategory
  topics: ApushTopic[]
  onClickTopic: (topic: ApushTopic) => void
}

export default function CategorySection({
  category,
  topics,
  onClickTopic,
}: CategorySectionProps) {
  if (topics.length === 0) return null

  const colorClass = CATEGORY_COLORS[category]
  const borderClass = CATEGORY_BORDER[category]

  return (
    <section className="flex flex-col gap-3">
      {/* Section header */}
      <div className={cn('flex items-center gap-2 border-l-4 pl-3 py-0.5', borderClass)}>
        <span className={cn('text-xs font-bold uppercase tracking-wider', colorClass.split(' ')[2])}>
          {category}
        </span>
        <span className="text-xs text-muted-foreground">
          {topics.length} term{topics.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Wrapping card grid */}
      <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(11rem, 1fr))' }}>
        {topics.map((topic) => (
          <button
            key={topic.id}
            onClick={() => onClickTopic(topic)}
            className="text-left rounded-lg border border-border bg-card hover:bg-accent/40 transition-colors p-3 flex flex-col gap-1.5"
          >
            <span className="text-sm font-semibold leading-snug text-foreground line-clamp-2">
              {topic.name}
            </span>
            <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-3">
              {topic.summary}
            </p>
          </button>
        ))}
      </div>
    </section>
  )
}

export { CATEGORY_COLORS, CATEGORY_BORDER }
export type { ApushCategory }
