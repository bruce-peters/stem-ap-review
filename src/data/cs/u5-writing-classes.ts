import type { Topic } from "@/types";

export const writingClassesTopics: Topic[] = [
  {
    id: "class-anatomy",
    name: "Class Declaration and Structure",
    unit: "Unit 5: Writing Classes",
    unitNumber: 5,
    tags: ["new-u3", "MCQ frequent", "FRQ"],
    summary:
      "A class is a blueprint that bundles fields (state) and methods (behavior) to create objects.",
    formula: "public class Dog { }",
    codeSnippet: `public class Dog {
  // Fields (instance variables)
  private String name;
  private int age;

  // Constructor
  public Dog(String name, int age) {
    this.name = name;
    this.age = age;
  }

  // Method
  public void bark() {
    System.out.println(name + " says: Woof!");
  }
}`,
    description:
      "A class declaration uses the keyword class followed by the class name (capitalized by convention). The class body contains three main sections: fields that represent the object's state, constructors that initialize new objects, and methods that define the object's behavior. Each object created from the class is an independent instance with its own copy of the instance variables.",
    steps: [
      "Write the class header: public class ClassName { } with the opening and closing braces.",
      "Declare private instance variables inside the class body to represent the object's state.",
      "Write one or more constructors to initialize the fields when a new object is created.",
      "Write public methods to provide behavior and controlled access to the object's data.",
      "Instantiate the class elsewhere with: ClassName obj = new ClassName(args);",
    ],
    examples: [
      {
        problem:
          "Write a class called Car with fields for make (String) and year (int). Include a constructor and a method getInfo() that returns a String combining the two fields.",
        solution:
          "public class Car {\n  private String make;\n  private int year;\n\n  public Car(String make, int year) {\n    this.make = make;\n    this.year = year;\n  }\n\n  public String getInfo() {\n    return year + \" \" + make;\n  }\n}\n// Usage: Car c = new Car(\"Toyota\", 2020); c.getInfo() → \"2020 Toyota\"",
      },
    ],
    mcqs: [
      {
        question:
          "Which of the following is the correct way to declare a class named Book in Java?",
        options: [
          "class Book() { }",
          "public class Book { }",
          "public Book class { }",
          "public class book { }",
        ],
        answerIndex: 1,
        explanation:
          "The correct syntax is 'public class Book { }'. Option A incorrectly adds parentheses after the class name (that syntax is for methods/constructors). Option C reverses the keywords 'Book' and 'class'. Option D uses lowercase 'book', which violates the Java convention that class names start with a capital letter and would compile but is non-standard and incorrect per AP style.",
      },
      {
        question:
          "A class named Student has private fields, a constructor, and accessor methods. Which statement best describes what an object of this class represents?",
        options: [
          "A copy of the class definition stored in memory",
          "A specific instance of Student with its own set of field values",
          "A static member shared by all Student objects",
          "The constructor method itself",
        ],
        answerIndex: 1,
        explanation:
          "An object is a specific instance of the class, with its own independent values for each field. Option A is incorrect — an object is not a copy of the class definition, it is an instance created from it. Option C confuses instance members (unique per object) with static members (shared by all). Option D confuses the object with the constructor, which is a method used to create and initialize the object.",
      },
    ],
  },
  {
    id: "constructors",
    name: "Constructors",
    unit: "Unit 5: Writing Classes",
    unitNumber: 5,
    tags: ["new-u3", "MCQ frequent", "FRQ"],
    summary:
      "A constructor initializes a new object's fields and has no return type, not even void.",
    formula: "public Dog(String name) { this.name = name; }",
    codeSnippet: `public class Dog {
  private String name;
  private int age;

  // No-arg constructor
  public Dog() {
    name = "Unknown";
    age = 0;
  }

  // Parameterized constructor
  public Dog(String name, int age) {
    this.name = name;
    this.age = age;
  }
}`,
    description:
      "A constructor is a special method that runs automatically when an object is created with new. Its name must exactly match the class name and it has no return type — not even void. If you write no constructors at all, Java supplies a default no-arg constructor, but as soon as you write any constructor, that default disappears. A class may have multiple constructors as long as their parameter lists differ (overloading).",
    steps: [
      "Give the constructor the exact same name as the class, including capitalization.",
      "Omit any return type — not void, not int, nothing before the constructor name.",
      "Declare parameters for any data that must be provided at object creation time.",
      "Inside the body, use this.fieldName = paramName; to assign parameter values to instance variables.",
      "Remember: if you write even one constructor, Java no longer provides a free no-arg constructor.",
    ],
    examples: [
      {
        problem:
          "A class Rectangle has private fields width and height. Write a constructor that accepts both values as parameters.",
        solution:
          "public Rectangle(double width, double height) {\n  this.width = width;\n  this.height = height;\n}\n// No 'void' or return type before 'Rectangle'.\n// Usage: Rectangle r = new Rectangle(5.0, 3.0);",
      },
    ],
    mcqs: [
      {
        question:
          "Which of the following constructor headers is correctly written for a class named Circle?",
        options: [
          "public void Circle(double radius)",
          "public circle(double radius)",
          "public Circle(double radius)",
          "Circle public(double radius)",
        ],
        answerIndex: 2,
        explanation:
          "A constructor must have the same name as the class and no return type. Option A incorrectly includes 'void' as a return type — this makes Java treat it as a regular method, not a constructor. Option B uses 'circle' (lowercase), which does not match the class name 'Circle'. Option D places 'public' after 'Circle', which is a syntax error.",
      },
      {
        question:
          "A programmer writes a class Item with only a parameterized constructor: public Item(String name). What happens when the code tries to create an object with new Item()?",
        options: [
          "Java uses the default no-arg constructor automatically.",
          "A compile-time error occurs because no no-arg constructor exists.",
          "A runtime exception is thrown.",
          "The parameterized constructor is called with an empty String.",
        ],
        answerIndex: 1,
        explanation:
          "Once any constructor is explicitly defined, Java no longer provides a default no-arg constructor. Calling new Item() when only public Item(String name) exists causes a compile-time error because no matching constructor is found. Option A is wrong — the default constructor is only provided when no constructors are written at all. Options C and D are incorrect; this is a compile-time, not runtime, issue.",
      },
    ],
  },
  {
    id: "instance-variables",
    name: "Instance Variables (private fields)",
    unit: "Unit 5: Writing Classes",
    unitNumber: 5,
    tags: ["new-u3", "MCQ frequent", "FRQ"],
    summary:
      "Instance variables store an object's state; each object has its own independent copy.",
    formula: "private String name; private int age;",
    codeSnippet: `public class Student {
  // Instance variables — each Student object gets its own copy
  private String name;
  private int grade;
  private double gpa;

  public Student(String name, int grade, double gpa) {
    this.name = name;
    this.grade = grade;
    this.gpa = gpa;
  }
}`,
    description:
      "Instance variables (also called fields) are declared inside the class body but outside any method. They hold the data that makes each object unique — two Student objects can have different name and gpa values even though they were created from the same class. On the AP exam, instance variables are almost always declared private to enforce encapsulation, meaning code outside the class cannot directly read or modify them.",
    steps: [
      "Declare instance variables at the top of the class body, before constructors and methods.",
      "Use the private access modifier to prevent direct access from outside the class.",
      "Choose appropriate data types: String for text, int for whole numbers, double for decimals, boolean for flags.",
      "Do not assign values at the declaration line unless a default is truly needed — initialize in the constructor instead.",
      "Each object instantiated from the class gets its own independent copy of every instance variable.",
    ],
    examples: [
      {
        problem:
          "A class BankAccount should track an owner's name and balance. Declare the appropriate private instance variables.",
        solution:
          "private String ownerName;\nprivate double balance;\n\n// Declared inside the class body, before the constructor.\n// Each BankAccount object will have its own ownerName and balance.",
      },
    ],
    mcqs: [
      {
        question:
          "Two objects obj1 and obj2 are both instances of the same class. obj1's instance variable count is set to 5 and obj2's count is set to 10. What are the values of count for each object?",
        options: [
          "Both obj1 and obj2 have count == 10 because they share the variable.",
          "obj1.count == 5 and obj2.count == 10 because each object has its own copy.",
          "A compile-time error occurs because count is declared twice.",
          "Both obj1 and obj2 have count == 5 because obj1 was set first.",
        ],
        answerIndex: 1,
        explanation:
          "Each object has its own independent copy of every instance variable, so changing obj2's count does not affect obj1's count. Option A describes static (class-level) variable behavior, not instance variable behavior. Option C is incorrect — there is only one field declaration; both objects use it independently. Option D is incorrect — assignment to one object's field has no effect on another object's field.",
      },
      {
        question:
          "Which declaration correctly defines a private instance variable for a class named Product?",
        options: [
          "public int price;",
          "int price;",
          "private int price;",
          "static private int price;",
        ],
        answerIndex: 2,
        explanation:
          "private int price; is the correct AP-style declaration for an instance variable. Option A uses public, which violates encapsulation and exposes the field directly to outside code. Option B uses package-private (default) access, which is not fully encapsulated and is not the AP standard. Option D adds static, making price a class-level variable shared by all Product objects rather than a per-object instance variable.",
      },
    ],
  },
  {
    id: "encapsulation",
    name: "Encapsulation and Access Modifiers",
    unit: "Unit 5: Writing Classes",
    unitNumber: 5,
    tags: ["new-u3", "MCQ frequent"],
    summary:
      "Encapsulation hides an object's fields behind private access and exposes controlled behavior through public methods.",
    formula: "private fields, public methods",
    codeSnippet: `public class BankAccount {
  private double balance;  // hidden from outside

  public BankAccount(double initialBalance) {
    balance = initialBalance;
  }

  // Controlled access — enforces non-negative balance
  public void deposit(double amount) {
    if (amount > 0) {
      balance += amount;
    }
  }

  public double getBalance() {
    return balance;
  }
}`,
    description:
      "Encapsulation is the principle of bundling data (fields) and the methods that operate on that data within one class, while restricting direct outside access to the fields. In Java, this is achieved by declaring fields private and providing public methods to read or modify them. The key benefit is that the class controls how its data is changed — a deposit method can reject negative amounts, whereas a public field could be set to any value by any code in the program.",
    steps: [
      "Declare all instance variables with the private access modifier.",
      "Provide public getter (accessor) methods to allow outside code to read field values safely.",
      "Provide public setter (mutator) methods only when modification is appropriate, and include validation logic if needed.",
      "Keep implementation details hidden — outside code should interact only through the public interface.",
      "Ask on the exam: WHY is this field private? Because it prevents unauthorized or invalid modifications from outside the class.",
    ],
    examples: [
      {
        problem:
          "A class Temperature stores a value in Celsius as a private double. Explain why making it private is better than making it public, and show how outside code would still read the value.",
        solution:
          "Making it private prevents any code from writing temperature = -999.0 directly. Instead, a public getter is provided:\n\npublic double getCelsius() { return celsius; }\n\nOutside code calls: double t = myTemp.getCelsius();\nThe class retains full control over how the field is accessed or changed.",
      },
    ],
    mcqs: [
      {
        question:
          "Which best explains why instance variables are typically declared private in Java?",
        options: [
          "private variables run faster than public variables.",
          "private prevents the variable from being used inside the class.",
          "private ensures that outside classes cannot directly read or modify the variable, protecting data integrity.",
          "private means the variable is shared by all instances of the class.",
        ],
        answerIndex: 2,
        explanation:
          "Encapsulation uses private to protect data integrity — only the class's own methods can directly access the field, so invalid states can be prevented. Option A is false; access modifiers have no effect on performance. Option B is the opposite of the truth: private fields are fully accessible inside the class. Option D describes static, not private.",
      },
      {
        question:
          "A Wallet class has a private int dollars field. Outside code tries to execute: myWallet.dollars = 500; What is the result?",
        options: [
          "The field is updated to 500 successfully.",
          "A compile-time error occurs because dollars is private.",
          "A runtime NullPointerException is thrown.",
          "The statement is ignored silently.",
        ],
        answerIndex: 1,
        explanation:
          "Accessing a private field from outside its class causes a compile-time error in Java. The compiler enforces access control before the program ever runs. Option A would be true if dollars were public. Option C describes a different error entirely (null reference). Option D is incorrect — Java does not silently ignore access violations; it refuses to compile.",
      },
    ],
  },
  {
    id: "getters-setters",
    name: "Accessor (getter) and Mutator (setter) Methods",
    unit: "Unit 5: Writing Classes",
    unitNumber: 5,
    tags: ["new-u3", "MCQ frequent", "FRQ"],
    summary:
      "Getters return a field's value; setters update it — both are public methods that mediate access to private fields.",
    formula:
      "public String getName() { return name; } public void setName(String n) { }",
    codeSnippet: `public class Person {
  private String name;
  private int age;

  public Person(String name, int age) {
    this.name = name;
    this.age = age;
  }

  // Accessor (getter)
  public String getName() { return name; }
  public int getAge()     { return age; }

  // Mutator (setter) with validation
  public void setAge(int age) {
    if (age >= 0) { this.age = age; }
  }
}`,
    description:
      "Accessor methods (getters) follow the naming pattern getName() and return the value of a private field without changing it. Mutator methods (setters) follow the pattern setName(Type value), are void, and update the field — optionally enforcing constraints. The AP exam frequently tests whether students can write getters that return the correct type and setters that use this correctly when the parameter name matches the field name.",
    steps: [
      "Name getters using the pattern get + FieldName (capitalized), e.g., getBalance().",
      "Getter return type must match the field's type exactly; the method body is simply return fieldName;",
      "Name setters using the pattern set + FieldName, e.g., setBalance(double amount).",
      "Setter return type is always void; assign the parameter to the field inside the body.",
      "When the parameter name matches the field name, use this.fieldName = paramName; to disambiguate.",
    ],
    examples: [
      {
        problem:
          "A class Book has a private String title. Write the getter and setter for title.",
        solution:
          "// Getter\npublic String getTitle() {\n  return title;\n}\n\n// Setter\npublic void setTitle(String title) {\n  this.title = title;\n}\n\n// The getter returns a String matching the field type.\n// The setter is void and uses this.title to refer to the field.",
      },
    ],
    mcqs: [
      {
        question:
          "A class Circle has private double radius. Which getter is correctly written?",
        options: [
          "public void getRadius() { return radius; }",
          "public double getRadius() { return radius; }",
          "public double getRadius() { }",
          "private double getRadius() { return radius; }",
        ],
        answerIndex: 1,
        explanation:
          "A getter must have a return type matching the field type (double) and actually return the field value. Option A uses void, which prevents a return value — a compile error. Option C declares the correct return type but has an empty body, so nothing is returned — also a compile error. Option D makes the getter private, defeating the purpose: outside code could never call it to read the field.",
      },
      {
        question:
          "A class Counter has private int count. A setter is written as: public void setCount(int count) { count = count; } What is wrong?",
        options: [
          "The parameter type should be double, not int.",
          "The method should return int, not void.",
          "count = count assigns the parameter to itself, not to the instance variable; this.count = count; is needed.",
          "Setters cannot have parameters.",
        ],
        answerIndex: 2,
        explanation:
          "When the parameter name matches the instance variable name, writing count = count assigns the local parameter to itself — the instance variable is never updated. The fix is this.count = count; which explicitly refers to the instance variable on the left side. Option A is wrong; int is correct. Option B is wrong; setters are void by convention. Option D is false; setters always have a parameter carrying the new value.",
      },
    ],
  },
  {
    id: "static-vs-instance",
    name: "static vs. Instance Members",
    unit: "Unit 5: Writing Classes",
    unitNumber: 5,
    tags: ["new-u3", "MCQ frequent"],
    summary:
      "Static members belong to the class and are shared; instance members belong to each individual object.",
    formula: "static int count; vs int count;",
    codeSnippet: `public class Counter {
  private static int totalCreated = 0; // shared by ALL instances
  private int id;                       // unique per instance

  public Counter() {
    totalCreated++;        // increments the shared count
    this.id = totalCreated;
  }

  public static int getTotalCreated() {
    return totalCreated;   // accessed via Counter.getTotalCreated()
  }

  public int getId() {
    return id;             // each object returns its own id
  }
}`,
    description:
      "A static member is declared with the static keyword and belongs to the class itself rather than to any particular object. All instances share one copy of a static variable, and static methods can be called on the class name without creating an object (e.g., Counter.getTotalCreated()). Instance members, in contrast, exist once per object — every new object gets its own copy. Static methods cannot reference instance variables or call instance methods directly because there is no specific object attached.",
    steps: [
      "Use static for data or behavior that is the same across all objects — e.g., a counter of how many objects have been created.",
      "Access static members using the class name: ClassName.staticMember, not via an object reference.",
      "Declare instance members without static; each new object created by new ClassName() gets its own copy.",
      "In a static method, you cannot use this and cannot reference instance variables — there is no object context.",
      "On the AP exam, watch for questions where code incorrectly accesses a static variable through an object reference or vice versa.",
    ],
    examples: [
      {
        problem:
          "A class Ticket has a static int nextNumber starting at 1 and an instance int ticketNumber. Each new Ticket should get the current nextNumber, then increment it. Write the constructor.",
        solution:
          "public Ticket() {\n  ticketNumber = nextNumber;  // assign current class counter to this object\n  nextNumber++;               // increment shared counter for the next ticket\n}\n\n// First Ticket: ticketNumber=1, nextNumber becomes 2.\n// Second Ticket: ticketNumber=2, nextNumber becomes 3.",
      },
    ],
    mcqs: [
      {
        question:
          "A class Robot has static int robotCount = 0. Three Robot objects are created. What is the value of Robot.robotCount if the constructor does robotCount++?",
        options: ["0", "1", "3", "Each Robot object has its own count of 1."],
        answerIndex: 2,
        explanation:
          "robotCount is static, so all three objects share the same variable. Each constructor call increments the same robotCount, giving a final value of 3. Option A is the initial value before any objects are created. Option B would be correct only if one object were created. Option D incorrectly treats robotCount as an instance variable — if it were instance-level, each object would indeed have its own copy, but static means one shared copy.",
      },
      {
        question:
          "Which statement about static methods is correct?",
        options: [
          "A static method can directly access instance variables of the class.",
          "A static method must be called on an object: obj.staticMethod().",
          "A static method can be called using the class name without creating an object.",
          "A static method can use the this keyword to refer to the current object.",
        ],
        answerIndex: 2,
        explanation:
          "Static methods are called on the class itself — ClassName.methodName() — with no object required. Option A is wrong: static methods have no access to instance variables because there is no specific object. Option B describes how instance methods are called, not static ones (though calling a static method via an object reference is allowed, it is considered bad style and misleading). Option D is wrong: this refers to the current object, but inside a static method no object exists.",
      },
    ],
  },
  {
    id: "this-keyword",
    name: "The this Keyword",
    unit: "Unit 5: Writing Classes",
    unitNumber: 5,
    tags: ["new-u3", "MCQ frequent", "FRQ"],
    summary:
      "this refers to the current object; it disambiguates instance variables from local parameters with the same name.",
    formula: "this.name = name; this.value = value;",
    codeSnippet: `public class Point {
  private double x;
  private double y;

  public Point(double x, double y) {
    this.x = x;  // this.x = instance variable, x = parameter
    this.y = y;
  }

  public void translate(double x, double y) {
    this.x += x;  // add the parameter x to the instance variable x
    this.y += y;
  }

  public double getX() { return x; } // no ambiguity here; this. is optional
}`,
    description:
      "The keyword this is a reference to the current object — the object on which the method or constructor is being called. Its most common use on the AP exam is inside a constructor or setter where the parameter name is the same as the instance variable name. Writing this.name refers to the object's field, while name alone refers to the local parameter. Without this, the assignment name = name merely assigns the parameter to itself, leaving the field unchanged.",
    steps: [
      "Recognize the pattern: a constructor or setter parameter has the same name as an instance variable.",
      "Use this.fieldName on the left side of the assignment to refer to the instance variable.",
      "The right side (just fieldName) refers to the local parameter.",
      "When there is no naming conflict, this. is optional but still legal — getters often omit it.",
      "Remember: this cannot be used inside a static method because static methods have no associated object.",
    ],
    examples: [
      {
        problem:
          "A class Lamp has a private boolean on. Write a constructor that takes a boolean on parameter and correctly assigns it to the field.",
        solution:
          "public Lamp(boolean on) {\n  this.on = on;  // this.on = instance variable; on = parameter\n}\n\n// Without this: on = on assigns the parameter to itself.\n// The instance variable would remain false (default) — a common bug.",
      },
    ],
    mcqs: [
      {
        question:
          "A constructor is written as: public Box(int width) { width = width; } What is the effect?",
        options: [
          "The instance variable width is correctly set to the parameter value.",
          "The parameter width is assigned to itself; the instance variable is not updated.",
          "A compile-time error occurs because width is used twice.",
          "The instance variable width is set to 0.",
        ],
        answerIndex: 1,
        explanation:
          "Without this.width, the name width on both sides refers to the local parameter. The statement assigns the parameter to itself, a no-op. The instance variable retains its default value (0 for int). Option A would be correct if the code were this.width = width;. Option C is wrong; Java allows the same name on both sides. Option D describes the default value behavior but does not explain why — the default persists because the assignment never reached the instance variable.",
      },
      {
        question:
          "Inside which of the following can the this keyword NOT be used?",
        options: [
          "An instance constructor",
          "A public instance method",
          "A private instance method",
          "A static method",
        ],
        answerIndex: 3,
        explanation:
          "this refers to the current object, but a static method has no current object — it belongs to the class, not to any instance. Using this inside a static method causes a compile-time error. Options A, B, and C all belong to instance contexts where a specific object exists, so this is valid in all three.",
      },
    ],
  },
  {
    id: "method-overloading",
    name: "Method Overloading (same name, different params)",
    unit: "Unit 5: Writing Classes",
    unitNumber: 5,
    tags: ["new-u3", "MCQ frequent"],
    summary:
      "Overloading lets a class have multiple methods with the same name as long as their parameter lists differ.",
    codeSnippet: `public class Printer {
  // Overloaded print methods — same name, different signatures
  public void print(String text) {
    System.out.println(text);
  }

  public void print(int number) {
    System.out.println(number);
  }

  public void print(String text, int times) {
    for (int i = 0; i < times; i++) {
      System.out.println(text);
    }
  }
}`,
    description:
      "Method overloading allows a class to define several methods that share a name but differ in their parameter lists (number, types, or order of parameters). Java determines which version to call at compile time based on the argument types provided. Overloading is commonly used for constructors (a no-arg constructor and a parameterized constructor are overloads of each other). Changing only the return type does not constitute overloading and will cause a compile-time error if the parameter lists are identical.",
    steps: [
      "Keep the same method name for all overloaded versions.",
      "Change the parameter list: use a different number of parameters, different types, or a different order of types.",
      "Return type alone cannot distinguish overloads — if two methods differ only in return type, the compiler cannot determine which to call.",
      "Java automatically selects the correct overload at compile time based on the argument types in the method call.",
      "Constructors are frequently overloaded to allow objects to be created with different amounts of initial data.",
    ],
    examples: [
      {
        problem:
          "A class Calculator has an add method. Write two overloads: one that adds two int values and one that adds three int values.",
        solution:
          "public int add(int a, int b) {\n  return a + b;\n}\n\npublic int add(int a, int b, int c) {\n  return a + b + c;\n}\n\n// calc.add(3, 4) calls the first; calc.add(1, 2, 3) calls the second.\n// Same name, different parameter count.",
      },
    ],
    mcqs: [
      {
        question:
          "A class has two methods: public int compute(int x) and public double compute(int x). Which statement is correct?",
        options: [
          "This is valid overloading because the return types differ.",
          "This causes a compile-time error because the parameter lists are identical.",
          "Java will call the int version for integer results and the double version for decimal results.",
          "This is valid because one method is int and the other is double.",
        ],
        answerIndex: 1,
        explanation:
          "Overloading is determined solely by the parameter list, not the return type. Both methods have the same parameter list (int x), so Java cannot distinguish them — this is a compile-time error. Option A is wrong: return type is irrelevant for overload resolution. Option C is wrong: Java cannot distinguish calls based on how you plan to use the return value. Option D repeats the same flawed logic as A.",
      },
      {
        question:
          "Which pair of constructors represents valid overloading for a class named Shape?",
        options: [
          "public Shape() and public Shape()",
          "public Shape(int sides) and public Shape(int sides)",
          "public Shape(int sides) and public Shape(double area)",
          "public void Shape(int sides) and public Shape(int sides)",
        ],
        answerIndex: 2,
        explanation:
          "public Shape(int sides) and public Shape(double area) are valid overloads because they have different parameter types (int vs. double). Options A and B are duplicates — identical signatures cause a compile-time error. Option D is invalid because public void Shape(int sides) is not a constructor (it has a return type 'void'), it is treated as an ordinary method, not a constructor overload.",
      },
    ],
  },
  {
    id: "scope-local-instance",
    name: "Variable Scope: Local vs. Instance Variables",
    unit: "Unit 5: Writing Classes",
    unitNumber: 5,
    tags: ["new-u3", "MCQ frequent"],
    summary:
      "Local variables exist only inside the method where they are declared and shadow instance variables of the same name.",
    codeSnippet: `public class Thermostat {
  private int temp = 70;  // instance variable

  public void setTemp(int temp) {
    // local parameter 'temp' shadows the instance variable 'temp'
    this.temp = temp;  // must use this. to reach the instance variable
  }

  public void resetToDefault() {
    int temp = 68;     // local variable — only exists in this method
    this.temp = temp;  // assigns local value to instance variable
  }

  public int getTemp() {
    return temp;  // no local 'temp' here, so this refers to the instance variable
  }
}`,
    description:
      "A local variable is declared inside a method (including inside loops and conditionals) and ceases to exist when that method returns. If a local variable has the same name as an instance variable, the local variable shadows the instance variable within that scope — references to that name resolve to the local variable. Use this.variableName to explicitly refer to the instance variable when shadowing occurs. Instance variables, in contrast, persist for the lifetime of the object.",
    steps: [
      "Identify where the variable is declared: inside a method (local) or directly in the class body (instance).",
      "Remember that local variables shadow instance variables of the same name within that method.",
      "Use this.variableName to access the instance variable when a local variable of the same name exists.",
      "Local variables must be initialized before use — they have no default value, unlike instance variables.",
      "When a method ends, all its local variables are gone; instance variables retain their values.",
    ],
    examples: [
      {
        problem:
          "A class Score has private int points = 0. A method addPoints(int points) is written without this: points = points; What does the instance variable points equal after calling addPoints(5)?",
        solution:
          "The instance variable points is still 0. The local parameter 'points' shadows the instance variable, so points = points assigns the parameter to itself. The fix is: this.points += points; to add the parameter value to the instance variable.\n\n// After fix: calling addPoints(5) sets this.points = 0 + 5 = 5.",
      },
    ],
    mcqs: [
      {
        question:
          "A method contains: int result = 0; inside its body. Where is result accessible?",
        options: [
          "Throughout the entire class, in all methods.",
          "Only within the method where it is declared.",
          "In any method called after this method runs.",
          "In the constructor and all methods declared after it.",
        ],
        answerIndex: 1,
        explanation:
          "Local variables are scoped to the block (method body) in which they are declared. Once the method returns, result no longer exists. Options A, C, and D all describe behaviors of instance or static variables, not local variables. Instance variables declared in the class body are available throughout all methods; local variables are not.",
      },
      {
        question:
          "A class has private int x = 10. A method contains: int x = 5; return x; What value does the method return?",
        options: [
          "10, because the instance variable is used.",
          "5, because the local variable shadows the instance variable.",
          "15, because the two values are added.",
          "A compile-time error because x is declared twice.",
        ],
        answerIndex: 1,
        explanation:
          "The local variable int x = 5 shadows the instance variable within this method. When return x; is reached, x refers to the local variable, so 5 is returned. Option A would be correct only if no local x existed — then x would resolve to the instance variable. Option C is wrong; no addition occurs. Option D is wrong; Java allows a local variable to have the same name as an instance variable.",
      },
    ],
  },
  {
    id: "tostring-method",
    name: "toString() Method Override",
    unit: "Unit 5: Writing Classes",
    unitNumber: 5,
    tags: ["new-u3", "MCQ frequent", "FRQ"],
    summary:
      "Overriding toString() lets a class return a meaningful String representation of its objects.",
    formula: 'public String toString() { return "Dog: " + name; }',
    codeSnippet: `public class Dog {
  private String name;
  private int age;

  public Dog(String name, int age) {
    this.name = name;
    this.age = age;
  }

  @Override
  public String toString() {
    return "Dog[name=" + name + ", age=" + age + "]";
  }
}

// Usage:
// Dog d = new Dog("Rex", 3);
// System.out.println(d);  // prints: Dog[name=Rex, age=3]`,
    description:
      "Every Java class implicitly has a toString() method inherited from the Object class, but the default version returns a cryptic memory address string. By writing a public String toString() method in your class, you provide a readable representation that is called automatically whenever the object appears in a String context — such as being passed to System.out.println() or concatenated with a String. The AP FRQ 2 (class writing) frequently awards a point specifically for a correct toString() implementation.",
    steps: [
      "Declare the method with the exact signature: public String toString()",
      "Return a String that meaningfully represents the object's state, typically combining field values.",
      "Use string concatenation to build the return value: return \"ClassName[field=\" + field + \"]\"; is a common format.",
      "No parameters are taken and the return type must be String — not void, not int.",
      "Once written, toString() is called automatically by System.out.println(obj) and in string concatenation expressions involving the object.",
    ],
    examples: [
      {
        problem:
          "A class Movie has private String title and private int year. Write a toString() method that returns output in the format: Movie[title=Inception, year=2010]",
        solution:
          'public String toString() {\n  return "Movie[title=" + title + ", year=" + year + "]";\n}\n\n// Movie m = new Movie("Inception", 2010);\n// System.out.println(m); → Movie[title=Inception, year=2010]',
      },
    ],
    mcqs: [
      {
        question:
          "Which method signature correctly overrides toString() for a class named Pet?",
        options: [
          "public void toString()",
          "public String toString(String name)",
          "public String toString()",
          "private String toString()",
        ],
        answerIndex: 2,
        explanation:
          "The correct signature is public String toString() — no parameters, return type String, access public. Option A has the wrong return type (void instead of String). Option B adds a parameter, which creates an overload rather than an override of the standard toString(). Option D uses private access, which would prevent the method from being visible to Java's printing and concatenation mechanisms.",
      },
      {
        question:
          "A class Car correctly overrides toString() to return the make and year. What is printed by: System.out.println(new Car(\"Honda\", 2022)); ?",
        options: [
          "A memory address like Car@3a1b2c",
          "null",
          "The value returned by the Car's toString() method.",
          "A compile-time error because toString() takes no arguments.",
        ],
        answerIndex: 2,
        explanation:
          "System.out.println(object) calls the object's toString() method automatically and prints the result. Since Car overrides toString() with a meaningful String, that String is printed. Option A describes what happens when toString() is NOT overridden — the default Object version returns a memory address. Option B would occur only if the toString() method returned null. Option D is wrong; no arguments are passed to toString() — println handles that internally.",
      },
    ],
  },
];
