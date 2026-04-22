import { Mafs, Coordinates, Plot } from "mafs";
import "mafs/core.css";
import type { GraphConfig } from "@/types";

// Hex values matching Mafs CSS variables from core.css
const COLORS: Record<string, string> = {
  blue: "#58a6ff",
  red: "#f11d0e",
  green: "#15e272",
  orange: "#f14e0e",
  yellow: "#ffe44a",
  violet: "#ae58ff",
  pink: "#ee00ab",
  indigo: "#7c58ff",
  cyan: "#22d3ee",
  white: "#e4e4e7",
  teal: "#2dd4bf",
};

const AUTO_COLORS = [
  "#58a6ff",
  "#f11d0e",
  "#15e272",
  "#f14e0e",
  "#ffe44a",
  "#ae58ff",
];

const MATH_VARS = `const {sin,cos,tan,asin,acos,atan,sqrt,abs,PI,E,exp,log,pow,min,max,sign,floor,ceil} = Math;`;

function compileFn(expr: string): (x: number) => number {
  try {
    // eslint-disable-next-line no-new-func
    const raw = new Function(
      "x",
      `${MATH_VARS} try { const v = +(${expr}); return isFinite(v) ? v : NaN; } catch { return NaN; }`
    ) as (x: number) => number;
    return raw;
  } catch {
    return () => 0;
  }
}

function compileXY(expr: string): (t: number) => [number, number] {
  try {
    // eslint-disable-next-line no-new-func
    return new Function("t", `${MATH_VARS} return (${expr})`) as (
      t: number
    ) => [number, number];
  } catch {
    return () => [0, 0];
  }
}

function resolveColor(color: string | undefined, index: number): string {
  if (!color) return AUTO_COLORS[index % AUTO_COLORS.length];
  return COLORS[color] ?? color;
}

export default function GraphBlock({ graph }: { graph: GraphConfig }) {
  const xDomain = graph.xDomain ?? [-4, 4];
  const yDomain = graph.yDomain ?? [-2.5, 2.5];

  return (
    <div className="rounded-lg overflow-hidden border border-border">
      <div className="[&_.MafsView]:rounded-none">
        <Mafs
          viewBox={{
            x: xDomain as [number, number],
            y: yDomain as [number, number],
          }}
          preserveAspectRatio={false}
          height={220}
        >
          <Coordinates.Cartesian />

          {graph.type === "fns" &&
            graph.fns?.map((spec, i) => {
              const fn = compileFn(spec.fn);
              const color = resolveColor(spec.color, i);
              return <Plot.OfX key={i} y={fn} color={color} />;
            })}

          {graph.type === "parametric" && graph.xy && (
            <Plot.Parametric
              xy={compileXY(graph.xy)}
              t={graph.tDomain ?? [0, 2 * Math.PI]}
              color={COLORS.blue}
            />
          )}
        </Mafs>
      </div>

      {graph.type === "fns" && graph.fns?.some((f) => f.label) && (
        <div className="flex flex-wrap gap-x-4 gap-y-1 px-3 py-2 bg-muted/10 border-t border-border">
          {graph.fns?.map((spec, i) => {
            if (!spec.label) return null;
            const color = resolveColor(spec.color, i);
            return (
              <div
                key={i}
                className="flex items-center gap-1.5 text-xs text-muted-foreground"
              >
                <div
                  className="w-4 h-0.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: color }}
                />
                <span>{spec.label}</span>
              </div>
            );
          })}
        </div>
      )}

      {graph.note && (
        <p className="px-3 py-2 text-xs text-muted-foreground/70 bg-muted/5 border-t border-border italic leading-relaxed">
          {graph.note}
        </p>
      )}
    </div>
  );
}
