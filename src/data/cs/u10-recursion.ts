export const recursionTopics = [
  {
    id: "recursion-base-case",
    name: "Base Case in Recursion",
    unit: "Unit 10: Recursion",
    unitNumber: 10,
    tags: ["new-u4", "MCQ frequent"],
    summary: "The base case is the stopping condition that terminates recursion and directly returns a value without making another recursive call.",
    codeSnippet: `// Without base case → StackOverflowError
public static int countDown(int n) {
    // MISSING base case — infinite recursion!
    return countDown(n - 1);
}

// Correct version with base case
public static int countDown(int n) {
    if (n <= 0) {        // base case
        return 0;
    }
    return countDown(n - 1);  // recursive case
}`,
    description: "Every recursive method must have at least one base case — a condition under which the method returns a result immediately without calling itself again. The base case handles the simplest possible input. Without a reachable base case, the method calls itself indefinitely, exhausting the call stack and causing a StackOverflowError at runtime.",
    steps: [
      "Identify the simplest input(s) the method should handle directly (e.g., n == 0, empty array, index out of bounds).",
      "Write an if statement at the top of the method that checks for the base case and returns the known answer immediately.",
      "Confirm the base case is reachable — verify that every execution path eventually satisfies the base case condition.",
      "Test with the smallest valid input (e.g., call with 0 or an empty structure) to ensure the base case fires and returns the correct value.",
      "Confirm no recursive call appears before the base case check, so infinite recursion cannot occur."
    ],
    examples: [
      {
        problem: "Write a recursive method sum(int n) that returns 1 + 2 + ... + n. What is the base case?",
        solution: "The base case is n == 1 (or n <= 0 returning 0). When n == 1, return 1 directly. Otherwise return n + sum(n - 1). For sum(3): sum(3) = 3 + sum(2) = 3 + 2 + sum(1) = 3 + 2 + 1 = 6."
      }
    ],
    mcqs: [
      {
        question: "What happens when a recursive method is called but has no reachable base case?",
        options: [
          "The method returns 0 by default.",
          "The compiler catches the error at compile time.",
          "A StackOverflowError occurs at runtime.",
          "The method runs once and stops."
        ],
        answerIndex: 2,
        explanation: "A StackOverflowError occurs at runtime (C) because each call adds a new frame to the call stack, and without a base case the stack fills up completely. Java does not detect infinite recursion at compile time (B is wrong). There is no default return of 0 (A is wrong). The method does not stop after one call — it keeps calling itself (D is wrong)."
      },
      {
        question: "Which of the following is a valid base case for a recursive method that computes the product of the first n positive integers?",
        options: [
          "if (n == 1) return n * product(n - 1);",
          "if (n == 0) return 0;",
          "if (n == 1) return 1;",
          "if (n > 1) return 1;"
        ],
        answerIndex: 2,
        explanation: "The product 1! = 1, so if (n == 1) return 1; (C) is the correct base case. Option A makes a recursive call inside the base case, so it is not a true base case. Option B returns 0, which would make all products 0 (multiplying by 0 at the bottom). Option D triggers for n > 1, which is the recursive case, not the smallest input."
      }
    ]
  },
  {
    id: "recursion-recursive-case",
    name: "Recursive Case and Progress Toward Base Case",
    unit: "Unit 10: Recursion",
    unitNumber: 10,
    tags: ["new-u4", "MCQ frequent", "FRQ"],
    summary: "The recursive case calls the method with a smaller or simpler argument, guaranteeing eventual progress toward the base case.",
    codeSnippet: `// Each call reduces n by 1, progressing toward n == 0
public static int sumDigits(int n) {
    if (n == 0) {           // base case
        return 0;
    }
    // recursive case: last digit + sum of remaining digits
    return (n % 10) + sumDigits(n / 10);
}
// sumDigits(123) → 3 + sumDigits(12)
//                     → 2 + sumDigits(1)
//                         → 1 + sumDigits(0) → 0`,
    description: "The recursive case is every branch of a recursive method that makes a call to itself. For the recursion to terminate correctly, each recursive call must pass a strictly simpler or smaller argument — such as n - 1, a shorter array range, or a smaller string — so that repeated calls eventually reach the base case. Failing to make progress (for example, calling the method with the same argument) causes infinite recursion.",
    steps: [
      "Determine how to break the current problem into a smaller version of the same problem (e.g., solve for n, then reuse the solution for n - 1).",
      "Write the recursive call with an argument that is measurably closer to the base case (smaller integer, reduced index range, shorter string).",
      "Combine the result of the recursive call with any additional work needed for the current call (e.g., add n to the result of sum(n - 1)).",
      "Trace the call chain on paper for a small input (n = 3) to verify each call does in fact move toward the base case.",
      "Check edge cases: confirm that if n equals the base case value, the recursive case is NOT reached."
    ],
    examples: [
      {
        problem: "Does the following recursive case make progress? public static int mystery(int n) { if (n == 0) return 0; return n + mystery(n); }",
        solution: "No — mystery(n) calls mystery(n) with the same argument n, so it never progresses toward the base case n == 0. This causes infinite recursion and a StackOverflowError. The fix is to call mystery(n - 1) so each call reduces n by 1."
      }
    ],
    mcqs: [
      {
        question: "A student writes: public static int f(int n) { if (n == 0) return 1; return f(n); }. What is the result of calling f(3)?",
        options: [
          "Returns 1",
          "Returns 3",
          "Causes a StackOverflowError",
          "Returns 0"
        ],
        answerIndex: 2,
        explanation: "f(3) calls f(3) with the same argument forever, so a StackOverflowError occurs (C). The base case n == 0 is never reached because n never decreases. The method does not return 1 (A), 3 (B), or 0 (D) — it never returns at all."
      },
      {
        question: "Which recursive case correctly makes progress toward the base case if (n == 1) for a method that computes the sum 1 + 2 + ... + n?",
        options: [
          "return n + sum(n + 1);",
          "return n + sum(n - 1);",
          "return n + sum(n);",
          "return sum(n - 1);"
        ],
        answerIndex: 1,
        explanation: "return n + sum(n - 1) (B) reduces n by 1 each call, guaranteeing we reach n == 1. Option A increases n, moving away from the base case and causing infinite recursion. Option C passes the same n, also causing infinite recursion. Option D omits adding n to the total, so the sum would be incorrect (it returns sum(n-1) only, missing the contribution of n)."
      }
    ]
  },
  {
    id: "recursion-call-stack",
    name: "Tracing the Call Stack",
    unit: "Unit 10: Recursion",
    unitNumber: 10,
    tags: ["new-u4", "MCQ frequent", "FRQ"],
    summary: "Each recursive call creates a new stack frame that is resolved in last-in, first-out order; tracing the stack reveals what value is ultimately returned.",
    codeSnippet: `public static int factorial(int n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}
// Calling factorial(4) — stack frames (top = most recent):
//   factorial(0) → returns 1
//   factorial(1) → returns 1 * 1 = 1
//   factorial(2) → returns 2 * 1 = 2
//   factorial(3) → returns 3 * 2 = 6
//   factorial(4) → returns 4 * 6 = 24`,
    description: "When a recursive method is called, the JVM pushes a new stack frame onto the call stack containing that call's local variables and the point to return to. Frames are resolved in LIFO (last in, first out) order: the deepest call (the one that hits the base case) returns first, and its result is used by the call above it, all the way back to the original call. AP exam questions often ask what value a recursive method returns for a given input, requiring students to trace this unwinding process.",
    steps: [
      "Write out each call in a chain until the base case is reached, indenting each level to show depth (e.g., f(4) → f(3) → f(2) → f(1) → base).",
      "Starting at the base case, write its return value, then substitute it into the expression one level up.",
      "Continue substituting return values upward through each frame until you reach the original call.",
      "Record the final return value of the original call — that is the answer.",
      "Check your trace against the base case value to make sure the chain bottomed out correctly before unwinding."
    ],
    examples: [
      {
        problem: "Trace mystery(4) where: if (n <= 1) return n; else return mystery(n - 1) + mystery(n - 2);",
        solution: "mystery(4) = mystery(3) + mystery(2). mystery(3) = mystery(2) + mystery(1) = (mystery(1) + mystery(0)) + 1 = (1 + 0) + 1 = 2. mystery(2) = mystery(1) + mystery(0) = 1 + 0 = 1. So mystery(4) = 2 + 1 = 3. (This is computing Fibonacci: fib(4) = 3.)"
      }
    ],
    mcqs: [
      {
        question: "What is returned by the following call? — public static int f(int n) { if (n == 1) return 10; return f(n - 1) + 5; } — f(4)",
        options: [
          "15",
          "20",
          "25",
          "30"
        ],
        answerIndex: 2,
        explanation: "Tracing: f(4) = f(3) + 5; f(3) = f(2) + 5; f(2) = f(1) + 5 = 10 + 5 = 15; f(3) = 15 + 5 = 20; f(4) = 20 + 5 = 25. The answer is 25 (C). 15 (A) is f(2), 20 (B) is f(3), and 30 (D) would be f(5)."
      },
      {
        question: "In which order do recursive call stack frames resolve?",
        options: [
          "First in, first out (FIFO) — the original call resolves first.",
          "Last in, first out (LIFO) — the deepest call resolves first.",
          "Simultaneously — all frames resolve at the same time.",
          "Random order determined by the JVM scheduler."
        ],
        answerIndex: 1,
        explanation: "The call stack is a LIFO structure (B): the most recent (deepest) call resolves first, returning its value to the frame that called it. The original call resolves last. FIFO (A) describes a queue, not a stack. Frames do not resolve simultaneously (C) — each must wait for the calls below it. There is no randomness in call resolution order (D)."
      }
    ]
  },
  {
    id: "recursion-vs-iterative",
    name: "Recursive vs. Iterative Solutions",
    unit: "Unit 10: Recursion",
    unitNumber: 10,
    tags: ["new-u4", "MCQ frequent"],
    summary: "Any recursive algorithm can be rewritten iteratively; recursion is often more readable but uses additional memory for stack frames.",
    codeSnippet: `// Recursive sum
public static int sumRec(int n) {
    if (n == 0) return 0;
    return n + sumRec(n - 1);
}

// Equivalent iterative sum
public static int sumIter(int n) {
    int total = 0;
    for (int i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}`,
    description: "Recursive and iterative solutions solve the same problems but differ in structure and resource usage. Recursion expresses the problem naturally in terms of itself, often producing concise and readable code, but each call consumes a stack frame — deep recursion can cause a StackOverflowError. Iteration uses explicit loops and typically runs in constant additional memory. On the AP exam, you may be asked to compare the two approaches or convert one to the other.",
    steps: [
      "Identify the repeated operation in the recursive method (what each call does before delegating to the next call).",
      "Replace the recursive call chain with a loop: use a for or while loop that performs the same operation iteratively.",
      "Use an accumulator variable to collect the running result instead of relying on the return value chain.",
      "Verify that the loop bounds mirror the base case and the recursive step (e.g., the loop stops when the recursive method would hit its base case).",
      "Consider memory: recursion uses O(n) stack space for n calls; iteration uses O(1) extra space."
    ],
    examples: [
      {
        problem: "Convert the recursive power method to iterative: public static int power(int base, int exp) { if (exp == 0) return 1; return base * power(base, exp - 1); }",
        solution: "public static int power(int base, int exp) { int result = 1; for (int i = 0; i < exp; i++) { result *= base; } return result; } The loop runs exp times (mirroring exp recursive calls), multiplying result by base each iteration, starting from the base case value of 1."
      }
    ],
    mcqs: [
      {
        question: "Which statement best describes a key trade-off between recursive and iterative solutions?",
        options: [
          "Recursive solutions always run faster than iterative solutions.",
          "Iterative solutions cannot solve problems that recursion can.",
          "Recursive solutions use additional memory for each call stack frame, while iterative solutions typically use constant extra memory.",
          "Recursive solutions are always shorter in lines of code than iterative solutions."
        ],
        answerIndex: 2,
        explanation: "Each recursive call creates a new stack frame, so deep recursion uses O(n) extra memory (C). Iteration typically uses O(1) extra memory. Recursion is not always faster (A) — iteration is often more efficient. Any recursive problem can also be solved iteratively, just with explicit stack management if needed (B is false). Recursive code is sometimes shorter, but not always (D is false — iterative code can also be concise)."
      },
      {
        question: "A recursive method computes f(100) using 100 recursive calls. What is the main risk compared to an equivalent iterative solution?",
        options: [
          "The recursive method will return a wrong answer.",
          "The iterative method cannot be written for this problem.",
          "The recursive method may cause a StackOverflowError for very large inputs.",
          "The iterative method always takes longer to run."
        ],
        answerIndex: 2,
        explanation: "Deep recursion risks a StackOverflowError (C) if the number of stack frames exceeds the JVM's stack limit. 100 calls are typically fine, but for very large n it becomes a real concern. A correct recursive method returns the correct answer (A is wrong). Any recursive problem can be solved iteratively (B is wrong). Iterative solutions are generally faster or equivalent in time, not slower (D is wrong)."
      }
    ]
  },
  {
    id: "recursion-factorial",
    name: "Recursive Factorial",
    unit: "Unit 10: Recursion",
    unitNumber: 10,
    tags: ["new-u4", "MCQ frequent", "FRQ"],
    summary: "The factorial of n (written n!) is n × (n−1) × ... × 1, computed recursively as n * factorial(n − 1) with base case factorial(0) = 1.",
    formula: "return n == 0 ? 1 : n * factorial(n - 1);",
    codeSnippet: `public static int factorial(int n) {
    if (n == 0) {               // base case: 0! = 1
        return 1;
    }
    return n * factorial(n - 1); // recursive case
}
// factorial(0) = 1
// factorial(1) = 1 * factorial(0) = 1
// factorial(4) = 4 * 3 * 2 * 1 * 1 = 24`,
    description: "Factorial is the classic example of a recursive method. The base case is n == 0, which returns 1 (by definition, 0! = 1). The recursive case multiplies n by factorial(n - 1), reducing n by 1 each time until the base case is reached. The call stack unwinds and the products are computed from the bottom up. factorial(4) = 4 × 3 × 2 × 1 = 24.",
    steps: [
      "Check the base case: if n == 0, return 1 immediately.",
      "For n > 0, call factorial(n - 1) to compute the factorial of the next smaller integer.",
      "Multiply the returned result by n and return that product.",
      "Trace the unwinding: factorial(n-1) returns, then n * result is computed and returned up the chain.",
      "Verify key values: factorial(0) = 1, factorial(1) = 1, factorial(2) = 2, factorial(4) = 24."
    ],
    examples: [
      {
        problem: "Trace factorial(4) step by step and give the return value.",
        solution: "factorial(4) calls factorial(3); factorial(3) calls factorial(2); factorial(2) calls factorial(1); factorial(1) calls factorial(0) → returns 1. Unwinding: factorial(1) = 1 × 1 = 1; factorial(2) = 2 × 1 = 2; factorial(3) = 3 × 2 = 6; factorial(4) = 4 × 6 = 24."
      }
    ],
    mcqs: [
      {
        question: "What does the following method return for factorial(5)? — public static int factorial(int n) { if (n == 0) return 1; return n * factorial(n - 1); }",
        options: [
          "24",
          "120",
          "25",
          "0"
        ],
        answerIndex: 1,
        explanation: "5! = 5 × 4 × 3 × 2 × 1 = 120 (B). 24 (A) is 4!. 25 (C) is 5², not 5!. 0 (D) would result from an incorrect base case that returns 0, not 1."
      },
      {
        question: "A student changes the base case to if (n == 0) return 0;. What is factorial(4) with this change?",
        options: [
          "24",
          "1",
          "0",
          "120"
        ],
        answerIndex: 2,
        explanation: "With the base case returning 0, factorial(0) = 0, so factorial(1) = 1 × 0 = 0, factorial(2) = 2 × 0 = 0, and factorial(4) = 4 × 0 = 0 (C). Multiplying anything by 0 produces 0, so all factorials would incorrectly return 0. The correct base case must return 1, not 0."
      }
    ]
  },
  {
    id: "recursion-fibonacci",
    name: "Recursive Fibonacci",
    unit: "Unit 10: Recursion",
    unitNumber: 10,
    tags: ["new-u4", "MCQ frequent", "FRQ"],
    summary: "The Fibonacci sequence is defined by fib(n) = fib(n−1) + fib(n−2), with base cases fib(0) = 0 and fib(1) = 1.",
    formula: "return fib(n-1) + fib(n-2);",
    codeSnippet: `public static int fib(int n) {
    if (n == 0) return 0;   // base case 1
    if (n == 1) return 1;   // base case 2
    return fib(n - 1) + fib(n - 2); // recursive case
}
// fib(0)=0, fib(1)=1, fib(2)=1,
// fib(3)=2, fib(4)=3, fib(5)=5`,
    description: "Fibonacci is a doubly-recursive method: each call (except base cases) makes two recursive calls. The two base cases are fib(0) = 0 and fib(1) = 1. The recursive case returns fib(n-1) + fib(n-2). Because the same subproblems are solved many times, the naive recursive implementation has exponential time complexity — fib(50) would require billions of calls. On the AP exam, you are expected to trace small values and understand the two base cases.",
    steps: [
      "Handle both base cases first: if n == 0 return 0; if n == 1 return 1.",
      "For n >= 2, return fib(n - 1) + fib(n - 2), making two recursive calls.",
      "Trace small values: fib(2) = fib(1) + fib(0) = 1 + 0 = 1; fib(3) = fib(2) + fib(1) = 1 + 1 = 2; fib(4) = fib(3) + fib(2) = 2 + 1 = 3.",
      "Note that fib(n-1) is evaluated before fib(n-2) in Java (left-to-right evaluation).",
      "Recognize that the tree of calls grows exponentially — many subproblems are recomputed, making this approach slow for large n."
    ],
    examples: [
      {
        problem: "How many times is fib(1) called when computing fib(5)?",
        solution: "Expanding fib(5): it calls fib(4) and fib(3). fib(4) calls fib(3) and fib(2). Continuing to expand: fib(5) generates the call tree where fib(1) appears at the leaves. Counting each leaf: fib(1) is called 5 times (equal to fib(5) itself, which is 5). This illustrates the exponential redundancy in the naive recursive Fibonacci."
      }
    ],
    mcqs: [
      {
        question: "What is the return value of fib(6) given: fib(0)=0, fib(1)=1, fib(n)=fib(n-1)+fib(n-2)?",
        options: [
          "5",
          "8",
          "13",
          "6"
        ],
        answerIndex: 1,
        explanation: "The Fibonacci sequence is 0, 1, 1, 2, 3, 5, 8, 13, ... so fib(6) = 8 (B). fib(5) = 5 (A). fib(7) = 13 (C). 6 (D) is the input, not the Fibonacci value."
      },
      {
        question: "What happens if the base cases are omitted from the Fibonacci method (no check for n == 0 or n == 1)?",
        options: [
          "The method returns 0 for all inputs.",
          "The method returns the correct Fibonacci value but more slowly.",
          "A StackOverflowError occurs for any input.",
          "The method works correctly for n >= 2 only."
        ],
        answerIndex: 2,
        explanation: "Without base cases, fib(2) calls fib(1) which calls fib(0) which calls fib(-1) which calls fib(-2), and so on forever — n decreases without bound, never stopping. This causes a StackOverflowError (C). The method cannot return 0 (A) or the correct value (B) because it never returns at all. It does not work for any inputs without base cases (D is false)."
      }
    ]
  },
  {
    id: "recursion-linear-search",
    name: "Recursive Linear Search",
    unit: "Unit 10: Recursion",
    unitNumber: 10,
    tags: ["new-u4", "MCQ frequent"],
    summary: "Recursive linear search checks each element one at a time by examining the current index, returning true if found, or recursing on the remaining elements.",
    codeSnippet: `public static boolean linearSearch(int[] arr, int target, int index) {
    if (index >= arr.length) {    // base case: not found
        return false;
    }
    if (arr[index] == target) {   // base case: found
        return true;
    }
    return linearSearch(arr, target, index + 1); // recurse
}
// Initial call: linearSearch(arr, target, 0)`,
    description: "Recursive linear search uses the current index as a parameter rather than a loop variable. There are two base cases: if the index equals or exceeds the array length, the target was not found and the method returns false; if the current element matches the target, the method returns true. The recursive case increments the index by 1 and searches the rest of the array. The initial call passes index = 0.",
    steps: [
      "Check the first base case: if index >= arr.length, the entire array has been searched without finding the target — return false.",
      "Check the second base case: if arr[index] == target, the element was found — return true.",
      "Make the recursive call with index + 1 to search the remaining elements.",
      "Make the initial call with index = 0 to start searching from the beginning of the array.",
      "Confirm that index strictly increases each call, guaranteeing eventual termination."
    ],
    examples: [
      {
        problem: "Trace linearSearch({10, 20, 30}, 20, 0). Which recursive calls are made and what is returned?",
        solution: "linearSearch({10,20,30}, 20, 0): arr[0]=10 ≠ 20 → call linearSearch({10,20,30}, 20, 1). linearSearch at index 1: arr[1]=20 == 20 → return true. The first call returns true. Only two calls are made before finding the target."
      }
    ],
    mcqs: [
      {
        question: "In recursive linear search, what does the method return when the index reaches arr.length?",
        options: [
          "true, because the search is complete.",
          "false, because the target was not found in the array.",
          "-1, indicating the element is not present.",
          "0, the default int return."
        ],
        answerIndex: 1,
        explanation: "When index >= arr.length, all elements have been checked and the target was not found, so the method returns false (B). It does not return true (A) — that only happens when a match is found. Returning -1 (C) would require an int return type, not boolean. Java does not automatically return 0 for boolean methods (D)."
      },
      {
        question: "A student writes the recursive case as: return linearSearch(arr, target, index); — What is wrong?",
        options: [
          "The method should use index - 1 instead.",
          "The index is not incremented, causing infinite recursion.",
          "The target parameter should not be passed recursively.",
          "The base case check should come after the recursive call."
        ],
        answerIndex: 1,
        explanation: "Passing index unchanged (B) means every recursive call checks the same element forever — no progress toward the base case is made, causing infinite recursion and a StackOverflowError. The correct recursive case uses index + 1. Using index - 1 (A) would move backward. The target must always be passed along (C is wrong). The base case must come before the recursive call (D is wrong — reversing the order would cause errors)."
      }
    ]
  },
  {
    id: "recursion-binary-search",
    name: "Recursive Binary Search",
    unit: "Unit 10: Recursion",
    unitNumber: 10,
    tags: ["new-u4", "MCQ frequent", "FRQ"],
    summary: "Recursive binary search repeatedly halves the search range of a sorted array, checking the middle element and recursing on the appropriate half.",
    codeSnippet: `public static int binarySearch(int[] arr, int target, int low, int high) {
    if (low > high) return -1;          // base case: not found
    int mid = (low + high) / 2;
    if (arr[mid] == target) return mid; // base case: found
    if (target < arr[mid]) {
        return binarySearch(arr, target, low, mid - 1);  // search left
    } else {
        return binarySearch(arr, target, mid + 1, high); // search right
    }
}`,
    description: "Binary search works only on sorted arrays and achieves O(log n) time by halving the search space each call. The two base cases are: low > high (target not in array, return -1) and arr[mid] == target (found, return mid index). The recursive cases compare the target to the middle element: if target is smaller, search the left half (low to mid - 1); if larger, search the right half (mid + 1 to high). The initial call passes low = 0 and high = arr.length - 1.",
    steps: [
      "Compute mid = (low + high) / 2 to find the middle index of the current range.",
      "Base case 1: if low > high, the range is empty — the target is not in the array, return -1.",
      "Base case 2: if arr[mid] == target, the target is found — return mid.",
      "Recursive case: if target < arr[mid], search the left half by calling with high = mid - 1; otherwise search the right half with low = mid + 1.",
      "Make the initial call with low = 0 and high = arr.length - 1 to cover the entire array."
    ],
    examples: [
      {
        problem: "Trace binarySearch({2, 5, 8, 12, 16, 23}, 12, 0, 5). Show each mid value and which half is searched.",
        solution: "Call 1: low=0, high=5, mid=2, arr[2]=8. 12 > 8 → search right: low=3, high=5. Call 2: low=3, high=5, mid=4, arr[4]=16. 12 < 16 → search left: low=3, high=3. Call 3: low=3, high=3, mid=3, arr[3]=12. 12 == 12 → return 3. Found at index 3 in 3 calls."
      }
    ],
    mcqs: [
      {
        question: "What is returned by recursive binary search when the target is not present in a sorted array?",
        options: [
          "0",
          "The index where the target would be inserted.",
          "-1",
          "arr.length"
        ],
        answerIndex: 2,
        explanation: "The standard recursive binary search returns -1 (C) when low > high, indicating the target was not found. It does not return 0 (A) — that is a valid index. It does not return an insertion index (B) — that is a different operation. It does not return arr.length (D)."
      },
      {
        question: "A student writes the left recursive case as: return binarySearch(arr, target, low, mid); instead of mid - 1. What is the consequence for finding a missing target?",
        options: [
          "The search runs faster since mid is included.",
          "The search may never terminate if target is not in the array.",
          "The method always returns -1 regardless of input.",
          "The method correctly finds all elements."
        ],
        answerIndex: 1,
        explanation: "Using mid instead of mid - 1 (B) means the search range does not strictly shrink when recursing left — the same mid can be selected repeatedly and low > high may never be reached, causing infinite recursion when the target is absent. The search does not run faster (A) — the lack of progress is a bug. The method does not always return -1 (C) — it may find present elements. It does not correctly handle missing elements (D is false)."
      }
    ]
  },
  {
    id: "merge-sort",
    name: "Merge Sort (divide and conquer, recursive)",
    unit: "Unit 10: Recursion",
    unitNumber: 10,
    tags: ["new-u4", "MCQ frequent"],
    summary: "Merge sort recursively divides an array into halves until each subarray has one element, then merges the sorted halves back together, achieving O(n log n) time.",
    codeSnippet: `// Conceptual merge sort structure (AP-level pseudocode)
public static void mergeSort(int[] arr, int left, int right) {
    if (left >= right) return;          // base case: 1 or 0 elements
    int mid = (left + right) / 2;
    mergeSort(arr, left, mid);          // sort left half
    mergeSort(arr, mid + 1, right);     // sort right half
    merge(arr, left, mid, right);       // merge sorted halves
}
// merge() combines two sorted subarrays in order
// Initial call: mergeSort(arr, 0, arr.length - 1)`,
    description: "Merge sort is a divide-and-conquer algorithm. The divide step recursively splits the array in half until subarrays of size 1 are reached (base case: a single element is already sorted). The conquer step merges adjacent sorted subarrays into a larger sorted array. The merge operation compares elements from the two halves and places them in order. The overall time complexity is O(n log n) — the log n levels of division each require O(n) work to merge. On the AP exam, students are expected to understand the concept and trace small examples, not write a complete implementation from scratch.",
    steps: [
      "Base case: if the subarray has 0 or 1 elements (left >= right), it is already sorted — return immediately.",
      "Divide: compute mid = (left + right) / 2, then recursively call mergeSort on the left half (left to mid) and the right half (mid + 1 to right).",
      "Conquer: after both recursive calls return, call merge() to combine the two sorted halves into one sorted sequence.",
      "Trace a small example: for {5, 2, 4, 1} — split into {5,2} and {4,1}; sort each to get {2,5} and {1,4}; merge to get {1,2,4,5}.",
      "Identify time complexity: each level of the recursion tree does O(n) merge work, and there are O(log n) levels, giving O(n log n) total."
    ],
    examples: [
      {
        problem: "Trace how merge sort sorts {38, 27, 43, 3}. Show each split and merge step.",
        solution: "Split: {38,27} and {43,3}. Recursively split: {38},{27} and {43},{3}. Each single element is sorted. Merge {38} and {27} → {27,38}. Merge {43} and {3} → {3,43}. Final merge of {27,38} and {3,43}: compare 27 vs 3 → take 3; compare 27 vs 43 → take 27; compare 38 vs 43 → take 38; take 43. Result: {3,27,38,43}."
      }
    ],
    mcqs: [
      {
        question: "What is the base case in merge sort?",
        options: [
          "The subarray has exactly two elements.",
          "The subarray has zero or one element.",
          "The subarray is already sorted.",
          "The left index equals zero."
        ],
        answerIndex: 1,
        explanation: "The base case is when the subarray has 0 or 1 elements (B) — a single element is trivially sorted, so no further splitting is needed. Two elements (A) still requires sorting. 'Already sorted' (C) is not a condition the simple recursive structure checks. left == 0 (D) is not a meaningful stopping condition."
      },
      {
        question: "What is the time complexity of merge sort?",
        options: [
          "O(n²)",
          "O(n)",
          "O(log n)",
          "O(n log n)"
        ],
        answerIndex: 3,
        explanation: "Merge sort runs in O(n log n) (D): the array is split log n times (the depth of the recursion tree) and each level requires O(n) work to merge all subarrays at that level. O(n²) (A) describes selection sort and insertion sort. O(n) (B) would be linear — faster than any comparison sort can achieve. O(log n) (C) is the depth alone, ignoring the merge work at each level."
      }
    ]
  }
];
