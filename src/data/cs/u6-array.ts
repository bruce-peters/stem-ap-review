import type { Topic } from "../types";

export const arrayTopics: Topic[] = [
  {
    id: "array-declaration",
    name: "Array Declaration and Initialization",
    unit: "Unit 6: Array",
    unitNumber: 6,
    tags: ["new-u4", "MCQ frequent", "FRQ"],
    summary: "Arrays are fixed-size, zero-indexed containers for a single data type, initialized with default values.",
    formula: "int[] arr = new int[5]; int[] arr = {1, 2, 3};",
    codeSnippet: `// Two ways to declare and initialize
int[] scores = new int[5];        // all elements = 0
boolean[] flags = new boolean[3]; // all elements = false
String[] names = new String[4];   // all elements = null

// Initializer list (size inferred)
int[] primes = {2, 3, 5, 7, 11};

System.out.println(scores.length);  // 5
System.out.println(primes[0]);      // 2`,
    description: "An array is a fixed-length, ordered sequence of elements of the same type. When created with `new`, numeric arrays default to 0, booleans to false, and object arrays to null. The size is set at creation and cannot change — to \"resize\" you must create a new array.",
    steps: [
      "Declare the array with the type followed by [] and a variable name: `int[] arr;`",
      "Allocate with `new int[n]` (all elements get default values) or use an initializer list `{v1, v2, v3}` to set values immediately.",
      "Remember that object arrays (e.g., `String[]`) fill with null, not empty strings — each slot must be assigned separately.",
      "Access the length at any time via `arr.length` (a field, NOT a method — no parentheses).",
      "Never assign past index `arr.length - 1` or you will get an `ArrayIndexOutOfBoundsException` at runtime.",
    ],
    examples: [
      {
        problem: "Declare an int array of size 4, set the third element to 99, and print the length.",
        solution:
          "int[] data = new int[4]; // [0, 0, 0, 0]\ndata[2] = 99;            // [0, 0, 99, 0]\nSystem.out.println(data.length); // 4",
      },
    ],
    mcqs: [
      {
        question:
          "Which of the following correctly declares an integer array of size 3 where all elements equal 0?",
        options: [
          "int arr = new int[3];",
          "int[] arr = new int[3];",
          "int[] arr = new int(3);",
          "int arr[3] = new int[];",
        ],
        answerIndex: 1,
        explanation:
          "Option B is correct: `int[]` declares an array type and `new int[3]` allocates three int slots defaulting to 0. Option A omits the brackets, making it a plain int variable. Option C uses parentheses instead of brackets. Option D uses invalid C-style bracket placement — Java requires the brackets after the type.",
      },
      {
        question:
          "What are the default values of the elements immediately after executing `String[] words = new String[4];`?",
        options: [
          "Empty strings (\"\")",
          "The string \"null\"",
          "null",
          "0",
        ],
        answerIndex: 2,
        explanation:
          "Object array elements (including String) default to the reference value null, not an empty string or the text \"null\". Option A is wrong because Java does not auto-initialize objects. Option B confuses the printed representation of null with its actual value. Option D (0) is the default for numeric primitive arrays, not reference types.",
      },
    ],
  },

  {
    id: "array-indexing",
    name: "Array Indexing and .length",
    unit: "Unit 6: Array",
    unitNumber: 6,
    tags: ["new-u4", "MCQ frequent", "FRQ"],
    summary: "Arrays use zero-based indexing; .length is a field (no parentheses) giving the total number of elements.",
    formula: "arr[0]; arr[arr.length - 1]",
    codeSnippet: `int[] nums = {10, 20, 30, 40, 50};

System.out.println(nums[0]);              // 10  (first)
System.out.println(nums[4]);              // 50  (last)
System.out.println(nums[nums.length - 1]);// 50  (last, general)
System.out.println(nums.length);          // 5

// This would throw ArrayIndexOutOfBoundsException:
// System.out.println(nums[5]);`,
    description: "Every array element is accessed by its zero-based index inside square brackets. The `length` property (a public final field, not a method) always returns the total capacity of the array. The valid index range is 0 through `arr.length - 1`; any index outside this range throws `ArrayIndexOutOfBoundsException` at runtime.",
    steps: [
      "Use `arr[i]` to read or write element at position i (0-based).",
      "Use `arr.length` — with no parentheses — to get the array size. (String uses `.length()` with parentheses; arrays do not.)",
      "The last valid index is always `arr.length - 1`. Accessing `arr[arr.length]` throws `ArrayIndexOutOfBoundsException`.",
      "You can both read (`int x = arr[2];`) and write (`arr[2] = 99;`) using bracket notation.",
      "When in doubt about the last index, write `arr[arr.length - 1]` rather than a hard-coded number to stay general.",
    ],
    examples: [
      {
        problem: "Given `int[] data = {5, 15, 25, 35}`, write code that swaps the first and last elements.",
        solution:
          "int temp = data[0];\ndata[0] = data[data.length - 1];\ndata[data.length - 1] = temp;\n// data is now {35, 15, 25, 5}",
      },
    ],
    mcqs: [
      {
        question:
          "Given `int[] arr = {3, 6, 9, 12}`, what does `arr[arr.length]` do?",
        options: [
          "Returns 12",
          "Returns 0 (default int value)",
          "Throws ArrayIndexOutOfBoundsException",
          "Throws a compile-time error",
        ],
        answerIndex: 2,
        explanation:
          "The array has length 4, so valid indices are 0–3. `arr[4]` is out of bounds and causes an `ArrayIndexOutOfBoundsException` at runtime, not compile time. Option A is wrong because 12 is at index 3, not 4. Option B is wrong because Java does not silently return a default — it throws. Option D is wrong because index expressions are evaluated at runtime, not compile time.",
      },
      {
        question:
          "Which call correctly retrieves the length of an int array named `scores`?",
        options: [
          "scores.length()",
          "scores.size()",
          "scores.length",
          "length(scores)",
        ],
        answerIndex: 2,
        explanation:
          "For arrays, `length` is a public field accessed without parentheses: `scores.length`. Option A adds parentheses as if it were a method — that is the String syntax and will not compile for arrays. Option B (`size()`) is the ArrayList method, not the array field. Option D is not valid Java syntax.",
      },
    ],
  },

  {
    id: "array-traversal-for",
    name: "Array Traversal with for Loop",
    unit: "Unit 6: Array",
    unitNumber: 6,
    tags: ["new-u4", "MCQ frequent", "FRQ"],
    summary: "A standard for loop using an index variable is the most flexible way to traverse, read, or write array elements.",
    formula: "for (int i = 0; i < arr.length; i++) { arr[i]; }",
    codeSnippet: `int[] scores = {88, 72, 95, 64, 81};

// Print all elements
for (int i = 0; i < scores.length; i++) {
    System.out.println(scores[i]);
}

// Double every element (requires index-based loop)
for (int i = 0; i < scores.length; i++) {
    scores[i] *= 2;
}`,
    description: "The index-based for loop runs from 0 to `arr.length - 1`, giving access to each element's position. Because you have the index, you can both read and write elements, iterate in reverse, access neighbors, or compare adjacent elements — none of which is possible with a for-each loop.",
    steps: [
      "Initialize the loop variable to 0 (first valid index): `int i = 0`.",
      "Set the condition to `i < arr.length` — using `<=` would cause an off-by-one error and access index `arr.length`, throwing `ArrayIndexOutOfBoundsException`.",
      "Increment with `i++` each iteration to advance through the array.",
      "Access the current element as `arr[i]`; write to it as `arr[i] = value;`.",
      "For reverse traversal, start at `arr.length - 1`, condition `i >= 0`, decrement `i--`.",
    ],
    examples: [
      {
        problem: "Write a for loop that prints every element of `int[] vals = {4, 8, 15, 16, 23, 42}` in order.",
        solution:
          "for (int i = 0; i < vals.length; i++) {\n    System.out.println(vals[i]);\n}\n// prints: 4  8  15  16  23  42 (each on its own line)",
      },
    ],
    mcqs: [
      {
        question:
          "Which for loop correctly traverses every element of an array `arr` without throwing an exception?",
        options: [
          "for (int i = 0; i <= arr.length; i++)",
          "for (int i = 1; i < arr.length; i++)",
          "for (int i = 0; i < arr.length; i++)",
          "for (int i = 0; i <= arr.length - 0; i++)",
        ],
        answerIndex: 2,
        explanation:
          "Option C is correct: starting at 0 and stopping before `arr.length` covers all valid indices 0 through `arr.length - 1`. Option A uses `<=` which accesses `arr[arr.length]`, an out-of-bounds index. Option B starts at 1 and misses the first element. Option D has `arr.length - 0` which equals `arr.length`, so `<=` again goes one too far.",
      },
      {
        question:
          "An index-based for loop is required instead of a for-each loop when you need to:",
        options: [
          "Print every element's value",
          "Compute the sum of all elements",
          "Modify the value stored in each array slot",
          "Check whether any element equals a target value",
        ],
        answerIndex: 2,
        explanation:
          "Modifying array elements requires writing back through the index: `arr[i] = newValue`. A for-each loop copies element values into the loop variable; assigning to that variable does not change the array. Options A, B, and D only need to read values and can be done with either loop type.",
      },
    ],
  },

  {
    id: "array-traversal-foreach",
    name: "Array Traversal with for-each",
    unit: "Unit 6: Array",
    unitNumber: 6,
    tags: ["new-u4", "MCQ frequent"],
    summary: "The enhanced for loop provides clean read-only traversal of an array without managing an index variable.",
    formula: "for (int x : arr) { }",
    codeSnippet: `int[] scores = {88, 72, 95, 64, 81};

// Read-only: print all scores
for (int score : scores) {
    System.out.println(score);
}

// Compute sum (read-only, no index needed)
int sum = 0;
for (int score : scores) {
    sum += score;
}
System.out.println("Sum: " + sum);`,
    description: "The enhanced for loop (`for (Type var : array)`) iterates through every element, assigning each element's value to the loop variable in turn. It is cleaner and less error-prone than an index loop for read-only tasks. However, assigning to the loop variable does NOT modify the array, you have no index available, and you cannot traverse in reverse or skip elements.",
    steps: [
      "Write `for (ElementType var : arrayName)` — the element type must match the array's component type.",
      "Use `var` inside the loop body to read the current element's value.",
      "Do NOT assign to `var` expecting the array to change — the assignment only changes the local copy.",
      "Avoid for-each when you need the index, need to modify elements, or need to iterate in a non-sequential pattern.",
      "For-each works on both arrays and ArrayList (and other Iterable types), making it portable.",
    ],
    examples: [
      {
        problem: "Using a for-each loop, count how many elements in `int[] data = {3, -1, 4, -1, 5, 9}` are negative.",
        solution:
          "int count = 0;\nfor (int val : data) {\n    if (val < 0) {\n        count++;\n    }\n}\nSystem.out.println(count); // 2",
      },
    ],
    mcqs: [
      {
        question:
          "What is the result of the following code?\n\nint[] arr = {1, 2, 3};\nfor (int x : arr) { x = x * 10; }\nSystem.out.println(arr[0]);",
        options: [
          "10",
          "1",
          "Compile-time error",
          "ArrayIndexOutOfBoundsException",
        ],
        answerIndex: 1,
        explanation:
          "The for-each loop copies each element's value into `x`. Assigning to `x` only changes the local variable, not the array. Therefore `arr[0]` is still 1. Option A is wrong because the array is never modified. Option C is wrong because the code compiles fine. Option D is wrong because no index access goes out of bounds.",
      },
      {
        question:
          "Which task CANNOT be accomplished with a for-each loop over an array?",
        options: [
          "Printing each element",
          "Computing the maximum element",
          "Replacing every element with its absolute value",
          "Counting elements that satisfy a condition",
        ],
        answerIndex: 2,
        explanation:
          "Replacing array elements requires writing back via an index (`arr[i] = Math.abs(arr[i])`). A for-each loop provides only a read copy of each element; assignment to the loop variable does not persist to the array. Options A, B, and D only read element values and work perfectly with for-each.",
      },
    ],
  },

  {
    id: "array-algorithms",
    name: "Array Algorithms (min, max, sum, average)",
    unit: "Unit 6: Array",
    unitNumber: 6,
    tags: ["new-u4", "MCQ frequent", "FRQ"],
    summary: "Classic single-pass algorithms accumulate a result by comparing or adding each element; initialize accumulators from arr[0] or 0 before the loop.",
    codeSnippet: `int[] data = {14, 3, 22, 8, 19};

// Max: initialize to arr[0], not a magic number
int max = data[0];
for (int i = 1; i < data.length; i++) {
    if (data[i] > max) {
        max = data[i];
    }
}

// Sum and average
int sum = 0;
for (int val : data) { sum += val; }
double avg = (double) sum / data.length;
System.out.println("Max: " + max + "  Avg: " + avg);`,
    description: "Most array algorithms follow the accumulator pattern: initialize a variable before the loop, update it each iteration, and read the result after the loop. For min/max, seed the accumulator with `arr[0]` (not a magic number) and begin the loop at index 1. For sum/count, seed with 0 and use a for-each or index loop.",
    steps: [
      "For max/min: set accumulator to `arr[0]`, then loop from index 1 comparing each element.",
      "For sum: set accumulator to 0, add each element inside the loop.",
      "For average: compute sum first, then divide — cast to double before dividing to avoid integer truncation: `(double) sum / arr.length`.",
      "For count: initialize a counter to 0, increment inside an `if` that checks your condition.",
      "Verify the array is non-empty before accessing `arr[0]` in a max/min algorithm to avoid `ArrayIndexOutOfBoundsException`.",
    ],
    examples: [
      {
        problem: "Write code to find the minimum value in `int[] temps = {72, 65, 80, 58, 77}`.",
        solution:
          "int min = temps[0];\nfor (int i = 1; i < temps.length; i++) {\n    if (temps[i] < min) {\n        min = temps[i];\n    }\n}\nSystem.out.println(min); // 58",
      },
    ],
    mcqs: [
      {
        question:
          "Which initialization correctly sets up a variable to find the maximum value in a non-empty int array `arr`?",
        options: [
          "int max = 0;",
          "int max = Integer.MAX_VALUE;",
          "int max = arr[0];",
          "int max = arr.length;",
        ],
        answerIndex: 2,
        explanation:
          "Initializing to `arr[0]` guarantees the accumulator starts at a real element value and is always correct regardless of whether values are negative or positive. Option A fails for arrays of all negative numbers (max would incorrectly remain 0). Option B uses `MAX_VALUE`, which would work mathematically but is the opposite direction (that is the min pattern's initialization with `MIN_VALUE`). Option D uses the length, which is unrelated to the element values.",
      },
      {
        question:
          "What is the output of the following code?\n\nint[] arr = {4, 7, 2, 9, 1};\nint sum = 0;\nfor (int x : arr) { sum += x; }\nSystem.out.println((double) sum / arr.length);",
        options: [
          "4",
          "4.0",
          "4.6",
          "23",
        ],
        answerIndex: 2,
        explanation:
          "The sum is 4+7+2+9+1 = 23. Casting sum to double before dividing gives 23.0 / 5 = 4.6. Option A would result from integer division (23/5 = 4). Option B (4.0) is wrong because 23.0/5 = 4.6, not 4.0. Option D is the raw sum before dividing.",
      },
    ],
  },

  {
    id: "array-linear-search",
    name: "Linear Search in Arrays",
    unit: "Unit 6: Array",
    unitNumber: 6,
    tags: ["new-u4", "MCQ frequent", "FRQ"],
    summary: "Linear search checks each element in order, returning its index when found or -1 if the target is absent.",
    codeSnippet: `public static int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;   // found — return index immediately
        }
    }
    return -1;          // not found
}

// Usage
int[] nums = {5, 3, 8, 1, 9};
System.out.println(linearSearch(nums, 8));  // 2
System.out.println(linearSearch(nums, 7));  // -1`,
    description: "Linear search (also called sequential search) scans elements one by one from the beginning. It works on any array regardless of order and runs in O(n) time. Returning the index (not just true/false) is the AP convention; return -1 to signal \"not found\" so the caller can distinguish found-at-index-0 from not-found.",
    steps: [
      "Loop from index 0 to `arr.length - 1`.",
      "Compare each element to the target using `==` for primitives or `.equals()` for objects.",
      "Return the current index `i` immediately when a match is found — there is no need to continue.",
      "After the loop completes without returning, return -1 to indicate the target was not found.",
      "When writing an FRQ method, declare the correct return type (int for an index) and include both the found case and the not-found case.",
    ],
    examples: [
      {
        problem: "Write a method `firstNegative` that returns the index of the first negative number in an int array, or -1 if none exists.",
        solution:
          "public static int firstNegative(int[] arr) {\n    for (int i = 0; i < arr.length; i++) {\n        if (arr[i] < 0) {\n            return i;\n        }\n    }\n    return -1;\n}",
      },
    ],
    mcqs: [
      {
        question:
          "A linear search method is called on `{5, 3, 8, 3, 9}` with target 3. Which index does it return?",
        options: [
          "1",
          "3",
          "-1",
          "Both 1 and 3",
        ],
        answerIndex: 0,
        explanation:
          "Linear search returns the index of the FIRST match encountered. It scans left to right, finds 3 at index 1, and returns immediately without checking further. It never reaches the second occurrence at index 3. Option D is wrong because only one value is returned. Option C (-1) means not found, but 3 is present.",
      },
      {
        question:
          "What should a linear search method return when the target is not found in the array?",
        options: [
          "false",
          "null",
          "-1",
          "arr.length",
        ],
        answerIndex: 2,
        explanation:
          "The AP convention for an index-returning search is -1 when the target is absent, because -1 is never a valid array index (valid indices start at 0). Option A (false) is only appropriate for a boolean-returning search. Option B (null) cannot be returned from an int method. Option D (arr.length) is out of bounds and would mislead callers into thinking they have a valid index.",
      },
    ],
  },

  {
    id: "array-selection-sort",
    name: "Selection Sort",
    unit: "Unit 6: Array",
    unitNumber: 6,
    tags: ["new-u4", "MCQ frequent", "FRQ"],
    summary: "Selection sort repeatedly finds the minimum of the unsorted portion and swaps it to the front, producing a sorted array in O(n²) comparisons.",
    codeSnippet: `public static void selectionSort(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap arr[i] and arr[minIndex]
        int temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
}`,
    description: "Selection sort divides the array into a sorted left portion and an unsorted right portion. In each pass, the smallest element of the unsorted portion is located and swapped into position `i`. After n-1 passes the entire array is sorted. It always performs O(n²) comparisons regardless of input order, and makes at most n-1 swaps.",
    steps: [
      "Outer loop: `i` runs from 0 to `arr.length - 2` (the last element is placed automatically after n-1 passes).",
      "Set `minIndex = i` at the start of each outer iteration to assume the current position holds the minimum.",
      "Inner loop: `j` runs from `i + 1` to `arr.length - 1`; update `minIndex` whenever a smaller element is found.",
      "After the inner loop, swap `arr[i]` with `arr[minIndex]` using a temp variable.",
      "The outer loop condition is `i < arr.length - 1` (not `<= arr.length - 1`) because a single-element 'subarray' needs no sorting.",
    ],
    examples: [
      {
        problem: "Trace the first two passes of selection sort on `{64, 25, 12, 22, 11}`.",
        solution:
          "Pass 1 (i=0): minIndex found at 4 (value 11) → swap with index 0 → {11, 25, 12, 22, 64}\nPass 2 (i=1): minIndex found at 2 (value 12) → swap with index 1 → {11, 12, 25, 22, 64}",
      },
    ],
    mcqs: [
      {
        question:
          "In selection sort, after the outer loop completes iteration i = 2 on a 6-element array, which portion of the array is guaranteed to be in its final sorted position?",
        options: [
          "Elements at indices 0, 1, and 2",
          "Elements at indices 0 and 1 only",
          "Elements at indices 3, 4, and 5",
          "No elements are guaranteed to be in final position",
        ],
        answerIndex: 0,
        explanation:
          "After the loop completes iteration i=2 (the third pass), the three smallest values have been placed at indices 0, 1, and 2 — all in their final sorted positions. Option B under-counts by one pass. Option C describes the unsorted portion, not the sorted portion. Option D is wrong because selection sort guarantees one element per pass.",
      },
      {
        question:
          "Why is the outer loop condition `i < arr.length - 1` rather than `i < arr.length`?",
        options: [
          "To avoid a compile-time error",
          "The last element is automatically in place after n-1 swaps, so sorting it is unnecessary",
          "The inner loop would throw ArrayIndexOutOfBoundsException if i reached arr.length - 1",
          "Both B and C are correct",
        ],
        answerIndex: 3,
        explanation:
          "Both B and C are valid reasons. When only one element remains in the unsorted portion, it must be the largest and is already in place, making a swap pointless (reason B). Additionally, if i equaled arr.length-1, the inner loop would start at `j = arr.length`, which is immediately out of bounds (reason C). Option A is wrong because this is a logic/runtime concern, not a compile-time error.",
      },
    ],
  },

  {
    id: "array-insertion-sort",
    name: "Insertion Sort",
    unit: "Unit 6: Array",
    unitNumber: 6,
    tags: ["new-u4", "MCQ frequent", "FRQ"],
    summary: "Insertion sort takes each unsorted element and shifts larger sorted elements right to insert it in the correct position; O(n²) worst case, O(n) best case.",
    codeSnippet: `public static void insertionSort(int[] arr) {
    for (int i = 1; i < arr.length; i++) {
        int key = arr[i];
        int j = i - 1;
        // Shift elements greater than key one position right
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}`,
    description: "Insertion sort builds a sorted subarray from left to right. For each element at index `i`, it saves the value as `key`, then shifts all sorted elements that are greater than `key` one position to the right, creating a gap, then places `key` into that gap. It is efficient on nearly-sorted data (O(n) best case) but O(n²) in the worst case.",
    steps: [
      "Outer loop starts at index 1 (a single element is trivially sorted) and runs to `arr.length - 1`.",
      "Save `arr[i]` into a `key` variable before any shifting overwrites it.",
      "Inner while loop: move `j` left while `j >= 0` AND `arr[j] > key`, shifting `arr[j]` to `arr[j+1]`.",
      "After the while loop exits, place `key` at `arr[j + 1]` — this is the correct insertion point.",
      "The algorithm is stable (equal elements keep their original order) and adapts well to nearly-sorted arrays.",
    ],
    examples: [
      {
        problem: "Trace the first two passes of insertion sort on `{5, 2, 4, 6, 1}`.",
        solution:
          "Pass 1 (i=1, key=2): arr[0]=5 > 2, shift right → {5, 5, 4, 6, 1}, place 2 → {2, 5, 4, 6, 1}\nPass 2 (i=2, key=4): arr[1]=5 > 4, shift right → {2, 5, 5, 6, 1}, arr[0]=2 <= 4, stop, place 4 → {2, 4, 5, 6, 1}",
      },
    ],
    mcqs: [
      {
        question:
          "In insertion sort, the inner while loop condition is `j >= 0 && arr[j] > key`. What happens if you remove the `j >= 0` check?",
        options: [
          "The sort produces incorrect results silently",
          "An ArrayIndexOutOfBoundsException is thrown when j becomes -1",
          "The sort becomes faster",
          "Nothing changes because j never reaches -1",
        ],
        answerIndex: 1,
        explanation:
          "When the key is smaller than all elements in the sorted portion, `j` decrements to -1. Without the `j >= 0` guard, the next iteration evaluates `arr[-1]`, which throws `ArrayIndexOutOfBoundsException`. The guard short-circuits first (due to `&&`) to prevent this. Options A and C are wrong — removing the guard causes a runtime crash. Option D is wrong for any array where the key is the smallest element seen so far.",
      },
      {
        question:
          "Which input ordering causes insertion sort to run in O(n) time (best case)?",
        options: [
          "Reverse sorted (largest to smallest)",
          "All elements equal",
          "Already sorted (smallest to largest)",
          "Random order",
        ],
        answerIndex: 2,
        explanation:
          "When the array is already sorted, each `key` is always >= the last sorted element, so the while loop never executes. Only the outer loop's n-1 iterations run, giving O(n). Option A (reverse sorted) is the worst case — every element must be shifted all the way, giving O(n²). Option B (all equal) also gives O(n) since `arr[j] > key` is never true, but option C (already sorted) is the canonical answer. Option D (random) gives average O(n²).",
      },
    ],
  },

  {
    id: "binary-search",
    name: "Binary Search (array must be sorted)",
    unit: "Unit 6: Array",
    unitNumber: 6,
    tags: ["new-u4", "MCQ frequent"],
    summary: "Binary search finds a target in a SORTED array in O(log n) by repeatedly halving the search range based on a midpoint comparison.",
    codeSnippet: `public static int binarySearch(int[] arr, int target) {
    int low = 0, high = arr.length - 1;
    while (low <= high) {
        int mid = (low + high) / 2;
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}`,
    description: "Binary search requires the array to be sorted. It maintains a search window [low, high], computes the midpoint, and compares the midpoint element to the target. If equal, it returns the index. If the target is larger, it narrows to the right half; if smaller, to the left half. The search continues until the window is empty (low > high), returning -1.",
    steps: [
      "Confirm the array is sorted — binary search gives incorrect results on unsorted data.",
      "Initialize `low = 0` and `high = arr.length - 1`.",
      "While `low <= high`: compute `mid = (low + high) / 2` and compare `arr[mid]` to target.",
      "If `arr[mid] == target` return `mid`; if target is greater set `low = mid + 1`; if smaller set `high = mid - 1`.",
      "If the loop exits (low > high), return -1 (not found). Binary search runs in O(log n) — roughly 20 steps for 1 million elements.",
    ],
    examples: [
      {
        problem: "Trace binary search for target 7 in the sorted array `{1, 3, 5, 7, 9, 11, 13}`.",
        solution:
          "low=0, high=6 → mid=3, arr[3]=7 == target → return 3\n(Found in one comparison because 7 is exactly at the midpoint.)",
      },
    ],
    mcqs: [
      {
        question:
          "Binary search is applied to the UNSORTED array `{5, 1, 9, 3, 7}` searching for 3. What is the likely outcome?",
        options: [
          "Returns 3 (the value itself)",
          "Returns the correct index 3",
          "May return an incorrect result or -1 even though 3 is present",
          "Throws ArrayIndexOutOfBoundsException",
        ],
        answerIndex: 2,
        explanation:
          "Binary search requires a sorted array. On unsorted data, the midpoint comparisons guide the search in the wrong direction, potentially concluding the element is absent when it is actually present. Option A confuses the value with its index. Option B might occasionally be correct by luck but is not guaranteed. Option D will not occur since all indices remain within bounds.",
      },
      {
        question:
          "In a binary search on a sorted array of 32 elements, what is the maximum number of comparisons needed to determine whether a target is present?",
        options: [
          "32",
          "16",
          "6",
          "5",
        ],
        answerIndex: 2,
        explanation:
          "Binary search is O(log₂ n). For n = 32: log₂(32) = 5 halvings, but counting the final comparison when low == high, the maximum is 6. Option A (32) is the linear search worst case. Option B (16) is half the array, not the correct analysis. Option D (5) understates by one step in the worst-case count.",
      },
    ],
  },

  {
    id: "passing-arrays-methods",
    name: "Passing Arrays to Methods",
    unit: "Unit 6: Array",
    unitNumber: 6,
    tags: ["new-u4", "MCQ frequent", "FRQ"],
    summary: "Arrays are objects passed by reference value — a method can change the array's elements, but cannot make the caller's variable point to a different array.",
    codeSnippet: `public static void doubleAll(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
        arr[i] *= 2;        // DOES change original array
    }
}

public static void reassign(int[] arr) {
    arr = new int[]{99, 99}; // does NOT change caller's reference
}

int[] nums = {1, 2, 3};
doubleAll(nums);
System.out.println(nums[0]); // 2  (element changed)
reassign(nums);
System.out.println(nums[0]); // 2  (reference unchanged)`,
    description: "In Java, all method arguments are passed by value. For arrays (which are objects), the value passed is a copy of the reference — both the caller and the method point to the same array object. Therefore modifying `arr[i]` inside the method affects the original. However, assigning `arr = new int[]{...}` only changes the local parameter copy, leaving the caller's reference untouched.",
    steps: [
      "Declare the parameter as an array type: `public static void fill(int[] arr)`.",
      "Inside the method, `arr[i] = value` writes through the shared reference and is visible to the caller.",
      "Assigning `arr = new int[5]` inside the method creates a new local reference; the caller's variable still points to the original array.",
      "Return the (possibly modified) array if you need to return a new array to the caller.",
      "On AP FRQs, clearly distinguish between element mutations (affect caller) and reference reassignment (do not affect caller).",
    ],
    examples: [
      {
        problem: "What does the following print?\n\nvoid addOne(int[] a) { a[0] += 1; }\nint[] x = {5, 6, 7};\naddOne(x);\nSystem.out.println(x[0]);",
        solution:
          "6\n\nThe method receives a copy of the reference to the same array object. Modifying `a[0]` changes the element in the original array, so `x[0]` is now 6.",
      },
    ],
    mcqs: [
      {
        question:
          "After the following code executes, what is the value of `arr[0]`?\n\npublic static void change(int[] a) { a[0] = 42; }\nint[] arr = {1, 2, 3};\nchange(arr);\nSystem.out.println(arr[0]);",
        options: [
          "1",
          "42",
          "0",
          "Compile-time error",
        ],
        answerIndex: 1,
        explanation:
          "Arrays are objects; passing an array passes a copy of its reference. Both `arr` and `a` point to the same array in memory. Setting `a[0] = 42` modifies the shared array, so `arr[0]` is 42 after the call. Option A (1) would be correct only if Java used pass-by-value for the elements themselves, which it does not for arrays. Option C (0) is never set. Option D is wrong — the code is valid.",
      },
      {
        question:
          "After the following code executes, what does `arr[0]` print?\n\npublic static void swap(int[] a) { a = new int[]{99, 99, 99}; }\nint[] arr = {1, 2, 3};\nswap(arr);\nSystem.out.println(arr[0]);",
        options: [
          "99",
          "1",
          "0",
          "NullPointerException",
        ],
        answerIndex: 1,
        explanation:
          "Inside `swap`, `a = new int[]{99,99,99}` reassigns the local parameter to a new array object. This does not affect the caller's `arr` variable, which still points to the original {1,2,3} array. Option A (99) would be correct only if Java passed arrays by reference, not reference-by-value. Option C (0) and Option D are both incorrect — the original array is unchanged and non-null.",
      },
    ],
  },

  {
    id: "arrays-of-objects",
    name: "Arrays of Objects",
    unit: "Unit 6: Array",
    unitNumber: 6,
    tags: ["new-u4", "MCQ frequent"],
    summary: "An array of objects holds references; all elements are null until each is explicitly instantiated with new.",
    formula: "Dog[] dogs = new Dog[5];",
    codeSnippet: `// Step 1: Create the array (all slots = null)
Dog[] dogs = new Dog[5];

// Step 2: Instantiate each element separately
for (int i = 0; i < dogs.length; i++) {
    dogs[i] = new Dog("Dog" + i, i + 1);
}

// Accessing a field or method before instantiation throws NPE:
// dogs[0].bark(); // NullPointerException if dogs[0] is still null

System.out.println(dogs[0].getName()); // safe after instantiation`,
    description: "Declaring `Dog[] dogs = new Dog[5]` creates an array of five null references — no Dog objects exist yet. Each slot must be individually assigned with `dogs[i] = new Dog(...)`. Calling any method on a null reference throws a `NullPointerException`. Arrays of objects are common in FRQ 4 scenarios where you process a collection of class instances.",
    steps: [
      "Declare and allocate: `ClassName[] arr = new ClassName[n];` — all n slots are null.",
      "Instantiate each element with `arr[i] = new ClassName(args);` — often done in a loop.",
      "Before calling methods or accessing fields on an element, ensure it is not null (or guarantee all slots are filled).",
      "Use the same index-based or for-each traversal patterns as with primitive arrays — for-each works if you only need to read.",
      "Remember you can still use `arr.length` to get the array size regardless of how many elements are non-null.",
    ],
    examples: [
      {
        problem: "Create an array of 3 String objects and populate it with \"alpha\", \"beta\", \"gamma\", then print each.",
        solution:
          "String[] words = new String[3];\nwords[0] = \"alpha\";\nwords[1] = \"beta\";\nwords[2] = \"gamma\";\nfor (String w : words) {\n    System.out.println(w);\n}",
      },
    ],
    mcqs: [
      {
        question:
          "After executing `Dog[] pack = new Dog[3];`, what is the value of `pack[1]`?",
        options: [
          "An empty Dog object with default field values",
          "0",
          "null",
          "A compile-time error because no Dogs were created",
        ],
        answerIndex: 2,
        explanation:
          "Allocating an object array initializes every slot to null — no objects are constructed automatically. `pack[1]` is null until explicitly set with `pack[1] = new Dog(...)`. Option A is wrong because Java does not auto-construct objects in arrays. Option B (0) is the default for int arrays, not object arrays. Option D is wrong — the declaration compiles and runs fine; the null references are legal.",
      },
      {
        question:
          "What exception is thrown by the following code?\n\nDog[] dogs = new Dog[2];\nSystem.out.println(dogs[0].getName());",
        options: [
          "ArrayIndexOutOfBoundsException",
          "NullPointerException",
          "IllegalArgumentException",
          "No exception — prints null",
        ],
        answerIndex: 1,
        explanation:
          "`dogs[0]` is null because no Dog was instantiated. Calling `.getName()` on a null reference throws a `NullPointerException`. Option A would occur only if the index 0 were out of bounds (it is not — the array has size 2). Option C is unrelated to null access. Option D is wrong because invoking a method on null does not silently print null; it throws.",
      },
    ],
  },
];
