import { cn } from '@/lib/utils'

interface Period {
  number: number
  label: string
  dateRange: string
}

interface PeriodTabsProps {
  periods: Period[]
  activePeriod: number
  onSelectPeriod: (n: number) => void
  /** Periods that have no content yet */
  emptyPeriods?: Set<number>
}

export default function PeriodTabs({
  periods,
  activePeriod,
  onSelectPeriod,
  emptyPeriods = new Set(),
}: PeriodTabsProps) {
  return (
    <div className="flex overflow-x-auto border-b border-border flex-shrink-0 scrollbar-hide">
      {periods.map((p) => {
        const isActive = p.number === activePeriod
        const isEmpty = emptyPeriods.has(p.number)
        return (
          <button
            key={p.number}
            onClick={() => onSelectPeriod(p.number)}
            className={cn(
              'flex flex-col items-center px-4 py-2.5 flex-shrink-0 border-b-2 transition-colors text-left',
              isActive
                ? 'border-primary text-foreground'
                : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border',
              isEmpty && !isActive && 'opacity-40'
            )}
          >
            <span className="text-xs font-semibold whitespace-nowrap">{p.label}</span>
            <span className="text-[10px] whitespace-nowrap mt-0.5">{p.dateRange}</span>
          </button>
        )
      })}
    </div>
  )
}
