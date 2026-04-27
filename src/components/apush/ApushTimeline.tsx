import { useMemo, useState } from 'react'
import type { ApushTopic } from '@/data/apush/index'
import { apushDates } from '@/data/apush/apush-dates'
import { cn } from '@/lib/utils'

interface ApushTimelineProps {
  topics: ApushTopic[]
  onClickTopic: (topic: ApushTopic) => void
}

const PERIOD_COLORS: Record<number, string> = {
  1: 'bg-orange-500',
  2: 'bg-yellow-500',
  3: 'bg-green-500',
  4: 'bg-teal-500',
  5: 'bg-blue-500',
  6: 'bg-indigo-500',
  7: 'bg-violet-500',
  8: 'bg-pink-500',
  9: 'bg-red-500',
}

const PERIOD_TEXT_COLORS: Record<number, string> = {
  1: 'text-orange-400',
  2: 'text-yellow-400',
  3: 'text-green-400',
  4: 'text-teal-400',
  5: 'text-blue-400',
  6: 'text-indigo-400',
  7: 'text-violet-400',
  8: 'text-pink-400',
  9: 'text-red-400',
}

const PERIOD_BORDER_COLORS: Record<number, string> = {
  1: 'border-orange-500/40 hover:border-orange-500/80',
  2: 'border-yellow-500/40 hover:border-yellow-500/80',
  3: 'border-green-500/40 hover:border-green-500/80',
  4: 'border-teal-500/40 hover:border-teal-500/80',
  5: 'border-blue-500/40 hover:border-blue-500/80',
  6: 'border-indigo-500/40 hover:border-indigo-500/80',
  7: 'border-violet-500/40 hover:border-violet-500/80',
  8: 'border-pink-500/40 hover:border-pink-500/80',
  9: 'border-red-500/40 hover:border-red-500/80',
}

const PERIOD_PILL_COLORS: Record<number, string> = {
  1: 'border-orange-500/50 text-orange-400 data-[active=true]:bg-orange-500/20 data-[active=true]:border-orange-500',
  2: 'border-yellow-500/50 text-yellow-400 data-[active=true]:bg-yellow-500/20 data-[active=true]:border-yellow-500',
  3: 'border-green-500/50 text-green-400 data-[active=true]:bg-green-500/20 data-[active=true]:border-green-500',
  4: 'border-teal-500/50 text-teal-400 data-[active=true]:bg-teal-500/20 data-[active=true]:border-teal-500',
  5: 'border-blue-500/50 text-blue-400 data-[active=true]:bg-blue-500/20 data-[active=true]:border-blue-500',
  6: 'border-indigo-500/50 text-indigo-400 data-[active=true]:bg-indigo-500/20 data-[active=true]:border-indigo-500',
  7: 'border-violet-500/50 text-violet-400 data-[active=true]:bg-violet-500/20 data-[active=true]:border-violet-500',
  8: 'border-pink-500/50 text-pink-400 data-[active=true]:bg-pink-500/20 data-[active=true]:border-pink-500',
  9: 'border-red-500/50 text-red-400 data-[active=true]:bg-red-500/20 data-[active=true]:border-red-500',
}

const PERIOD_LABELS: Record<number, string> = {
  1: '1491–1607',
  2: '1607–1754',
  3: '1754–1800',
  4: '1800–1848',
  5: '1844–1877',
  6: '1865–1898',
  7: '1890–1945',
  8: '1945–1980',
  9: '1980–Present',
}

interface TimelineEntry {
  topic: ApushTopic
  year: number
}

function getDecade(year: number): number {
  return Math.floor(year / 10) * 10
}

function decadeLabel(decade: number): string {
  return `${decade}s`
}

