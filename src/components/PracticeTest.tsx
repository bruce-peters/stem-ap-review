import { useState, useMemo } from "react";
import { practiceQuestions } from "@/data/practiceTestMCQ";
import type { Subject } from "@/data/practiceTestMCQ";
import MathComp from "@/components/Math";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import {
  CheckCircle2,
  XCircle,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";

const UNIT_LABELS: Record<Subject, Record<number, string>> = {
  calcbc: {
    1: "Limits",
    2: "Derivatives",
    3: "Chain & Implicit",
    4: "Appl. of Deriv.",
    5: "Analytical Appl.",
    6: "Integration",
    7: "Diff. Equations",
    8: "Appl. of Integ.",
    9: "Parametric & Polar",
    10: "Series & Taylor",
  },
  physics: {
    1: "Kinematics",
    2: "Dynamics",
    3: "Circular Motion",
    4: "Energy",
    5: "Torque & Rotation",
    6: "Energy & Momentum",
    7: "Oscillations",
    8: "Fluids",
  },
  cs: {
    1: "Primitive Types",
    2: "Using Objects",
    3: "Boolean & If",
    4: "Iteration",
    5: "Writing Classes",
    6: "Array",
    7: "ArrayList",
    8: "2D Array",
    9: "Inheritance",
    10: "Recursion",
  },
};

function renderInline(text: string) {
  const parts = text.split(/(\$[^$]+\$)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("$") && part.endsWith("$")) {
          return <MathComp key={i} latex={part.slice(1, -1)} inline />;
        }
        // preserve newlines within question text
        return part.split("\n").map((line, j, arr) => (
          <span key={`${i}-${j}`}>
            {line}
            {j < arr.length - 1 && <br />}
          </span>
        ));
      })}
    </>
  );
}

const LETTERS = ["A", "B", "C", "D", "E"];

interface PracticeTestProps {
  subject: Subject;
  onBack: () => void;
}

