import type { Topic } from "../types";

export const iterationTopics: Topic[] = [
  {
    id: "while-loop",
    name: "while Loop",
    unit: "Unit 4: Iteration",
    unitNumber: 4,
    tags: ["new-u2", "MCQ frequent", "FRQ"],
    summary: "Repeats a block of code as long as a boolean condition remains true; condition is checked before each iteration.",
    formula: "while (cond) { }",
    codeSnippet: `int count = 0;
int sum = 0;
while (count < 5) {
    sum += count;
    count++;
}
// After loop: count == 5, sum == 10
System.out.println(sum); // 10`,
    description: "A while loop evaluates its condition before executing the body; if the condition is false initially, the body never runs. The loop variable must be initialized before the loop and updated inside the body, or the loop will run forever (infinite loop). While loops are preferred when the number of iterations is not known in advance.",
    steps: [
      "Declare and initialize any loop control variables before the while statement.",
      "Write the condition in the while parentheses — it must eventually become false, or you get an infinite loop.",
      "Place the loop body in braces; update the loop control variable inside the body.",
      "Verify the termination condition: trace through a few iterations mentally to confirm the loop exits.",
      "Use a while loop when the iteration count depends on runtime data or user input rather than a fixed count."
    ],
    examples: [
      {
        problem: "Write a while loop that prints the integers 1 through 5, one per line.",
        solution: `int i = 1;
while (i <= 5) {
    System.out.println(i);
    i++;
}
// Output: 1  2  3  4  5 (each on its own line)
// Loop runs when i is 1, 2, 3, 4, 5. When i becomes 6 the condition is false and the loop exits.`
      }
    ],
    mcqs: [
      {
        question: "What is printed by the following code?\n\nint x = 10;\nwhile (x > 0) {\n    System.out.print(x + \" \");\n    x -= 3;\n}\n",
        options: [
          "10 7 4 1",
          "10 7 4",
          "10 7 4 1 -2",
          "7 4 1"
        ],
        answerIndex: 0,
        explanation: "x starts at 10 and decreases by 3 each iteration. The loop prints x before subtracting. Trace: x=10 (print), x=7 (print), x=4 (print), x=1 (print), x=-2 (condition 'x > 0' is false, stop). Output is '10 7 4 1'. Option B stops too early. Option C incorrectly includes -2, which is never printed because the condition fails before printing. Option D skips the first value printed."
      },
      {
        question: "A method should read values from an ArrayList<Integer> called data and return the first value greater than 100, or -1 if none exists. Which loop structure is most appropriate?",
        options: [
          "A for loop from 0 to data.size() - 1 with an early return inside",
          "A while loop with an index that increments and an early return inside",
          "A for-each loop with an early return inside",
          "All three options are equally appropriate for this task"
        ],
        answerIndex: 3,
        explanation: "All three loop types can search a list for a condition and return early. A standard for loop (A) works with an index. A while loop (B) also works with an index and is common for unknown-length searches. A for-each loop (C) is concise for traversal without needing the index. Since no modification or index tracking is needed, all are valid — the AP exam accepts any correct implementation."
      }
    ]
  },
  {
    id: "for-loop",
    name: "for Loop (standard)",
    unit: "Unit 4: Iteration",
    unitNumber: 4,
    tags: ["new-u2", "MCQ frequent", "FRQ"],
    summary: "Combines initialization, condition check, and update into one line; ideal when the number of iterations is known.",
    formula: "for (int i = 0; i < n; i++) { }",
    codeSnippet: `int[] scores = {85, 92, 78, 95, 88};
int total = 0;

for (int i = 0; i < scores.length; i++) {
    total += scores[i];
}

double average = (double) total / scores.length;
System.out.println(average); // 87.6`,
    description: "A for loop has three parts in its header: an initialization statement (runs once before the loop), a boolean condition (checked before each iteration), and an update expression (runs after each iteration body). The loop variable is scoped to the for block. For loops are the standard choice when iterating a known number of times or traversing an array by index.",
    steps: [
      "Write the initialization (e.g., int i = 0) — this runs exactly once before the loop begins.",
      "Write the condition (e.g., i < arr.length) — the loop continues while this is true; check it evaluates to false at some point.",
      "Write the update expression (e.g., i++) — this runs after each complete iteration of the body.",
      "Use arr[i] inside the body to access the element at each index.",
      "Prefer i < n (not i <= n - 1) for zero-indexed arrays to avoid off-by-one errors."
    ],
    examples: [
      {
        problem: "Write a for loop that counts how many elements in int[] nums are negative.",
        solution: `int[] nums = {3, -1, 4, -1, 5, -9, 2, 6};
int negCount = 0;
for (int i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
        negCount++;
    }
}
System.out.println(negCount); // 3
// Indices 1, 3, and 5 hold -1, -1, and -9 respectively.`
      }
    ],
    mcqs: [
      {
        question: "How many times does the body of the following loop execute?\n\nfor (int i = 1; i <= 10; i += 2) {\n    System.out.println(i);\n}\n",
        options: [
          "4",
          "5",
          "10",
          "6"
        ],
        answerIndex: 1,
        explanation: "i takes the values 1, 3, 5, 7, 9 — that is 5 values. When i becomes 11 the condition i <= 10 is false and the loop exits. Option A (4) is off by one. Option C (10) would be correct if the step were 1. Option D (6) overcounts — there is no sixth odd value ≤ 10 starting from 1 with step 2."
      },
      {
        question: "A method receives int[] arr and must replace every even-indexed element with 0. Which loop header is correct?",
        options: [
          "for (int i = 0; i < arr.length; i += 2)",
          "for (int i = 1; i < arr.length; i += 2)",
          "for (int i = 0; i <= arr.length; i += 2)",
          "for (int i = 0; i < arr.length; i++)"
        ],
        answerIndex: 0,
        explanation: "Even indices are 0, 2, 4, … so initialize i = 0 and step by 2 with i < arr.length as the bound. Option B starts at index 1 (odd indices). Option C uses i <= arr.length, which will throw an ArrayIndexOutOfBoundsException on the last step. Option D visits every index, including odd ones."
      }
    ]
  },
  {
    id: "for-each-loop",
    name: "for-each (Enhanced for) Loop",
    unit: "Unit 4: Iteration",
    unitNumber: 4,
    tags: ["new-u2", "MCQ frequent", "FRQ"],
    summary: "Iterates over every element in an array or ArrayList without an explicit index; read-only — cannot modify elements or traverse backwards.",
    formula: "for (Type x : collection) { }",
    codeSnippet: `ArrayList<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
names.add("Carol");

for (String name : names) {
    System.out.println("Hello, " + name + "!");
}
// Hello, Alice!
// Hello, Bob!
// Hello, Carol!`,
    description: "The enhanced for loop automatically advances through each element of an array or ArrayList, binding each value to the loop variable in turn. Assigning a new value to the loop variable does NOT change the underlying array or ArrayList — the loop variable is a copy of the element's value (for primitives) or a copy of the reference (for objects, where method calls on the object will mutate it). This loop cannot be used to remove elements during traversal, access the index, or iterate in reverse.",
    steps: [
      "Declare the loop variable with the element type matching the array or ArrayList's element type.",
      "Use the colon (:) followed by the array or ArrayList name.",
      "Read or call methods on the loop variable inside the body — do not attempt to assign a new value expecting it to change the source.",
      "If you need the index, need to remove elements, or need reverse traversal, use a standard for loop instead.",
      "For FRQ 3 (ArrayList), for-each is clean for read/search tasks; switch to index-based for remove/insert tasks."
    ],
    examples: [
      {
        problem: "Given int[] values = {4, 7, 2, 9, 1}, use a for-each loop to find the maximum value.",
        solution: `int[] values = {4, 7, 2, 9, 1};
int max = values[0];        // initialize to first element
for (int v : values) {
    if (v > max) {
        max = v;
    }
}
System.out.println(max);    // 9
// The for-each loop visits each element; max is updated
// whenever a larger value is found. The loop variable v
// is a copy — reassigning max inside the loop is fine
// because we are updating max, not v.`
      }
    ],
    mcqs: [
      {
        question: "What is the output of the following code?\n\nint[] nums = {1, 2, 3};\nfor (int n : nums) {\n    n = n * 2;\n}\nSystem.out.println(nums[0] + \" \" + nums[1] + \" \" + nums[2]);\n",
        options: [
          "2 4 6",
          "1 2 3",
          "0 0 0",
          "Compilation error"
        ],
        answerIndex: 1,
        explanation: "Assigning to the for-each loop variable n only changes the local copy — it does NOT modify the original array. The array remains {1, 2, 3}, so the output is '1 2 3'. Option A would be the result if a standard for loop with arr[i] = arr[i] * 2 were used. Option C is incorrect — the array is never zeroed. Option D is wrong — this code compiles and runs without error."
      },
      {
        question: "Which of the following tasks CANNOT be performed correctly with a for-each loop?",
        options: [
          "Computing the sum of all elements in an int[] array",
          "Printing every String in an ArrayList<String>",
          "Removing all elements equal to 0 from an ArrayList<Integer> during traversal",
          "Finding the maximum value in a double[] array"
        ],
        answerIndex: 2,
        explanation: "Removing elements from an ArrayList while iterating with a for-each loop causes a ConcurrentModificationException at runtime. Options A and D are valid read-only computations well-suited to for-each. Option B is a standard traversal that works fine with for-each. Removal during iteration requires either iterating backwards with an index loop or using an Iterator."
      }
    ]
  },
  {
    id: "do-while-loop",
    name: "do-while Loop",
    unit: "Unit 4: Iteration",
    unitNumber: 4,
    tags: ["new-u2", "MCQ frequent"],
    summary: "Executes the loop body at least once, then checks the condition; useful when processing must happen before the first check.",
    formula: "do { } while (cond);",
    codeSnippet: `int num = 0;
do {
    System.out.println("Entered loop body, num = " + num);
    num++;
} while (num < 3);
// Output:
// Entered loop body, num = 0
// Entered loop body, num = 1
// Entered loop body, num = 2`,
    description: "Unlike while and for loops, the do-while loop places the condition check after the body, guaranteeing the body runs at least once regardless of the initial condition. The do keyword begins the block, the while condition with a semicolon ends it. This structure is less common on the AP exam but appears in tracing questions designed to test whether students know the body executes before the first condition check.",
    steps: [
      "Write 'do {' to open the loop body — execution enters unconditionally the first time.",
      "Write the loop body, including any update to the loop control variable.",
      "Close the brace and immediately write 'while (condition);' — note the required semicolon.",
      "Trace carefully: the condition is NOT checked on the first pass, so the body always runs at least once even if the condition is initially false.",
      "Compare to a while loop: if the condition starts false, a while loop runs 0 times; a do-while runs 1 time."
    ],
    examples: [
      {
        problem: "Trace the following do-while loop and state the final value of x.\n\nint x = 5;\ndo {\n    x -= 4;\n} while (x > 3);",
        solution: `Iteration 1 (body runs unconditionally):
  x = 5 - 4 = 1
  Check: 1 > 3 → false → loop exits

Final value: x = 1

Key insight: even though 5 > 3 is true at the start, the
condition is checked AFTER the body runs, not before. The
loop body executes exactly once.`
      }
    ],
    mcqs: [
      {
        question: "How many times does the following do-while loop body execute?\n\nint k = 10;\ndo {\n    k++;\n} while (k < 5);\n",
        options: [
          "0",
          "1",
          "5",
          "Infinite loop"
        ],
        answerIndex: 1,
        explanation: "The body runs once unconditionally: k becomes 11. Then the condition k < 5 is checked: 11 < 5 is false, so the loop exits. The body executes exactly 1 time. Option A would be correct for a while loop (the condition would be false before the first iteration). Option C misreads the initial value. Option D is incorrect — the condition is checked and fails after one iteration."
      },
      {
        question: "Which statement best describes the key difference between a while loop and a do-while loop?",
        options: [
          "A while loop can have an update expression; a do-while cannot.",
          "A do-while loop always executes its body at least once; a while loop may execute zero times.",
          "A while loop checks its condition after the body; a do-while checks before.",
          "A do-while loop cannot be used with boolean variables."
        ],
        answerIndex: 1,
        explanation: "The defining difference is that the do-while loop checks its condition after executing the body, so the body runs at least once even if the condition is initially false. A while loop checks first, so it can execute zero times. Option A is false — both loops support any update logic in the body. Option C has the two loops reversed. Option D is false — any boolean expression works as the condition."
      }
    ]
  },
  {
    id: "nested-loops",
    name: "Nested Loops",
    unit: "Unit 4: Iteration",
    unitNumber: 4,
    tags: ["new-u2", "MCQ frequent", "FRQ"],
    summary: "A loop inside another loop; the inner loop completes all its iterations for each single iteration of the outer loop.",
    formula: "",
    codeSnippet: `// Print a 3x4 grid of asterisks
for (int row = 0; row < 3; row++) {
    for (int col = 0; col < 4; col++) {
        System.out.print("* ");
    }
    System.out.println(); // newline after each row
}
// * * * *
// * * * *
// * * * *`,
    description: "In nested loops, the inner loop runs completely through all its iterations each time the outer loop executes once. Total iteration count equals the product of the outer and inner loop counts. Nested loops are essential for 2D array traversal (FRQ 4), printing patterns, and any algorithm requiring pairwise comparison. Each loop maintains its own independent loop variable, and care must be taken not to reuse the same variable name in both headers.",
    steps: [
      "Write the outer loop with its own variable (commonly 'row' or 'i') controlling rows or groups.",
      "Indent and write the inner loop with a different variable (commonly 'col' or 'j') controlling columns or items per group.",
      "Calculate total iterations: outer loop count × inner loop count (e.g., 5 outer × 4 inner = 20 total body executions).",
      "For 2D array traversal, use grid.length for the outer bound and grid[row].length for the inner bound.",
      "If the outer loop runs m times and the inner loop runs n times, the inner loop body executes m × n times total — this is a common AP MCQ calculation."
    ],
    examples: [
      {
        problem: "How many times does System.out.print(\"X\") execute in the following nested loop?\n\nfor (int i = 0; i < 4; i++) {\n    for (int j = i; j < 4; j++) {\n        System.out.print(\"X\");\n    }\n}",
        solution: `The inner loop starting point depends on i:
  i=0: j goes 0,1,2,3 → 4 prints
  i=1: j goes 1,2,3   → 3 prints
  i=2: j goes 2,3     → 2 prints
  i=3: j goes 3       → 1 print

Total: 4 + 3 + 2 + 1 = 10 prints

Key insight: when the inner loop's start depends on the
outer loop variable, you cannot simply multiply — you must
sum each inner loop count separately.`
      }
    ],
    mcqs: [
      {
        question: "What is the value of count after the following nested loops finish?\n\nint count = 0;\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 5; j++) {\n        count++;\n    }\n}\n",
        options: [
          "8",
          "15",
          "16",
          "25"
        ],
        answerIndex: 1,
        explanation: "The outer loop runs 3 times (i = 0, 1, 2) and the inner loop runs 5 times (j = 0, 1, 2, 3, 4) for each outer iteration. Total increments = 3 × 5 = 15. Option A (8) is 3 + 5, adding instead of multiplying. Option C (16) is off by one — the loops are < 3 and < 5, not ≤. Option D (25) would be the answer if both loops ran 5 times."
      },
      {
        question: "A 2D int array grid has grid.length rows and grid[0].length columns. Which nested loop correctly computes the sum of all elements?",
        options: [
          "for (int r = 0; r <= grid.length; r++) { for (int c = 0; c <= grid[r].length; c++) { sum += grid[r][c]; } }",
          "for (int r = 0; r < grid.length; r++) { for (int c = 0; c < grid[r].length; c++) { sum += grid[r][c]; } }",
          "for (int r = 0; r < grid.length; r++) { for (int c = 0; c < grid.length; c++) { sum += grid[r][c]; } }",
          "for (int r = 1; r < grid.length; r++) { for (int c = 1; c < grid[r].length; c++) { sum += grid[r][c]; } }"
        ],
        answerIndex: 1,
        explanation: "The correct bounds are r < grid.length and c < grid[r].length, both strictly less than. Option A uses <= for both, causing an ArrayIndexOutOfBoundsException on the last iteration of each loop. Option C uses grid.length (row count) for the column bound, which is wrong for non-square arrays. Option D starts at index 1 for both loops, skipping the entire first row and first column."
      }
    ]
  },
  {
    id: "off-by-one-errors",
    name: "Off-by-One Errors",
    unit: "Unit 4: Iteration",
    unitNumber: 4,
    tags: ["new-u2", "MCQ frequent"],
    summary: "Loops that iterate one too many or one too few times due to incorrect boundary conditions; the most common loop bug on the AP exam.",
    formula: "i < n vs i <= n; fencepost problems",
    codeSnippet: `String s = "Hello";

// CORRECT: indices 0 through length-1
for (int i = 0; i < s.length(); i++) {
    System.out.print(s.charAt(i));
}
// Output: Hello

// OFF BY ONE — throws StringIndexOutOfBoundsException
for (int i = 0; i <= s.length(); i++) {
    System.out.print(s.charAt(i)); // crashes when i == 5
}`,
    description: "An off-by-one error occurs when a loop runs one iteration too many (using <= instead of < for zero-indexed structures) or one too few (using < when <= is needed for inclusive upper bounds). For zero-indexed arrays and Strings, the valid indices are 0 through length - 1, so the condition must be i < length. The classic fencepost problem asks: to build a fence with n posts, how many rails connect them? There are n - 1 gaps, not n.",
    steps: [
      "For zero-indexed arrays and Strings, always use i < arr.length or i < s.length() — using <= will attempt to access an out-of-bounds index.",
      "If the loop should process n items starting at index 0, the bound is i < n; if it should process items 1 through n inclusive, the bound is i <= n.",
      "Count the iterations by substituting: with 'i = 0; i < 5', i takes values 0,1,2,3,4 — that is exactly 5 iterations.",
      "With 'i = 1; i <= n', i takes values 1,2,...,n — exactly n iterations. Mixing these conventions is the most common source of errors.",
      "When in doubt, trace the first and last value of i: the last valid index for an array of length n is n - 1, so the condition should keep i at most n - 1, which means i < n."
    ],
    examples: [
      {
        problem: "A student writes the following method to count consonants in a String. Identify the off-by-one error and fix it.\n\npublic int countConsonants(String s) {\n    int count = 0;\n    for (int i = 1; i < s.length(); i++) {\n        char c = s.charAt(i);\n        if (\"aeiouAEIOU\".indexOf(c) == -1) count++;\n    }\n    return count;\n}",
        solution: `Bug: the loop starts at i = 1, skipping the character
at index 0 (the first character of the string).

Fix: change i = 1 to i = 0.

for (int i = 0; i < s.length(); i++) {

The upper bound i < s.length() is correct — it stops
at index s.length() - 1, which is the last valid index.
Starting at 1 instead of 0 causes the method to undercount
by up to 1 whenever the first character is a consonant.`
      }
    ],
    mcqs: [
      {
        question: "An array int[] data has 6 elements (indices 0–5). Which loop header processes ONLY the first 5 elements (indices 0–4)?",
        options: [
          "for (int i = 0; i < 5; i++)",
          "for (int i = 0; i <= 5; i++)",
          "for (int i = 1; i < 5; i++)",
          "for (int i = 0; i < data.length; i++)"
        ],
        answerIndex: 0,
        explanation: "i < 5 means i takes values 0, 1, 2, 3, 4 — exactly the first five elements. Option B (i <= 5) visits six elements, indices 0–5, including the sixth. Option C starts at index 1 and goes through 4, visiting only 4 elements and missing index 0. Option D visits all 6 elements (indices 0–5)."
      },
      {
        question: "What exception does the following code throw, and why?\n\nString word = \"Java\";\nfor (int i = 0; i <= word.length(); i++) {\n    System.out.print(word.charAt(i));\n}\n",
        options: [
          "ArrayIndexOutOfBoundsException — the array has no index 4",
          "StringIndexOutOfBoundsException — word.charAt(4) is called when the valid indices are 0–3",
          "NullPointerException — word is null",
          "No exception — the output is \"Java\""
        ],
        answerIndex: 1,
        explanation: "\"Java\" has length 4, so valid indices are 0–3. The condition i <= word.length() allows i to reach 4, and word.charAt(4) throws a StringIndexOutOfBoundsException. Option A names the wrong exception type — Strings use StringIndexOutOfBoundsException. Option C is wrong — word is not null. Option D is wrong because the loop iterates one too many times."
      }
    ]
  },
  {
    id: "string-traversal-loops",
    name: "String Traversal with Loops",
    unit: "Unit 4: Iteration",
    unitNumber: 4,
    tags: ["new-u2", "MCQ frequent", "FRQ"],
    summary: "Strings must be traversed with an index-based for loop and charAt(); the for-each loop does NOT work on Strings in Java.",
    formula: "for (int i = 0; i < s.length(); i++) { s.charAt(i); }",
    codeSnippet: `String s = "Hello, AP!";
int upperCount = 0;

for (int i = 0; i < s.length(); i++) {
    char c = s.charAt(i);
    if (Character.isUpperCase(c)) {
        upperCount++;
    }
}
System.out.println(upperCount); // 3  (H, A, P)`,
    description: "Java's String class does not implement Iterable, so the enhanced for-each loop cannot be used directly on a String. Instead, use an index-based for loop from 0 to s.length() - 1, calling s.charAt(i) to retrieve the character at each position. Characters extracted this way are of type char. Common operations include checking character type with Character.isLetter(), Character.isDigit(), Character.isUpperCase(), and Character.toLowerCase().",
    steps: [
      "Initialize the loop variable to 0 — Strings are zero-indexed just like arrays.",
      "Use the condition i < s.length() (strictly less than) — the last valid index is s.length() - 1.",
      "Call s.charAt(i) inside the body to get the char at position i; store it in a char variable for readability.",
      "Do not attempt 'for (char c : s)' — this does not compile because String does not implement Iterable.",
      "To build a modified String, declare a String result = \"\" before the loop and concatenate inside: result += s.charAt(i)."
    ],
    examples: [
      {
        problem: "Write a method that takes a String and returns a new String containing only its digit characters.",
        solution: `public String digitsOnly(String s) {
    String result = "";
    for (int i = 0; i < s.length(); i++) {
        char c = s.charAt(i);
        if (Character.isDigit(c)) {
            result += c;
        }
    }
    return result;
}

// digitsOnly("ab3c4d5") returns "345"
// The loop visits every character; only digit
// characters are appended to result.`
      }
    ],
    mcqs: [
      {
        question: "What is the output of the following code?\n\nString s = \"abcde\";\nString r = \"\";\nfor (int i = s.length() - 1; i >= 0; i--) {\n    r += s.charAt(i);\n}\nSystem.out.println(r);\n",
        options: [
          "abcde",
          "edcba",
          "StringIndexOutOfBoundsException",
          "e"
        ],
        answerIndex: 1,
        explanation: "The loop starts at index 4 (s.length()-1 = 4) and decrements to 0, appending each character in reverse order. r accumulates: 'e', 'ed', 'edc', 'edcb', 'edcba'. Output is 'edcba'. Option A would result from a forward traversal. Option C is wrong — the bounds i >= 0 and i = s.length() - 1 are both valid. Option D is wrong — the loop appends all five characters."
      },
      {
        question: "Which of the following code fragments correctly counts the number of spaces in String s?",
        options: [
          "for (char c : s) { if (c == ' ') count++; }",
          "for (int i = 0; i <= s.length(); i++) { if (s.charAt(i) == ' ') count++; }",
          "for (int i = 0; i < s.length(); i++) { if (s.charAt(i) == ' ') count++; }",
          "for (int i = 1; i < s.length(); i++) { if (s.charAt(i) == ' ') count++; }"
        ],
        answerIndex: 2,
        explanation: "Option C uses a correct index-based for loop with the proper bound i < s.length() and correctly checks each character. Option A does not compile — String does not implement Iterable, so for-each cannot be used directly on a String. Option B uses i <= s.length(), which causes a StringIndexOutOfBoundsException when i equals s.length(). Option D starts at index 1, skipping the first character."
      }
    ]
  },
  {
    id: "loop-accumulators",
    name: "Loop Accumulators (sum, count, max, min)",
    unit: "Unit 4: Iteration",
    unitNumber: 4,
    tags: ["new-u2", "MCQ frequent", "FRQ"],
    summary: "Variables initialized before a loop and updated inside it to build up a result such as a total, count, maximum, or minimum.",
    formula: "",
    codeSnippet: `int[] data = {3, 8, 2, 11, 5, 7};

int sum   = 0;
int count = 0;
int max   = data[0]; // initialize to first element
int min   = data[0];

for (int x : data) {
    sum += x;
    count++;
    if (x > max) max = x;
    if (x < min) min = x;
}
System.out.println("Sum=" + sum + " Count=" + count
    + " Max=" + max + " Min=" + min);
// Sum=36 Count=6 Max=11 Min=2`,
    description: "An accumulator is a variable declared and initialized before a loop whose value is updated on every (or some) iteration. The most common error is placing the accumulator declaration inside the loop, which resets it each iteration and destroys the accumulated result. Sum accumulators start at 0; product accumulators start at 1; max/min accumulators should be initialized to the first element of the data (not Integer.MAX_VALUE or 0, which can be wrong on the AP exam if the array contains only negative numbers or all values exceed 0).",
    steps: [
      "Declare the accumulator variable BEFORE the loop with its identity value: 0 for sum/count, data[0] for max/min.",
      "Update the accumulator INSIDE the loop on the appropriate condition.",
      "Do NOT declare the accumulator inside the loop — that resets it to its initial value every iteration.",
      "For max/min, initialize to the first array element (not 0 or Integer.MAX_VALUE) to handle arrays with all negative or all large values.",
      "After the loop exits, use the accumulator's final value as the result — do not attempt to use it inside the loop as the final answer."
    ],
    examples: [
      {
        problem: "A student wants to find the average of all positive numbers in int[] arr. Identify the bug and fix it.\n\ndouble sum = 0;\nfor (int val : arr) {\n    int count = 0;\n    if (val > 0) { sum += val; count++; }\n}\nreturn (count == 0) ? 0.0 : sum / count;",
        solution: `Bug: int count = 0; is declared INSIDE the loop,
resetting count to 0 on every iteration. After the loop,
count is always 0 or 1 (at most 1 from the last positive
value found), not the total count of positive numbers.

Fix: move count outside the loop:

double sum = 0;
int count = 0;             // <-- declared OUTSIDE
for (int val : arr) {
    if (val > 0) {
        sum += val;
        count++;           // now accumulates correctly
    }
}
return (count == 0) ? 0.0 : sum / count;`
      }
    ],
    mcqs: [
      {
        question: "What is the value of total after the following code executes?\n\nint total = 0;\nint[] vals = {2, 4, 6, 8, 10};\nfor (int i = 0; i < vals.length; i++) {\n    int total = vals[i];\n}\nSystem.out.println(total);\n",
        options: [
          "30",
          "10",
          "0",
          "Compilation error"
        ],
        answerIndex: 3,
        explanation: "Inside the loop body, 'int total = vals[i];' declares a NEW local variable named total that shadows the outer total. In Java, you cannot declare a local variable with the same name as a variable already in scope in the enclosing block — this causes a compilation error ('variable total is already defined'). If it did compile, the outer total would remain 0 because it is never updated. Options A, B, and C are incorrect because the code does not compile."
      },
      {
        question: "Which accumulator initialization is correct for finding the minimum value in int[] arr (which may contain negative numbers)?",
        options: [
          "int min = 0;",
          "int min = Integer.MAX_VALUE;",
          "int min = arr[0];",
          "Both B and C are correct initializations for this task."
        ],
        answerIndex: 3,
        explanation: "Both Integer.MAX_VALUE (B) and arr[0] (C) are correct. Initializing to Integer.MAX_VALUE guarantees any real element will be less than it. Initializing to arr[0] is the standard AP exam approach and works because arr[0] is a real data value. Option A (min = 0) is wrong when the array contains only positive numbers — 0 would be incorrectly returned as the minimum since no element is less than 0. The AP exam most commonly uses arr[0] initialization."
      }
    ]
  }
];
