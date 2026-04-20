import katex from "katex";

interface MathProps {
  latex: string;
  inline?: boolean;
}

export default function Math({ latex, inline = false }: MathProps) {
  let html = "";
  let error = false;

  try {
    html = katex.renderToString(latex, {
      displayMode: !inline,
      throwOnError: false,
      strict: false,
    });
  } catch {
    error = true;
    html = `<span style="color:hsl(0 62.8% 50%)">${latex}</span>`;
  }

  if (inline) {
    return (
      <span
        className={error ? "text-destructive font-mono text-sm" : ""}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <div
      className={`katex-display-wrapper overflow-x-auto py-1 ${
        error ? "text-destructive font-mono text-sm" : ""
      }`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
