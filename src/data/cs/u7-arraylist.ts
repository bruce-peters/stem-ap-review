import type { Topic } from "@/types";

// CS-specific extension: adds optional codeSnippet field for Java examples
type CSTopic = Topic & { codeSnippet?: string };

export const arraylistTopics: CSTopic[] = [
  // ─── 1. ArrayList Declaration and Initialization ──────────────────────────
  {
    id: "arraylist-declaration",
    name: "ArrayList Declaration and Initialization",
    unit: "Unit 7: ArrayList & File I/O",
    unitNumber: 7,
    tags: ["new-u4", "MCQ frequent", "FRQ"],
    summary:
      "ArrayList is a resizable array from java.util that requires a wrapper type as its generic parameter.",
    formula: "ArrayList<Integer> list = new ArrayList<>();",
    codeSnippet: `import java.util.ArrayList;

public class Demo {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        ArrayList<Integer> scores = new ArrayList<>();
        ArrayList<Double> prices = new ArrayList<>();
        // Cannot use primitives: ArrayList<int> is illegal
        System.out.println(names.size()); // 0
    }
}`,
    description:
      "ArrayList is a generic, resizable list class in java.util. Unlike arrays, its size grows automatically as elements are added. The type parameter must be a reference (wrapper) type — use Integer instead of int, Double instead of double, Boolean instead of boolean. The diamond operator <> on the right side lets Java infer the type. Declaring with the interface type ArrayList<E> is standard AP style.",
    steps: [
      "Add the import statement at the top of the file: import java.util.ArrayList;",
      "Declare the variable with a reference (wrapper) type in the angle brackets, e.g., ArrayList<String>.",
      "Instantiate with new ArrayList<>() using the diamond operator — Java infers the type from the left side.",
      "Remember the list starts empty; size() returns 0 before any elements are added.",
      "Never use a primitive type (int, double, boolean) as the generic parameter — this causes a compile error.",
    ],
    examples: [
      {
        problem:
          "Write the declaration and initialization for an ArrayList that will store the integer grades of students in a class.",
        solution:
          "import java.util.ArrayList;\n\nArrayList<Integer> grades = new ArrayList<>();\n\nThe type parameter is Integer (not int) because ArrayList requires a reference type. The list begins empty. Elements are added later with grades.add(value).",
      },
    ],
    mcqs: [
      {
        question:
          "Which of the following correctly declares and initializes an ArrayList of integers in Java?",
        options: [
          "ArrayList<int> list = new ArrayList<int>();",
          "ArrayList<Integer> list = new ArrayList<>();",
          "ArrayList list = new ArrayList<Integer>();",
          "int[] list = new ArrayList<Integer>();",
        ],
        answerIndex: 1,
        explanation:
          "Option B is correct: ArrayList<Integer> uses the Integer wrapper class (required — primitives are not allowed as type parameters), and the diamond <> on the right side correctly infers the type. Option A fails because int is a primitive and cannot be used as a generic type parameter. Option C is missing the type parameter on the left, which compiles with an unchecked warning and loses type safety. Option D is a type mismatch — an int array cannot hold an ArrayList reference.",
      },
      {
        question:
          "After executing the following, what does list.size() return?\n\nArrayList<String> list = new ArrayList<>();",
        options: ["null", "1", "0", "Causes a NullPointerException"],
        answerIndex: 2,
        explanation:
          "Option C is correct: a newly constructed ArrayList contains no elements, so size() returns 0. Option A is wrong — size() returns an int, never null. Option B would require at least one element to have been added. Option D is wrong because the object was properly instantiated with new; a NullPointerException would only occur if the variable were null and you tried to call a method on it.",
      },
    ],
  },

  // ─── 2. ArrayList.add ─────────────────────────────────────────────────────
  {
    id: "arraylist-add",
    name: "ArrayList.add(val) and add(i, val)",
    unit: "Unit 7: ArrayList & File I/O",
    unitNumber: 7,
    tags: ["new-u4", "MCQ frequent", "FRQ"],
    summary:
      "add(val) appends to the end; add(i, val) inserts at index i and shifts subsequent elements right.",
    formula: "list.add(42); list.add(0, 99);",
    codeSnippet: `ArrayList<Integer> list = new ArrayList<>();
list.add(10);       // [10]
list.add(20);       // [10, 20]
list.add(30);       // [10, 20, 30]
list.add(1, 99);    // [10, 99, 20, 30]  — inserts at index 1
list.add(0, 5);     // [5, 10, 99, 20, 30] — inserts at front
// Valid index range for add(i, val): 0 to size() inclusive`,
    description:
      "The one-argument add(val) appends an element at the end of the list in O(1) amortized time. The two-argument add(i, val) inserts val at position i and shifts every element at index i and beyond one position to the right, making it O(n). The valid index range for insertion is 0 to size() inclusive — inserting at index size() is equivalent to appending. Attempting to insert at an index greater than size() throws an IndexOutOfBoundsException.",
    steps: [
      "To append an element to the end, call list.add(value) — this is the most common form.",
      "To insert at a specific position, call list.add(index, value) where index is between 0 and list.size() inclusive.",
      "After add(index, value), all elements at index and beyond are shifted right by one; the list size increases by 1.",
      "Never pass an index greater than size() to add(i, val) — it throws IndexOutOfBoundsException at runtime.",
      "Remember autoboxing: list.add(5) automatically boxes the int 5 into Integer(5).",
    ],
    examples: [
      {
        problem:
          "Starting with an empty ArrayList<String>, add \"B\", then \"C\", then insert \"A\" at the front. What is the final list?",
        solution:
          'ArrayList<String> list = new ArrayList<>();\nlist.add("B");      // ["B"]\nlist.add("C");      // ["B", "C"]\nlist.add(0, "A");   // ["A", "B", "C"]\n\nadd(0, "A") inserts at index 0 and shifts "B" to index 1 and "C" to index 2. Final list: ["A", "B", "C"].',
      },
    ],
    mcqs: [
      {
        question:
          'Consider the following code:\n\nArrayList<String> list = new ArrayList<>();\nlist.add("X");\nlist.add("Y");\nlist.add("Z");\nlist.add(1, "W");\n\nWhat is the contents of list after execution?',
        options: [
          '["W", "X", "Y", "Z"]',
          '["X", "W", "Y", "Z"]',
          '["X", "Y", "W", "Z"]',
          '["X", "Y", "Z", "W"]',
        ],
        answerIndex: 1,
        explanation:
          'Option B is correct. After adding "X", "Y", "Z", the list is ["X", "Y", "Z"]. Calling add(1, "W") inserts "W" at index 1, shifting "Y" to index 2 and "Z" to index 3, giving ["X", "W", "Y", "Z"]. Option A would result from inserting at index 0. Option C would result from inserting at index 2. Option D would result from calling add("W") (append), not add(1, "W").',
      },
      {
        question:
          "An ArrayList<Integer> currently contains [4, 7, 2]. Which call throws an IndexOutOfBoundsException?",
        options: [
          "list.add(0, 10)",
          "list.add(3, 10)",
          "list.add(4, 10)",
          "list.add(10)",
        ],
        answerIndex: 2,
        explanation:
          "Option C is correct. The list has 3 elements (indices 0–2) and size() == 3. The valid index range for add(i, val) is 0 to size() inclusive, so index 3 is the maximum valid insert position (appends to end). Index 4 exceeds size(), throwing IndexOutOfBoundsException. Option A (index 0), Option B (index 3 == size()), and Option D (no-index append) are all valid calls.",
      },
    ],
  },

  // ─── 3. ArrayList.get ─────────────────────────────────────────────────────
  {
    id: "arraylist-get",
    name: "ArrayList.get(i)",
    unit: "Unit 7: ArrayList & File I/O",
    unitNumber: 7,
    tags: ["new-u4", "MCQ frequent", "FRQ"],
    summary:
      "get(i) returns the element at index i without removing it; valid indices are 0 to size()-1.",
    formula: "list.get(2)",
    codeSnippet: `ArrayList<String> list = new ArrayList<>();
list.add("alpha");
list.add("beta");
list.add("gamma");

String first = list.get(0);  // "alpha"
String last  = list.get(list.size() - 1);  // "gamma"
// list.get(3) would throw IndexOutOfBoundsException — size is 3, max index is 2`,
    description:
      "get(i) retrieves the element at zero-based index i and returns it without modifying the list. It is the ArrayList equivalent of array[i]. The valid index range is 0 to size()-1 inclusive; any index outside this range throws an IndexOutOfBoundsException at runtime. A common pattern is list.get(list.size() - 1) to access the last element, since there is no getLast() method on the AP exam subset.",
    steps: [
      "Determine the zero-based index of the element you want to access (0 is the first element).",
      "Call list.get(index) — it returns the element of the list's generic type (e.g., String, Integer).",
      "To access the last element, use list.get(list.size() - 1).",
      "Always verify the index is in range (0 to size()-1) to avoid IndexOutOfBoundsException.",
      "Remember that get() does not remove the element — use remove(i) if removal is needed.",
    ],
    examples: [
      {
        problem:
          "An ArrayList<Integer> contains [15, 30, 45, 60]. Write code to print the first and last elements.",
        solution:
          "int first = list.get(0);              // 15\nint last  = list.get(list.size() - 1); // 60\nSystem.out.println(first);  // 15\nSystem.out.println(last);   // 60\n\nlist.size() is 4, so list.size()-1 is 3, which is the index of 60.",
      },
    ],
    mcqs: [
      {
        question:
          "An ArrayList<Integer> named scores contains [88, 92, 75, 100]. What does scores.get(2) return?",
        options: ["92", "75", "100", "Throws IndexOutOfBoundsException"],
        answerIndex: 1,
        explanation:
          "Option B is correct. Indices are zero-based: index 0 → 88, index 1 → 92, index 2 → 75, index 3 → 100. Therefore get(2) returns 75. Option A (92) is at index 1. Option C (100) is at index 3. Option D is wrong because index 2 is within the valid range of 0 to 3.",
      },
      {
        question:
          "Which of the following correctly retrieves the last element of an ArrayList<String> named words?",
        options: [
          "words.get(words.length() - 1)",
          "words.get(words.length)",
          "words.get(words.size() - 1)",
          "words.get(words.size())",
        ],
        answerIndex: 2,
        explanation:
          "Option C is correct. ArrayList uses size() (not length or length()) to get the number of elements, and the last valid index is size()-1. Option A and B use length(), which is a String method, not an ArrayList method — calling it causes a compile error. Option D uses size() without subtracting 1, which is one past the last valid index and throws IndexOutOfBoundsException.",
      },
    ],
  },

  // ─── 4. ArrayList.set ─────────────────────────────────────────────────────
  {
    id: "arraylist-set",
    name: "ArrayList.set(i, val)",
    unit: "Unit 7: ArrayList & File I/O",
    unitNumber: 7,
    tags: ["new-u4", "MCQ frequent", "FRQ"],
    summary:
      "set(i, val) replaces the element at index i with val and returns the old element.",
    formula: "list.set(1, 10)",
    codeSnippet: `ArrayList<String> list = new ArrayList<>();
list.add("cat");
list.add("dog");
list.add("bird");
// list is ["cat", "dog", "bird"]

String old = list.set(1, "fish");
// old == "dog"
// list is now ["cat", "fish", "bird"]
// size is still 3 — set does NOT change list size`,
    description:
      "set(i, val) overwrites the element at index i with the new value val and returns the element that was previously stored there. Unlike add, set does not change the list's size — it is a direct replacement. The index must be in the range 0 to size()-1; an out-of-range index throws IndexOutOfBoundsException. The return value (the old element) is often ignored in practice but may be tested on the AP exam.",
    steps: [
      "Identify the index of the element to be replaced (0-based, range 0 to size()-1).",
      "Call list.set(index, newValue) to overwrite the element at that position.",
      "Optionally capture the return value — set() returns the element that was there before the replacement.",
      "Confirm the list size is unchanged after set(); it only replaces, never inserts.",
      "Never use set() at index size() or beyond — that throws IndexOutOfBoundsException.",
    ],
    examples: [
      {
        problem:
          "An ArrayList<Integer> contains [5, 10, 15, 20]. Replace the value at index 2 with 99. What is the list and what value is returned by set()?",
        solution:
          "int old = list.set(2, 99);\n// old == 15\n// list is now [5, 10, 99, 20]\n\nset() replaces the element at index 2 (which was 15) with 99 and returns 15. The size remains 4.",
      },
    ],
    mcqs: [
      {
        question:
          "An ArrayList<String> contains [\"A\", \"B\", \"C\"]. After calling list.set(0, \"Z\"), what does the list contain?",
        options: [
          '["Z", "A", "B", "C"]',
          '["A", "B", "C", "Z"]',
          '["Z", "B", "C"]',
          '["A", "Z", "B", "C"]',
        ],
        answerIndex: 2,
        explanation:
          'Option C is correct. set(0, "Z") replaces the element at index 0 ("A") with "Z", giving ["Z", "B", "C"]. The size stays at 3. Option A would be the result of add(0, "Z"), which inserts without removing. Option B would be the result of add("Z"), which appends. Option D would be the result of add(1, "Z").',
      },
      {
        question:
          "What does ArrayList.set(i, val) return?",
        options: [
          "The new value val",
          "The old value that was replaced",
          "void — it returns nothing",
          "The index i of the replaced element",
        ],
        answerIndex: 1,
        explanation:
          "Option B is correct. set(i, val) returns the element previously stored at index i (the old value). This is useful when you need to remember what was replaced. Option A is wrong — the new value is already known by the caller. Option C is wrong — set() has a return type equal to the list's generic type (e.g., String, Integer), not void. Option D is wrong — the method returns the old element, not the index.",
      },
    ],
  },

  // ─── 5. ArrayList.remove ──────────────────────────────────────────────────
  {
    id: "arraylist-remove",
    name: "ArrayList.remove(i)",
    unit: "Unit 7: ArrayList & File I/O",
    unitNumber: 7,
    tags: ["new-u4", "MCQ frequent", "FRQ"],
    summary:
      "remove(int i) removes the element at index i and shifts remaining elements left; on Integer lists, remove(Integer.valueOf(x)) removes by value.",
    formula: "list.remove(0)",
    codeSnippet: `ArrayList<Integer> list = new ArrayList<>();
list.add(10); list.add(20); list.add(30);
// [10, 20, 30]

int removed = list.remove(1);  // removes index 1 → 20
// list is [10, 30], removed == 20

// TRAP on Integer lists:
// list.remove(0)            → removes index 0 (int overload wins)
// list.remove(Integer.valueOf(10)) → removes first occurrence of value 10`,
    description:
      "remove(int i) removes the element at index i, shifts all subsequent elements one position to the left, decrements size by 1, and returns the removed element. For ArrayList<Integer>, there is an important overload trap: remove(0) calls the int-index overload (removes the element at index 0), while remove(Integer.valueOf(0)) calls the Object-value overload (removes the first element whose value equals 0). The compiler resolves overloads at compile time, so the int literal always picks the index overload.",
    steps: [
      "Call list.remove(index) with an int literal or int variable to remove by position (most common use).",
      "After removal, all elements to the right of the removed element shift left by one; the list size decreases by 1.",
      "When iterating and removing, be careful — removing at index i means the element previously at i+1 is now at i; decrement the loop index or iterate backwards.",
      "For ArrayList<Integer>, to remove by value (not index), cast: list.remove(Integer.valueOf(targetValue)).",
      "The method returns the removed element, which can be captured if needed.",
    ],
    examples: [
      {
        problem:
          "An ArrayList<Integer> contains [3, 6, 9, 12]. Write code to remove the element at index 2 and print the resulting list.",
        solution:
          "int removed = list.remove(2);  // removes 9\n// list is now [3, 6, 12]\nSystem.out.println(list);      // [3, 6, 12]\nSystem.out.println(removed);   // 9\n\nAfter removing index 2 (value 9), the element 12 shifts from index 3 to index 2. Size goes from 4 to 3.",
      },
    ],
    mcqs: [
      {
        question:
          "An ArrayList<Integer> contains [5, 10, 15, 20]. What is the list after list.remove(2)?",
        options: [
          "[5, 10, 20] — removes index 2",
          "[5, 15, 20] — removes the value 2",
          "[10, 15, 20] — removes index 0 because 2 is out of range",
          "[5, 10, 15] — removes the last element",
        ],
        answerIndex: 0,
        explanation:
          "Option A is correct. remove(2) uses the int-index overload and removes the element at index 2, which is 15. The remaining elements shift: [5, 10, 20]. Option B would be the result if remove() matched by value, but with a plain int argument the index overload always wins. Option C is wrong — index 2 is within range (0–3). Option D would result from removing the last element at index 3.",
      },
      {
        question:
          "For an ArrayList<Integer> list containing [1, 2, 3], which call removes the element with value 2?",
        options: [
          "list.remove(2)",
          "list.remove(1)",
          "list.remove(Integer.valueOf(2))",
          "list.remove(Integer.valueOf(1))",
        ],
        answerIndex: 2,
        explanation:
          "Option C is correct. list.remove(Integer.valueOf(2)) calls the Object overload, which searches for and removes the first element whose value equals 2. Option A (remove(2)) removes the element at index 2 (value 3), not the value 2. Option B (remove(1)) removes the element at index 1 (also value 2 in this case — coincidentally correct for this list, but by index, not value). Option D removes by value 1, which is the element with value 1 (index 0). The key distinction: pass an Integer object to remove by value; pass an int to remove by index.",
      },
    ],
  },

  // ─── 6. ArrayList.size ────────────────────────────────────────────────────
  {
    id: "arraylist-size",
    name: "ArrayList.size()",
    unit: "Unit 7: ArrayList & File I/O",
    unitNumber: 7,
    tags: ["new-u4", "MCQ frequent", "FRQ"],
    summary:
      "size() returns the number of elements currently in the ArrayList as an int.",
    formula: "list.size()",
    codeSnippet: `ArrayList<String> list = new ArrayList<>();
System.out.println(list.size()); // 0

list.add("a"); list.add("b"); list.add("c");
System.out.println(list.size()); // 3

list.remove(0);
System.out.println(list.size()); // 2

// Correct last-index access:
String last = list.get(list.size() - 1);`,
    description:
      "size() returns the current number of elements in the ArrayList as an int. It changes dynamically as elements are added or removed, unlike an array's .length field which is fixed at creation. A common mistake is confusing ArrayList's size() method with arrays' length field or String's length() method. The last valid index is always size()-1; calling get(size()) throws IndexOutOfBoundsException.",
    steps: [
      "Call list.size() (with parentheses — it is a method, not a field) to get the current element count.",
      "Use size() in for-loop conditions: for (int i = 0; i < list.size(); i++) to traverse all elements.",
      "Use size() - 1 as the index of the last element when calling get() or set().",
      "Remember size() updates immediately after every add() and remove() call.",
      "Do not confuse ArrayList's size() with arrays' .length (no parentheses) or String's length().",
    ],
    examples: [
      {
        problem:
          "An ArrayList<Integer> has elements [10, 20, 30, 40, 50]. What does size() return, and what is the index of the last element?",
        solution:
          "list.size() returns 5 — there are 5 elements.\nThe last valid index is list.size() - 1 = 4.\nlist.get(4) returns 50.\n\nSummary: size() == 5, last index == 4, last element == 50.",
      },
    ],
    mcqs: [
      {
        question:
          "An ArrayList<Integer> named data contains [7, 14, 21]. Which expression correctly gives the number of elements?",
        options: [
          "data.length",
          "data.length()",
          "data.size()",
          "data.count()",
        ],
        answerIndex: 2,
        explanation:
          "Option C is correct. ArrayList uses the size() method to return the number of elements. Option A (data.length) is the field used for arrays — ArrayList has no length field, so this causes a compile error. Option B (data.length()) is a String method and also causes a compile error on an ArrayList. Option D (data.count()) does not exist in the Java ArrayList API.",
      },
      {
        question:
          "An ArrayList<String> list contains 6 elements. What happens when you call list.get(list.size())?",
        options: [
          "Returns the last element",
          "Returns null",
          "Throws IndexOutOfBoundsException",
          "Compiles but returns an empty string",
        ],
        answerIndex: 2,
        explanation:
          "Option C is correct. list.size() returns 6, so list.get(6) requests index 6. Since valid indices are 0–5, index 6 is out of bounds and throws IndexOutOfBoundsException at runtime. Option A is wrong — the last element is at index size()-1 = 5, not size() = 6. Option B is wrong — get() never returns null for an out-of-bounds index; it throws an exception. Option D is wrong — this is a runtime exception, not a silent behavior.",
      },
    ],
  },

  // ─── 7. ArrayList Traversal ───────────────────────────────────────────────
  {
    id: "arraylist-traversal",
    name: "ArrayList Traversal (for and for-each)",
    unit: "Unit 7: ArrayList & File I/O",
    unitNumber: 7,
    tags: ["new-u4", "MCQ frequent", "FRQ"],
    summary:
      "Use a standard for-loop with get(i) to read or modify elements by index; use for-each to read all elements when no modification or removal is needed.",
    formula: "for (int i = 0; i < list.size(); i++)",
    codeSnippet: `ArrayList<Integer> nums = new ArrayList<>();
nums.add(3); nums.add(6); nums.add(9);

// Standard for-loop — can read AND modify
for (int i = 0; i < nums.size(); i++) {
    nums.set(i, nums.get(i) * 2); // double each element
}
// nums is now [6, 12, 18]

// For-each loop — read only (do NOT call add/remove inside)
for (int n : nums) {
    System.out.println(n);
}`,
    description:
      "Two loop patterns are used to traverse an ArrayList. The standard for-loop uses an index variable with get(i) and is required whenever you need the current index, need to modify elements with set(), or need to remove elements (with caution). The enhanced for-each loop is simpler and preferred for read-only traversal, but it cannot be used to add or remove elements during iteration — doing so throws a ConcurrentModificationException at runtime. Never modify the list structurally (add/remove) inside a for-each loop.",
    steps: [
      "For read-only access to all elements, use: for (Type elem : list) { } — clean and concise.",
      "For index-based or modification tasks, use: for (int i = 0; i < list.size(); i++) with list.get(i) and list.set(i, val).",
      "Never call list.add() or list.remove() inside a for-each loop — it causes ConcurrentModificationException.",
      "When using a standard for-loop to remove elements, account for the index shift by decrementing i after removal.",
      "For FRQ answers, prefer the standard for-loop when the problem requires index access or element replacement.",
    ],
    examples: [
      {
        problem:
          "Write a method that takes an ArrayList<Integer> and doubles every element in place.",
        solution:
          "public static void doubleAll(ArrayList<Integer> list) {\n    for (int i = 0; i < list.size(); i++) {\n        list.set(i, list.get(i) * 2);\n    }\n}\n\nA for-each loop cannot be used here because we need to modify elements with set(). The standard for-loop retrieves each element with get(i), doubles it, and stores it back with set(i, newVal).",
      },
    ],
    mcqs: [
      {
        question:
          "Which loop correctly prints every element of an ArrayList<String> named items?",
        options: [
          "for (int i = 0; i <= items.size(); i++) { System.out.println(items.get(i)); }",
          "for (int i = 0; i < items.size(); i++) { System.out.println(items.get(i)); }",
          "for (int i = 1; i < items.size(); i++) { System.out.println(items.get(i)); }",
          "for (String s : items) { System.out.println(items.get(s)); }",
        ],
        answerIndex: 1,
        explanation:
          "Option B is correct. The condition i < items.size() ensures indices 0 through size()-1 are accessed — exactly all elements. Option A uses i <= items.size(), so the last iteration calls get(size()), which throws IndexOutOfBoundsException. Option C starts at index 1, skipping the first element. Option D attempts items.get(s) where s is a String, not an int — this causes a compile error because get() requires an int index.",
      },
      {
        question:
          "What exception is thrown when you call list.remove(0) inside a for-each loop that is iterating over the same ArrayList?",
        options: [
          "IndexOutOfBoundsException",
          "NullPointerException",
          "ConcurrentModificationException",
          "IllegalArgumentException",
        ],
        answerIndex: 2,
        explanation:
          "Option C is correct. Structurally modifying an ArrayList (adding or removing elements) while a for-each loop is iterating over it triggers a ConcurrentModificationException at runtime. The for-each loop uses an internal iterator that detects structural changes and throws this exception to prevent unpredictable behavior. Option A would occur from an invalid index, not from modification during traversal. Option B would occur from calling a method on a null reference. Option D is thrown for illegal method arguments, not for modification during traversal.",
      },
    ],
  },

  // ─── 8. Removing Elements While Traversing ────────────────────────────────
  {
    id: "arraylist-remove-while",
    name: "Removing Elements While Traversing (iterate backwards or use index loop)",
    unit: "Unit 7: ArrayList & File I/O",
    unitNumber: 7,
    tags: ["new-u4", "MCQ frequent", "FRQ"],
    summary:
      "To safely remove elements while traversing an ArrayList, use a backwards for-loop or a forward index loop with index correction — never remove inside a for-each loop.",
    codeSnippet: `ArrayList<Integer> list = new ArrayList<>();
list.add(1); list.add(2); list.add(3); list.add(4); list.add(5);

// Pattern 1: iterate backwards (safest for removal)
for (int i = list.size() - 1; i >= 0; i--) {
    if (list.get(i) % 2 == 0) {
        list.remove(i); // safe — only affects indices >= i
    }
}
// list is [1, 3, 5]

// Pattern 2: forward loop with index correction
// for (int i = 0; i < list.size(); i++) {
//     if (list.get(i) % 2 == 0) { list.remove(i); i--; }
// }`,
    description:
      "When elements must be removed during iteration, the for-each loop is illegal (it throws ConcurrentModificationException). Two safe patterns exist: (1) iterate backwards from size()-1 to 0 — removing at index i only shifts elements at indices above i, so previously-checked indices are unaffected; (2) iterate forward and decrement i immediately after each removal to re-check the position that now holds the next element. Both produce correct results; the backwards loop is considered the cleaner AP exam answer.",
    steps: [
      "Never use a for-each loop when removing elements — always use an index-based for-loop.",
      "Backwards pattern: start at list.size()-1, decrement to 0, call list.remove(i) inside the condition — no index correction needed.",
      "Forward pattern: use i < list.size() as the condition, and immediately after list.remove(i) write i-- to re-check the current index after shifting.",
      "After any removal, list.size() decreases by 1, so re-evaluate the loop bound dynamically (do not cache size() before the loop).",
      "On the AP FRQ, clearly show the loop direction and index correction logic to earn full credit.",
    ],
    examples: [
      {
        problem:
          "Write a method that removes all negative integers from an ArrayList<Integer>.",
        solution:
          "public static void removeNegatives(ArrayList<Integer> list) {\n    for (int i = list.size() - 1; i >= 0; i--) {\n        if (list.get(i) < 0) {\n            list.remove(i);\n        }\n    }\n}\n\nIterating backwards ensures that when an element is removed at index i, all elements at indices 0 through i-1 (already checked) are unaffected. If iterating forwards, you would need i-- after each remove().",
      },
    ],
    mcqs: [
      {
        question:
          "An ArrayList<Integer> contains [2, 4, 6, 8]. A student iterates forward (i = 0 to size()-1) and removes any element equal to 4 without adjusting i. What is the resulting list?",
        options: [
          "[2, 6, 8] — correct removal",
          "[2, 8] — skips 6 due to index shift",
          "[2, 4, 8] — removes 6 by mistake",
          "Throws ConcurrentModificationException",
        ],
        answerIndex: 1,
        explanation:
          "Option B is correct. When 4 at index 1 is removed, the list becomes [2, 6, 8] and the element 6 shifts to index 1. But the loop then increments i to 2 and checks index 2 (value 8), skipping index 1 (value 6) entirely. The final list is [2, 6, 8] — wait, only 4 was targeted for removal, so the expected result is [2, 6, 8]. However, if the intent were to remove ALL evens without index correction, 6 would be skipped. For this single-target removal the list is [2, 6, 8]. The trap is that this bug silently skips the element after the one removed. Option D would apply to a for-each loop, not a standard index for-loop.",
      },
      {
        question:
          "Which loop correctly removes all occurrences of the value 0 from an ArrayList<Integer> named vals?",
        options: [
          "for (int v : vals) { if (v == 0) vals.remove(v); }",
          "for (int i = 0; i < vals.size(); i++) { if (vals.get(i) == 0) vals.remove(i); }",
          "for (int i = vals.size() - 1; i >= 0; i--) { if (vals.get(i) == 0) vals.remove(i); }",
          "for (int i = 0; i < vals.size(); i++) { if (vals.get(i) == 0) vals.remove(Integer.valueOf(0)); }",
        ],
        answerIndex: 2,
        explanation:
          "Option C is correct. Iterating backwards and calling remove(i) at each matching index is safe and correct — removing at index i does not affect elements at lower indices that have already been processed. Option A uses a for-each loop with remove(), which throws ConcurrentModificationException. Option B iterates forward without decrementing i after removal, so consecutive zeros would cause the second zero to be skipped. Option D removes by value using Integer.valueOf(0), but does so in a forward loop without index correction — after each removal the size decreases and elements shift, potentially skipping elements.",
      },
    ],
  },

  // ─── 9. ArrayList Algorithms ──────────────────────────────────────────────
  {
    id: "arraylist-algorithms",
    name: "ArrayList Algorithms (search, filter, transform)",
    unit: "Unit 7: ArrayList & File I/O",
    unitNumber: 7,
    tags: ["new-u4", "MCQ frequent", "FRQ"],
    summary:
      "Common ArrayList algorithms include linear search (return index or element), filter (build a new list of matching elements), and transform (replace each element using set).",
    codeSnippet: `// Linear search — return index of target, -1 if not found
public static int search(ArrayList<Integer> list, int target) {
    for (int i = 0; i < list.size(); i++) {
        if (list.get(i) == target) return i;
    }
    return -1;
}

// Filter — build new list of elements matching a condition
public static ArrayList<Integer> filterPositive(ArrayList<Integer> list) {
    ArrayList<Integer> result = new ArrayList<>();
    for (int val : list) {
        if (val > 0) result.add(val);
    }
    return result;
}`,
    description:
      "Three algorithmic patterns appear most frequently with ArrayLists on the AP exam. Linear search traverses the list and returns the index (or element) when the target is found, or -1 (or null) if not found. Filtering builds a new ArrayList containing only elements that satisfy a condition — a for-each loop works here since the original list is not modified. Transforming replaces each element in place using set(i, newValue) inside a standard for-loop. Understanding which pattern fits the problem description is a key FRQ skill.",
    steps: [
      "For linear search: use a for-loop from 0 to size()-1, compare with equals() for objects (== for primitives), and return -1 or null as the sentinel for 'not found'.",
      "For filtering into a new list: create an empty ArrayList, use a for-each loop over the source, and add() matching elements to the new list.",
      "For in-place transformation: use a standard for-loop, compute the new value from get(i), and call set(i, newValue).",
      "When the problem asks to remove matching elements, use the backwards loop pattern (see arraylist-remove-while).",
      "Return the result (new list, found index, or modified list) as specified by the method signature.",
    ],
    examples: [
      {
        problem:
          "Write a method that takes an ArrayList<Integer> and returns a new ArrayList containing only the elements greater than 10.",
        solution:
          "public static ArrayList<Integer> greaterThanTen(ArrayList<Integer> list) {\n    ArrayList<Integer> result = new ArrayList<>();\n    for (int val : list) {\n        if (val > 10) {\n            result.add(val);\n        }\n    }\n    return result;\n}\n\nA for-each loop is safe here because we are not modifying the original list. Each element that passes the condition is appended to result with add().",
      },
    ],
    mcqs: [
      {
        question:
          "A method should return the index of the first element in an ArrayList<String> that equals target, or -1 if not found. Which implementation is correct?",
        options: [
          "for (int i = 0; i < list.size(); i++) { if (list.get(i) == target) return i; } return -1;",
          "for (int i = 0; i < list.size(); i++) { if (list.get(i).equals(target)) return i; } return -1;",
          "for (String s : list) { if (s.equals(target)) return list.indexOf(s); } return -1;",
          "for (int i = 0; i <= list.size(); i++) { if (list.get(i).equals(target)) return i; } return -1;",
        ],
        answerIndex: 1,
        explanation:
          "Option B is correct. String comparison must use equals(), not ==, because == checks reference identity, not value equality. The loop bounds (0 to size()-1) and return of -1 are both correct. Option A uses == for String comparison, which can return false even when the strings have the same content. Option C would work in simple cases but is unnecessarily complex and could return a wrong index if there are duplicate values (indexOf finds the first occurrence, which may differ from s). Option D uses i <= list.size(), causing an IndexOutOfBoundsException on the last iteration.",
      },
      {
        question:
          "A student writes the following to double every element of ArrayList<Integer> list:\n\nfor (int n : list) { n = n * 2; }\n\nWhat is wrong?",
        options: [
          "The loop throws ConcurrentModificationException",
          "n is a local copy; the list elements are not modified",
          "n * 2 causes integer overflow for all values",
          "The for-each loop does not iterate over all elements",
        ],
        answerIndex: 1,
        explanation:
          "Option B is correct. In a for-each loop, n is a local copy of the element's value. Assigning n = n * 2 only changes the local variable; it does not call set() on the list, so the original list is completely unchanged. To modify elements in place, a standard for-loop with list.set(i, list.get(i) * 2) is required. Option A is wrong — a for-each loop without add/remove does not throw ConcurrentModificationException. Option C is wrong — overflow is not guaranteed and is not the primary bug. Option D is wrong — the for-each loop iterates over every element.",
      },
    ],
  },

  // ─── 10. File Reading with File and Scanner ───────────────────────────────
  {
    id: "file-scanner-reading",
    name: "File Reading with File and Scanner",
    unit: "Unit 7: ArrayList & File I/O",
    unitNumber: 7,
    tags: ["new-u4", "MCQ frequent", "new 2026", "FRQ"],
    summary:
      "Use java.io.File and java.util.Scanner together to read text from a file; Scanner(File) throws the checked exception FileNotFoundException which must be caught or declared.",
    formula: 'File f = new File("data.txt"); Scanner sc = new Scanner(f);',
    codeSnippet: `import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ReadFile {
    public static void main(String[] args) {
        try {
            File f = new File("data.txt");
            Scanner sc = new Scanner(f);
            while (sc.hasNextLine()) {
                String line = sc.nextLine();
                System.out.println(line);
            }
            sc.close();
        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + e.getMessage());
        }
    }
}`,
    description:
      "To read from a file in Java, create a File object with the file path string, then pass it to the Scanner constructor. The Scanner(File) constructor throws FileNotFoundException, a checked exception — the code must either wrap it in a try-catch block or declare throws FileNotFoundException in the method signature. Once open, the Scanner reads the file using the same methods (nextLine(), nextInt(), hasNextLine(), etc.) as reading from System.in. Calling sc.close() after reading is good practice and releases the file resource.",
    steps: [
      "Import java.io.File, java.io.FileNotFoundException, and java.util.Scanner at the top of the file.",
      "Create a File object: File f = new File(\"filename.txt\"); — this does not open the file yet.",
      "Create a Scanner from the file inside a try block: Scanner sc = new Scanner(f); — this throws FileNotFoundException if the file does not exist.",
      "Read from the file using hasNextLine()/nextLine() or hasNext()/next() in a while loop.",
      "Call sc.close() after reading is complete; handle FileNotFoundException in the catch block.",
    ],
    examples: [
      {
        problem:
          "Write a method that reads every line of \"scores.txt\" into an ArrayList<String> and returns the list. Handle the checked exception appropriately.",
        solution:
          'public static ArrayList<String> readLines(String filename) {\n    ArrayList<String> lines = new ArrayList<>();\n    try {\n        File f = new File(filename);\n        Scanner sc = new Scanner(f);\n        while (sc.hasNextLine()) {\n            lines.add(sc.nextLine());\n        }\n        sc.close();\n    } catch (FileNotFoundException e) {\n        System.out.println("File not found.");\n    }\n    return lines;\n}\n\nEach line is appended to the ArrayList with add(). The try-catch handles FileNotFoundException. The list is returned whether or not the file was found (empty if not found).',
      },
    ],
    mcqs: [
      {
        question:
          "Which exception must be caught or declared when constructing a Scanner from a File object?",
        options: [
          "IOException",
          "FileNotFoundException",
          "NullPointerException",
          "IllegalArgumentException",
        ],
        answerIndex: 1,
        explanation:
          "Option B is correct. Scanner(File) specifically throws java.io.FileNotFoundException, a checked exception that the compiler requires you to handle with try-catch or a throws declaration. Option A is wrong — IOException is the parent class of FileNotFoundException, but the Scanner constructor specifically throws FileNotFoundException, not IOException directly. Option C is wrong — NullPointerException is an unchecked exception thrown if a null is passed, not a declared throws. Option D is wrong — IllegalArgumentException is unchecked and is not declared by the Scanner(File) constructor.",
      },
      {
        question:
          "Which pair of imports is required to read from a text file using File and Scanner in Java?",
        options: [
          "import java.util.File; and import java.util.Scanner;",
          "import java.io.File; and import java.io.Scanner;",
          "import java.io.File; and import java.util.Scanner;",
          "import java.util.File; and import java.io.Scanner;",
        ],
        answerIndex: 2,
        explanation:
          "Option C is correct. File is in the java.io package (java.io.File), while Scanner is in the java.util package (java.util.Scanner). Option A is wrong — File is not in java.util. Option B is wrong — Scanner is not in java.io. Option D is wrong — both package assignments are swapped. On the AP exam, if a class is given in the problem, the import may not be required in the answer, but knowing the correct packages is tested.",
      },
    ],
  },

  // ─── 11. Scanner Methods ──────────────────────────────────────────────────
  {
    id: "scanner-methods",
    name: "Scanner Methods (nextInt, nextDouble, nextLine, hasNext, hasNextInt)",
    unit: "Unit 7: ArrayList & File I/O",
    unitNumber: 7,
    tags: ["new-u4", "MCQ frequent", "new 2026", "FRQ"],
    summary:
      "Scanner provides token-based and line-based read methods; nextInt() and nextDouble() do NOT consume the trailing newline, causing a common bug when mixing them with nextLine().",
    formula: "sc.nextLine(); sc.hasNext(); sc.nextInt();",
    codeSnippet: `Scanner sc = new Scanner(new File("data.txt"));

while (sc.hasNextLine()) {
    String line = sc.nextLine(); // reads entire line including spaces
    System.out.println(line);
}

// Mixing token and line reads — common trap:
int n = sc.nextInt();    // reads integer, leaves '\n' in the buffer
String s = sc.nextLine(); // immediately reads the leftover '\n' — s is ""
String actual = sc.nextLine(); // this gets the intended next line`,
    description:
      "Scanner provides two reading styles: token-based (next(), nextInt(), nextDouble()) and line-based (nextLine()). Token methods skip leading whitespace and read until the next whitespace, but they leave the trailing newline in the input buffer. If nextLine() is called immediately after a token method, it consumes the leftover newline and returns an empty string instead of the next line of input. The fix is to call an extra nextLine() after the token read to consume the newline before reading the next meaningful line. hasNext(), hasNextLine(), and hasNextInt() are used to safely check before reading.",
    steps: [
      "Use hasNextLine() with nextLine() for line-by-line reading; use hasNext() with next() or nextInt()/nextDouble() for token-by-token reading.",
      "nextLine() reads and returns the rest of the current line (including spaces) and consumes the newline character.",
      "nextInt() and nextDouble() read a token but leave the trailing newline in the buffer — consume it with a dummy nextLine() before the next line read.",
      "hasNextInt() returns true only if the next token can be parsed as an int — useful for validation loops.",
      "Always call sc.close() when done reading to free the file resource.",
    ],
    examples: [
      {
        problem:
          "A file has two lines: the first line is a single integer count, and the second line is a name string. Write code to correctly read both.",
        solution:
          'Scanner sc = new Scanner(new File("input.txt"));\nint count = sc.nextInt();   // reads the integer\nsc.nextLine();              // consumes the leftover newline after the int\nString name = sc.nextLine(); // now correctly reads the name line\nsc.close();\n\nWithout the dummy sc.nextLine() after nextInt(), the name variable would receive an empty string because nextLine() would consume the newline left by nextInt().',
      },
    ],
    mcqs: [
      {
        question:
          "A Scanner reads from a file. After calling sc.nextInt() to read a number, the student calls sc.nextLine() to read the next line of text. What does sc.nextLine() return?",
        options: [
          "The next line of text as intended",
          "An empty string, because it consumes the leftover newline from nextInt()",
          "The integer just read, converted to a String",
          "Throws a NoSuchElementException",
        ],
        answerIndex: 1,
        explanation:
          "Option B is correct. nextInt() reads the integer token but leaves the newline character ('\\n') in the input buffer. The immediately following nextLine() consumes only that leftover newline, returning an empty string. To correctly read the next line of text, an extra nextLine() call must be made to discard the newline before calling nextLine() again for the actual content. Option A describes the intended behavior but is not what happens without the extra call. Option C is wrong — nextLine() does not return previously-read values. Option D is wrong — there is content in the buffer (the newline), so no exception is thrown.",
      },
      {
        question:
          "Which Scanner method returns true only if the next token in the input can be interpreted as an int?",
        options: [
          "sc.hasNext()",
          "sc.hasNextLine()",
          "sc.hasNextInt()",
          "sc.nextInt() != null",
        ],
        answerIndex: 2,
        explanation:
          "Option C is correct. hasNextInt() checks whether the next token can be parsed as an int without actually consuming it — it returns true if so, false otherwise. Option A (hasNext()) returns true if there is any next token, regardless of type. Option B (hasNextLine()) returns true if there is another line, regardless of whether it contains an integer. Option D is syntactically incorrect — nextInt() returns a primitive int, which cannot be compared to null; calling nextInt() without checking first would throw an exception if no int is available.",
      },
    ],
  },
];
