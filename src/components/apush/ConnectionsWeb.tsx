import { useRef, useEffect, useMemo, useCallback } from 'react'
import ForceGraph from 'force-graph'
import type { NodeObject, LinkObject } from 'force-graph'
import type { ApushTopic, ApushCategory } from '@/data/apush/index'
import { apushTopics } from '@/data/apush/index'

// ─── Types ───────────────────────────────────────────────────────────────────

interface GNodeData {
  name: string
  category: ApushCategory
  period: number
  isCurrentPeriod: boolean
  degree: number
}

type GNode = NodeObject & GNodeData
type GLink = LinkObject<GNode>

// ─── Category colours (hex for canvas rendering) ─────────────────────────────

const CATEGORY_HEX: Record<ApushCategory, string> = {
  People:                    '#3b82f6',
  Events:                    '#ef4444',
  'Legislation & Documents': '#eab308',
  'Court Cases':             '#f97316',
  'Movements & Ideologies':  '#a855f7',
  'Economic Concepts':       '#22c55e',
  'Foreign Policy':          '#a1a1aa',
}

const CATEGORY_ORDER: ApushCategory[] = [
  'People',
  'Events',
  'Movements & Ideologies',
  'Legislation & Documents',
  'Court Cases',
  'Economic Concepts',
  'Foreign Policy',
]

// ─── Component ───────────────────────────────────────────────────────────────

interface ConnectionsWebProps {
  /** All topics for the active period (unfiltered so the graph is complete) */
  periodTopics: ApushTopic[]
  onNodeClick: (topic: ApushTopic) => void
}

