import type { Topic } from "@/types";

export const dynamicsTopics: Topic[] = [
  {
    id: "systems-center-of-mass",
    name: "Systems and Center of Mass",
    unit: "Unit 2: Dynamics",
    unitNumber: 2,
    tags: ["MCQ frequent"],
    summary:
      "The center of mass is the weighted average position of all mass in a system, representing the point where the system's mass can be considered concentrated.",
    formula: "x_{cm} = \\frac{\\sum m_i x_i}{\\sum m_i}",
    description:
      "The center of mass (COM) of a system is the point at which all the mass can be treated as concentrated for translational motion analysis. For a system of discrete particles, it is the mass-weighted average of their positions. The COM is crucial for analyzing multi-body systems because Newton's second law can be applied to the system's total mass as if it were concentrated at the COM. For symmetric objects with uniform density, the COM is at the geometric center.",
    steps: [
      "Identify all masses $m_i$ in the system and their positions $x_i$ (in 1D) or $(x_i, y_i)$ (in 2D).",
      "Calculate the total mass: $M = \\sum m_i = m_1 + m_2 + m_3 + \\ldots$",
      "For the x-coordinate of COM, compute $x_{cm} = \\frac{m_1 x_1 + m_2 x_2 + \\ldots}{M}$",
      "For the y-coordinate (if 2D), compute $y_{cm} = \\frac{m_1 y_1 + m_2 y_2 + \\ldots}{M}$",
      "Verify your answer makes physical sense: the COM should lie closer to heavier masses and within the spatial extent of the system.",
    ],
    examples: [
      {
        problem:
          "Two masses are on a horizontal rod: $m_1 = 3.0$ kg at $x_1 = 0$ m and $m_2 = 2.0$ kg at $x_2 = 5.0$ m. Find the center of mass.",
        solution:
          "Total mass: $M = 3.0 + 2.0 = 5.0$ kg. Using the formula: $x_{cm} = \\frac{(3.0)(0) + (2.0)(5.0)}{5.0} = \\frac{0 + 10}{5.0} = 2.0$ m. The center of mass is at 2.0 m from the origin, closer to the heavier mass as expected.",
      },
    ],
    mcqs: [
      {
        question:
          "Three equal masses are located at x = 0 m, x = 3 m, and x = 6 m. Where is the center of mass?",
        options: ["0 m", "3 m", "4.5 m", "9 m"],
        answerIndex: 1,
        explanation:
          "For three equal masses, the COM is at the arithmetic mean of their positions: $(0 + 3 + 6)/3 = 3$ m. Answer B is correct. A (0 m) ignores the other masses. C (4.5 m) incorrectly averages only the outer two masses. D (9 m) is the sum, not the average.",
      },
      {
        question:
          "If a 2 kg mass is at x = 0 and a 6 kg mass is at x = 8 m, the center of mass is closest to:",
        options: ["2 m", "4 m", "6 m", "8 m"],
        answerIndex: 2,
        explanation:
          "$x_{cm} = \\frac{(2)(0) + (6)(8)}{2+6} = \\frac{48}{8} = 6$ m. Answer C is correct. The COM is much closer to the heavier mass. A and B place it too far left. D incorrectly places it at the heavier mass itself.",
      },
    ],
  },
  {
    id: "free-body-diagrams",
    name: "Free-Body Diagrams",
    unit: "Unit 2: Dynamics",
    unitNumber: 2,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "A free-body diagram is a simplified sketch showing all external forces acting on a single object, essential for applying Newton's laws.",
    description:
      "A free-body diagram (FBD) isolates a single object and represents it as a point or simple shape, with arrows depicting all external forces acting on that object. Each arrow's direction indicates the force's direction, and its length (qualitatively) represents the magnitude. FBDs are the first step in any dynamics problem, allowing systematic application of Newton's second law. Common forces include weight (mg downward), normal force (perpendicular to surface), friction (parallel to surface), tension (along ropes/strings), and applied forces.",
    steps: [
      "Identify the object of interest and draw it as a simple dot or box.",
      "Identify all forces acting ON that object (ignore forces the object exerts on other things).",
      "Draw an arrow for each force: weight $mg$ downward, normal force $F_N$ perpendicular from surface, friction $f$ opposing motion, tension $T$ along rope direction, applied force $F_{app}$ as specified.",
      "Choose a coordinate system (typically x-horizontal, y-vertical or parallel/perpendicular to an incline).",
      "Label each force with its symbol and magnitude (if known) or variable name.",
    ],
    examples: [
      {
        problem:
          "Draw a free-body diagram for a book at rest on a horizontal table.",
        solution:
          "The book experiences two forces: (1) Weight $F_g = mg$ pointing straight down, and (2) Normal force $F_N$ pointing straight up from the table surface. Since the book is at rest, $F_N = mg$ by Newton's first law ($\\sum F_y = 0$). No horizontal forces act on the book.",
      },
    ],
    mcqs: [
      {
        question:
          "Which force is always present in a free-body diagram of an object near Earth's surface?",
        options: [
          "Normal force",
          "Friction",
          "Weight (gravitational force)",
          "Tension",
        ],
        answerIndex: 2,
        explanation:
          "Weight (gravitational force $mg$) acts on every object with mass near Earth. Answer C is correct. A (normal force) only appears when the object is in contact with a surface. B (friction) requires contact and relative motion or attempted motion. D (tension) requires connection to a rope or string.",
      },
      {
        question:
          "A box is pulled across a rough floor at constant velocity. Which forces act on the box?",
        options: [
          "Only weight and applied force",
          "Weight, normal force, applied force, and kinetic friction",
          "Weight and normal force only",
          "Weight, normal force, and tension only",
        ],
        answerIndex: 1,
        explanation:
          "The box experiences: weight (mg down), normal force (up from floor), applied pulling force (horizontal), and kinetic friction (opposing motion). Answer B is correct. A omits normal force and friction. C omits the applied force and friction. D incorrectly uses 'tension' instead of applied force and omits friction.",
      },
    ],
  },
  {
    id: "newtons-first-law",
    name: "Newton's First Law (Law of Inertia)",
    unit: "Unit 2: Dynamics",
    unitNumber: 2,
    tags: ["MCQ frequent", "theorem"],
    summary:
      "An object at rest stays at rest, and an object in motion continues with constant velocity, unless acted upon by a net external force.",
    formula: "\\sum \\vec{F} = \\vec{0} \\Rightarrow a = 0",
    description:
      "Newton's First Law, also called the Law of Inertia, states that in the absence of a net force, an object maintains its velocity (which includes zero velocity for an object at rest). This law defines inertial reference frames and introduces the concept that force is required to change motion, not to sustain it. Inertia is the tendency of matter to resist changes in velocity, and an object's mass quantifies its inertia. The first law is actually a special case of the second law when net force is zero.",
    steps: [
      "Identify whether the object is at rest or moving with constant velocity (no acceleration).",
      "If the object has $a = 0$, conclude that the net force must be zero: $\\sum F = 0$.",
      "Analyze all forces acting on the object using a free-body diagram.",
      "For equilibrium in one dimension: set $\\sum F_x = 0$ and/or $\\sum F_y = 0$.",
      "Solve the equilibrium equations to find unknown forces (e.g., tension, normal force, friction).",
    ],
    examples: [
      {
        problem:
          "A 5 kg book rests on a horizontal table. What is the normal force exerted by the table on the book?",
        solution:
          "The book is at rest, so $a = 0$ and $\\sum F_y = 0$. Forces in the vertical direction are: weight $F_g = mg = (5)(9.8) = 49$ N downward and normal force $F_N$ upward. Setting $F_N - F_g = 0$ gives $F_N = 49$ N.",
      },
    ],
    mcqs: [
      {
        question:
          "A hockey puck slides across frictionless ice with constant velocity. What can you conclude?",
        options: [
          "A net force acts on the puck in the direction of motion",
          "No net horizontal force acts on the puck",
          "The puck's mass is zero",
          "Gravity is the only force acting on the puck",
        ],
        answerIndex: 1,
        explanation:
          "Constant velocity means zero acceleration, so by Newton's First Law, the net force is zero. Answer B is correct. A is wrong because constant velocity requires no net force. C is absurd. D ignores the normal force from the ice (which balances gravity vertically).",
      },
      {
        question:
          "A 2 kg object hangs from a rope at rest. What is the tension in the rope?",
        options: ["2 N", "9.8 N", "19.6 N", "0 N"],
        answerIndex: 2,
        explanation:
          "At rest, $\\sum F = 0$. Tension upward equals weight downward: $T = mg = (2)(9.8) = 19.6$ N. Answer C is correct. A uses mass instead of weight. B uses only g, not mg. D incorrectly suggests no force is needed.",
      },
    ],
  },
  {
    id: "newtons-second-law",
    name: "Newton's Second Law",
    unit: "Unit 2: Dynamics",
    unitNumber: 2,
    tags: ["MCQ frequent", "FRQ", "theorem"],
    summary:
      "The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.",
    formula: "\\sum F = ma",
    description:
      "Newton's Second Law is the cornerstone of classical mechanics, quantitatively relating force, mass, and acceleration. The net force (vector sum of all forces) equals the product of mass and acceleration. This law is a vector equation, so it applies component-wise: $\\sum F_x = ma_x$ and $\\sum F_y = ma_y$. It explains how forces cause changes in motion: larger forces produce greater accelerations, while more massive objects resist acceleration more strongly. The SI unit of force, the Newton (N), is defined from this law: 1 N = 1 kg·m/s².",
    steps: [
      "Draw a complete free-body diagram showing all forces acting on the object.",
      "Choose a coordinate system (axes aligned with motion or with the surface for inclined planes).",
      "Write Newton's Second Law for each direction: $\\sum F_x = ma_x$ and $\\sum F_y = ma_y$.",
      "Substitute expressions for each force (weight $mg$, normal force $F_N$, friction $\\mu F_N$, etc.) into the equations.",
      "Solve the system of equations for the unknown quantities (often acceleration, then use kinematics if needed).",
      "Check that your answer has correct units and reasonable magnitude.",
    ],
    examples: [
      {
        problem:
          "A 10 kg box is pushed across a frictionless floor with a horizontal force of 30 N. What is the box's acceleration?",
        solution:
          "Free-body diagram: weight and normal force balance vertically, leaving only the 30 N push horizontally. Apply $\\sum F_x = ma_x$: $30 = (10)a$, so $a = 3$ m/s². The box accelerates at 3 m/s² in the direction of the applied force.",
      },
    ],
    mcqs: [
      {
        question:
          "A 5 kg block is pulled with a net force of 20 N. What is its acceleration?",
        options: ["4 m/s²", "0.25 m/s²", "100 m/s²", "25 m/s²"],
        answerIndex: 0,
        explanation:
          "$a = F/m = 20/5 = 4$ m/s². Answer A is correct. B inverts the division (m/F). C multiplies F×m instead of dividing. D incorrectly adds the numbers.",
      },
      {
        question:
          "If the net force on an object is doubled and the mass is halved, the acceleration:",
        options: [
          "Remains the same",
          "Doubles",
          "Quadruples",
          "Is cut in half",
        ],
        answerIndex: 2,
        explanation:
          "Originally $a = F/m$. New acceleration: $a' = (2F)/(m/2) = 4F/m = 4a$. Answer C (quadruples) is correct. Doubling F doubles acceleration, and halving m doubles it again, for a total factor of 4. A, B, and D result from incorrect algebraic manipulation.",
      },
    ],
  },
  {
    id: "newtons-third-law",
    name: "Newton's Third Law (Action-Reaction Pairs)",
    unit: "Unit 2: Dynamics",
    unitNumber: 2,
    tags: ["MCQ frequent", "theorem"],
    summary:
      "For every action force, there is an equal and opposite reaction force; forces always occur in pairs acting on different objects.",
    formula: "\\vec{F}_{AB} = -\\vec{F}_{BA}",
    description:
      "Newton's Third Law states that forces always come in pairs: if object A exerts a force on object B, then object B exerts a force of equal magnitude and opposite direction on object A. These action-reaction pairs act on different objects, so they never cancel each other in a free-body diagram of a single object. This law is fundamental to understanding contact forces, tension in ropes, normal forces, and propulsion (e.g., rockets push gas backward, gas pushes rocket forward). A common mistake is trying to 'cancel' action-reaction pairs on the same FBD.",
    steps: [
      "Identify two interacting objects A and B.",
      "Determine the force that A exerts on B; call it $\\vec{F}_{AB}$.",
      "By Newton's Third Law, B exerts a force $\\vec{F}_{BA}$ on A with the same magnitude but opposite direction: $\\vec{F}_{BA} = -\\vec{F}_{AB}$.",
      "Remember these two forces act on different objects, so they appear on different free-body diagrams.",
      "Do NOT subtract or cancel action-reaction pairs when analyzing a single object's motion.",
    ],
    examples: [
      {
        problem:
          "A person pushes on a wall with a force of 50 N to the right. What force does the wall exert on the person?",
        solution:
          "By Newton's Third Law, the wall pushes back on the person with a force of 50 N to the left. The forces are equal in magnitude and opposite in direction, acting on different objects (person and wall). This is why the person might slide backward if on a low-friction surface.",
      },
    ],
    mcqs: [
      {
        question:
          "A hammer hits a nail with 100 N of force. What force does the nail exert on the hammer?",
        options: [
          "0 N",
          "50 N in the same direction",
          "100 N in the opposite direction",
          "200 N in the opposite direction",
        ],
        answerIndex: 2,
        explanation:
          "By Newton's Third Law, the nail exerts 100 N back on the hammer (equal magnitude, opposite direction). Answer C is correct. A violates the third law. B has the wrong direction. D incorrectly doubles the force.",
      },
      {
        question:
          "Why don't action-reaction pairs cancel each other when analyzing motion?",
        options: [
          "They act on different objects",
          "One force is always larger",
          "They occur at different times",
          "They are not really equal",
        ],
        answerIndex: 0,
        explanation:
          "Action-reaction pairs act on different objects, so they appear on different free-body diagrams and cannot cancel. Answer A is correct. B contradicts the third law (they are always equal magnitude). C is wrong (they are simultaneous). D contradicts the third law.",
      },
    ],
  },
  {
    id: "weight-near-surface",
    name: "Weight and Near-Surface Gravitational Force",
    unit: "Unit 2: Dynamics",
    unitNumber: 2,
    tags: ["MCQ frequent"],
    summary:
      "Weight is the gravitational force exerted on an object by Earth (or another planet), equal to the object's mass times the gravitational field strength.",
    formula: "F_g = mg",
    description:
      "Weight is the force of gravity acting on an object. Near Earth's surface, the gravitational field strength $g \\approx 9.8$ m/s² (or 10 m/s² for quick estimates) is essentially constant, so weight is simply mass times g. Weight is a force (measured in Newtons), not to be confused with mass (measured in kilograms). Weight always acts downward (toward Earth's center). An object's mass is the same everywhere in the universe, but its weight depends on the local gravitational field (e.g., weight on the Moon is about 1/6 that on Earth).",
    steps: [
      "Identify the object's mass $m$ in kilograms.",
      "Use the gravitational field strength: $g = 9.8$ m/s² on Earth's surface (or $g = 10$ m/s² for estimation).",
      "Calculate weight using $F_g = mg$.",
      "Remember weight is a force vector pointing downward; include it in the free-body diagram as an arrow pointing down.",
      "If the problem involves other planets or altitudes, use the appropriate value of $g$ for that location.",
    ],
    examples: [
      {
        problem:
          "A student has a mass of 60 kg. What is the student's weight on Earth?",
        solution:
          "Using $F_g = mg = (60)(9.8) = 588$ N. The student's weight is 588 N downward. (Using $g = 10$ m/s² gives 600 N, a quick estimate.)",
      },
    ],
    mcqs: [
      {
        question: "What is the weight of a 5 kg object on Earth?",
        options: ["5 N", "50 N", "49 N", "0.51 N"],
        answerIndex: 2,
        explanation:
          "$F_g = mg = (5)(9.8) = 49$ N. Answer C is correct. A confuses mass with weight. B uses $g = 10$ m/s² instead of 9.8. D inverts the calculation (m/g).",
      },
      {
        question: "An astronaut's mass is 80 kg on Earth. On the Moon (g = 1.6 m/s²), the astronaut's mass is:",
        options: ["80 kg", "128 kg", "50 kg", "13 kg"],
        answerIndex: 0,
        explanation:
          "Mass is an intrinsic property and does not change with location; it remains 80 kg. Answer A is correct. B, C, and D incorrectly calculate or adjust mass based on gravitational field, but mass is invariant. (Weight would change: $F_g = 80 \\times 1.6 = 128$ N on the Moon.)",
      },
    ],
  },
  {
    id: "normal-force",
    name: "Normal Force",
    unit: "Unit 2: Dynamics",
    unitNumber: 2,
    tags: ["MCQ frequent"],
    summary:
      "The normal force is the perpendicular contact force exerted by a surface on an object, preventing the object from passing through the surface.",
    description:
      "The normal force $F_N$ is the component of the contact force perpendicular to a surface. It arises from electromagnetic repulsion between atoms when objects are pressed together. The normal force adjusts its magnitude to satisfy Newton's laws: it is not always equal to the weight. For example, if an object is accelerating vertically or on an incline, the normal force differs from $mg$. On a horizontal surface with no vertical acceleration, $F_N = mg$. On an inclined plane, $F_N = mg \\cos\\theta$. The normal force can vary if additional forces (like a push downward or upward) are applied.",
    steps: [
      "Draw a free-body diagram and identify all forces acting perpendicular to the surface.",
      "Choose a coordinate system with one axis perpendicular to the surface (often the y-axis, or perpendicular to an incline).",
      "Apply Newton's Second Law in the perpendicular direction: $\\sum F_{\\perp} = ma_{\\perp}$.",
      "If there is no perpendicular acceleration ($a_{\\perp} = 0$), then $\\sum F_{\\perp} = 0$, so $F_N$ balances the perpendicular component of other forces.",
      "Solve for $F_N$ from the equilibrium or dynamics equation.",
    ],
    examples: [
      {
        problem:
          "A 10 kg box sits on a horizontal floor. An additional downward force of 20 N is applied to the top of the box. What is the normal force?",
        solution:
          "Vertical forces: weight $mg = (10)(9.8) = 98$ N down, applied force 20 N down, normal force $F_N$ up. No vertical acceleration: $F_N - 98 - 20 = 0$, so $F_N = 118$ N. The normal force exceeds the weight because of the additional downward force.",
      },
    ],
    mcqs: [
      {
        question:
          "A book rests on a horizontal table. The normal force is equal to:",
        options: [
          "The book's mass",
          "The book's weight",
          "Zero",
          "Twice the book's weight",
        ],
        answerIndex: 1,
        explanation:
          "With no vertical acceleration and no other vertical forces, $F_N = mg$ (the book's weight). Answer B is correct. A confuses mass with weight. C ignores the contact force. D arbitrarily doubles the weight.",
      },
      {
        question:
          "An object on an incline at angle $\\theta$ has weight $mg$. The normal force is:",
        options: [
          "$mg$",
          "$mg\\sin\\theta$",
          "$mg\\cos\\theta$",
          "$mg\\tan\\theta$",
        ],
        answerIndex: 2,
        explanation:
          "The component of weight perpendicular to the incline is $mg\\cos\\theta$, which the normal force balances (assuming no perpendicular acceleration). Answer C is correct. A ignores the angle. B uses the wrong trig function (parallel component). D uses tangent, which has no physical meaning here.",
      },
    ],
  },
  {
    id: "static-kinetic-friction",
    name: "Static and Kinetic Friction",
    unit: "Unit 2: Dynamics",
    unitNumber: 2,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "Friction is a force parallel to a surface that opposes motion or attempted motion; static friction prevents sliding, kinetic friction opposes sliding.",
    formula: "f_s \\le \\mu_s F_N,\\quad f_k = \\mu_k F_N",
    description:
      "Friction arises from microscopic interactions between surfaces. Static friction $f_s$ acts when surfaces are not sliding relative to each other; it can vary from zero up to a maximum value $\\mu_s F_N$, where $\\mu_s$ is the coefficient of static friction. Kinetic friction $f_k$ acts when surfaces slide past each other and has constant magnitude $\\mu_k F_N$, where $\\mu_k$ is the coefficient of kinetic friction (typically $\\mu_k < \\mu_s$). Friction always opposes the direction of motion (kinetic) or the direction of impending motion (static). Friction depends on the normal force and the nature of the surfaces, not the contact area or sliding speed (in the simple model).",
    steps: [
      "Determine whether the object is stationary (static friction), sliding (kinetic friction), or on the verge of sliding (maximum static friction).",
      "Find the normal force $F_N$ from the perpendicular equilibrium or dynamics equation.",
      "For static friction: $f_s \\le \\mu_s F_N$. Use $f_s$ as unknown if stationary, or $f_s = \\mu_s F_N$ at the threshold of sliding.",
      "For kinetic friction: $f_k = \\mu_k F_N$ (constant magnitude), always opposing the direction of motion.",
      "Include friction in the net force equation parallel to the surface: $\\sum F_{\\parallel} = ma$ (with friction opposing motion).",
      "Solve for the unknown (often acceleration or the maximum static friction force).",
    ],
    examples: [
      {
        problem:
          "A 5 kg box is at rest on a horizontal floor ($\\mu_s = 0.4$, $\\mu_k = 0.3$). A horizontal force of 15 N is applied. Does the box move? If so, what is its acceleration?",
        solution:
          "Normal force: $F_N = mg = 49$ N. Maximum static friction: $f_{s,max} = \\mu_s F_N = 0.4 \\times 49 = 19.6$ N. The applied force (15 N) is less than $f_{s,max}$, so the box remains at rest. Static friction adjusts to 15 N to balance the applied force. Acceleration is 0.",
      },
    ],
    mcqs: [
      {
        question:
          "The coefficient of static friction is usually _____ the coefficient of kinetic friction.",
        options: [
          "Less than",
          "Equal to",
          "Greater than",
          "Unrelated to",
        ],
        answerIndex: 2,
        explanation:
          "It is harder to start sliding than to keep sliding, so $\\mu_s > \\mu_k$ typically. Answer C is correct. A inverts the relationship. B is rarely true. D ignores the physical relationship.",
      },
      {
        question:
          "A 10 kg crate slides across a floor with $\\mu_k = 0.2$. What is the kinetic friction force?",
        options: ["2 N", "20 N", "10 N", "19.6 N"],
        answerIndex: 3,
        explanation:
          "$F_N = mg = 98$ N. $f_k = \\mu_k F_N = 0.2 \\times 98 = 19.6$ N. Answer D is correct. A uses $\\mu_k \\times m$ instead of $\\mu_k \\times F_N$. B uses $\\mu_k \\times 100$ (rounding error). C confuses mass with force.",
      },
    ],
  },
  {
    id: "hookes-law",
    name: "Hooke's Law / Spring Force",
    unit: "Unit 2: Dynamics",
    unitNumber: 2,
    tags: ["MCQ frequent"],
    summary:
      "The restoring force exerted by an ideal spring is proportional to its displacement from equilibrium, pointing toward the equilibrium position.",
    formula: "F_s = kx",
    description:
      "Hooke's Law describes the force exerted by an ideal spring: $F_s = -kx$ (vector form) or $F_s = kx$ (magnitude), where $k$ is the spring constant (in N/m) and $x$ is the displacement from the spring's natural (unstretched) length. The minus sign in the vector form indicates the force is a restoring force, always directed toward equilibrium. A stiffer spring has a larger $k$. Springs obey Hooke's Law only for small to moderate displacements; extreme stretching or compression can cause nonlinear behavior or permanent deformation. This law is fundamental to simple harmonic motion and elastic potential energy.",
    steps: [
      "Identify the spring's natural (relaxed) length $L_0$ and the spring constant $k$ (given or to be found).",
      "Measure the displacement $x$ from the natural length: $x = L - L_0$ (positive if stretched, negative if compressed).",
      "Calculate the magnitude of the spring force: $F_s = k|x|$.",
      "Determine the direction: the spring force always points toward the natural length (opposite the direction of displacement).",
      "Include $F_s$ in the free-body diagram and apply Newton's Second Law.",
    ],
    examples: [
      {
        problem:
          "A spring with $k = 200$ N/m is stretched 0.10 m from its natural length. What is the magnitude of the spring force?",
        solution:
          "Using Hooke's Law: $F_s = kx = 200 \\times 0.10 = 20$ N. The spring exerts a 20 N restoring force directed back toward its natural length (opposing the stretch).",
      },
    ],
    mcqs: [
      {
        question:
          "A spring with spring constant 100 N/m is compressed by 0.05 m. What is the spring force magnitude?",
        options: ["5 N", "0.5 N", "2000 N", "500 N"],
        answerIndex: 0,
        explanation:
          "$F_s = kx = 100 \\times 0.05 = 5$ N. Answer A is correct. B is a decimal error. C multiplies k and x incorrectly. D confuses multiplication and division.",
      },
      {
        question:
          "If the displacement of a spring from its natural length is doubled, the spring force:",
        options: [
          "Remains the same",
          "Doubles",
          "Quadruples",
          "Is halved",
        ],
        answerIndex: 1,
        explanation:
          "$F_s = kx$, so if $x$ doubles, $F_s$ doubles (linear relationship). Answer B is correct. A ignores the proportionality. C confuses with elastic potential energy (which is proportional to $x^2$). D inverts the relationship.",
      },
    ],
  },
  {
    id: "multi-body-systems",
    name: "Multi-Body Systems and Tension",
    unit: "Unit 2: Dynamics",
    unitNumber: 2,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "Multi-body systems involve multiple connected objects; tension in massless ropes is uniform, and each object's motion is analyzed separately using free-body diagrams.",
    description:
      "Multi-body systems (e.g., two blocks connected by a rope, an Atwood machine) require separate free-body diagrams for each object. Tension in a massless, inextensible rope is the same throughout the rope and pulls equally on both ends (by Newton's Third Law). If the rope has mass or the pulley has friction, tension can vary. Objects connected by a rope have accelerations related by the constraint that the rope length is constant (e.g., if one block accelerates up, the other accelerates down by the same amount). Apply Newton's Second Law separately to each object, then solve the resulting system of equations.",
    steps: [
      "Draw a separate free-body diagram for each object in the system.",
      "Identify constraint relationships: e.g., if connected by a rope, $a_1 = a_2$ (same magnitude, possibly opposite directions).",
      "Write Newton's Second Law for each object: $\\sum F = ma$.",
      "For massless ropes over massless, frictionless pulleys, tension $T$ is the same throughout.",
      "Solve the system of equations for unknowns (tension, acceleration, etc.).",
      "Check units and physical reasonableness of the answer.",
    ],
    examples: [
      {
        problem:
          "Two blocks, $m_1 = 2$ kg and $m_2 = 3$ kg, are connected by a massless rope on a frictionless horizontal surface. A force of 10 N pulls $m_1$ to the right. Find the tension in the rope and the acceleration of the system.",
        solution:
          "System acceleration: $a = F/(m_1 + m_2) = 10/5 = 2$ m/s². For $m_2$: $\\sum F = T = m_2 a = 3 \\times 2 = 6$ N. The tension is 6 N and the system accelerates at 2 m/s².",
      },
    ],
    mcqs: [
      {
        question:
          "Two masses are connected by a massless rope over a massless, frictionless pulley (Atwood machine). If $m_1 = 4$ kg and $m_2 = 6$ kg, which statement is correct?",
        options: [
          "The tension equals the weight of the heavier mass",
          "The tension is the same on both sides of the pulley",
          "The tension is zero",
          "The lighter mass does not accelerate",
        ],
        answerIndex: 1,
        explanation:
          "For a massless rope over a massless, frictionless pulley, tension is uniform throughout. Answer B is correct. A is wrong (tension is less than the heavier mass's weight). C is absurd. D is wrong (both masses accelerate).",
      },
      {
        question:
          "In a two-block system accelerating together, the tension in the connecting rope is:",
        options: [
          "Equal to the applied force",
          "Equal to the total weight",
          "Less than the applied force (if the force pulls the front block)",
          "Zero",
        ],
        answerIndex: 2,
        explanation:
          "The tension accelerates only the rear block, so it is less than the total applied force (which accelerates both blocks). Answer C is correct. A is true only if the force pulls the rear block. B is unrelated. D is wrong.",
      },
    ],
  },
  {
    id: "inclined-plane-forces",
    name: "Force Analysis on Inclined Planes",
    unit: "Unit 2: Dynamics",
    unitNumber: 2,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "On an inclined plane, forces are resolved into components parallel and perpendicular to the surface, with weight split into $mg\\sin\\theta$ (parallel) and $mg\\cos\\theta$ (perpendicular).",
    description:
      "Analyzing motion on an inclined plane requires a rotated coordinate system: one axis parallel to the incline (along the slope) and one perpendicular to it. The weight $mg$ is decomposed into two components: $mg\\sin\\theta$ parallel to the incline (pulling the object down the slope) and $mg\\cos\\theta$ perpendicular to the incline (pressed into the surface). The normal force $F_N = mg\\cos\\theta$ (if there is no perpendicular acceleration). Friction, if present, acts parallel to the incline, opposing motion or impending motion. This setup is essential for problems involving sliding, rolling, or objects at rest on ramps.",
    steps: [
      "Draw a free-body diagram with the object on the incline.",
      "Choose axes: x-axis parallel to incline (positive up or down the slope as convenient), y-axis perpendicular to incline.",
      "Resolve weight into components: $F_{\\parallel} = mg\\sin\\theta$ (down the slope), $F_{\\perp} = mg\\cos\\theta$ (into the slope).",
      "Write $\\sum F_y = 0$ (if no perpendicular acceleration): $F_N - mg\\cos\\theta = 0$, so $F_N = mg\\cos\\theta$.",
      "Write $\\sum F_x = ma_x$ (parallel direction), including friction if present: $mg\\sin\\theta - f = ma$ (if sliding down).",
      "Solve for acceleration or other unknowns.",
    ],
    examples: [
      {
        problem:
          "A 5 kg block slides down a frictionless incline at $30^\\circ$. What is the block's acceleration?",
        solution:
          "Parallel component of weight: $F_{\\parallel} = mg\\sin\\theta = 5 \\times 9.8 \\times \\sin(30^\\circ) = 49 \\times 0.5 = 24.5$ N. No friction, so $\\sum F_{\\parallel} = mg\\sin\\theta = ma$. Thus $a = g\\sin\\theta = 9.8 \\times 0.5 = 4.9$ m/s² down the incline.",
      },
    ],
    mcqs: [
      {
        question:
          "On a frictionless incline at angle $\\theta$, the acceleration down the slope is:",
        options: ["$g$", "$g\\cos\\theta$", "$g\\sin\\theta$", "$g\\tan\\theta$"],
        answerIndex: 2,
        explanation:
          "The net force parallel to the incline is $mg\\sin\\theta$, so $a = g\\sin\\theta$. Answer C is correct. A ignores the incline. B uses the wrong component. D uses tangent, which is not relevant here.",
      },
      {
        question:
          "A block rests on an incline at $45^\\circ$. The normal force is approximately:",
        options: [
          "Equal to $mg$",
          "Equal to $mg/\\sqrt{2}$",
          "Equal to $mg/2$",
          "Zero",
        ],
        answerIndex: 1,
        explanation:
          "$F_N = mg\\cos(45^\\circ) = mg/\\sqrt{2} \\approx 0.707mg$. Answer B is correct. A ignores the angle. C incorrectly uses sine. D is absurd.",
      },
    ],
  },
];

export default dynamicsTopics;
