import { useState, useMemo, useCallback } from 'react'
import type { ApushTopic, ApushCategory, ApushTheme } from '@/data/apush/index'
import { apushTopics, apushPeriods } from '@/data/apush/index'
import PeriodTabs from './PeriodTabs'
import CategorySection from './CategorySection'
import ThemeSection from './ThemeSection'
import ApushSheet from './ApushSheet'
import ApushFilterBar, { type ApushFilters } from './ApushFilterBar'
import { BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'

const CATEGORY_ORDER: ApushCategory[] = [
  'Events',
  'People',
  'Movements & Ideologies',
  'Legislation & Documents',
  'Court Cases',
  'Economic Concepts',
  'Foreign Policy',
]

const THEME_ORDER: ApushTheme[] = [
  'American and National Identity',
  'Work, Exchange, and Technology',
  'Geography and the Environment',
  'Migration and Settlement',
  'Politics and Power',
  'America in the World',
  'American and Regional Culture',
  'Social Structures',
]

type GroupBy = 'category' | 'theme'

/** Periods that have data loaded */
const POPULATED_PERIODS = new Set(apushTopics.map((t) => t.period))
const EMPTY_PERIODS = new Set(
  apushPeriods.map((p) => p.number).filter((n) => !POPULATED_PERIODS.has(n))
)

function EmptyPeriod({ periodLabel }: { periodLabel: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full py-24 px-8 gap-4">
      <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center">
        <BookOpen className="w-8 h-8 text-muted-foreground" />
      </div>
      <div className="text-center">
        <p className="text-foreground font-medium">Coming soon</p>
        <p className="text-muted-foreground text-sm mt-1">
          Content for {periodLabel} hasn't been added yet.
        </p>
      </div>
    </div>
  )
}

export default function ApushTab() {
  const [activePeriod, setActivePeriod] = useState(1)
  const [openTopic, setOpenTopic] = useState<ApushTopic | null>(null)
  const [sheetOpen, setSheetOpen] = useState(false)
  const [groupBy, setGroupBy] = useState<GroupBy>('category')
  const [filters, setFilters] = useState<ApushFilters>({
    categories: new Set(),
    themes: new Set(),
    essayTags: new Set(),
  })

  // Filtered topics for the active period
  const periodTopics = useMemo(() => {
    let result = apushTopics.filter((t) => t.period === activePeriod)
    if (filters.categories.size > 0) {
      result = result.filter((t) => filters.categories.has(t.category))
    }
    if (filters.themes.size > 0) {
      result = result.filter((t) =>
        [...filters.themes].some((theme) => t.themes.includes(theme as ApushTheme))
      )
    }
    if (filters.essayTags.size > 0) {
      result = result.filter((t) =>
        [...filters.essayTags].some((tag) => t.tags.includes(tag))
      )
    }
    return result
  }, [activePeriod, filters])

  // Group by category in the specified order
  const grouped = useMemo(() => {
    const map = new Map<ApushCategory, ApushTopic[]>()
    for (const cat of CATEGORY_ORDER) {
      const items = periodTopics.filter((t) => t.category === cat)
      if (items.length > 0) map.set(cat, items)
    }
    return map
  }, [periodTopics])

  // Group by theme (topics can appear in multiple themes)
  const groupedByTheme = useMemo(() => {
    const map = new Map<ApushTheme, ApushTopic[]>()
    for (const theme of THEME_ORDER) {
      const items = periodTopics.filter((t) => t.themes.includes(theme))
      if (items.length > 0) map.set(theme, items)
    }
    return map
  }, [periodTopics])

  const openCard = useCallback((topic: ApushTopic) => {
    setOpenTopic(topic)
    setSheetOpen(true)
  }, [])

  // Navigate to a connected term by id
  const handleNavigateTo = useCallback((id: string) => {
    const target = apushTopics.find((t) => t.id === id)
    if (target) {
      // Switch to that period if needed
      setActivePeriod(target.period)
      setOpenTopic(target)
      setSheetOpen(true)
    }
  }, [])

  const toggleCategory = useCallback((cat: ApushCategory) => {
    setFilters((prev) => {
      const next = new Set(prev.categories)
      next.has(cat) ? next.delete(cat) : next.add(cat)
      return { ...prev, categories: next }
    })
  }, [])

  const toggleTheme = useCallback((theme: ApushTheme) => {
    setFilters((prev) => {
      const next = new Set(prev.themes)
      next.has(theme) ? next.delete(theme) : next.add(theme)
      return { ...prev, themes: next }
    })
  }, [])

  const toggleEssayTag = useCallback((tag: string) => {
    setFilters((prev) => {
      const next = new Set(prev.essayTags)
      next.has(tag) ? next.delete(tag) : next.add(tag)
      return { ...prev, essayTags: next }
    })
  }, [])

  const clearFilters = useCallback(() => {
    setFilters({ categories: new Set(), themes: new Set(), essayTags: new Set() })
  }, [])

  const currentPeriodInfo = apushPeriods.find((p) => p.number === activePeriod)!
  const isEmpty = EMPTY_PERIODS.has(activePeriod)
  const activeGrouped = groupBy === 'category' ? grouped : groupedByTheme
  const hasResults = activeGrouped.size > 0

  return (
    <>
      {/* Period tabs */}
      <PeriodTabs
        periods={apushPeriods}
        activePeriod={activePeriod}
        onSelectPeriod={(n) => {
          setActivePeriod(n)
          clearFilters()
        }}
        emptyPeriods={EMPTY_PERIODS}
      />

      {/* Filter bar */}
      {!isEmpty && (
        <ApushFilterBar
          filters={filters}
          onToggleCategory={toggleCategory}
          onToggleTheme={toggleTheme}
          onToggleEssayTag={toggleEssayTag}
          onClearAll={clearFilters}
        />
      )}

      {/* Main content area */}
      <div className="flex-1 min-h-0 overflow-y-auto">
        {isEmpty ? (
          <EmptyPeriod periodLabel={`${currentPeriodInfo.label}: ${currentPeriodInfo.dateRange}`} />
        ) : !hasResults ? (
          <div className="flex flex-col items-center justify-center py-24 text-muted-foreground gap-2">
            <p className="text-sm">No terms match the active filters.</p>
            <button
              onClick={clearFilters}
              className="text-xs underline text-muted-foreground hover:text-foreground"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="p-6 flex flex-col gap-8">
            {/* Group-by toggle */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Group by</span>
              <div className="flex rounded-md border border-border overflow-hidden">
                <button
                  onClick={() => setGroupBy('category')}
                  className={cn(
                    'px-3 py-1 text-xs font-medium transition-colors',
                    groupBy === 'category'
                      ? 'bg-accent text-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/40',
                  )}
                >
                  Term type
                </button>
                <button
                  onClick={() => setGroupBy('theme')}
                  className={cn(
                    'px-3 py-1 text-xs font-medium transition-colors border-l border-border',
                    groupBy === 'theme'
                      ? 'bg-accent text-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/40',
                  )}
                >
                  Theme
                </button>
              </div>
            </div>

            {/* Sections */}
            {groupBy === 'category'
              ? [...grouped.entries()].map(([category, topics]) => (
                  <CategorySection
                    key={category}
                    category={category}
                    topics={topics}
                    onClickTopic={openCard}
                  />
                ))
              : [...groupedByTheme.entries()].map(([theme, topics]) => (
                  <ThemeSection
                    key={theme}
                    theme={theme}
                    topics={topics}
                    onClickTopic={openCard}
                  />
                ))}
          </div>
        )}
      </div>

      {/* Detail sheet */}
      <ApushSheet
        topic={openTopic}
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        onNavigateTo={handleNavigateTo}
      />
    </>
  )
}
