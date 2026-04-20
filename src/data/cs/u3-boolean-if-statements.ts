export const booleanIfStatementsTopics = [
  {
    id: "boolean-expressions",
    name: "Boolean Expressions and Relational Operators",
    unit: "Unit 3: Boolean Expressions and if Statements",
    unitNumber: 3,
    tags: ["new-u2", "MCQ frequent", "FRQ"],
    summary: "Boolean expressions use relational operators to compare values and produce a true or false result.",
    formula: "x > 5; x == 5; x != 5; x >= 5; x <= 5",
    codeSnippet: `int x = 7;
boolean a = x > 5;    // true
boolean b = x == 5;   // false
boolean c = x != 5;   // true
boolean d = x >= 7;   // true
boolean e = x <= 6;   // false

if (x > 0) {
  System.out.println("positive");
}`,
    description: "A boolean expression evaluates to either true or false. Relational operators compare two values: > (greater than), < (less than), >= (greater than or equal), <= (less than or equal), == (equal to), and != (not equal to). On the AP exam, confusing the assignment operator = with the equality operator == is one of the most common errors.",
    steps: [
      "Identify the two operands on either side of the relational operator.",
      "Determine the operator: > (strictly greater), < (strictly less), >= (greater or equal), <= (less or equal), == (equal), != (not equal).",
      "Evaluate each operand to its current value, then apply the operator.",
      "The entire expression reduces to exactly one boolean value: true or false.",
      "Use the result directly in an if condition or store it in a boolean variable.",
    ],
    examples: [
      {
        problem: "Given int score = 85, evaluate whether the expression score >= 90 is true or false, and explain the result.",
        solution: "score >= 90 evaluates to 85 >= 90, which is false because 85 is not greater than or equal to 90. If you then check score >= 70, that evaluates to 85 >= 70, which is true.",
      },
    ],
    mcqs: [
      {
        question: "What is the value of the expression (10 != 10) after it is evaluated?",
        options: ["true", "false", "0", "A compile error occurs"],
        answerIndex: 1,
        explanation: "10 != 10 asks whether 10 is not equal to 10, which is false — the two values are equal, so the 'not equal' check fails. Option A (true) would be correct for 10 != 11. Option C (0) is wrong because relational operators produce a boolean, not an integer in Java. Option D is wrong because the expression is perfectly valid Java.",
      },
      {
        question: "Which of the following correctly tests whether the int variable age is between 13 and 17 inclusive?",
        options: [
          "age > 13 && age < 17",
          "age >= 13 && age <= 17",
          "13 <= age <= 17",
          "age = 13 && age = 17",
        ],
        answerIndex: 1,
        explanation: "age >= 13 && age <= 17 checks both bounds inclusively, covering 13, 14, 15, 16, and 17. Option A uses strict inequalities, so it excludes 13 and 17. Option C uses chained comparison syntax that is legal in Python but a compile error in Java. Option D uses the assignment operator = instead of the equality operator ==, which is also a compile error in a boolean context.",
      },
    ],
  },
  {
    id: "logical-operators",
    name: "Logical Operators (&&, ||, !)",
    unit: "Unit 3: Boolean Expressions and if Statements",
    unitNumber: 3,
    tags: ["new-u2", "MCQ frequent", "FRQ"],
    summary: "Logical operators combine or negate boolean expressions: && (AND), || (OR), ! (NOT).",
    formula: "x > 0 && x < 10; !done",
    codeSnippet: `boolean done = false;
int x = 5;

boolean inRange  = x > 0 && x < 10;  // true
boolean outRange = x < 0 || x > 100; // false
boolean notDone  = !done;             // true

if (inRange && !done) {
  System.out.println("still working in range");
}`,
    description: "The && (AND) operator returns true only when both operands are true. The || (OR) operator returns true when at least one operand is true. The ! (NOT) operator flips a boolean value from true to false or vice versa. These operators are evaluated after relational operators but before assignment, and they are short-circuit evaluated (see the short-circuit topic for details).",
    steps: [
      "Evaluate the left-hand boolean sub-expression to true or false.",
      "For &&: if the left is false, the whole expression is false (short-circuit). If the left is true, evaluate the right side; result equals the right side.",
      "For ||: if the left is true, the whole expression is true (short-circuit). If the left is false, evaluate the right side; result equals the right side.",
      "For !: flip the value of the single operand — true becomes false, false becomes true.",
      "Combine nested logical expressions by evaluating innermost parentheses first, then working outward.",
    ],
    examples: [
      {
        problem: "Given int temp = 72 and boolean raining = false, evaluate: temp >= 60 && temp <= 80 && !raining",
        solution: "Step 1: temp >= 60 → 72 >= 60 → true. Step 2: temp <= 80 → 72 <= 80 → true. So far: true && true → true. Step 3: !raining → !false → true. Final: true && true → true. The whole expression is true — it is a comfortable, dry day.",
      },
    ],
    mcqs: [
      {
        question: "What does the following expression evaluate to when x = 3?\n(x > 1 || x < 0) && x != 3",
        options: ["true", "false", "A runtime exception", "Depends on the order of evaluation"],
        answerIndex: 1,
        explanation: "First evaluate x > 1 || x < 0: (3 > 1) is true, so the entire || is true. Then evaluate x != 3: (3 != 3) is false. true && false is false. Option A is wrong because the second operand of && is false. Option C is wrong — no exception occurs here. Option D is wrong because Java's operator precedence is fully defined; && has lower precedence than ||, but parentheses force || to evaluate first anyway.",
      },
      {
        question: "Which expression correctly checks that a String variable grade equals \"A\" OR that an int variable score is at least 90?",
        options: [
          'grade == "A" || score >= 90',
          'grade.equals("A") || score >= 90',
          'grade.equals("A") && score >= 90',
          'grade = "A" || score >= 90',
        ],
        answerIndex: 1,
        explanation: 'grade.equals("A") || score >= 90 is correct — use .equals() for String content comparison and || to satisfy either condition. Option A uses == on a String object, which compares references (not content) and can give wrong results. Option C uses && instead of ||, requiring both conditions to be true. Option D uses the assignment operator = instead of a comparison, which is a compile error.',
      },
    ],
  },
  {
    id: "short-circuit-eval",
    name: "Short-Circuit Evaluation",
    unit: "Unit 3: Boolean Expressions and if Statements",
    unitNumber: 3,
    tags: ["new-u2", "MCQ frequent"],
    summary: "Java stops evaluating a logical expression as soon as the overall result is determined, which can prevent exceptions and side effects.",
    formula: "false && expr (expr not evaluated); true || expr (expr not evaluated)",
    codeSnippet: `String s = null;

// Safe: s != null is false, so s.length() is never called
if (s != null && s.length() > 0) {
  System.out.println("non-empty");
}

// Dangerous: s.length() IS called when s is null → NullPointerException
if (s.length() > 0 && s != null) {
  System.out.println("non-empty");
}

int[] arr = null;
// Safe guard with ||
if (arr == null || arr.length == 0) {
  System.out.println("empty or null array");
}`,
    description: "Short-circuit evaluation means that for &&, if the left operand evaluates to false, Java skips the right operand entirely because the result must be false. For ||, if the left operand evaluates to true, Java skips the right operand because the result must be true. This matters on the AP exam because a right-side expression might throw a NullPointerException or ArrayIndexOutOfBoundsException — if it is short-circuited, no exception occurs. Placing the safety check on the left side of && (or ||) is a standard guard idiom.",
    steps: [
      "Identify the logical operator: && or ||.",
      "Evaluate the left operand completely.",
      "For &&: if the left is false, stop — the result is false. The right side is never evaluated.",
      "For ||: if the left is true, stop — the result is true. The right side is never evaluated.",
      "Only proceed to evaluate the right operand when necessary (left is true for &&; left is false for ||).",
      "Use short-circuit guards to prevent NullPointerException: always check obj != null before calling obj.method().",
    ],
    examples: [
      {
        problem: "Explain what happens when the following code runs and arr is null:\nif (arr != null && arr[0] > 0) { System.out.println(arr[0]); }",
        solution: "arr != null evaluates to false because arr is null. Because the operator is &&, Java short-circuits and never evaluates arr[0] > 0. No ArrayIndexOutOfBoundsException or NullPointerException is thrown. Without the guard (e.g., if (arr[0] > 0 && arr != null)), accessing arr[0] when arr is null would throw a NullPointerException at runtime.",
      },
    ],
    mcqs: [
      {
        question: "Given the method call below, which statement about short-circuit evaluation is correct?\n\nint x = 0;\nif (x != 0 && (10 / x) > 1) {\n  System.out.println(\"large\");\n}",
        options: [
          "A divide-by-zero ArithmeticException is thrown.",
          "The division 10 / x is never evaluated; the condition is false and nothing prints.",
          "The condition is true and \"large\" prints.",
          "A compile error occurs because division inside an if is not allowed.",
        ],
        answerIndex: 1,
        explanation: "x != 0 evaluates to 0 != 0, which is false. Because the operator is &&, Java short-circuits and never evaluates (10 / x). No ArithmeticException is thrown, so Option A is wrong. Nothing prints because the condition is false, making Option C wrong. Division inside an if condition is perfectly valid Java syntax, making Option D wrong.",
      },
      {
        question: "Which expression will cause a NullPointerException at runtime when String s = null?",
        options: [
          's != null && s.equals("hello")',
          's == null || s.equals("hello")',
          's.equals("hello") && s != null',
          's == null && s != null',
        ],
        answerIndex: 2,
        explanation: 's.equals("hello") && s != null evaluates the left side first, calling .equals() on a null reference and throwing a NullPointerException. Option A is safe: s != null is false, so short-circuit prevents .equals() from being called. Option B is safe: s == null is true, so || short-circuits before .equals() is reached. Option D short-circuits after s == null (true for &&? No — wait: if s is null, s == null is true, but s != null is false; true && false = false), and since s != null is false the && short-circuits at s == null being true — actually s == null && s != null is true && false... let\'s be precise: s == null is true, then s != null is false, so the result is false; no NPE occurs.',
      },
    ],
  },
  {
    id: "if-else",
    name: "if / else if / else Statements",
    unit: "Unit 3: Boolean Expressions and if Statements",
    unitNumber: 3,
    tags: ["new-u2", "MCQ frequent", "FRQ"],
    summary: "if/else if/else chains direct program flow by executing the first branch whose condition is true and skipping all others.",
    formula: "if (cond) { } else if (cond2) { } else { }",
    codeSnippet: `int score = 82;
String grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "F";
}

System.out.println(grade); // B`,
    description: "An if statement evaluates a boolean condition; if true, its block executes. An else if chain allows multiple mutually exclusive conditions to be checked in order — as soon as one condition is true, that block runs and all remaining branches are skipped. A final else block acts as a catch-all, executing when every preceding condition was false. Only one branch ever executes in a single pass through the chain.",
    steps: [
      "Write the if keyword followed by the boolean condition in parentheses.",
      "Place the code to run when the condition is true inside curly braces.",
      "Add else if (...) { } branches for additional mutually exclusive cases, ordered from most specific to most general.",
      "Add a trailing else { } block to handle any case not caught by the above conditions.",
      "Trace through: Java tests conditions top to bottom; once a true condition is found the block runs and the rest of the chain is skipped entirely.",
      "Verify that all intended cases are covered — missing an else can leave a variable uninitialized.",
    ],
    examples: [
      {
        problem: "Write an if/else if/else chain that sets String result to \"hot\" if temp > 90, \"warm\" if temp > 70, \"cool\" if temp > 50, and \"cold\" otherwise. What is result when temp = 75?",
        solution: "Code:\nif (temp > 90) { result = \"hot\"; }\nelse if (temp > 70) { result = \"warm\"; }\nelse if (temp > 50) { result = \"cool\"; }\nelse { result = \"cold\"; }\n\nWith temp = 75: temp > 90 is false, skip. temp > 70 is true, so result = \"warm\" and the remaining branches are skipped. Final answer: result is \"warm\".",
      },
    ],
    mcqs: [
      {
        question: 'What does the following code print when x = 15?\n\nif (x > 20) {\n  System.out.println("A");\n} else if (x > 10) {\n  System.out.println("B");\n} else if (x > 5) {\n  System.out.println("C");\n} else {\n  System.out.println("D");\n}',
        options: ["A", "B", "B and C", "C"],
        answerIndex: 1,
        explanation: 'x > 20 is 15 > 20, which is false. x > 10 is 15 > 10, which is true — so "B" prints and the chain exits. Even though x > 5 is also true, that branch is never reached because the earlier else if already fired. Option A is wrong because 15 is not greater than 20. Option C is wrong because only one branch executes in an else-if chain. Option D would require x > 10 to be false (x <= 10).',
      },
      {
        question: "A programmer wants to check whether int n is positive, negative, or zero and print the corresponding word. Which structure is most appropriate?",
        options: [
          "Three separate if statements with no else",
          "An if / else if / else chain",
          "A single if with a compound condition",
          "A while loop",
        ],
        answerIndex: 1,
        explanation: "An if / else if / else chain is ideal here because the three cases are mutually exclusive and exhaustive — exactly one of positive, negative, or zero applies to any integer. Option A (three separate ifs) would evaluate all three conditions every time, risking multiple prints if conditions overlap; it also does not clearly express mutual exclusion. Option C cannot handle three separate outcomes with one condition. Option D (while loop) is for repetition, not conditional branching.",
      },
    ],
  },
  {
    id: "nested-if",
    name: "Nested if Statements",
    unit: "Unit 3: Boolean Expressions and if Statements",
    unitNumber: 3,
    tags: ["new-u2", "MCQ frequent", "FRQ"],
    summary: "A nested if is an if statement placed inside another if or else block, allowing conditions to be tested only when an outer condition is already true.",
    formula: "",
    codeSnippet: `int age = 20;
boolean hasTicket = true;

if (age >= 18) {
  if (hasTicket) {
    System.out.println("Entry allowed");
  } else {
    System.out.println("Need a ticket");
  }
} else {
  System.out.println("Must be 18 or older");
}`,
    description: "Nested if statements place one conditional block inside another. The inner if is only reached when the outer condition is true, which allows you to test secondary conditions without redundantly repeating the outer check. Careful indentation is essential for readability. The dangling-else problem — where an else clause is ambiguous about which if it belongs to — is resolved in Java by matching each else to the nearest preceding unmatched if.",
    steps: [
      "Write the outer if condition that must be true before the inner check matters.",
      "Inside the outer if block, write the inner if statement with its own condition and braces.",
      "Use consistent indentation: each level of nesting should be indented one step further.",
      "Consider whether the logic could be flattened using && — sometimes nested ifs can be replaced with a single compound condition, improving clarity.",
      "Trace the execution path: if the outer condition is false, the entire inner if block is skipped.",
      "Watch for the dangling-else: in Java, else always matches the nearest unmatched if — use braces to make intent explicit.",
    ],
    examples: [
      {
        problem: "Trace this code with x = 5 and y = 3:\nif (x > 0) {\n  if (y > 0) {\n    System.out.println(\"both positive\");\n  } else {\n    System.out.println(\"only x positive\");\n  }\n} else {\n  System.out.println(\"x not positive\");\n}",
        solution: "Outer condition: x > 0 → 5 > 0 → true, so enter outer block. Inner condition: y > 0 → 3 > 0 → true, so enter inner if block. Output: \"both positive\". The inner else and outer else are both skipped.",
      },
    ],
    mcqs: [
      {
        question: 'What does the following code print when a = 5 and b = 10?\n\nif (a > 3) {\n  if (b > 8) {\n    System.out.println("X");\n  }\n  System.out.println("Y");\n} else {\n  System.out.println("Z");\n}',
        options: ["X", "Y", "X followed by Y on separate lines", "Z"],
        answerIndex: 2,
        explanation: 'a > 3 is true, so we enter the outer if. b > 8 is also true, so "X" prints. After the inner if block ends, execution continues to the outer block\'s next statement, printing "Y". Both prints are inside the outer if\'s braces. Option A is wrong because Y also prints — it is outside the inner if but still inside the outer if. Option B is wrong because X also prints. Option D would require a > 3 to be false.',
      },
      {
        question: "Which of the following is equivalent to the nested if below?\n\nif (x > 0) {\n  if (y > 0) {\n    result = true;\n  }\n}",
        options: [
          "if (x > 0 || y > 0) { result = true; }",
          "if (x > 0 && y > 0) { result = true; }",
          "if (x > 0) { result = true; } if (y > 0) { result = true; }",
          "if (!(x <= 0) || !(y <= 0)) { result = true; }",
        ],
        answerIndex: 1,
        explanation: "The nested if sets result = true only when both x > 0 AND y > 0 — both conditions must be true simultaneously, which is exactly what && expresses. Option A uses || (OR), which sets result = true if either is positive, a broader condition. Option C sets result = true if either is positive independently (two separate ifs), also too broad. Option D uses ||, which is equivalent to A and is still too broad.",
      },
    ],
  },
  {
    id: "demorgan-law",
    name: "De Morgan's Law",
    unit: "Unit 3: Boolean Expressions and if Statements",
    unitNumber: 3,
    tags: ["new-u2", "MCQ frequent"],
    summary: "De Morgan's Laws describe how to distribute or remove a NOT over an AND or OR expression by flipping the operator.",
    formula: "!(A && B) == (!A || !B); !(A || B) == (!A && !B)",
    codeSnippet: `boolean a = true;
boolean b = false;

// De Morgan 1: !(A && B) == (!A || !B)
boolean lhs1 = !(a && b);    // !(true && false) = !false = true
boolean rhs1 = !a || !b;     // false || true = true
System.out.println(lhs1 == rhs1); // true

// De Morgan 2: !(A || B) == (!A && !B)
boolean lhs2 = !(a || b);    // !(true || false) = !true = false
boolean rhs2 = !a && !b;     // false && true = false
System.out.println(lhs2 == rhs2); // true`,
    description: "De Morgan's Laws let you simplify or rewrite negated compound boolean expressions. The first law states that NOT (A AND B) equals (NOT A) OR (NOT B) — negating an AND flips the operator to OR and negates each operand. The second law states that NOT (A OR B) equals (NOT A) AND (NOT B) — negating an OR flips the operator to AND. These laws are heavily tested on the AP exam, both for simplifying expressions and for spotting equivalent code.",
    steps: [
      "Identify the outer NOT (!) applied to a parenthesized compound expression.",
      "Note the operator inside the parentheses: is it && or ||?",
      "Remove the outer NOT and flip the operator: && becomes ||, and || becomes &&.",
      "Negate each individual sub-expression: if a sub-expression was A, it becomes !A; if it was !A, it becomes A (double negation cancels).",
      "Verify by substituting sample boolean values into both the original and transformed expressions to confirm they produce the same result.",
    ],
    examples: [
      {
        problem: "Simplify the expression !(x < 0 || x > 100) using De Morgan's Law.",
        solution: "Step 1: The outer NOT applies to an OR expression. Step 2: Flip || to &&. Step 3: Negate each side: x < 0 becomes !(x < 0) which simplifies to x >= 0, and x > 100 becomes !(x > 100) which simplifies to x <= 100. Result: x >= 0 && x <= 100. This reads naturally as 'x is between 0 and 100 inclusive.'",
      },
    ],
    mcqs: [
      {
        question: "Which expression is equivalent to !(p && !q)?",
        options: [
          "!p && q",
          "!p || q",
          "p || !q",
          "!p && !q",
        ],
        answerIndex: 1,
        explanation: "Apply De Morgan's first law to !(p && !q): flip && to ||, then negate each operand. !p becomes !p; !(!q) becomes q (double negation cancels). Result: !p || q. Option A uses && instead of ||, which is the wrong operator flip. Option C negates only one part and keeps the other unchanged. Option D negates both but uses && instead of ||.",
      },
      {
        question: "A programmer writes: if (!(grade.equals(\"A\") || grade.equals(\"B\"))) to find non-A-non-B grades. Which is the equivalent De Morgan rewrite?",
        options: [
          'if (!grade.equals("A") || !grade.equals("B"))',
          'if (!grade.equals("A") && !grade.equals("B"))',
          'if (grade.equals("A") && grade.equals("B"))',
          'if (!(grade.equals("A") && grade.equals("B")))',
        ],
        answerIndex: 1,
        explanation: 'De Morgan\'s second law: !(A || B) == (!A && !B). So !(grade.equals("A") || grade.equals("B")) becomes !grade.equals("A") && !grade.equals("B") — the grade must not be "A" AND must not be "B". Option A incorrectly uses || (OR), which would be true for any grade since no grade can equal both "A" and "B" simultaneously. Option C omits the negations entirely. Option D applies De Morgan\'s first law (for AND) rather than the second.',
      },
    ],
  },
  {
    id: "equals-vs-doubleequals",
    name: ".equals() vs == for Object Comparison",
    unit: "Unit 3: Boolean Expressions and if Statements",
    unitNumber: 3,
    tags: ["new-u2", "MCQ frequent", "FRQ"],
    summary: "== compares object references (memory addresses), while .equals() compares the actual content of objects — always use .equals() for Strings on the AP exam.",
    formula: "s.equals(t) checks value; s == t checks reference",
    codeSnippet: `String a = "hello";
String b = "hello";
String c = new String("hello");

System.out.println(a == b);       // true (same pool reference)
System.out.println(a == c);       // false (c is a new object)
System.out.println(a.equals(c));  // true (same characters)

// AP-safe pattern: always use .equals()
String input = "yes";
if (input.equals("yes")) {
  System.out.println("confirmed");
}`,
    description: "In Java, == applied to objects checks whether both variables point to the exact same object in memory (reference equality). The .equals() method checks whether two objects have the same content (value equality). For String literals, Java's string pool may return the same object for identical literals, making == appear to work — but this is an implementation detail that fails for String objects created with new. On the AP exam, always use .equals() to compare String values; assume == on Strings tests reference only.",
    steps: [
      "Determine whether you are comparing primitives (int, double, boolean) or objects (String, etc.).",
      "For primitives, use == to compare values — this is correct and expected.",
      "For objects, use .equals() to compare content. Never use == to check String content on the AP exam.",
      "Be aware that .equals() called on a null reference will throw a NullPointerException — place the known non-null string on the left: \"literal\".equals(variable) is safer than variable.equals(\"literal\") when variable might be null.",
      "Remember: two String variables pointing to different objects but holding the same text are .equals() true but == false when at least one was created with new.",
    ],
    examples: [
      {
        problem: "String x = new String(\"AP\"); String y = new String(\"AP\"); What is the result of x == y and x.equals(y)?",
        solution: "x == y is false because new String(...) always allocates a new object in memory, so x and y are two distinct objects at different addresses. x.equals(y) is true because both strings contain the same characters 'A' and 'P'. This is the classic AP trap: the strings look the same but == fails when both are constructed with new.",
      },
    ],
    mcqs: [
      {
        question: 'Consider:\nString s1 = "Java";\nString s2 = "Java";\nString s3 = new String("Java");\n\nWhich of the following evaluates to false?',
        options: [
          "s1.equals(s2)",
          "s1.equals(s3)",
          "s1 == s2",
          "s1 == s3",
        ],
        answerIndex: 3,
        explanation: 's1 == s3 is false because s3 was created with new String(), producing a new object in heap memory separate from the string pool where s1 lives. Option A is true — s1 and s2 hold the same characters. Option B is also true — .equals() compares content, not address. Option C is likely true because s1 and s2 are string literals that Java\'s string pool interns to the same object — but AP exams treat .equals() as the only reliable String comparison, so == on literals is never the safe answer on an exam.',
      },
      {
        question: "A method receives a String parameter named color. Which condition correctly checks whether color is \"red\"?",
        options: [
          'if (color = "red")',
          'if (color == "red")',
          'if (color.equals("red"))',
          'if ("red" = color)',
        ],
        answerIndex: 2,
        explanation: 'color.equals("red") is the correct, AP-approved way to compare String content. Option A uses a single = (assignment), which is a compile error inside an if condition. Option B uses == for String comparison, which tests reference equality and may fail for String objects not in the pool — marked wrong on AP FRQs. Option D also uses assignment (=) and is a compile error.',
      },
    ],
  },
  {
    id: "compound-boolean",
    name: "Compound Boolean Expressions (truth tables)",
    unit: "Unit 3: Boolean Expressions and if Statements",
    unitNumber: 3,
    tags: ["new-u2", "MCQ frequent"],
    summary: "A compound boolean expression combines multiple boolean sub-expressions with logical operators; truth tables enumerate all possible combinations of inputs to determine the output.",
    formula: "",
    codeSnippet: `// Truth table approach in code
boolean p = true;
boolean q = false;

// && (AND) — both must be true
System.out.println(p && q);   // false
System.out.println(p && p);   // true

// || (OR) — at least one must be true
System.out.println(p || q);   // true
System.out.println(!p || !q); // true (false || true)

// Complex compound
System.out.println((p || q) && !(p && q)); // true — XOR`,
    description: "Compound boolean expressions are built by combining simpler boolean values or relational expressions using &&, ||, and !. A truth table is a systematic way to evaluate a compound expression by listing every possible combination of true and false for the input variables and computing the output for each row. For two variables there are four rows (TT, TF, FT, FF); for three variables there are eight rows. On the AP exam, tracing a compound expression by substituting given values row by row is the most reliable evaluation strategy.",
    steps: [
      "Identify all distinct boolean sub-expressions (variables or relational comparisons) in the compound expression.",
      "List all possible combinations of true/false values for those sub-expressions.",
      "For each combination, evaluate innermost parentheses and operators first according to precedence: ! first, then &&, then ||.",
      "Record the final true/false output for each combination row.",
      "To evaluate a specific case, substitute the actual values and trace through the expression step by step, one operator at a time.",
    ],
    examples: [
      {
        problem: "Build a truth table for (A || B) && !A and then evaluate when A = false and B = true.",
        solution: "Truth table:\nA=T, B=T: (T||T)&&!T = T&&F = F\nA=T, B=F: (T||F)&&!T = T&&F = F\nA=F, B=T: (F||T)&&!F = T&&T = T\nA=F, B=F: (F||F)&&!F = F&&T = F\n\nFor A=false, B=true: (false||true) = true; !false = true; true&&true = true. The expression evaluates to true.",
      },
    ],
    mcqs: [
      {
        question: "What is the value of (true && false) || (!false && true)?",
        options: ["true", "false", "A compile error", "Depends on operator precedence"],
        answerIndex: 0,
        explanation: "Evaluate left side: true && false = false. Evaluate right side: !false = true; true && true = true. Then: false || true = true. Option B is wrong because the right side of || saves the expression. Option C is wrong — the expression is valid Java. Option D is wrong — Java's operator precedence is well-defined (! before &&  before ||) and produces a deterministic result.",
      },
      {
        question: "For which combination of values of boolean p and boolean q is the expression (!p || q) && (p || !q) true?",
        options: [
          "p = true, q = true only",
          "p = false, q = false only",
          "p = true, q = true AND p = false, q = false",
          "All four combinations of p and q",
        ],
        answerIndex: 2,
        explanation: "Trace all four cases:\nT,T: (!T||T)&&(T||!T) = (F||T)&&(T||F) = T&&T = true.\nT,F: (!T||F)&&(T||!F) = (F||F)&&(T||T) = F&&T = false.\nF,T: (!F||T)&&(F||!T) = (T||T)&&(F||F) = T&&F = false.\nF,F: (!F||F)&&(F||!F) = (T||F)&&(F||T) = T&&T = true.\nSo the expression is true only when p and q have the same value (both true or both false). Option A and B are each only half correct. Option D is wrong because the T,F and F,T cases produce false.",
      },
    ],
  },
];
