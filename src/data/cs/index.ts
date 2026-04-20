import type { Topic } from "../types";
import { primitiveTypesTopics } from "./u1-primitive-types";
import { usingObjectsTopics } from "./u2-using-objects";
import { booleanIfStatementsTopics } from "./u3-boolean-if-statements";
import { iterationTopics } from "./u4-iteration";
import { writingClassesTopics } from "./u5-writing-classes";
import { arrayTopics } from "./u6-array";
import { arraylistTopics } from "./u7-arraylist";
import { twoDArrayTopics } from "./u8-2d-array";
import { recursionTopics } from "./u10-recursion";

export const csTopics: Topic[] = [
  ...primitiveTypesTopics,
  ...usingObjectsTopics,
  ...booleanIfStatementsTopics,
  ...iterationTopics,
  ...writingClassesTopics,
  ...arrayTopics,
  ...(arraylistTopics as Topic[]),
  ...twoDArrayTopics,
  ...(recursionTopics as Topic[]),
];

export const csUnits: string[] = [
  "Unit 1: Primitive Types",
  "Unit 2: Using Objects",
  "Unit 3: Boolean Expressions and if Statements",
  "Unit 4: Iteration",
  "Unit 5: Writing Classes",
  "Unit 6: Array",
  "Unit 7: ArrayList & File I/O",
  "Unit 8: 2D Array",
  "Unit 10: Recursion",
];
