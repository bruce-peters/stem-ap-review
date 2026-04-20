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

export const usingObjectsTopics: Topic[] = [
  {
    id: "object-instantiation",
    name: "Object Instantiation with new",
    unit: "Unit 2: Using Objects",
    unitNumber: 2,
    tags: ["new-u1", "MCQ frequent", "FRQ"],
    summary:
      "The new keyword allocates memory for an object and calls its constructor to initialize it.",
    formula: "ClassName obj = new ClassName(args);",
    codeSnippet: `// Declare a variable of type Scanner, then instantiate it
import java.util.Scanner;

public class Demo {
    public static void main(String[] args) {
        // new calls the constructor; args are passed inside ()
        Scanner input = new Scanner(System.in);

        // A second object — each call to new creates a separate instance
        String greeting = new String("Hello");

        System.out.println(greeting);
        input.close();
    }
}`,
    description:
      "Object instantiation creates a new instance of a class in heap memory. The new keyword triggers the constructor, which sets up the object's initial state using any arguments provided. The resulting reference (memory address) is stored in the declared variable.",
    steps: [
      "Write the type on the left side of the assignment: ClassName variableName",
      "Write = new ClassName(args) on the right; args must match a constructor signature",
      "The JVM allocates heap memory, calls the constructor, and returns a reference",
      "The variable now holds a reference to the newly created object — not the object itself",
      "Use the variable name with dot notation to call methods on the object",
    ],
    examples: [
      {
        problem:
          "Instantiate a Random object called rand that can generate random numbers, then print a random integer.",
        solution:
          "import java.util.Random;\nRandom rand = new Random();\nSystem.out.println(rand.nextInt(100)); // prints a random int from 0 to 99",
      },
    ],
    mcqs: [
      {
        question:
          "Which of the following correctly instantiates a String object named word containing \"Java\"?",
        options: [
          'String word = new String("Java");',
          'new String word = "Java";',
          'String word = String("Java");',
          'String("Java") word = new;',
        ],
        answerIndex: 0,
        explanation:
          'Option A is correct: the type comes first, then the variable name, then = new ClassName(args). Option B puts new in the wrong position. Option C omits the new keyword entirely (calling String as a method). Option D reverses the entire syntax — constructor calls always follow the form new ClassName(args).',
      },
      {
        question:
          "After executing `Scanner sc = new Scanner(System.in);`, what does the variable sc hold?",
        options: [
          "A copy of the Scanner class definition",
          "The primitive int value 0",
          "A reference (memory address) pointing to a Scanner object on the heap",
          "The text that was typed into System.in",
        ],
        answerIndex: 2,
        explanation:
          "Option C is correct: in Java, object variables store references (pointers) to heap memory, not the object itself. Option A is wrong — sc is not a class definition. Option B is wrong — object variables are never primitives. Option D is wrong — no input has been read yet; instantiation only creates the Scanner, it does not read data.",
      },
    ],
  },
  {
    id: "calling-instance-methods",
    name: "Calling Instance Methods (dot notation)",
    unit: "Unit 2: Using Objects",
    unitNumber: 2,
    tags: ["new-u1", "MCQ frequent", "FRQ"],
    summary:
      "Instance methods are invoked on a specific object using dot notation: obj.methodName(args).",
    formula: "obj.methodName(args)",
    codeSnippet: `public class MethodCallDemo {
    public static void main(String[] args) {
        String s = "Hello, World!";

        // Call instance methods on the String object s
        int len = s.length();           // 13
        String upper = s.toUpperCase(); // "HELLO, WORLD!"
        String sub = s.substring(7);    // "World!"

        System.out.println(len);
        System.out.println(upper);
        System.out.println(sub);
    }
}`,
    description:
      "Every object in Java exposes behavior through instance methods. You call them by writing the object reference, a dot, the method name, and parentheses containing any required arguments. The method executes in the context of that specific object, operating on its fields.",
    steps: [
      "Ensure you have a valid (non-null) object reference stored in a variable",
      "Write the variable name followed by a dot (.)",
      "Write the method name followed by parentheses",
      "Provide any required arguments inside the parentheses, separated by commas",
      "Assign or use the return value if the method returns something; void methods have no return value to store",
    ],
    examples: [
      {
        problem:
          'Given String name = "Alice"; write one statement that stores the number of characters in name into an int called len.',
        solution: "int len = name.length(); // len == 5",
      },
    ],
    mcqs: [
      {
        question:
          'What is the output of the following?\nString s = "hello";\nSystem.out.println(s.toUpperCase());\nSystem.out.println(s);',
        options: ["HELLO\nhello", "HELLO\nHELLO", "hello\nhello", "hello\nHELLO"],
        answerIndex: 0,
        explanation:
          'Option A is correct. Strings are immutable — toUpperCase() returns a NEW String "HELLO" but does not change s. The second print still prints the original "hello". Options B and D are wrong because s is unchanged. Option C is wrong because the first line prints the uppercase version.',
      },
      {
        question:
          "Which of the following is a valid instance method call assuming obj is a non-null object of class Foo with a method int getVal()?",
        options: [
          "int v = obj.getVal();",
          "int v = getVal(obj);",
          "int v = Foo.getVal();",
          "int v = new obj.getVal();",
        ],
        answerIndex: 0,
        explanation:
          "Option A is correct: dot notation on the object reference, followed by the method name and parentheses. Option B passes obj as an argument — that is function-call syntax, not dot notation. Option C uses the class name instead of an object reference; that syntax is for static methods. Option D incorrectly adds new, which is only used for constructors.",
      },
    ],
  },
  {
    id: "string-class",
    name: "String Class and Immutability",
    unit: "Unit 2: Using Objects",
    unitNumber: 2,
    tags: ["new-u1", "MCQ frequent", "FRQ"],
    summary:
      "Strings in Java are objects whose content can never be changed after creation — every 'modification' creates a new String.",
    formula: 'String s = "hello";',
    codeSnippet: `public class ImmutableDemo {
    public static void main(String[] args) {
        String s = "hello";

        // toUpperCase() does NOT change s; it returns a brand-new String
        String t = s.toUpperCase();

        System.out.println(s); // still "hello"
        System.out.println(t); // "HELLO"

        // Reassigning s just makes s point to a new object
        s = s + " world";
        System.out.println(s); // "hello world" — new String object
    }
}`,
    description:
      "The String class is part of java.lang and is automatically imported. Once a String object is created, its character sequence is fixed — no method can alter the characters stored inside it. Methods like toUpperCase(), trim(), and concat() all return brand-new String objects. Reassigning a String variable just points the variable at a different object.",
    steps: [
      "Declare a String variable and assign a string literal or new String()",
      "Recognize that string literals in double quotes are also objects managed by the string pool",
      "Call methods knowing they return new Strings — save the result if you need it",
      "Do not expect any method to modify the original String in place",
      "Use == only to compare references; use .equals() to compare content",
    ],
    examples: [
      {
        problem:
          'String word = "Java"; word.toUpperCase(); System.out.println(word); — what prints?',
        solution:
          '"Java" prints. toUpperCase() returns a new String but the result was discarded. word still references the original "Java" object.',
      },
    ],
    mcqs: [
      {
        question:
          'What is printed?\nString a = "cat";\na.concat(" dog");\nSystem.out.println(a);',
        options: ["cat dog", "cat", "dog", "A NullPointerException is thrown"],
        answerIndex: 1,
        explanation:
          'Option B is correct. Strings are immutable — concat() returns a new String but the return value was not saved. a still points to the original "cat". Option A is the classic immutability trap: students assume the method modifies a in place. Option C is wrong — the original value is unaffected. Option D is wrong — a is not null.',
      },
      {
        question:
          "Which statement about String objects in Java is true?",
        options: [
          "You can change individual characters using an index assignment like s[0] = 'H'",
          "String methods such as toUpperCase() modify the original String",
          "Once created, the sequence of characters in a String cannot be changed",
          "Strings are primitive types in Java, similar to int and double",
        ],
        answerIndex: 2,
        explanation:
          "Option C is correct: Strings are immutable objects. Option A is wrong — Java Strings do not support bracket index assignment (that is C/C++ syntax). Option B is wrong — all String methods return new objects. Option D is wrong — String is a class, not a primitive, even though it has convenient literal syntax.",
      },
    ],
  },
  {
    id: "string-length",
    name: "String.length()",
    unit: "Unit 2: Using Objects",
    unitNumber: 2,
    tags: ["new-u1", "MCQ frequent"],
    summary:
      "String.length() returns the number of characters in a String as an int, with valid indices running from 0 to length()-1.",
    formula: "s.length()",
    codeSnippet: `public class LengthDemo {
    public static void main(String[] args) {
        String s = "Hello";
        int len = s.length(); // 5

        // Valid indices: 0, 1, 2, 3, 4
        System.out.println(len);              // 5
        System.out.println(s.charAt(0));      // 'H'
        System.out.println(s.charAt(len - 1)); // 'o' — last character

        // Common loop pattern using length()
        for (int i = 0; i < s.length(); i++) {
            System.out.print(s.charAt(i) + " ");
        }
    }
}`,
    description:
      "length() is a no-argument instance method on String that returns the count of char values in the string. Because indices are zero-based, the last valid index is always length()-1. Using length() (with parentheses) is a frequent AP question trap — arrays use .length without parentheses, but String.length() always has them.",
    steps: [
      "Call s.length() on a String variable; it takes no arguments",
      "Store the result as int if you will use it multiple times",
      "Remember valid character indices are 0 through length()-1",
      "Use length()-1 to access the last character with charAt()",
      "In for-loop conditions use i < s.length() (not i <= s.length()) to avoid StringIndexOutOfBoundsException",
    ],
    examples: [
      {
        problem:
          'String city = "Boston"; write a statement that prints the last character of city without using a numeric literal.',
        solution: "System.out.println(city.charAt(city.length() - 1)); // prints 'n'",
      },
    ],
    mcqs: [
      {
        question: 'What is the value of n after: String s = "AP CS A"; int n = s.length();',
        options: ["6", "7", "8", "A StringIndexOutOfBoundsException is thrown"],
        answerIndex: 1,
        explanation:
          '"AP CS A" contains 7 characters: A, P, (space), C, S, (space), A. Option B (7) is correct. Option A (6) is off by one, likely forgetting to count one of the spaces. Option C (8) overcounts. Option D is wrong — length() never throws an exception on a valid String.',
      },
      {
        question:
          'Which correctly accesses the last character of String s = "hello"?',
        options: [
          "s.charAt(s.length())",
          "s.charAt(s.length() - 1)",
          "s.charAt(4.0)",
          "s[s.length - 1]",
        ],
        answerIndex: 1,
        explanation:
          "Option B is correct: the last index is always length()-1 (here index 4). Option A uses s.length() which equals 5 — that index does not exist and throws StringIndexOutOfBoundsException. Option C uses a double (4.0) but charAt() requires an int — this is a compile error. Option D uses array bracket notation — Strings do not support [] indexing in Java.",
      },
    ],
  },
  {
    id: "string-substring",
    name: "String.substring(i) and substring(i, j)",
    unit: "Unit 2: Using Objects",
    unitNumber: 2,
    tags: ["new-u1", "MCQ frequent", "FRQ"],
    summary:
      "substring(i) returns all characters from index i to the end; substring(i, j) returns characters from index i up to but NOT including index j.",
    formula: "s.substring(1, 4)",
    codeSnippet: `public class SubstringDemo {
    public static void main(String[] args) {
        String s = "Programming";
        //          0123456789...

        // One-arg form: from index 3 to end
        System.out.println(s.substring(3));    // "gramming"

        // Two-arg form: from index 0 up to (not including) index 4
        System.out.println(s.substring(0, 4)); // "Prog"

        // Length of extracted substring: j - i
        String part = s.substring(2, 6);       // "ogra", length = 4
        System.out.println(part.length());     // 4
    }
}`,
    description:
      "substring(int beginIndex) extracts from beginIndex through the end of the string. substring(int beginIndex, int endIndex) extracts from beginIndex up to, but not including, endIndex — a rule that trips up many AP students. The length of the result from substring(i, j) is always j - i.",
    steps: [
      "Identify the start index i (the first character you want to include)",
      "For the two-argument form, identify j as one past the last character you want",
      "Remember: the character at index j is NOT included in the result",
      "Calculate the length of the result with j - i to double-check",
      "Calling substring(0, s.length()) returns a copy of the entire string",
    ],
    examples: [
      {
        problem:
          'String s = "computer"; what does s.substring(3, 6) return?',
        solution:
          '"put". Index 3 is \'p\', index 4 is \'u\', index 5 is \'t\'. Index 6 is the stop (not included). Length = 6 - 3 = 3.',
      },
    ],
    mcqs: [
      {
        question: 'What is the value of t after: String s = "abcdefg"; String t = s.substring(2, 5);',
        options: ['"bcde"', '"cde"', '"cdef"', '"bcd"'],
        answerIndex: 1,
        explanation:
          "Option B is correct. Index 2 is 'c', index 3 is 'd', index 4 is 'e'. The end index 5 is NOT included, so the result is \"cde\". Option A starts from index 1 instead of 2. Option C goes one character too far, incorrectly including the character at index 5. Option D starts from index 1 and stops at 4.",
      },
      {
        question:
          'String s = "Hello"; what does s.substring(1, 1) return?',
        options: ['"H"', '"e"', '""  (empty string)', "A StringIndexOutOfBoundsException"],
        answerIndex: 2,
        explanation:
          "Option C is correct. When beginIndex == endIndex, there are zero characters to include, so the result is an empty string \"\". Option A would be s.substring(0, 1). Option B would be s.substring(1, 2). Option D is wrong — equal indices are valid and just return an empty string.",
      },
    ],
  },
  {
    id: "string-indexof",
    name: "String.indexOf(str)",
    unit: "Unit 2: Using Objects",
    unitNumber: 2,
    tags: ["new-u1", "MCQ frequent"],
    summary:
      "indexOf(str) returns the index of the first occurrence of the given substring, or -1 if not found.",
    formula: 's.indexOf("lo")',
    codeSnippet: `public class IndexOfDemo {
    public static void main(String[] args) {
        String s = "Hello, World!";

        System.out.println(s.indexOf("o"));       // 4  (first 'o')
        System.out.println(s.indexOf("World"));   // 7
        System.out.println(s.indexOf("xyz"));     // -1 (not found)

        // Common pattern: check for presence before using the index
        int pos = s.indexOf(",");
        if (pos != -1) {
            String before = s.substring(0, pos); // "Hello"
            System.out.println(before);
        }
    }
}`,
    description:
      "indexOf(String str) searches left-to-right and returns the starting index of the first occurrence of str inside the calling String. If str appears more than once, only the first position is returned. A return value of -1 is the standard sentinel indicating the substring was not found.",
    steps: [
      "Call indexOf() with the target substring or character (as a String) as the argument",
      "Store the return value in an int variable",
      "Check if the return value is -1 before using it as an index — using -1 as an index causes an exception",
      "Combine with substring() to extract the part before or after the found position",
      "Remember indexOf is case-sensitive: indexOf(\"A\") and indexOf(\"a\") are different searches",
    ],
    examples: [
      {
        problem:
          'String email = "user@example.com"; write code to extract just the domain (everything after the @).',
        solution:
          'int at = email.indexOf("@");\nString domain = email.substring(at + 1); // "example.com"',
      },
    ],
    mcqs: [
      {
        question: 'What is the value of n after: String s = "banana"; int n = s.indexOf("an");',
        options: ["1", "3", "0", "-1"],
        answerIndex: 0,
        explanation:
          'Option A is correct. The first occurrence of "an" in "banana" starts at index 1 (b-A-N-ana). indexOf returns the first match only, so n = 1. Option B (3) is where the second "an" starts, but indexOf does not return that. Option C (0) is wrong — index 0 is \'b\'. Option D (-1) would mean not found, but "an" clearly exists.',
      },
      {
        question:
          'What does s.indexOf("cat") return when String s = "concatenate"?',
        options: ["0", "3", "6", "-1"],
        answerIndex: 0,
        explanation:
          '"cat" first appears starting at index 0 of "concatenate" (c-a-t-enate...). Option A (0) is correct. Option B (3) would be a second occurrence region, but indexOf stops at the first. Option C (6) is wrong. Option D (-1) would mean not found — but "cat" is clearly at the start.',
      },
    ],
  },
  {
    id: "string-equals",
    name: "String.equals() and equalsIgnoreCase()",
    unit: "Unit 2: Using Objects",
    unitNumber: 2,
    tags: ["new-u1", "MCQ frequent", "FRQ"],
    summary:
      "Use equals() to compare String contents; == compares references (memory addresses) and will give wrong results for Strings.",
    formula: "s.equals(t); s.equalsIgnoreCase(t)",
    codeSnippet: `public class EqualsDemo {
    public static void main(String[] args) {
        String a = new String("hello");
        String b = new String("hello");

        // == compares references — a and b are different objects
        System.out.println(a == b);              // false

        // .equals() compares character content
        System.out.println(a.equals(b));         // true

        // Case-insensitive comparison
        String c = "HELLO";
        System.out.println(a.equalsIgnoreCase(c)); // true
        System.out.println(a.equals(c));            // false
    }
}`,
    description:
      "The == operator on objects checks whether two variables point to the exact same object in memory, not whether they contain the same text. The equals() method is overridden in String to compare the actual character sequence. equalsIgnoreCase() does the same comparison but treats uppercase and lowercase letters as equal. Using == to compare Strings is one of the most common AP exam traps.",
    steps: [
      "Always use .equals() when you want to know if two Strings contain the same text",
      "Use equalsIgnoreCase() when letter case should not matter",
      "Reserve == for primitives (int, double, boolean) — never use it on Strings or other objects for content comparison",
      "To guard against NullPointerException, call equals on a known non-null string: \"literal\".equals(variable)",
      "Remember equals() returns boolean true or false, suitable for if statements",
    ],
    examples: [
      {
        problem:
          'String input = "Yes"; write an if statement that prints "Confirmed" whether the user typed "yes", "YES", or "Yes".',
        solution: 'if (input.equalsIgnoreCase("yes")) { System.out.println("Confirmed"); }',
      },
    ],
    mcqs: [
      {
        question:
          'What is printed?\nString x = new String("test");\nString y = new String("test");\nSystem.out.println(x == y);\nSystem.out.println(x.equals(y));',
        options: [
          "true\ntrue",
          "false\ntrue",
          "true\nfalse",
          "false\nfalse",
        ],
        answerIndex: 1,
        explanation:
          "Option B is correct. x and y are created with new, so they are two distinct objects in heap memory — == returns false because the references differ. equals() compares character content and both contain \"test\", so it returns true. Option A is wrong because new always creates a new object. Option C and D are wrong because equals() correctly finds equal content.",
      },
      {
        question:
          "Which of the following correctly tests whether String s contains the text \"done\"?",
        options: [
          'if (s == "done")',
          'if (s.equals("done"))',
          'if (s.equalsTo("done"))',
          'if (equals(s, "done"))',
        ],
        answerIndex: 1,
        explanation:
          'Option B is correct: call .equals() on one String, pass the other as argument. Option A uses == which compares references — this may return false even when the content is "done". Option C is wrong — there is no equalsTo() method in the String class. Option D is wrong — equals() is an instance method called with dot notation on an object, not a standalone function.',
      },
    ],
  },
  {
    id: "string-compareto",
    name: "String.compareTo()",
    unit: "Unit 2: Using Objects",
    unitNumber: 2,
    tags: ["new-u1", "MCQ frequent"],
    summary:
      "compareTo() returns a negative int if the calling string comes first alphabetically, zero if equal, and a positive int if it comes after.",
    formula: "s.compareTo(t) < 0 means s comes first",
    codeSnippet: `public class CompareToDemo {
    public static void main(String[] args) {
        String s = "apple";
        String t = "banana";

        int result = s.compareTo(t);

        if (result < 0) {
            System.out.println(s + " comes before " + t); // this prints
        } else if (result > 0) {
            System.out.println(s + " comes after " + t);
        } else {
            System.out.println(s + " equals " + t);
        }
    }
}`,
    description:
      "compareTo() performs lexicographic (dictionary-style) comparison based on Unicode values. If s.compareTo(t) is negative, s comes before t; if positive, s comes after t; if zero, both strings are identical. The sign of the result matters, but the exact magnitude is not important for AP purposes.",
    steps: [
      "Call compareTo() on one String and pass the other as the argument",
      "Store the int result and test its sign: negative, zero, or positive",
      "Interpret negative as 'calling string comes first', positive as 'calling string comes after'",
      "Remember compareTo() is case-sensitive: uppercase letters (A–Z, Unicode 65–90) come before lowercase (a–z, Unicode 97–122)",
      "Use compareToIgnoreCase() when you want case-insensitive alphabetical ordering",
    ],
    examples: [
      {
        problem:
          'What is the sign of "mango".compareTo("orange")?',
        solution:
          'Negative. "mango" starts with \'m\' (Unicode 109) and "orange" starts with \'o\' (Unicode 111). 109 - 111 = -2, so the result is negative, meaning "mango" comes before "orange" alphabetically.',
      },
    ],
    mcqs: [
      {
        question:
          'String a = "dog"; String b = "dog"; what is the value of a.compareTo(b)?',
        options: ["-1", "0", "1", "true"],
        answerIndex: 1,
        explanation:
          "Option B (0) is correct. When both strings are identical, compareTo() returns 0. Option A (-1) would mean a comes before b, which is not the case here. Option C (1) would mean a comes after b. Option D (true) is wrong — compareTo() returns an int, not a boolean; use equals() if you want a boolean equality check.",
      },
      {
        question:
          'Which expression correctly checks whether String s comes before String t alphabetically?',
        options: [
          "s < t",
          "s.compareTo(t) < 0",
          "s.equals(t) < 0",
          "compareTo(s, t) < 0",
        ],
        answerIndex: 1,
        explanation:
          "Option B is correct. compareTo() returns a negative int when the calling string precedes the argument string. Option A uses the < operator on Strings — this is a compile error since < only works on primitives. Option C calls equals() which returns boolean, not int; the < 0 comparison would be a compile error. Option D treats compareTo as a standalone function — it is an instance method.",
      },
    ],
  },
  {
    id: "string-concatenation",
    name: "String Concatenation and Mixed-Type concat",
    unit: "Unit 2: Using Objects",
    unitNumber: 2,
    tags: ["new-u1", "MCQ frequent"],
    summary:
      "The + operator joins Strings together; when a non-String value is involved, Java converts it to String automatically — but left-to-right evaluation order matters.",
    formula: '"Score: " + score',
    codeSnippet: `public class ConcatDemo {
    public static void main(String[] args) {
        String name = "Alice";
        int score = 95;

        // String + int → String (int is converted automatically)
        System.out.println("Score: " + score);   // "Score: 95"

        // Watch out: left-to-right evaluation
        System.out.println(1 + 2 + " items");    // "3 items"  (1+2 first)
        System.out.println("items: " + 1 + 2);   // "items: 12" (concat, not add)

        // Use parentheses to force arithmetic first
        System.out.println("Total: " + (1 + 2)); // "Total: 3"
    }
}`,
    description:
      "Java evaluates + expressions left to right. If the leftmost operand is a String, all subsequent + operations become string concatenation. If the leftmost operands are numeric, Java performs addition until it hits a String. Parentheses override the order, forcing arithmetic to happen before concatenation.",
    steps: [
      "Use + to concatenate two or more Strings into one new String",
      "Any non-String value (int, double, boolean, char) is auto-converted to its String representation",
      "Remember evaluation is strictly left-to-right — the type of the leftmost operand governs interpretation",
      "Wrap arithmetic sub-expressions in parentheses when you want numeric addition before concatenation",
      "Each use of + with at least one String operand produces a brand-new String object",
    ],
    examples: [
      {
        problem:
          'What does System.out.println("Result: " + 3 + 4); print?',
        solution:
          '"Result: 34". Because "Result: " is first, the + is string concatenation throughout. 3 becomes "3", then 4 becomes "4", so the result is "Result: 34". Use ("Result: " + (3 + 4)) to get "Result: 7".',
      },
    ],
    mcqs: [
      {
        question:
          'What is printed by: System.out.println(2 + 3 + " go");',
        options: ['"2 + 3 go"', '"23 go"', '"5 go"', '"go 5"'],
        answerIndex: 2,
        explanation:
          "Option C is correct. The expression is evaluated left to right: 2 + 3 = 5 (both ints, so arithmetic addition), then 5 + \" go\" = \"5 go\" (int + String, so concatenation). Option A is wrong — Java doesn't print the literal source text. Option B would result if both 2 and 3 were concatenated as strings (which happens only when a String appears first). Option D reverses the output.",
      },
      {
        question:
          'What is the value of s after: int a = 10; int b = 20; String s = "Sum: " + a + b;',
        options: ['"Sum: 30"', '"Sum: 1020"', '"Sum: 10 20"', '"Sum: ab"'],
        answerIndex: 1,
        explanation:
          'Option B is correct. Because "Sum: " appears first, all + operators become string concatenation. a is converted to "10" then appended, then b is converted to "20" and appended, giving "Sum: 1020". To get "Sum: 30" you need "Sum: " + (a + b) — parentheses force arithmetic before concatenation.',
      },
    ],
  },
  {
    id: "math-class",
    name: "Math Class Static Methods",
    unit: "Unit 2: Using Objects",
    unitNumber: 2,
    tags: ["new-u1", "MCQ frequent", "FRQ"],
    summary:
      "The Math class provides static utility methods for common calculations; no object instantiation is needed — call them directly as Math.method().",
    formula: "Math.abs(x); Math.pow(b,e); Math.sqrt(x); Math.random()",
    codeSnippet: `public class MathDemo {
    public static void main(String[] args) {
        System.out.println(Math.abs(-7));        // 7
        System.out.println(Math.pow(2, 10));     // 1024.0
        System.out.println(Math.sqrt(144));      // 12.0
        System.out.println(Math.min(5, 3));      // 3
        System.out.println(Math.max(5, 3));      // 5

        // Math.random() returns a double in [0.0, 1.0)
        double r = Math.random();               // e.g. 0.73...

        // Scale to [0, n): cast to int after multiplying
        int d6 = (int)(Math.random() * 6) + 1; // 1 to 6 inclusive
        System.out.println(d6);
    }
}`,
    description:
      "Math is a utility class in java.lang — all its methods are static, meaning you call them on the class name itself rather than on an object. Math.random() is a frequent FRQ topic: it returns a double uniformly distributed in [0.0, 1.0). To get a random integer in range [min, max] inclusive, use (int)(Math.random() * (max - min + 1)) + min.",
    steps: [
      "Call Math methods using the class name: Math.abs(), Math.sqrt(), etc. — no object is needed",
      "Math.pow(b, e) returns b raised to the e as a double",
      "Math.sqrt(x) returns the square root as a double",
      "Math.random() returns a double in [0.0, 1.0) — the value 1.0 is never returned",
      "To scale to integers: (int)(Math.random() * range) + min where range = max - min + 1",
    ],
    examples: [
      {
        problem:
          "Write one line of code that generates a random integer from 1 to 10 inclusive.",
        solution:
          "int n = (int)(Math.random() * 10) + 1; // Math.random() in [0,1) → *10 → [0,10) → cast → 0–9 → +1 → 1–10",
      },
    ],
    mcqs: [
      {
        question:
          "What is the range of possible values produced by (int)(Math.random() * 5)?",
        options: [
          "1, 2, 3, 4, 5",
          "0, 1, 2, 3, 4",
          "0, 1, 2, 3, 4, 5",
          "0.0, 1.0, 2.0, 3.0, 4.0",
        ],
        answerIndex: 1,
        explanation:
          "Option B is correct. Math.random() generates a double in [0.0, 1.0). Multiplying by 5 gives [0.0, 5.0). Casting to int truncates toward zero, yielding 0, 1, 2, 3, or 4. Option A is off — it never produces 5 and misses 0. Option C incorrectly includes 5. Option D is wrong because casting to int removes the decimal part.",
      },
      {
        question: "Which of the following returns the larger of two ints a and b?",
        options: [
          "Math.max(a, b)",
          "Math.min(a, b)",
          "Math.abs(a, b)",
          "Math.pow(a, b)",
        ],
        answerIndex: 0,
        explanation:
          "Option A is correct: Math.max(a, b) returns the greater of two values. Option B returns the smaller value (Math.min). Option C is wrong — Math.abs() takes one argument and returns absolute value; it does not accept two arguments. Option D raises a to the power b, which is unrelated to finding the maximum.",
      },
    ],
  },
  {
    id: "null-reference",
    name: "null References and NullPointerException",
    unit: "Unit 2: Using Objects",
    unitNumber: 2,
    tags: ["new-u1", "MCQ frequent"],
    summary:
      "null means a reference variable does not point to any object; calling a method on null causes a NullPointerException at runtime.",
    formula: "String s = null; s.length() throws NPE",
    codeSnippet: `public class NullDemo {
    public static void main(String[] args) {
        String s = null; // s holds no object reference

        // This will throw NullPointerException at runtime
        // System.out.println(s.length()); // NPE!

        // Safe pattern: check for null before calling methods
        if (s != null) {
            System.out.println(s.length());
        } else {
            System.out.println("s is null");
        }

        // Alternate: put the literal first to avoid NPE
        System.out.println("hello".equals(s)); // false, no NPE
    }
}`,
    description:
      "null is a special literal that can be assigned to any reference (object) variable to indicate it points to nothing. Attempting to invoke an instance method or access a field through a null reference causes a NullPointerException, which is a runtime error that crashes the program. Defensive programming uses null checks (if (obj != null)) before method calls.",
    steps: [
      "Understand that declaring a reference variable without initialization gives it null by default (for instance variables) or requires explicit initialization (for local variables)",
      "Never call a method on a variable that might be null without first checking it",
      "Use if (obj != null) to guard method calls",
      "When comparing a String variable to a literal, place the literal first — \"literal\".equals(var) — to avoid NPE if var is null",
      "Read NullPointerException stack traces to find exactly which line dereferenced null",
    ],
    examples: [
      {
        problem:
          "String name = null; System.out.println(name.length()); — what happens and how do you fix it?",
        solution:
          "A NullPointerException is thrown because name is null. Fix: check null before calling length(): if (name != null) { System.out.println(name.length()); }",
      },
    ],
    mcqs: [
      {
        question:
          "What happens when the following code executes?\nString s = null;\nSystem.out.println(s.length());",
        options: [
          "It prints 0",
          "It prints null",
          "It throws a NullPointerException at runtime",
          "It causes a compile error",
        ],
        answerIndex: 2,
        explanation:
          "Option C is correct. Calling any instance method on null throws NullPointerException at runtime. Option A is wrong — length() cannot execute on null; it does not return 0. Option B is wrong — null is printed only if you pass null directly to println, not when calling a method on it. Option D is wrong — assigning null is legal Java; the error occurs at runtime.",
      },
      {
        question:
          "Which code fragment safely checks whether String input is non-null before printing its length?",
        options: [
          "System.out.println(input.length() != null);",
          'if (input != null) { System.out.println(input.length()); }',
          "try { input.length(); } finally { System.out.println(0); }",
          'if (input.equals(null)) { System.out.println(input.length()); }',
        ],
        answerIndex: 1,
        explanation:
          "Option B is correct: comparing the reference to null with != before calling any method is the standard guard. Option A calls input.length() without any guard — if input is null this still throws NPE. Option C uses exception handling but the finally block always prints 0 regardless. Option D calls input.equals(null) — if input itself is null, this call throws NPE before the comparison happens.",
      },
    ],
  },
  {
    id: "wrapper-classes",
    name: "Wrapper Classes and Autoboxing",
    unit: "Unit 2: Using Objects",
    unitNumber: 2,
    tags: ["new-u1", "MCQ frequent"],
    summary:
      "Wrapper classes (Integer, Double) box primitives as objects; autoboxing and unboxing convert between primitive and wrapper automatically.",
    formula: 'Integer.parseInt("5"); Integer x = 5; int y = x;',
    codeSnippet: `public class WrapperDemo {
    public static void main(String[] args) {
        // Parsing strings to primitives
        int n = Integer.parseInt("42");       // 42
        double d = Double.parseDouble("3.14"); // 3.14

        // Autoboxing: int → Integer automatically
        Integer boxed = 100;   // compiler converts int to Integer

        // Unboxing: Integer → int automatically
        int prim = boxed;      // compiler converts Integer to int

        System.out.println(n);
        System.out.println(d);
        System.out.println(boxed + 1); // unboxes, adds, prints 101
    }
}`,
    description:
      "Java's primitive types (int, double) cannot be stored in generic collections like ArrayList<Integer> — wrapper classes solve this by wrapping the primitive value inside an object. Autoboxing is the automatic conversion from primitive to wrapper; unboxing is the reverse. The static methods Integer.parseInt() and Double.parseDouble() convert String representations to numeric values.",
    steps: [
      "Use Integer when you need an int as an object (e.g., for ArrayList<Integer>)",
      "Use Integer.parseInt(str) to convert a String of digits to int",
      "Use Double.parseDouble(str) to convert a String to double",
      "Rely on autoboxing when assigning an int literal to an Integer variable — no explicit cast needed",
      "Be aware that unboxing a null Integer causes a NullPointerException",
    ],
    examples: [
      {
        problem:
          'String userInput = "37"; convert it to an int and add 10, then print the result.',
        solution:
          'int val = Integer.parseInt(userInput); // val = 37\nSystem.out.println(val + 10);           // prints 47',
      },
    ],
    mcqs: [
      {
        question: 'What is the value of n after: int n = Integer.parseInt("123abc");',
        options: ["123", "0", "A compile error occurs", "A NumberFormatException is thrown at runtime"],
        answerIndex: 3,
        explanation:
          "Option D is correct. Integer.parseInt() requires the entire string to be a valid integer. \"123abc\" contains non-digit characters, so it throws NumberFormatException at runtime. Option A is wrong — parseInt does not partially parse. Option B is wrong — 0 is not returned on failure. Option C is wrong — the code compiles fine; the error only occurs at runtime.",
      },
      {
        question:
          "Which of the following demonstrates autoboxing?",
        options: [
          "int x = (int) 3.9;",
          "Integer y = 5;",
          'int z = Integer.parseInt("5");',
          "double d = 5;",
        ],
        answerIndex: 1,
        explanation:
          "Option B is correct. Assigning the int literal 5 to an Integer variable triggers autoboxing — the compiler automatically wraps 5 in an Integer object. Option A is a narrowing cast between primitives, not autoboxing. Option C uses a static parsing method, not autoboxing. Option D is widening primitive conversion (int to double), also not autoboxing.",
      },
    ],
  },
  {
    id: "pass-by-value",
    name: "Pass-by-Value in Java (primitives vs. references)",
    unit: "Unit 2: Using Objects",
    unitNumber: 2,
    tags: ["new-u1", "MCQ frequent", "FRQ"],
    summary:
      "Java always passes arguments by value: primitives pass a copy of the value, while objects pass a copy of the reference — the object itself can be mutated, but the original variable cannot be reassigned.",
    formula: "",
    codeSnippet: `public class PassByValueDemo {
    static void doubleIt(int n) {
        n = n * 2; // changes local copy only
    }

    static void appendBang(StringBuilder sb) {
        sb.append("!"); // mutates the object sb points to
    }

    public static void main(String[] args) {
        int x = 5;
        doubleIt(x);
        System.out.println(x); // still 5 — primitive was copied

        StringBuilder s = new StringBuilder("hello");
        appendBang(s);
        System.out.println(s); // "hello!" — object was mutated via copied reference
    }
}`,
    description:
      "When a method is called, Java copies the argument's value into the parameter variable. For primitives this means the method receives an independent copy — changes inside the method never affect the caller's variable. For objects, the copy is the reference (memory address), so the method can call methods on and mutate the original object, but reassigning the parameter to a new object does not affect the caller's variable.",
    steps: [
      "For primitives (int, double, boolean, char), understand that the method receives a separate copy — modifying the parameter does nothing to the original variable",
      "For objects, understand that the method receives a copy of the reference — both the caller and the method point to the same object",
      "Mutations to the object's internal state (calling setters, appending, etc.) are visible to the caller",
      "Reassigning the parameter to a new object inside the method does NOT redirect the caller's variable",
      "On the AP exam, trace through primitive arguments and object arguments separately to predict behavior",
    ],
    examples: [
      {
        problem:
          "void addOne(int n) { n++; } ... int val = 10; addOne(val); — what is val after the call?",
        solution:
          "val is still 10. The parameter n is a copy of val. Incrementing n affects only the local copy inside addOne. The original variable val in the caller is unchanged.",
      },
    ],
    mcqs: [
      {
        question:
          "Consider:\nstatic void change(int x) { x = 99; }\n...\nint a = 5;\nchange(a);\nSystem.out.println(a);\n\nWhat is printed?",
        options: ["99", "5", "0", "A compile error occurs"],
        answerIndex: 1,
        explanation:
          "Option B (5) is correct. Java passes the int a by value — a copy of 5 is handed to the parameter x. Assigning 99 to x modifies only the local parameter. The original variable a in the caller is never touched. Option A (99) is the classic pass-by-value mistake. Option C (0) is wrong. Option D is wrong — this is valid Java.",
      },
      {
        question:
          "Consider:\nstatic void clear(int[] arr) { arr[0] = 0; }\n...\nint[] nums = {7, 8, 9};\nclear(nums);\nSystem.out.println(nums[0]);\n\nWhat is printed?",
        options: ["7", "0", "9", "A NullPointerException is thrown"],
        answerIndex: 1,
        explanation:
          "Option B (0) is correct. Arrays are objects — a copy of the reference is passed to arr. Both arr and nums point to the same array in memory. Setting arr[0] = 0 mutates the actual array, so nums[0] is now 0. Option A (7) would be correct only if primitives were passed. Option C (9) is wrong. Option D is wrong — nums is not null.",
      },
    ],
  },
];