export default function ConnectionsWeb({ periodTopics, onNodeClick }: ConnectionsWebProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const graphRef = useRef<any>(null)
  const hasZoomed = useRef(false)
  // Keep the callback in a ref so the graph's onclick handler always uses the latest version
  const onNodeClickRef = useRef(onNodeClick)
  onNodeClickRef.current = onNodeClick

  // Stable map of all topics
  const topicMap = useMemo(() => new Map(apushTopics.map((t) => [t.id, t])), [])

  // ── Graph data ────────────────────────────────────────────────────────────
  const graphData = useMemo(() => {
    const primaryIds = new Set(periodTopics.map((t) => t.id))
    const degree = new Map<string, number>()
    const secondaryIds = new Set<string>()

    for (const t of periodTopics) {
      for (const cid of t.connections) {
        if (!topicMap.has(cid)) continue
        if (!primaryIds.has(cid)) secondaryIds.add(cid)
        degree.set(t.id, (degree.get(t.id) ?? 0) + 1)
        degree.set(cid, (degree.get(cid) ?? 0) + 1)
      }
    }

    const makeNode = (t: ApushTopic, isCurrentPeriod: boolean): GNode => ({
      id: t.id,
      name: t.name,
      category: t.category,
      period: t.period,
      isCurrentPeriod,
      degree: degree.get(t.id) ?? 0,
    })

    const nodes: GNode[] = [
      ...periodTopics.map((t) => makeNode(t, true)),
      ...[...secondaryIds].map((id) => makeNode(topicMap.get(id)!, false)),
    ]

    const nodeSet = new Set(nodes.map((n) => n.id as string))
    const seen = new Set<string>()
    const links: GLink[] = []

    for (const t of periodTopics) {
      for (const cid of t.connections) {
        if (!nodeSet.has(cid)) continue
        const key = [t.id, cid].sort().join('\x00')
        if (!seen.has(key)) {
          seen.add(key)
          links.push({ source: t.id, target: cid })
        }
      }
    }

    return { nodes, links }
  }, [periodTopics, topicMap])

  // ── Canvas rendering ──────────────────────────────────────────────────────
  const paintNode = useCallback(
    (node: GNode, ctx: CanvasRenderingContext2D, globalScale: number) => {
      const { x, y, name, category, isCurrentPeriod, degree } = node as GNode & {
        x: number
        y: number
      }

      // Skip until D3 has assigned finite coordinates
      if (!Number.isFinite(x) || !Number.isFinite(y)) return

      const color = CATEGORY_HEX[category as ApushCategory] ?? '#71717a'
      const r = Math.max(3, 2 + (degree ?? 0) * 2.2)
      const alpha = isCurrentPeriod ? 1 : 0.35

      ctx.save()
      ctx.globalAlpha = alpha

      // Soft glow for highly-connected primary nodes
      if (isCurrentPeriod && r > 4) {
        const grd = ctx.createRadialGradient(x, y, r * 0.4, x, y, r * 3)
        grd.addColorStop(0, color + '55')
        grd.addColorStop(1, color + '00')
        ctx.beginPath()
        ctx.arc(x, y, r * 3, 0, 2 * Math.PI)
        ctx.fillStyle = grd
        ctx.fill()
      }

      // Node body
      ctx.beginPath()
      ctx.arc(x, y, r, 0, 2 * Math.PI)
      ctx.fillStyle = color
      ctx.fill()

      // Thin white rim
      ctx.strokeStyle = 'rgba(255,255,255,0.2)'
      ctx.lineWidth = 0.5 / globalScale
      ctx.stroke()

      // Label — always visible, drawn above the node
      {
        const fontSize = Math.max(7, 9 / globalScale)
        ctx.font = `${fontSize}px system-ui, sans-serif`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'bottom'
        ctx.shadowColor = '#000000'
        ctx.shadowBlur = 4
        ctx.fillStyle = isCurrentPeriod ? '#f4f4f5' : '#a1a1aa'
        const maxLen = 24
        const label = (name?.length ?? 0) > maxLen ? name!.slice(0, maxLen - 1) + '…' : (name ?? '')
        ctx.fillText(label, x, y - r - 2)
        ctx.shadowBlur = 0
      }

      ctx.restore()
    },
    [],
  )

  const paintPointer = useCallback(
    (node: GNode, color: string, ctx: CanvasRenderingContext2D) => {
      const { x, y, degree } = node as GNode & { x: number; y: number }
      if (!Number.isFinite(x) || !Number.isFinite(y)) return
      const r = Math.max(3, 2 + (degree ?? 0) * 2.2) + 3
      ctx.beginPath()
      ctx.arc(x, y, r, 0, 2 * Math.PI)
      ctx.fillStyle = color
      ctx.fill()
    },
    [],
  )

  // ── Initialise the graph once on mount ───────────────────────────────────
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const fg = new ForceGraph<GNode>(el)
      .backgroundColor('#09090b')
      .nodeLabel('name')
      .nodeCanvasObject(paintNode as Parameters<typeof fg.nodeCanvasObject>[0])
      .nodeCanvasObjectMode(() => 'replace')
      .nodePointerAreaPaint(paintPointer as Parameters<typeof fg.nodePointerAreaPaint>[0])
      .linkColor(() => '#3f3f46')
      .linkWidth(1)
      .warmupTicks(80)
      .cooldownTicks(200)
      .d3AlphaDecay(0.018)
      .d3VelocityDecay(0.28)
      .enableNodeDrag(true)
      .enableZoomInteraction(true)
      .enablePanInteraction(true)
      .onNodeClick((node) => {
        const topic = topicMap.get(node.id as string)
        if (topic) onNodeClickRef.current(topic)
      })
      .onEngineStop(() => {
        if (!hasZoomed.current) {
          hasZoomed.current = true
          fg.zoomToFit(400, 60)
        }
      })

    // Stronger repulsion + tuned link spring for visible clusters
    fg.d3Force('charge')?.strength(-220)
    ;(fg.d3Force('link') as any)?.distance(80).strength(0.5)

    graphRef.current = fg

    return () => {
      fg._destructor()
      graphRef.current = null
    }
    // paintNode/paintPointer/topicMap are all stable; no need to re-create graph on change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ── Push updated data when it changes ────────────────────────────────────
  useEffect(() => {
    const fg = graphRef.current
    if (!fg) return
    hasZoomed.current = false
    fg.graphData(graphData)
    // Re-apply forces after data change (force-graph resets them on graphData())
    fg.d3Force('charge')?.strength(-220)
    ;(fg.d3Force('link') as any)?.distance(80).strength(0.5)
    fg.d3ReheatSimulation()
  }, [graphData])

  // ── Resize observer ───────────────────────────────────────────────────────
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect
      if (width > 0 && height > 0 && graphRef.current) {
        graphRef.current.width(width).height(height)
      }
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div ref={containerRef} className="relative w-full h-full">
      {/* Legend */}
      <div className="absolute top-3 right-3 z-10 rounded-lg border border-border bg-card/85 backdrop-blur-sm p-3 flex flex-col gap-1.5 select-none pointer-events-none">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
          Category
        </p>
        {CATEGORY_ORDER.map((cat) => (
          <div key={cat} className="flex items-center gap-2">
            <span
              className="inline-block w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: CATEGORY_HEX[cat] }}
            />
            <span className="text-[11px] text-muted-foreground">{cat}</span>
          </div>
        ))}
        <div className="mt-1.5 pt-1.5 border-t border-border space-y-1">
          <p className="text-[10px] text-muted-foreground/50">◦ faded = cross-period</p>
          <p className="text-[10px] text-muted-foreground/50">node size = connections</p>
        </div>
      </div>

      {/* Hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
        <p className="text-[11px] text-muted-foreground/50 select-none">
          Drag nodes · scroll to zoom · click to open
        </p>
      </div>
    </div>
  )
}
