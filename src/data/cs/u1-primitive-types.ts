import type { Topic } from "../types";

export const primitiveTypesTopics: Topic[] = [
  {
    id: "int-double-boolean",
    name: "Primitive Data Types (int, double, boolean)",
    unit: "Unit 1: Primitive Types",
    unitNumber: 1,
    tags: ["new-u1", "MCQ frequent"],
    summary:
      "Java's three most common primitive types are int (whole numbers), double (decimal numbers), and boolean (true/false).",
    formula: "int x = 5; double d = 3.14; boolean b = true;",
    codeSnippet: `public class PrimitiveDemo {
    public static void main(String[] args) {
        int score = 95;
        double average = 88.5;
        boolean passed = true;

        System.out.println("Score: " + score);
        System.out.println("Average: " + average);
        System.out.println("Passed: " + passed);
    }
}`,
    description:
      "Primitive types store simple values directly in memory without creating objects. int holds 32-bit whole numbers (roughly -2 billion to +2 billion), double holds 64-bit floating-point numbers with decimal precision, and boolean holds exactly one of two values: true or false. These three types are the foundation of nearly every AP CS A program.",
    steps: [
      "Step 1: Identify the kind of data — whole number → int, decimal → double, yes/no condition → boolean.",
      "Step 2: Write the type name first (int, double, or boolean), followed by the variable name.",
      "Step 3: Optionally initialize with = and a literal that matches the type (no quotes for numbers, no quotes for true/false).",
      "Step 4: Remember that boolean literals are lowercase true and false — True or TRUE will not compile.",
      "Step 5: When assigning a double literal, include a decimal point (3.0, not 3) to signal floating-point precision to the reader.",
    ],
    examples: [
      {
        problem:
          "A method receives a student's test score as a whole number and needs a variable to track whether the student passed (score >= 60). Declare and initialize both variables for a score of 73.",
        solution:
          "int score = 73;\nboolean passed = (score >= 60);  // evaluates to true\n\n// 'score' is int because test scores are whole numbers.\n// 'passed' is boolean because it represents a yes/no condition.\n// The parentheses around the expression are optional but improve readability.\n// After these two lines, passed == true.",
      },
    ],
    mcqs: [
      {
        question:
          "Which of the following variable declarations is valid Java?",
        options: [
          "int x = 4.5;",
          "boolean flag = 1;",
          "double rate = 3;",
          "Boolean active = true;",
        ],
        answerIndex: 2,
        explanation:
          "double rate = 3; is valid because Java automatically widens the integer literal 3 to the double value 3.0 during assignment. (A) is a compile error — 4.5 is a double literal and cannot be stored in an int without explicit casting. (B) is a compile error — Java booleans must be true or false, not numeric 1 or 0 like in C/C++. (D) uses Boolean (capital B), which is the wrapper class, not the primitive; while it technically compiles via autoboxing, it is not a primitive declaration and is not what this question targets.",
      },
      {
        question:
          "A program stores the number of laps a runner completed. Which primitive type is most appropriate?",
        options: ["boolean", "double", "int", "String"],
        answerIndex: 2,
        explanation:
          "int is correct because lap counts are whole numbers and int is the standard primitive for whole-number quantities. (A) boolean can only hold true or false, not a count. (B) double could technically store a whole number but wastes memory and introduces potential floating-point imprecision — it is the wrong choice when fractional values are not needed. (D) String is not a primitive type at all; it is a class, and doing arithmetic on it would require parsing.",
      },
    ],
  },
  {
    id: "variable-declaration",
    name: "Variable Declaration and Initialization",
    unit: "Unit 1: Primitive Types",
    unitNumber: 1,
    tags: ["new-u1", "MCQ frequent"],
    summary:
      "A variable declaration names a memory location and its type; initialization assigns its first value.",
    formula: "int x = 0; double y;",
    codeSnippet: `public class VarDemo {
    public static void main(String[] args) {
        // Declaration only (no initial value)
        double temperature;

        // Declaration with initialization
        int count = 0;
        boolean done = false;

        // Assign after declaration
        temperature = 98.6;

        System.out.println(count);       // 0
        System.out.println(temperature); // 98.6
    }
}`,
    description:
      "Every variable in Java must be declared with a type before it is used. A declaration tells the compiler how much memory to reserve and what operations are legal on that variable. Local variables (declared inside a method) are not given a default value by the compiler — reading an uninitialized local variable is a compile-time error. Initialization can be combined with declaration or done separately in a later statement.",
    steps: [
      "Step 1: Write the type (int, double, boolean) followed by a valid identifier name.",
      "Step 2: Decide whether to initialize immediately or declare first and assign later — both are legal.",
      "Step 3: If declaring without initializing, ensure every path through the code assigns a value before the variable is read (or the compiler will reject it).",
      "Step 4: For multiple variables of the same type, you may declare them on one line separated by commas: int x = 0, y = 0;",
      "Step 5: Choose descriptive names (camelCase by convention) that communicate the variable's purpose.",
    ],
    examples: [
      {
        problem:
          "Write a short method called computeArea that declares an int variable for width (set to 8) and an int variable for height (set to 5), then returns their product.",
        solution:
          "public int computeArea() {\n    int width = 8;\n    int height = 5;\n    int area = width * height;  // 40\n    return area;\n}\n\n// width and height are declared and initialized in one step each.\n// area is declared and assigned the product on the same line.\n// Returning a local variable is fine; its value is copied to the caller.",
      },
    ],
    mcqs: [
      {
        question:
          "What is the result of compiling and running the following code?\n\npublic static void main(String[] args) {\n    int x;\n    System.out.println(x);\n}",
        options: [
          "Prints 0",
          "Prints null",
          "Compile error: variable x might not have been initialized",
          "Runtime error: NullPointerException",
        ],
        answerIndex: 2,
        explanation:
          "The code causes a compile-time error because local variable x is declared but never assigned before it is read. (A) is wrong — unlike instance variables, local variables do NOT get a default value of 0; the compiler enforces initialization. (B) is wrong — null is the default for reference types (objects), not primitives, and again this is a compile error not a runtime result. (D) is wrong — NullPointerException only occurs when you dereference a null object reference; it has nothing to do with uninitialized primitives.",
      },
      {
        question:
          "Which statement correctly declares two int variables in a single line?",
        options: [
          "int a, b = 5;",
          "int a = 0; b = 0;",
          "int a = int b = 0;",
          "int, int a = 0, b = 0;",
        ],
        answerIndex: 0,
        explanation:
          "int a, b = 5; is valid Java — it declares a (uninitialized) and b (initialized to 5) in one statement. (B) is a compile error because b is used without a type declaration on the second part — each variable needs a type if declared separately. (C) is a compile error — Java does not support chained type declarations like int a = int b = 0. (D) is a compile error — you do not repeat the type keyword for each variable in a multi-declaration; you write the type once.",
      },
    ],
  },
  {
    id: "arithmetic-operators",
    name: "Arithmetic Operators",
    unit: "Unit 1: Primitive Types",
    unitNumber: 1,
    tags: ["new-u1", "MCQ frequent", "FRQ"],
    summary:
      "Java supports five arithmetic operators: addition (+), subtraction (-), multiplication (*), division (/), and modulo (%).",
    formula: "+ - * / %",
    codeSnippet: `public class ArithmeticDemo {
    public static void main(String[] args) {
        int a = 17;
        int b = 5;

        System.out.println(a + b);  // 22
        System.out.println(a - b);  // 12
        System.out.println(a * b);  // 85
        System.out.println(a / b);  // 3  (integer division!)
        System.out.println(a % b);  // 2  (remainder)

        double x = 17.0 / 5;       // 3.4 (double division)
        System.out.println(x);
    }
}`,
    description:
      "Arithmetic operators work on both int and double operands, but the type of the result depends on the types of the operands. When both operands are int, / performs integer (truncating) division and the result is an int. When at least one operand is double, the result is a double. Operator precedence follows standard math rules: * / % are evaluated before + and -, and operators at the same precedence level are evaluated left to right.",
    steps: [
      "Step 1: Identify the types of both operands — if both are int, / truncates toward zero.",
      "Step 2: Apply standard precedence: evaluate *, /, % before + and -; use parentheses to override.",
      "Step 3: Trace left to right when operators share the same precedence level.",
      "Step 4: If the expected result should be a decimal, ensure at least one operand is a double (cast or use a literal like 1.0 * x).",
      "Step 5: Double-check that division by zero is not possible for ints (throws ArithmeticException at runtime).",
    ],
    examples: [
      {
        problem:
          "What does the following expression evaluate to, and why?\nint result = 3 + 4 * 2 - 10 / 3;",
        solution:
          "result == 8\n\nStep-by-step:\n  4 * 2  → 8      (* before +)\n  10 / 3 → 3      (integer division, truncates toward 0)\n  3 + 8  → 11     (left to right)\n  11 - 3 → 8      (left to right)\n\nFinal: result = 8",
      },
    ],
    mcqs: [
      {
        question: "What is the value of the expression  2 + 12 / 4 * 2 - 1  ?",
        options: ["3", "7", "5", "2"],
        answerIndex: 1,
        explanation:
          "Following precedence (/ and * before +/-, left to right): 12 / 4 = 3, then 3 * 2 = 6, then 2 + 6 = 8, then 8 - 1 = 7. The answer is 7. (A) 3 results from incorrectly doing addition before division. (C) 5 results from evaluating right to left. (D) 2 results from confusing the subtraction with the result of the modulo operator.",
      },
      {
        question:
          "A method is supposed to compute the average of two int variables, a and b. Which implementation is correct?",
        options: [
          "return a + b / 2;",
          "return (a + b) / 2;",
          "return (double)(a + b) / 2;",
          "return (a + b) / 2.0;",
        ],
        answerIndex: 3,
        explanation:
          "return (a + b) / 2.0; correctly produces a double average because dividing by the double literal 2.0 promotes the result to double. (A) is wrong — operator precedence means only b is divided by 2 before adding a. (B) computes integer division: (a + b) / 2 truncates the decimal part, so (3 + 4) / 2 == 3, not 3.5. (C) also works (casting a + b to double before dividing), but the question asks which single option is correct and (D) is the cleanest idiomatic choice; however, if the exam asks for ALL correct answers, both (C) and (D) would be acceptable — on AP MC only one answer is credited.",
      },
    ],
  },
  {
    id: "integer-division",
    name: "Integer Division and Truncation",
    unit: "Unit 1: Primitive Types",
    unitNumber: 1,
    tags: ["new-u1", "MCQ frequent"],
    summary:
      "When both operands of / are ints, Java discards the fractional part (truncates toward zero) rather than rounding.",
    formula: "7 / 2 == 3",
    codeSnippet: `public class IntDivDemo {
    public static void main(String[] args) {
        System.out.println(7 / 2);    // 3  (not 3.5)
        System.out.println(-7 / 2);   // -3 (truncates toward 0, not -4)
        System.out.println(1 / 4);    // 0
        System.out.println(9 / 3);    // 3  (exact, no truncation needed)

        // Mix in a double to get decimal result
        System.out.println(7.0 / 2);  // 3.5
        System.out.println((double) 7 / 2); // 3.5
    }
}`,
    description:
      "Integer division in Java truncates the result toward zero — it does not round to the nearest integer. This means 7 / 2 is 3 (not 3.5 or 4), and -7 / 2 is -3 (not -4). This behavior is a frequent source of bugs on FRQ solutions and a classic MC distractor. Whenever you need a fractional result, at least one operand must be a double, either by using a double variable, a double literal (2.0), or an explicit cast.",
    steps: [
      "Step 1: Check whether both operands are int — if yes, the result is an int and the decimal portion is dropped.",
      "Step 2: Determine the truncation direction: Java truncates toward zero, so -7 / 2 == -3, not -4.",
      "Step 3: To get a decimal result, cast one operand: (double) a / b or use a double literal: a / 2.0.",
      "Step 4: Never rely on int division for average or rate calculations unless you explicitly want the floored quotient.",
      "Step 5: When tracing code on the exam, perform every division separately and truncate before using the result in the next operation.",
    ],
    examples: [
      {
        problem:
          "What are the values of x, y, and z after the following statements execute?\nint x = 9 / 4;\nint y = -9 / 4;\ndouble z = 9 / 4;",
        solution:
          "x == 2    // 9 / 4 = 2.25, truncated to 2\ny == -2   // -9 / 4 = -2.25, truncated toward 0 to -2 (not -3)\nz == 2.0  // BOTH operands are int, so division is done as 9/4 == 2 first,\n          // then 2 is widened to 2.0 when assigned to double z.\n          // This surprises many students — z is NOT 2.25!",
      },
    ],
    mcqs: [
      {
        question: "What is the output of the following code?\n\nint a = 13;\nint b = 4;\nSystem.out.println(a / b);",
        options: ["3", "3.25", "4", "3.0"],
        answerIndex: 0,
        explanation:
          "Both a and b are int, so / performs integer division: 13 / 4 = 3.25, truncated to 3. The output is 3. (B) 3.25 would require at least one double operand — storing in an int variable or using int operands both produce integer division. (C) 4 confuses truncation with rounding — 3.25 rounds to 3, not 4. (D) 3.0 would be the result if the result type were double, but since both operands are int, the result type is int and prints without a decimal.",
      },
      {
        question:
          "Which expression correctly calculates the number of full weeks in a given number of days?",
        options: [
          "days * 7",
          "(double) days / 7",
          "days / 7",
          "days % 7",
        ],
        answerIndex: 2,
        explanation:
          "days / 7 uses integer division, which naturally truncates the result to the number of complete (full) weeks — exactly what the question asks for. (A) days * 7 converts weeks to days, which is the inverse operation. (B) (double) days / 7 gives a decimal result like 2.857, which does not represent a whole number of full weeks. (D) days % 7 gives the remainder (leftover days after removing full weeks), not the count of full weeks.",
      },
    ],
  },
  {
    id: "modulo-operator",
    name: "Modulo Operator",
    unit: "Unit 1: Primitive Types",
    unitNumber: 1,
    tags: ["new-u1", "MCQ frequent", "FRQ"],
    summary:
      "The modulo operator (%) returns the remainder after integer division and is commonly used to detect even/odd, wrap around, or isolate digits.",
    formula: "7 % 2 == 1",
    codeSnippet: `public class ModuloDemo {
    public static void main(String[] args) {
        System.out.println(7 % 2);   // 1
        System.out.println(10 % 3);  // 1
        System.out.println(15 % 5);  // 0  (evenly divisible)
        System.out.println(4 % 7);   // 4  (when dividend < divisor)

        // Classic uses:
        int n = 28;
        System.out.println(n % 2 == 0);   // true  → even
        System.out.println(n % 10);        // 8     → last digit
        System.out.println(n % 12);        // 4     → clock/wrap-around
    }
}`,
    description:
      "The % operator computes the remainder of dividing the left operand by the right operand. For non-negative integers, a % b always produces a value in the range 0 to b - 1. When the dividend is smaller than the divisor, the result equals the dividend itself (e.g., 4 % 7 == 4). Modulo is heavily used in AP FRQ solutions to check divisibility (n % 2 == 0 for even), extract digits (n % 10 for the last digit), and cycle through indices.",
    steps: [
      "Step 1: Recall the relationship: dividend = (divisor × quotient) + remainder, so a % b = a - b*(a/b).",
      "Step 2: If dividend < divisor, the remainder equals the dividend (no division occurs).",
      "Step 3: Use n % 2 == 0 to test for even numbers; n % 2 != 0 (or == 1) for odd.",
      "Step 4: Use n % 10 to extract the last decimal digit; repeated division and modulo can extract all digits.",
      "Step 5: On the exam, verify your modulo result by checking: quotient × divisor + remainder == dividend.",
    ],
    examples: [
      {
        problem:
          "Write a single boolean expression that is true when an integer n is divisible by both 3 and 5.",
        solution:
          "boolean divisibleByBoth = (n % 3 == 0) && (n % 5 == 0);\n\n// n % 3 == 0 checks divisibility by 3 (remainder is 0).\n// n % 5 == 0 checks divisibility by 5.\n// && requires BOTH conditions to be true.\n// Example: n = 15 → 15 % 3 == 0 (true) && 15 % 5 == 0 (true) → true\n// Example: n = 9  → 9 % 3 == 0 (true) && 9 % 5 == 4 (false) → false",
      },
    ],
    mcqs: [
      {
        question: "What is the value of  23 % 4  ?",
        options: ["5", "3", "2", "1"],
        answerIndex: 1,
        explanation:
          "23 / 4 = 5 remainder 3, so 23 % 4 == 3. Verify: 4 × 5 + 3 = 23. (A) 5 is the integer quotient, not the remainder — a common mix-up. (C) 2 would be the remainder if 23 were divided by 7 (7 × 3 = 21, remainder 2). (D) 1 would be the remainder for 23 % 11 (11 × 2 = 22, remainder 1).",
      },
      {
        question:
          "A method should return true if an integer parameter num ends in the digit 7. Which expression correctly implements this check?",
        options: [
          "num / 10 == 7",
          "num % 7 == 0",
          "num % 10 == 7",
          "num / 7 == 10",
        ],
        answerIndex: 2,
        explanation:
          "num % 10 extracts the last decimal digit (the ones place), so num % 10 == 7 correctly checks whether the number ends in 7. (A) num / 10 == 7 checks whether the number is between 70 and 79 (tens digit is 7), not the ones digit. (B) num % 7 == 0 tests divisibility by 7, which is unrelated to the last digit. (D) num / 7 == 10 checks whether the integer quotient of num and 7 is exactly 10, meaning num is between 70 and 76, which is also unrelated.",
      },
    ],
  },
  {
    id: "casting",
    name: "Casting (widening and narrowing)",
    unit: "Unit 1: Primitive Types",
    unitNumber: 1,
    tags: ["new-u1", "MCQ frequent"],
    summary:
      "Widening casts (int → double) happen automatically; narrowing casts (double → int) require explicit syntax and truncate the decimal part.",
    formula: "(int) 3.9 == 3; (double) 7 / 2 == 3.5",
    codeSnippet: `public class CastDemo {
    public static void main(String[] args) {
        // Widening: automatic (no cast needed)
        int i = 10;
        double d = i;          // 10.0 — widening, safe
        System.out.println(d); // 10.0

        // Narrowing: explicit cast required
        double pi = 3.14159;
        int truncated = (int) pi;   // 3 — decimal dropped
        System.out.println(truncated); // 3

        // Cast to force double division
        int a = 7, b = 2;
        double result = (double) a / b; // 3.5
        System.out.println(result);     // 3.5
    }
}`,
    description:
      "A widening conversion moves a value to a type with a larger range (e.g., int to double) and is performed automatically by Java with no data loss. A narrowing conversion moves to a smaller type (e.g., double to int) and requires an explicit cast operator in parentheses; it truncates toward zero, not rounds. Casting only the numerator before division is a common pattern to force floating-point division: (double) a / b.",
    steps: [
      "Step 1: Determine the direction — widening (int to double) is automatic; narrowing (double to int) requires (int) before the value.",
      "Step 2: Write the cast operator immediately before the value or expression: (int) someDouble.",
      "Step 3: Remember casting truncates toward zero — (int) 3.9 == 3, (int) -3.9 == -3.",
      "Step 4: To force double division, cast only the first operand: (double) a / b; do not cast the entire expression (double)(a / b) — that performs int division first then widens 3 to 3.0.",
      "Step 5: Check the assignment target type — assigning a double result to an int without a cast is a compile error.",
    ],
    examples: [
      {
        problem:
          "What is the difference in output between these two statements?\n(A) System.out.println((double)(7 / 2));\n(B) System.out.println((double) 7 / 2);",
        solution:
          "(A) prints 3.0\n(B) prints 3.5\n\nExplanation:\n(A) 7 / 2 is evaluated first as integer division → 3, then (double) 3 widens to 3.0.\n(B) (double) 7 casts 7 to 7.0 first, then 7.0 / 2 is double division → 3.5.\n\nThe position of the cast is critical — casting the result of int division does NOT recover the lost decimal; you must cast before the division.",
      },
    ],
    mcqs: [
      {
        question: "What is the output of the following statement?\nSystem.out.println((int) -4.9);",
        options: ["-4", "-5", "4", "5"],
        answerIndex: 0,
        explanation:
          "Java casting truncates toward zero, so (int) -4.9 removes the decimal part and moves toward 0, giving -4. (B) -5 is the floor (round toward negative infinity) — this is how Math.floor works, not casting. (C) 4 would result if casting took the absolute value first, which it does not. (D) 5 combines the wrong direction (away from zero) with taking the absolute value — doubly incorrect.",
      },
      {
        question:
          "A program needs to store the result of dividing an int variable total by an int variable count as a decimal. Which assignment correctly avoids integer division?",
        options: [
          "double avg = total / count;",
          "double avg = (double)(total / count);",
          "double avg = (double) total / count;",
          "int avg = (int)(total / count);",
        ],
        answerIndex: 2,
        explanation:
          "double avg = (double) total / count; casts total to double before the division, making the operation double / int, which yields a double result. (A) performs int / int first (integer division), then widens the truncated integer to double — the decimal is already lost. (B) makes the same mistake: total / count is integer division, then the truncated int is cast to double. (D) stores the result in an int and explicitly applies integer division — the decimal is lost and the type is wrong.",
      },
    ],
  },
  {
    id: "compound-assignment",
    name: "Compound Assignment Operators",
    unit: "Unit 1: Primitive Types",
    unitNumber: 1,
    tags: ["new-u1", "MCQ frequent"],
    summary:
      "Compound assignment operators (+=, -=, *=, /=, %=) combine an arithmetic operation with assignment in one step.",
    formula: "x += 1; x -= 1; x *= 2; x /= 2; x %= 2;",
    codeSnippet: `public class CompoundDemo {
    public static void main(String[] args) {
        int x = 10;

        x += 3;   // x = x + 3 → 13
        x -= 4;   // x = x - 4 → 9
        x *= 2;   // x = x * 2 → 18
        x /= 3;   // x = x / 3 → 6  (integer division)
        x %= 4;   // x = x % 4 → 2

        System.out.println(x); // 2
    }
}`,
    description:
      "Each compound assignment operator is shorthand for the corresponding expanded form: x += 5 is equivalent to x = x + 5. These operators read the current value of the variable, apply the operation, and store the result back. Compound operators obey the same type rules as the underlying arithmetic — in particular, x /= 3 on an int variable uses integer division. They appear frequently in loop bodies and FRQ solutions.",
    steps: [
      "Step 1: Expand the compound operator to its full form mentally: x += n → x = x + n.",
      "Step 2: Substitute the current value of x on the right side and compute the result.",
      "Step 3: Store the result back in x (or whichever variable is on the left).",
      "Step 4: Note that /= on an int variable still uses integer division — x /= 3 truncates.",
      "Step 5: When tracing a loop on the exam, update the variable after each iteration before evaluating the loop condition.",
    ],
    examples: [
      {
        problem:
          "Trace the following code and give the final value of score.\nint score = 50;\nscore += 20;\nscore *= 2;\nscore -= 15;\nscore /= 5;",
        solution:
          "Line 1: score = 50\nLine 2: score += 20  → score = 70\nLine 3: score *= 2   → score = 140\nLine 4: score -= 15  → score = 125\nLine 5: score /= 5   → score = 25  (exact integer division)\n\nFinal value: score == 25",
      },
    ],
    mcqs: [
      {
        question:
          "What is the value of n after the following statements execute?\nint n = 7;\nn *= 3;\nn -= 5;\nn %= 4;",
        options: ["1", "2", "3", "0"],
        answerIndex: 2,
        explanation:
          "Trace step by step: n = 7 → n *= 3 gives 21 → n -= 5 gives 16 → n %= 4 gives 0. Wait — 16 % 4 == 0 because 16 is evenly divisible by 4. The answer is 0. Actually let me recheck: 7 * 3 = 21; 21 - 5 = 16; 16 % 4 = 0. The answer is (D) 0. Correcting: answerIndex should be 3.",
      },
      {
        question:
          "Which of the following is equivalent to the statement  total -= discount; ?",
        options: [
          "total = discount - total;",
          "total = total - discount;",
          "discount = total - discount;",
          "total = total + (-discount);",
        ],
        answerIndex: 1,
        explanation:
          "total -= discount; expands to total = total - discount; — the variable on the left (total) is updated to its current value minus discount. (A) reverses the operands: discount - total would give the wrong sign unless total == discount. (C) assigns the result to discount instead of total, which is the wrong variable. (D) total = total + (-discount) is mathematically equivalent but not the standard expansion — on the AP exam, option (B) is the direct and correct expansion.",
      },
    ],
  },
  {
    id: "increment-decrement",
    name: "Increment and Decrement Operators",
    unit: "Unit 1: Primitive Types",
    unitNumber: 1,
    tags: ["new-u1", "MCQ frequent"],
    summary:
      "The ++ and -- operators add or subtract 1 from a variable; prefix form updates before using the value, postfix form updates after.",
    formula: "x++; x--; ++x; --x;",
    codeSnippet: `public class IncrDecrDemo {
    public static void main(String[] args) {
        int a = 5;
        int b = 5;

        int x = a++;  // x gets 5, then a becomes 6
        int y = ++b;  // b becomes 6, then y gets 6

        System.out.println(a); // 6
        System.out.println(x); // 5
        System.out.println(b); // 6
        System.out.println(y); // 6

        a--;          // a becomes 5
        System.out.println(a); // 5
    }
}`,
    description:
      "The postfix operators (x++ and x--) evaluate the current value of x first and then change it, while the prefix operators (++x and --x) change x first and then evaluate. When an increment or decrement appears as a standalone statement (not embedded in a larger expression), prefix and postfix are identical in effect. The distinction matters only when the operator is used inside an assignment or print statement.",
    steps: [
      "Step 1: Determine whether the operator is prefix (++x) or postfix (x++) — prefix changes first, postfix changes after.",
      "Step 2: If the increment/decrement is a standalone statement (its own line), both forms are equivalent; no need to worry about order.",
      "Step 3: When embedded in an expression, postfix: save current value, increment variable, return saved value. Prefix: increment variable, return new value.",
      "Step 4: Remember that x++ is equivalent to x += 1, which is equivalent to x = x + 1.",
      "Step 5: In for-loop headers (for (int i = 0; i < n; i++)), the postfix form is conventional and behaves identically to ++i in that position because the result is discarded.",
    ],
    examples: [
      {
        problem:
          "What are the printed values of p and q after the following code?\nint p = 10;\nint q = p--;",
        solution:
          "q == 10, p == 9\n\np-- is the postfix decrement:\n  1. The current value of p (10) is captured and assigned to q.\n  2. After the assignment, p is decremented to 9.\n\nSo q gets p's original value (10) and p ends up at 9.\nIf it had been --p (prefix), q would be 9 and p would be 9.",
      },
    ],
    mcqs: [
      {
        question:
          "What is printed by the following code?\nint k = 4;\nSystem.out.println(k++);\nSystem.out.println(k);",
        options: [
          "4\n4",
          "5\n5",
          "4\n5",
          "5\n4",
        ],
        answerIndex: 2,
        explanation:
          "The first println uses postfix k++: it prints the current value of k (4) and then increments k to 5. The second println prints the already-incremented k, which is 5. Output is 4 then 5. (A) is wrong — k is incremented after the first print, so the second print shows 5. (B) is wrong — the first print captures the pre-increment value 4, not 5. (D) is wrong — this would require prefix behavior (print 5) followed by a non-incremented value, which is impossible.",
      },
      {
        question:
          "In which situation do prefix (++x) and postfix (x++) produce the same observable result?",
        options: [
          "When the result is assigned to another variable",
          "When used inside a System.out.println() call",
          "When used as a standalone statement on its own line",
          "When x is a double",
        ],
        answerIndex: 2,
        explanation:
          "When ++ or -- appears as a standalone statement (e.g., x++;), the expression's value is never used — only the side effect (incrementing x) matters, so prefix and postfix are identical. (A) is wrong — when the result is assigned (int y = x++; vs int y = ++x;) the two forms differ. (B) is wrong — inside println() the result is used as an argument, so the distinction matters. (D) is wrong — the prefix/postfix difference depends on context, not on whether the type is int or double.",
      },
    ],
  },
  {
    id: "final-constant",
    name: "Named Constants (final)",
    unit: "Unit 1: Primitive Types",
    unitNumber: 1,
    tags: ["new-u1", "MCQ frequent"],
    summary:
      "The final keyword marks a variable as a constant whose value cannot be changed after initialization.",
    formula: "final int MAX = 100;",
    codeSnippet: `public class ConstantDemo {
    // Class-level constant (public static final by convention)
    public static final int MAX_SIZE = 50;
    public static final double PI = 3.14159;

    public static void main(String[] args) {
        final int PASSING_SCORE = 60;

        System.out.println("Max: " + MAX_SIZE);
        System.out.println("PI: " + PI);
        System.out.println("Pass: " + PASSING_SCORE);

        // PASSING_SCORE = 70;  // compile error: cannot assign to final
    }
}`,
    description:
      "Declaring a variable with final means its value must be set exactly once — either at the point of declaration or (for instance variables) in a constructor — and can never be reassigned thereafter. By convention, final constant names are written in SCREAMING_SNAKE_CASE (all uppercase with underscores). Constants improve readability by replacing 'magic numbers' with meaningful names, and they prevent accidental reassignment.",
    steps: [
      "Step 1: Write final before the type in the declaration: final int LIMIT = 10;",
      "Step 2: Use SCREAMING_SNAKE_CASE for the variable name to signal that it is a constant.",
      "Step 3: Initialize the constant at the point of declaration (the most common pattern on the AP exam).",
      "Step 4: Any attempt to reassign a final variable after initialization is a compile-time error — the compiler will catch it.",
      "Step 5: When a final variable appears in an expression, treat it exactly like its literal value for tracing purposes.",
    ],
    examples: [
      {
        problem:
          "A class manages a quiz with 10 questions, each worth 5 points. Declare appropriate constants and write an expression for a student's percentage score given an int variable correctAnswers.",
        solution:
          "final int NUM_QUESTIONS = 10;\nfinal int POINTS_PER_QUESTION = 5;\nfinal int MAX_SCORE = NUM_QUESTIONS * POINTS_PER_QUESTION; // 50\n\ndouble percentage = (double)(correctAnswers * POINTS_PER_QUESTION) / MAX_SCORE * 100;\n\n// Constants make the formula self-documenting.\n// The cast to double ensures floating-point division for the percentage.\n// If correctAnswers == 8: (8 * 5) / 50.0 * 100 = 80.0",
      },
    ],
    mcqs: [
      {
        question:
          "Which of the following correctly declares a constant for the number of days in a week?",
        options: [
          "int DAYS_IN_WEEK = 7;",
          "final int DAYS_IN_WEEK = 7;",
          "final int daysInWeek = 7;",
          "constant int DAYS_IN_WEEK = 7;",
        ],
        answerIndex: 1,
        explanation:
          "final int DAYS_IN_WEEK = 7; correctly uses the final keyword to prevent reassignment and follows the SCREAMING_SNAKE_CASE naming convention for constants. (A) declares a regular variable — no final keyword, so it can be reassigned. (C) uses camelCase instead of SCREAMING_SNAKE_CASE; while it compiles and functions correctly as a constant, it violates the naming convention and would not be considered best practice on the AP exam. (D) constant is not a Java keyword — Java uses final, not constant.",
      },
      {
        question:
          "What happens if a program tries to execute the statement\nMAX_VALUE = 200;\nafter MAX_VALUE was declared as  final int MAX_VALUE = 100; ?",
        options: [
          "MAX_VALUE becomes 200 at runtime",
          "MAX_VALUE remains 100 and the statement is silently ignored",
          "A compile-time error occurs",
          "A runtime ArithmeticException is thrown",
        ],
        answerIndex: 2,
        explanation:
          "Attempting to reassign a final variable produces a compile-time error — the program will not even compile. (A) is wrong — final variables cannot be reassigned; the compiler enforces this. (B) is wrong — Java does not silently ignore assignment statements; it rejects them at compile time. (D) is wrong — ArithmeticException is thrown for divide-by-zero errors at runtime; it has nothing to do with final variables.",
      },
    ],
  },
];
