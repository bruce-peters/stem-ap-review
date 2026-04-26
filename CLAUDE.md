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

## Content: AP US History (APUSH)

### Why APUSH schema is different
APUSH terms are not self-contained — their exam value comes from significance and connections.
A term without its historical significance is useless. Every item must have both.

### APUSH-Specific Topic Schema
type ApushTopic = {
  id: string
  name: string
  period: number                    // 1–9
  periodLabel: string               // e.g. "Period 3: 1754–1800"
  category: ApushCategory
  tags: string[]                    // subset of essay relevance tags below
  summary: string                   // one sentence: what it is
  significance: string              // 2–3 sentences: WHY it matters for the exam — cause/effect, what changed
  context: string                   // where it fits: what came before, what came after
  themes: ApushTheme[]              // which of the 8 APUSH themes it connects to
  connections: string[]             // IDs of related terms (people, events, movements it links to)
  mcqs?: {
    question: string
    options: string[]
    answerIndex: number
    explanation: string
  }[]
}

type ApushCategory =
  | "People"
  | "Events"
  | "Legislation & Documents"
  | "Court Cases"
  | "Movements & Ideologies"
  | "Economic Concepts"
  | "Foreign Policy"

type ApushTheme =
  | "American and National Identity"
  | "Work, Exchange, and Technology"
  | "Geography and the Environment"
  | "Migration and Settlement"
  | "Politics and Power"
  | "America in the World"
  | "American and Regional Culture"
  | "Social Structures"

// Essay relevance tags
// "DBQ frequent" | "LEQ" | "SAQ" | "causation" | "continuity-and-change" | "comparison"

### File Structure for APUSH
src/data/apush/
  index.ts          # re-exports all periods, exports apushTopics and apushPeriods
  p1.ts             # Period 1: 1491–1607
  p2.ts             # Period 2: 1607–1754
  p3.ts             # Period 3: 1754–1800
  p4.ts             # Period 4: 1800–1848
  p5.ts             # Period 5: 1844–1877
  p6.ts             # Period 6: 1865–1898
  p7.ts             # Period 7: 1890–1945
  p8.ts             # Period 8: 1945–1980
  p9.ts             # Period 9: 1980–Present

### UI Behavior for APUSH
- Top-level: Period tabs (Period 1 through Period 9, each with date range)
- Within a period: category section headers (People / Events / Legislation & Documents / etc.)
  with a visual divider between each category
- Cards show: term name, category badge, summary
- Clicking opens Sheet with: significance, context, themes as pills, connections as clickable links,
  MCQs at the bottom
- Connections should be clickable — clicking one navigates to that term's Sheet
- Filter bar: filter by category, theme, and essay tag within the current period

---
