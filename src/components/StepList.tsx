import Math from "@/components/Math";

interface StepListProps {
  steps: string[];
}

// Parse a step string and render inline LaTeX between $ $
function renderStep(step: string) {
  const parts = step.split(/(\$[^$]+\$)/g);
  return parts.map((part, i) => {
    if (part.startsWith("$") && part.endsWith("$")) {
      const latex = part.slice(1, -1);
      return <Math key={i} latex={latex} inline />;
    }
    return <span key={i}>{part}</span>;
  });
}

export default function StepList({ steps }: StepListProps) {
  return (
    <ol className="flex flex-col gap-3">
      {steps.map((step, i) => (
        <li
          key={i}
          className="flex gap-3 text-sm text-foreground/90 leading-relaxed"
        >
          <span className="flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-muted text-muted-foreground text-xs font-semibold mt-0.5">
            {i + 1}
          </span>
          <span>{renderStep(step)}</span>
        </li>
      ))}
    </ol>
  );
}
