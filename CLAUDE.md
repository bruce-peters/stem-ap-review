# AP Study App — Project Spec

## Project Overview

React + Vite + TypeScript study app. shadcn/ui + Tailwind. KaTeX for math rendering. No backend — all content is static TypeScript data files. Deploy target: Vercel.

## Stack

- React 18 + Vite + TypeScript
- shadcn/ui (zinc/slate dark theme)
- Tailwind CSS
- KaTeX (npm, not CDN)
- No backend, no database

## File Structure

src/
data/
calcbc.ts # AP Calc BC content
physics.ts # placeholder
cs.ts # placeholder
components/
Math.tsx # reusable KaTeX wrapper (<Math inline /> and <Math block />)
SubjectTabs.tsx
UnitSidebar.tsx
TopicCard.tsx
TopicSheet.tsx # shadcn Sheet, slides in from right on card click
MCQBlock.tsx
StepList.tsx
App.tsx

## Data Schema

Every item in every data file must match this TypeScript type exactly:

```ts
type Topic = {
  id: string; // kebab-case unique id
  name: string; // display name
  unit: string; // e.g. "Unit 3: Differentiation Rules"
  unitNumber: number; // 1–8
  tags: string[]; // subset of: "MCQ frequent" | "FRQ" | "BC only" | "calculator active" | "theorem"
  summary: string; // one sentence max
  formula?: string; // LaTeX string, no $$ delimiters
  description: string; // 2–3 sentence conceptual explanation, plain English
  steps?: string[]; // numbered how-to, each step is a plain string (LaTeX allowed inline with $ $)
  examples?: {
    problem: string;
    solution: string;
  }[];
  mcqs?: {
    question: string;
    options: string[]; // always exactly 4
    answerIndex: number; // 0-indexed
    explanation: string; // why the answer is correct and why distractors are wrong
  }[];
};
```

## UI Behavior Notes

- Subject tabs at top: Calc BC / Physics / CS
- Left sidebar: unit list, filters cards on click
- Main area: card grid showing name + summary + formula preview
- Clicking a card opens a shadcn Sheet from the right containing:
  - Full description
  - Formula (KaTeX block)
  - Step-by-step list
  - Worked examples
  - MCQ section: shadcn RadioGroup, submit button, reveal answer with shadcn Alert (green/red) + explanation
- Search bar filters across all units and subjects
- Tag filter pills below search bar

---
