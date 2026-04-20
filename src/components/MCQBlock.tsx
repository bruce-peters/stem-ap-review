import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, XCircle } from "lucide-react";
import Math from "@/components/Math";

interface MCQ {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

interface MCQBlockProps {
  mcqs: MCQ[];
  onComplete?: (score: number, total: number) => void;
}

function renderInline(text: string) {
  const parts = text.split(/(\$[^$]+\$)/g);
  return parts.map((part, i) => {
    if (part.startsWith("$") && part.endsWith("$")) {
      return <Math key={i} latex={part.slice(1, -1)} inline />;
    }
    return <span key={i}>{part}</span>;
  });
}

export default function MCQBlock({ mcqs, onComplete }: MCQBlockProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [scores, setScores] = useState<boolean[]>([]);
  const [done, setDone] = useState(false);

  const current = mcqs[currentIndex];
  const isCorrect =
    submitted &&
    selected !== null &&
    parseInt(selected) === current.answerIndex;

  function handleSubmit() {
    if (selected === null) return;
    setSubmitted(true);
  }

  function handleNext() {
    const correct = parseInt(selected ?? "-1") === current.answerIndex;
    const newScores = [...scores, correct];
    setScores(newScores);

    if (currentIndex + 1 >= mcqs.length) {
      setDone(true);
      onComplete?.(newScores.filter(Boolean).length, mcqs.length);
    } else {
      setCurrentIndex(currentIndex + 1);
      setSelected(null);
      setSubmitted(false);
    }
  }

  if (done) {
    const total = mcqs.length;
    const correct = scores.filter(Boolean).length;
    return (
      <div className="flex flex-col items-center gap-3 py-4">
        <div className="text-4xl font-bold text-foreground">
          {correct}/{total}
        </div>
        <p className="text-muted-foreground text-sm">
          {correct === total
            ? "Perfect score! 🎉"
            : correct >= total / 2
            ? "Good work! Review the ones you missed."
            : "Keep practicing — you'll get there."}
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setCurrentIndex(0);
            setSelected(null);
            setSubmitted(false);
            setScores([]);
            setDone(false);
          }}
        >
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          Question {currentIndex + 1} of {mcqs.length}
        </span>
        <span className="text-xs text-muted-foreground">
          {scores.filter(Boolean).length} correct so far
        </span>
      </div>

      <p className="text-sm font-medium leading-relaxed">
        {renderInline(current.question)}
      </p>

      <RadioGroup
        value={selected ?? ""}
        onValueChange={(val) => {
          if (!submitted) setSelected(val);
        }}
        className="flex flex-col gap-2"
      >
        {current.options.map((opt, i) => {
          let optClass = "border-border bg-muted/30";
          if (submitted) {
            if (i === current.answerIndex)
              optClass = "border-green-600 bg-green-900/30";
            else if (i === parseInt(selected ?? "-1"))
              optClass = "border-red-600 bg-red-900/30";
          } else if (selected === String(i)) {
            optClass = "border-primary/60 bg-accent/40";
          }

          return (
            <label
              key={i}
              className={`flex items-center gap-3 rounded-md border px-3 py-2.5 cursor-pointer transition-colors text-sm ${optClass}`}
            >
              <RadioGroupItem
                value={String(i)}
                id={`opt-${i}`}
                disabled={submitted}
              />
              <span>{renderInline(opt)}</span>
            </label>
          );
        })}
      </RadioGroup>

      {submitted && (
        <Alert
          className={
            isCorrect
              ? "border-green-700 bg-green-900/20"
              : "border-red-700 bg-red-900/20"
          }
        >
          {isCorrect ? (
            <CheckCircle2 className="h-4 w-4 text-green-400" />
          ) : (
            <XCircle className="h-4 w-4 text-red-400" />
          )}
          <AlertTitle className={isCorrect ? "text-green-300" : "text-red-300"}>
            {isCorrect ? "Correct!" : "Incorrect"}
          </AlertTitle>
          <AlertDescription className="text-sm text-muted-foreground leading-relaxed mt-1">
            {renderInline(current.explanation)}
          </AlertDescription>
        </Alert>
      )}

      <div className="flex gap-2">
        {!submitted ? (
          <Button size="sm" onClick={handleSubmit} disabled={selected === null}>
            Submit
          </Button>
        ) : (
          <Button size="sm" onClick={handleNext}>
            {currentIndex + 1 < mcqs.length ? "Next Question →" : "See Score"}
          </Button>
        )}
      </div>
    </div>
  );
}
