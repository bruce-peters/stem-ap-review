export default [
  {
    id: "evt",
    name: "Extreme Value Theorem",
    unit: "Unit 5: Analytical Applications of Differentiation",
    unitNumber: 5,
    tags: ["theorem", "MCQ frequent"],
    summary:
      "A continuous function on a closed interval must attain both a global maximum and a global minimum.",
    description:
      "The Extreme Value Theorem (EVT) guarantees that if f is continuous on a closed interval [a, b], then f achieves an absolute maximum value and an absolute minimum value somewhere on that interval. The theorem does not tell you where those extrema occur — only that they must exist. Both conditions (continuity and a closed interval) are essential; dropping either one can cause the conclusion to fail.",
    steps: [
      "Verify that the function f is continuous on the closed interval [a, b].",
      "Conclude that f must attain an absolute maximum value M = f(c) for some c in [a, b].",
      "Conclude that f must also attain an absolute minimum value m = f(d) for some d in [a, b].",
      "Note that the extrema may occur at interior critical points or at the endpoints a and b.",
      "If either condition fails (discontinuity or open interval), the EVT does not apply and an extreme value may not exist.",
    ],
    examples: [
      {
        problem:
          "Explain why $f(x) = x^2 - 4x + 5$ on $[0, 3]$ must have an absolute maximum and minimum, then identify them.",
        solution:
          "Since $f$ is a polynomial, it is continuous everywhere, and $[0, 3]$ is a closed interval, the EVT guarantees both extrema exist. Evaluating: $f(0)=5$, $f(3)=2$, and the critical point $f'(x)=2x-4=0 \\Rightarrow x=2$ gives $f(2)=1$. The absolute minimum is $1$ at $x=2$ and the absolute maximum is $5$ at $x=0$.",
      },
    ],
    mcqs: [
      {
        question:
          "Which of the following is required for the Extreme Value Theorem to guarantee that a function f attains both an absolute maximum and an absolute minimum?",
        options: [
          "f must be continuous on a closed interval [a, b]",
          "f must be differentiable on an open interval (a, b)",
          "f must be increasing on [a, b]",
          "f must have exactly one critical point in (a, b)",
        ],
        answerIndex: 0,
        explanation:
          "The EVT requires continuity on a closed interval — that is both sufficient and necessary for the theorem's conclusion. Differentiability, monotonicity, or a unique critical point are not required. Without the closed interval or continuity, extreme values may fail to exist.",
      },
      {
        question:
          "Let $f(x) = \\dfrac{1}{x-2}$ on $[1, 3]$. Which statement is true?",
        options: [
          "The EVT does not apply because f is not continuous on [1, 3]",
          "The EVT applies and f has an absolute maximum of $-1$ at $x=1$",
          "The EVT applies and f has an absolute minimum at $x=3$",
          "The EVT applies because f is differentiable on (1, 3)",
        ],
        answerIndex: 0,
        explanation:
          "f has a vertical asymptote at $x=2$, which lies inside $[1,3]$, so f is not continuous on the closed interval. The EVT therefore does not apply, and indeed f is unbounded near $x=2$ — no absolute maximum or minimum exists on $[1,3]$.",
      },
    ],
  },
  {
    id: "mvt",
    name: "Mean Value Theorem",
    unit: "Unit 5: Analytical Applications of Differentiation",
    unitNumber: 5,
    tags: ["theorem", "MCQ frequent", "FRQ"],
    summary:
      "If f is continuous on [a, b] and differentiable on (a, b), there exists a point c where the instantaneous rate of change equals the average rate of change.",
    formula: "f'(c)=\\frac{f(b)-f(a)}{b-a}",
    description:
      "The Mean Value Theorem (MVT) states that under appropriate smoothness conditions, the slope of the secant line connecting (a, f(a)) and (b, f(b)) equals the slope of the tangent line at some interior point c. Geometrically, there is at least one point where the tangent is parallel to the secant. The MVT is used on FRQs to justify existence statements — for example, proving that a derivative must equal a specific value on an interval.",
    steps: [
      "Confirm f is continuous on the closed interval [a, b].",
      "Confirm f is differentiable on the open interval (a, b).",
      "Compute the average rate of change: $\\frac{f(b)-f(a)}{b-a}$.",
      "Conclude that there exists at least one $c \\in (a, b)$ such that $f'(c) = \\frac{f(b)-f(a)}{b-a}$.",
      "To find c explicitly, set the derivative equal to the average rate and solve for x.",
    ],
    examples: [
      {
        problem:
          "Verify that the MVT applies to $f(x)=x^3 - x$ on $[0, 2]$, then find all values of $c$ guaranteed by the theorem.",
        solution:
          "f is a polynomial, so it is continuous on $[0,2]$ and differentiable on $(0,2)$ — MVT applies. Average rate of change: $\\frac{f(2)-f(0)}{2-0}=\\frac{6-0}{2}=3$. Setting $f'(c)=3x^2-1=3$ gives $3c^2=4$, so $c=\\frac{2}{\\sqrt{3}}=\\frac{2\\sqrt{3}}{3}\\approx 1.155$, which lies in $(0,2)$.",
      },
    ],
    mcqs: [
      {
        question:
          "The Mean Value Theorem guarantees the existence of a point c in (a, b) where f'(c) equals the average rate of change of f on [a, b]. What are the minimum conditions required?",
        options: [
          "f continuous on [a, b] and differentiable on (a, b)",
          "f differentiable on [a, b] and f(a) = f(b)",
          "f continuous on (a, b) and differentiable at every integer in [a, b]",
          "f increasing on [a, b] and f' continuous on (a, b)",
        ],
        answerIndex: 0,
        explanation:
          "The MVT requires continuity on the closed interval and differentiability on the open interval. The condition f(a)=f(b) applies to Rolle's Theorem, a special case. Continuity on the open interval alone is insufficient, and monotonicity is not required.",
      },
      {
        question:
          "Let $f(x) = x^2$ on $[1, 5]$. What value of $c$ is guaranteed by the Mean Value Theorem?",
        options: ["$c = 2$", "$c = 3$", "$c = 4$", "$c = 5$"],
        answerIndex: 1,
        explanation:
          "Average rate of change: $\\frac{f(5)-f(1)}{5-1}=\\frac{25-1}{4}=6$. Setting $f'(c)=2c=6$ gives $c=3$, which lies in $(1,5)$. Answer: $c=3$.",
      },
    ],
  },
  {
    id: "critical-points",
    name: "Critical Points",
    unit: "Unit 5: Analytical Applications of Differentiation",
    unitNumber: 5,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "A critical point occurs where the derivative is zero or undefined, and these are the only candidates for local extrema.",
    formula: "f'(c)=0\\ \\text{or}\\ f'(c)\\ \\text{DNE}",
    description:
      "A critical point of f is any value x = c in the domain of f where f'(c) = 0 or f'(c) does not exist. By Fermat's theorem, every local maximum and local minimum of a differentiable function occurs at a critical point, but not every critical point yields an extremum. Identifying critical points is the first step in analyzing the behavior of a function — you then apply the First or Second Derivative Test to classify each one.",
    steps: [
      "Compute $f'(x)$.",
      "Find all x in the domain of f where $f'(x) = 0$ by solving the equation.",
      "Find all x in the domain of f where $f'(x)$ does not exist (e.g., corners, cusps, vertical tangents).",
      "Collect all such x-values — these are the critical points.",
      "Verify each candidate lies in the domain of f (not just the domain of f').",
    ],
    examples: [
      {
        problem: "Find all critical points of $f(x) = x^3 - 6x^2 + 9x + 1$.",
        solution:
          "$f'(x)=3x^2-12x+9=3(x^2-4x+3)=3(x-1)(x-3)$. Setting $f'(x)=0$: $x=1$ and $x=3$. f' exists everywhere (polynomial), so the only critical points are $x=1$ and $x=3$.",
      },
    ],
    mcqs: [
      {
        question:
          "Which of the following best describes a critical point of a function f?",
        options: [
          "A point where f'(x) = 0 or f'(x) does not exist",
          "A point where f(x) = 0",
          "A point where f is not continuous",
          "A point where f''(x) = 0",
        ],
        answerIndex: 0,
        explanation:
          "Critical points are defined by the behavior of the first derivative: f'(c)=0 or f'(c) DNE. Points where f(x)=0 are zeros (x-intercepts), not critical points. Points where f is discontinuous are not in the domain. Points where f''=0 are candidates for inflection points, not critical points.",
      },
      {
        question: "How many critical points does $f(x) = x^{2/3}$ have?",
        options: [
          "Zero — f' is never zero",
          "One — at $x = 0$ where f' does not exist",
          "Two — at $x = \\pm 1$",
          "Infinitely many — f' equals zero for all x",
        ],
        answerIndex: 1,
        explanation:
          "$f'(x)=\\frac{2}{3}x^{-1/3}=\\frac{2}{3x^{1/3}}$. This is never zero, but it does not exist at $x=0$ (division by zero). Since $x=0$ is in the domain of f ($f(0)=0$), it is the only critical point, corresponding to a cusp.",
      },
    ],
  },
  {
    id: "candidates-test",
    name: "Candidates Test (Closed Interval Method)",
    unit: "Unit 5: Analytical Applications of Differentiation",
    unitNumber: 5,
    tags: ["MCQ frequent", "FRQ", "calculator active"],
    summary:
      "To find absolute extrema on a closed interval, evaluate f at all critical points inside the interval and at both endpoints, then compare.",
    description:
      "The Candidates Test (also called the Closed Interval Method) is the systematic procedure for finding the absolute maximum and minimum of a continuous function on a closed interval [a, b]. Because the EVT guarantees these extrema exist, you only need to compare f-values at a finite list of candidates: the endpoints and any critical points in the open interval (a, b). The largest value is the absolute maximum and the smallest is the absolute minimum.",
    steps: [
      "Confirm f is continuous on [a, b] so the EVT applies.",
      "Find $f'(x)$ and solve $f'(x)=0$ and $f'(x)$ DNE to locate all critical points.",
      "Keep only the critical points that lie strictly inside the interval $(a, b)$.",
      "Evaluate f at each critical point and at both endpoints $x=a$ and $x=b$.",
      "The largest output is the absolute maximum; the smallest output is the absolute minimum.",
    ],
    examples: [
      {
        problem:
          "Find the absolute maximum and minimum of $f(x)=2x^3-9x^2+12x-4$ on $[0, 3]$.",
        solution:
          "$f'(x)=6x^2-18x+12=6(x-1)(x-2)$. Critical points in $(0,3)$: $x=1$ and $x=2$. Evaluate: $f(0)=-4$, $f(1)=2-9+12-4=1$, $f(2)=16-36+24-4=0$, $f(3)=54-81+36-4=5$. Absolute maximum: $5$ at $x=3$; absolute minimum: $-4$ at $x=0$.",
      },
    ],
    mcqs: [
      {
        question:
          "When using the Candidates Test to find absolute extrema on a closed interval [a, b], which values of x must be checked?",
        options: [
          "All critical points in (a, b) and both endpoints a and b",
          "Only the critical points where f'(x) = 0",
          "Only the endpoints a and b",
          "All points where f''(x) = 0",
        ],
        answerIndex: 0,
        explanation:
          "The Candidates Test requires evaluating f at every critical point inside (a, b) — whether from f'=0 or f' DNE — and at both endpoints. Omitting endpoints or inflection points (f''=0) can lead to missing the true extremum.",
      },
      {
        question:
          "On $[-1, 2]$, the function $f(x)=x^3-3x$ has critical points at $x=-1$ and $x=1$. Given $f(-1)=2$, $f(1)=-2$, $f(-1)=-(-1)^3+3(-1)=2$, and $f(2)=2$, what is the absolute maximum on $[-1,2]$?",
        options: [
          "$f = -2$ at $x = 1$",
          "$f = 2$ at $x = -1$",
          "$f = 2$ at $x = 2$",
          "Both $f(-1)=2$ and $f(2)=2$ are absolute maxima",
        ],
        answerIndex: 3,
        explanation:
          "$f(-1)=(-1)^3-3(-1)=-1+3=2$ and $f(2)=8-6=2$. Both endpoints give $f=2$, the largest value, while $f(1)=-2$ is the absolute minimum. The absolute maximum value is $2$, achieved at two points.",
      },
    ],
  },
  {
    id: "first-derivative-test",
    name: "First Derivative Test",
    unit: "Unit 5: Analytical Applications of Differentiation",
    unitNumber: 5,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "Classify critical points by checking whether f' changes sign — positive to negative means local max, negative to positive means local min.",
    description:
      "The First Derivative Test states that if c is a critical point, then f has a local maximum at c if f' changes from positive to negative at c, a local minimum if f' changes from negative to positive, and no local extremum if f' does not change sign. You analyze the sign of f' on intervals separated by critical points by creating a sign chart. This test works even when f'' is difficult to compute or equals zero at the critical point.",
    steps: [
      "Find all critical points of f by solving $f'(x)=0$ and locating where $f'(x)$ DNE.",
      "Place the critical points on a number line to create test intervals.",
      "Choose a test value in each interval and evaluate the sign of $f'$ there.",
      "If $f'$ changes from $+$ to $-$ at $c$, then $f$ has a local maximum at $c$.",
      "If $f'$ changes from $-$ to $+$ at $c$, then $f$ has a local minimum at $c$.",
      "If $f'$ does not change sign, $c$ is neither a local max nor a local min.",
    ],
    examples: [
      {
        problem:
          "Use the First Derivative Test to classify the critical points of $f(x)=x^4-4x^3$.",
        solution:
          "$f'(x)=4x^3-12x^2=4x^2(x-3)$. Critical points: $x=0$ and $x=3$. Sign chart: for $x<0$, $f'=4(-)(-)=$ positive (actually $4x^2>0$ and $(x-3)<0$, so $f'<0$); for $0<x<3$, $4x^2>0$ and $(x-3)<0$, so $f'<0$; for $x>3$, $f'>0$. At $x=0$: $f'$ goes from $-$ to $-$ — no extremum. At $x=3$: $f'$ goes from $-$ to $+$ — local minimum. $f(3)=81-108=-27$.",
      },
    ],
    mcqs: [
      {
        question:
          "According to the First Derivative Test, if f'(x) changes from negative to positive at a critical point c, then f has a:",
        options: [
          "Local maximum at c",
          "Local minimum at c",
          "Point of inflection at c",
          "No conclusion can be drawn",
        ],
        answerIndex: 1,
        explanation:
          "A sign change of f' from negative (decreasing) to positive (increasing) means f bottoms out at c — a local minimum. A change from positive to negative gives a local maximum. No sign change means no extremum. A sign change of f'' at c would indicate a possible inflection point.",
      },
      {
        question:
          "Let $f'(x)=(x+2)^2(x-4)$. What is the behavior of f at $x=-2$?",
        options: [
          "Local maximum",
          "Local minimum",
          "Neither a local max nor a local min",
          "Absolute minimum",
        ],
        answerIndex: 2,
        explanation:
          "$(x+2)^2 \\ge 0$ always, so the sign of $f'$ is determined by $(x-4)$. For $x<4$, $(x-4)<0$, so $f'<0$ on both sides of $x=-2$ (except at $-2$ itself). Since $f'$ does not change sign at $x=-2$, there is no local extremum there.",
      },
    ],
  },
  {
    id: "second-derivative-test",
    name: "Second Derivative Test",
    unit: "Unit 5: Analytical Applications of Differentiation",
    unitNumber: 5,
    tags: ["MCQ frequent"],
    summary:
      "At a critical point where f'(c) = 0, check the sign of f''(c) to classify it as a local minimum (f'' > 0) or local maximum (f'' < 0).",
    formula: "f'(c)=0\\ \\text{and}\\ f''(c)>0\\Rightarrow\\text{local min}",
    description:
      "The Second Derivative Test provides a quick way to classify critical points where f'(c) = 0: if f''(c) > 0, the function is concave up at c, confirming a local minimum; if f''(c) < 0, the function is concave down at c, confirming a local maximum. If f''(c) = 0 or f''(c) does not exist, the test is inconclusive and you must fall back to the First Derivative Test. The test does not apply when f'(c) does not exist.",
    steps: [
      "Find all critical points where $f'(c)=0$.",
      "Compute $f''(x)$ and evaluate it at each critical point.",
      "If $f''(c)>0$, conclude f has a local minimum at c (concave up).",
      "If $f''(c)<0$, conclude f has a local maximum at c (concave down).",
      "If $f''(c)=0$ or DNE, the test is inconclusive — use the First Derivative Test instead.",
    ],
    examples: [
      {
        problem:
          "Use the Second Derivative Test to classify all critical points of $f(x)=x^3-3x^2-9x+5$.",
        solution:
          "$f'(x)=3x^2-6x-9=3(x-3)(x+1)$. Critical points: $x=3$ and $x=-1$. $f''(x)=6x-6$. At $x=3$: $f''(3)=12>0$ — local minimum, $f(3)=-22$. At $x=-1$: $f''(-1)=-12<0$ — local maximum, $f(-1)=10$.",
      },
    ],
    mcqs: [
      {
        question:
          "If f'(c) = 0 and f''(c) < 0, then the Second Derivative Test concludes that f has:",
        options: [
          "A local minimum at c",
          "A local maximum at c",
          "An inflection point at c",
          "No conclusion — the test is inconclusive",
        ],
        answerIndex: 1,
        explanation:
          "f''(c) < 0 means the graph is concave down at c, so the critical point is a peak — a local maximum. f''(c) > 0 would indicate a local minimum. The test is inconclusive only when f''(c) = 0, not when f''(c) < 0.",
      },
      {
        question:
          "For $f(x)=x^4$, the Second Derivative Test at $x=0$ is inconclusive because $f''(0)=0$. What does the First Derivative Test reveal about $x=0$?",
        options: [
          "Local maximum",
          "Local minimum",
          "Neither max nor min",
          "Inflection point",
        ],
        answerIndex: 1,
        explanation:
          "$f'(x)=4x^3$. For $x<0$, $f'<0$ (decreasing); for $x>0$, $f'>0$ (increasing). The sign changes from $-$ to $+$, so $x=0$ is a local minimum. This illustrates why the First Derivative Test is needed when the Second Derivative Test fails.",
      },
    ],
  },
  {
    id: "increasing-decreasing",
    name: "Increasing and Decreasing Intervals",
    unit: "Unit 5: Analytical Applications of Differentiation",
    unitNumber: 5,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "f is increasing where f' > 0 and decreasing where f' < 0; the sign of f' determines the direction of the function.",
    formula: "f'>0\\Rightarrow\\text{increasing}",
    description:
      "A function f is increasing on an interval if f'(x) > 0 for all x in that interval, and decreasing if f'(x) < 0. The transition points between increasing and decreasing behavior occur at critical points, where f'(x) = 0 or f'(x) does not exist. Creating a sign chart of f' on intervals separated by critical points is the standard method for identifying these intervals, and FRQ problems often ask you to justify your answer by referencing the sign of f'.",
    steps: [
      "Find $f'(x)$ and determine all critical points (where $f'=0$ or $f'$ DNE).",
      "Plot the critical points on a number line to create test intervals.",
      "Choose a representative x-value in each interval and determine the sign of $f'$.",
      "State that f is increasing on intervals where $f'(x)>0$.",
      "State that f is decreasing on intervals where $f'(x)<0$.",
      "Write the final answer as intervals using proper notation, justifying with the sign of $f'$.",
    ],
    examples: [
      {
        problem:
          "Find the intervals on which $f(x)=3x^4-8x^3-6x^2+24x$ is increasing and decreasing.",
        solution:
          "$f'(x)=12x^3-24x^2-12x+24=12(x^3-2x^2-x+2)=12(x-2)(x-1)(x+1)$. Critical points: $x=-1, 1, 2$. Sign chart: $f'>0$ on $(-1,1)$ and $(2,\\infty)$; $f'<0$ on $(-\\infty,-1)$ and $(1,2)$. Increasing on $(-1,1)\\cup(2,\\infty)$; decreasing on $(-\\infty,-1)\\cup(1,2)$.",
      },
    ],
    mcqs: [
      {
        question: "On which interval is $f(x)=x^3-12x$ increasing?",
        options: [
          "$(-\\infty, -2) \\cup (2, \\infty)$",
          "$(-2, 2)$",
          "$(-\\infty, 0)$",
          "$(0, \\infty)$",
        ],
        answerIndex: 0,
        explanation:
          "$f'(x)=3x^2-12=3(x^2-4)=3(x-2)(x+2)$. $f'>0$ when $x<-2$ or $x>2$, so f is increasing on $(-\\infty,-2)\\cup(2,\\infty)$ and decreasing on $(-2,2)$.",
      },
      {
        question:
          "The graph of f' is shown to be positive on (1, 4) and negative elsewhere on [0, 5]. On which interval is f decreasing?",
        options: [
          "$(1, 4)$",
          "$(0, 1) \\cup (4, 5)$",
          "$(0, 5)$",
          "$(0, 1)$ only",
        ],
        answerIndex: 1,
        explanation:
          "f is decreasing where f' < 0. Since f' is negative on $(0,1)$ and $(4,5)$ (i.e., outside the interval where it is positive), f is decreasing on $(0,1)\\cup(4,5)$.",
      },
    ],
  },
  {
    id: "concavity-inflection",
    name: "Concavity and Points of Inflection",
    unit: "Unit 5: Analytical Applications of Differentiation",
    unitNumber: 5,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "f is concave up where f'' > 0 and concave down where f'' < 0; an inflection point occurs where concavity changes.",
    formula: "f''>0\\Rightarrow\\text{concave up}",
    description:
      "Concavity describes the curvature of a graph: f is concave up on an interval where f''(x) > 0 (the graph curves like a cup, tangent lines lie below the curve) and concave down where f''(x) < 0 (curves like a cap, tangent lines lie above the curve). A point of inflection is a point on the graph where the concavity changes from up to down or vice versa; it requires that f'' changes sign there, not merely that f'' = 0. On FRQs you must justify inflection points by showing the sign change of f''.",
    steps: [
      "Compute $f''(x)$.",
      "Find all x where $f''(x)=0$ or $f''(x)$ does not exist — these are candidates for inflection points.",
      "Create a sign chart for $f''$ on intervals separated by these candidates.",
      "Identify intervals where $f''>0$ (concave up) and where $f''<0$ (concave down).",
      "Confirm inflection points by verifying that $f''$ actually changes sign; state the point as $(c, f(c))$.",
    ],
    examples: [
      {
        problem:
          "Find the intervals of concavity and all inflection points for $f(x)=x^4-4x^3+6$.",
        solution:
          "$f'(x)=4x^3-12x^2$; $f''(x)=12x^2-24x=12x(x-2)$. $f''=0$ at $x=0$ and $x=2$. Sign chart: $f''>0$ on $(-\\infty,0)$ and $(2,\\infty)$; $f''<0$ on $(0,2)$. Concave up on $(-\\infty,0)\\cup(2,\\infty)$; concave down on $(0,2)$. Inflection points at $(0,6)$ and $(2, -10)$ since concavity changes at both.",
      },
    ],
    mcqs: [
      {
        question:
          "Which condition is necessary to confirm that x = c is a point of inflection of f?",
        options: [
          "$f''(c) = 0$",
          "$f'(c) = 0$",
          "$f''$ changes sign at $x = c$",
          "$f$ has a local extremum at $x = c$",
        ],
        answerIndex: 2,
        explanation:
          "An inflection point requires a sign change in f''. While f''(c)=0 is often a necessary condition (for twice-differentiable functions), it is not sufficient — consider $f(x)=x^4$ where $f''(0)=0$ but concavity does not change. The sign change of f'' is the definitive criterion.",
      },
      {
        question:
          "If $f''(x)=6x-12$, on which interval is the graph of f concave down?",
        options: [
          "$(2, \\infty)$",
          "$(-\\infty, 2)$",
          "$(-\\infty, 0)$",
          "$(0, 2)$",
        ],
        answerIndex: 1,
        explanation:
          "$f''(x)=6x-12<0$ when $6x<12$, i.e. $x<2$. So the graph is concave down on $(-\\infty, 2)$ and concave up on $(2,\\infty)$, with an inflection point at $x=2$.",
      },
    ],
  },
  {
    id: "optimization",
    name: "Optimization (Global and Local Extrema)",
    unit: "Unit 5: Analytical Applications of Differentiation",
    unitNumber: 5,
    tags: ["FRQ", "MCQ frequent", "calculator active"],
    summary:
      "Set up a function to be maximized or minimized, reduce it to one variable, find critical points, and apply the Candidates Test or First Derivative Test.",
    description:
      "Optimization problems ask for the maximum or minimum value of a quantity — area, volume, cost, distance — subject to given constraints. The process always involves identifying the objective function (what you optimize), expressing it in terms of one variable using the constraint equation, finding critical points via the derivative, and classifying them. On a closed domain the Candidates Test is used; on an open domain you rely on the First or Second Derivative Test combined with physical reasoning.",
    steps: [
      "Read the problem and identify the quantity to maximize or minimize — write it as a function with variables.",
      "Write a constraint equation relating the variables and use it to eliminate all but one variable.",
      "Express the objective function in one variable and determine its domain (open or closed interval).",
      "Differentiate and set the derivative equal to zero; solve for critical points.",
      "If the domain is closed, use the Candidates Test (compare all critical points and endpoints).",
      "If the domain is open, use the First or Second Derivative Test; justify using boundary behavior.",
      "Answer the question — state what is maximized/minimized and give the optimal value with units.",
    ],
    examples: [
      {
        problem:
          "A farmer has 200 m of fencing to enclose a rectangular area. What dimensions maximize the enclosed area?",
        solution:
          "Let width $= w$ and length $= l$. Constraint: $2w+2l=200 \\Rightarrow l=100-w$. Objective: $A=wl=w(100-w)=100w-w^2$. Domain: $w\\in(0,100)$ (open). $A'(w)=100-2w=0\\Rightarrow w=50$. $A''(w)=-2<0$, confirming a maximum. $l=100-50=50$. Maximum area $=50\\times50=2500$ m$^2$, achieved by a square.",
      },
    ],
    mcqs: [
      {
        question:
          "In an optimization problem with an open domain, after finding a single critical point, which test most efficiently confirms it is a maximum?",
        options: [
          "Evaluate f at the critical point and compare to endpoints",
          "Use the Candidates Test with all critical points and endpoints",
          "Apply the Second Derivative Test: if f'' < 0 at the critical point, it is a maximum",
          "Check that the function is continuous on the open interval",
        ],
        answerIndex: 2,
        explanation:
          "On an open domain there are no endpoints to include in the Candidates Test. With a single critical point, the Second Derivative Test (or First Derivative Test sign change) is the most direct way to confirm a maximum. The sign of f'' at the critical point tells you the concavity and hence the nature of the extremum.",
      },
      {
        question:
          "A box with a square base and no lid is to have a volume of 32 cm³. Which expression gives the surface area in terms of the base side length x?",
        options: [
          "$S = x^2 + \\dfrac{128}{x}$",
          "$S = x^2 + 4x^2$",
          "$S = 4x + \\dfrac{32}{x^2}$",
          "$S = x^2 + \\dfrac{32}{x}$",
        ],
        answerIndex: 0,
        explanation:
          "Base area: $x^2$. Height from volume constraint: $h=\\frac{32}{x^2}$. Four side panels: $4\\cdot x\\cdot h=4x\\cdot\\frac{32}{x^2}=\\frac{128}{x}$. Total surface area (no lid): $S=x^2+\\frac{128}{x}$.",
      },
    ],
  },
  {
    id: "connecting-f-fprime-fpp",
    name: "Connecting f, f', and f'' Graphically",
    unit: "Unit 5: Analytical Applications of Differentiation",
    unitNumber: 5,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "The graph of f' reveals where f is increasing, decreasing, and has local extrema; the graph of f'' reveals concavity and inflection points of f.",
    description:
      "Understanding the graphical relationships among f, f', and f'' is essential for AP Calculus. Where f' > 0, f is increasing; where f' < 0, f is decreasing; where f' changes sign, f has a local extremum. Where f'' > 0, f is concave up (f' is increasing); where f'' < 0, f is concave down (f' is decreasing); where f'' changes sign, f has an inflection point. Many MCQ and FRQ items give you the graph of f' or f'' and ask you to describe the behavior of f itself.",
    steps: [
      "Given a graph of $f'$: where $f'>0$, f is increasing; where $f'<0$, f is decreasing.",
      "Local maxima of f occur where $f'$ changes from positive to negative (crosses the x-axis from above).",
      "Local minima of f occur where $f'$ changes from negative to positive (crosses the x-axis from below).",
      "Where $f'$ is increasing (slope of $f'$ is positive), $f''>0$ so f is concave up.",
      "Where $f'$ is decreasing (slope of $f'$ is negative), $f''<0$ so f is concave down.",
      "Inflection points of f occur at local extrema of $f'$ (where $f'$ changes from increasing to decreasing or vice versa).",
    ],
    examples: [
      {
        problem:
          "The graph of $f'$ is a parabola opening upward with vertex at $(2, -3)$ and zeros at $x=0$ and $x=4$. Describe the behavior of f on $[0, 5]$.",
        solution:
          "$f'<0$ on $(0,4)$ so f is decreasing on $(0,4)$. $f'>0$ on $(4,5)$ so f is increasing there. f has a local minimum at $x=4$ (sign change $-$ to $+$). $f'$ is decreasing on $(-\\infty,2)$ so f is concave down on $(0,2)$; $f'$ is increasing on $(2,\\infty)$ so f is concave up on $(2,5)$. Inflection point of f at $x=2$ (local minimum of $f'$).",
      },
    ],
    mcqs: [
      {
        question:
          "The graph of f' has a local maximum at x = 3. What does this indicate about the graph of f?",
        options: [
          "f has a local maximum at x = 3",
          "f has an inflection point at x = 3",
          "f has a local minimum at x = 3",
          "f' = 0 at x = 3",
        ],
        answerIndex: 1,
        explanation:
          "A local maximum of f' means f' changes from increasing to decreasing at x=3, so f'' changes from positive to negative — a sign change in f''. This is precisely the condition for an inflection point of f, not a local extremum of f (which would require f' to change sign, i.e., cross the x-axis).",
      },
      {
        question:
          "On the interval (a, b), the graph of f' lies entirely below the x-axis and is increasing. Which statement about f is correct?",
        options: [
          "f is increasing and concave up",
          "f is increasing and concave down",
          "f is decreasing and concave up",
          "f is decreasing and concave down",
        ],
        answerIndex: 2,
        explanation:
          "f' < 0 means f is decreasing. f' is increasing means f'' > 0, so f is concave up. These two conditions combine: f is decreasing and concave up — the graph is falling but bending upward (like the right side of a bowl).",
      },
    ],
  },
  {
    id: "sketching-from-derivatives",
    name: "Sketching f from f' or f''",
    unit: "Unit 5: Analytical Applications of Differentiation",
    unitNumber: 5,
    tags: ["MCQ frequent"],
    summary:
      "Given a graph or equation for f' (or f''), reconstruct the qualitative shape of f by interpreting sign, zeros, and monotonicity of the derivative.",
    description:
      "Reconstructing the graph of f from information about f' or f'' is a core calculus skill. You use the sign of f' to determine where f rises and falls, zeros of f' to place extrema, and the sign changes of f'' (equivalently, where f' increases or decreases) to determine concavity and inflection points. The actual y-values of f are not fully determined without an initial condition, but the shape — including relative heights of local maxima and minima — can be read from the area under f'.",
    steps: [
      "Read the sign of $f'$ on each sub-interval to determine where f is increasing or decreasing.",
      "Identify zeros of $f'$ and determine whether they correspond to local maxima, local minima, or neither.",
      "Determine concavity by identifying where $f'$ is increasing ($f''>0$, concave up) or decreasing ($f''<0$, concave down).",
      "Place inflection points where $f'$ has a local extremum or $f''$ changes sign.",
      "Sketch f using smooth curves consistent with all increasing/decreasing and concavity information.",
      "If an initial value $f(a)$ is given, anchor the sketch at that point.",
    ],
    examples: [
      {
        problem:
          "Given that $f'(x)=3(x-1)(x+2)$, sketch a qualitative graph of f indicating all local extrema and concavity changes.",
        solution:
          "$f'=0$ at $x=-2$ and $x=1$. Sign chart: $f'>0$ for $x<-2$, $f'<0$ for $-2<x<1$, $f'>0$ for $x>1$. So f has a local max at $x=-2$ and a local min at $x=1$. $f''=3(2x-1+2)=3(2x+1)=6x+3$: wait, expanding $f'=3(x^2+x-2)=3x^2+3x-6$, so $f''=6x+3$. $f''=0$ at $x=-\\frac{1}{2}$: inflection point. Concave down on $(-\\infty,-\\frac{1}{2})$, concave up on $(-\\frac{1}{2},\\infty)$.",
      },
    ],
    mcqs: [
      {
        question:
          "The graph of f' is positive and decreasing on (0, 3). Which description best fits f on (0, 3)?",
        options: [
          "Decreasing and concave up",
          "Increasing and concave up",
          "Increasing and concave down",
          "Decreasing and concave down",
        ],
        answerIndex: 2,
        explanation:
          "f' > 0 means f is increasing. f' is decreasing means f'' < 0, so f is concave down. The graph of f is rising but bending downward — like the left side of a hill.",
      },
      {
        question:
          "If f'(x) > 0 for all x in (a, b) and f' has no zeros in (a, b), what can you conclude about f on (a, b)?",
        options: [
          "f has no local extrema and is strictly increasing on (a, b)",
          "f has exactly one local maximum on (a, b)",
          "f is constant on (a, b)",
          "f has an inflection point on (a, b)",
        ],
        answerIndex: 0,
        explanation:
          "Since f' > 0 throughout (a, b) with no zeros, f never stops increasing — it is strictly increasing with no local extrema on the interval. Local extrema would require f' to change sign, which cannot happen if f' has no zeros and maintains a fixed sign.",
      },
    ],
  },
  {
    id: "implicit-second-derivative",
    name: "Second Derivative from Implicit Differentiation",
    unit: "Unit 5: Analytical Applications of Differentiation",
    unitNumber: 5,
    tags: ["FRQ"],
    summary:
      "Differentiate the implicitly-obtained dy/dx expression a second time with respect to x, substituting the expression for dy/dx to write d²y/dx² purely in terms of x and y.",
    description:
      "When a curve is defined implicitly (e.g., F(x, y) = 0), computing d²y/dx² requires differentiating the expression for dy/dx with respect to x, using the chain rule wherever y appears. After differentiating, substitute the expression for dy/dx back into the result to eliminate dy/dx, leaving d²y/dx² in terms of x and y only. On FRQs you must show every step clearly, including the substitution, and may be asked to evaluate d²y/dx² at a specific point to determine concavity.",
    steps: [
      "Differentiate the original equation implicitly with respect to x, treating y as a function of x.",
      "Solve algebraically for $\\frac{dy}{dx}$ in terms of x and y.",
      "Differentiate $\\frac{dy}{dx}$ with respect to x again, applying the quotient or product rule as needed and treating y as a function of x.",
      "Wherever $\\frac{dy}{dx}$ appears in the result, substitute the expression from step 2.",
      "Simplify $\\frac{d^2y}{dx^2}$ and leave it in terms of x and y.",
      "If asked about concavity at a point, substitute the specific coordinates to evaluate the sign.",
    ],
    examples: [
      {
        problem:
          "Given $x^2+y^2=25$, find $\\frac{d^2y}{dx^2}$ in terms of x and y.",
        solution:
          "First derivative: differentiate both sides: $2x+2y\\frac{dy}{dx}=0 \\Rightarrow \\frac{dy}{dx}=-\\frac{x}{y}$. Second derivative: differentiate $\\frac{dy}{dx}=-\\frac{x}{y}$ with respect to x using the quotient rule: $\\frac{d^2y}{dx^2}=-\\frac{y\\cdot 1-x\\cdot\\frac{dy}{dx}}{y^2}=-\\frac{y-x\\left(-\\frac{x}{y}\\right)}{y^2}=-\\frac{y+\\frac{x^2}{y}}{y^2}=-\\frac{y^2+x^2}{y^3}=-\\frac{25}{y^3}$.",
      },
    ],
    mcqs: [
      {
        question:
          "After finding dy/dx implicitly, why must you substitute the expression for dy/dx when computing d²y/dx²?",
        options: [
          "To eliminate dy/dx so that d²y/dx² is expressed purely in terms of x and y",
          "Because dy/dx is always zero at this stage",
          "To apply L'Hôpital's Rule to the resulting expression",
          "To convert the implicit equation to an explicit function y = f(x)",
        ],
        answerIndex: 0,
        explanation:
          "After differentiating dy/dx again, the result contains dy/dx as a factor. Substituting the first-derivative expression replaces dy/dx with its x-and-y form, giving a final answer for d²y/dx² in terms of x and y only — the expected form for implicit differentiation on the AP exam.",
      },
      {
        question:
          "For the curve $xy = 4$, the first derivative is $\\frac{dy}{dx} = -\\frac{y}{x}$. What is $\\frac{d^2y}{dx^2}$ at the point $(2, 2)$?",
        options: ["$1$", "$-1$", "$\\frac{1}{2}$", "$\\frac{2}{4}$"],
        answerIndex: 0,
        explanation:
          "Differentiate $\\frac{dy}{dx}=-\\frac{y}{x}$ with the quotient rule: $\\frac{d^2y}{dx^2}=-\\frac{x\\frac{dy}{dx}-y}{x^2}$. Substitute $\\frac{dy}{dx}=-\\frac{y}{x}$: $=-\\frac{x\\left(-\\frac{y}{x}\\right)-y}{x^2}=-\\frac{-y-y}{x^2}=\\frac{2y}{x^2}$. At $(2,2)$: $\\frac{2(2)}{4}=1$.",
      },
    ],
  },
];
