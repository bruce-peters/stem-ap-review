import type { Topic } from "@/types";

const torqueRotationalDynamicsTopics: Topic[] = [
  {
    id: "rotational-kinematics",
    name: "Rotational Kinematics Equations",
    unit: "Unit 5: Torque and Rotational Dynamics",
    unitNumber: 5,
    tags: ["MCQ frequent"],
    summary:
      "Rotational kinematics equations describe angular motion with constant angular acceleration, parallel to the structure of linear kinematic equations.",
    formula:
      "\\omega = \\omega_0 + \\alpha t,\\quad \\theta = \\omega_0 t + \\tfrac{1}{2}\\alpha t^2",
    description:
      "The rotational kinematics equations mirror the familiar linear equations, replacing position with angular position θ, velocity with angular velocity ω, and acceleration with angular acceleration α. These equations only apply when angular acceleration is constant. A third equation, ω² = ω₀² + 2α(θ − θ₀), completes the set and is analogous to v² = v₀² + 2a(Δx).",
    steps: [
      "Identify the known rotational quantities: initial angular velocity $\\omega_0$, final angular velocity $\\omega$, angular acceleration $\\alpha$, time $t$, and angular displacement $\\theta - \\theta_0$.",
      "Choose the equation that contains three known quantities and one unknown. Use $\\omega = \\omega_0 + \\alpha t$ for problems involving time, or $\\omega^2 = \\omega_0^2 + 2\\alpha(\\theta - \\theta_0)$ when time is not given.",
      "Substitute the known values into the chosen equation.",
      "Solve algebraically for the unknown quantity.",
      "Check that your answer has the correct units: rad/s for angular velocity, rad/s² for angular acceleration, and radians for angular displacement.",
    ],
    examples: [
      {
        problem:
          "A spinning wheel starts from rest and accelerates uniformly at $2.0\\ \\text{rad/s}^2$ for $5.0\\ \\text{s}$. What is the final angular velocity and how many radians does it rotate through?",
        solution:
          "Given: $\\omega_0 = 0$, $\\alpha = 2.0\\ \\text{rad/s}^2$, $t = 5.0\\ \\text{s}$. For final angular velocity: $\\omega = \\omega_0 + \\alpha t = 0 + (2.0)(5.0) = 10\\ \\text{rad/s}$. For angular displacement: $\\theta = \\omega_0 t + \\tfrac{1}{2}\\alpha t^2 = 0 + \\tfrac{1}{2}(2.0)(5.0)^2 = 25\\ \\text{rad}$.",
      },
    ],
    mcqs: [
      {
        question:
          "Which rotational kinematic equation should be used when time is NOT given in the problem?",
        options: [
          "$\\omega = \\omega_0 + \\alpha t$",
          "$\\omega^2 = \\omega_0^2 + 2\\alpha\\Delta\\theta$",
          "$\\theta = \\omega_0 t + \\tfrac{1}{2}\\alpha t^2$",
          "$\\theta = \\tfrac{1}{2}(\\omega_0 + \\omega)t$",
        ],
        answerIndex: 1,
        explanation:
          "The correct answer is B: $\\omega^2 = \\omega_0^2 + 2\\alpha\\Delta\\theta$ is the only equation that does not contain time $t$, making it ideal for problems where time is unknown or not provided. A and C both require knowing time. D also contains time and is an alternative form of the displacement equation.",
      },
      {
        question:
          "A disk rotating at $8.0\\ \\text{rad/s}$ slows uniformly to $2.0\\ \\text{rad/s}$ over $3.0\\ \\text{s}$. What is the angular acceleration?",
        options: [
          "$-2.0\\ \\text{rad/s}^2$",
          "$-6.0\\ \\text{rad/s}^2$",
          "$+2.0\\ \\text{rad/s}^2$",
          "$-3.3\\ \\text{rad/s}^2$",
        ],
        answerIndex: 0,
        explanation:
          "Use $\\omega = \\omega_0 + \\alpha t$: $2.0 = 8.0 + \\alpha(3.0)$, so $\\alpha = (2.0 - 8.0)/3.0 = -2.0\\ \\text{rad/s}^2$. The negative sign correctly indicates deceleration. B results from computing $(2-8)$ without dividing by 3. C has the wrong sign. D incorrectly computes $-10/3$.",
      },
    ],
  },
  {
    id: "angular-velocity-acceleration",
    name: "Angular Velocity and Angular Acceleration",
    unit: "Unit 5: Torque and Rotational Dynamics",
    unitNumber: 5,
    tags: ["MCQ frequent"],
    summary:
      "Angular velocity measures how quickly an object rotates, while angular acceleration measures how quickly the angular velocity changes.",
    formula:
      "\\omega = \\Delta\\theta/\\Delta t,\\quad \\alpha = \\Delta\\omega/\\Delta t",
    description:
      "Angular velocity ω is the rate of change of angular position (measured in rad/s), and angular acceleration α is the rate of change of angular velocity (measured in rad/s²). Both are vector quantities with direction determined by the right-hand rule. Positive ω indicates counterclockwise rotation; positive α indicates increasing angular speed in the positive direction.",
    steps: [
      "For angular velocity, determine the angular displacement $\\Delta\\theta$ (in radians) and the time interval $\\Delta t$.",
      "Calculate $\\omega = \\Delta\\theta / \\Delta t$. The sign indicates direction: positive for counterclockwise, negative for clockwise.",
      "For angular acceleration, determine the change in angular velocity $\\Delta\\omega = \\omega_f - \\omega_i$ and the time interval.",
      "Calculate $\\alpha = \\Delta\\omega / \\Delta t$. Positive α means speeding up in the positive direction or slowing down in the negative direction.",
      "Verify units: angular velocity should be rad/s, angular acceleration rad/s².",
    ],
    examples: [
      {
        problem:
          "A fan blade completes 30 revolutions in 10 seconds. What is its average angular velocity in rad/s?",
        solution:
          "Convert revolutions to radians: $30\\ \\text{rev} \\times 2\\pi\\ \\text{rad/rev} = 60\\pi\\ \\text{rad}$. Then $\\omega = \\Delta\\theta / \\Delta t = 60\\pi / 10 = 6\\pi \\approx 18.8\\ \\text{rad/s}$.",
      },
    ],
    mcqs: [
      {
        question:
          "An object's angular velocity changes from $4.0\\ \\text{rad/s}$ to $12.0\\ \\text{rad/s}$ in $2.0\\ \\text{s}$. What is the angular acceleration?",
        options: [
          "$4.0\\ \\text{rad/s}^2$",
          "$8.0\\ \\text{rad/s}^2$",
          "$6.0\\ \\text{rad/s}^2$",
          "$2.0\\ \\text{rad/s}^2$",
        ],
        answerIndex: 0,
        explanation:
          "Angular acceleration is $\\alpha = \\Delta\\omega / \\Delta t = (12.0 - 4.0)/2.0 = 8.0/2.0 = 4.0\\ \\text{rad/s}^2$. B results from forgetting to divide by time. C is the average of initial and final angular velocities (wrong approach). D is the time interval mistakenly used as the answer.",
      },
      {
        question:
          "Which statement about angular velocity is correct?",
        options: [
          "Angular velocity is always positive",
          "Angular velocity is measured in revolutions per minute only",
          "Angular velocity indicates the rate of change of angular position",
          "Angular velocity and linear velocity are the same quantity",
        ],
        answerIndex: 2,
        explanation:
          "The correct answer is C: angular velocity is defined as the rate of change of angular position, $\\omega = \\Delta\\theta/\\Delta t$. A is wrong because ω can be negative (clockwise rotation). B is wrong because the SI unit is rad/s, though rpm is also used. D is wrong because angular velocity (rad/s) and linear velocity (m/s) are different; they're related by $v = r\\omega$.",
      },
    ],
  },
  {
    id: "linear-rotational-link",
    name: "Connecting Linear and Rotational Quantities",
    unit: "Unit 5: Torque and Rotational Dynamics",
    unitNumber: 5,
    tags: ["MCQ frequent"],
    summary:
      "Tangential linear quantities at a distance r from the rotation axis are related to angular quantities through the equations v = rω and at = rα.",
    formula: "v = r\\omega,\\quad a_t = r\\alpha",
    description:
      "Every point on a rotating rigid body has the same angular velocity ω, but points farther from the axis have larger tangential (linear) speeds. The relationship v = rω connects tangential speed to angular velocity, while at = rα connects tangential acceleration to angular acceleration. These equations only apply to the tangential components; radial (centripetal) acceleration is separate and given by ac = v²/r = rω².",
    steps: [
      "Identify whether you're given angular quantities ($\\omega$, $\\alpha$) or linear quantities ($v$, $a_t$) and the radius $r$ of the circular path.",
      "To convert from angular to linear: multiply by radius. Use $v = r\\omega$ for velocity and $a_t = r\\alpha$ for tangential acceleration.",
      "To convert from linear to angular: divide by radius. Use $\\omega = v/r$ and $\\alpha = a_t/r$.",
      "Remember that these relate only tangential components. Centripetal acceleration $a_c = v^2/r = r\\omega^2$ points toward the center.",
      "Check units carefully: if $r$ is in meters, $\\omega$ in rad/s, then $v$ will be in m/s.",
    ],
    examples: [
      {
        problem:
          "A point on the rim of a 0.50-m radius wheel rotates with angular velocity $10\\ \\text{rad/s}$. What is the tangential speed of that point?",
        solution:
          "Use $v = r\\omega = (0.50\\ \\text{m})(10\\ \\text{rad/s}) = 5.0\\ \\text{m/s}$. The point on the rim moves tangentially at 5.0 m/s.",
      },
    ],
    mcqs: [
      {
        question:
          "A grinding wheel of radius 0.20 m rotates at 50 rad/s. What is the tangential speed of a point on its edge?",
        options: ["10 m/s", "250 m/s", "5.0 m/s", "2.5 m/s"],
        answerIndex: 0,
        explanation:
          "Use $v = r\\omega = (0.20)(50) = 10\\ \\text{m/s}$. B incorrectly multiplies instead of matching units. C results from using $r = 0.10$ m (wrong radius). D comes from dividing instead of multiplying.",
      },
      {
        question:
          "If a point at radius r has tangential acceleration $a_t = 6.0\\ \\text{m/s}^2$ and the angular acceleration is $\\alpha = 3.0\\ \\text{rad/s}^2$, what is r?",
        options: ["2.0 m", "0.5 m", "18 m", "9.0 m"],
        answerIndex: 0,
        explanation:
          "From $a_t = r\\alpha$, we have $r = a_t/\\alpha = 6.0/3.0 = 2.0\\ \\text{m}$. B inverts the fraction. C and D result from multiplying instead of dividing.",
      },
    ],
  },
  {
    id: "torque",
    name: "Torque",
    unit: "Unit 5: Torque and Rotational Dynamics",
    unitNumber: 5,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "Torque is the rotational analog of force; it measures the tendency of a force to cause rotational acceleration about an axis.",
    formula: "\\tau = rF\\sin\\theta",
    description:
      "Torque τ (tau) depends on three factors: the magnitude of the applied force F, the distance r from the axis of rotation (lever arm or moment arm), and the angle θ between the force vector and the position vector. Maximum torque occurs when the force is perpendicular to the lever arm (sin 90° = 1). Torque is a vector quantity with direction given by the right-hand rule and units of N·m.",
    steps: [
      "Identify the axis of rotation and draw a diagram showing the force vector and the position vector $\\vec{r}$ from the axis to the point of application.",
      "Measure the angle $\\theta$ between the force and the position vector. Ensure you're using the angle between the two vectors (not the angle the force makes with horizontal).",
      "Calculate the magnitude of torque: $\\tau = rF\\sin\\theta$. Alternatively, find the perpendicular distance from the axis to the line of action of the force (lever arm $r_\\perp = r\\sin\\theta$) and use $\\tau = r_\\perp F$.",
      "Assign a sign convention: counterclockwise torques are typically positive, clockwise negative.",
      "Check units: torque has units of N·m (newton-meters), not to be confused with joules.",
    ],
    examples: [
      {
        problem:
          "A force of 50 N is applied at the end of a 0.30-m wrench at an angle of 60° to the wrench handle. What is the torque about the bolt?",
        solution:
          "Use $\\tau = rF\\sin\\theta = (0.30)(50)\\sin(60^\\circ) = (15)(0.866) \\approx 13\\ \\text{N}\\cdot\\text{m}$. The torque tends to rotate the bolt counterclockwise.",
      },
    ],
    mcqs: [
      {
        question:
          "A force applied perpendicular to a lever arm produces maximum torque because:",
        options: [
          "$\\sin\\theta$ is zero when the force is perpendicular",
          "$\\sin\\theta = 1$ when the force is perpendicular to the lever arm",
          "the lever arm is smallest when the force is perpendicular",
          "torque is independent of angle",
        ],
        answerIndex: 1,
        explanation:
          "The correct answer is B: when the force is perpendicular to the lever arm, $\\theta = 90^\\circ$ and $\\sin 90^\\circ = 1$, maximizing torque. A is wrong because sin θ is zero when the force is parallel (θ = 0° or 180°), which produces no torque. C is backwards—the effective lever arm is largest when perpendicular. D is false; torque explicitly depends on angle.",
      },
      {
        question:
          "A 20-N force is applied 0.40 m from a pivot point at an angle of 30° to the lever arm. What is the torque?",
        options: ["4.0 N·m", "8.0 N·m", "6.9 N·m", "10 N·m"],
        answerIndex: 0,
        explanation:
          "Use $\\tau = rF\\sin\\theta = (0.40)(20)\\sin(30^\\circ) = (8.0)(0.5) = 4.0\\ \\text{N}\\cdot\\text{m}$. B forgets the sin factor (using τ = rF). C uses sin(60°) instead of sin(30°). D uses an arbitrary calculation.",
      },
    ],
  },
  {
    id: "rotational-inertia-def",
    name: "Rotational Inertia (Definition)",
    unit: "Unit 5: Torque and Rotational Dynamics",
    unitNumber: 5,
    tags: ["MCQ frequent", "theorem"],
    summary:
      "Rotational inertia (moment of inertia) is the measure of an object's resistance to changes in its rotational motion, analogous to mass in linear motion.",
    formula: "I = \\sum m_i r_i^2",
    description:
      "Rotational inertia I quantifies how mass is distributed relative to the axis of rotation. An object with more mass farther from the axis has greater rotational inertia and is harder to spin up or slow down. For a collection of point masses, I = Σmᵢrᵢ², where rᵢ is each mass's distance from the axis. For continuous objects, an integral is used. Rotational inertia depends on both the object's mass distribution and the choice of rotation axis.",
    steps: [
      "Identify the axis of rotation. The same object has different rotational inertias for different axes.",
      "For discrete point masses, list each mass $m_i$ and its perpendicular distance $r_i$ from the axis.",
      "Square each distance and multiply by the corresponding mass: $m_i r_i^2$.",
      "Sum all contributions: $I = \\sum m_i r_i^2$.",
      "Check units: rotational inertia has units of kg·m².",
    ],
    examples: [
      {
        problem:
          "Two point masses, $m_1 = 2.0\\ \\text{kg}$ at $r_1 = 0.50\\ \\text{m}$ and $m_2 = 3.0\\ \\text{kg}$ at $r_2 = 1.0\\ \\text{m}$, are connected by a massless rod rotating about an axis through one end. What is the rotational inertia?",
        solution:
          "Use $I = \\sum m_i r_i^2 = (2.0)(0.50)^2 + (3.0)(1.0)^2 = 0.50 + 3.0 = 3.5\\ \\text{kg}\\cdot\\text{m}^2$.",
      },
    ],
    mcqs: [
      {
        question:
          "Which factor does NOT affect the rotational inertia of an object?",
        options: [
          "The total mass of the object",
          "The angular velocity of the object",
          "The distribution of mass relative to the axis",
          "The choice of rotation axis",
        ],
        answerIndex: 1,
        explanation:
          "The correct answer is B: rotational inertia depends on mass and geometry, not on how fast the object is spinning. Angular velocity affects rotational kinetic energy but not rotational inertia itself. A, C, and D all correctly describe factors that do affect I.",
      },
      {
        question:
          "A point mass of 4.0 kg is located 0.30 m from an axis. What is its rotational inertia about that axis?",
        options: ["1.2 kg·m²", "0.36 kg·m²", "0.090 kg·m²", "3.6 kg·m²"],
        answerIndex: 1,
        explanation:
          "Use $I = mr^2 = (4.0)(0.30)^2 = (4.0)(0.09) = 0.36\\ \\text{kg}\\cdot\\text{m}^2$. A results from forgetting to square the radius. C is just $r^2$ without the mass. D incorrectly multiplies 4.0 by 0.9 instead of 0.09.",
      },
    ],
  },
  {
    id: "rotational-inertia-objects",
    name: "Rotational Inertia of Common Objects",
    unit: "Unit 5: Torque and Rotational Dynamics",
    unitNumber: 5,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "Common rigid bodies have standard formulas for rotational inertia depending on shape and axis of rotation.",
    formula:
      "I_{\\text{disk}}=\\tfrac{1}{2}MR^2,\\quad I_{\\text{rod,cm}}=\\tfrac{1}{12}ML^2,\\quad I_{\\text{sphere}}=\\tfrac{2}{5}MR^2",
    description:
      "For uniform solid objects, rotational inertia can be calculated from their geometry. A disk or cylinder about its center has I = ½MR². A thin rod about its center has I = (1/12)ML². A solid sphere about its center has I = (2/5)MR². A hoop or thin ring about its center has I = MR². Note that for a rod rotating about one end (not the center), I = (1/3)ML². These formulas are often provided in problems or on reference sheets.",
    steps: [
      "Identify the shape of the object (disk, rod, sphere, hoop, etc.) and the axis of rotation.",
      "Check if the axis passes through the center of mass. If not, you may need the parallel-axis theorem (beyond AP Physics 1 scope; values typically given).",
      "Select the appropriate formula from the given table or reference sheet.",
      "Substitute the mass $M$ and the relevant dimension (radius $R$ or length $L$) into the formula.",
      "Calculate $I$ and verify units are kg·m².",
    ],
    examples: [
      {
        problem:
          "A solid disk of mass 5.0 kg and radius 0.40 m rotates about its central axis. What is its rotational inertia?",
        solution:
          "Use $I = \\tfrac{1}{2}MR^2 = \\tfrac{1}{2}(5.0)(0.40)^2 = \\tfrac{1}{2}(5.0)(0.16) = 0.40\\ \\text{kg}\\cdot\\text{m}^2$.",
      },
    ],
    mcqs: [
      {
        question:
          "Which object has the largest rotational inertia about its center, assuming all have the same mass M and radius R?",
        options: [
          "Solid disk: $I = \\tfrac{1}{2}MR^2$",
          "Solid sphere: $I = \\tfrac{2}{5}MR^2$",
          "Thin hoop: $I = MR^2$",
          "All have the same rotational inertia",
        ],
        answerIndex: 2,
        explanation:
          "The hoop has the largest coefficient (1.0) because all its mass is at distance R from the axis. The disk coefficient is 0.5, and the sphere is 0.4. Greater rotational inertia means mass is distributed farther from the axis. D is incorrect because the coefficients differ.",
      },
      {
        question:
          "A uniform rod of length 2.0 m and mass 3.0 kg rotates about its center. What is its rotational inertia?",
        options: ["1.0 kg·m²", "4.0 kg·m²", "0.33 kg·m²", "12 kg·m²"],
        answerIndex: 0,
        explanation:
          "Use $I = \\tfrac{1}{12}ML^2 = \\tfrac{1}{12}(3.0)(2.0)^2 = \\tfrac{1}{12}(3.0)(4.0) = 1.0\\ \\text{kg}\\cdot\\text{m}^2$. B forgets the 1/12 factor. C uses 1/12 of M alone. D incorrectly multiplies everything.",
      },
    ],
  },
  {
    id: "rotational-newtons-2nd",
    name: "Newton's Second Law in Rotational Form",
    unit: "Unit 5: Torque and Rotational Dynamics",
    unitNumber: 5,
    tags: ["MCQ frequent", "FRQ", "theorem"],
    summary:
      "Net torque equals rotational inertia times angular acceleration, the rotational analog of F = ma.",
    formula: "\\sum\\tau = I\\alpha",
    description:
      "Just as net force causes linear acceleration (ΣF = ma), net torque causes angular acceleration (Στ = Iα). This is Newton's second law for rotation. If multiple torques act on a rigid body, sum them (accounting for signs: counterclockwise positive, clockwise negative) to find the net torque. The resulting angular acceleration is proportional to net torque and inversely proportional to rotational inertia. This law is fundamental to analyzing rotating systems.",
    steps: [
      "Identify all torques acting on the object. Draw a diagram and label each force, its point of application, and its lever arm.",
      "Calculate each torque using $\\tau = rF\\sin\\theta$ (or $\\tau = r_\\perp F$), and assign appropriate signs (counterclockwise positive, clockwise negative).",
      "Sum all torques to find the net torque: $\\sum\\tau = \\tau_1 + \\tau_2 + \\ldots$.",
      "Determine or calculate the object's rotational inertia $I$.",
      "Apply Newton's second law for rotation: $\\alpha = \\sum\\tau / I$. If $\\alpha$ is given, you can solve for an unknown torque or I.",
    ],
    examples: [
      {
        problem:
          "A disk with rotational inertia $0.50\\ \\text{kg}\\cdot\\text{m}^2$ experiences a net torque of $3.0\\ \\text{N}\\cdot\\text{m}$. What is its angular acceleration?",
        solution:
          "Use $\\sum\\tau = I\\alpha$, so $\\alpha = \\sum\\tau / I = 3.0 / 0.50 = 6.0\\ \\text{rad/s}^2$.",
      },
    ],
    mcqs: [
      {
        question:
          "If the net torque on an object is zero, what can be concluded?",
        options: [
          "The object is not rotating",
          "The object's angular velocity is constant",
          "The object's angular acceleration is zero",
          "Both B and C",
        ],
        answerIndex: 3,
        explanation:
          "When $\\sum\\tau = 0$, then $\\alpha = 0$ (no angular acceleration). By Newton's first law, the object either remains at rest or continues rotating at constant angular velocity. A is too restrictive—the object could be rotating uniformly. D correctly captures both B and C.",
      },
      {
        question:
          "A wheel with $I = 2.0\\ \\text{kg}\\cdot\\text{m}^2$ is acted on by a net torque of $8.0\\ \\text{N}\\cdot\\text{m}$. What is its angular acceleration?",
        options: ["16 rad/s²", "4.0 rad/s²", "0.25 rad/s²", "10 rad/s²"],
        answerIndex: 1,
        explanation:
          "Use $\\alpha = \\sum\\tau / I = 8.0 / 2.0 = 4.0\\ \\text{rad/s}^2$. A incorrectly multiplies instead of divides. C inverts the fraction. D adds the two values.",
      },
    ],
  },
  {
    id: "rotational-equilibrium",
    name: "Rotational Equilibrium (Newton's 1st, Rotational)",
    unit: "Unit 5: Torque and Rotational Dynamics",
    unitNumber: 5,
    tags: ["MCQ frequent", "FRQ", "theorem"],
    summary:
      "An object is in rotational equilibrium when the net torque acting on it is zero, resulting in no angular acceleration.",
    formula: "\\sum\\tau = 0",
    description:
      "Rotational equilibrium is the rotational analog of translational equilibrium (ΣF = 0). When Στ = 0, the object's angular acceleration is zero, so it either remains at rest or continues rotating at constant angular velocity. This principle is used to analyze systems such as balanced seesaws, beams, and levers. The choice of pivot point (axis) is arbitrary for equilibrium calculations; torques are calculated about any chosen point.",
    steps: [
      "Choose a convenient axis of rotation. Often, choosing the axis through a point where an unknown force acts will eliminate that force's torque (since $r = 0$).",
      "For each force acting on the object, calculate the torque about the chosen axis: $\\tau = rF\\sin\\theta$. Assign signs carefully (counterclockwise positive, clockwise negative).",
      "Write the equilibrium condition: $\\sum\\tau = 0$.",
      "Solve the resulting equation for the unknown quantity (often a force or distance).",
      "Check your answer by verifying units and physical reasonableness.",
    ],
    examples: [
      {
        problem:
          "A 4.0-m uniform beam of weight 100 N is supported at its center. A 50-N weight is placed 1.5 m from the left end. Where should a 75-N weight be placed on the right side to balance the beam?",
        solution:
          "Choose the pivot at the center (the support). The 50-N weight is 0.5 m left of center, producing counterclockwise torque: $\\tau_1 = (0.5)(50) = 25\\ \\text{N}\\cdot\\text{m}$. Let the 75-N weight be distance $r$ right of center (clockwise). For equilibrium: $(0.5)(50) = r(75)$, so $r = 25/75 = 0.33\\ \\text{m}$ to the right of center.",
      },
    ],
    mcqs: [
      {
        question:
          "In rotational equilibrium problems, why is it often helpful to choose the axis of rotation through the point where an unknown force acts?",
        options: [
          "It maximizes the torque from that force",
          "It eliminates the torque from that force, simplifying the equation",
          "It ensures the force is perpendicular to the lever arm",
          "It makes all other torques zero",
        ],
        answerIndex: 1,
        explanation:
          "Choosing the axis at the point where an unknown force acts makes $r = 0$ for that force, so its torque is zero. This eliminates the unknown from the torque equation, simplifying the algebra. A is incorrect—torque becomes zero, not maximum. C is unrelated to axis choice. D is false; only the chosen force's torque is eliminated.",
      },
      {
        question:
          "A seesaw is balanced when a 400-N child sits 2.0 m from the pivot. How far from the pivot must a 300-N child sit on the opposite side?",
        options: ["1.5 m", "2.7 m", "2.0 m", "3.0 m"],
        answerIndex: 1,
        explanation:
          "For equilibrium: $\\sum\\tau = 0$. Torques must balance: $(400)(2.0) = (300)r$, so $r = 800/300 = 2.67 \\approx 2.7\\ \\text{m}$. A results from incorrectly assuming inverse proportionality with distance instead of force. C assumes equal distances (wrong). D uses an arbitrary ratio.",
      },
    ],
  },
  {
    id: "static-equilibrium",
    name: "Static Equilibrium (Translational + Rotational)",
    unit: "Unit 5: Torque and Rotational Dynamics",
    unitNumber: 5,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "An object is in static equilibrium when both the net force and the net torque acting on it are zero, resulting in no linear or angular acceleration.",
    formula: "\\sum F = 0,\\quad \\sum\\tau = 0",
    description:
      "Static equilibrium requires two conditions: (1) translational equilibrium (ΣF = 0 in all directions), ensuring no linear acceleration, and (2) rotational equilibrium (Στ = 0 about any axis), ensuring no angular acceleration. Objects in static equilibrium remain at rest. Analyzing such systems often involves free-body diagrams, resolving forces into components, and strategically choosing the axis to simplify torque calculations.",
    steps: [
      "Draw a free-body diagram showing all forces acting on the object.",
      "Apply translational equilibrium: write $\\sum F_x = 0$ and $\\sum F_y = 0$ to sum forces in the horizontal and vertical directions separately.",
      "Choose an axis for calculating torques. A strategic choice (often through an unknown force) simplifies the torque equation.",
      "Apply rotational equilibrium: write $\\sum\\tau = 0$, calculating each torque about the chosen axis with appropriate signs.",
      "Solve the system of equations (typically 3 equations: $\\sum F_x = 0$, $\\sum F_y = 0$, $\\sum\\tau = 0$) for the unknown quantities.",
    ],
    examples: [
      {
        problem:
          "A 6.0-m uniform ladder of weight 200 N leans against a frictionless wall at an angle of 60° to the ground. The ground exerts a normal force and friction. Find the normal force from the wall if the ladder is in static equilibrium.",
        solution:
          "Choose the axis at the base (ground contact). The ladder's weight acts at its center (3.0 m up the ladder). Torque from wall's normal force $F_W$ (acting 6.0 m up): $\\tau_W = F_W(6.0\\sin 60^\\circ)$. Torque from weight (perpendicular distance from axis is $3.0\\cos 60^\\circ$): $\\tau_g = 200(3.0\\cos 60^\\circ)$. Setting $\\sum\\tau = 0$: $F_W(6.0 \\times 0.866) = 200(3.0 \\times 0.5)$, so $F_W(5.2) = 300$, giving $F_W \\approx 58\\ \\text{N}$.",
      },
    ],
    mcqs: [
      {
        question:
          "For an object to be in static equilibrium, which conditions must be satisfied?",
        options: [
          "Net force equals zero only",
          "Net torque equals zero only",
          "Both net force and net torque equal zero",
          "The object must have zero velocity and zero angular velocity",
        ],
        answerIndex: 2,
        explanation:
          "Static equilibrium requires both $\\sum F = 0$ (no linear acceleration) and $\\sum\\tau = 0$ (no angular acceleration). A and B are incomplete—both conditions are necessary. D is a consequence, not a defining condition; an object in equilibrium is at rest, but the fundamental requirements are zero net force and torque.",
      },
      {
        question:
          "A uniform beam is supported at two points. To find the reaction forces, you need to apply:",
        options: [
          "$\\sum F_y = 0$ only",
          "$\\sum\\tau = 0$ only",
          "Both $\\sum F_y = 0$ and $\\sum\\tau = 0$",
          "$\\sum F_x = 0$ only",
        ],
        answerIndex: 2,
        explanation:
          "To solve for two unknowns (the two reaction forces), you need two equations: $\\sum F_y = 0$ (vertical force balance) and $\\sum\\tau = 0$ (torque balance). A alone gives one equation. B alone also gives one equation. D is irrelevant if all forces are vertical.",
      },
    ],
  },
];

export default torqueRotationalDynamicsTopics;
