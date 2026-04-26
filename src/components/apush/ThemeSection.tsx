import type { ApushTopic } from '@/data/apush/index'
import type { ApushTheme } from '@/data/apush/index'
import { cn } from '@/lib/utils'
import { CATEGORY_COLORS } from './CategorySection'

// Theme header border + label text colors
export const THEME_BORDER: Record<ApushTheme, string> = {
  'American and National Identity': 'border-l-blue-500',
  'Work, Exchange, and Technology':  'border-l-green-500',
  'Geography and the Environment':   'border-l-emerald-500',
  'Migration and Settlement':        'border-l-cyan-500',
  'Politics and Power':              'border-l-red-500',
  'America in the World':            'border-l-indigo-500',
  'American and Regional Culture':   'border-l-purple-500',
  'Social Structures':               'border-l-amber-500',
}

export const THEME_TEXT: Record<ApushTheme, string> = {
  'American and National Identity': 'text-blue-400',
  'Work, Exchange, and Technology':  'text-green-400',
  'Geography and the Environment':   'text-emerald-400',
  'Migration and Settlement':        'text-cyan-400',
  'Politics and Power':              'text-red-400',
  'America in the World':            'text-indigo-400',
  'American and Regional Culture':   'text-purple-400',
  'Social Structures':               'text-amber-400',
}

// Shared pill colors (used by ApushSheet too)
export const THEME_COLORS: Record<string, string> = {
  'American and National Identity': 'bg-blue-900/50 text-blue-300 border-blue-700',
  'Work, Exchange, and Technology':  'bg-green-900/50 text-green-300 border-green-700',
  'Geography and the Environment':   'bg-emerald-900/50 text-emerald-300 border-emerald-700',
  'Migration and Settlement':        'bg-cyan-900/50 text-cyan-300 border-cyan-700',
  'Politics and Power':              'bg-red-900/50 text-red-300 border-red-700',
  'America in the World':            'bg-indigo-900/50 text-indigo-300 border-indigo-700',
  'American and Regional Culture':   'bg-purple-900/50 text-purple-300 border-purple-700',
  'Social Structures':               'bg-amber-900/50 text-amber-300 border-amber-700',
}

interface ThemeSectionProps {
  theme: ApushTheme
  topics: ApushTopic[]
  onClickTopic: (topic: ApushTopic) => void
}

export default function ThemeSection({ theme, topics, onClickTopic }: ThemeSectionProps) {
  if (topics.length === 0) return null

  const borderClass = THEME_BORDER[theme]
  const textClass = THEME_TEXT[theme]

  return (
    <section className="flex flex-col gap-3">
      {/* Section header */}
      <div className={cn('flex items-center gap-2 border-l-4 pl-3 py-0.5', borderClass)}>
        <span className={cn('text-xs font-bold uppercase tracking-wider', textClass)}>
          {theme}
        </span>
        <span className="text-xs text-muted-foreground">
          {topics.length} term{topics.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Wrapping card grid */}
      <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(11rem, 1fr))' }}>
        {topics.map((topic) => {
          const catColor = CATEGORY_COLORS[topic.category]
          return (
            <button
              key={topic.id}
              onClick={() => onClickTopic(topic)}
              className="text-left rounded-lg border border-border bg-card hover:bg-accent/40 transition-colors p-3 flex flex-col gap-1.5"
            >
              {/* Category badge */}
              <span
                className={cn(
                  'self-start inline-flex items-center rounded-full border px-1.5 py-0.5 text-[9px] font-semibold',
                  catColor,
                )}
              >
                {topic.category}
              </span>
              <span className="text-sm font-semibold leading-snug text-foreground line-clamp-2">
                {topic.name}
              </span>
              <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-3">
                {topic.summary}
              </p>
            </button>
          )
        })}
      </div>
    </section>
  )
}
