export default [
  {
    id: "motion-pva",
    name: "Position, Velocity, Acceleration",
    unit: "Unit 4: Contextual Applications of Differentiation",
    unitNumber: 4,
    tags: ["MCQ frequent", "FRQ", "calculator active"],
    summary:
      "Velocity is the first derivative of position and acceleration is the derivative of velocity.",
    formula: "v(t)=s'(t),\\quad a(t)=v'(t)",
    description:
      "A particle's position function s(t) encodes its location at time t; differentiating once gives velocity v(t) = s'(t), and differentiating again gives acceleration a(t) = v'(t) = s''(t). Positive velocity means the particle moves in the positive direction, negative velocity means it moves in the negative direction, and zero velocity indicates a momentary rest. On calculator-active problems you are often asked to find the exact time when velocity equals zero or to evaluate acceleration at a specific instant.",
    steps: [
      "Identify s(t) from the problem; write v(t) = s'(t) by differentiating once using the appropriate rules.",
      "Find a(t) = v'(t) = s''(t) by differentiating v(t).",
      "To find when the particle is at rest, set v(t) = 0 and solve for t.",
      "To find when the particle changes direction, confirm that v(t) changes sign at those t-values (use a sign chart).",
      "Evaluate s, v, or a at a specific time by substituting that t-value into the appropriate function.",
    ],
    examples: [
      {
        problem:
          "A particle moves along the x-axis with position $s(t) = t^3 - 6t^2 + 9t$ for $t \\geq 0$. Find v(t) and a(t), then determine when the particle is at rest.",
        solution:
          "Differentiate: $v(t) = s'(t) = 3t^2 - 12t + 9$. Differentiate again: $a(t) = v'(t) = 6t - 12$. Set $v(t) = 0$: $3t^2 - 12t + 9 = 0 \\Rightarrow 3(t-1)(t-3) = 0$, so $t = 1$ and $t = 3$. The particle is at rest at $t = 1$ s and $t = 3$ s.",
      },
    ],
    mcqs: [
      {
        question:
          "A particle moves along the x-axis so that its position at time t is $s(t) = 2t^3 - 9t^2 + 12t - 4$. At what time(s) is the particle at rest?",
        options: [
          "t = 1 and t = 2",
          "t = 0 and t = 3",
          "t = 2 only",
          "t = 3 only",
        ],
        answerIndex: 0,
        explanation:
          "Compute $v(t) = s'(t) = 6t^2 - 18t + 12 = 6(t^2 - 3t + 2) = 6(t-1)(t-2)$. Setting $v(t) = 0$ gives $t = 1$ and $t = 2$, so (A) is correct. Option (B) is wrong because those are not roots of the derivative. Option (C) and (D) each capture only one root and miss the other.",
      },
      {
        question:
          "If the velocity of a particle is $v(t) = 4t - 8$, what is the acceleration of the particle at $t = 3$?",
        options: ["4", "8", "12", "−4"],
        answerIndex: 0,
        explanation:
          "$a(t) = v'(t) = 4$ (constant), so at $t = 3$ the acceleration is still 4. Option (B) confuses $v(3) = 4(3) - 8 = 4$ with the acceleration—both happen to be 4 here only by coincidence—but note that 8 would result from plugging 3 into the wrong expression. Option (C) misreads the derivative, and (D) negates incorrectly.",
      },
    ],
  },
  {
    id: "speed-direction-motion",
    name: "Speed and Direction of Motion",
    unit: "Unit 4: Contextual Applications of Differentiation",
    unitNumber: 4,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "Speed is the absolute value of velocity, and the sign of velocity determines direction of motion.",
    formula: "\\text{speed}=|v(t)|",
    description:
      "Speed is a scalar quantity equal to |v(t)| and is always non-negative, while velocity is a signed quantity that indicates both speed and direction. A particle moves in the positive direction when v(t) > 0 and in the negative direction when v(t) < 0. The particle is speeding up when velocity and acceleration have the same sign, and slowing down when they have opposite signs.",
    steps: [
      "Find v(t) = s'(t) and a(t) = v'(t).",
      "Determine the sign of v(t) at the time of interest: positive means moving right/up, negative means moving left/down.",
      "Compute speed as |v(t)| — drop the negative sign if v(t) < 0.",
      "Compare the signs of v(t) and a(t): same sign means speeding up, opposite signs means slowing down.",
      "To determine when the particle changes direction, find where v(t) = 0 and verify a sign change in v(t) across that point.",
    ],
    examples: [
      {
        problem:
          "A particle has velocity $v(t) = t^2 - 4t + 3$. At $t = 2$, find the speed and determine whether the particle is speeding up or slowing down.",
        solution:
          "$v(2) = 4 - 8 + 3 = -1$, so speed $= |{-1}| = 1$. Next, $a(t) = v'(t) = 2t - 4$, so $a(2) = 0$. Since $a(2) = 0$, the particle is momentarily neither speeding up nor slowing down — it is at an inflection point of speed. (If $a(2)$ were nonzero, we would compare signs with $v(2) = -1$.)",
      },
    ],
    mcqs: [
      {
        question:
          "A particle moves along the x-axis with velocity $v(t) = t^2 - 6t + 8$. On which interval is the particle moving in the negative direction?",
        options: ["(2, 4)", "(0, 2)", "(4, ∞)", "(0, 4)"],
        answerIndex: 0,
        explanation:
          "Factor: $v(t) = (t-2)(t-4)$. The velocity is negative (particle moves left) when one factor is positive and the other is negative, which occurs for $2 < t < 4$, i.e., the interval (2, 4). On (0, 2) both factors are negative so the product is positive. On $(4, \\infty)$ both factors are positive. Option (D) is too wide and includes regions where $v > 0$.",
      },
      {
        question:
          "At time t = 5, a particle has velocity v(5) = −3 and acceleration a(5) = −7. Which statement is correct?",
        options: [
          "The particle is moving in the negative direction and speeding up.",
          "The particle is moving in the positive direction and slowing down.",
          "The particle is moving in the negative direction and slowing down.",
          "The particle is moving in the positive direction and speeding up.",
        ],
        answerIndex: 0,
        explanation:
          "Since $v(5) = -3 < 0$, the particle moves in the negative direction. Since $a(5) = -7 < 0$ has the same sign as $v(5)$, the speed is increasing — the particle is speeding up. Option (C) incorrectly says slowing down; options (B) and (D) incorrectly identify the direction as positive.",
      },
    ],
  },
  {
    id: "related-rates",
    name: "Related Rates",
    unit: "Unit 4: Contextual Applications of Differentiation",
    unitNumber: 4,
    tags: ["FRQ", "MCQ frequent"],
    summary:
      "Related rates problems use implicit differentiation with respect to time to find how one changing quantity affects another.",
    description:
      "In a related rates problem, two or more quantities that each depend on time are connected by a geometric or physical equation. Differentiating that equation implicitly with respect to t links their rates of change. The key skill is writing the correct relationship between variables before differentiating — common setups involve the Pythagorean theorem, similar triangles, or volume/area formulas.",
    steps: [
      "Draw a diagram and label all changing quantities as variables; label any constants.",
      "Write an equation relating the relevant variables (e.g., Pythagorean theorem, volume formula, similar-triangle ratio).",
      "Differentiate both sides implicitly with respect to t, applying the chain rule wherever a variable appears.",
      "Substitute the given values of the variables and their rates at the specific instant of interest.",
      "Solve for the unknown rate and attach correct units; check that the sign (positive = increasing, negative = decreasing) makes physical sense.",
    ],
    examples: [
      {
        problem:
          "A ladder 10 ft long rests against a vertical wall. The bottom slides away from the wall at 2 ft/s. How fast is the top sliding down the wall when the bottom is 6 ft from the wall?",
        solution:
          "Let x = distance of foot from wall, y = height of top on wall. By the Pythagorean theorem: $x^2 + y^2 = 100$. Differentiate: $2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0$. When $x = 6$: $y = \\sqrt{100-36} = 8$. Substitute: $2(6)(2) + 2(8)\\frac{dy}{dt} = 0 \\Rightarrow \\frac{dy}{dt} = -\\frac{24}{16} = -\\frac{3}{2}$ ft/s. The top slides down at $\\frac{3}{2}$ ft/s.",
      },
    ],
    mcqs: [
      {
        question:
          "A spherical balloon is being inflated so that its volume increases at a rate of 100 cm³/s. How fast is the radius increasing when the radius is 5 cm? (Volume of sphere: $V = \\frac{4}{3}\\pi r^3$)",
        options: [
          "$\\dfrac{1}{\\pi}$ cm/s",
          "$\\dfrac{100}{4\\pi}$ cm/s",
          "$4\\pi$ cm/s",
          "$\\dfrac{1}{4\\pi}$ cm/s",
        ],
        answerIndex: 0,
        explanation:
          "Differentiate $V = \\frac{4}{3}\\pi r^3$ with respect to t: $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$. Substitute $\\frac{dV}{dt} = 100$ and $r = 5$: $100 = 4\\pi(25)\\frac{dr}{dt} \\Rightarrow \\frac{dr}{dt} = \\frac{100}{100\\pi} = \\frac{1}{\\pi}$ cm/s. Option (B) forgets to square the radius. Option (C) inverts the relationship. Option (D) omits a factor of 4 in the denominator.",
      },
      {
        question:
          "Two cars leave an intersection at the same time, one heading north at 30 mph and one heading east at 40 mph. How fast is the distance between them increasing after 1 hour?",
        options: ["50 mph", "70 mph", "35 mph", "10 mph"],
        answerIndex: 0,
        explanation:
          "After 1 hour: north car is 30 mi away, east car is 40 mi away. Distance $d = \\sqrt{30^2 + 40^2} = 50$ mi. Differentiate $d^2 = x^2 + y^2$: $2d\\frac{dd}{dt} = 2x\\frac{dx}{dt} + 2y\\frac{dy}{dt}$. Substitute: $2(50)\\frac{dd}{dt} = 2(40)(40) + 2(30)(30) = 3200 + 1800 = 5000$, so $\\frac{dd}{dt} = 50$ mph. Option (B) simply adds the two speeds, which ignores the geometry. Options (C) and (D) are arithmetic errors.",
      },
    ],
  },
  {
    id: "tangent-normal-lines",
    name: "Tangent and Normal Lines",
    unit: "Unit 4: Contextual Applications of Differentiation",
    unitNumber: 4,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "The tangent line at a point uses the derivative as its slope; the normal line is perpendicular to the tangent.",
    formula: "y-f(a)=f'(a)(x-a)",
    description:
      "The tangent line to y = f(x) at x = a has slope f'(a) and passes through the point (a, f(a)), giving the point-slope equation y − f(a) = f'(a)(x − a). The normal line at the same point is perpendicular to the tangent, so its slope is the negative reciprocal −1/f'(a) (provided f'(a) ≠ 0). Both lines are used extensively in FRQ problems to approximate function values or to find intersection points.",
    steps: [
      "Evaluate f(a) to find the y-coordinate of the point of tangency.",
      "Compute f'(x) and evaluate f'(a) to find the tangent slope.",
      "Write the tangent line: $y - f(a) = f'(a)(x - a)$, then simplify to slope-intercept form if needed.",
      "For the normal line, use slope $m_n = -\\dfrac{1}{f'(a)}$ (negate and reciprocate), then write $y - f(a) = m_n(x - a)$.",
      "Check: if f'(a) = 0 the tangent is horizontal and the normal is the vertical line x = a.",
    ],
    examples: [
      {
        problem:
          "Find the equations of the tangent and normal lines to $f(x) = x^3 - 2x$ at $x = 2$.",
        solution:
          "$f(2) = 8 - 4 = 4$. $f'(x) = 3x^2 - 2$, so $f'(2) = 10$. Tangent: $y - 4 = 10(x - 2) \\Rightarrow y = 10x - 16$. Normal slope: $-\\frac{1}{10}$. Normal: $y - 4 = -\\frac{1}{10}(x - 2) \\Rightarrow y = -\\frac{1}{10}x + \\frac{21}{5}$.",
      },
    ],
    mcqs: [
      {
        question:
          "The function $f(x) = x^2 + 3x$ has a tangent line at $x = 1$. What is the y-intercept of that tangent line?",
        options: ["−1", "4", "5", "1"],
        answerIndex: 0,
        explanation:
          "$f(1) = 1 + 3 = 4$; $f'(x) = 2x + 3$, so $f'(1) = 5$. Tangent: $y - 4 = 5(x - 1) \\Rightarrow y = 5x - 1$. The y-intercept is $-1$. Option (B) is the point's y-value, not the intercept. Option (C) is the slope. Option (D) is the x-value used.",
      },
      {
        question:
          "The slope of the normal line to $g(x) = \\sqrt{x}$ at $x = 4$ is:",
        options: ["−4", "$\\dfrac{1}{4}$", "4", "$-\\dfrac{1}{4}$"],
        answerIndex: 0,
        explanation:
          "$g'(x) = \\frac{1}{2\\sqrt{x}}$, so $g'(4) = \\frac{1}{4}$. The normal slope is the negative reciprocal: $-\\frac{1}{1/4} = -4$. Option (B) is the tangent slope, not the normal. Option (C) is the positive reciprocal. Option (D) is the negative of the tangent slope (wrong operation).",
      },
    ],
  },
  {
    id: "linear-approximation",
    name: "Local Linearity / Linear Approximation",
    unit: "Unit 4: Contextual Applications of Differentiation",
    unitNumber: 4,
    tags: ["MCQ frequent"],
    summary:
      "The linearization of f at x = a uses the tangent line to estimate nearby function values.",
    formula: "L(x)=f(a)+f'(a)(x-a)",
    description:
      "Because a differentiable function looks like a straight line when zoomed in near a point, the tangent line L(x) = f(a) + f'(a)(x − a) gives a good approximation of f(x) for x close to a. This is called local linearity or linearization. The approximation is an overestimate when f is concave down (f'' < 0) and an underestimate when f is concave up (f'' > 0) near x = a.",
    steps: [
      "Choose a convenient base point a where f(a) and f'(a) are easy to compute.",
      "Compute f(a) exactly.",
      "Compute f'(a) exactly.",
      "Write the linearization: $L(x) = f(a) + f'(a)(x - a)$.",
      "Substitute x to get the approximation, then state whether it is an over- or underestimate by checking the sign of f''(a).",
    ],
    examples: [
      {
        problem: "Use a linear approximation to estimate $\\sqrt{4.1}$.",
        solution:
          "Let $f(x) = \\sqrt{x}$, $a = 4$. Then $f(4) = 2$ and $f'(x) = \\frac{1}{2\\sqrt{x}}$, so $f'(4) = \\frac{1}{4}$. Linearization: $L(x) = 2 + \\frac{1}{4}(x - 4)$. At $x = 4.1$: $L(4.1) = 2 + \\frac{1}{4}(0.1) = 2.025$. Since $f''(x) = -\\frac{1}{4x^{3/2}} < 0$ (concave down), this is an overestimate.",
      },
    ],
    mcqs: [
      {
        question:
          "Let $f(x) = \\ln x$. Using a linear approximation at $x = 1$, which value best approximates $\\ln(1.2)$?",
        options: ["0.2", "0.182", "1.2", "0.8"],
        answerIndex: 0,
        explanation:
          "$f(1) = 0$; $f'(x) = 1/x$, so $f'(1) = 1$. Linearization: $L(x) = 0 + 1\\cdot(x-1) = x - 1$. At $x = 1.2$: $L(1.2) = 0.2$. The exact value $\\ln(1.2) \\approx 0.182$ is less, confirming an overestimate (since $\\ln x$ is concave down). Option (B) is the exact value, not the linear approximation. Options (C) and (D) reflect common algebraic mistakes.",
      },
      {
        question:
          "If $f(3) = 7$ and $f'(3) = -2$, which of the following is the best linear approximation for $f(3.5)$?",
        options: ["6", "8", "5", "7.5"],
        answerIndex: 0,
        explanation:
          "$L(3.5) = f(3) + f'(3)(3.5 - 3) = 7 + (-2)(0.5) = 7 - 1 = 6$. Option (B) adds instead of subtracting the slope term. Option (C) uses $\\Delta x = 1$ instead of $0.5$. Option (D) uses $|f'(3)| \\cdot 0.5 = 1$ but adds it, ignoring the negative sign.",
      },
    ],
  },
  {
    id: "lhopitals-rule",
    name: "L'Hôpital's Rule",
    unit: "Unit 4: Contextual Applications of Differentiation",
    unitNumber: 4,
    tags: ["theorem", "MCQ frequent"],
    summary:
      "L'Hôpital's Rule resolves indeterminate limits of the form 0/0 or ∞/∞ by differentiating numerator and denominator separately.",
    formula:
      "\\lim_{x\\to a}\\frac{f(x)}{g(x)}=\\lim_{x\\to a}\\frac{f'(x)}{g'(x)}",
    description:
      "If substituting x = a into f(x)/g(x) yields the indeterminate form 0/0 or ±∞/∞, then — provided f and g are differentiable near a and g'(x) ≠ 0 near a — the limit equals the limit of f'(x)/g'(x). The rule may be applied repeatedly if the result is still indeterminate. Other indeterminate forms (0·∞, 1^∞, 0^0, ∞^0) must first be rewritten as 0/0 or ∞/∞ before applying the rule.",
    steps: [
      "Substitute x = a directly; confirm the expression gives 0/0 or ∞/∞ (otherwise L'Hôpital's Rule does not apply).",
      "Differentiate the numerator f(x) and the denominator g(x) separately — do NOT use the quotient rule.",
      "Evaluate $\\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$ by direct substitution.",
      "If the new limit is again indeterminate, apply the rule again.",
      "For forms like $0 \\cdot \\infty$, rewrite as $\\frac{0}{1/\\infty}$ or $\\frac{\\infty}{1/0}$ to obtain 0/0 or ∞/∞ before differentiating.",
    ],
    examples: [
      {
        problem:
          "Evaluate $\\displaystyle\\lim_{x \\to 0} \\frac{\\sin x}{x}$.",
        solution:
          "Direct substitution gives $\\frac{0}{0}$, an indeterminate form. Apply L'Hôpital's Rule: $\\lim_{x \\to 0} \\frac{(\\sin x)'}{(x)'} = \\lim_{x \\to 0} \\frac{\\cos x}{1} = \\cos 0 = 1$.",
      },
    ],
    mcqs: [
      {
        question:
          "Which of the following is a necessary condition before applying L'Hôpital's Rule to $\\lim_{x \\to a} \\frac{f(x)}{g(x)}$?",
        options: [
          "The limit must be in the form 0/0 or ∞/∞.",
          "The functions f and g must be polynomials.",
          "The limit must equal zero.",
          "f and g must have the same degree.",
        ],
        answerIndex: 0,
        explanation:
          "L'Hôpital's Rule applies only to indeterminate forms 0/0 or ∞/∞ — the key prerequisite. Option (B) is wrong; the rule works for any differentiable functions, not just polynomials. Option (C) confuses the outcome with the prerequisite. Option (D) is a condition for specific polynomial limits, not for L'Hôpital's Rule in general.",
      },
      {
        question:
          "Evaluate $\\displaystyle\\lim_{x \\to 0} \\frac{e^x - 1}{x}$.",
        options: ["1", "0", "e", "∞"],
        answerIndex: 0,
        explanation:
          "Direct substitution gives $\\frac{0}{0}$. Apply L'Hôpital's Rule: $\\lim_{x \\to 0} \\frac{e^x}{1} = e^0 = 1$. Option (B) might come from mistakenly computing the denominator's derivative as 0. Option (C) confuses $e^x$ evaluated at 1 versus 0. Option (D) wrongly concludes the limit is infinite.",
      },
    ],
  },
  {
    id: "indeterminate-forms",
    name: "Indeterminate Forms",
    unit: "Unit 4: Contextual Applications of Differentiation",
    unitNumber: 4,
    tags: ["MCQ frequent"],
    summary:
      "Indeterminate forms are limit expressions whose value cannot be determined by direct substitution alone.",
    formula:
      "\\tfrac{0}{0},\\ \\tfrac{\\infty}{\\infty},\\ 0\\cdot\\infty,\\ 1^\\infty,\\ 0^0",
    description:
      "When evaluating a limit by direct substitution produces an expression like 0/0, ∞/∞, 0·∞, ∞ − ∞, 1^∞, 0^0, or ∞^0, the form is called indeterminate because the limit could be any value or might not exist. Each form requires an algebraic manipulation or logarithmic rewriting before a technique like L'Hôpital's Rule can be used. Recognizing whether a form is indeterminate — versus a determinate form like 0/1 = 0 — is a prerequisite skill for all limit problems on the AP exam.",
    steps: [
      "Substitute x = a (or take x → ∞) directly and observe the resulting expression.",
      "Identify whether the form is indeterminate (0/0, ∞/∞, 0·∞, ∞−∞, 1^∞, 0^0, ∞^0) or determinate.",
      "For 0·∞: rewrite as 0/(1/∞) or ∞/(1/0) to produce 0/0 or ∞/∞.",
      "For exponential forms (1^∞, 0^0, ∞^0): take the natural log, convert the exponent to a fraction, apply L'Hôpital's Rule, then exponentiate the result.",
      "For ∞−∞: find a common denominator or rationalize before applying L'Hôpital's Rule.",
    ],
    examples: [
      {
        problem: "Evaluate $\\displaystyle\\lim_{x \\to 0^+} x \\ln x$.",
        solution:
          "Direct substitution gives $0 \\cdot (-\\infty)$, an indeterminate form. Rewrite: $\\displaystyle\\lim_{x \\to 0^+} \\frac{\\ln x}{1/x}$, which is $\\frac{-\\infty}{\\infty}$. Apply L'Hôpital's Rule: $\\displaystyle\\lim_{x \\to 0^+} \\frac{1/x}{-1/x^2} = \\lim_{x \\to 0^+} (-x) = 0$.",
      },
    ],
    mcqs: [
      {
        question: "Which of the following is NOT an indeterminate form?",
        options: [
          "$\\dfrac{0}{\\infty}$",
          "$\\dfrac{0}{0}$",
          "$1^\\infty$",
          "$0^0$",
        ],
        answerIndex: 0,
        explanation:
          "$\\frac{0}{\\infty}$ is a determinate form — it always equals 0 — so no special technique is needed. The forms 0/0 (B), $1^\\infty$ (C), and $0^0$ (D) are all genuinely indeterminate because the limit can take different finite or infinite values depending on the functions involved.",
      },
      {
        question:
          "Evaluating $\\displaystyle\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x$ directly gives the indeterminate form:",
        options: [
          "$1^\\infty$",
          "$\\dfrac{\\infty}{\\infty}$",
          "$0^0$",
          "$\\dfrac{0}{0}$",
        ],
        answerIndex: 0,
        explanation:
          "As $x \\to \\infty$, the base $1 + 1/x \\to 1$ and the exponent $x \\to \\infty$, producing $1^\\infty$. This is the classic indeterminate form whose value (e) must be found via logarithms. Option (B) would arise from a ratio of two infinite quantities. Options (C) and (D) are not produced by this particular expression.",
      },
    ],
  },
  {
    id: "rates-of-change-context",
    name: "Rates of Change in Applied Contexts",
    unit: "Unit 4: Contextual Applications of Differentiation",
    unitNumber: 4,
    tags: ["FRQ", "MCQ frequent"],
    summary:
      "The derivative of a quantity with respect to time (or another variable) gives the instantaneous rate of change of that quantity.",
    description:
      "In applied problems the derivative f'(t) represents the rate at which f is changing at the instant t — its units are the units of f divided by the units of t. A positive derivative means the quantity is increasing; a negative derivative means it is decreasing. Average rate of change over an interval [a, b] is always (f(b) − f(a))/(b − a) and should not be confused with the instantaneous rate f'(c) guaranteed by the MVT.",
    steps: [
      "Read the problem carefully and identify the function f, its input variable, and the units of both.",
      "For average rate of change on [a, b], compute $\\frac{f(b)-f(a)}{b-a}$ and attach units of f-units per input-unit.",
      "For instantaneous rate of change, differentiate f and evaluate at the given point.",
      "Interpret the sign: positive means increasing/gaining, negative means decreasing/losing.",
      "State the answer in a complete sentence using the context (e.g., 'The temperature is decreasing at 3°F per hour at t = 2 h').",
    ],
    examples: [
      {
        problem:
          "The population of a town is modeled by $P(t) = 5000e^{0.03t}$ where t is years after 2000. Find the instantaneous rate of change of population in 2010 and interpret it.",
        solution:
          "$P'(t) = 5000 \\cdot 0.03 e^{0.03t} = 150e^{0.03t}$. At $t = 10$: $P'(10) = 150e^{0.3} \\approx 150(1.3499) \\approx 202$ people per year. In 2010, the population is growing at approximately 202 people per year.",
      },
    ],
    mcqs: [
      {
        question:
          "The amount of water in a tank (in gallons) is modeled by $W(t) = -t^2 + 6t + 10$ for $0 \\leq t \\leq 6$ minutes. At what rate is the water level changing at $t = 4$ minutes?",
        options: ["−2 gal/min", "2 gal/min", "−4 gal/min", "6 gal/min"],
        answerIndex: 0,
        explanation:
          "$W'(t) = -2t + 6$, so $W'(4) = -8 + 6 = -2$ gal/min. The negative value means the water is draining at 2 gal/min. Option (B) ignores the sign. Option (C) miscalculates $-2(4) = -8$ and forgets the constant. Option (D) is $W'(0)$, not $W'(4)$.",
      },
      {
        question:
          "A company's revenue (in thousands of dollars) is $R(x) = 12x - 0.5x^2$ where x is the number of units sold. What is the marginal revenue (instantaneous rate of change) when $x = 10$?",
        options: [
          "\\$2{,}000 per unit",
          "\\$7{,}000 per unit",
          "\\$12{,}000 per unit",
          "\\$70{,}000 per unit",
        ],
        answerIndex: 0,
        explanation:
          "$R'(x) = 12 - x$, so $R'(10) = 12 - 10 = 2$ (thousands of dollars per unit) = \\$2,000 per unit. Option (B) computes $R(10)/10 = 70/10 = 7$ (average revenue, not marginal). Option (C) uses only the linear coefficient. Option (D) confuses total revenue $R(10) = 70$ thousand with the rate.",
      },
    ],
  },
  {
    id: "interpreting-derivatives",
    name: "Interpreting the Meaning of a Derivative",
    unit: "Unit 4: Contextual Applications of Differentiation",
    unitNumber: 4,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "f'(a) gives the instantaneous rate of change of f with respect to its input at x = a, expressed in units of output per unit of input.",
    description:
      "On the AP exam, interpreting a derivative in context means translating f'(a) = k into a verbal sentence that identifies the quantity changing, the rate k, and the correct units — for example, 'At t = 3 seconds, the velocity of the particle is increasing at a rate of 5 meters per second per second.' The derivative does not represent a total amount, an average, or the value of f itself. FRQ graders award a specific point for correct units and contextual language.",
    steps: [
      "Identify the function f: what quantity does it measure and in what units?",
      "Identify the independent variable and its units.",
      "State that f'(a) is the instantaneous rate of change of [f's quantity] with respect to [independent variable] at [a].",
      "Give the numerical value and units: units of f'(a) = (units of f) / (units of independent variable).",
      "Confirm the sign matters: positive derivative → quantity is increasing; negative → decreasing.",
    ],
    examples: [
      {
        problem:
          "Let $T(h)$ represent the temperature (in °F) of an oven h hours after it is turned on. Given that $T'(2) = -15$, write a sentence interpreting this value in context.",
        solution:
          "Two hours after the oven is turned on, the temperature is decreasing at a rate of 15 degrees Fahrenheit per hour.",
      },
    ],
    mcqs: [
      {
        question:
          "Let $C(n)$ be the cost in dollars to produce n items. Which statement best interprets $C'(50) = 8$?",
        options: [
          "The cost is increasing at \\$8 per item when 50 items have been produced.",
          "The total cost of producing 50 items is \\$8.",
          "The average cost per item when 50 are produced is \\$8.",
          "Producing the 50th item costs \\$8 less than the 49th.",
        ],
        answerIndex: 0,
        explanation:
          "$C'(50)$ is the marginal cost — the instantaneous rate of change of total cost with respect to number of items — at $n = 50$. Option (A) correctly states this. Option (B) confuses $C'(50)$ with $C(50)$. Option (C) confuses marginal cost with average cost $C(50)/50$. Option (D) reverses the sign and refers to a discrete difference, not a derivative.",
      },
      {
        question:
          "The function $P(t)$ gives the population of a city (in thousands) t years after 2000. If $P'(10) = 3.2$, what are the correct units for this value?",
        options: [
          "Thousands of people per year",
          "Thousands of people",
          "Years per thousand people",
          "People per thousand years",
        ],
        answerIndex: 0,
        explanation:
          "The units of a derivative $dP/dt$ are (units of P) divided by (units of t): thousands of people per year. Option (B) gives units of P, not its derivative. Option (C) inverts the ratio. Option (D) scrambles both numerator and denominator.",
      },
    ],
  },
];
