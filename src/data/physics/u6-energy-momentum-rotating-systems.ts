import type { Topic } from "@/types";

export const energyMomentumRotatingSystemsTopics: Topic[] = [
  {
    id: "rotational-ke",
    name: "Rotational Kinetic Energy",
    unit: "Unit 6: Energy and Momentum of Rotating Systems",
    unitNumber: 6,
    tags: ["MCQ frequent"],
    summary: "The kinetic energy associated with rotational motion of an object.",
    formula: "K_{\\text{rot}} = \\frac{1}{2}I\\omega^2",
    description:
      "Rotational kinetic energy is the energy an object possesses due to its rotation about an axis. It depends on the object's rotational inertia (I) and angular velocity (ω). This is analogous to translational kinetic energy but uses rotational quantities instead of linear ones.",
    steps: [
      "Identify the object's rotational inertia $I$ (either given or calculated from shape formulas).",
      "Determine the angular velocity $\\omega$ in rad/s.",
      "Square the angular velocity: $\\omega^2$.",
      "Calculate rotational kinetic energy: $K_{\\text{rot}} = \\frac{1}{2}I\\omega^2$.",
    ],
    examples: [
      {
        problem:
          "A solid disk of mass 4.0 kg and radius 0.5 m rotates at 6.0 rad/s. Find its rotational kinetic energy.",
        solution:
          "First find I for a disk: $I = \\frac{1}{2}MR^2 = \\frac{1}{2}(4.0)(0.5)^2 = 0.5\\ \\text{kg}\\cdot\\text{m}^2$. Then $K_{\\text{rot}} = \\frac{1}{2}(0.5)(6.0)^2 = \\frac{1}{2}(0.5)(36) = 9.0\\ \\text{J}$.",
      },
    ],
    mcqs: [
      {
        question:
          "A wheel's angular velocity doubles. By what factor does its rotational kinetic energy increase?",
        options: ["2", "4", "8", "√2"],
        answerIndex: 1,
        explanation:
          "Since $K_{\\text{rot}} = \\frac{1}{2}I\\omega^2$, kinetic energy is proportional to $\\omega^2$. If $\\omega$ doubles, $\\omega^2$ increases by a factor of 4. Option A (2) would be true if kinetic energy were proportional to $\\omega$ (it's not). Options C and D are incorrect mathematical relationships.",
      },
      {
        question:
          "A hoop (I = MR²) and a disk (I = ½MR²) have the same mass and radius. Both rotate at the same angular velocity. Which has greater rotational kinetic energy?",
        options: [
          "The hoop",
          "The disk",
          "Both have the same",
          "Cannot be determined",
        ],
        answerIndex: 0,
        explanation:
          "The hoop has larger rotational inertia (MR² vs. ½MR²). Since $K_{\\text{rot}} = \\frac{1}{2}I\\omega^2$ and ω is the same, the object with larger I has more rotational kinetic energy. Option B is incorrect because the disk has smaller I. Option C would be true only if both had equal I. Option D is wrong since we have all needed information.",
      },
    ],
  },
  {
    id: "total-ke-rolling",
    name: "Total KE of a Rolling Object",
    unit: "Unit 6: Energy and Momentum of Rotating Systems",
    unitNumber: 6,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "The total kinetic energy of a rolling object is the sum of its translational and rotational kinetic energy.",
    formula:
      "K_{\\text{total}} = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2",
    description:
      "When an object rolls without slipping, it has both translational motion (center of mass moving) and rotational motion (spinning about its center). The total kinetic energy is the sum of both forms. For rolling without slipping, v = rω connects these motions.",
    steps: [
      "Calculate translational kinetic energy: $K_{\\text{trans}} = \\frac{1}{2}mv_{\\text{cm}}^2$.",
      "Calculate rotational kinetic energy: $K_{\\text{rot}} = \\frac{1}{2}I\\omega^2$.",
      "If rolling without slipping, apply constraint $v_{\\text{cm}} = r\\omega$ to relate the two.",
      "Add both energies: $K_{\\text{total}} = K_{\\text{trans}} + K_{\\text{rot}}$.",
    ],
    examples: [
      {
        problem:
          "A solid sphere (I = ⅖MR²) of mass 2.0 kg and radius 0.10 m rolls without slipping at 3.0 m/s. Find its total kinetic energy.",
        solution:
          "Translational: $K_{\\text{trans}} = \\frac{1}{2}(2.0)(3.0)^2 = 9.0\\ \\text{J}$. For rotational, $\\omega = v/r = 3.0/0.10 = 30\\ \\text{rad/s}$. $I = \\frac{2}{5}(2.0)(0.10)^2 = 0.008\\ \\text{kg}\\cdot\\text{m}^2$. $K_{\\text{rot}} = \\frac{1}{2}(0.008)(30)^2 = 3.6\\ \\text{J}$. Total: $9.0 + 3.6 = 12.6\\ \\text{J}$.",
      },
    ],
    mcqs: [
      {
        question:
          "A hoop and a disk of equal mass roll down an incline without slipping, starting from rest at the same height. Which reaches the bottom first?",
        options: [
          "The hoop",
          "The disk",
          "Both reach at the same time",
          "The one with larger radius",
        ],
        answerIndex: 1,
        explanation:
          "Both objects convert the same gravitational potential energy into kinetic energy. The disk has smaller rotational inertia, so less energy goes into rotation and more into translation, making it faster. The hoop (option A) is slower. Option C would be true only if they had identical rotational inertia. Option D is incorrect since radius cancels out in the rolling motion equations.",
      },
      {
        question:
          "An object rolling without slipping has 100 J of translational kinetic energy. If it has 40 J of rotational kinetic energy, what is its total kinetic energy?",
        options: ["60 J", "100 J", "140 J", "240 J"],
        answerIndex: 2,
        explanation:
          "Total kinetic energy is the sum: 100 J + 40 J = 140 J. Option A (60 J) incorrectly subtracts. Option B (100 J) ignores rotational energy. Option D (240 J) incorrectly multiplies or squares values.",
      },
    ],
  },
  {
    id: "torque-work",
    name: "Work Done by a Torque",
    unit: "Unit 6: Energy and Momentum of Rotating Systems",
    unitNumber: 6,
    tags: ["MCQ frequent"],
    summary: "Work done by a torque equals torque times angular displacement.",
    formula: "W = \\tau\\Delta\\theta",
    description:
      "When a constant torque acts on a rotating object, the work done equals the product of torque and angular displacement. This is the rotational analog of W = Fd for translational motion. Angular displacement must be in radians.",
    steps: [
      "Identify the torque $\\tau$ acting on the object (in N·m).",
      "Determine the angular displacement $\\Delta\\theta$ (in radians).",
      "Ensure the torque is constant over the displacement or use average torque.",
      "Calculate work: $W = \\tau\\Delta\\theta$.",
    ],
    examples: [
      {
        problem:
          "A constant torque of 15 N·m rotates a wheel through 8.0 radians. How much work is done?",
        solution:
          "Using $W = \\tau\\Delta\\theta$: $W = (15)(8.0) = 120\\ \\text{J}$.",
      },
    ],
    mcqs: [
      {
        question:
          "A torque of 20 N·m rotates an object through one complete revolution. How much work is done?",
        options: ["20 J", "40π J", "20π J", "10π J"],
        answerIndex: 1,
        explanation:
          "One revolution equals 2π radians. $W = \\tau\\Delta\\theta = (20)(2\\pi) = 40\\pi\\ \\text{J}$. Option A forgets to convert to radians. Option C uses π instead of 2π. Option D incorrectly halves the result.",
      },
      {
        question:
          "Which of the following increases the work done by a constant torque on a rotating object?",
        options: [
          "Decreasing the angular displacement",
          "Increasing the angular velocity",
          "Increasing the angular displacement",
          "Decreasing the rotational inertia",
        ],
        answerIndex: 2,
        explanation:
          "Since $W = \\tau\\Delta\\theta$, work increases with angular displacement. Option A decreases work. Option B (angular velocity) doesn't appear in the work formula for constant torque. Option D (rotational inertia) affects angular acceleration but not work directly.",
      },
    ],
  },
  {
    id: "angular-momentum",
    name: "Angular Momentum",
    unit: "Unit 6: Energy and Momentum of Rotating Systems",
    unitNumber: 6,
    tags: ["MCQ frequent"],
    summary:
      "Angular momentum is the product of rotational inertia and angular velocity.",
    formula: "L = I\\omega",
    description:
      "Angular momentum (L) is the rotational analog of linear momentum. It depends on how mass is distributed (rotational inertia I) and how fast the object rotates (angular velocity ω). Angular momentum is a conserved quantity when no net external torque acts on a system.",
    steps: [
      "Identify the object's rotational inertia $I$ about the axis of rotation.",
      "Determine the angular velocity $\\omega$ in rad/s.",
      "Calculate angular momentum: $L = I\\omega$.",
      "Verify units: $\\text{kg}\\cdot\\text{m}^2/\\text{s}$ or $\\text{N}\\cdot\\text{m}\\cdot\\text{s}$.",
    ],
    examples: [
      {
        problem:
          "A figure skater with rotational inertia 3.0 kg·m² spins at 4.0 rad/s. What is her angular momentum?",
        solution:
          "$L = I\\omega = (3.0)(4.0) = 12\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$.",
      },
    ],
    mcqs: [
      {
        question:
          "A rotating object has its angular velocity doubled while its rotational inertia is halved. What happens to its angular momentum?",
        options: [
          "Doubles",
          "Halves",
          "Stays the same",
          "Quadruples",
        ],
        answerIndex: 2,
        explanation:
          "Since $L = I\\omega$, if I becomes I/2 and ω becomes 2ω, then $L_{\\text{new}} = (I/2)(2\\omega) = I\\omega = L_{\\text{original}}$. Options A and B represent single-factor changes. Option D would occur if both factors doubled.",
      },
      {
        question:
          "Two wheels have the same angular momentum. Wheel A has twice the rotational inertia of Wheel B. How do their angular velocities compare?",
        options: [
          "ω_A = 2ω_B",
          "ω_A = ω_B",
          "ω_A = ½ω_B",
          "ω_A = 4ω_B",
        ],
        answerIndex: 2,
        explanation:
          "Since $L = I\\omega$ and both have the same L, if $I_A = 2I_B$, then $I_A\\omega_A = I_B\\omega_B$ gives $2I_B\\omega_A = I_B\\omega_B$, so $\\omega_A = \\frac{1}{2}\\omega_B$. Options A and D incorrectly invert or square the relationship. Option B ignores the different inertias.",
      },
    ],
  },
  {
    id: "angular-impulse",
    name: "Angular Impulse-Momentum Theorem",
    unit: "Unit 6: Energy and Momentum of Rotating Systems",
    unitNumber: 6,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "The change in angular momentum equals the angular impulse (torque times time).",
    formula: "\\Delta L = \\tau\\Delta t",
    description:
      "The angular impulse-momentum theorem states that the change in an object's angular momentum equals the net torque multiplied by the time interval over which it acts. This is the rotational analog of the linear impulse-momentum theorem (Δp = FΔt).",
    steps: [
      "Identify initial and final angular momenta: $L_i = I\\omega_i$ and $L_f = I\\omega_f$.",
      "Calculate change in angular momentum: $\\Delta L = L_f - L_i$.",
      "Identify the net torque $\\tau$ and time interval $\\Delta t$.",
      "Apply the theorem: $\\Delta L = \\tau\\Delta t$ or $I\\omega_f - I\\omega_i = \\tau\\Delta t$.",
    ],
    examples: [
      {
        problem:
          "A wheel with rotational inertia 2.0 kg·m² experiences a constant torque of 8.0 N·m for 3.0 s, starting from rest. What is its final angular velocity?",
        solution:
          "Using $\\Delta L = \\tau\\Delta t$: $I\\omega_f - I\\omega_i = \\tau\\Delta t$. Since $\\omega_i = 0$: $I\\omega_f = \\tau\\Delta t$. $(2.0)\\omega_f = (8.0)(3.0) = 24$. $\\omega_f = 12\\ \\text{rad/s}$.",
      },
    ],
    mcqs: [
      {
        question:
          "A constant torque acts on a rotating object for 5.0 seconds, changing its angular momentum by 30 kg·m²/s. What is the magnitude of the torque?",
        options: ["6.0 N·m", "30 N·m", "150 N·m", "0.17 N·m"],
        answerIndex: 0,
        explanation:
          "Using $\\Delta L = \\tau\\Delta t$: $\\tau = \\Delta L/\\Delta t = 30/5.0 = 6.0\\ \\text{N}\\cdot\\text{m}$. Option B forgets to divide by time. Option C multiplies instead of divides. Option D inverts the calculation.",
      },
      {
        question:
          "To produce the same change in angular momentum in half the time requires a torque that is:",
        options: [
          "Half as large",
          "The same",
          "Twice as large",
          "Four times as large",
        ],
        answerIndex: 2,
        explanation:
          "Since $\\Delta L = \\tau\\Delta t$, if Δt is halved and ΔL stays constant, τ must double to compensate. Option A inverts the relationship. Option B ignores the time change. Option D incorrectly squares the factor.",
      },
    ],
  },
  {
    id: "conservation-angular-momentum",
    name: "Conservation of Angular Momentum",
    unit: "Unit 6: Energy and Momentum of Rotating Systems",
    unitNumber: 6,
    tags: ["MCQ frequent", "FRQ", "theorem"],
    summary:
      "When no net external torque acts on a system, total angular momentum remains constant.",
    formula:
      "L_i = L_f\\ \\text{(no net external torque)}",
    description:
      "Conservation of angular momentum is a fundamental principle stating that if the net external torque on a system is zero, the system's total angular momentum cannot change. This explains phenomena like ice skaters spinning faster when they pull their arms in (decreasing I requires ω to increase to keep L constant).",
    steps: [
      "Verify that no net external torque acts on the system (or that it's negligible).",
      "Write initial angular momentum: $L_i = I_i\\omega_i$.",
      "Write final angular momentum: $L_f = I_f\\omega_f$.",
      "Set them equal: $I_i\\omega_i = I_f\\omega_f$ and solve for the unknown.",
    ],
    examples: [
      {
        problem:
          "A figure skater spinning at 2.0 rad/s with arms extended (I = 4.0 kg·m²) pulls her arms in, reducing her rotational inertia to 1.5 kg·m². What is her new angular velocity?",
        solution:
          "Using conservation: $I_i\\omega_i = I_f\\omega_f$. $(4.0)(2.0) = (1.5)\\omega_f$. $\\omega_f = 8.0/1.5 = 5.3\\ \\text{rad/s}$.",
      },
    ],
    mcqs: [
      {
        question:
          "A spinning ice skater pulls her arms inward, reducing her rotational inertia by a factor of 3. What happens to her angular velocity?",
        options: [
          "Decreases by a factor of 3",
          "Increases by a factor of 3",
          "Stays the same",
          "Decreases by a factor of 9",
        ],
        answerIndex: 1,
        explanation:
          "By conservation of angular momentum, $I_i\\omega_i = I_f\\omega_f$. If I decreases by a factor of 3, ω must increase by a factor of 3. Option A inverts the relationship. Option C would violate conservation. Option D incorrectly squares the factor.",
      },
      {
        question:
          "Two disks rotating in opposite directions on the same axis collide and stick together. The combined system rotates slower than either disk initially did. Which conservation law explains this?",
        options: [
          "Conservation of energy",
          "Conservation of linear momentum",
          "Conservation of angular momentum",
          "Conservation of mass",
        ],
        answerIndex: 2,
        explanation:
          "Angular momentum is conserved in rotational collisions when no external torque acts. The opposite rotations partially cancel. Option A doesn't explain the direction effects. Option B applies to linear motion. Option D is irrelevant to rotational speed.",
      },
    ],
  },
  {
    id: "rolling-without-slipping",
    name: "Rolling Without Slipping Constraint",
    unit: "Unit 6: Energy and Momentum of Rotating Systems",
    unitNumber: 6,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "For an object rolling without slipping, the linear velocity of the center of mass equals the radius times angular velocity.",
    formula: "v_{\\text{cm}} = r\\omega,\\quad a_{\\text{cm}} = r\\alpha",
    description:
      "Rolling without slipping means the contact point between the rolling object and surface is instantaneously at rest (no sliding). This constraint mathematically links translational and rotational motion. It's crucial for solving problems involving rolling objects on inclines or with forces applied.",
    steps: [
      "Identify the radius $r$ of the rolling object.",
      "Write the constraint equation: $v_{\\text{cm}} = r\\omega$.",
      "For acceleration problems, use: $a_{\\text{cm}} = r\\alpha$.",
      "Use this relationship to eliminate variables when applying Newton's second law or energy conservation.",
    ],
    examples: [
      {
        problem:
          "A wheel of radius 0.30 m rolls without slipping at 4.5 m/s. What is its angular velocity?",
        solution:
          "Using $v_{\\text{cm}} = r\\omega$: $\\omega = v_{\\text{cm}}/r = 4.5/0.30 = 15\\ \\text{rad/s}$.",
      },
    ],
    mcqs: [
      {
        question:
          "A ball rolls without slipping down a ramp. If its center-of-mass velocity doubles, its angular velocity:",
        options: [
          "Stays the same",
          "Doubles",
          "Quadruples",
          "Halves",
        ],
        answerIndex: 1,
        explanation:
          "From $v_{\\text{cm}} = r\\omega$, angular velocity is directly proportional to linear velocity. If v doubles, ω doubles. Option A would violate the constraint. Option C treats it as a squared relationship. Option D inverts the relationship.",
      },
      {
        question:
          "A car's wheels have radius 0.40 m and rotate at 25 rad/s. If the wheels roll without slipping, what is the car's speed?",
        options: ["10 m/s", "62.5 m/s", "0.016 m/s", "15.7 m/s"],
        answerIndex: 0,
        explanation:
          "Using $v = r\\omega = (0.40)(25) = 10\\ \\text{m/s}$. Option B inverts the division (ω/r). Option C divides the wrong way (r/ω). Option D incorrectly uses 2πr or other circular motion formulas.",
      },
    ],
  },
  {
    id: "orbital-motion-energy",
    name: "Orbiting Satellites and Gravitational Energy",
    unit: "Unit 6: Energy and Momentum of Rotating Systems",
    unitNumber: 6,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "Satellites in circular orbit have kinetic and gravitational potential energy that follow specific relationships.",
    description:
      "For a satellite in circular orbit, gravitational force provides the centripetal force. The orbital speed is determined by the balance between gravitational attraction and required centripetal acceleration. The total mechanical energy (kinetic plus gravitational potential) is negative and equals half the potential energy.",
    steps: [
      "For orbital speed, set gravitational force equal to centripetal force: $\\frac{GMm}{r^2} = \\frac{mv^2}{r}$.",
      "Solve for orbital speed: $v = \\sqrt{\\frac{GM}{r}}$ (independent of satellite mass).",
      "Calculate kinetic energy: $K = \\frac{1}{2}mv^2 = \\frac{GMm}{2r}$.",
      "Calculate gravitational potential energy: $U = -\\frac{GMm}{r}$ (note: negative).",
      "Total energy: $E = K + U = -\\frac{GMm}{2r}$ (also negative, meaning bound orbit).",
    ],
    examples: [
      {
        problem:
          "A satellite orbits Earth at radius r. If it moves to an orbit of radius 2r, how does its orbital speed change?",
        solution:
          "Using $v = \\sqrt{GM/r}$, speed is inversely proportional to $\\sqrt{r}$. At radius 2r: $v_{\\text{new}} = \\sqrt{GM/(2r)} = \\sqrt{GM/r}/\\sqrt{2} = v_{\\text{old}}/\\sqrt{2}$. The speed decreases by a factor of $\\sqrt{2}$.",
      },
    ],
    mcqs: [
      {
        question:
          "Two satellites orbit Earth at different altitudes. Satellite A orbits at twice the radius of Satellite B. How do their orbital speeds compare?",
        options: [
          "v_A = 2v_B",
          "v_A = v_B/2",
          "v_A = v_B/√2",
          "v_A = √2 v_B",
        ],
        answerIndex: 2,
        explanation:
          "Since $v \\propto 1/\\sqrt{r}$, if $r_A = 2r_B$, then $v_A = v_B/\\sqrt{2}$. Option A treats it as direct proportionality. Option B uses linear inverse proportionality. Option D inverts the correct answer.",
      },
      {
        question:
          "For a satellite in circular orbit, which statement is true about its energy?",
        options: [
          "Kinetic energy equals potential energy",
          "Total energy equals kinetic energy",
          "Kinetic energy is half the magnitude of potential energy",
          "Potential energy is positive",
        ],
        answerIndex: 2,
        explanation:
          "For circular orbits, $K = GMm/(2r)$ and $U = -GMm/r$, so $K = |U|/2$. Option A is incorrect (they differ by a factor of 2 and have opposite signs). Option B ignores potential energy. Option D is wrong since gravitational PE is negative.",
      },
    ],
  },
];

export default energyMomentumRotatingSystemsTopics;
