# AP Study

A personal study tool for AP Calc BC, AP Physics C (Mechanics), AP Computer Science A, and AP US History. It organizes every testable topic into a searchable card grid, and lets you drill formulas, worked examples, and multiple-choice questions in one place.

## What it does

Studying for AP exams usually means juggling a textbook, a formula sheet, and a separate practice problem set. This app combines all three. Every topic has a summary card in the main grid. Clicking a card opens a detail panel with the formula rendered in proper math notation, a step-by-step method, worked examples, and multiple-choice questions with scored feedback. For AP US History, topics are organized by period and category, with a connections web and timeline view that show how terms relate across the course.

## Features

- Four subjects: Calc BC, Physics C (Mechanics), CS A, APUSH
- Searchable card grid filtered by unit, tag, and review status
- Topic detail panel (slides in from right) with formula, steps, examples, and MCQs
- KaTeX math rendering for all formulas and inline math
- Syntax-highlighted code blocks for CS topics
- Interactive graph viewer for APUSH term connections (force-directed web)
- Chronological timeline view across all APUSH periods
- Star and mark-as-reviewed tracking, saved in the browser with localStorage
- Per-unit notes sidebar
- MCQ practice test mode with scored answers and explanations

## How it works

```
App
 ProgressProvider (progress state, saved to localStorage)
  SubjectTabs (top nav: Calc BC / Physics / CS / APUSH)
   UnitSidebar          -- left sidebar, filters by unit
   TopicCard grid       -- main content area
   TopicSheet           -- right-side detail panel (shadcn Sheet)
     Math               -- KaTeX renderer
     MCQBlock           -- radio group + scored feedback
   NotesSidebar         -- right-side notes panel
   PracticeTest         -- full MCQ drill mode
   ApushTab             -- APUSH-specific layout
     PeriodTabs         -- Period 1-9 navigation
     CategorySection    -- groups by People / Events / Legislation / etc.
     ThemeSection       -- groups by the 8 APUSH themes
     ConnectionsWeb     -- force-graph of term connections
     ApushTimeline      -- chronological view across all periods
     ApushSheet         -- APUSH detail panel (significance, context, themes, connections)
```

All content is static TypeScript data files compiled into the bundle. No server or API calls are made. User progress (starred, reviewed, notes, practice answers) is saved in the browser with localStorage, so there is no login.

## Tech stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 8 |
| Language | TypeScript |
| UI components | shadcn/ui (Radix UI primitives) |
| Styling | Tailwind CSS |
| Math rendering | KaTeX |
| Code highlighting | react-syntax-highlighter |
| Graph visualization | force-graph |
| Math graphing | Mafs |
| Persistence | localStorage |
| Deploy target | Vercel |

## Getting started

**Prerequisites:** Node.js 18+, npm

```bash
# Clone and install
git clone <repo-url>
cd stem-ap-review
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## Usage

Open `http://localhost:5173` after running `npm run dev`. Select a subject tab at the top. Use the left sidebar to filter by unit. Click any card to open the detail panel. For APUSH, use the period tabs and switch between "Term type", "Theme", "Web", and "Timeline" views.

## Project structure

```
src/
  App.tsx                   -- root; wraps the app in ProgressProvider
  main.tsx                  -- entry point
  types.ts                  -- Topic type shared by Calc/Physics/CS
  context/
    ProgressContext.tsx      -- progress tracking, notes, practice answers
  components/
    SubjectTabs.tsx          -- top-level nav and layout
    TopicCard.tsx            -- card in main grid
    TopicSheet.tsx           -- detail panel for Calc/Physics/CS
    MCQBlock.tsx             -- multiple choice question + feedback
    Math.tsx                 -- KaTeX wrapper (inline and block)
    CodeBlock.tsx            -- syntax-highlighted code
    GraphBlock.tsx           -- Mafs graph viewer
    NotesSidebar.tsx         -- per-unit notes
    PracticeTest.tsx         -- MCQ drill mode
    UnitSidebar.tsx          -- unit filter sidebar
    apush/                   -- APUSH-specific components
      ApushTab.tsx           -- APUSH layout and state
      ApushSheet.tsx         -- APUSH detail panel
      ConnectionsWeb.tsx     -- force-graph term connections
      ApushTimeline.tsx      -- chronological timeline
      CategorySection.tsx    -- terms grouped by category
      ThemeSection.tsx       -- terms grouped by theme
      PeriodTabs.tsx         -- period navigation
      ApushFilterBar.tsx     -- category/theme/tag filters
  data/
    calcbc/                  -- Calc BC topics by unit (_u1.ts - _u10.ts)
    physics/                 -- Physics C topics by unit
    cs/                      -- CS A topics by unit
    apush/                   -- APUSH topics by period (p1.ts - p9.ts)
    apush-types.ts           -- ApushTopic, ApushCategory, ApushTheme types
    practiceTestMCQ.ts       -- MCQ bank for practice test mode
  lib/
    utils.ts                 -- cn() class name helper
```

## Status

Active development. Calc BC and APUSH (all 9 periods) have substantial content. Physics C and CS A content is partially populated. APUSH connections web and timeline views are fully wired up.
