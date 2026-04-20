import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import java from "react-syntax-highlighter/dist/esm/languages/hljs/java";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

SyntaxHighlighter.registerLanguage("java", java);

interface CodeBlockProps {
  code: string;
  inline?: boolean;
}

export default function CodeBlock({ code, inline = false }: CodeBlockProps) {
  if (inline) {
    return (
      <SyntaxHighlighter
        language="java"
        style={atomOneDark}
        customStyle={{
          display: "inline",
          padding: "2px 6px",
          borderRadius: "4px",
          fontSize: "0.8rem",
          background: "transparent",
        }}
        PreTag="span"
        CodeTag="span"
      >
        {code}
      </SyntaxHighlighter>
    );
  }

  return (
    <SyntaxHighlighter
      language="java"
      style={atomOneDark}
      customStyle={{
        borderRadius: "8px",
        fontSize: "0.8rem",
        padding: "12px 16px",
        margin: 0,
        background: "hsl(var(--muted) / 0.6)",
      }}
      showLineNumbers={false}
      wrapLongLines={false}
    >
      {code}
    </SyntaxHighlighter>
  );
}
