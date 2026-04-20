type Topic = {
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
};

export const twoDArrayTopics: Topic[] = [
  {
    id: "2d-array-declaration",
    name: "2D Array Declaration and Initialization",
    unit: "Unit 8: 2D Array",
    unitNumber: 8,
    tags: ["new-u4", "MCQ frequent", "FRQ"],
    summary:
      "A 2D array in Java is an array of arrays, declared with two bracket pairs and indexed row-first.",
    formula: "int[][] grid = new int[3][4]; int[][] g = {{1,2},{3,4}};",
    codeSnippet: `// Allocate a 3-row, 4-column grid (all zeros by default)
int[][] grid = new int[3][4];

// Declare and initialize with literal values
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Verify dimensions
System.out.println(grid.length);      // 3  (rows)
System.out.println(grid[0].length);   // 4  (cols)`,
    description:
      "A 2D array is created with new int[rows][cols], where the first dimension specifies the number of rows and the second specifies the number of columns. When allocated with new, numeric elements default to 0, booleans to false, and object references to null. You can also initialize inline using nested brace literals, which sets both size and values simultaneously.",
    steps: [
      "Decide on the element type, then write the type followed by two empty bracket pairs: int[][].",
      "Use new type[numRows][numCols] to allocate memory, or supply an initializer list with nested braces { {row0}, {row1}, ... }.",
      "Remember that new int[3][4] creates 3 rows and 4 columns — the FIRST number is always rows.",
      "All cells are zero-initialized (or null for objects) when you use new; with literal initialization each value is set explicitly.",
      "Store the array in a variable and verify its shape with grid.length (rows) and grid[0].length (cols).",
    ],
    examples: [
      {
        problem:
          "Write Java code to declare a 2D int array called scores with 4 rows and 5 columns, and set every element in row 0 to 100.",
        solution:
          "int[][] scores = new int[4][5];\nfor (int c = 0; c < scores[0].length; c++) {\n    scores[0][c] = 100;\n}\n// scores[0] is now {100, 100, 100, 100, 100}; all other rows remain 0.",
      },
    ],
    mcqs: [
      {
        question:
          "Which declaration creates a 2D array with 5 rows and 3 columns?",
        options: [
          "int[][] grid = new int[3][5];",
          "int[][] grid = new int[5][3];",
          "int[5][3] grid = new int[][];",
          "int[][] grid = new int[][5];",
        ],
        answerIndex: 1,
        explanation:
          "new int[5][3] puts the row count first and the column count second, producing 5 rows and 3 columns. Option A reverses the dimensions, giving 3 rows and 5 columns. Option C is not valid Java syntax — the size cannot appear in the type declaration. Option D is also illegal; the first dimension must be provided before the second.",
      },
      {
        question:
          "What are the default values stored in int[][] data = new int[2][3]; immediately after declaration?",
        options: [
          "All elements are null.",
          "All elements are 0.",
          "All elements are undefined / garbage values.",
          "All elements are 1.",
        ],
        answerIndex: 1,
        explanation:
          "Java initializes every element of a newly allocated int array to 0. Option A is wrong — null is the default only for object (reference) types, not primitives. Option C is incorrect; Java guarantees zero-initialization for arrays, unlike C/C++. Option D is simply not how Java works.",
      },
    ],
  },
  {
    id: "2d-array-indexing",
    name: "2D Array Indexing",
    unit: "Unit 8: 2D Array",
    unitNumber: 8,
    tags: ["new-u4", "MCQ frequent", "FRQ"],
    summary:
      "Elements are accessed as grid[row][col]; row is always the first index and column is always the second.",
    formula: "grid[row][col]",
    codeSnippet: `int[][] grid = {
    {10, 20, 30},
    {40, 50, 60},
    {70, 80, 90}
};

// Access middle element (row 1, col 1)
int center = grid[1][1];   // 50

// Modify bottom-right element
grid[2][2] = 99;            // grid[2][2] is now 99

// Common mistake: swapped indices
// grid[col][row] would access wrong element!`,
    description:
      "Every element in a 2D array is uniquely identified by its row index followed by its column index — grid[row][col]. Both indices are zero-based. A very common AP exam trap is accidentally writing grid[col][row], which accesses a completely different (and possibly out-of-bounds) element. Always think 'row first, column second', matching the way you read a table.",
    steps: [
      "Identify the target cell by its row position (0-based) and its column position (0-based).",
      "Write grid[row][col] — row index inside the first brackets, column index inside the second brackets.",
      "Double-check you haven't swapped the indices; grid[col][row] is the most common 2D array mistake on the AP exam.",
      "For assignment, place the indexed expression on the left: grid[row][col] = value;",
      "For reading, use the indexed expression on the right or pass it directly to a method: System.out.println(grid[row][col]);",
    ],
    examples: [
      {
        problem:
          "Given int[][] t = {{1,2,3},{4,5,6},{7,8,9}};, what is the value of t[2][0], and what happens if you write t[0][2] instead?",
        solution:
          "t[2][0] is 7 — it's in row 2, column 0.\nt[0][2] is 3 — it's in row 0, column 2.\nThe two expressions access completely different cells, illustrating why keeping row and column in the correct order matters.",
      },
    ],
    mcqs: [
      {
        question:
          "Given int[][] m = {{1,2,3},{4,5,6},{7,8,9}};, what does m[0][2] evaluate to?",
        options: ["1", "7", "3", "4"],
        answerIndex: 2,
        explanation:
          "m[0][2] refers to row 0, column 2, which is the third element of the first row: 3. Option A (1) would be m[0][0]. Option B (7) would be m[2][0] — a classic row/col swap mistake. Option D (4) would be m[1][0].",
      },
      {
        question:
          "A student wants to assign 99 to the element in the last row, last column of int[][] g = new int[4][3];. Which statement is correct?",
        options: [
          "g[4][3] = 99;",
          "g[3][2] = 99;",
          "g[2][3] = 99;",
          "g[3][3] = 99;",
        ],
        answerIndex: 1,
        explanation:
          "With 4 rows and 3 columns, valid row indices are 0–3 and valid column indices are 0–2. The last element is therefore g[3][2]. Option A uses out-of-bounds indices 4 and 3, causing ArrayIndexOutOfBoundsException. Option C swaps the last valid row and column indices. Option D uses column index 3, which is out of bounds.",
      },
    ],
  },
  {
    id: "2d-array-dimensions",
    name: "2D Array Dimensions (.length and [0].length)",
    unit: "Unit 8: 2D Array",
    unitNumber: 8,
    tags: ["new-u4", "MCQ frequent", "FRQ"],
    summary:
      "grid.length gives the number of rows; grid[0].length gives the number of columns in a rectangular array.",
    formula: "grid.length (rows); grid[0].length (cols)",
    codeSnippet: `int[][] grid = new int[5][7];

int rows = grid.length;       // 5
int cols = grid[0].length;    // 7

System.out.println("Rows: " + rows);   // Rows: 5
System.out.println("Cols: " + cols);   // Cols: 7

// Safe for any row in a rectangular array:
for (int r = 0; r < grid.length; r++) {
    System.out.println("Row " + r + " length: " + grid[r].length);
}`,
    description:
      "A 2D array in Java is actually an array of row arrays. grid.length returns the number of row arrays, i.e., the row count. Each row is itself an array, so grid[0].length returns the number of elements in row 0, i.e., the column count. For the rectangular arrays used on the AP exam, all rows have the same length, so grid[0].length works universally. In jagged (non-rectangular) arrays you would use grid[r].length inside the loop instead.",
    steps: [
      "Use grid.length to get the number of rows — this is the length of the outer array.",
      "Use grid[0].length to get the number of columns — this is the length of any individual row array.",
      "In loop bounds, use grid.length for the row limit and grid[0].length (or grid[r].length) for the column limit.",
      "Never hard-code row or column counts; always derive them from .length to avoid off-by-one errors and to handle arrays of different sizes.",
      "Remember that grid[grid.length] would be out of bounds — valid row indices are 0 through grid.length - 1.",
    ],
    examples: [
      {
        problem:
          "Write a method header and its first two lines that prints the number of rows and columns of any rectangular int[][] passed to it.",
        solution:
          'public static void printDimensions(int[][] arr) {\n    System.out.println("Rows: " + arr.length);\n    System.out.println("Cols: " + arr[0].length);\n}',
      },
    ],
    mcqs: [
      {
        question:
          "For int[][] data = new int[6][4];, what does data[0].length return?",
        options: ["6", "4", "24", "0"],
        answerIndex: 1,
        explanation:
          "data[0] is the first row array, which has 4 elements, so data[0].length is 4. Option A (6) is data.length — the number of rows. Option C (24) is the total element count, not a value .length ever returns. Option D (0) is wrong because the row has 4 allocated slots.",
      },
      {
        question:
          "Which expression correctly gives the index of the last column in a rectangular 2D array grid?",
        options: [
          "grid.length - 1",
          "grid[0].length",
          "grid[0].length - 1",
          "grid.length",
        ],
        answerIndex: 2,
        explanation:
          "Columns are zero-based, so the last valid column index is grid[0].length - 1. Option A gives the last valid row index, not column. Option B gives the column count itself, which is one past the last valid index and causes ArrayIndexOutOfBoundsException. Option D gives the row count, unrelated to columns.",
      },
    ],
  },
  {
    id: "2d-row-traversal",
    name: "Row-Major Traversal (nested for loops)",
    unit: "Unit 8: 2D Array",
    unitNumber: 8,
    tags: ["new-u4", "MCQ frequent", "FRQ"],
    summary:
      "Row-major traversal visits every element row by row using an outer loop over rows and an inner loop over columns.",
    formula:
      "for (int r = 0; r < grid.length; r++) for (int c = 0; c < grid[r].length; c++)",
    codeSnippet: `int[][] grid = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Row-major: process each row completely before moving to next
for (int r = 0; r < grid.length; r++) {
    for (int c = 0; c < grid[r].length; c++) {
        System.out.print(grid[r][c] + " ");
    }
    System.out.println(); // newline after each row
}
// Output: 1 2 3 / 4 5 6 / 7 8 9`,
    description:
      "Row-major traversal is the standard pattern for 2D array processing on the AP exam. The outer loop iterates over row indices (0 to grid.length - 1), and the inner loop iterates over column indices for that row (0 to grid[r].length - 1). Every element grid[r][c] is visited exactly once. Because the inner loop completes an entire row before the outer loop advances, elements are processed left-to-right within each row and top-to-bottom across rows.",
    steps: [
      "Write the outer for loop: for (int r = 0; r < grid.length; r++) — this steps through each row index.",
      "Nest the inner for loop inside: for (int c = 0; c < grid[r].length; c++) — this steps through each column index within the current row.",
      "Access the current element as grid[r][c] inside the inner loop body.",
      "Keep operations that apply to a whole row (like printing a newline) between the inner loop closing brace and the outer loop closing brace.",
      "Verify loop bounds: outer runs 0 to grid.length - 1, inner runs 0 to grid[r].length - 1; using <= in either condition causes ArrayIndexOutOfBoundsException.",
    ],
    examples: [
      {
        problem:
          "Write a method that returns the sum of all elements in a rectangular int[][] using row-major traversal.",
        solution:
          "public static int sumAll(int[][] grid) {\n    int total = 0;\n    for (int r = 0; r < grid.length; r++) {\n        for (int c = 0; c < grid[r].length; c++) {\n            total += grid[r][c];\n        }\n    }\n    return total;\n}",
      },
    ],
    mcqs: [
      {
        question:
          "In a row-major traversal of int[][] g = new int[4][5];, how many total iterations does the inner loop body execute?",
        options: ["4", "5", "9", "20"],
        answerIndex: 3,
        explanation:
          "The outer loop runs 4 times (one per row) and the inner loop runs 5 times per row, giving 4 × 5 = 20 total executions of the inner body. Option A counts only the outer iterations. Option B counts only the inner iterations per row. Option C adds the dimensions instead of multiplying them.",
      },
      {
        question:
          "A student writes the traversal below. What bug does it contain?\nfor (int r = 0; r <= grid.length; r++)\n  for (int c = 0; c < grid[r].length; c++)\n    process(grid[r][c]);",
        options: [
          "The inner loop bound should use grid.length instead of grid[r].length.",
          "The outer loop uses <= instead of <, causing an ArrayIndexOutOfBoundsException when r equals grid.length.",
          "grid[r][c] should be written grid[c][r] for row-major order.",
          "The inner loop variable should start at 1, not 0.",
        ],
        answerIndex: 1,
        explanation:
          "Using r <= grid.length allows r to reach grid.length, which is an invalid index (valid indices are 0 to grid.length - 1), throwing ArrayIndexOutOfBoundsException. Option A is wrong — grid[r].length is the correct column bound. Option C is wrong — grid[r][c] is the correct row-first indexing. Option D is wrong — arrays are zero-indexed so starting at 0 is correct.",
      },
    ],
  },
  {
    id: "2d-col-traversal",
    name: "Column-Major Traversal",
    unit: "Unit 8: 2D Array",
    unitNumber: 8,
    tags: ["new-u4", "MCQ frequent", "FRQ"],
    summary:
      "Column-major traversal visits every element column by column by placing the column loop on the outside and the row loop on the inside.",
    formula: "",
    codeSnippet: `int[][] grid = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Column-major: complete each column before moving to next
for (int c = 0; c < grid[0].length; c++) {
    for (int r = 0; r < grid.length; r++) {
        System.out.print(grid[r][c] + " ");
    }
    System.out.println(); // newline after each column
}
// Output: 1 4 7 / 2 5 8 / 3 6 9`,
    description:
      "Column-major traversal swaps the loop order compared to row-major: the outer loop iterates over column indices and the inner loop iterates over row indices. The element is still accessed as grid[row][col] — the indexing syntax does not change, only the order in which indices are varied. This pattern produces a top-to-bottom pass through each column before moving to the next column. It is less common than row-major but appears in FRQ problems that ask you to process data column by column.",
    steps: [
      "Write the outer loop over columns: for (int c = 0; c < grid[0].length; c++).",
      "Nest the inner loop over rows: for (int r = 0; r < grid.length; r++).",
      "Access elements as grid[r][c] — note that r and c are still in the correct row-first, column-second order inside the brackets even though c is the outer variable.",
      "Do not change the indexing order to grid[c][r]; the array is still row-indexed first regardless of traversal order.",
      "Use column-major when the problem requires processing all values in a column together before advancing to the next column.",
    ],
    examples: [
      {
        problem:
          "Write a method that prints each column of a rectangular int[][] on its own line, using column-major traversal.",
        solution:
          'public static void printByColumn(int[][] grid) {\n    for (int c = 0; c < grid[0].length; c++) {\n        for (int r = 0; r < grid.length; r++) {\n            System.out.print(grid[r][c] + " ");\n        }\n        System.out.println();\n    }\n}',
      },
    ],
    mcqs: [
      {
        question:
          "What is the key structural difference between row-major and column-major traversal of a 2D array?",
        options: [
          "Column-major uses grid[c][r] while row-major uses grid[r][c].",
          "Column-major places the column index loop on the outside; row-major places the row index loop on the outside.",
          "Column-major traversal requires a different array type than row-major.",
          "Column-major traversal can only be used with square arrays.",
        ],
        answerIndex: 1,
        explanation:
          "The only difference is which index controls the outer loop. In column-major, the column loop is outer so each column is fully traversed before the next. In row-major, the row loop is outer. Option A is wrong — the array access is always grid[r][c] regardless of traversal order; writing grid[c][r] would access the wrong element. Option C is wrong — no different type is needed. Option D is wrong — column-major works on any rectangular array.",
      },
      {
        question:
          "Given int[][] g = {{1,2},{3,4},{5,6}};, in what order does column-major traversal visit the elements?",
        options: [
          "1, 2, 3, 4, 5, 6",
          "1, 3, 5, 2, 4, 6",
          "1, 2, 4, 3, 5, 6",
          "2, 4, 6, 1, 3, 5",
        ],
        answerIndex: 1,
        explanation:
          "Column-major visits column 0 first (g[0][0]=1, g[1][0]=3, g[2][0]=5) then column 1 (g[0][1]=2, g[1][1]=4, g[2][1]=6), giving 1, 3, 5, 2, 4, 6. Option A is row-major order. Options C and D reflect neither correct traversal pattern.",
      },
    ],
  },
  {
    id: "2d-algorithms",
    name: "2D Array Algorithms (sum, max, count, search)",
    unit: "Unit 8: 2D Array",
    unitNumber: 8,
    tags: ["new-u4", "MCQ frequent", "FRQ"],
    summary:
      "Standard algorithms — sum, max, count, and search — extend to 2D arrays by using nested loops to visit every element.",
    formula: "",
    codeSnippet: `// Sum all elements
public static int sumGrid(int[][] g) {
    int total = 0;
    for (int r = 0; r < g.length; r++)
        for (int c = 0; c < g[r].length; c++)
            total += g[r][c];
    return total;
}

// Find maximum element
public static int maxGrid(int[][] g) {
    int max = g[0][0];
    for (int r = 0; r < g.length; r++)
        for (int c = 0; c < g[r].length; c++)
            if (g[r][c] > max) max = g[r][c];
    return max;
}`,
    description:
      "Every 1D array algorithm has a direct 2D counterpart — replace the single loop with nested loops. To sum all elements, initialize an accumulator to 0 and add each grid[r][c]. To find the maximum, seed the max variable with grid[0][0] then update it whenever a larger element is found. To count elements satisfying a condition, increment a counter inside an if statement. To search, return the row and column (or a boolean) when the target is found, and break or return false if the entire grid is exhausted without a match.",
    steps: [
      "Choose the algorithm pattern: accumulator (sum/count), running extremum (max/min), or early-exit search.",
      "For sum or count, initialize the variable to 0 before the outer loop; for max/min, initialize to grid[0][0] (not Integer.MIN_VALUE or 0, unless the problem guarantees those are safe seeds).",
      "Use nested row-major loops to visit every element, applying the algorithm logic to grid[r][c] inside the inner loop.",
      "For search, return immediately when the target is found rather than continuing the traversal.",
      "After the loops, return the accumulated result (sum, max, count) or the 'not found' sentinel for search.",
    ],
    examples: [
      {
        problem:
          "Write a method that counts how many elements in a rectangular int[][] grid are greater than a given int threshold.",
        solution:
          "public static int countAbove(int[][] grid, int threshold) {\n    int count = 0;\n    for (int r = 0; r < grid.length; r++) {\n        for (int c = 0; c < grid[r].length; c++) {\n            if (grid[r][c] > threshold) {\n                count++;\n            }\n        }\n    }\n    return count;\n}",
      },
    ],
    mcqs: [
      {
        question:
          "A method initializes int max = 0; then iterates over all elements of an int[][] to find the maximum. What problem can arise?",
        options: [
          "The method will always return 0 regardless of the array contents.",
          "If all elements are negative, the method incorrectly returns 0 instead of the actual maximum.",
          "The method will throw an exception because 0 is not a valid array element.",
          "There is no problem; initializing max to 0 is always safe for int arrays.",
        ],
        answerIndex: 1,
        explanation:
          "If every element in the array is negative, none will be greater than 0, so max remains 0 — a value not in the array. The correct initialization is max = grid[0][0], which guarantees the seed value is an actual element. Option A is too strong; when positive elements exist the method may return the right answer. Option C is wrong — 0 is a perfectly valid int. Option D is wrong for the reason given in the explanation.",
      },
      {
        question:
          "Which code fragment correctly searches a 2D int array for a target value and returns true if found?",
        options: [
          "for (int r = 0; r < g.length; r++) { for (int c = 0; c < g[r].length; c++) { if (g[r][c] == target) return true; } } return false;",
          "for (int r = 0; r < g.length; r++) { for (int c = 0; c < g[r].length; c++) { if (g[r][c] == target) found = true; } } return found;",
          "for (int r = 0; r < g.length; r++) { for (int c = 0; c < g[r].length; c++) { if (g[c][r] == target) return true; } } return false;",
          "for (int c = 0; c < g[0].length; c++) { if (g[c] == target) return true; } return false;",
        ],
        answerIndex: 0,
        explanation:
          "Option A returns true immediately upon finding the target (early exit) and returns false only after exhausting the entire grid — the correct pattern. Option B works but is less efficient because it continues searching even after finding the target; it would also fail to compile without declaring found. Option C accesses g[c][r] instead of g[r][c], which swaps the indices and will access wrong elements or throw an exception. Option D compares a row array reference (g[c]) to an int, which is a type mismatch.",
      },
    ],
  },
  {
    id: "2d-passing-methods",
    name: "Passing 2D Arrays to Methods",
    unit: "Unit 8: 2D Array",
    unitNumber: 8,
    tags: ["new-u4", "MCQ frequent", "FRQ"],
    summary:
      "2D arrays are objects passed by reference, so a method can read and modify the original array's contents directly.",
    formula: "",
    codeSnippet: `// Method receives a 2D array by reference
public static void doubleAll(int[][] grid) {
    for (int r = 0; r < grid.length; r++) {
        for (int c = 0; c < grid[r].length; c++) {
            grid[r][c] *= 2;  // modifies the original array
        }
    }
}

// Caller
int[][] data = {{1, 2}, {3, 4}};
doubleAll(data);
// data is now {{2, 4}, {6, 8}}`,
    description:
      "In Java, arrays are objects, and objects are passed by reference (technically, the reference itself is passed by value). This means that when you pass a 2D array to a method, the method receives a copy of the reference pointing to the same underlying data. Any changes made to element values inside the method — such as grid[r][c] = newValue — are reflected in the original array in the caller. However, reassigning the parameter variable itself (grid = new int[3][3]) inside the method does not affect the caller's variable.",
    steps: [
      "Declare the method parameter as the correct 2D array type, e.g., int[][] grid or String[][] table.",
      "Inside the method, use nested loops with grid[r][c] to read or modify elements.",
      "Modifications to individual elements (grid[r][c] = x;) affect the original array because both the caller and the method reference the same data.",
      "Reassigning the parameter itself (grid = new int[2][2];) does NOT change the caller's variable — it only changes the local reference copy.",
      "Pass the array name without brackets when calling: myMethod(data); not myMethod(data[][]);",
    ],
    examples: [
      {
        problem:
          "Write a static method fillWith that takes an int[][] and an int value, and sets every element of the array to that value. Then show how to call it.",
        solution:
          "public static void fillWith(int[][] grid, int value) {\n    for (int r = 0; r < grid.length; r++) {\n        for (int c = 0; c < grid[r].length; c++) {\n            grid[r][c] = value;\n        }\n    }\n}\n\n// Calling code:\nint[][] board = new int[3][3];\nfillWith(board, 5);\n// board is now all 5s",
      },
    ],
    mcqs: [
      {
        question:
          "A method receives int[][] arr as a parameter and executes arr[0][0] = 999;. What effect does this have on the array passed by the caller?",
        options: [
          "No effect — Java passes a copy of the array to the method.",
          "The element at row 0, column 0 of the caller's array is changed to 999.",
          "The entire row 0 of the caller's array is set to 999.",
          "A new array is created inside the method, leaving the caller's array unchanged.",
        ],
        answerIndex: 1,
        explanation:
          "Arrays are objects. The method receives a reference to the same array object, so modifying arr[0][0] changes the original. Option A is wrong — a copy of the reference is passed, not a copy of the array. Option C is wrong — only arr[0][0] is modified, not the rest of row 0. Option D describes what would happen only if the method reassigned arr to a new array, which it does not.",
      },
      {
        question:
          "Which method signature correctly accepts a rectangular int 2D array and returns its number of rows?",
        options: [
          "public static int rowCount(int[] grid)",
          "public static int rowCount(int[][] grid)",
          "public static int rowCount(int[,] grid)",
          "public static int rowCount(int grid[][])",
        ],
        answerIndex: 1,
        explanation:
          "The correct Java type for a 2D int array is int[][], making option B correct. Option A declares a 1D array parameter, which would not compile when a 2D array is passed. Option C uses C#-style syntax, which is not valid Java. Option D places the brackets after the parameter name; while technically legal Java, it is non-standard and not what the AP exam expects — the canonical form is int[][] grid.",
      },
    ],
  },
  {
    id: "2d-array-of-objects",
    name: "2D Arrays of Objects",
    unit: "Unit 8: 2D Array",
    unitNumber: 8,
    tags: ["new-u4", "MCQ frequent"],
    summary:
      "A 2D array of objects allocates reference slots initialized to null; each cell must be individually assigned a new object instance.",
    formula: "",
    codeSnippet: `// Suppose Cell is a simple class with a value field
// Step 1: allocate the array of references (all null)
Cell[][] cells = new Cell[3][3];

// Step 2: populate each cell with a new object
for (int r = 0; r < cells.length; r++) {
    for (int c = 0; c < cells[r].length; c++) {
        cells[r][c] = new Cell(r * 3 + c); // create each object
    }
}

// Step 3: access instance methods normally
System.out.println(cells[1][2].getValue());`,
    description:
      "When you declare Cell[][] cells = new Cell[3][3];, Java allocates a 3-by-3 grid of reference variables, each initialized to null. No Cell objects are created at this point. You must explicitly construct each object and assign it: cells[r][c] = new Cell(...);. Calling a method on a null reference causes a NullPointerException, so initializing every cell before use is essential. The remaining behavior — indexing, traversal, passing to methods — is identical to a 2D array of primitives.",
    steps: [
      "Declare the 2D array with the object type followed by [][]: ClassName[][] arr = new ClassName[rows][cols];",
      "Recognize that this step creates only null references — zero actual objects exist yet.",
      "Use nested loops to construct and assign each object: arr[r][c] = new ClassName(args);",
      "After initialization, access fields and methods through normal dot notation: arr[r][c].methodName();",
      "Before calling any method on a cell, ensure it is not null (or guarantee initialization was complete) to avoid NullPointerException.",
    ],
    examples: [
      {
        problem:
          "Given a class Point with a constructor Point(int x, int y) and a method String coords(), write code to create a 2-by-2 array of Point objects where each Point stores its row as x and its column as y, then print the coords of every element.",
        solution:
          'Point[][] grid = new Point[2][2];\nfor (int r = 0; r < grid.length; r++) {\n    for (int c = 0; c < grid[r].length; c++) {\n        grid[r][c] = new Point(r, c);\n    }\n}\nfor (int r = 0; r < grid.length; r++) {\n    for (int c = 0; c < grid[r].length; c++) {\n        System.out.println(grid[r][c].coords());\n    }\n}\n// Output: (0,0) (0,1) (1,0) (1,1)',
      },
    ],
    mcqs: [
      {
        question:
          "After executing Dog[][] kennel = new Dog[4][4];, what is stored in kennel[0][0]?",
        options: [
          "A default Dog object created automatically by Java.",
          "The integer 0.",
          "null",
          "An empty string.",
        ],
        answerIndex: 2,
        explanation:
          "Allocating an array of objects fills every slot with null — no Dog constructors are called. Option A is wrong; Java never silently constructs objects when allocating a reference-type array. Option B is wrong; 0 is the default for primitive int arrays, not object arrays. Option D is wrong; null and an empty string are distinct values, and this is a Dog array, not a String array.",
      },
      {
        question:
          "What exception is thrown when you call kennel[1][1].bark() immediately after Dog[][] kennel = new Dog[3][3]; without further initialization?",
        options: [
          "ArrayIndexOutOfBoundsException",
          "NullPointerException",
          "IllegalArgumentException",
          "ClassCastException",
        ],
        answerIndex: 1,
        explanation:
          "kennel[1][1] is null because no Dog was assigned to that cell. Calling .bark() on null triggers a NullPointerException. Option A would occur if the indices were out of range, not when accessing a null reference. Option C is thrown when a method receives an illegal argument — unrelated here. Option D is thrown when casting to an incompatible type — also unrelated.",
      },
    ],
  },
];
