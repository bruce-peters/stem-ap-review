export type Topic = {
  id: string;
  name: string;
  unit: string;
  unitNumber: number;
  tags: string[];
  summary: string;
  formula?: string;
  description: string;
  steps?: string[];
  examples?: { problem: string; solution: string }[];
  mcqs?: {
    question: string;
    options: string[];
    answerIndex: number;
    explanation: string;
  }[];
};
