import type { Topic } from "@/types";

export const kinematicsTopics: Topic[] = [
  {
    id: "kinematics-scalars-vectors",
    name: "Scalars and Vectors in One Dimension",
    unit: "Unit 1: Kinematics",
    unitNumber: 1,
    tags: ["MCQ frequent"],
    summary:
      "Scalars have magnitude only, while vectors have both magnitude and direction.",
    description:
      "Physical quantities are classified as either scalars or vectors. Scalars, such as time, distance, speed, and mass, are fully described by a magnitude (a number with a unit). Vectors, such as displacement, velocity, and acceleration, require both a magnitude and a direction for complete specification. Understanding this distinction is essential for correctly applying kinematic equations and interpreting motion.",
    steps: [
      "Identify the physical quantity being described (e.g., velocity, distance, time).",
      "Determine if the quantity requires only magnitude (scalar) or both magnitude and direction (vector).",
      "For vectors, specify direction using a coordinate system (e.g., positive/negative along an axis) or angle.",
      "When performing calculations, treat scalars as ordinary numbers and vectors according to vector algebra rules (e.g., component addition).",
    ],
    examples: [
      {
        problem:
          "A car travels 50 km north, then 30 km south. What is the total distance traveled? What is the displacement?",
        solution:
          "Distance (scalar) is the total path length: $50 + 30 = 80$ km. Displacement (vector) is the straight-line distance from start to finish: $50 - 30 = 20$ km north. Distance ignores direction; displacement accounts for direction.",
      },
    ],
    mcqs: [
      {
        question: "Which of the following is a vector quantity?",
        options: ["Speed", "Distance", "Time", "Velocity"],
        answerIndex: 3,
        explanation:
          "Velocity is a vector because it specifies both magnitude and direction (e.g., 50 m/s north). Speed (A) is the magnitude of velocity and has no direction. Distance (B) and time (C) are also scalars with magnitude only.",
      },
      {
        question:
          "A student walks 5 m east, then 5 m west. What is the total distance and displacement?",
        options: [
          "Distance = 0 m, Displacement = 0 m",
          "Distance = 10 m, Displacement = 0 m",
          "Distance = 0 m, Displacement = 10 m",
          "Distance = 10 m, Displacement = 10 m",
        ],
        answerIndex: 1,
        explanation:
          "Distance is the total path length: $5 + 5 = 10$ m. Displacement is the net change in position: $5 - 5 = 0$ m (the student returns to the starting point). A incorrectly treats distance as displacement. C and D confuse the two concepts.",
      },
    ],
  },
  {
    id: "kinematics-displacement",
    name: "Displacement and Distance",
    unit: "Unit 1: Kinematics",
    unitNumber: 1,
    tags: ["MCQ frequent"],
    summary:
      "Displacement is the vector change in position; distance is the scalar total path length.",
    formula: "\\Delta x = x_f - x_i",
    description:
      "Displacement measures the change in an object's position and is a vector quantity with direction. It is calculated as final position minus initial position: $\\Delta x = x_f - x_i$. Distance, in contrast, is the total length of the path traveled and is always positive or zero. An object can travel a large distance while having small or zero displacement if it returns near its starting point.",
    steps: [
      "Identify the initial position $x_i$ and final position $x_f$ of the object.",
      "Calculate displacement: $\\Delta x = x_f - x_i$. Note that displacement can be positive, negative, or zero.",
      "For distance, sum the absolute values of all segments of motion traveled.",
      "Interpret the sign of displacement: positive means net motion in the positive direction, negative means net motion in the negative direction.",
    ],
    examples: [
      {
        problem:
          "A runner starts at position $x_i = 10$ m and finishes at position $x_f = 35$ m. What is the displacement and distance if the runner moved in a straight line?",
        solution:
          "Displacement: $\\Delta x = x_f - x_i = 35 - 10 = 25$ m (positive direction). If the motion was straight-line, distance equals the magnitude of displacement: 25 m. If the path was not straight, distance would be the total path length, but for straight-line motion they coincide.",
      },
    ],
    mcqs: [
      {
        question:
          "An object moves from position $x = 5$ m to $x = -3$ m. What is its displacement?",
        options: ["-8 m", "8 m", "-2 m", "2 m"],
        answerIndex: 0,
        explanation:
          "Displacement $\\Delta x = x_f - x_i = -3 - 5 = -8$ m. The negative sign indicates motion in the negative direction. B (8 m) is the magnitude but ignores direction. C and D are arithmetic errors.",
      },
      {
        question:
          "A car travels 100 m forward, then 40 m backward. What is the total distance and net displacement?",
        options: [
          "Distance = 140 m, Displacement = 60 m forward",
          "Distance = 60 m, Displacement = 60 m forward",
          "Distance = 100 m, Displacement = 140 m forward",
          "Distance = 140 m, Displacement = 140 m forward",
        ],
        answerIndex: 0,
        explanation:
          "Distance is the sum of all path lengths: $100 + 40 = 140$ m. Displacement is the net change: $100 - 40 = 60$ m forward. B incorrectly uses displacement as distance. C and D both mix up the definitions.",
      },
    ],
  },
  {
    id: "kinematics-avg-velocity",
    name: "Average Velocity and Speed",
    unit: "Unit 1: Kinematics",
    unitNumber: 1,
    tags: ["MCQ frequent"],
    summary:
      "Average velocity is displacement over time; average speed is distance over time.",
    formula: "\\bar{v} = \\frac{\\Delta x}{\\Delta t}",
    description:
      "Average velocity is the rate of change of position (displacement divided by time interval) and is a vector. It can be positive, negative, or zero depending on the direction of displacement. Average speed is the scalar total distance divided by time and is always positive or zero. While velocity tells you how fast and in what direction an object's position changes, speed only tells you how fast, ignoring direction.",
    steps: [
      "Identify the displacement $\\Delta x$ and the time interval $\\Delta t$.",
      "Calculate average velocity: $\\bar{v} = \\frac{\\Delta x}{\\Delta t}$.",
      "For average speed, calculate the total distance traveled and divide by $\\Delta t$: $\\bar{s} = \\frac{\\text{distance}}{\\Delta t}$.",
      "Interpret the sign: positive velocity means motion in the positive direction; negative velocity means motion in the negative direction.",
    ],
    examples: [
      {
        problem:
          "A cyclist travels 60 m east in 4 s, then 20 m west in 2 s. Find the average velocity and average speed.",
        solution:
          "Total displacement: $60 - 20 = 40$ m east. Total time: $4 + 2 = 6$ s. Average velocity: $\\bar{v} = \\frac{40}{6} \\approx 6.7$ m/s east. Total distance: $60 + 20 = 80$ m. Average speed: $\\bar{s} = \\frac{80}{6} \\approx 13.3$ m/s.",
      },
    ],
    mcqs: [
      {
        question:
          "Which statement correctly distinguishes average velocity from average speed?",
        options: [
          "Average velocity is always greater than average speed",
          "Average velocity is a vector; average speed is a scalar",
          "Average speed can be negative",
          "Average velocity cannot be zero unless the object is at rest throughout",
        ],
        answerIndex: 1,
        explanation:
          "Average velocity is a vector (magnitude and direction); average speed is a scalar (magnitude only). A is wrong because speed can be greater than or equal to the magnitude of velocity. C is wrong because speed is always non-negative. D is wrong because velocity can be zero if displacement is zero, even if the object moved (e.g., round trip).",
      },
      {
        question:
          "A runner completes one lap around a 400 m track in 80 s. What is the average velocity and average speed?",
        options: [
          "Velocity = 5 m/s, Speed = 5 m/s",
          "Velocity = 0 m/s, Speed = 5 m/s",
          "Velocity = 5 m/s, Speed = 0 m/s",
          "Velocity = 0 m/s, Speed = 0 m/s",
        ],
        answerIndex: 1,
        explanation:
          "Displacement after one lap is zero (start and finish at the same point), so average velocity $= 0$ m/s. Total distance is 400 m, so average speed $= \\frac{400}{80} = 5$ m/s. A incorrectly equates velocity and speed. C and D are both incorrect.",
      },
    ],
  },
  {
    id: "kinematics-acceleration",
    name: "Acceleration",
    unit: "Unit 1: Kinematics",
    unitNumber: 1,
    tags: ["MCQ frequent"],
    summary:
      "Acceleration is the rate of change of velocity and is a vector quantity.",
    formula: "a = \\frac{\\Delta v}{\\Delta t}",
    description:
      "Acceleration measures how quickly an object's velocity changes and is defined as the change in velocity divided by the time interval: $a = \\frac{\\Delta v}{\\Delta t} = \\frac{v_f - v_i}{\\Delta t}$. It is a vector, so both magnitude and direction matter. Positive acceleration means velocity is increasing in the positive direction (or decreasing in the negative direction), while negative acceleration (often called deceleration or retardation) means velocity is decreasing in the positive direction. Constant acceleration is the foundation of the kinematic equations.",
    steps: [
      "Identify the initial velocity $v_i$ and final velocity $v_f$ over the time interval $\\Delta t$.",
      "Calculate the change in velocity: $\\Delta v = v_f - v_i$.",
      "Divide by the time interval to find acceleration: $a = \\frac{\\Delta v}{\\Delta t}$.",
      "Interpret the sign: if acceleration and velocity have the same sign, the object speeds up; if opposite signs, it slows down.",
    ],
    examples: [
      {
        problem:
          "A car accelerates from rest to 20 m/s in 4 seconds. What is its average acceleration?",
        solution:
          "Initial velocity $v_i = 0$ m/s, final velocity $v_f = 20$ m/s, time $\\Delta t = 4$ s. Acceleration: $a = \\frac{v_f - v_i}{\\Delta t} = \\frac{20 - 0}{4} = 5$ m/s$^2$.",
      },
    ],
    mcqs: [
      {
        question:
          "An object moving in the positive direction is slowing down. What can be said about its acceleration?",
        options: [
          "Acceleration is positive",
          "Acceleration is negative",
          "Acceleration is zero",
          "Not enough information",
        ],
        answerIndex: 1,
        explanation:
          "If the object is moving in the positive direction (positive velocity) and slowing down, its velocity is becoming less positive, meaning $\\Delta v$ is negative. Therefore acceleration is negative. A would mean speeding up. C would mean constant velocity. D is incorrect because direction and speed change fully determine acceleration's sign.",
      },
      {
        question:
          "A ball's velocity changes from 10 m/s to 30 m/s in 5 seconds. What is its average acceleration?",
        options: ["2 m/s²", "4 m/s²", "5 m/s²", "20 m/s²"],
        answerIndex: 1,
        explanation:
          "Acceleration $a = \\frac{v_f - v_i}{\\Delta t} = \\frac{30 - 10}{5} = \\frac{20}{5} = 4$ m/s$^2$. A results from dividing 10 by 5. C results from dividing 30 by 6. D is $\\Delta v$ without dividing by time.",
      },
    ],
  },
  {
    id: "kinematics-eq-vt",
    name: "Kinematic Equation 1 (v-t)",
    unit: "Unit 1: Kinematics",
    unitNumber: 1,
    tags: ["MCQ frequent"],
    summary:
      "Relates final velocity to initial velocity, acceleration, and time.",
    formula: "v = v_0 + at",
    graph: {
      type: "fns",
      fns: [
        { fn: "1 + 0.5*x", color: "blue", label: "v(t) = v₀ + at" },
      ],
      xDomain: [-1, 5],
      yDomain: [-0.5, 4],
      note: "Linear velocity vs time for constant acceleration (v₀=1, a=0.5). Slope = acceleration.",
    },
    description:
      "This equation relates the final velocity $v$ of an object to its initial velocity $v_0$, constant acceleration $a$, and elapsed time $t$. It is derived from the definition of acceleration and applies only when acceleration is constant. Use this equation when displacement is not needed or not given. The equation shows that velocity changes linearly with time under constant acceleration.",
    steps: [
      "Identify the known quantities: initial velocity $v_0$, acceleration $a$, and time $t$.",
      "Determine what you are solving for (typically final velocity $v$).",
      "Substitute the known values into the equation $v = v_0 + at$.",
      "Solve algebraically for the unknown variable.",
      "Check units and the physical reasonableness of your answer (e.g., does the sign make sense?).",
    ],
    examples: [
      {
        problem:
          "A skateboarder starts with a velocity of 2 m/s and accelerates at 1.5 m/s² for 4 seconds. What is the final velocity?",
        solution:
          "Given: $v_0 = 2$ m/s, $a = 1.5$ m/s$^2$, $t = 4$ s. Using $v = v_0 + at$: $v = 2 + (1.5)(4) = 2 + 6 = 8$ m/s.",
      },
    ],
    mcqs: [
      {
        question:
          "Which kinematic equation should you use when displacement is unknown and you need to find final velocity?",
        options: [
          "$x = x_0 + v_0 t + \\frac{1}{2}at^2$",
          "$v = v_0 + at$",
          "$v^2 = v_0^2 + 2a\\Delta x$",
          "$\\bar{v} = \\frac{\\Delta x}{\\Delta t}$",
        ],
        answerIndex: 1,
        explanation:
          "Equation B ($v = v_0 + at$) does not involve displacement and directly relates velocity, acceleration, and time. A requires displacement. C requires displacement. D defines average velocity but is not a kinematic equation for constant acceleration.",
      },
      {
        question:
          "A car traveling at 15 m/s decelerates at -3 m/s² for 4 seconds. What is its final velocity?",
        options: ["3 m/s", "12 m/s", "27 m/s", "0 m/s"],
        answerIndex: 0,
        explanation:
          "Using $v = v_0 + at$: $v = 15 + (-3)(4) = 15 - 12 = 3$ m/s. B results from subtracting acceleration alone. C results from adding instead of subtracting. D would be correct only if time were 5 s.",
      },
    ],
  },
  {
    id: "kinematics-eq-xt",
    name: "Kinematic Equation 2 (x-t)",
    unit: "Unit 1: Kinematics",
    unitNumber: 1,
    tags: ["MCQ frequent"],
    summary:
      "Calculates position as a function of time under constant acceleration.",
    formula: "x = x_0 + v_0 t + \\frac{1}{2}at^2",
    graph: {
      type: "fns",
      fns: [
        { fn: "x + 0.25*x*x", color: "blue", label: "x(t) = v₀t + ½at²" },
      ],
      xDomain: [-0.5, 4],
      yDomain: [-0.5, 8],
      note: "Parabolic position vs time for constant acceleration (v₀=1, a=0.5). Concave up when a > 0.",
    },
    description:
      "This equation gives the position $x$ of an object at time $t$ when it starts at position $x_0$ with initial velocity $v_0$ and undergoes constant acceleration $a$. The first term is the initial position, the second term is the displacement due to constant initial velocity, and the third term accounts for the additional displacement due to acceleration. Use this equation when you need to find displacement or time and do not have final velocity.",
    steps: [
      "Identify initial position $x_0$, initial velocity $v_0$, acceleration $a$, and time $t$.",
      "Substitute these values into the equation $x = x_0 + v_0 t + \\frac{1}{2}at^2$.",
      "Perform the arithmetic: calculate the constant velocity term ($v_0 t$) and the acceleration term ($\\frac{1}{2}at^2$) separately, then sum.",
      "If solving for time, rearrange into a quadratic equation $\\frac{1}{2}at^2 + v_0 t + (x_0 - x) = 0$ and use the quadratic formula.",
      "Check that the result is physically meaningful (e.g., positive time, correct direction).",
    ],
    examples: [
      {
        problem:
          "A ball is dropped from rest ($v_0 = 0$) from a height of 20 m. How long does it take to reach the ground? (Use $g = 10$ m/s²).",
        solution:
          "Taking downward as positive: $x_0 = 0$, $x = 20$ m, $v_0 = 0$, $a = 10$ m/s$^2$. Using $x = x_0 + v_0 t + \\frac{1}{2}at^2$: $20 = 0 + 0 + \\frac{1}{2}(10)t^2 \\Rightarrow 20 = 5t^2 \\Rightarrow t^2 = 4 \\Rightarrow t = 2$ s.",
      },
    ],
    mcqs: [
      {
        question:
          "Which term in the equation $x = x_0 + v_0 t + \\frac{1}{2}at^2$ represents the displacement due to constant initial velocity?",
        options: ["$x_0$", "$v_0 t$", "$\\frac{1}{2}at^2$", "$v_0 + at$"],
        answerIndex: 1,
        explanation:
          "$v_0 t$ represents the displacement that would occur if velocity remained constant at $v_0$. A ($x_0$) is the initial position, not displacement. C ($\\frac{1}{2}at^2$) is the additional displacement due to acceleration. D is not a term in the equation.",
      },
      {
        question:
          "A rocket starts from rest and accelerates at 4 m/s² for 5 seconds. How far does it travel?",
        options: ["20 m", "50 m", "100 m", "40 m"],
        answerIndex: 1,
        explanation:
          "Given $x_0 = 0$, $v_0 = 0$, $a = 4$ m/s$^2$, $t = 5$ s. Using $x = x_0 + v_0 t + \\frac{1}{2}at^2$: $x = 0 + 0 + \\frac{1}{2}(4)(5)^2 = 2(25) = 50$ m. A results from computing $at$ instead of $\\frac{1}{2}at^2$. C results from computing $at^2$ without the $\\frac{1}{2}$. D is $at$.",
      },
    ],
  },
  {
    id: "kinematics-eq-vx",
    name: "Kinematic Equation 3 (v²-x)",
    unit: "Unit 1: Kinematics",
    unitNumber: 1,
    tags: ["MCQ frequent"],
    summary:
      "Relates final velocity to initial velocity, acceleration, and displacement without time.",
    formula: "v^2 = v_0^2 + 2a\\Delta x",
    description:
      "This equation connects the squares of initial and final velocities with acceleration and displacement, eliminating time as a variable. It is particularly useful when time is neither given nor required. The equation is derived by combining $v = v_0 + at$ and $\\Delta x = v_0 t + \\frac{1}{2}at^2$. Use this when you need to find velocity or displacement and time is unknown.",
    steps: [
      "Identify initial velocity $v_0$, final velocity $v$, acceleration $a$, and displacement $\\Delta x$.",
      "Substitute the known quantities into $v^2 = v_0^2 + 2a\\Delta x$.",
      "If solving for velocity, take the square root: $v = \\pm\\sqrt{v_0^2 + 2a\\Delta x}$. Choose the sign based on the direction of motion.",
      "If solving for acceleration or displacement, rearrange algebraically.",
      "Verify units and physical sense (e.g., velocity squared must be non-negative).",
    ],
    examples: [
      {
        problem:
          "A car accelerates from 10 m/s to 30 m/s over a distance of 100 m. What is the acceleration?",
        solution:
          "Given: $v_0 = 10$ m/s, $v = 30$ m/s, $\\Delta x = 100$ m. Using $v^2 = v_0^2 + 2a\\Delta x$: $(30)^2 = (10)^2 + 2a(100) \\Rightarrow 900 = 100 + 200a \\Rightarrow 800 = 200a \\Rightarrow a = 4$ m/s$^2$.",
      },
    ],
    mcqs: [
      {
        question:
          "When is the equation $v^2 = v_0^2 + 2a\\Delta x$ most useful?",
        options: [
          "When time is given",
          "When time is unknown or not needed",
          "When acceleration is zero",
          "When displacement is zero",
        ],
        answerIndex: 1,
        explanation:
          "This equation does not involve time, making it ideal when time is unknown or not required. A would favor $v = v_0 + at$. C (zero acceleration) makes all kinematic equations trivial. D (zero displacement) implies $v = v_0$, so any equation works but this one is not uniquely useful.",
      },
      {
        question:
          "An object starting from rest travels 50 m with an acceleration of 2 m/s². What is its final velocity?",
        options: ["10 m/s", "14.1 m/s", "20 m/s", "100 m/s"],
        answerIndex: 1,
        explanation:
          "Given $v_0 = 0$, $a = 2$ m/s$^2$, $\\Delta x = 50$ m. Using $v^2 = v_0^2 + 2a\\Delta x$: $v^2 = 0 + 2(2)(50) = 200 \\Rightarrow v = \\sqrt{200} \\approx 14.1$ m/s. A comes from incorrectly computing $v = \\sqrt{100}$. C comes from $v = at$ using $t = 10$ s (but time is not 10 s). D is $v^2$ without taking the square root.",
      },
    ],
  },
  {
    id: "motion-graphs",
    name: "Interpreting Motion Graphs (x-t, v-t, a-t)",
    unit: "Unit 1: Kinematics",
    unitNumber: 1,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "Motion graphs visually represent position, velocity, and acceleration as functions of time, with slopes and areas providing key kinematic information.",
    graph: {
      type: "fns",
      fns: [
        { fn: "0.5 * x * x", color: "blue", label: "x(t) = ½at²" },
        { fn: "x", color: "green", label: "v(t) = at" },
        { fn: "1", color: "orange", label: "a(t) = const" },
      ],
      xDomain: [0, 3],
      yDomain: [-0.5, 4.5],
      note: "Constant acceleration (a=1, v₀=0): position is parabolic, velocity is linear, acceleration is constant.",
    },
    description:
      "Position-time (x-t) graphs plot position vs. time; the slope at any point is the instantaneous velocity. Velocity-time (v-t) graphs plot velocity vs. time; the slope is acceleration, and the area under the curve is displacement. Acceleration-time (a-t) graphs plot acceleration vs. time; the area under the curve is the change in velocity. Understanding these relationships allows you to extract complete motion information from graphs and is essential for FRQs.",
    steps: [
      "For a position-time graph: determine velocity by finding the slope (rise over run). Constant slope means constant velocity; changing slope means acceleration.",
      "For a velocity-time graph: determine acceleration from the slope. Calculate displacement as the area under the curve (use geometry for straight segments).",
      "For an acceleration-time graph: determine the change in velocity as the area under the curve.",
      "Identify key features: horizontal lines (constant value), zero crossings (direction changes), and slope sign (increasing or decreasing).",
    ],
    examples: [
      {
        problem:
          "A velocity-time graph shows a straight line from $(0, 5)$ m/s to $(4, 15)$ m/s. Find the acceleration and displacement.",
        solution:
          "Acceleration is the slope: $a = \\frac{\\Delta v}{\\Delta t} = \\frac{15 - 5}{4 - 0} = \\frac{10}{4} = 2.5$ m/s$^2$. Displacement is the area under the line: a trapezoid with bases 5 and 15, height 4: $A = \\frac{1}{2}(5 + 15)(4) = \\frac{1}{2}(20)(4) = 40$ m.",
      },
    ],
    mcqs: [
      {
        question:
          "On a position-time graph, what does a horizontal line segment represent?",
        options: [
          "Constant velocity",
          "Zero velocity (object at rest)",
          "Constant acceleration",
          "Zero acceleration",
        ],
        answerIndex: 1,
        explanation:
          "A horizontal line on a position-time graph has zero slope, meaning velocity is zero (the object is at rest). A would be a sloped line with constant slope. C and D refer to acceleration, which is not directly visible on a position-time graph (it appears as curvature).",
      },
      {
        question:
          "The area under a velocity-time graph between two times represents:",
        options: [
          "Acceleration",
          "Change in velocity",
          "Displacement",
          "Position",
        ],
        answerIndex: 2,
        explanation:
          "The area under a velocity-time graph equals displacement $\\Delta x$. A (acceleration) is the slope of the v-t graph. B (change in velocity) is the area under an acceleration-time graph. D (position) is not directly represented by area; it requires integrating displacement from an initial position.",
      },
    ],
  },
  {
    id: "free-fall",
    name: "Free Fall and Acceleration Due to Gravity",
    unit: "Unit 1: Kinematics",
    unitNumber: 1,
    tags: ["MCQ frequent"],
    summary:
      "Objects in free fall experience constant downward acceleration due to gravity, approximately 9.8 m/s².",
    formula: "a = g = 9.8\\ \\text{m/s}^2",
    description:
      "Free fall is motion under the influence of gravity alone, with no air resistance. Near Earth's surface, all objects in free fall experience the same constant downward acceleration $g \\approx 9.8$ m/s$^2$ (or 10 m/s$^2$ for simpler calculations), regardless of mass. This means the kinematic equations apply directly with $a = g$ (or $a = -g$ if upward is chosen as positive). Objects thrown upward also undergo free fall on their way up and down.",
    steps: [
      "Choose a coordinate system: typically upward is positive, so $a = -g = -9.8$ m/s$^2$, or downward is positive, so $a = +g = +9.8$ m/s$^2$.",
      "Identify initial conditions: initial position $y_0$, initial velocity $v_0$ (up or down), and time $t$.",
      "Apply the kinematic equations with $a = \\pm g$. For example, $v = v_0 - gt$ (if up is positive) or $y = y_0 + v_0 t - \\frac{1}{2}gt^2$.",
      "At the highest point of upward motion, velocity is zero; use this to find time to max height or max height itself.",
    ],
    examples: [
      {
        problem:
          "A ball is thrown upward with an initial velocity of 20 m/s. How high does it go? (Use $g = 10$ m/s²).",
        solution:
          "At maximum height, $v = 0$. Using $v^2 = v_0^2 - 2g\\Delta y$ (up is positive): $0 = (20)^2 - 2(10)\\Delta y \\Rightarrow 0 = 400 - 20\\Delta y \\Rightarrow \\Delta y = 20$ m.",
      },
    ],
    mcqs: [
      {
        question:
          "Which statement is true about objects in free fall (ignoring air resistance)?",
        options: [
          "Heavier objects fall faster than lighter objects",
          "All objects fall with the same acceleration regardless of mass",
          "Objects in free fall have zero acceleration",
          "Free fall only applies to objects dropped from rest",
        ],
        answerIndex: 1,
        explanation:
          "All objects in free fall near Earth's surface experience the same gravitational acceleration $g = 9.8$ m/s$^2$, independent of mass. A is a common misconception refuted by Galileo. C is wrong because $a = g \\neq 0$. D is wrong because free fall includes any motion under gravity alone (upward throws, drops, etc.).",
      },
      {
        question:
          "A stone is dropped from rest from a cliff. After 3 seconds, what is its velocity? (Use $g = 10$ m/s²).",
        options: ["10 m/s", "15 m/s", "30 m/s", "90 m/s"],
        answerIndex: 2,
        explanation:
          "Using $v = v_0 + at$ with $v_0 = 0$, $a = g = 10$ m/s$^2$, $t = 3$ s: $v = 0 + (10)(3) = 30$ m/s downward. A is the acceleration, not velocity. B is a miscalculation. D is the displacement ($\\frac{1}{2}gt^2 = 45$ m, and even that is wrong by a factor of 2).",
      },
    ],
  },
  {
    id: "reference-frames",
    name: "Reference Frames and Relative Motion",
    unit: "Unit 1: Kinematics",
    unitNumber: 1,
    tags: ["MCQ frequent"],
    summary:
      "Velocity is relative to the chosen reference frame, and velocities add vectorially when changing frames.",
    formula: "\\vec{v}_{AC} = \\vec{v}_{AB} + \\vec{v}_{BC}",
    description:
      "A reference frame is the perspective from which motion is observed and measured. An object's velocity depends on the reference frame: a passenger on a moving train is at rest relative to the train but moving relative to the ground. To relate velocities in different frames, use vector addition: the velocity of object A relative to frame C equals the velocity of A relative to B plus the velocity of B relative to C. This concept is essential for relative motion problems.",
    steps: [
      "Identify all objects and reference frames involved (e.g., object A, frame B, frame C).",
      "Determine the known velocities: $\\vec{v}_{AB}$ (velocity of A relative to B) and $\\vec{v}_{BC}$ (velocity of B relative to C).",
      "Use the relative velocity formula: $\\vec{v}_{AC} = \\vec{v}_{AB} + \\vec{v}_{BC}$.",
      "Pay attention to direction: use positive and negative signs or vector components as appropriate.",
    ],
    examples: [
      {
        problem:
          "A boat moves at 5 m/s north relative to the water. The water (current) flows at 3 m/s north relative to the ground. What is the boat's velocity relative to the ground?",
        solution:
          "Using $\\vec{v}_{boat,ground} = \\vec{v}_{boat,water} + \\vec{v}_{water,ground}$: both velocities are north (positive), so $v_{boat,ground} = 5 + 3 = 8$ m/s north.",
      },
    ],
    mcqs: [
      {
        question:
          "A passenger walks at 1 m/s toward the front of a train moving at 20 m/s relative to the ground. What is the passenger's velocity relative to the ground?",
        options: ["1 m/s", "19 m/s", "20 m/s", "21 m/s"],
        answerIndex: 3,
        explanation:
          "The passenger's velocity relative to the ground is the sum of the passenger's velocity relative to the train (1 m/s forward) and the train's velocity relative to the ground (20 m/s forward): $1 + 20 = 21$ m/s. A ignores the train's motion. B incorrectly subtracts. C ignores the passenger's motion.",
      },
      {
        question:
          "Two cars approach each other: Car A moves east at 15 m/s, Car B moves west at 10 m/s. What is the velocity of Car A relative to Car B?",
        options: ["5 m/s east", "25 m/s east", "5 m/s west", "25 m/s west"],
        answerIndex: 1,
        explanation:
          "Taking east as positive: $v_A = +15$ m/s, $v_B = -10$ m/s. Velocity of A relative to B: $v_{A,B} = v_A - v_B = 15 - (-10) = 25$ m/s east. A results from adding magnitudes incorrectly. C and D have the wrong direction.",
      },
    ],
  },
  {
    id: "projectile-motion",
    name: "Projectile Motion",
    unit: "Unit 1: Kinematics",
    unitNumber: 1,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "Projectiles move in two dimensions with constant horizontal velocity and constant downward acceleration due to gravity.",
    formula:
      "x = v_{x0}t,\\quad y = v_{y0}t - \\frac{1}{2}gt^2",
    graph: {
      type: "fns",
      fns: [
        { fn: "x - x*x/20", color: "blue", label: "y(x)" },
      ],
      xDomain: [-0.5, 21],
      yDomain: [-1, 6],
      note: "Projectile path (v₀=10 m/s, θ=45°, g=10 m/s²). Max height ≈ 2.5 m at x = 10 m. Range = 20 m.",
    },
    description:
      "Projectile motion is two-dimensional motion under gravity alone. The key insight is that horizontal and vertical motions are independent. Horizontally, velocity is constant ($v_x = v_{x0}$, $a_x = 0$). Vertically, acceleration is $a_y = -g$ (if up is positive). The trajectory is a parabola. Time is the common variable linking both dimensions. Projectile problems require resolving initial velocity into components, analyzing each dimension separately, and recombining results.",
    steps: [
      "Resolve the initial velocity into horizontal and vertical components: $v_{x0} = v_0 \\cos\\theta$, $v_{y0} = v_0 \\sin\\theta$.",
      "Analyze horizontal motion with $x = v_{x0}t$ (constant velocity).",
      "Analyze vertical motion with kinematic equations: $v_y = v_{y0} - gt$, $y = v_{y0}t - \\frac{1}{2}gt^2$, $v_y^2 = v_{y0}^2 - 2gy$.",
      "Use the vertical motion to find time (e.g., time to hit the ground when $y = 0$), then substitute into horizontal equation for range.",
      "At the peak, $v_y = 0$; use this to find maximum height or time to peak.",
    ],
    examples: [
      {
        problem:
          "A projectile is launched at 30 m/s at an angle of 37° above horizontal. Find the horizontal and vertical components of the initial velocity. (Use $\\sin 37° \\approx 0.6$, $\\cos 37° \\approx 0.8$).",
        solution:
          "$v_{x0} = v_0 \\cos\\theta = 30(0.8) = 24$ m/s. $v_{y0} = v_0 \\sin\\theta = 30(0.6) = 18$ m/s.",
      },
    ],
    mcqs: [
      {
        question:
          "In projectile motion (ignoring air resistance), which component of velocity remains constant?",
        options: [
          "Horizontal component",
          "Vertical component",
          "Both components",
          "Neither component",
        ],
        answerIndex: 0,
        explanation:
          "The horizontal component of velocity $v_x$ remains constant because there is no horizontal acceleration (gravity acts vertically only). The vertical component $v_y$ changes due to gravitational acceleration. B, C, and D are incorrect.",
      },
      {
        question:
          "A ball is thrown horizontally from a height of 20 m with a speed of 10 m/s. How long does it take to hit the ground? (Use $g = 10$ m/s²).",
        options: ["1 s", "2 s", "3 s", "4 s"],
        answerIndex: 1,
        explanation:
          "For vertical motion: $y = y_0 + v_{y0}t - \\frac{1}{2}gt^2$. Since thrown horizontally, $v_{y0} = 0$: $0 = 20 + 0 - \\frac{1}{2}(10)t^2 \\Rightarrow 20 = 5t^2 \\Rightarrow t^2 = 4 \\Rightarrow t = 2$ s. Horizontal velocity does not affect vertical motion. A, C, and D result from miscalculations.",
      },
    ],
  },
  {
    id: "vector-components",
    name: "Vector Resolution into Components",
    unit: "Unit 1: Kinematics",
    unitNumber: 1,
    tags: ["MCQ frequent"],
    summary:
      "Any vector can be decomposed into perpendicular components, typically horizontal and vertical.",
    formula: "v_x = v\\cos\\theta,\\quad v_y = v\\sin\\theta",
    description:
      "Vector resolution (decomposition) breaks a vector into perpendicular components, usually along the x- and y-axes. For a vector of magnitude $v$ at angle $\\theta$ above the horizontal: the horizontal component is $v_x = v \\cos\\theta$ and the vertical component is $v_y = v \\sin\\theta$. This technique is fundamental for analyzing projectile motion, forces on inclines, and any situation where motion or forces are not aligned with coordinate axes.",
    steps: [
      "Identify the magnitude of the vector ($v$) and the angle ($\\theta$) it makes with the horizontal axis.",
      "Calculate the horizontal component: $v_x = v \\cos\\theta$.",
      "Calculate the vertical component: $v_y = v \\sin\\theta$.",
      "Check signs: if the vector points in the negative x or y direction, apply a negative sign to the corresponding component.",
      "Use the components in separate one-dimensional analyses (e.g., horizontal motion, vertical motion).",
    ],
    examples: [
      {
        problem:
          "A velocity vector has magnitude 50 m/s at an angle of 30° above the horizontal. Find its components. (Use $\\cos 30° \\approx 0.866$, $\\sin 30° = 0.5$).",
        solution:
          "Horizontal component: $v_x = v \\cos\\theta = 50(0.866) = 43.3$ m/s. Vertical component: $v_y = v \\sin\\theta = 50(0.5) = 25$ m/s.",
      },
    ],
    mcqs: [
      {
        question:
          "A vector of magnitude 10 units makes an angle of 60° with the horizontal. What is its vertical component? (Use $\\sin 60° \\approx 0.866$).",
        options: ["5 units", "8.66 units", "10 units", "5.77 units"],
        answerIndex: 1,
        explanation:
          "Vertical component: $v_y = v \\sin\\theta = 10(0.866) = 8.66$ units. A incorrectly uses $\\sin 30°$. C is the magnitude itself. D is the horizontal component ($10 \\cos 60° = 10(0.5) = 5$, but actually $\\cos 60° = 0.5$, so horizontal is 5; D is incorrect).",
      },
      {
        question:
          "To find the horizontal component of a vector at angle $\\theta$ above horizontal, you use:",
        options: [
          "$v \\sin\\theta$",
          "$v \\cos\\theta$",
          "$v \\tan\\theta$",
          "$v / \\cos\\theta$",
        ],
        answerIndex: 1,
        explanation:
          "The horizontal component is adjacent to the angle, so use cosine: $v_x = v \\cos\\theta$. A ($v \\sin\\theta$) gives the vertical component. C and D are incorrect trigonometric relations for this context.",
      },
    ],
  },
];