export default function PracticeTest({ subject, onBack }: PracticeTestProps) {
  const { practiceAnswers: allAnswers, practiceSubmitted: allSubmitted, savePracticeState } = useAuth();
  const answers: Record<number, number> = allAnswers[subject] ?? {};
  const submitted = new Set<number>(allSubmitted[subject] ?? []);
  const unitLabels = UNIT_LABELS[subject];
  const subjectQuestions = practiceQuestions.filter((q) => q.subject === subject);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [unitFilter, setUnitFilter] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      unitFilter === null
        ? subjectQuestions
        : subjectQuestions.filter((q) => q.units.includes(unitFilter)),
    [unitFilter, subjectQuestions]
  );

  const safeIndex = Math.min(currentIndex, filtered.length - 1);
  const current = filtered[safeIndex];

  const isSubmitted = current ? submitted.has(current.id) : false;
  const userAnswer = current !== undefined ? answers[current.id] : undefined;
  const isCorrect = current ? userAnswer === current.answerIndex : false;

  const correctCount = useMemo(
    () =>
      Object.entries(answers).filter(([id, ans]) => {
        const q = subjectQuestions.find((q) => q.id === Number(id));
        return q && ans === q.answerIndex;
      }).length,
    [answers, subjectQuestions]
  );
  const answeredCount = submitted.size;

  function handleSubmit() {
    if (selected === null || !current) return;
    const newAnswers = { ...answers, [current.id]: selected };
    const newSubmitted = new Set([...submitted, current.id]);
    savePracticeState(subject, newAnswers, newSubmitted);
  }

  function goTo(idx: number) {
    const clamped = Math.max(0, Math.min(idx, filtered.length - 1));
    setCurrentIndex(clamped);
    const q = filtered[clamped];
    setSelected(q !== undefined && answers[q.id] !== undefined ? answers[q.id] : null);
  }

  function changeFilter(unit: number | null) {
    setUnitFilter(unit);
    setCurrentIndex(0);
    setSelected(null);
  }

  if (!current) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4 text-muted-foreground">
        <p>No questions match this filter.</p>
        <Button variant="outline" size="sm" onClick={() => changeFilter(null)}>
          Clear filter
        </Button>
      </div>
    );
  }

  return (
    <div className="flex h-full">
      {/* Left nav */}
      <aside className="w-56 flex-shrink-0 border-r border-border flex flex-col bg-card">
        {/* Header */}
        <div className="px-4 py-3 border-b border-border">
          <button
            onClick={onBack}
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mb-2"
          >
            <ArrowLeft className="w-3 h-3" />
            Back to topics
          </button>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            MCQ Practice
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Princeton Review — Test 1
          </p>
          <div className="mt-2 text-sm">
            <span className="text-foreground font-medium">{correctCount}</span>
            <span className="text-muted-foreground">/{answeredCount} correct</span>
            {answeredCount < subjectQuestions.length && (
              <span className="text-muted-foreground text-[11px] ml-1">
                · {subjectQuestions.length - answeredCount} left
              </span>
            )}
          </div>
        </div>

        {/* Unit filter */}
        <div className="px-3 py-2 border-b border-border">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">
            Filter by unit
          </p>
          <div className="flex flex-wrap gap-1">
            <button
              onClick={() => changeFilter(null)}
              className={cn(
                "text-[10px] px-1.5 py-0.5 rounded border transition-colors",
                unitFilter === null
                  ? "bg-primary text-primary-foreground border-primary"
                  : "text-muted-foreground border-border hover:border-zinc-500 hover:text-foreground"
              )}
            >
              All
            </button>
            {Array.from({ length: Object.keys(unitLabels).length }, (_, i) => i + 1).map((u) => {
              const hasQuestions = subjectQuestions.some((q) =>
                q.units.includes(u)
              );
              if (!hasQuestions) return null;
              return (
                <button
                  key={u}
                  onClick={() => changeFilter(u)}
                  title={unitLabels[u]}
                  className={cn(
                    "text-[10px] px-1.5 py-0.5 rounded border transition-colors",
                    unitFilter === u
                      ? "bg-primary text-primary-foreground border-primary"
                      : "text-muted-foreground border-border hover:border-zinc-500 hover:text-foreground"
                  )}
                >
                  U{u}
                </button>
              );
            })}
          </div>
          {unitFilter !== null && (
            <p className="text-[10px] text-muted-foreground mt-1.5 leading-tight">
              {unitLabels[unitFilter]} · {filtered.length} question
              {filtered.length !== 1 ? "s" : ""}
            </p>
          )}
        </div>

        {/* Question number grid */}
        <ScrollArea className="flex-1">
          <div className="p-3 grid grid-cols-5 gap-1">
            {filtered.map((q, idx) => {
              const isAns = submitted.has(q.id);
              const isCorr = answers[q.id] === q.answerIndex;
              const isCurrent = idx === safeIndex;
              return (
                <button
                  key={q.id}
                  onClick={() => goTo(idx)}
                  title={`Question ${q.id}`}
                  className={cn(
                    "h-7 w-full rounded text-[11px] font-medium transition-colors",
                    isCurrent &&
                      "ring-2 ring-primary ring-offset-1 ring-offset-card",
                    isAns && isCorr
                      ? "bg-green-700/80 text-white"
                      : isAns && !isCorr
                      ? "bg-red-700/80 text-white"
                      : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"
                  )}
                >
                  {q.id}
                </button>
              );
            })}
          </div>
        </ScrollArea>

        {/* Legend */}
        <div className="px-4 py-2 border-t border-border flex gap-3 text-[10px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-green-700/80 inline-block" />
            Correct
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-red-700/80 inline-block" />
            Wrong
          </span>
        </div>
      </aside>

      {/* Main question area */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-8 py-8">
          {/* Progress header */}
          <div className="flex items-center justify-between mb-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              Question {safeIndex + 1} of {filtered.length}
              {current.section === "B" && (
                <span className="text-[11px] bg-purple-900/40 text-purple-300 border border-purple-700/60 px-1.5 py-0.5 rounded">
                  Calculator
                </span>
              )}
            </span>
            <span>
              Score:{" "}
              <span className="text-foreground font-medium">
                {correctCount}/{answeredCount}
              </span>
            </span>
          </div>

          {/* Question */}
          <div className="text-base leading-relaxed mb-6 text-foreground">
            <span className="text-muted-foreground font-normal mr-2">
              {current.id}.
            </span>
            {renderInline(current.question)}
          </div>

          {/* Options */}
          <RadioGroup
            value={
              isSubmitted
                ? userAnswer?.toString() ?? ""
                : selected?.toString() ?? ""
            }
            onValueChange={(v) => {
              if (!isSubmitted) setSelected(Number(v));
            }}
            className="space-y-2 mb-6"
          >
            {current.options.map((opt, i) => {
              const isThisCorrect = i === current.answerIndex;
              const isThisSelected = isSubmitted ? i === userAnswer : i === selected;

              return (
                <div
                  key={i}
                  className={cn(
                    "flex items-start gap-3 rounded-lg border px-4 py-3 transition-colors overflow-x-auto",
                    isSubmitted
                      ? isThisCorrect
                        ? "border-green-600 bg-green-900/20"
                        : isThisSelected
                        ? "border-red-600 bg-red-900/20"
                        : "border-border bg-muted/20 opacity-60"
                      : isThisSelected
                      ? "border-primary/60 bg-accent/40 cursor-pointer"
                      : "border-border bg-muted/30 hover:bg-accent/20 cursor-pointer"
                  )}
                  onClick={() => !isSubmitted && setSelected(i)}
                >
                  <RadioGroupItem
                    value={i.toString()}
                    id={`q${current.id}-opt${i}`}
                    disabled={isSubmitted}
                    className="mt-0.5 flex-shrink-0"
                  />
                  <label
                    htmlFor={`q${current.id}-opt${i}`}
                    className={cn(
                      "flex items-start gap-2 text-sm leading-relaxed min-w-0",
                      isSubmitted ? "cursor-default" : "cursor-pointer"
                    )}
                  >
                    <span className="font-medium text-muted-foreground flex-shrink-0 w-5 pt-px">
                      {LETTERS[i]})
                    </span>
                    <span className="min-w-0">{renderInline(opt)}</span>
                  </label>
                </div>
              );
            })}
          </RadioGroup>

          {/* Submit / Feedback */}
          {!isSubmitted ? (
            <Button
              onClick={handleSubmit}
              disabled={selected === null}
              className="mb-6"
            >
              Submit Answer
            </Button>
          ) : (
            <Alert
              className={cn(
                "mb-6",
                isCorrect
                  ? "border-green-600 bg-green-900/10"
                  : "border-red-600 bg-red-900/10"
              )}
            >
              <div className="flex items-start gap-2">
                {isCorrect ? (
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                )}
                <AlertDescription
                  className={cn(
                    "text-sm",
                    isCorrect ? "text-green-300" : "text-red-300"
                  )}
                >
                  {isCorrect
                    ? "Correct!"
                    : `Incorrect. The correct answer is ${LETTERS[current.answerIndex]}.`}
                  {current.explanation && (
                    <p className="mt-1 text-muted-foreground">
                      {renderInline(current.explanation)}
                    </p>
                  )}
                </AlertDescription>
              </div>
            </Alert>
          )}

          {/* Navigation */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => goTo(safeIndex - 1)}
              disabled={safeIndex === 0}
              className="gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => goTo(safeIndex + 1)}
              disabled={safeIndex === filtered.length - 1}
              className="gap-1"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
