import type { ApushCategory, ApushTheme } from '@/data/apush/index'
import { cn } from '@/lib/utils'

const CATEGORIES: ApushCategory[] = [
  'Events',
  'People',
  'Movements & Ideologies',
  'Legislation & Documents',
  'Court Cases',
  'Economic Concepts',
  'Foreign Policy',
]

const THEMES: ApushTheme[] = [
  'American and National Identity',
  'Work, Exchange, and Technology',
  'Geography and the Environment',
  'Migration and Settlement',
  'Politics and Power',
  'America in the World',
  'American and Regional Culture',
  'Social Structures',
]

const ESSAY_TAGS = ['DBQ frequent', 'LEQ', 'SAQ']

const CATEGORY_PILL: Record<ApushCategory, string> = {
  'People':                    'bg-blue-900/60 text-blue-300 border-blue-700 hover:bg-blue-900/80',
  'Events':                    'bg-red-900/60 text-red-300 border-red-700 hover:bg-red-900/80',
  'Legislation & Documents':   'bg-yellow-900/60 text-yellow-300 border-yellow-700 hover:bg-yellow-900/80',
  'Court Cases':               'bg-orange-900/60 text-orange-300 border-orange-700 hover:bg-orange-900/80',
  'Movements & Ideologies':    'bg-purple-900/60 text-purple-300 border-purple-700 hover:bg-purple-900/80',
  'Economic Concepts':         'bg-green-900/60 text-green-300 border-green-700 hover:bg-green-900/80',
  'Foreign Policy':            'bg-zinc-700/80 text-zinc-300 border-zinc-500 hover:bg-zinc-700',
}

const TAG_PILL: Record<string, string> = {
  'DBQ frequent': 'bg-orange-900/60 text-orange-300 border-orange-700 hover:bg-orange-900/80',
  'LEQ':          'bg-sky-900/60 text-sky-300 border-sky-700 hover:bg-sky-900/80',
  'SAQ':          'bg-teal-900/60 text-teal-300 border-teal-700 hover:bg-teal-900/80',
}

export interface ApushFilters {
  categories: Set<ApushCategory>
  themes: Set<ApushTheme>
  essayTags: Set<string>
}

interface ApushFilterBarProps {
  filters: ApushFilters
  onToggleCategory: (c: ApushCategory) => void
  onToggleTheme: (t: ApushTheme) => void
  onToggleEssayTag: (tag: string) => void
  onClearAll: () => void
}

const INACTIVE = 'bg-transparent text-muted-foreground border-border hover:border-zinc-500 hover:text-foreground'

export default function ApushFilterBar({
  filters,
  onToggleCategory,
  onToggleTheme,
  onToggleEssayTag,
  onClearAll,
}: ApushFilterBarProps) {
  const hasFilters =
    filters.categories.size > 0 || filters.themes.size > 0 || filters.essayTags.size > 0

  return (
    <div className="flex flex-col gap-2 px-6 py-3 border-b border-border flex-shrink-0">
      <div className="flex items-center gap-2 flex-wrap">
        {/* Category pills */}
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onToggleCategory(cat)}
            className={cn(
              'inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium transition-all',
              filters.categories.has(cat) ? CATEGORY_PILL[cat] : INACTIVE
            )}
          >
            {cat}
          </button>
        ))}

        <div className="w-px bg-border self-stretch mx-0.5" />

        {/* Essay tag pills */}
        {ESSAY_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => onToggleEssayTag(tag)}
            className={cn(
              'inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium transition-all',
              filters.essayTags.has(tag) ? TAG_PILL[tag] : INACTIVE
            )}
          >
            {tag}
          </button>
        ))}

        {hasFilters && (
          <>
            <div className="w-px bg-border self-stretch mx-0.5" />
            <button
              onClick={onClearAll}
              className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground hover:text-foreground transition-all"
            >
              Clear filters
            </button>
          </>
        )}
      </div>

      {/* Theme pills — second row, only if they don't fit or to separate them */}
      <div className="flex flex-wrap gap-1.5">
        {THEMES.map((theme) => (
          <button
            key={theme}
            onClick={() => onToggleTheme(theme)}
            className={cn(
              'inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium transition-all',
              filters.themes.has(theme)
                ? 'bg-indigo-900/60 text-indigo-300 border-indigo-700 hover:bg-indigo-900/80'
                : INACTIVE
            )}
          >
            {theme}
          </button>
        ))}
      </div>
    </div>
  )
}
