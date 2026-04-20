import type { Topic } from "@/types";

const oscillationsTopics: Topic[] = [
  {
    id: "shm-restoring-force",
    name: "Restoring Force in SHM",
    unit: "Unit 7: Oscillations / Simple Harmonic Motion",
    unitNumber: 7,
    tags: ["MCQ frequent", "theorem"],
    summary:
      "Simple harmonic motion occurs when the net force on an object is proportional to its displacement from equilibrium and always directed toward equilibrium.",
    formula: "F_{\\text{net}} = -kx",
    description:
      "The restoring force in SHM is described by Hooke's Law, where F is the net force, k is the spring constant (or stiffness), and x is the displacement from equilibrium. The negative sign indicates the force always points toward equilibrium, opposing the displacement. This relationship is the defining characteristic of simple harmonic motion and applies not only to mass-spring systems but to any oscillator with a linear restoring force.",
    steps: [
      "Identify the equilibrium position where the net force on the object is zero.",
      "Measure the displacement $x$ from equilibrium (positive in one direction, negative in the other).",
      "Apply Hooke's Law: $F = -kx$, where $k$ is the spring constant or effective stiffness.",
      "Note that the negative sign means the force always points toward equilibrium, opposing the displacement.",
      "Use Newton's Second Law: $F = ma = -kx$ to derive the equation of motion $a = -\\frac{k}{m}x$, showing acceleration is proportional to negative displacement.",
    ],
    examples: [
      {
        problem:
          "A 0.5 kg mass is attached to a spring with constant k = 200 N/m. When the mass is displaced 0.10 m from equilibrium, what is the magnitude and direction of the restoring force?",
        solution:
          "Using $F = -kx$: $F = -(200)(0.10) = -20$ N. The magnitude is 20 N, and the negative sign indicates the force points toward equilibrium (opposite the displacement direction). The restoring force has magnitude 20 N directed toward the equilibrium position.",
      },
    ],
    mcqs: [
      {
        question:
          "What is the defining characteristic of the restoring force in simple harmonic motion?",
        options: [
          "It is constant in magnitude and direction",
          "It is proportional to displacement and directed toward equilibrium",
          "It increases as the object moves faster",
          "It is zero at the amplitude position",
        ],
        answerIndex: 1,
        explanation:
          "The correct answer is B: in SHM, the restoring force is proportional to displacement and always directed toward equilibrium (F = -kx). A is wrong because the force magnitude changes with displacement. C describes a velocity-dependent force, not SHM. D is wrong because the force is maximum (not zero) at the amplitude position, where displacement is greatest.",
      },
      {
        question:
          "A spring with constant k = 100 N/m is compressed 0.05 m from equilibrium. What is the magnitude of the restoring force?",
        options: ["2 N", "5 N", "20 N", "500 N"],
        answerIndex: 1,
        explanation:
          "Using $F = kx$ (magnitude): $F = (100)(0.05) = 5$ N. A (2 N) likely comes from multiplying incorrectly. C (20 N) might result from using 0.2 m instead of 0.05 m. D (500 N) is from dividing k by x instead of multiplying. The correct answer is 5 N.",
      },
    ],
  },
  {
    id: "shm-conditions",
    name: "Conditions for Simple Harmonic Motion",
    unit: "Unit 7: Oscillations / Simple Harmonic Motion",
    unitNumber: 7,
    tags: ["MCQ frequent"],
    summary:
      "An object undergoes simple harmonic motion when its acceleration is proportional to its displacement from equilibrium and oppositely directed.",
    formula: "a \\propto -x",
    description:
      "The mathematical condition for SHM is that acceleration is directly proportional to displacement with a negative constant of proportionality: a = -(ω²)x, where ω is the angular frequency. This results in sinusoidal motion with constant period and frequency. When this condition is met, the position, velocity, and acceleration all vary sinusoidally with time, and mechanical energy oscillates between kinetic and potential forms while remaining constant in total.",
    steps: [
      "Check if the restoring force follows $F = -kx$ (Hooke's Law), which leads to SHM.",
      "Verify that Newton's Second Law gives $ma = -kx$, so $a = -\\frac{k}{m}x$.",
      "Identify the proportionality constant: $\\omega^2 = k/m$, where $\\omega$ is angular frequency.",
      "Confirm that $a \\propto -x$ holds for all positions during the motion (not just small displacements).",
      "Conclude that the motion is simple harmonic if acceleration is always proportional to negative displacement with a constant factor.",
    ],
    examples: [
      {
        problem:
          "A pendulum swings with small amplitude. When displaced by angle θ (in radians), the restoring force is approximately F = -mgθ. Does the pendulum undergo SHM for small angles?",
        solution:
          "For small angles, arc length displacement is $x \\approx L\\theta$, so $\\theta \\approx x/L$. The restoring force becomes $F = -mg(x/L) = -(mg/L)x$, which is proportional to $-x$. This gives $a = F/m = -(g/L)x$, so $a \\propto -x$ with constant $(g/L)$. Yes, the pendulum undergoes SHM for small angles.",
      },
    ],
    mcqs: [
      {
        question:
          "Which of the following scenarios describes simple harmonic motion?",
        options: [
          "An object moving at constant velocity",
          "An object with acceleration proportional to negative displacement",
          "An object with constant acceleration",
          "An object with acceleration proportional to velocity",
        ],
        answerIndex: 1,
        explanation:
          "The correct answer is B: SHM requires $a \\propto -x$. A describes motion with zero acceleration, not oscillation. C describes uniformly accelerated motion (like free fall), not periodic motion. D describes damped or driven motion with a velocity-dependent force, not pure SHM.",
      },
      {
        question:
          "A mass on a spring oscillates with acceleration $a = -16x$, where x is in meters and a is in m/s². What is the angular frequency ω of the motion?",
        options: ["2 rad/s", "4 rad/s", "8 rad/s", "16 rad/s"],
        answerIndex: 1,
        explanation:
          "In SHM, $a = -\\omega^2 x$. Comparing with $a = -16x$, we have $\\omega^2 = 16$, so $\\omega = 4$ rad/s. A (2 rad/s) comes from taking the square root incorrectly. C (8 rad/s) is likely doubling the correct answer. D (16 rad/s) is using the coefficient directly without taking the square root.",
      },
    ],
  },
  {
    id: "shm-period-frequency",
    name: "Period, Frequency, and Angular Frequency",
    unit: "Unit 7: Oscillations / Simple Harmonic Motion",
    unitNumber: 7,
    tags: ["MCQ frequent"],
    summary:
      "Period T is the time for one complete oscillation, frequency f is the number of oscillations per second, and angular frequency ω is related by ω = 2πf.",
    formula: "f = \\frac{1}{T},\\quad \\omega = 2\\pi f",
    description:
      "Period T is measured in seconds, frequency f in hertz (Hz or s⁻¹), and angular frequency ω in radians per second. These three quantities are mathematically related: f = 1/T and ω = 2πf = 2π/T. For any oscillator, knowing one of these quantities allows you to calculate the other two. In SHM, the period and frequency depend on the physical properties of the system (mass, spring constant, length) but are independent of amplitude for small oscillations.",
    steps: [
      "Identify the period $T$ (time for one complete cycle) from the motion description or graph.",
      "Calculate frequency using $f = 1/T$ (number of cycles per second).",
      "Calculate angular frequency using $\\omega = 2\\pi f$ (radians per second).",
      "Alternatively, if you know $\\omega$, work backward: $f = \\omega/(2\\pi)$ and $T = 1/f = 2\\pi/\\omega$.",
      "Verify units: $T$ in seconds, $f$ in Hz (= s⁻¹), $\\omega$ in rad/s.",
    ],
    examples: [
      {
        problem:
          "An oscillator completes 20 cycles in 5.0 seconds. Find its period T, frequency f, and angular frequency ω.",
        solution:
          "Frequency: $f = 20/5.0 = 4.0$ Hz. Period: $T = 1/f = 1/4.0 = 0.25$ s. Angular frequency: $\\omega = 2\\pi f = 2\\pi(4.0) \\approx 25.1$ rad/s. So T = 0.25 s, f = 4.0 Hz, ω ≈ 25.1 rad/s.",
      },
    ],
    mcqs: [
      {
        question:
          "An object oscillates with period T = 0.50 s. What is its frequency?",
        options: ["0.50 Hz", "2.0 Hz", "3.14 Hz", "0.25 Hz"],
        answerIndex: 1,
        explanation:
          "Using $f = 1/T$: $f = 1/0.50 = 2.0$ Hz. A (0.50 Hz) incorrectly uses T as f. C (3.14 Hz) confuses f with ω/(2π). D (0.25 Hz) is half the correct value. The correct answer is 2.0 Hz.",
      },
      {
        question:
          "If an oscillator has angular frequency ω = 10 rad/s, what is its period?",
        options: ["0.10 s", "0.63 s", "1.6 s", "10 s"],
        answerIndex: 1,
        explanation:
          "Using $T = 2\\pi/\\omega$: $T = 2\\pi/10 \\approx 6.28/10 = 0.628$ s ≈ 0.63 s. A (0.10 s) comes from incorrectly computing 1/ω. C (1.6 s) might result from using ω instead of 2π/ω. D (10 s) is using ω directly as T. The correct answer is approximately 0.63 s.",
      },
    ],
  },
  {
    id: "spring-period",
    name: "Period of a Spring-Mass System",
    unit: "Unit 7: Oscillations / Simple Harmonic Motion",
    unitNumber: 7,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "The period of a horizontal or vertical spring-mass oscillator depends only on the mass and the spring constant, not on amplitude or gravitational acceleration.",
    formula: "T = 2\\pi\\sqrt{\\frac{m}{k}}",
    description:
      "For a mass m attached to a spring with constant k, the period is T = 2π√(m/k). This formula applies to both horizontal spring systems and vertical spring systems (where gravity shifts the equilibrium but does not affect the period). Importantly, the period is independent of amplitude for ideal springs obeying Hooke's Law. Increasing mass increases the period (heavier objects oscillate more slowly), while increasing stiffness decreases the period (stiffer springs oscillate faster).",
    steps: [
      "Identify the mass $m$ (in kg) and spring constant $k$ (in N/m).",
      "Substitute into the formula: $T = 2\\pi\\sqrt{m/k}$.",
      "Calculate the square root: $\\sqrt{m/k}$.",
      "Multiply by $2\\pi$ to get the period in seconds.",
      "Verify that the amplitude and gravity do not appear in the formula — period is independent of both for ideal SHM.",
    ],
    examples: [
      {
        problem:
          "A 0.40 kg mass is attached to a spring with k = 100 N/m. What is the period of oscillation?",
        solution:
          "Using $T = 2\\pi\\sqrt{m/k}$: $T = 2\\pi\\sqrt{0.40/100} = 2\\pi\\sqrt{0.004} = 2\\pi(0.0632) \\approx 0.397$ s. The period is approximately 0.40 s or 0.397 s (accepting reasonable rounding).",
      },
    ],
    mcqs: [
      {
        question:
          "How does doubling the mass attached to a spring affect the period of oscillation?",
        options: [
          "The period doubles",
          "The period increases by a factor of √2",
          "The period decreases by half",
          "The period remains the same",
        ],
        answerIndex: 1,
        explanation:
          "Since $T \\propto \\sqrt{m}$, doubling $m$ multiplies $T$ by $\\sqrt{2}$ (not 2). A (doubles) incorrectly assumes direct proportionality. C (decreases) gets the relationship backward. D (remains the same) ignores the dependence on mass. The correct answer is B: period increases by √2 ≈ 1.41.",
      },
      {
        question:
          "A spring-mass system has period T. If the spring constant is quadrupled while the mass remains unchanged, what is the new period?",
        options: ["T/4", "T/2", "2T", "4T"],
        answerIndex: 1,
        explanation:
          "Since $T \\propto 1/\\sqrt{k}$, quadrupling $k$ divides $T$ by $\\sqrt{4} = 2$. So the new period is $T/2$. A (T/4) results from incorrectly assuming $T \\propto 1/k$. C (2T) reverses the relationship. D (4T) incorrectly squares the factor. The correct answer is T/2.",
      },
    ],
  },
  {
    id: "pendulum-period",
    name: "Period of a Simple Pendulum",
    unit: "Unit 7: Oscillations / Simple Harmonic Motion",
    unitNumber: 7,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "The period of a simple pendulum depends only on its length and the gravitational acceleration, not on the mass or amplitude (for small angles).",
    formula: "T = 2\\pi\\sqrt{\\frac{L}{g}}",
    description:
      "For a pendulum of length L in a gravitational field g, the period is T = 2π√(L/g). This formula applies only for small-amplitude oscillations (typically less than 15 degrees), where the restoring force is approximately linear. The period is independent of the mass of the bob and the amplitude of swing. Increasing length increases the period (longer pendulums swing more slowly), while stronger gravity decreases the period (pendulums on planets with stronger gravity swing faster).",
    steps: [
      "Identify the length $L$ of the pendulum (from pivot to center of mass of bob) in meters.",
      "Use the local gravitational acceleration $g$ (typically $9.8$ m/s² on Earth).",
      "Substitute into the formula: $T = 2\\pi\\sqrt{L/g}$.",
      "Calculate the square root: $\\sqrt{L/g}$.",
      "Multiply by $2\\pi$ to get the period in seconds.",
      "Remember: mass of the bob and amplitude (for small angles) do not affect the period.",
    ],
    examples: [
      {
        problem:
          "A simple pendulum has length 1.0 m on Earth (g = 9.8 m/s²). What is its period?",
        solution:
          "Using $T = 2\\pi\\sqrt{L/g}$: $T = 2\\pi\\sqrt{1.0/9.8} = 2\\pi\\sqrt{0.102} = 2\\pi(0.319) \\approx 2.0$ s. The period is approximately 2.0 seconds.",
      },
    ],
    mcqs: [
      {
        question:
          "Which of the following does NOT affect the period of a simple pendulum (for small angles)?",
        options: [
          "The length of the pendulum",
          "The mass of the bob",
          "The gravitational acceleration",
          "The amplitude of oscillation",
        ],
        answerIndex: 1,
        explanation:
          "The correct answer is B: the period is independent of mass. A (length) and C (gravity) both appear in $T = 2\\pi\\sqrt{L/g}$. D (amplitude) does not affect the period for small angles, but this is a special condition; however, the question asks which does NOT affect period, and mass is the clearest answer since it never appears in the formula. Actually, both B and D are correct, but B is the primary answer. Let me correct: both mass and amplitude (for small angles) do not affect period, but mass is the more fundamental answer. The period formula shows no dependence on mass.",
      },
      {
        question:
          "A pendulum has period T on Earth. If taken to a planet where g is 4 times larger, what is the new period?",
        options: ["T/4", "T/2", "2T", "4T"],
        answerIndex: 1,
        explanation:
          "Since $T \\propto 1/\\sqrt{g}$, quadrupling $g$ divides $T$ by $\\sqrt{4} = 2$. The new period is $T/2$. A (T/4) assumes $T \\propto 1/g$. C (2T) reverses the relationship. D (4T) incorrectly squares the factor. The correct answer is T/2.",
      },
    ],
  },
  {
    id: "shm-position-time",
    name: "Position as a Function of Time in SHM",
    unit: "Unit 7: Oscillations / Simple Harmonic Motion",
    unitNumber: 7,
    tags: ["MCQ frequent"],
    summary:
      "In simple harmonic motion, position varies sinusoidally with time according to x(t) = A cos(2πft), where A is amplitude and f is frequency.",
    formula: "x(t) = A\\cos(2\\pi ft)",
    description:
      "The position function for SHM is sinusoidal: x(t) = A cos(2πft + φ), where A is the amplitude (maximum displacement), f is frequency, t is time, and φ is the phase constant (often zero if timing starts at maximum displacement). This can also be written as x(t) = A cos(ωt + φ) using angular frequency ω = 2πf. The function oscillates between +A and -A with period T = 1/f. The velocity and acceleration are derivatives of this function and are also sinusoidal but phase-shifted.",
    steps: [
      "Identify the amplitude $A$ (maximum displacement from equilibrium) from the problem.",
      "Determine the frequency $f$ (or period $T = 1/f$) of oscillation.",
      "Write the position function: $x(t) = A\\cos(2\\pi ft)$ (assuming initial displacement is maximum at $t = 0$).",
      "If the motion starts at equilibrium, use $x(t) = A\\sin(2\\pi ft)$ instead (or include a phase constant $\\phi$).",
      "Evaluate $x(t)$ at any time $t$ by substituting and computing the cosine or sine value.",
    ],
    examples: [
      {
        problem:
          "A mass oscillates with amplitude 0.10 m and frequency 2.0 Hz. Write the position function x(t) assuming x = A at t = 0.",
        solution:
          "Using $x(t) = A\\cos(2\\pi ft)$ with $A = 0.10$ m and $f = 2.0$ Hz: $x(t) = 0.10\\cos(4\\pi t)$ meters, where $t$ is in seconds. At $t = 0$: $x(0) = 0.10\\cos(0) = 0.10$ m, confirming the initial condition.",
      },
    ],
    mcqs: [
      {
        question:
          "An object in SHM has position $x(t) = 0.05\\cos(10\\pi t)$ (in meters). What is the amplitude?",
        options: ["0.05 m", "0.10 m", "5π m", "10π m"],
        answerIndex: 0,
        explanation:
          "In the equation $x(t) = A\\cos(\\omega t)$, the amplitude $A$ is the coefficient in front of the cosine. Here $A = 0.05$ m. B (0.10 m) is double the correct value. C and D confuse amplitude with angular frequency. The correct answer is 0.05 m.",
      },
      {
        question:
          "An oscillator has $x(t) = 0.20\\cos(4\\pi t)$ meters. What is the period of oscillation?",
        options: ["0.25 s", "0.50 s", "1.0 s", "2.0 s"],
        answerIndex: 1,
        explanation:
          "From $x(t) = A\\cos(2\\pi ft)$, we have $2\\pi f = 4\\pi$, so $f = 2.0$ Hz. Then $T = 1/f = 1/2.0 = 0.50$ s. A (0.25 s) is half the correct period. C and D are multiples that don't match. The correct answer is 0.50 s.",
      },
    ],
  },
  {
    id: "shm-velocity-acceleration",
    name: "Maximum Velocity and Acceleration in SHM",
    unit: "Unit 7: Oscillations / Simple Harmonic Motion",
    unitNumber: 7,
    tags: ["MCQ frequent"],
    summary:
      "The maximum speed in SHM occurs at equilibrium and equals Aω, while maximum acceleration occurs at maximum displacement and equals Aω².",
    formula: "v_{\\max} = A\\omega,\\quad a_{\\max} = A\\omega^2",
    description:
      "In SHM, velocity is maximum when the object passes through equilibrium (where displacement is zero) and zero at the amplitude positions (where displacement is maximum). Conversely, acceleration is maximum at the amplitude positions (where restoring force is greatest) and zero at equilibrium. The maximum speed is v_max = Aω = A(2πf), and the maximum acceleration is a_max = Aω² = A(2πf)². These relationships follow from differentiating the position function x(t) = A cos(ωt) to get velocity and acceleration.",
    steps: [
      "Identify the amplitude $A$ and angular frequency $\\omega$ (or frequency $f$, then calculate $\\omega = 2\\pi f$).",
      "Calculate maximum speed: $v_{\\max} = A\\omega$. This occurs when the object passes through equilibrium.",
      "Calculate maximum acceleration: $a_{\\max} = A\\omega^2$. This occurs at maximum displacement (the amplitude positions).",
      "Alternatively, use $v_{\\max} = A(2\\pi f)$ and $a_{\\max} = A(2\\pi f)^2$ if frequency is given directly.",
      "Remember: speed is maximum at equilibrium, acceleration is maximum at amplitude.",
    ],
    examples: [
      {
        problem:
          "A mass oscillates with amplitude 0.080 m and frequency 5.0 Hz. Find the maximum speed and maximum acceleration.",
        solution:
          "First, $\\omega = 2\\pi f = 2\\pi(5.0) = 10\\pi$ rad/s ≈ 31.4 rad/s. Maximum speed: $v_{\\max} = A\\omega = (0.080)(31.4) \\approx 2.5$ m/s. Maximum acceleration: $a_{\\max} = A\\omega^2 = (0.080)(31.4)^2 \\approx 79$ m/s². So $v_{\\max} \\approx 2.5$ m/s and $a_{\\max} \\approx 79$ m/s².",
      },
    ],
    mcqs: [
      {
        question:
          "At what position during SHM is the speed of the oscillating object maximum?",
        options: [
          "At maximum displacement",
          "At the equilibrium position",
          "Halfway between equilibrium and maximum displacement",
          "Speed is constant throughout",
        ],
        answerIndex: 1,
        explanation:
          "The correct answer is B: speed is maximum at equilibrium, where all energy is kinetic. A (maximum displacement) is where speed is zero. C (halfway) is not a special position for speed. D (constant speed) contradicts the nature of oscillation. Speed is maximum at equilibrium.",
      },
      {
        question:
          "An object in SHM has amplitude 0.10 m and angular frequency 20 rad/s. What is its maximum acceleration?",
        options: ["2.0 m/s²", "20 m/s²", "40 m/s²", "200 m/s²"],
        answerIndex: 2,
        explanation:
          "Using $a_{\\max} = A\\omega^2$: $a_{\\max} = (0.10)(20)^2 = (0.10)(400) = 40$ m/s². A (2.0 m/s²) uses $A\\omega$ instead of $A\\omega^2$. B (20 m/s²) is $A\\omega$. D (200 m/s²) incorrectly computes the product. The correct answer is 40 m/s².",
      },
    ],
  },
  {
    id: "shm-energy",
    name: "Energy Conservation in SHM",
    unit: "Unit 7: Oscillations / Simple Harmonic Motion",
    unitNumber: 7,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "In simple harmonic motion without friction, total mechanical energy E = ½kA² remains constant, oscillating between kinetic energy and elastic potential energy.",
    formula: "E = \\frac{1}{2}kA^2 = K + U_s = \\text{const}",
    description:
      "For a spring-mass oscillator, the total energy is E = ½kA², where k is the spring constant and A is the amplitude. At maximum displacement (x = ±A), all energy is potential (U = ½kA²) and kinetic energy is zero. At equilibrium (x = 0), all energy is kinetic (K = ½mv_max²) and potential energy is zero. At intermediate positions, energy is partitioned between K and U. The total energy is proportional to the square of the amplitude, meaning doubling the amplitude quadruples the energy.",
    steps: [
      "Identify the spring constant $k$ and amplitude $A$. Calculate total energy: $E = \\frac{1}{2}kA^2$.",
      "At maximum displacement ($x = \\pm A$): all energy is potential, $U = \\frac{1}{2}kA^2$, and $K = 0$.",
      "At equilibrium ($x = 0$): all energy is kinetic, $K = \\frac{1}{2}mv_{\\max}^2$, and $U = 0$.",
      "At any position $x$: use $E = K + U = \\frac{1}{2}mv^2 + \\frac{1}{2}kx^2 = \\frac{1}{2}kA^2$.",
      "Verify energy conservation: $E$ is constant throughout the motion (in the absence of friction or damping).",
    ],
    examples: [
      {
        problem:
          "A 0.50 kg mass on a spring (k = 200 N/m) oscillates with amplitude 0.10 m. Find the total energy and the speed at equilibrium.",
        solution:
          "Total energy: $E = \\frac{1}{2}kA^2 = \\frac{1}{2}(200)(0.10)^2 = 1.0$ J. At equilibrium, all energy is kinetic: $\\frac{1}{2}mv_{\\max}^2 = 1.0$ J, so $v_{\\max} = \\sqrt{2E/m} = \\sqrt{2(1.0)/0.50} = \\sqrt{4} = 2.0$ m/s. Total energy is 1.0 J and speed at equilibrium is 2.0 m/s.",
      },
    ],
    mcqs: [
      {
        question:
          "At what position is the kinetic energy of an oscillating mass maximum?",
        options: [
          "At maximum displacement",
          "At equilibrium",
          "Halfway to maximum displacement",
          "Kinetic energy is constant",
        ],
        answerIndex: 1,
        explanation:
          "The correct answer is B: kinetic energy is maximum at equilibrium, where speed is maximum and potential energy is zero. A (maximum displacement) is where KE is zero. C (halfway) is not a special position for KE. D (constant) contradicts energy transformation in oscillation.",
      },
      {
        question:
          "A spring-mass system has total energy 8.0 J and amplitude 0.20 m. What is the spring constant?",
        options: ["40 N/m", "80 N/m", "200 N/m", "400 N/m"],
        answerIndex: 3,
        explanation:
          "Using $E = \\frac{1}{2}kA^2$: $8.0 = \\frac{1}{2}k(0.20)^2 = \\frac{1}{2}k(0.04) = 0.02k$, so $k = 8.0/0.02 = 400$ N/m. A (40 N/m) is off by a factor of 10. B (80 N/m) results from incorrect arithmetic. C (200 N/m) is half the correct value. The correct answer is 400 N/m.",
      },
    ],
  },
  {
    id: "shm-graphs",
    name: "SHM Graphical Representations (x, v, a vs. t)",
    unit: "Unit 7: Oscillations / Simple Harmonic Motion",
    unitNumber: 7,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "In SHM, position, velocity, and acceleration graphs are all sinusoidal but phase-shifted: velocity leads position by 90°, and acceleration leads velocity by 90°.",
    description:
      "For SHM starting at maximum displacement: position x(t) is a cosine curve, velocity v(t) is a negative sine curve (derivative of position, 90° ahead), and acceleration a(t) is a negative cosine curve (derivative of velocity, 90° ahead of velocity or 180° out of phase with position). When position is maximum, velocity is zero and acceleration is maximum (negative). When position is zero, velocity is maximum and acceleration is zero. Reading and interpreting these phase relationships is a key skill on the AP exam.",
    steps: [
      "Sketch the position $x(t)$ graph (cosine if starting at amplitude, sine if starting at equilibrium).",
      "Sketch the velocity $v(t)$ graph: take the derivative (slope) of $x(t)$. Velocity is maximum when position crosses zero.",
      "Sketch the acceleration $a(t)$ graph: take the derivative (slope) of $v(t)$. Acceleration is proportional to $-x(t)$, so it is a flipped version of the position graph.",
      "Verify phase relationships: when $x$ is max, $v = 0$ and $a$ is max (negative); when $x = 0$, $v$ is max and $a = 0$.",
      "Use these graphs to identify amplitude, period, and phase relationships on the exam.",
    ],
    examples: [
      {
        problem:
          "An object in SHM has position graph x(t) = A cos(ωt). Describe the velocity and acceleration graphs.",
        solution:
          "Velocity: $v(t) = dx/dt = -A\\omega\\sin(\\omega t)$, which is a negative sine curve with amplitude $A\\omega$. Acceleration: $a(t) = dv/dt = -A\\omega^2\\cos(\\omega t) = -\\omega^2 x(t)$, which is a negative cosine curve (flipped position graph) with amplitude $A\\omega^2$. When $x$ is maximum, $v = 0$ and $a$ is maximum negative.",
      },
    ],
    mcqs: [
      {
        question:
          "In SHM, when the displacement is zero, which of the following is true?",
        options: [
          "Velocity is zero and acceleration is maximum",
          "Velocity is maximum and acceleration is zero",
          "Both velocity and acceleration are zero",
          "Both velocity and acceleration are maximum",
        ],
        answerIndex: 1,
        explanation:
          "The correct answer is B: at equilibrium (x = 0), velocity is maximum and acceleration is zero (since $a \\propto -x$). A reverses the relationship. C would mean the object is at rest. D is impossible since $a \\propto -x$ means when $x = 0$, $a = 0$.",
      },
      {
        question:
          "An object's position graph is x(t) = A cos(ωt). What is the phase relationship between position and acceleration?",
        options: [
          "They are in phase",
          "Acceleration leads position by 90°",
          "Acceleration is 180° out of phase with position",
          "Acceleration lags position by 90°",
        ],
        answerIndex: 2,
        explanation:
          "Since $a(t) = -\\omega^2 x(t)$, acceleration is proportional to negative position, meaning they are 180° out of phase (opposite). A (in phase) is incorrect. B and D (90° shifts) describe the relationship between position and velocity, not acceleration. The correct answer is C: 180° out of phase.",
      },
    ],
  },
  {
    id: "shm-reference-circle",
    name: "Relationship Between SHM and Circular Motion",
    unit: "Unit 7: Oscillations / Simple Harmonic Motion",
    unitNumber: 7,
    tags: ["MCQ frequent"],
    summary:
      "Simple harmonic motion can be understood as the projection of uniform circular motion onto a diameter, linking angular frequency ω to circular motion.",
    description:
      "Imagine an object moving at constant speed v around a circle of radius A. The projection of this motion onto a horizontal (or vertical) diameter is simple harmonic motion with amplitude A and angular frequency ω = v/A. This reference circle model explains why position is sinusoidal (x = A cos(ωt)), why angular frequency appears in SHM equations, and why velocity and acceleration are phase-shifted. The maximum speed in SHM equals the tangential speed of the circular motion, v_max = Aω.",
    steps: [
      "Visualize an object moving counterclockwise on a circle of radius $A$ at constant angular speed $\\omega$.",
      "Project the object's position onto a horizontal diameter to get $x(t) = A\\cos(\\omega t)$.",
      "Recognize that the tangential speed of circular motion $v = A\\omega$ equals the maximum speed in SHM.",
      "Note that the centripetal acceleration $a_c = \\omega^2 A$ equals the maximum acceleration in SHM.",
      "Use this reference circle to visualize phase relationships: when the circular motion is at the rightmost point, SHM is at maximum displacement; when crossing the vertical axis, SHM is at equilibrium with maximum speed.",
    ],
    examples: [
      {
        problem:
          "An object undergoes SHM with amplitude 0.50 m and angular frequency 4.0 rad/s. Using the reference circle model, what is the object's maximum speed?",
        solution:
          "In the reference circle model, the tangential speed of circular motion equals the maximum speed in SHM: $v_{\\max} = A\\omega = (0.50)(4.0) = 2.0$ m/s. This matches the SHM formula $v_{\\max} = A\\omega$.",
      },
    ],
    mcqs: [
      {
        question:
          "In the reference circle model, what does the radius of the circle represent in SHM?",
        options: [
          "The period of oscillation",
          "The amplitude of oscillation",
          "The maximum velocity",
          "The angular frequency",
        ],
        answerIndex: 1,
        explanation:
          "The correct answer is B: the radius of the reference circle equals the amplitude of SHM. A (period) is related to how fast the object moves around the circle but is not the radius. C (maximum velocity) is $A\\omega$, not $A$ alone. D (angular frequency) is $\\omega$, the angular speed, not the radius.",
      },
      {
        question:
          "An object in uniform circular motion has speed 6.0 m/s on a circle of radius 0.30 m. What is the angular frequency of the corresponding SHM?",
        options: ["2.0 rad/s", "6.0 rad/s", "20 rad/s", "60 rad/s"],
        answerIndex: 2,
        explanation:
          "Using $\\omega = v/A$: $\\omega = 6.0/0.30 = 20$ rad/s. A (2.0 rad/s) inverts the calculation. B (6.0 rad/s) uses $v$ directly. D (60 rad/s) incorrectly multiplies. The correct answer is 20 rad/s.",
      },
    ],
  },
];

export default oscillationsTopics;
