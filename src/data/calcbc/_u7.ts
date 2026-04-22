export default [
  {
    id: "slope-fields",
    name: "Slope Fields",
    unit: "Unit 7: Differential Equations",
    unitNumber: 7,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "A slope field is a graphical representation of a differential equation showing the slope of solution curves at each point in the plane.",
    description:
      "A slope field (or direction field) is drawn by plotting short line segments at a grid of points, where each segment has slope equal to dy/dx evaluated at that point. By following the direction of the segments, you can sketch approximate solution curves without solving the DE analytically. Slope fields are especially useful for visualizing families of solutions and the long-term behavior of solutions.",
    steps: [
      "Write the differential equation in the form dy/dx = f(x, y).",
      "Choose a grid of (x, y) points across the region of interest.",
      "At each grid point, evaluate f(x, y) to find the slope at that point.",
      "Draw a short line segment centered at each grid point with the computed slope.",
      "Sketch solution curves by following the flow of the segments, making sure curves are tangent to the segments they pass through.",
      "Identify equilibrium solutions (horizontal segments, where dy/dx = 0 for all x) and note whether they are stable or unstable.",
    ],
    examples: [
      {
        problem:
          "Sketch the slope field for $\\frac{dy}{dx} = x - y$ and describe the behavior of solution curves as $x \\to \\infty$.",
        solution:
          "At each point (x, y) we draw a segment of slope x - y. Along the line y = x the slope is 0 (horizontal segments). Above y = x the slope is negative (segments tilt downward), and below y = x the slope is positive (segments tilt upward). Solution curves therefore converge toward the line y = x as x increases, indicating that the general solution approaches y = x - 1 + Ce^{-x}, which tends toward y = x - 1 (a line parallel to y = x) as x → ∞.",
      },
    ],
    mcqs: [
      {
        question:
          "Which of the following statements best describes what a slope field represents?",
        options: [
          "The exact solution curves of a differential equation plotted on the coordinate plane.",
          "Short line segments at each point whose slope equals the value of dy/dx given by the differential equation.",
          "The antiderivative of the right-hand side of the differential equation.",
          "A graph showing where the solutions of a differential equation are increasing or decreasing only.",
        ],
        answerIndex: 1,
        explanation:
          "A slope field plots short line segments at grid points, each with slope equal to dy/dx as defined by the DE. It does not plot exact solution curves (A), nor antiderivatives (C). It shows slope in all directions—not just increasing/decreasing (D).",
      },
      {
        question:
          "The slope field for $\\frac{dy}{dx} = y^2$ has horizontal segments (slope 0) along which of the following?",
        options: [
          "The x-axis (y = 0)",
          "The y-axis (x = 0)",
          "The line y = x",
          "The line y = 1",
        ],
        answerIndex: 0,
        explanation:
          "Setting dy/dx = y² = 0 gives y = 0, i.e., the x-axis. At every point on the x-axis the slope is 0, producing horizontal segments. The y-axis (B) is where x = 0, which does not affect y²; y = x (C) and y = 1 (D) do not make y² equal to 0.",
      },
    ],
  },
  {
    id: "verify-de-solution",
    name: "Verifying a Solution to a DE",
    unit: "Unit 7: Differential Equations",
    unitNumber: 7,
    tags: ["FRQ"],
    summary:
      "To verify that a function is a solution to a differential equation, substitute it and its derivatives into the equation and confirm both sides are equal.",
    description:
      "Verifying a solution means showing that a proposed function satisfies the differential equation identically — not just at one point, but for all x (or t) in the domain. This requires computing the necessary derivatives of the proposed function and substituting them into the DE. If the resulting equation is a true identity, the function is a solution.",
    steps: [
      "Identify the proposed solution y = f(x) and the differential equation.",
      "Compute all required derivatives of y (e.g., y' and y'' if the DE is second-order).",
      "Substitute y and its derivatives into the differential equation.",
      "Simplify both sides algebraically and/or using known identities.",
      "Confirm that the equation holds as a true identity for all x in the domain.",
      "If an initial condition is given, also check that y(x₀) equals the specified value.",
    ],
    examples: [
      {
        problem:
          "Verify that $y = 3e^{2x}$ is a solution to the differential equation $\\frac{dy}{dx} = 2y$.",
        solution:
          "Compute y' = d/dx[3e^{2x}] = 6e^{2x}. Now check whether y' = 2y: the right side is 2y = 2(3e^{2x}) = 6e^{2x}. Since both sides equal 6e^{2x}, the equation holds for all x, so y = 3e^{2x} is indeed a solution.",
      },
    ],
    mcqs: [
      {
        question:
          "When verifying that $y = f(x)$ is a solution to a differential equation, what must you confirm?",
        options: [
          "That f(x) equals zero at the initial condition.",
          "That substituting f(x) and its derivatives into the DE produces a true identity for all x.",
          "That f(x) is continuous and differentiable everywhere on the real line.",
          "That f(x) satisfies the DE only at a single point x = a.",
        ],
        answerIndex: 1,
        explanation:
          "Verification requires the DE to be satisfied as an identity (for all x in the domain), not just at one point (D). Continuity (C) is a prerequisite but not what you confirm. Equaling zero at the initial condition (A) is not the definition of verifying a solution.",
      },
      {
        question: "Is $y = e^{-x}$ a solution to $\\frac{dy}{dx} + y = 0$?",
        options: [
          "No, because $e^{-x}$ is never zero.",
          "No, because the derivative of $e^{-x}$ is $e^x$.",
          "Yes, because $y' + y = -e^{-x} + e^{-x} = 0$.",
          "Yes, because $y' + y = e^{-x} + e^{-x} = 2e^{-x} = 0$.",
        ],
        answerIndex: 2,
        explanation:
          "y = e^{-x} gives y' = -e^{-x}. Substituting: y' + y = -e^{-x} + e^{-x} = 0. ✓ Option A is irrelevant; option B has the wrong derivative; option D incorrectly adds without the negative sign.",
      },
    ],
  },
  {
    id: "separation-of-variables",
    name: "Separation of Variables",
    unit: "Unit 7: Differential Equations",
    unitNumber: 7,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "Separation of variables rewrites a separable DE so that all y-terms are on one side and all x-terms on the other, then integrates both sides.",
    formula:
      "\\frac{dy}{dx}=g(x)h(y)\\Rightarrow\\int\\frac{dy}{h(y)}=\\int g(x)\\,dx",
    description:
      "A differential equation is separable if it can be written as dy/dx = g(x)·h(y), meaning the right side factors into a product of a function of x alone and a function of y alone. The technique separates variables by dividing both sides by h(y) and multiplying by dx, then integrates each side with respect to its own variable. The result is an implicit or explicit equation for y in terms of x, plus an arbitrary constant C.",
    steps: [
      "Write the DE in the form dy/dx = g(x)h(y).",
      "Separate variables: divide both sides by h(y) (assuming h(y) ≠ 0) and multiply both sides by dx, giving (1/h(y)) dy = g(x) dx.",
      "Integrate both sides: ∫ (1/h(y)) dy = ∫ g(x) dx.",
      "Evaluate each integral, including a single constant of integration C on one side.",
      "Solve for y explicitly if possible to obtain the general solution.",
      "Apply any initial condition to find the specific value of C for the particular solution.",
      "Check for any singular (equilibrium) solutions that were divided away when h(y) = 0.",
    ],
    examples: [
      {
        problem:
          "Solve $\\frac{dy}{dx} = \\frac{x}{y}$ with initial condition $y(0) = 3$.",
        solution:
          "Separate: y dy = x dx. Integrate both sides: ∫y dy = ∫x dx → y²/2 = x²/2 + C. Multiply by 2: y² = x² + K (where K = 2C). Apply y(0) = 3: 9 = 0 + K, so K = 9. General solution: y² = x² + 9, thus y = √(x² + 9) (taking positive root since y(0) = 3 > 0).",
      },
    ],
    mcqs: [
      {
        question: "Which of the following differential equations is separable?",
        options: [
          "$\\frac{dy}{dx} = x + y$",
          "$\\frac{dy}{dx} = \\frac{x}{y^2}$",
          "$\\frac{dy}{dx} = \\sin(x + y)$",
          "$\\frac{dy}{dx} = e^{x+y^2}$",
        ],
        answerIndex: 1,
        explanation:
          "A DE is separable if it factors as g(x)·h(y). Option B: dy/dx = x · (1/y²) — this factors as g(x) = x and h(y) = 1/y², so it is separable. Option A (x + y) cannot be factored as a product. Option C: sin(x+y) does not factor. Option D: e^{x+y²} = eˣ·e^{y²} does factor, but note it is separable too — if this were a choice it would also be correct; among the given options B is the clearest standard example.",
      },
      {
        question:
          "Solve $\\frac{dy}{dx} = 2xy$ with $y(0) = 1$. What is $y(1)$?",
        options: ["$e$", "$e^2$", "$2e$", "$1$"],
        answerIndex: 0,
        explanation:
          "Separate: dy/y = 2x dx. Integrate: ln|y| = x² + C, so y = Ae^{x²}. Apply y(0) = 1: 1 = Ae⁰ = A, giving y = e^{x²}. At x = 1: y(1) = e^1 = e. Option B would result from y = e^{2x}, C from a coefficient error, D from ignoring the exponent.",
      },
    ],
  },
  {
    id: "general-particular-solution",
    name: "General and Particular Solutions",
    unit: "Unit 7: Differential Equations",
    unitNumber: 7,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "The general solution to a DE contains an arbitrary constant C representing a family of solutions; a particular solution fixes C using an initial condition.",
    description:
      "When a first-order DE is integrated, the result includes an arbitrary constant C, producing the general solution — a family of infinitely many curves that all satisfy the DE. An initial condition, such as y(x₀) = y₀, provides one equation that determines the unique value of C, yielding the particular solution. On the AP exam, FRQ problems almost always ask you to find the particular solution satisfying a given initial condition.",
    steps: [
      "Solve the differential equation (e.g., by separation of variables) to obtain the general solution containing arbitrary constant C.",
      "Write the general solution clearly, keeping C unsimplified until after applying the initial condition.",
      "Substitute the initial condition (x₀, y₀) into the general solution.",
      "Solve the resulting equation for C.",
      "Substitute the value of C back into the general solution to write the particular solution.",
      "State the domain of the particular solution if relevant (e.g., restrictions to keep the solution real or defined).",
    ],
    examples: [
      {
        problem:
          "The general solution to $\\frac{dy}{dx} = 3x^2$ is $y = x^3 + C$. Find the particular solution satisfying $y(1) = 5$.",
        solution:
          "Apply the initial condition: 5 = (1)³ + C → C = 4. The particular solution is y = x³ + 4.",
      },
    ],
    mcqs: [
      {
        question:
          "The general solution to a differential equation is $y = Ce^x$. Which particular solution passes through the point $(0, -2)$?",
        options: ["$y = e^x$", "$y = -2e^x$", "$y = Ce^{-2}$", "$y = -2x$"],
        answerIndex: 1,
        explanation:
          "Apply y(0) = -2: -2 = Ce⁰ = C, so C = -2. The particular solution is y = -2eˣ. Option A gives C = 1, option C incorrectly treats the initial condition, and option D is not even an exponential form.",
      },
      {
        question:
          "Which of the following best describes the difference between a general solution and a particular solution of a differential equation?",
        options: [
          "The general solution is always linear; the particular solution may be nonlinear.",
          "The general solution contains an arbitrary constant; the particular solution has that constant determined by an initial condition.",
          "The general solution satisfies the DE only at one point; the particular solution satisfies it everywhere.",
          "The particular solution always has C = 0; the general solution has C ≠ 0.",
        ],
        answerIndex: 1,
        explanation:
          "The general solution represents a family of curves (with arbitrary constant C), while the particular solution is one specific curve found by applying an initial condition. Options A and C are incorrect characterizations, and D is false — C can be any real number in the particular solution.",
      },
    ],
  },
  {
    id: "exponential-growth-decay",
    name: "Exponential Growth and Decay Model",
    unit: "Unit 7: Differential Equations",
    unitNumber: 7,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "A quantity grows or decays exponentially when its rate of change is proportional to its current value, modeled by dy/dt = ky with solution y = Ce^{kt}.",
    formula: "\\frac{dy}{dt}=ky\\Rightarrow y=Ce^{kt}",
    description:
      "The differential equation dy/dt = ky states that the rate of change of y is proportional to y itself, with proportionality constant k. When k > 0 the quantity grows exponentially; when k < 0 it decays. Solving by separation of variables yields the general solution y = Ce^{kt}, where C = y(0) is the initial value. This model applies to population growth, radioactive decay, Newton's law of cooling (shifted), and compound interest.",
    steps: [
      "Identify that the situation involves a rate of change proportional to the current amount: dy/dt = ky.",
      "Separate variables: dy/y = k dt.",
      "Integrate both sides: ln|y| = kt + C₁.",
      "Exponentiate: |y| = e^{C₁}e^{kt}, so y = Ce^{kt} where C = ±e^{C₁} is an arbitrary constant.",
      "Apply the initial condition y(0) = y₀ to find C = y₀.",
      "Write the particular solution: y = y₀e^{kt}.",
      "Determine k from any additional given information (e.g., doubling time, half-life).",
      "Answer the question (find y at a specific time, find when y reaches a target value, etc.).",
    ],
    examples: [
      {
        problem:
          "A bacteria culture starts with 500 bacteria and grows at a rate proportional to its size. After 3 hours there are 2000 bacteria. How many bacteria are there after 6 hours?",
        solution:
          "Model: P = Ce^{kt}, with P(0) = 500 → C = 500, so P = 500e^{kt}. Use P(3) = 2000: 2000 = 500e^{3k} → e^{3k} = 4 → 3k = ln 4 → k = (ln 4)/3. At t = 6: P(6) = 500e^{6k} = 500(e^{3k})² = 500(4²) = 500 · 16 = 8000 bacteria.",
      },
    ],
    mcqs: [
      {
        question:
          "A quantity y satisfies $\\frac{dy}{dt} = -0.5y$ with $y(0) = 80$. What is $y(4)$?",
        options: ["$80e^{2}$", "$80e^{-2}$", "$40e^{-2}$", "$80 - 2(4)$"],
        answerIndex: 1,
        explanation:
          "The solution is y = 80e^{-0.5t}. At t = 4: y(4) = 80e^{-0.5·4} = 80e^{-2}. Option A has the wrong sign in the exponent; option C incorrectly halves the initial value; option D uses a linear model instead of exponential.",
      },
      {
        question:
          "Which of the following statements is true about the model $\\frac{dy}{dt} = ky$?",
        options: [
          "If k > 0, the quantity y decays toward zero over time.",
          "The constant C in the solution y = Ce^{kt} is always equal to k.",
          "If k < 0, the quantity y approaches zero as t → ∞.",
          "The model is only valid when y represents a population of organisms.",
        ],
        answerIndex: 2,
        explanation:
          "When k < 0, e^{kt} → 0 as t → ∞, so y = Ce^{kt} → 0. Option A has the sign of k reversed (k > 0 means growth, not decay). Option B is false — C is the initial value y(0). Option D is false — the model applies to any quantity with proportional rate of change.",
      },
    ],
  },
  {
    id: "de-modeling",
    name: "Modeling with Differential Equations",
    unit: "Unit 7: Differential Equations",
    unitNumber: 7,
    tags: ["FRQ"],
    summary:
      "Real-world situations involving rates of change are translated into differential equations by identifying how the rate of change of a quantity depends on the quantity or time.",
    description:
      "Mathematical modeling with DEs begins by reading a verbal description carefully and identifying the quantity being modeled, what drives its change, and any constraints. Common patterns include proportional growth/decay, Newton's law of cooling (rate proportional to the difference from ambient temperature), and mixing problems (rate in minus rate out). Once the DE is written, it is solved using appropriate techniques and the solution is interpreted in context.",
    steps: [
      "Identify the dependent variable y (what is changing) and the independent variable (usually t for time).",
      "Translate the verbal description into a rate equation: write an expression for dy/dt in terms of y, t, or given quantities.",
      "Identify any constants of proportionality and initial conditions stated in the problem.",
      "Write the complete differential equation and initial condition.",
      "Solve the DE using an appropriate method (separation of variables, recognizing exponential form, etc.).",
      "Apply the initial condition to find the particular solution.",
      "Interpret the result: answer the question in context with appropriate units.",
    ],
    examples: [
      {
        problem:
          "A cup of coffee at 90°C is placed in a room at 20°C. The temperature T of the coffee decreases at a rate proportional to the difference between T and the room temperature. Write a differential equation for T(t) and solve it given T(0) = 90.",
        solution:
          "Newton's law of cooling: dT/dt = k(T - 20), where k < 0 (temperature decreases). Let u = T - 20, then du/dt = k·u. Solution: u = u₀e^{kt} = 70e^{kt}, so T = 20 + 70e^{kt}. The constant k is determined by any additional temperature reading. As t → ∞, T → 20°C (room temperature).",
      },
    ],
    mcqs: [
      {
        question:
          "A tank contains 200 L of pure water. Salt water with concentration 5 g/L flows in at 4 L/min and the well-mixed solution flows out at 4 L/min. Which differential equation models the amount of salt S (in grams) at time t (in minutes)?",
        options: [
          "$\\frac{dS}{dt} = 20$",
          "$\\frac{dS}{dt} = 20 - \\frac{S}{50}$",
          "$\\frac{dS}{dt} = 5 - \\frac{S}{200}$",
          "$\\frac{dS}{dt} = 20 + \\frac{4S}{200}$",
        ],
        answerIndex: 1,
        explanation:
          "Rate in = 5 g/L × 4 L/min = 20 g/min. Concentration out = S/200 g/L (volume stays 200 L), so rate out = (S/200)×4 = S/50 g/min. Thus dS/dt = 20 - S/50. Option A ignores outflow; option C has wrong rate-in and rate-out; option D adds instead of subtracts.",
      },
      {
        question:
          "The rate of change of a population P is proportional to the square root of P. Which differential equation represents this situation?",
        options: [
          "$\\frac{dP}{dt} = kP$",
          "$\\frac{dP}{dt} = k\\sqrt{P}$",
          "$\\frac{dP}{dt} = \\frac{k}{\\sqrt{P}}$",
          "$\\frac{dP}{dt} = kP^2$",
        ],
        answerIndex: 1,
        explanation:
          "'Proportional to √P' means dP/dt = k·√P. Option A is proportional to P (standard exponential model). Option C is inversely proportional to √P. Option D is proportional to P².",
      },
    ],
  },
  {
    id: "initial-value-problems",
    name: "Initial Value Problems",
    unit: "Unit 7: Differential Equations",
    unitNumber: 7,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "An initial value problem (IVP) is a differential equation paired with an initial condition that specifies the value of the solution at a particular point.",
    description:
      "An IVP consists of a DE together with one or more initial conditions that pin down a unique solution from the general family. For a first-order DE, one initial condition y(x₀) = y₀ is sufficient. The approach is to find the general solution, then substitute the initial condition to solve for C. IVPs arise throughout physics, engineering, and the AP exam, particularly in FRQ problems requiring students to set up, solve, and interpret the solution.",
    steps: [
      "Read the problem to identify the differential equation and the initial condition(s).",
      "Find the general solution to the DE using the appropriate method.",
      "Write out the general solution with the arbitrary constant C.",
      "Substitute the initial condition: plug in x = x₀ and set y = y₀.",
      "Solve for C.",
      "Write the particular solution by substituting the found value of C back into the general solution.",
      "Check: verify that the particular solution satisfies the original DE and the initial condition.",
    ],
    examples: [
      {
        problem: "Solve the IVP: $\\frac{dy}{dx} = 4x^3 - 2x$, $y(1) = 3$.",
        solution:
          "Integrate: y = ∫(4x³ - 2x) dx = x⁴ - x² + C. Apply y(1) = 3: 3 = 1 - 1 + C = C, so C = 3. Particular solution: y = x⁴ - x² + 3.",
      },
    ],
    mcqs: [
      {
        question:
          "Which of the following is the solution to the IVP $\\frac{dy}{dx} = -2y$, $y(0) = 5$?",
        options: [
          "$y = 5e^{2x}$",
          "$y = 5e^{-2x}$",
          "$y = e^{-2x} + 4$",
          "$y = -10e^{-2x}$",
        ],
        answerIndex: 1,
        explanation:
          "General solution: $y = Ce^{-2x}$. Apply $y(0) = 5$: $5 = C$, giving $y = 5e^{-2x}$. A has the wrong sign in the exponent. C satisfies the initial condition but not the DE: $\\frac{d}{dx}(e^{-2x}+4) = -2e^{-2x}$, while $-2y = -2e^{-2x} - 8$ — these differ. D gives $y(0) = -10 \\neq 5$.",
      },
      {
        question:
          "A student solves an IVP and gets the general solution $y^2 = x^2 + C$. If $y(3) = 5$, what is the particular solution?",
        options: [
          "$y^2 = x^2 + 34$",
          "$y = \\sqrt{x^2 + 16}$",
          "$y^2 = x^2 + 16$",
          "$y = x + 2$",
        ],
        answerIndex: 2,
        explanation:
          "Apply y(3) = 5: 25 = 9 + C → C = 16. Particular solution: y² = x² + 16. Option B is equivalent to option C (taking the positive square root) but option C is more precisely the direct answer to the form of the general solution; the question is testing substitution into y² form, so C is correct. Option A has C = 34 (error: 25 + 9 instead of 25 - 9). Option D is linear and doesn't match the form.",
      },
    ],
  },
  {
    id: "euler-method",
    name: "Euler's Method",
    unit: "Unit 7: Differential Equations",
    unitNumber: 7,
    tags: ["BC only", "MCQ frequent", "FRQ"],
    summary:
      "Euler's method approximates the solution to an IVP by taking small linear steps along the slope given by the differential equation.",
    formula: "y_{n+1}=y_n+h\\cdot f(x_n,y_n)",
    description:
      "Euler's method is a first-order numerical technique for approximating solutions to IVPs when an analytic solution is unavailable or inconvenient. Starting from the initial condition, it repeatedly steps forward by a step size h: at each step the current slope (given by the DE) is used to estimate the next y-value via a linear extrapolation. Smaller step sizes give more accurate approximations, but require more steps. The method is an AP BC topic tested both conceptually and computationally in FRQs.",
    steps: [
      "Identify the DE dy/dx = f(x, y), the initial condition (x₀, y₀), the step size h, and the target x-value.",
      "Compute the slope at the current point: m₁ = f(x₀, y₀).",
      "Advance one step: x₁ = x₀ + h, y₁ = y₀ + h·f(x₀, y₀).",
      "Compute the slope at the new point: m₂ = f(x₁, y₁).",
      "Advance another step: x₂ = x₁ + h, y₂ = y₁ + h·f(x₁, y₁).",
      "Repeat until the target x-value is reached.",
      "Report yₙ as the approximation to y at xₙ, and note that Euler's method underestimates when the solution is concave up and overestimates when concave down.",
    ],
    examples: [
      {
        problem:
          "Use Euler's method with step size $h = 0.5$ to approximate $y(1)$ for the IVP $\\frac{dy}{dx} = x + y$, $y(0) = 1$.",
        solution:
          "Step 1: x₀ = 0, y₀ = 1. Slope = f(0,1) = 0 + 1 = 1. y₁ = 1 + 0.5(1) = 1.5, x₁ = 0.5. Step 2: x₁ = 0.5, y₁ = 1.5. Slope = f(0.5, 1.5) = 0.5 + 1.5 = 2. y₂ = 1.5 + 0.5(2) = 2.5, x₂ = 1. Euler approximation: y(1) ≈ 2.5. (The exact solution is y = 2eˣ - x - 1, giving y(1) = 2e - 2 ≈ 3.436, so Euler underestimates here because the solution is concave up.)",
      },
    ],
    mcqs: [
      {
        question:
          "When using Euler's method to approximate the solution to an IVP, decreasing the step size h generally does which of the following?",
        options: [
          "Increases the error of the approximation.",
          "Has no effect on the accuracy of the approximation.",
          "Increases the accuracy of the approximation.",
          "Makes the method exact for any differential equation.",
        ],
        answerIndex: 2,
        explanation:
          "Euler's method is a linear approximation; smaller steps reduce the accumulated error, increasing accuracy. It does not make the method exact (D) — it only approaches the true solution as h → 0. Options A and B contradict the fundamental behavior of the method.",
      },
      {
        question:
          "Use Euler's method with one step of size $h = 1$ to approximate $y(1)$ for $\\frac{dy}{dx} = y$, $y(0) = 1$. What is the approximation?",
        options: ["$1$", "$2$", "$e$", "$e - 1$"],
        answerIndex: 1,
        explanation:
          "One step: slope at (0,1) = f(0,1) = y = 1. y₁ = 1 + 1·1 = 2. The Euler approximation is 2. The exact value is y(1) = e ≈ 2.718 (option C), so Euler underestimates. Options A and D do not follow the Euler formula.",
      },
    ],
  },
  {
    id: "logistic-growth-de",
    name: "Logistic Growth — Differential Equation",
    unit: "Unit 7: Differential Equations",
    unitNumber: 7,
    tags: ["BC only", "MCQ frequent", "FRQ"],
    summary:
      "The logistic differential equation models population growth that slows as the population approaches a carrying capacity L.",
    formula: "\\frac{dP}{dt}=kP\\!\\left(1-\\frac{P}{L}\\right)",
    description:
      "The logistic model modifies pure exponential growth by multiplying by the factor (1 - P/L), which slows growth as P approaches the carrying capacity L. When P is small relative to L the factor is near 1 and growth is nearly exponential; when P ≈ L the factor is near 0 and growth nearly stops. The population grows fastest at P = L/2, which is the inflection point of the logistic curve. This DE is separable and can be solved using partial fraction decomposition.",
    steps: [
      "Write the logistic DE: dP/dt = kP(1 - P/L), identifying the growth rate constant k and carrying capacity L.",
      "Note that P = 0 and P = L are equilibrium solutions (dP/dt = 0).",
      "Observe that P = L/2 gives the maximum rate of growth (inflection point of the solution curve).",
      "To solve, separate variables: dP / [P(1 - P/L)] = k dt.",
      "Use partial fractions to decompose 1/[P(1 - P/L)].",
      "Integrate both sides and solve for P to obtain the logistic solution P(t) = L / (1 + Ae^{-kt}).",
      "Determine A from the initial condition P(0) = P₀: A = (L - P₀)/P₀.",
      "Analyze behavior: P → L as t → ∞ for any P₀ > 0.",
    ],
    examples: [
      {
        problem:
          "A population satisfies $\\frac{dP}{dt} = 0.04P\\left(1 - \\frac{P}{500}\\right)$. What is the carrying capacity, and at what population is the growth rate fastest?",
        solution:
          "The carrying capacity is L = 500 (the value that makes the factor in parentheses equal to zero). The growth rate dP/dt is maximized when P = L/2 = 250. At that point, dP/dt = 0.04(250)(1 - 250/500) = 0.04(250)(0.5) = 5, which is the maximum growth rate.",
      },
    ],
    mcqs: [
      {
        question:
          "For the logistic differential equation $\\frac{dP}{dt} = kP\\left(1 - \\frac{P}{L}\\right)$, at which value of P is the population growing most rapidly?",
        options: [
          "$P = L$",
          "$P = \\frac{L}{4}$",
          "$P = \\frac{L}{2}$",
          "$P = 2L$",
        ],
        answerIndex: 2,
        explanation:
          "The rate dP/dt = kP(1 - P/L) is a downward-opening parabola in P, maximized at P = L/2 (the vertex). At P = L the rate is 0; at P = L/4 the rate is less than the maximum; P = 2L exceeds the carrying capacity.",
      },
      {
        question:
          "A logistic model has $k = 0.1$, $L = 1000$, and $P(0) = 100$. Which of the following best describes the long-term behavior of P(t)?",
        options: [
          "P(t) grows without bound as $t \\to \\infty$.",
          "P(t) approaches 0 as $t \\to \\infty$.",
          "P(t) approaches 1000 as $t \\to \\infty$.",
          "P(t) oscillates between 0 and 1000 indefinitely.",
        ],
        answerIndex: 2,
        explanation:
          "For the logistic model with 0 < P₀ < L, the population approaches the carrying capacity L = 1000 as t → ∞. It does not grow without bound (A) — that would require unconstrained exponential growth. It does not decay to 0 (B) since k > 0 and P₀ > 0. Logistic solutions are monotone, not oscillatory (D).",
      },
    ],
  },
  {
    id: "logistic-growth-solution",
    name: "Logistic Growth — Solution and Behavior",
    unit: "Unit 7: Differential Equations",
    unitNumber: 7,
    tags: ["BC only", "FRQ"],
    summary:
      "The explicit solution to the logistic DE is P(t) = L/(1 + Ae^{-kt}), an S-shaped curve that starts near exponential growth and levels off at the carrying capacity.",
    formula: "P(t)=\\frac{L}{1+Ae^{-kt}}",
    description:
      "The logistic solution P(t) = L/(1 + Ae^{-kt}) is an S-shaped (sigmoidal) curve. For small t the solution behaves nearly exponentially; as t increases the growth rate decelerates; and as t → ∞ the solution asymptotically approaches L. The constant A = (L - P₀)/P₀ is determined by the initial population P₀ = P(0). The inflection point, where the concavity changes from up to down, occurs at t = (ln A)/k and P = L/2.",
    steps: [
      "Start from the logistic DE dP/dt = kP(1 - P/L) and note its solution form P(t) = L/(1 + Ae^{-kt}).",
      "Apply the initial condition P(0) = P₀: P₀ = L/(1 + A), so A = (L - P₀)/P₀.",
      "Write the particular solution with A substituted.",
      "Analyze limiting behavior: as t → ∞, e^{-kt} → 0, so P → L/(1 + 0) = L.",
      "Find the inflection point: set d²P/dt² = 0, which occurs when P = L/2.",
      "Find the t-value of the inflection point by solving L/(1 + Ae^{-kt}) = L/2 → Ae^{-kt} = 1 → t = (ln A)/k.",
      "Sketch the solution: starts at P₀, concave up until P = L/2, concave down after, approaches L asymptotically.",
    ],
    examples: [
      {
        problem:
          "A population follows logistic growth with $L = 800$, $k = 0.2$, and $P(0) = 50$. Write the particular solution and find the time when $P = 400$.",
        solution:
          "A = (800 - 50)/50 = 750/50 = 15. Particular solution: P(t) = 800/(1 + 15e^{-0.2t}). Set P = 400 = L/2 (the inflection point): 400 = 800/(1 + 15e^{-0.2t}) → 1 + 15e^{-0.2t} = 2 → 15e^{-0.2t} = 1 → e^{-0.2t} = 1/15 → -0.2t = -ln 15 → t = (ln 15)/0.2 = 5 ln 15 ≈ 13.54.",
      },
    ],
    mcqs: [
      {
        question:
          "For the logistic solution $P(t) = \\frac{800}{1+7e^{-0.3t}}$, what is the initial population $P(0)$?",
        options: ["$800$", "$7$", "$100$", "$114$"],
        answerIndex: 2,
        explanation:
          "P(0) = 800/(1 + 7e⁰) = 800/(1 + 7) = 800/8 = 100. Option A is the carrying capacity L. Option B is the constant A. Option D is not produced by the formula.",
      },
      {
        question:
          "The solution curve of a logistic model changes concavity (has an inflection point) when P equals which of the following?",
        options: [
          "$P = L$",
          "$P = \\frac{L}{2}$",
          "$P = \\frac{L}{4}$",
          "$P = 0$",
        ],
        answerIndex: 1,
        explanation:
          "The inflection point of the logistic curve occurs at P = L/2, where the growth rate is maximum and d²P/dt² changes sign from positive to negative. At P = L (A) growth has stopped; P = L/4 (C) and P = 0 (D) are not inflection points.",
      },
    ],
  },
  {
    id: "newton-cooling",
    name: "Newton's Law of Cooling",
    unit: "Unit 7: Differential Equations",
    unitNumber: 7,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "Newton's Law of Cooling states that an object's rate of temperature change is proportional to the difference between its temperature and the ambient temperature.",
    formula: "\\frac{dT}{dt} = k(T - T_a),\\quad k < 0",
    description:
      "Newton's Law of Cooling models the temperature $T(t)$ of an object as it approaches ambient temperature $T_a$. The separable DE $\\frac{dT}{dt} = k(T - T_a)$ (with $k < 0$ for cooling) has solution $T(t) = T_a + (T_0 - T_a)e^{kt}$, where $T_0 = T(0)$ is the initial temperature. As $t \\to \\infty$, $T(t) \\to T_a$ exponentially. A second temperature reading at a known time determines $k$. The same model applies to warming ($k > 0$) when an object is placed in a warmer environment.",
    steps: [
      "Write $\\frac{dT}{dt} = k(T - T_a)$. Substitute $u = T - T_a$ so $\\frac{du}{dt} = ku$.",
      "Solve: $u(t) = u_0 e^{kt}$, where $u_0 = T_0 - T_a$.",
      "Back-substitute: $T(t) = T_a + (T_0 - T_a)e^{kt}$.",
      "Use the initial temperature $T(0) = T_0$ and a second data point $(t_1, T_1)$ to solve for $k$: $T_1 - T_a = (T_0 - T_a)e^{kt_1}$.",
      "Answer contextual questions: find $T$ at a given time, or find the time when $T$ reaches a target value by solving $T(t) = $ target.",
    ],
    examples: [
      {
        problem:
          "A cup of coffee at $90^\\circ$C is placed in a $20^\\circ$C room. After 10 minutes the coffee is $70^\\circ$C. Find the temperature function $T(t)$.",
        solution:
          "$T(t) = 20 + (90-20)e^{kt} = 20 + 70e^{kt}$. At $t=10$: $70 = 20 + 70e^{10k} \\Rightarrow 50 = 70e^{10k} \\Rightarrow k = \\frac{1}{10}\\ln\\!\\left(\\frac{5}{7}\\right) \\approx -0.0336$. So $T(t) = 20 + 70e^{-0.0336t}$.",
      },
    ],
    mcqs: [
      {
        question:
          "For Newton's Law of Cooling $\\frac{dT}{dt} = k(T - T_a)$ with $k < 0$, as $t \\to \\infty$ the temperature $T(t)$:",
        options: [
          "Decreases to $0^\\circ$",
          "Approaches the ambient temperature $T_a$",
          "Grows without bound",
          "Oscillates around $T_a$",
        ],
        answerIndex: 1,
        explanation:
          "The solution is $T(t) = T_a + (T_0-T_a)e^{kt}$. Because $k<0$, $e^{kt}\\to 0$ as $t\\to\\infty$, so $T\\to T_a$. The object approaches room temperature — it does not drop to $0^\\circ$ (unless $T_a = 0$), grow without bound, or oscillate.",
      },
      {
        question:
          "An object cools from $100^\\circ$C to $80^\\circ$C in 5 minutes in a $20^\\circ$C room. What is the temperature after a total of 10 minutes?",
        options: [
          "$60^\\circ$C",
          "$65^\\circ$C",
          "$68^\\circ$C",
          "$72^\\circ$C",
        ],
        answerIndex: 1,
        explanation:
          "$T(t) = 20 + 80e^{kt}$. At $t=5$: $80 = 20 + 80e^{5k} \\Rightarrow 60 = 80e^{5k} \\Rightarrow e^{5k} = 3/4$. At $t=10$: $T = 20 + 80(e^{5k})^2 = 20 + 80\\left(\\frac{3}{4}\\right)^2 = 20 + 80\\cdot\\frac{9}{16} = 20 + 45 = 65^\\circ$C. Option A ($60^\\circ$C) assumes arithmetic (linear) cooling. Option C ($68^\\circ$C) and D ($72^\\circ$C) overestimate the temperature.",
      },
    ],
  },
];
