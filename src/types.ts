export type GraphFnSpec = {
  fn: string;
  color?: string;
  label?: string;
};

export type GraphConfig = {
  type: "fns" | "parametric";
  fns?: GraphFnSpec[];
  xy?: string;
  tDomain?: [number, number];
  xDomain?: [number, number];
  yDomain?: [number, number];
  note?: string;
};

export type Topic = {
  id: string;
  name: string;
  unit: string;
  unitNumber: number;
  tags: string[];
  summary: string;
  formula?: string;
  codeSnippet?: string;
  description: string;
  steps?: string[];
  examples?: { problem: string; solution: string }[];
  mcqs?: {
    question: string;
    options: string[];
    answerIndex: number;
    explanation: string;
  }[];
  graph?: GraphConfig;
};
