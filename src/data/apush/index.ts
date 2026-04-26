import type { ApushTopic } from "../apush-types";
import { period1Topics } from "./p1";
import { period2Topics } from "./p2";
import { period3Topics } from "./p3";
import { period4Topics } from "./p4";
import { period6Topics } from "./p6";
import { period9Topics } from "./p9";

export type { ApushTopic } from "../apush-types";
export type { ApushCategory, ApushTheme } from "../apush-types";

export const apushPeriods: {
  number: number;
  label: string;
  dateRange: string;
}[] = [
  { number: 1, label: "Period 1", dateRange: "1491–1607" },
  { number: 2, label: "Period 2", dateRange: "1607–1754" },
  { number: 3, label: "Period 3", dateRange: "1754–1800" },
  { number: 4, label: "Period 4", dateRange: "1800–1848" },
  { number: 5, label: "Period 5", dateRange: "1844–1877" },
  { number: 6, label: "Period 6", dateRange: "1865–1898" },
  { number: 7, label: "Period 7", dateRange: "1890–1945" },
  { number: 8, label: "Period 8", dateRange: "1945–1980" },
  { number: 9, label: "Period 9", dateRange: "1980–Present" },
];

export const apushTopics: ApushTopic[] = [
  ...period1Topics,
  ...period2Topics,
  ...period3Topics,
  ...period4Topics,
  ...period6Topics,
  ...period9Topics,
];

export {
  period1Topics,
  period2Topics,
  period3Topics,
  period4Topics,
  period6Topics,
  period9Topics,
};