export default function ApushTimeline({ topics, onClickTopic }: ApushTimelineProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<number | null>(null)

  // Build sorted entries — only topics that have a date
  const allEntries = useMemo<TimelineEntry[]>(() => {
    return topics
      .filter((t) => apushDates[t.id] !== undefined)
      .map((t) => ({ topic: t, year: apushDates[t.id] }))
      .sort((a, b) => a.year - b.year)
  }, [topics])

  // Which periods are present in the current (filtered) topic set
  const presentPeriods = useMemo(
    () => [...new Set(allEntries.map((e) => e.topic.period))].sort((a, b) => a - b),
    [allEntries],
  )

  // Reset selectedPeriod if it's no longer present after filter changes
  const activePeriod = selectedPeriod !== null && presentPeriods.includes(selectedPeriod)
    ? selectedPeriod
    : null

  // Entries after period filter
  const entries = useMemo<TimelineEntry[]>(
    () => (activePeriod === null ? allEntries : allEntries.filter((e) => e.topic.period === activePeriod)),
    [allEntries, activePeriod],
  )

  // Group by decade
  const decades = useMemo<Map<number, TimelineEntry[]>>(() => {
    const map = new Map<number, TimelineEntry[]>()
    for (const entry of entries) {
      const d = getDecade(entry.year)
      if (!map.has(d)) map.set(d, [])
      map.get(d)!.push(entry)
    }
    return map
  }, [entries])

  if (allEntries.length === 0) {
    return (
      <div className="flex items-center justify-center py-24 text-muted-foreground text-sm">
        No datable events match the active filters.
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-0">
      {/* Period selector */}
      <div className="flex items-center gap-2 px-6 py-3 border-b border-border flex-wrap">
        <span className="text-xs text-muted-foreground mr-1">Period</span>
        <button
          data-active={activePeriod === null}
          onClick={() => setSelectedPeriod(null)}
          className={cn(
            'px-2.5 py-0.5 rounded-full border text-xs font-medium transition-colors',
            'border-zinc-600/50 text-zinc-400',
            'data-[active=true]:bg-zinc-700/50 data-[active=true]:border-zinc-500 data-[active=true]:text-zinc-200',
            'hover:border-zinc-500 hover:text-zinc-300',
          )}
        >
          All
        </button>
        {presentPeriods.map((p) => (
          <button
            key={p}
            data-active={activePeriod === p}
            onClick={() => setSelectedPeriod(p === activePeriod ? null : p)}
            title={PERIOD_LABELS[p]}
            className={cn(
              'px-2.5 py-0.5 rounded-full border text-xs font-medium transition-colors',
              PERIOD_PILL_COLORS[p] ?? 'border-zinc-600/50 text-zinc-400',
              'hover:opacity-90',
            )}
          >
            P{p}
          </button>
        ))}
        {activePeriod !== null && (
          <span className="text-xs text-muted-foreground ml-1">
            — {PERIOD_LABELS[activePeriod]}
          </span>
        )}
      </div>

      {/* Timeline */}
      <div className="p-6 flex flex-col gap-0">
        {entries.length === 0 ? (
          <div className="flex items-center justify-center py-16 text-muted-foreground text-sm">
            No datable events for this period match the active filters.
          </div>
        ) : (
          [...decades.entries()].map(([decade, decadeEntries], decadeIdx) => (
            <div key={decade} className="flex gap-4">
              {/* Decade label + spine */}
              <div className="flex flex-col items-center w-16 shrink-0">
                <div className="text-xs font-mono text-muted-foreground pt-1 w-full text-right pr-3">
                  {decadeLabel(decade)}
                </div>
                <div
                  className={cn(
                    'w-px flex-1 mt-1',
                    decadeIdx === [...decades.keys()].length - 1
                      ? 'bg-transparent'
                      : 'bg-border',
                  )}
                />
              </div>

              {/* Cards in this decade */}
              <div className="flex flex-col gap-2 pb-6 flex-1 min-w-0">
                {decadeEntries.map((entry) => (
                  <TimelineCard
                    key={entry.topic.id}
                    entry={entry}
                    onClick={() => onClickTopic(entry.topic)}
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

function TimelineCard({
  entry,
  onClick,
}: {
  entry: TimelineEntry
  onClick: () => void
}) {
  const { topic, year } = entry
  const dotColor = PERIOD_COLORS[topic.period] ?? 'bg-zinc-500'
  const textColor = PERIOD_TEXT_COLORS[topic.period] ?? 'text-zinc-400'
  const borderColor =
    PERIOD_BORDER_COLORS[topic.period] ?? 'border-zinc-700/40 hover:border-zinc-700/80'

  return (
    <button
      onClick={onClick}
      className={cn(
        'group text-left w-full rounded-lg border bg-zinc-900 px-3 py-2.5 transition-colors',
        borderColor,
      )}
    >
      <div className="flex items-start gap-2.5">
        {/* Dot */}
        <div
          className={cn('w-2 h-2 rounded-full mt-1.5 shrink-0', dotColor)}
          aria-hidden
        />
        <div className="flex-1 min-w-0">
          {/* Year + period */}
          <div className="flex items-center gap-2 mb-0.5">
            <span className={cn('text-xs font-mono font-medium', textColor)}>{year}</span>
            <span className="text-xs text-muted-foreground/60">{topic.periodLabel}</span>
          </div>
          {/* Name */}
          <p className="text-sm font-medium text-foreground leading-snug truncate">
            {topic.name}
          </p>
          {/* Summary */}
          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2 leading-relaxed">
            {topic.summary}
          </p>
          {/* Category badge */}
          <span className="inline-block mt-1.5 text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700/50">
            {topic.category}
          </span>
        </div>
      </div>
    </button>
  )
}
