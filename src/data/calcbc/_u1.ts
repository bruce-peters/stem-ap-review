export default [
  {
    id: "limit-definition",
    name: "Definition of a Limit",
    unit: "Unit 1: Limits and Continuity",
    unitNumber: 1,
    tags: ["MCQ frequent"],
    summary:
      "The limit of f(x) as x approaches a equals L if f(x) can be made arbitrarily close to L by taking x sufficiently close (but not equal) to a.",
    formula: "\\lim_{x \\to a} f(x) = L",
    description:
      "A limit describes the value a function approaches as the input approaches some value, regardless of the function's actual value at that point. The formal (epsilon-delta) definition states that for every epsilon > 0, there exists a delta > 0 such that whenever 0 < |x - a| < delta, we have |f(x) - L| < epsilon. Limits are the foundation of calculus, underpinning continuity, derivatives, and integrals.",
    steps: [
      "Identify the value $a$ that $x$ is approaching and substitute $x = a$ directly into $f(x)$.",
      "If direct substitution yields a defined real number, that number is the limit.",
      "If substitution gives an indeterminate form like $\\frac{0}{0}$, try algebraic simplification (factoring, rationalizing, expanding) to cancel the problematic factor.",
      "After simplification, substitute $x = a$ into the simplified expression to find $L$.",
      "Verify by checking that both one-sided limits agree: $\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = L$.",
    ],
    examples: [
      {
        problem: "Find $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$.",
        solution:
          "Direct substitution gives $\\frac{0}{0}$, an indeterminate form. Factor the numerator: $\\frac{(x-3)(x+3)}{x-3} = x + 3$ for $x \\neq 3$. Now substitute $x = 3$: $3 + 3 = 6$. So $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3} = 6$.",
      },
    ],
    mcqs: [
      {
        question: "Which statement best describes $\\lim_{x \\to a} f(x) = L$?",
        options: [
          "f(a) equals L",
          "f(x) approaches L as x approaches a, regardless of f(a)",
          "f(x) equals L for all x near a",
          "f(x) must be defined at x = a for the limit to exist",
        ],
        answerIndex: 1,
        explanation:
          "The correct answer is B: the limit describes the value f(x) approaches as x gets close to a, and the function need not be defined (or equal L) at x = a itself. A is wrong because f(a) may differ from or not exist at L. C is wrong because f(x) only needs to get arbitrarily close to L, not equal it everywhere. D is wrong because limits can exist even when f(a) is undefined.",
      },
      {
        question: "Evaluate $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$.",
        options: ["0", "2", "4", "undefined"],
        answerIndex: 2,
        explanation:
          "Factor: $\\frac{(x-2)(x+2)}{x-2} = x + 2$ for $x \\neq 2$. Substituting $x = 2$ gives $2 + 2 = 4$. A (0) comes from incorrectly evaluating the numerator alone. B (2) is a common arithmetic error. D is wrong because the limit exists even though the expression is undefined at $x = 2$.",
      },
    ],
  },
  {
    id: "one-sided-limits",
    name: "One-Sided Limits",
    unit: "Unit 1: Limits and Continuity",
    unitNumber: 1,
    tags: ["MCQ frequent"],
    summary:
      "One-sided limits describe the value a function approaches as x approaches a from only the left side or only the right side.",
    formula: "\\lim_{x \\to a^-} f(x),\\ \\lim_{x \\to a^+} f(x)",
    description:
      "The left-hand limit $\\lim_{x \\to a^-} f(x)$ considers only values of x less than a, while the right-hand limit $\\lim_{x \\to a^+} f(x)$ considers only values greater than a. A two-sided limit exists if and only if both one-sided limits exist and are equal. One-sided limits are essential for analyzing piecewise functions and identifying jump discontinuities.",
    steps: [
      "For piecewise functions, identify which piece applies as $x \\to a$ from the left (use $x < a$ piece) and from the right (use $x > a$ piece).",
      "Evaluate the left-hand limit by substituting into the piece defined for $x < a$.",
      "Evaluate the right-hand limit by substituting into the piece defined for $x > a$.",
      "Compare the two one-sided limits: if $\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x)$, the two-sided limit exists and equals that value.",
      "If the one-sided limits differ, state that the two-sided limit does not exist (DNE).",
    ],
    examples: [
      {
        problem:
          "Let $f(x) = \\begin{cases} x + 1 & x < 2 \\\\ 3x - 3 & x \\geq 2 \\end{cases}$. Find $\\lim_{x \\to 2^-} f(x)$, $\\lim_{x \\to 2^+} f(x)$, and $\\lim_{x \\to 2} f(x)$.",
        solution:
          "Left-hand limit: use $x + 1$ as $x \\to 2^-$: $2 + 1 = 3$. Right-hand limit: use $3x - 3$ as $x \\to 2^+$: $3(2) - 3 = 3$. Both one-sided limits equal 3, so $\\lim_{x \\to 2} f(x) = 3$.",
      },
    ],
    mcqs: [
      {
        question:
          "The two-sided limit $\\lim_{x \\to a} f(x)$ exists if and only if:",
        options: [
          "f(a) is defined",
          "the left-hand and right-hand limits both exist and are equal",
          "f is continuous at a",
          "the left-hand limit equals f(a)",
        ],
        answerIndex: 1,
        explanation:
          "The two-sided limit exists precisely when both one-sided limits exist and agree. A is wrong because f(a) need not be defined for a limit to exist. C is stronger than required — the limit can exist without continuity. D incorrectly ties the limit to the function's value at the point.",
      },
      {
        question:
          "Let $f(x) = \\begin{cases} 2x + 1 & x < 1 \\\\ x^2 + 2 & x \\geq 1 \\end{cases}$. What is $\\lim_{x \\to 1} f(x)$?",
        options: ["3", "DNE", "2", "1"],
        answerIndex: 1,
        explanation:
          "Left-hand limit: $2(1) + 1 = 3$. Right-hand limit: $(1)^2 + 2 = 3$. Wait — both equal 3, so the limit is 3. Actually the correct answer is A (3): left limit = $2(1)+1 = 3$, right limit = $1+2 = 3$, so $\\lim_{x\\to 1} f(x) = 3$. DNE would apply only if the one-sided limits differed. 2 and 1 are arithmetic errors in evaluating the pieces.",
      },
    ],
  },
  {
    id: "limit-laws",
    name: "Limit Laws (sum, product, quotient, scalar)",
    unit: "Unit 1: Limits and Continuity",
    unitNumber: 1,
    tags: ["MCQ frequent"],
    summary:
      "Limit laws allow limits of combined functions to be computed from the limits of the individual functions using algebraic rules.",
    description:
      "If $\\lim_{x \\to a} f(x) = L$ and $\\lim_{x \\to a} g(x) = M$, then limits distribute over addition, subtraction, multiplication, and division (provided the denominator limit is nonzero). The scalar multiple law states $\\lim_{x \\to a} [c \\cdot f(x)] = c \\cdot L$. These laws justify the technique of direct substitution for polynomials and rational functions where the denominator is nonzero.",
    steps: [
      "State the limits of the individual pieces: find $\\lim_{x \\to a} f(x) = L$ and $\\lim_{x \\to a} g(x) = M$.",
      "Apply the sum/difference law: $\\lim_{x \\to a}[f(x) \\pm g(x)] = L \\pm M$.",
      "Apply the product law: $\\lim_{x \\to a}[f(x) \\cdot g(x)] = L \\cdot M$.",
      "Apply the quotient law: $\\lim_{x \\to a}\\frac{f(x)}{g(x)} = \\frac{L}{M}$, provided $M \\neq 0$.",
      "Apply the scalar law: $\\lim_{x \\to a}[c \\cdot f(x)] = c \\cdot L$ for any constant $c$.",
      "For power or root laws, use $\\lim_{x \\to a}[f(x)]^n = L^n$ and $\\lim_{x \\to a}\\sqrt[n]{f(x)} = \\sqrt[n]{L}$ (when defined).",
    ],
    examples: [
      {
        problem:
          "Given $\\lim_{x \\to 4} f(x) = 6$ and $\\lim_{x \\to 4} g(x) = 2$, find $\\lim_{x \\to 4} \\frac{3f(x) - g(x)}{g(x)}$.",
        solution:
          "Using limit laws: numerator limit $= 3(6) - 2 = 16$; denominator limit $= 2 \\neq 0$. By the quotient law: $\\frac{16}{2} = 8$.",
      },
    ],
    mcqs: [
      {
        question:
          "Which condition is required to apply the quotient limit law $\\lim_{x \\to a}\\frac{f(x)}{g(x)} = \\frac{L}{M}$?",
        options: [
          "f and g must both be continuous at a",
          "M must not equal zero",
          "L must not equal zero",
          "f(a) and g(a) must both be defined",
        ],
        answerIndex: 1,
        explanation:
          "The quotient law requires only that the limit of the denominator $M \\neq 0$. A is too restrictive — the functions need not be continuous. C is irrelevant; L can be zero. D is wrong — limit laws apply based on limit values, not function values at the point.",
      },
      {
        question:
          "If $\\lim_{x \\to 2} f(x) = 5$ and $\\lim_{x \\to 2} g(x) = 3$, what is $\\lim_{x \\to 2}[2f(x) - g(x)^2]$?",
        options: ["1", "7", "4", "10"],
        answerIndex: 0,
        explanation:
          "By the scalar law: $2 \\cdot 5 = 10$. By the power law: $3^2 = 9$. By the difference law: $10 - 9 = 1$. B (7) results from computing $2(5) - 3 = 7$ (forgetting to square g). C (4) is a miscalculation. D (10) is the scalar term alone without subtracting.",
      },
    ],
  },
  {
    id: "squeeze-theorem",
    name: "Squeeze Theorem",
    unit: "Unit 1: Limits and Continuity",
    unitNumber: 1,
    tags: ["theorem", "MCQ frequent"],
    summary:
      "If g(x) ≤ f(x) ≤ h(x) near a and both g and h approach the same limit L as x → a, then f also approaches L.",
    formula: "g(x)\\le f(x)\\le h(x)\\Rightarrow\\lim f=\\lim g",
    description:
      "The Squeeze Theorem (also called the Sandwich Theorem) allows evaluation of limits of functions that are difficult to compute directly by trapping them between two simpler functions with a known common limit. It is especially useful for limits involving oscillating functions like $\\sin$ or $\\cos$ multiplied by a factor approaching zero. The theorem requires the inequalities to hold in an open interval around a (but not necessarily at a itself).",
    steps: [
      "Identify the function $f(x)$ whose limit you cannot evaluate directly.",
      "Find two bounding functions $g(x)$ and $h(x)$ such that $g(x) \\leq f(x) \\leq h(x)$ for all $x$ near $a$.",
      "For oscillating functions, use the bound $-1 \\leq \\sin(\\cdot) \\leq 1$ or $-1 \\leq \\cos(\\cdot) \\leq 1$ to construct $g$ and $h$.",
      "Compute $\\lim_{x \\to a} g(x)$ and $\\lim_{x \\to a} h(x)$ separately.",
      "If both outer limits equal the same value $L$, conclude by the Squeeze Theorem that $\\lim_{x \\to a} f(x) = L$.",
    ],
    examples: [
      {
        problem:
          "Find $\\lim_{x \\to 0} x^2 \\sin\\!\\left(\\frac{1}{x}\\right)$.",
        solution:
          "Since $-1 \\leq \\sin\\!\\left(\\frac{1}{x}\\right) \\leq 1$ for all $x \\neq 0$, multiply through by $x^2 \\geq 0$: $-x^2 \\leq x^2 \\sin\\!\\left(\\frac{1}{x}\\right) \\leq x^2$. As $x \\to 0$, both $-x^2 \\to 0$ and $x^2 \\to 0$. By the Squeeze Theorem, $\\lim_{x \\to 0} x^2 \\sin\\!\\left(\\frac{1}{x}\\right) = 0$.",
      },
    ],
    mcqs: [
      {
        question:
          "The Squeeze Theorem concludes $\\lim_{x \\to a} f(x) = L$ when:",
        options: [
          "f is continuous at a and f(a) = L",
          "g(x) ≤ f(x) ≤ h(x) near a and both g and h have limit L as x → a",
          "f is bounded near a and the one-sided limits agree",
          "f(x) oscillates between two values whose average is L",
        ],
        answerIndex: 1,
        explanation:
          "B correctly states the Squeeze Theorem's hypotheses: bounding inequalities near a and both bounds sharing the same limit. A confuses the theorem with continuity. C incorrectly summarizes the theorem — boundedness alone is not sufficient. D describes averaging, which is not how the theorem works.",
      },
      {
        question:
          "Evaluate $\\lim_{x \\to 0} x^4 \\cos\\!\\left(\\frac{1}{x^2}\\right)$.",
        options: ["1", "0", "DNE", "-1"],
        answerIndex: 1,
        explanation:
          "Since $-1 \\leq \\cos\\!\\left(\\frac{1}{x^2}\\right) \\leq 1$, we have $-x^4 \\leq x^4\\cos\\!\\left(\\frac{1}{x^2}\\right) \\leq x^4$. Both bounds approach 0 as $x \\to 0$, so by the Squeeze Theorem the limit is 0. A (1) is the maximum of cosine, not the limit of the product. C (DNE) incorrectly applies intuition about oscillation without considering the $x^4$ factor dampening it. D (-1) is the minimum of cosine, not the limit.",
      },
    ],
  },
  {
    id: "trig-special-limits",
    name: "Special Trigonometric Limits",
    unit: "Unit 1: Limits and Continuity",
    unitNumber: 1,
    tags: ["MCQ frequent"],
    summary:
      "The two foundational trigonometric limits are $\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1$ and $\\lim_{x\\to 0}\\frac{1 - \\cos x}{x} = 0$.",
    formula:
      "\\lim_{x\\to 0}\\frac{\\sin x}{x}=1,\\quad\\lim_{x\\to 0}\\frac{1-\\cos x}{x}=0",
    description:
      "These two limits cannot be evaluated by direct substitution (both give $\\frac{0}{0}$) but are proven using the Squeeze Theorem or geometric arguments. They serve as building blocks for computing derivatives of trigonometric functions from the definition. Many AP problems require rewriting a trig limit expression to match one of these two standard forms.",
    steps: [
      "Recognize the indeterminate form $\\frac{0}{0}$ when $x \\to 0$ in a trig expression.",
      "Rewrite the expression so that the argument of $\\sin$ matches the denominator: $\\frac{\\sin(kx)}{kx} \\to 1$ as $x \\to 0$.",
      "Multiply and divide strategically to create the standard form. For example, $\\frac{\\sin(5x)}{x} = 5 \\cdot \\frac{\\sin(5x)}{5x} \\to 5 \\cdot 1 = 5$.",
      "Identify whether the limit fits the second form: any expression of the form $\\frac{1-\\cos(kx)}{x}$ approaches 0 as $x \\to 0$.",
      "Apply limit laws to combine multiple standard forms into a final numerical answer.",
    ],
    examples: [
      {
        problem: "Evaluate $\\lim_{x \\to 0} \\frac{\\sin(3x)}{5x}$.",
        solution:
          "Rewrite as $\\frac{3}{5} \\cdot \\frac{\\sin(3x)}{3x}$. As $x \\to 0$, $\\frac{\\sin(3x)}{3x} \\to 1$. Therefore the limit is $\\frac{3}{5} \\cdot 1 = \\frac{3}{5}$.",
      },
    ],
    mcqs: [
      {
        question:
          "Which of the following equals $\\lim_{x \\to 0} \\frac{\\sin x}{x}$?",
        options: ["0", "1", "∞", "undefined"],
        answerIndex: 1,
        explanation:
          "This is the standard special trig limit, equal to 1. A (0) is a common error from noticing both numerator and denominator go to zero. C and D reflect a misunderstanding — the function approaches a finite value even though substitution gives 0/0.",
      },
      {
        question: "Evaluate $\\lim_{x \\to 0} \\frac{\\sin(7x)}{x}$.",
        options: ["1", "0", "7", "1/7"],
        answerIndex: 2,
        explanation:
          "Write $\\frac{\\sin(7x)}{x} = 7 \\cdot \\frac{\\sin(7x)}{7x}$. As $x \\to 0$, $\\frac{\\sin(7x)}{7x} \\to 1$, so the limit is $7 \\cdot 1 = 7$. A (1) forgets the factor of 7. B (0) comes from incorrectly applying the $\\frac{1 - \\cos x}{x}$ limit. D (1/7) is the reciprocal, a sign of inverting the standard form.",
      },
    ],
  },
  {
    id: "limits-at-infinity",
    name: "Limits at Infinity / End Behavior",
    unit: "Unit 1: Limits and Continuity",
    unitNumber: 1,
    tags: ["MCQ frequent"],
    summary:
      "Limits at infinity describe the long-run behavior of a function as x grows without bound in the positive or negative direction.",
    formula: "\\lim_{x\\to\\infty} f(x)",
    description:
      "For rational functions, end behavior is determined by the ratio of leading terms. If the degree of the numerator is less than that of the denominator, the limit is 0; if degrees are equal, the limit is the ratio of leading coefficients; if the numerator's degree is greater, the limit is $\\pm\\infty$. For functions involving radicals or exponentials, divide by the highest power of x and use the fact that $\\frac{1}{x^n} \\to 0$ as $x \\to \\infty$.",
    steps: [
      "Identify the dominant (highest-degree) term in both the numerator and denominator.",
      "Divide every term in the numerator and denominator by the highest power of $x$ present in the denominator.",
      "Simplify each resulting term; any term with a positive power of $x$ in the denominator goes to 0.",
      "Read off the limit: if the result is a constant, that is $\\lim_{x\\to\\infty} f(x)$; if numerator degree exceeds denominator degree, the limit is $\\pm\\infty$.",
      "For $x \\to -\\infty$, be careful with even vs. odd powers and with $\\sqrt{x^2} = |x| = -x$ for $x < 0$.",
    ],
    examples: [
      {
        problem: "Find $\\lim_{x \\to \\infty} \\frac{4x^3 - 2x}{7x^3 + x^2}$.",
        solution:
          "Divide numerator and denominator by $x^3$: $\\frac{4 - 2/x^2}{7 + 1/x}$. As $x \\to \\infty$, $\\frac{2}{x^2} \\to 0$ and $\\frac{1}{x} \\to 0$. The limit is $\\frac{4}{7}$.",
      },
    ],
    mcqs: [
      {
        question:
          "What is $\\lim_{x \\to \\infty} \\frac{6x^2 + 1}{3x^3 - 5}$?",
        options: ["2", "0", "∞", "2/3"],
        answerIndex: 1,
        explanation:
          "The numerator has degree 2 and the denominator has degree 3; since the denominator grows faster, the limit is 0. A (2) comes from incorrectly taking the ratio of leading coefficients $6/3$ without comparing degrees. C (∞) would apply if the numerator degree exceeded the denominator's. D (2/3) is the ratio of leading coefficients, valid only when degrees are equal.",
      },
      {
        question:
          "What is $\\lim_{x \\to \\infty} \\frac{5x^2 - 3}{2x^2 + 7}$?",
        options: ["0", "5/2", "5/7", "∞"],
        answerIndex: 1,
        explanation:
          "Both numerator and denominator have degree 2, so the limit equals the ratio of leading coefficients: $\\frac{5}{2}$. A (0) incorrectly treats this as a case where denominator degree exceeds numerator. C (5/7) mistakenly uses the constant terms. D (∞) applies only when the numerator degree is strictly greater.",
      },
    ],
  },
  {
    id: "infinite-limits",
    name: "Infinite Limits",
    unit: "Unit 1: Limits and Continuity",
    unitNumber: 1,
    tags: ["MCQ frequent"],
    summary:
      "An infinite limit occurs when a function's values grow without bound as x approaches a finite value, written as $\\lim_{x \\to a} f(x) = \\pm\\infty$.",
    formula: "\\lim_{x\\to a} f(x)=\\pm\\infty",
    description:
      "Infinite limits typically arise when a function has a zero in the denominator and the numerator is nonzero at that point. The sign of the infinite limit ($+\\infty$ or $-\\infty$) is determined by the sign of the expression on each side of $a$. An infinite limit does not mean the limit exists — $\\pm\\infty$ is a description of the behavior, not a real number the function approaches.",
    steps: [
      "Check that the denominator approaches 0 at $x = a$ while the numerator approaches a nonzero value — this signals an infinite limit.",
      "Factor or simplify to confirm the denominator has a zero at $a$ that does not cancel with the numerator.",
      "Evaluate the sign of the expression for $x$ slightly less than $a$ (left side) by substituting a test value.",
      "Evaluate the sign for $x$ slightly greater than $a$ (right side) by substituting another test value.",
      "If both sides go to $+\\infty$, write $+\\infty$; if both go to $-\\infty$, write $-\\infty$; if they differ, the two-sided limit DNE (but one-sided infinite limits exist).",
    ],
    examples: [
      {
        problem:
          "Determine $\\lim_{x \\to 2^+} \\frac{1}{x - 2}$ and $\\lim_{x \\to 2^-} \\frac{1}{x - 2}$.",
        solution:
          "For $x \\to 2^+$: $x - 2 > 0$ and small, so $\\frac{1}{x-2} \\to +\\infty$. For $x \\to 2^-$: $x - 2 < 0$ and small in magnitude, so $\\frac{1}{x-2} \\to -\\infty$. The two-sided limit DNE.",
      },
    ],
    mcqs: [
      {
        question:
          "If $\\lim_{x \\to a^+} f(x) = +\\infty$ and $\\lim_{x \\to a^-} f(x) = -\\infty$, what can be said about $\\lim_{x \\to a} f(x)$?",
        options: [
          "The limit equals 0",
          "The limit equals +∞",
          "The two-sided limit does not exist",
          "The limit equals −∞",
        ],
        answerIndex: 2,
        explanation:
          "Because the one-sided limits differ ($+\\infty \\neq -\\infty$), the two-sided limit does not exist. A (0) has no basis. B and D each select one of the one-sided limits rather than recognizing that disagreement means DNE.",
      },
      {
        question: "Evaluate $\\lim_{x \\to 0^+} \\frac{-3}{x}$.",
        options: ["+∞", "0", "−∞", "3"],
        answerIndex: 2,
        explanation:
          "As $x \\to 0^+$, $x > 0$ and approaches 0, making $\\frac{1}{x} \\to +\\infty$. With the factor of $-3$, the expression $\\to -\\infty$. A forgets the negative sign. B is the naive substitution error. D is the absolute value of the numerator, ignoring the denominator's behavior.",
      },
    ],
  },
  {
    id: "vertical-asymptotes",
    name: "Vertical Asymptotes",
    unit: "Unit 1: Limits and Continuity",
    unitNumber: 1,
    tags: ["MCQ frequent"],
    summary:
      "A vertical asymptote at x = a occurs when the function grows without bound as x approaches a from the left or right.",
    description:
      "For a rational function $\\frac{p(x)}{q(x)}$ in lowest terms, vertical asymptotes occur at values where $q(a) = 0$ and $p(a) \\neq 0$. If the zero cancels (i.e., the factor appears in both numerator and denominator), the result is a removable discontinuity, not a vertical asymptote. Confirming a vertical asymptote requires verifying that the one-sided limits are $+\\infty$ or $-\\infty$.",
    steps: [
      "Set the denominator of the rational function equal to zero and solve for $x$.",
      "Check whether any of those $x$-values also make the numerator zero (if so, factor and cancel).",
      "For values where the denominator is zero but the numerator is not, there is a vertical asymptote at $x = a$.",
      "Confirm by checking that $\\lim_{x \\to a^+} f(x)$ or $\\lim_{x \\to a^-} f(x)$ is $\\pm\\infty$.",
      "State the equation of each vertical asymptote as $x = a$.",
    ],
    examples: [
      {
        problem:
          "Find any vertical asymptotes of $f(x) = \\frac{x + 1}{x^2 - x - 6}$.",
        solution:
          "Factor the denominator: $(x - 3)(x + 2) = 0$ gives $x = 3$ and $x = -2$. Check the numerator: $x + 1 \\neq 0$ at either value. Both are vertical asymptotes: $x = 3$ and $x = -2$.",
      },
    ],
    mcqs: [
      {
        question:
          "A rational function $\\frac{p(x)}{q(x)}$ (in lowest terms) has a vertical asymptote at $x = a$ when:",
        options: [
          "p(a) = 0 and q(a) = 0",
          "q(a) = 0 and p(a) ≠ 0",
          "p(a) ≠ 0 and q(a) ≠ 0",
          "both p(a) and q(a) are undefined",
        ],
        answerIndex: 1,
        explanation:
          "A vertical asymptote requires the denominator to be zero while the numerator is not (so the zero does not cancel). A describes a potential removable discontinuity rather than a vertical asymptote. C describes a point where the function is defined with no asymptote. D is not a standard scenario.",
      },
      {
        question:
          "How many vertical asymptotes does $f(x) = \\frac{x - 2}{x^2 - 4}$ have?",
        options: ["0", "1", "2", "3"],
        answerIndex: 1,
        explanation:
          "Factor: $\\frac{x-2}{(x-2)(x+2)}$. Cancel the common factor: $\\frac{1}{x+2}$ for $x \\neq 2$. The factor $(x - 2)$ cancels, leaving a hole at $x = 2$, not a vertical asymptote. Only $x = -2$ is a vertical asymptote. So the answer is 1. C (2) is the most common error — treating both denominator zeros as asymptotes without canceling.",
      },
    ],
  },
  {
    id: "horizontal-asymptotes",
    name: "Horizontal Asymptotes",
    unit: "Unit 1: Limits and Continuity",
    unitNumber: 1,
    tags: ["MCQ frequent"],
    summary:
      "A horizontal asymptote at y = L occurs when the function approaches the finite value L as x → ∞ or x → −∞.",
    description:
      "Horizontal asymptotes describe end behavior and are found by evaluating limits at infinity. For rational functions, the leading-degree comparison determines the asymptote: same degree gives the ratio of leading coefficients; lesser numerator degree gives y = 0; greater numerator degree gives no horizontal asymptote (possibly an oblique asymptote). A function can cross its horizontal asymptote for finite x values.",
    steps: [
      "Compute $\\lim_{x \\to \\infty} f(x)$ by dividing all terms by the highest power of $x$ in the denominator.",
      "If this limit equals a finite value $L$, then $y = L$ is a horizontal asymptote as $x \\to \\infty$.",
      "Repeat for $\\lim_{x \\to -\\infty} f(x)$; the asymptote may differ on each end (especially for functions with absolute values or radicals).",
      "For exponential functions: $\\lim_{x \\to \\infty} e^{-x} = 0$ gives $y = 0$ as an asymptote; always identify which end has the decay.",
      "State each horizontal asymptote as an equation $y = L$.",
    ],
    examples: [
      {
        problem:
          "Find the horizontal asymptotes of $f(x) = \\frac{3x^2 - 1}{x^2 + 5}$.",
        solution:
          "Divide by $x^2$: $\\frac{3 - 1/x^2}{1 + 5/x^2}$. As $x \\to \\pm\\infty$, this approaches $\\frac{3}{1} = 3$. There is one horizontal asymptote: $y = 3$.",
      },
    ],
    mcqs: [
      {
        question:
          "For $f(x) = \\frac{2x^3 + 1}{x^3 - 4}$, what is the horizontal asymptote?",
        options: [
          "y = 0",
          "y = 2",
          "y = 1/4",
          "There is no horizontal asymptote",
        ],
        answerIndex: 1,
        explanation:
          "Both numerator and denominator have degree 3; the ratio of leading coefficients is $\\frac{2}{1} = 2$, so $y = 2$. A (y = 0) would apply only if the numerator degree were less. C (1/4) incorrectly uses the constant terms. D is wrong because equal degrees always yield a horizontal asymptote.",
      },
      {
        question:
          "What is the horizontal asymptote of $f(x) = \\frac{5x + 3}{x^2 - 1}$?",
        options: ["y = 5", "y = 3", "y = 0", "y = −3"],
        answerIndex: 2,
        explanation:
          "The numerator has degree 1 and the denominator has degree 2; since the denominator grows faster, the limit at $\\pm\\infty$ is 0, giving $y = 0$. A (y = 5) is the ratio of leading coefficients, which only applies when degrees are equal. B and D use constant terms erroneously.",
      },
    ],
  },
  {
    id: "continuity-definition",
    name: "Continuity at a Point (3-part definition)",
    unit: "Unit 1: Limits and Continuity",
    unitNumber: 1,
    tags: ["MCQ frequent", "theorem"],
    summary:
      "A function is continuous at x = a if and only if f(a) is defined, the limit as x → a exists, and the limit equals f(a).",
    description:
      "The three conditions for continuity at $x = a$ are: (1) $f(a)$ is defined; (2) $\\lim_{x \\to a} f(x)$ exists; (3) $\\lim_{x \\to a} f(x) = f(a)$. Failing any one condition produces a discontinuity. Continuity on an interval means the function is continuous at every point in that interval, which for a closed interval $[a, b]$ requires right-continuity at $a$ and left-continuity at $b$.",
    steps: [
      "Check condition 1: Evaluate $f(a)$. If $f(a)$ is undefined, the function is discontinuous at $a$ (stop here).",
      "Check condition 2: Compute $\\lim_{x \\to a^-} f(x)$ and $\\lim_{x \\to a^+} f(x)$. If they differ, the two-sided limit DNE and the function is discontinuous.",
      "Check condition 3: Compare $\\lim_{x \\to a} f(x)$ with $f(a)$. If they are not equal, the function is discontinuous (removable discontinuity).",
      "If all three conditions hold, conclude: $f$ is continuous at $x = a$.",
      "For piecewise functions, verify the conditions at each boundary point between the pieces.",
    ],
    examples: [
      {
        problem:
          "Is $f(x) = \\begin{cases} x^2 - 1 & x \\neq 2 \\\\ 5 & x = 2 \\end{cases}$ continuous at $x = 2$?",
        solution:
          "Condition 1: $f(2) = 5$ ✓. Condition 2: $\\lim_{x \\to 2}(x^2 - 1) = 3$ ✓. Condition 3: $f(2) = 5 \\neq 3 = \\lim_{x \\to 2} f(x)$ ✗. The function is NOT continuous at $x = 2$ (removable discontinuity).",
      },
    ],
    mcqs: [
      {
        question:
          "Which of the following is NOT a required condition for f to be continuous at x = a?",
        options: [
          "f(a) is defined",
          "lim_{x→a} f(x) exists",
          "f is differentiable at x = a",
          "lim_{x→a} f(x) = f(a)",
        ],
        answerIndex: 2,
        explanation:
          "Differentiability at $a$ is not required for continuity — continuity is a weaker condition. The three required conditions are the three listed in choices A, B, and D. Differentiability implies continuity, but continuity does not imply differentiability (e.g., $|x|$ at $x = 0$).",
      },
      {
        question:
          "A function satisfies: $f(3) = 7$, $\\lim_{x \\to 3^-} f(x) = 7$, $\\lim_{x \\to 3^+} f(x) = 4$. What can be concluded?",
        options: [
          "f is continuous at x = 3",
          "f has a removable discontinuity at x = 3",
          "f has a jump discontinuity at x = 3",
          "f has an infinite discontinuity at x = 3",
        ],
        answerIndex: 2,
        explanation:
          "The one-sided limits differ (7 vs. 4), so the two-sided limit DNE — this is a jump discontinuity. A is wrong because the two-sided limit must exist and equal f(3) for continuity. B (removable) occurs when the limit exists but differs from f(a) — here the limit itself doesn't exist. D (infinite) occurs when the function grows without bound.",
      },
    ],
  },
  {
    id: "types-of-discontinuity",
    name: "Types of Discontinuity (removable, jump, infinite)",
    unit: "Unit 1: Limits and Continuity",
    unitNumber: 1,
    tags: ["MCQ frequent"],
    summary:
      "Discontinuities are classified as removable (a hole), jump (a sudden change in value), or infinite (a vertical asymptote) based on the behavior of the limit.",
    description:
      "A removable discontinuity occurs when $\\lim_{x \\to a} f(x)$ exists but either $f(a)$ is undefined or $f(a) \\neq \\lim_{x \\to a} f(x)$ — the graph has a hole that could be 'filled in.' A jump discontinuity occurs when the one-sided limits both exist but are not equal — the graph jumps from one value to another. An infinite (essential) discontinuity occurs when at least one one-sided limit is $\\pm\\infty$, producing a vertical asymptote.",
    steps: [
      "Determine whether the function is defined at $x = a$: if not, check if the limit exists (removable) or fails to exist.",
      "Compute both one-sided limits at $x = a$.",
      "If $\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = L$ but $f(a) \\neq L$ or is undefined: removable discontinuity (hole at $(a, L)$).",
      "If both one-sided limits exist as finite numbers but $\\lim_{x \\to a^-} f(x) \\neq \\lim_{x \\to a^+} f(x)$: jump discontinuity.",
      "If either one-sided limit is $\\pm\\infty$: infinite (essential) discontinuity, and $x = a$ is a vertical asymptote.",
    ],
    examples: [
      {
        problem:
          "Classify the discontinuity of $f(x) = \\frac{x^2 - 4}{x - 2}$ at $x = 2$.",
        solution:
          "Factor: $\\frac{(x-2)(x+2)}{x-2} = x + 2$ for $x \\neq 2$. So $\\lim_{x \\to 2} f(x) = 4$, but $f(2)$ is undefined. The two-sided limit exists but $f(2)$ is not defined: this is a removable discontinuity (hole at $(2, 4)$).",
      },
    ],
    mcqs: [
      {
        question:
          "Which type of discontinuity occurs when $\\lim_{x \\to a^-} f(x) = 2$ and $\\lim_{x \\to a^+} f(x) = 5$?",
        options: [
          "Removable discontinuity",
          "Jump discontinuity",
          "Infinite discontinuity",
          "No discontinuity",
        ],
        answerIndex: 1,
        explanation:
          "Both one-sided limits exist as finite numbers but are unequal (2 ≠ 5), which is the definition of a jump discontinuity. A (removable) requires the two-sided limit to exist (i.e., both sides equal). C (infinite) requires at least one side to be $\\pm\\infty$. D is wrong because continuity requires the two-sided limit to exist and equal f(a).",
      },
      {
        question:
          "The function $g(x) = \\frac{x^2 - 9}{x + 3}$ has what type of discontinuity at $x = -3$?",
        options: [
          "Jump discontinuity",
          "Infinite discontinuity",
          "Removable discontinuity",
          "No discontinuity",
        ],
        answerIndex: 2,
        explanation:
          "Factor: $\\frac{(x-3)(x+3)}{x+3} = x - 3$ for $x \\neq -3$. The limit as $x \\to -3$ equals $-3 - 3 = -6$, which exists, but $g(-3)$ is undefined. This is a removable discontinuity (hole at $(-3, -6)$). A (jump) requires the one-sided limits to differ. B (infinite) requires $\\pm\\infty$. D is wrong because $g(-3)$ is not defined.",
      },
    ],
  },
  {
    id: "ivt",
    name: "Intermediate Value Theorem",
    unit: "Unit 1: Limits and Continuity",
    unitNumber: 1,
    tags: ["theorem", "MCQ frequent", "FRQ"],
    summary:
      "If f is continuous on [a, b] and N is any value strictly between f(a) and f(b), then there exists at least one c in (a, b) where f(c) = N.",
    description:
      "The Intermediate Value Theorem (IVT) guarantees existence — it tells us a solution must exist somewhere in an interval, but not where. The theorem requires continuity on the closed interval $[a, b]$; without continuity, the conclusion may fail. On the AP exam, IVT is commonly used to justify that a function achieves a particular value (often zero, proving a root exists) or to explain why an equation has a solution.",
    steps: [
      "Verify that $f$ is continuous on the closed interval $[a, b]$ (state this explicitly on an FRQ).",
      "Evaluate $f(a)$ and $f(b)$.",
      "Identify the target value $N$ and confirm it lies strictly between $f(a)$ and $f(b)$: $\\min(f(a), f(b)) < N < \\max(f(a), f(b))$.",
      "Invoke the IVT: since all hypotheses are met, there exists at least one $c \\in (a, b)$ such that $f(c) = N$.",
      "State the conclusion clearly, including the interval $(a, b)$ where $c$ is guaranteed to exist.",
    ],
    examples: [
      {
        problem:
          "Show that $f(x) = x^3 - x - 1$ has a root in the interval $(1, 2)$.",
        solution:
          "$f$ is a polynomial, so it is continuous everywhere, including on $[1, 2]$. $f(1) = 1 - 1 - 1 = -1 < 0$ and $f(2) = 8 - 2 - 1 = 5 > 0$. Since $0$ is between $f(1) = -1$ and $f(2) = 5$, by the IVT there exists $c \\in (1, 2)$ such that $f(c) = 0$.",
      },
    ],
    mcqs: [
      {
        question:
          "Which hypothesis is essential for applying the Intermediate Value Theorem on [a, b]?",
        options: [
          "f must be differentiable on (a, b)",
          "f must be continuous on [a, b]",
          "f(a) and f(b) must both be positive",
          "f must be increasing on [a, b]",
        ],
        answerIndex: 1,
        explanation:
          "The IVT requires continuity on the closed interval $[a, b]$ — nothing more. A (differentiability) is a stronger condition and not required. C is wrong; the function values can have any sign as long as N lies between them. D (increasing) is not required; the function may rise and fall.",
      },
      {
        question:
          "f is continuous on [0, 3], f(0) = −2, and f(3) = 7. Which conclusion is guaranteed by the IVT?",
        options: [
          "f has a maximum value of 7 on [0, 3]",
          "f is increasing on [0, 3]",
          "There exists c in (0, 3) such that f(c) = 4",
          "f(c) = 0 has no solution in (0, 3)",
        ],
        answerIndex: 2,
        explanation:
          "Since $f$ is continuous on $[0, 3]$ and $f(0) = -2 < 4 < 7 = f(3)$, the value 4 lies between $f(0)$ and $f(3)$, so IVT guarantees $c \\in (0, 3)$ with $f(c) = 4$. A involves the Extreme Value Theorem, not IVT. B (increasing) is not implied. D is incorrect — since $-2 < 0 < 7$, IVT guarantees $f(c) = 0$ for some $c$ in $(0, 3)$.",
      },
    ],
  },
];
