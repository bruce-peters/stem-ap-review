export type ApushCategory =
  | "People"
  | "Events"
  | "Legislation & Documents"
  | "Court Cases"
  | "Movements & Ideologies"
  | "Economic Concepts"
  | "Foreign Policy"

export type ApushTheme =
  | "American and National Identity"
  | "Work, Exchange, and Technology"
  | "Geography and the Environment"
  | "Migration and Settlement"
  | "Politics and Power"
  | "America in the World"
  | "American and Regional Culture"
  | "Social Structures"

export type ApushTopic = {
  id: string
  name: string
  period: number
  periodLabel: string
  category: ApushCategory
  tags: string[]
  summary: string
  significance: string
  context: string
  themes: ApushTheme[]
  connections: string[]
  year?: number   // approximate year for timeline placement
  mcqs?: {
    question: string
    options: string[]
    answerIndex: number
    explanation: string
  }[]
}
