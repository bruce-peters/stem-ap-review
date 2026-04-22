export default [
  {
    id: "riemann-sums",
    name: "Riemann Sums (Left, Right, Midpoint)",
    unit: "Unit 6: Integration and Accumulation of Change",
    unitNumber: 6,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "Approximate the area under a curve by summing rectangular slices using left, right, or midpoint sample points.",
    formula: "\\sum_{i=1}^n f(x_i^*)\\,\\Delta x",
    description:
      "A Riemann sum approximates a definite integral by dividing the interval $[a,b]$ into $n$ equal subintervals of width $\\Delta x = (b-a)/n$ and summing the areas of rectangles. The choice of sample point $x_i^*$ determines the type: left endpoint, right endpoint, or midpoint of each subinterval. As $n \\to \\infty$, the Riemann sum converges to the exact value of the definite integral.",
    steps: [
      "Identify the interval $[a, b]$ and the number of subintervals $n$. Compute $\\Delta x = \\frac{b-a}{n}$.",
      "List the partition points: $x_0 = a,\\ x_1 = a + \\Delta x,\\ x_2 = a + 2\\Delta x, \\ldots, x_n = b$.",
      "Choose sample points: for a left sum use $x_i^* = x_{i-1}$; for a right sum use $x_i^* = x_i$; for a midpoint sum use $x_i^* = \\frac{x_{i-1}+x_i}{2}$.",
      "Evaluate $f$ at each sample point and multiply by $\\Delta x$: area of rectangle $i$ is $f(x_i^*)\\,\\Delta x$.",
      "Sum all rectangle areas: $R = \\sum_{i=1}^n f(x_i^*)\\,\\Delta x$.",
      "Interpret the sign: if $f < 0$ on a subinterval, that rectangle contributes a negative area (signed area).",
    ],
    examples: [
      {
        problem:
          "Approximate $\\int_0^2 x^2\\,dx$ using a right Riemann sum with $n = 4$ subintervals.",
        solution:
          "$\\Delta x = 0.5$. Right endpoints: $x = 0.5, 1, 1.5, 2$. Evaluate: $f(0.5)=0.25,\\ f(1)=1,\\ f(1.5)=2.25,\\ f(2)=4$. Sum: $0.5(0.25+1+2.25+4) = 0.5(7.5) = 3.75$. (Exact value is $8/3 \\approx 2.667$; the right sum overestimates since $f$ is increasing.)",
      },
    ],
    mcqs: [
      {
        question:
          "For an increasing function $f$ on $[a,b]$, which Riemann sum gives an overestimate?",
        options: [
          "Left Riemann sum",
          "Right Riemann sum",
          "Midpoint Riemann sum",
          "All three give equal estimates",
        ],
        answerIndex: 1,
        explanation:
          "For an increasing function, the right endpoint of each subinterval is the maximum on that subinterval, so the right Riemann sum overestimates the true area. The left sum underestimates. The midpoint sum is between the two but does not systematically overestimate. Answer: Right Riemann sum.",
      },
      {
        question:
          "Use a left Riemann sum with $n=3$ to approximate $\\int_0^3 (x+1)\\,dx$. What is the result?",
        options: ["6", "7.5", "9", "5"],
        answerIndex: 0,
        explanation:
          "$\\Delta x = 1$. Left endpoints: $x=0,1,2$. $f(0)=1,\\ f(1)=2,\\ f(2)=3$. Sum $= 1(1+2+3)=6$. The exact value is $7.5$, confirming the left sum underestimates for this increasing function. Choice B (7.5) is the exact value, C and D are incorrect arithmetic.",
      },
    ],
  },
  {
    id: "trapezoidal-rule",
    name: "Trapezoidal Rule",
    unit: "Unit 6: Integration and Accumulation of Change",
    unitNumber: 6,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "Approximate a definite integral by averaging left and right Riemann sums, equivalent to fitting trapezoids under the curve.",
    formula: "\\tfrac{\\Delta x}{2}[f(x_0)+2f(x_1)+\\cdots+2f(x_{n-1})+f(x_n)]",
    description:
      "The Trapezoidal Rule estimates $\\int_a^b f(x)\\,dx$ by connecting consecutive points on the graph with straight line segments and summing the areas of the resulting trapezoids. It is the average of the left and right Riemann sums and is exact for linear functions. For a concave-up function the rule overestimates; for concave-down it underestimates.",
    steps: [
      "Divide $[a,b]$ into $n$ equal subintervals: $\\Delta x = \\frac{b-a}{n}$, giving points $x_0, x_1, \\ldots, x_n$.",
      "Evaluate $f$ at every partition point.",
      "Apply the formula: $T = \\frac{\\Delta x}{2}\\bigl[f(x_0) + 2f(x_1) + 2f(x_2) + \\cdots + 2f(x_{n-1}) + f(x_n)\\bigr]$.",
      "Note the pattern: the two endpoints have coefficient 1, all interior points have coefficient 2.",
      "Determine over/underestimate using concavity: concave up $\\Rightarrow$ overestimate; concave down $\\Rightarrow$ underestimate.",
    ],
    examples: [
      {
        problem:
          "Use the Trapezoidal Rule with $n=4$ to approximate $\\int_0^4 x^2\\,dx$.",
        solution:
          "$\\Delta x = 1$. Values: $f(0)=0,\\ f(1)=1,\\ f(2)=4,\\ f(3)=9,\\ f(4)=16$. $T = \\frac{1}{2}[0 + 2(1) + 2(4) + 2(9) + 16] = \\frac{1}{2}[0+2+8+18+16] = \\frac{44}{2} = 22$. Exact value is $64/3 \\approx 21.33$. Since $f(x)=x^2$ is concave up, the trapezoidal rule overestimates.",
      },
    ],
    mcqs: [
      {
        question:
          "If $f$ is concave down on $[a,b]$, how does the Trapezoidal Rule compare to the exact integral?",
        options: [
          "It overestimates the integral",
          "It underestimates the integral",
          "It gives the exact value",
          "It could either over- or underestimate depending on $f$",
        ],
        answerIndex: 1,
        explanation:
          "For a concave-down function, the graph lies above each trapezoid's top edge, so the trapezoids miss area. This means the Trapezoidal Rule underestimates. Concave up gives overestimates. The rule is exact only for linear (not generally concave-down) functions.",
      },
      {
        question:
          "Using the Trapezoidal Rule with $n=2$ on $[0,2]$, approximate $\\int_0^2 e^x\\,dx$. Given $e^0=1,\\ e^1\\approx2.718,\\ e^2\\approx7.389$.",
        options: ["6.913", "13.825", "8.389", "5.436"],
        answerIndex: 0,
        explanation:
          "$\\Delta x = 1$. $T = \\frac{\\Delta x}{2}[f(0)+2f(1)+f(2)] = \\frac{1}{2}[1+2(2.718)+7.389]=\\frac{1}{2}(13.825)\\approx 6.913$. B (13.825) forgets the $\\frac{1}{2}$ factor. C (8.389) uses only the endpoints: $\\frac{2}{2}[1+7.389]$. D (5.436) uses only $2f(1)$, ignoring the endpoints.",
      },
    ],
  },
  {
    id: "definite-integral-def",
    name: "Definite Integral as Limit of Riemann Sums",
    unit: "Unit 6: Integration and Accumulation of Change",
    unitNumber: 6,
    tags: ["MCQ frequent"],
    summary:
      "The definite integral is defined as the limit of Riemann sums as the number of subintervals approaches infinity.",
    formula:
      "\\int_a^b f(x)\\,dx=\\lim_{n\\to\\infty}\\sum_{i=1}^n f(x_i^*)\\Delta x",
    description:
      "The definite integral $\\int_a^b f(x)\\,dx$ is formally defined as the limit of Riemann sums as $n \\to \\infty$ (and $\\Delta x \\to 0$), provided this limit exists and is the same for any choice of sample points. When $f$ is continuous on $[a,b]$, this limit always exists and equals the signed area between $f$ and the $x$-axis. This definition connects the geometric notion of area to the algebraic process of summation.",
    steps: [
      "Set up the Riemann sum: choose $n$ subintervals, so $\\Delta x = \\frac{b-a}{n}$ and $x_i = a + i\\,\\Delta x$.",
      "Write the sum $S_n = \\sum_{i=1}^n f(x_i^*)\\,\\Delta x$ using right endpoints (or any sample point).",
      "Take the limit: $\\int_a^b f(x)\\,dx = \\lim_{n\\to\\infty} S_n$.",
      "Evaluate the limit using summation formulas (e.g., $\\sum_{i=1}^n i = \\frac{n(n+1)}{2}$) when computing from definition.",
      "Confirm the integral exists by verifying $f$ is (at least) integrable (e.g., continuous) on $[a,b]$.",
    ],
    examples: [
      {
        problem: "Use the limit definition to evaluate $\\int_0^1 x\\,dx$.",
        solution:
          "Partition $[0,1]$ into $n$ subintervals. $\\Delta x = 1/n$, right endpoints $x_i = i/n$. $S_n = \\sum_{i=1}^n \\frac{i}{n}\\cdot\\frac{1}{n} = \\frac{1}{n^2}\\sum_{i=1}^n i = \\frac{1}{n^2}\\cdot\\frac{n(n+1)}{2} = \\frac{n+1}{2n}$. As $n\\to\\infty$: $\\int_0^1 x\\,dx = \\lim_{n\\to\\infty}\\frac{n+1}{2n} = \\frac{1}{2}$.",
      },
    ],
    mcqs: [
      {
        question:
          "The expression $\\lim_{n\\to\\infty}\\sum_{i=1}^n \\frac{i^2}{n^3}$ equals which definite integral?",
        options: [
          "$\\int_0^1 x^2\\,dx$",
          "$\\int_0^1 x^3\\,dx$",
          "$\\int_0^n x^2\\,dx$",
          "$\\int_1^n x^2\\,dx$",
        ],
        answerIndex: 0,
        explanation:
          "With $\\Delta x = 1/n$ and $x_i = i/n$, we have $\\frac{i^2}{n^3} = \\left(\\frac{i}{n}\\right)^2\\cdot\\frac{1}{n} = f(x_i)\\,\\Delta x$ where $f(x)=x^2$ on $[0,1]$. So the limit equals $\\int_0^1 x^2\\,dx$. Option B would require $x_i^3$, C and D have wrong bounds.",
      },
      {
        question:
          "Which condition guarantees that $\\lim_{n\\to\\infty}\\sum_{i=1}^n f(x_i^*)\\Delta x$ exists and equals the same value regardless of the choice of sample points?",
        options: [
          "$f$ is differentiable on $(a,b)$",
          "$f$ is continuous on $[a,b]$",
          "$f$ is increasing on $[a,b]$",
          "$f$ is bounded on $[a,b]$",
        ],
        answerIndex: 1,
        explanation:
          "Continuity on a closed interval $[a,b]$ is sufficient to guarantee that $f$ is integrable (the Riemann sum limit exists and is independent of sample point choice). Differentiability is stronger than needed. Being increasing or merely bounded does not alone guarantee integrability in the Riemann sense (bounded with finitely many discontinuities works, but continuity is the standard AP condition).",
      },
    ],
  },
  {
    id: "integral-properties",
    name: "Properties of Definite Integrals",
    unit: "Unit 6: Integration and Accumulation of Change",
    unitNumber: 6,
    tags: ["MCQ frequent"],
    summary:
      "Definite integrals satisfy linearity, additivity over intervals, and sign-reversal when limits are swapped.",
    formula: "\\int_a^b f+\\int_b^c f=\\int_a^c f",
    description:
      "The definite integral obeys several algebraic properties: reversing limits negates the integral, an integral over a zero-length interval is zero, and integrals are linear (scalar multiples and sums split). The additive property over adjacent intervals—$\\int_a^b f + \\int_b^c f = \\int_a^c f$—allows splitting or combining integrals at any interior point. These properties are essential for manipulating integrals algebraically without computing them directly.",
    steps: [
      "Reverse limits: $\\int_a^b f(x)\\,dx = -\\int_b^a f(x)\\,dx$.",
      "Zero-length interval: $\\int_a^a f(x)\\,dx = 0$.",
      "Constant multiple: $\\int_a^b c\\,f(x)\\,dx = c\\int_a^b f(x)\\,dx$.",
      "Sum/difference: $\\int_a^b [f(x)\\pm g(x)]\\,dx = \\int_a^b f(x)\\,dx \\pm \\int_a^b g(x)\\,dx$.",
      "Additivity: $\\int_a^c f(x)\\,dx = \\int_a^b f(x)\\,dx + \\int_b^c f(x)\\,dx$ for any $b$.",
      "Comparison: if $f(x) \\ge g(x)$ on $[a,b]$, then $\\int_a^b f\\,dx \\ge \\int_a^b g\\,dx$.",
    ],
    examples: [
      {
        problem:
          "Given $\\int_1^5 f(x)\\,dx = 10$ and $\\int_1^3 f(x)\\,dx = 4$, find $\\int_3^5 f(x)\\,dx$.",
        solution:
          "By additivity: $\\int_1^5 f = \\int_1^3 f + \\int_3^5 f$. So $10 = 4 + \\int_3^5 f$, giving $\\int_3^5 f(x)\\,dx = 6$.",
      },
    ],
    mcqs: [
      {
        question:
          "If $\\int_0^6 f(x)\\,dx = 8$ and $\\int_4^6 f(x)\\,dx = 3$, what is $\\int_0^4 f(x)\\,dx$?",
        options: ["5", "11", "-5", "24"],
        answerIndex: 0,
        explanation:
          "$\\int_0^6 f = \\int_0^4 f + \\int_4^6 f$ so $8 = \\int_0^4 f + 3$, giving $\\int_0^4 f = 5$. Choice B adds instead of subtracts. Choice C gets the sign wrong. Choice D multiplies the values.",
      },
      {
        question:
          "Which of the following is always true for integrable $f$ and $g$ on $[a,b]$?",
        options: [
          "$\\int_a^b f(x)g(x)\\,dx = \\left(\\int_a^b f\\,dx\\right)\\left(\\int_a^b g\\,dx\\right)$",
          "$\\int_a^b [f(x)+g(x)]\\,dx = \\int_a^b f(x)\\,dx + \\int_a^b g(x)\\,dx$",
          "$\\int_a^b f(x)\\,dx = \\int_a^b g(x)\\,dx$ whenever $f(a)=g(a)$",
          "$\\left|\\int_a^b f(x)\\,dx\\right| = \\int_a^b |f(x)|\\,dx$",
        ],
        answerIndex: 1,
        explanation:
          "The sum rule (linearity) states that the integral of a sum equals the sum of integrals — this is always true. Option A is false: the integral of a product is NOT the product of integrals in general. Option C is false; matching at one point says nothing about the integrals. Option D is false in general (it is an inequality $\\le$, not equality).",
      },
    ],
  },
  {
    id: "ftc1",
    name: "Fundamental Theorem of Calculus — Part 1",
    unit: "Unit 6: Integration and Accumulation of Change",
    unitNumber: 6,
    tags: ["theorem", "MCQ frequent", "FRQ"],
    summary:
      "The derivative of an accumulation function equals the integrand evaluated at the upper limit.",
    formula: "\\frac{d}{dx}\\!\\int_a^x f(t)\\,dt=f(x)",
    description:
      "FTC Part 1 states that if $f$ is continuous on $[a,b]$, then the accumulation function $F(x) = \\int_a^x f(t)\\,dt$ is differentiable and $F'(x) = f(x)$. This profound result links the process of integration (area accumulation) to differentiation, showing they are inverse operations. It allows us to differentiate integrals with a variable upper limit without evaluating the integral explicitly.",
    steps: [
      "Identify the accumulation function: $F(x) = \\int_a^x f(t)\\,dt$ where $a$ is a constant and $x$ is the upper limit.",
      "Confirm $f$ is continuous on the interval (required for FTC1 to apply).",
      "Differentiate: $F'(x) = f(x)$ — simply substitute $x$ for $t$ in the integrand.",
      "If the lower limit (not the upper) is the variable, factor out a negative sign first: $\\frac{d}{dx}\\int_x^a f(t)\\,dt = -f(x)$.",
      "If there are constants in both limits or neither limit is $x$, the derivative is zero (constant integral).",
    ],
    examples: [
      {
        problem: "Let $F(x) = \\int_2^x \\sin(t^2)\\,dt$. Find $F'(x)$.",
        solution:
          "By FTC Part 1, $F'(x) = \\sin(x^2)$. The lower limit $2$ is a constant, so we simply replace $t$ with $x$ in the integrand.",
      },
    ],
    mcqs: [
      {
        question: "If $G(x) = \\int_3^x \\sqrt{t^3+1}\\,dt$, what is $G'(x)$?",
        options: [
          "$\\sqrt{x^3+1}$",
          "$\\frac{1}{2\\sqrt{x^3+1}}$",
          "$\\sqrt{t^3+1}$",
          "$3x^2\\cdot\\sqrt{x^3+1}$",
        ],
        answerIndex: 0,
        explanation:
          "FTC Part 1: the derivative of $\\int_3^x f(t)\\,dt$ is $f(x)$. Replacing $t$ with $x$: $G'(x)=\\sqrt{x^3+1}$. Option B is the derivative of the square root expression (chain rule error). Option C leaves the dummy variable $t$ (incorrect). Option D applies the chain rule but the upper limit is just $x$, whose derivative is 1, not $3x^2$.",
      },
      {
        question:
          "FTC Part 1 guarantees that for continuous $f$, the accumulation function $F(x)=\\int_a^x f(t)\\,dt$ is:",
        options: [
          "Always positive",
          "Always increasing",
          "An antiderivative of $f$",
          "Equal to $f(x)-f(a)$",
        ],
        answerIndex: 2,
        explanation:
          "FTC Part 1 tells us $F'(x)=f(x)$, which is the definition of $F$ being an antiderivative of $f$. $F$ is not always positive (the integral can be negative if $f<0$). $F$ is not always increasing (it increases where $f>0$, decreases where $f<0$). Option D confuses FTC Part 2.",
      },
    ],
  },
  {
    id: "ftc1-chain",
    name: "FTC Part 1 with Chain Rule",
    unit: "Unit 6: Integration and Accumulation of Change",
    unitNumber: 6,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "When the upper limit is a function of $x$, differentiate the accumulation function using FTC Part 1 and the Chain Rule together.",
    formula: "\\frac{d}{dx}\\!\\int_a^{g(x)}\\!f(t)\\,dt=f(g(x))\\cdot g'(x)",
    description:
      "When the upper limit of an accumulation integral is $g(x)$ rather than $x$, the Chain Rule must be applied after FTC Part 1. The result is $f(g(x)) \\cdot g'(x)$: evaluate the integrand at the upper limit, then multiply by the derivative of that upper limit. This combination appears frequently on the AP exam both in multiple choice and in FRQ parts asking for a rate or derivative of an accumulation function.",
    steps: [
      "Recognize the form $\\frac{d}{dx}\\int_a^{g(x)} f(t)\\,dt$ where $g(x)$ is a differentiable function.",
      "Apply FTC Part 1: the antiderivative differentiates to $f$ evaluated at the upper limit.",
      "Apply the Chain Rule: multiply by $g'(x)$.",
      "Result: $f(g(x)) \\cdot g'(x)$.",
      "If the variable limit is the lower bound, apply the same steps with an extra negative sign.",
    ],
    examples: [
      {
        problem: "Find $\\frac{d}{dx}\\int_1^{x^3} e^{t^2}\\,dt$.",
        solution:
          "Let $g(x)=x^3$, so $g'(x)=3x^2$. By FTC Part 1 + Chain Rule: $\\frac{d}{dx}\\int_1^{x^3} e^{t^2}\\,dt = e^{(x^3)^2}\\cdot 3x^2 = 3x^2 e^{x^6}$.",
      },
    ],
    mcqs: [
      {
        question:
          "What is $\\frac{d}{dx}\\int_0^{\\sin x} \\sqrt{1+t^4}\\,dt$?",
        options: [
          "$\\sqrt{1+\\sin^4 x}\\cdot\\cos x$",
          "$\\sqrt{1+x^4}\\cdot\\cos x$",
          "$\\cos x\\cdot\\sqrt{1+\\cos^4 x}$",
          "$\\sqrt{1+\\sin^4 x}$",
        ],
        answerIndex: 0,
        explanation:
          "$g(x)=\\sin x$, $g'(x)=\\cos x$. FTC + Chain Rule gives $f(g(x))\\cdot g'(x) = \\sqrt{1+\\sin^4 x}\\cdot\\cos x$. Option B evaluates the integrand at $x$ instead of $\\sin x$. Option C uses $\\cos x$ inside the radical. Option D omits the chain rule factor $\\cos x$.",
      },
      {
        question: "If $H(x) = \\int_{x^2}^{5} \\ln(t)\\,dt$, what is $H'(x)$?",
        options: [
          "$\\ln(x^2)\\cdot 2x$",
          "$-\\ln(x^2)\\cdot 2x$",
          "$\\ln(5)-\\ln(x^2)$",
          "$2x\\ln(x)$",
        ],
        answerIndex: 1,
        explanation:
          "The variable is in the lower limit, so flip: $H(x)=-\\int_5^{x^2}\\ln(t)\\,dt$. Differentiate: $H'(x)=-\\ln(x^2)\\cdot 2x$. Option A drops the negative sign from flipping limits. Options C and D are not correct derivatives. Note $\\ln(x^2)=2\\ln x$, so this also equals $-4x\\ln x$.",
      },
    ],
  },
  {
    id: "ftc2",
    name: "Fundamental Theorem of Calculus — Part 2",
    unit: "Unit 6: Integration and Accumulation of Change",
    unitNumber: 6,
    tags: ["theorem", "MCQ frequent", "FRQ"],
    summary:
      "A definite integral equals the antiderivative evaluated at the upper limit minus the antiderivative at the lower limit.",
    formula: "\\int_a^b f(x)\\,dx=F(b)-F(a)",
    description:
      "FTC Part 2 provides the computational engine for evaluating definite integrals: find any antiderivative $F$ of $f$, then compute $F(b)-F(a)$. The constant of integration cancels, so any antiderivative works. This theorem transforms the difficult limit-of-Riemann-sums computation into straightforward antidifferentiation, and it is used in virtually every integration problem on the AP exam.",
    steps: [
      "Find an antiderivative $F$ such that $F'(x) = f(x)$ (include no $+C$, since it cancels).",
      "Write the evaluation notation: $\\left[F(x)\\right]_a^b$.",
      "Substitute the upper limit: compute $F(b)$.",
      "Substitute the lower limit: compute $F(a)$.",
      "Subtract: the answer is $F(b) - F(a)$.",
      "Check units and sign — a negative result means the net signed area is below the $x$-axis.",
    ],
    examples: [
      {
        problem: "Evaluate $\\int_0^{\\pi} \\sin x\\,dx$.",
        solution:
          "Antiderivative: $F(x) = -\\cos x$. $F(\\pi)-F(0) = -\\cos\\pi - (-\\cos 0) = -(-1)-(-1) = 1+1 = 2$.",
      },
    ],
    mcqs: [
      {
        question: "Evaluate $\\int_1^4 \\frac{1}{\\sqrt{x}}\\,dx$.",
        options: ["2", "4", "1", "3"],
        answerIndex: 0,
        explanation:
          "$\\int x^{-1/2}\\,dx = 2x^{1/2}+C$. Evaluate: $[2\\sqrt{x}]_1^4 = 2\\sqrt{4}-2\\sqrt{1}=4-2=2$. Options B, C, D arise from antidifferentiation errors such as using $\\frac{1}{2}x^{1/2}$ instead of $2x^{1/2}$.",
      },
      {
        question:
          "The Fundamental Theorem of Calculus Part 2 requires that $f$ be:",
        options: [
          "Differentiable on $(a,b)$",
          "Continuous on $[a,b]$",
          "Positive on $[a,b]$",
          "Monotone on $[a,b]$",
        ],
        answerIndex: 1,
        explanation:
          "FTC Part 2 applies when $f$ is continuous on the closed interval $[a,b]$ (so that an antiderivative $F$ exists). Differentiability of $f$ is not required. $f$ need not be positive or monotone — it just needs to be continuous so the definite integral and its antiderivative are well-defined.",
      },
    ],
  },
  {
    id: "antiderivative-power",
    name: "Power Rule for Antiderivatives",
    unit: "Unit 6: Integration and Accumulation of Change",
    unitNumber: 6,
    tags: ["MCQ frequent"],
    summary:
      "Integrate a power of $x$ by increasing the exponent by one and dividing by the new exponent.",
    formula: "\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+C,\\quad n\\neq -1",
    description:
      "The Power Rule for antiderivatives reverses the Power Rule for derivatives: raise the exponent by 1 and divide by the new exponent. It applies to all real-number exponents except $n=-1$ (which yields $\\ln|x|+C$). This rule is foundational for integrating polynomials, radical expressions rewritten as fractional powers, and terms involving negative exponents.",
    steps: [
      "Rewrite the integrand so each term has the form $x^n$ (e.g., $\\sqrt{x}=x^{1/2}$, $\\frac{1}{x^3}=x^{-3}$).",
      "Check that $n \\neq -1$ for each term (if $n=-1$, use $\\int \\frac{1}{x}\\,dx = \\ln|x|+C$).",
      "Apply the rule: $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1}+C$.",
      "For a polynomial, antidifferentiate term by term using linearity.",
      "Add a single constant $+C$ at the end (for indefinite integrals).",
      "Verify by differentiating your answer to recover the original integrand.",
    ],
    examples: [
      {
        problem: "Find $\\int (3x^4 - 2x + 5)\\,dx$.",
        solution:
          "$\\int 3x^4\\,dx - \\int 2x\\,dx + \\int 5\\,dx = \\frac{3x^5}{5} - x^2 + 5x + C$.",
      },
    ],
    mcqs: [
      {
        question: "What is $\\int \\sqrt[3]{x^2}\\,dx$?",
        options: [
          "$\\frac{3}{5}x^{5/3}+C$",
          "$\\frac{2}{3}x^{1/3}+C$",
          "$\\frac{3x^{2/3}}{2}+C$",
          "$\\frac{2}{3}x^{3/2}+C$",
        ],
        answerIndex: 0,
        explanation:
          "$\\sqrt[3]{x^2}=x^{2/3}$. Apply the rule: $\\int x^{2/3}\\,dx = \\frac{x^{2/3+1}}{2/3+1}+C = \\frac{x^{5/3}}{5/3}+C = \\frac{3}{5}x^{5/3}+C$. Option B differentiates instead of integrating. Option C uses the wrong new exponent. Option D uses a decimal exponent error.",
      },
      {
        question:
          "The power rule $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1}+C$ fails when $n=$?",
        options: ["0", "-1", "1/2", "-2"],
        answerIndex: 1,
        explanation:
          "When $n=-1$, the formula gives division by zero: $\\frac{x^0}{0}$ is undefined. For $n=-1$, the correct antiderivative is $\\ln|x|+C$. The rule works for all other real values, including $n=0$, $n=1/2$, and $n=-2$.",
      },
    ],
  },
  {
    id: "trig-antiderivatives",
    name: "Antiderivatives of Trig Functions",
    unit: "Unit 6: Integration and Accumulation of Change",
    unitNumber: 6,
    tags: ["MCQ frequent"],
    summary:
      "Reverse the standard trig derivative rules to find antiderivatives of the six trigonometric functions.",
    formula: "\\int\\sin x\\,dx=-\\cos x+C,\\quad\\int\\cos x\\,dx=\\sin x+C",
    description:
      "Each trig antiderivative is found by reversing the corresponding derivative. Key pairs: $\\sin x \\leftrightarrow -\\cos x$, $\\cos x \\leftrightarrow \\sin x$, $\\sec^2 x \\leftrightarrow \\tan x$, $\\csc^2 x \\leftrightarrow -\\cot x$, $\\sec x\\tan x \\leftrightarrow \\sec x$, $\\csc x\\cot x \\leftrightarrow -\\csc x$. The negative signs are a common source of errors and must be memorized carefully.",
    steps: [
      "Memorize the six basic trig antiderivatives (three positive, three negative).",
      "For $\\int\\sin x\\,dx$: answer is $-\\cos x+C$.",
      "For $\\int\\cos x\\,dx$: answer is $\\sin x+C$.",
      "For $\\int\\sec^2 x\\,dx$: answer is $\\tan x+C$.",
      "For $\\int\\csc^2 x\\,dx$: answer is $-\\cot x+C$.",
      "Verify each antiderivative by differentiating and checking you recover the integrand.",
      "When combined with $u$-substitution or Chain Rule, replace $x$ with the inner function and multiply by $1/g'(x)$.",
    ],
    examples: [
      {
        problem: "Evaluate $\\int_0^{\\pi/2}(\\cos x - \\sin x)\\,dx$.",
        solution:
          "$[\\sin x + \\cos x]_0^{\\pi/2} = (\\sin(\\pi/2)+\\cos(\\pi/2))-(\\sin 0+\\cos 0) = (1+0)-(0+1) = 0$.",
      },
    ],
    mcqs: [
      {
        question: "What is $\\int \\sec^2(x)\\,dx$?",
        options: [
          "$\\tan x + C$",
          "$-\\cot x + C$",
          "$2\\sec(x)\\tan(x)+C$",
          "$\\sec(x)+C$",
        ],
        answerIndex: 0,
        explanation:
          "Since $\\frac{d}{dx}[\\tan x]=\\sec^2 x$, the antiderivative of $\\sec^2 x$ is $\\tan x+C$. Option B is the antiderivative of $\\csc^2 x$ (with a sign). Option C is the derivative of $\\sec x$ times 2. Option D is the antiderivative of $\\sec x\\tan x$.",
      },
      {
        question: "Evaluate $\\int_0^{\\pi} \\cos x\\,dx$.",
        options: ["0", "1", "2", "-1"],
        answerIndex: 0,
        explanation:
          "$[\\sin x]_0^{\\pi} = \\sin\\pi - \\sin 0 = 0 - 0 = 0$. The function $\\cos x$ is positive on $(0,\\pi/2)$ and negative on $(\\pi/2,\\pi)$; the two signed areas cancel exactly. Options B, C, D reflect arithmetic or sign errors.",
      },
    ],
  },
  {
    id: "exp-log-antiderivatives",
    name: "Antiderivatives of Exponential and 1/x",
    unit: "Unit 6: Integration and Accumulation of Change",
    unitNumber: 6,
    tags: ["MCQ frequent"],
    summary:
      "The antiderivative of $e^x$ is itself; the antiderivative of $1/x$ is $\\ln|x|+C$.",
    formula: "\\int e^x\\,dx=e^x+C,\\quad\\int\\tfrac{1}{x}\\,dx=\\ln|x|+C",
    description:
      "Two special antiderivatives appear constantly on the AP exam: $e^x$ is its own antiderivative, and $1/x$ integrates to $\\ln|x|+C$ (the absolute value handles negative $x$). For $a^x$ with base $a\\neq e$, the antiderivative is $\\frac{a^x}{\\ln a}+C$. These rules combine with $u$-substitution to handle expressions like $e^{kx}$ or $1/(ax+b)$.",
    steps: [
      "Recall $\\int e^x\\,dx = e^x+C$ (since $\\frac{d}{dx}e^x=e^x$).",
      "For $\\int e^{kx}\\,dx$, use $u=kx$: result is $\\frac{1}{k}e^{kx}+C$.",
      "Recall $\\int \\frac{1}{x}\\,dx = \\ln|x|+C$; the absolute value is required when $x$ can be negative.",
      "For $\\int \\frac{1}{ax+b}\\,dx$, let $u=ax+b$: result is $\\frac{1}{a}\\ln|ax+b|+C$.",
      "For $\\int a^x\\,dx$, use the formula $\\frac{a^x}{\\ln a}+C$ (valid for $a>0$, $a\\neq 1$).",
      "Always verify by differentiating the result.",
    ],
    examples: [
      {
        problem: "Evaluate $\\int_0^1 e^{2x}\\,dx$.",
        solution:
          "$\\left[\\frac{e^{2x}}{2}\\right]_0^1 = \\frac{e^2}{2} - \\frac{e^0}{2} = \\frac{e^2-1}{2}$.",
      },
    ],
    mcqs: [
      {
        question: "What is $\\int \\frac{3}{x}\\,dx$?",
        options: [
          "$3\\ln|x|+C$",
          "$\\frac{3}{x^2}+C$",
          "$-\\frac{3}{x^2}+C$",
          "$3e^x+C$",
        ],
        answerIndex: 0,
        explanation:
          "$\\int \\frac{3}{x}\\,dx = 3\\int\\frac{1}{x}\\,dx = 3\\ln|x|+C$. Option B applies the power rule incorrectly ($n=-1$ is excluded). Option C is the derivative of $3/x$. Option D incorrectly substitutes $e^x$.",
      },
      {
        question: "Which of the following is an antiderivative of $e^{3x}$?",
        options: [
          "$3e^{3x}$",
          "$\\frac{e^{3x}}{3}$",
          "$e^{3x}$",
          "$\\frac{e^{3x+1}}{3x+1}$",
        ],
        answerIndex: 1,
        explanation:
          "$\\int e^{3x}\\,dx = \\frac{e^{3x}}{3}+C$. Verify: $\\frac{d}{dx}\\left[\\frac{e^{3x}}{3}\\right]=\\frac{3e^{3x}}{3}=e^{3x}$. Option A is the derivative, not the antiderivative. Option C misses the $1/3$ factor. Option D wrongly treats $e^x$ like a power of $x$.",
      },
    ],
  },
  {
    id: "inverse-trig-antiderivatives",
    name: "Integrals Yielding Inverse Trig Functions",
    unit: "Unit 6: Integration and Accumulation of Change",
    unitNumber: 6,
    tags: ["MCQ frequent"],
    summary:
      "Certain rational and radical integrands have antiderivatives expressed as arcsin or arctan.",
    formula:
      "\\int\\frac{1}{\\sqrt{1-x^2}}\\,dx=\\arcsin x+C,\\quad\\int\\frac{1}{1+x^2}\\,dx=\\arctan x+C",
    description:
      "Two key integral forms produce inverse trig functions: $\\frac{1}{\\sqrt{1-x^2}}$ integrates to $\\arcsin x+C$, and $\\frac{1}{1+x^2}$ integrates to $\\arctan x+C$. With $u$-substitution and completing the square, these patterns generalize to $\\frac{1}{\\sqrt{a^2-u^2}}$ and $\\frac{1}{a^2+u^2}$, yielding $\\arcsin(u/a)/1$ and $\\frac{1}{a}\\arctan(u/a)$ respectively.",
    steps: [
      "Recognize the form $\\frac{1}{\\sqrt{1-x^2}}$ or $\\frac{1}{1+x^2}$ in the integrand.",
      "For $\\int\\frac{du}{\\sqrt{a^2-u^2}} = \\arcsin\\frac{u}{a}+C$.",
      "For $\\int\\frac{du}{a^2+u^2} = \\frac{1}{a}\\arctan\\frac{u}{a}+C$.",
      "If needed, use $u$-substitution to match one of these forms.",
      "Complete the square on a quadratic denominator to convert to the $\\arctan$ form when the denominator is not immediately $a^2+u^2$.",
      "Verify by differentiating using the chain rule and the known derivatives of $\\arcsin$ and $\\arctan$.",
    ],
    examples: [
      {
        problem: "Evaluate $\\int \\frac{1}{4+x^2}\\,dx$.",
        solution:
          "Write $4+x^2 = 2^2+x^2$, so $a=2$. $\\int\\frac{dx}{4+x^2}=\\frac{1}{2}\\arctan\\frac{x}{2}+C$.",
      },
    ],
    mcqs: [
      {
        question: "What is $\\int \\frac{1}{\\sqrt{1-x^2}}\\,dx$?",
        options: [
          "$\\arcsin x+C$",
          "$\\arctan x+C$",
          "$-\\arccos x+C$",
          "Both A and C",
        ],
        answerIndex: 3,
        explanation:
          "Both $\\arcsin x$ and $-\\arccos x$ are antiderivatives of $\\frac{1}{\\sqrt{1-x^2}}$, since $\\frac{d}{dx}[-\\arccos x]=\\frac{1}{\\sqrt{1-x^2}}$ and $\\frac{d}{dx}[\\arcsin x]=\\frac{1}{\\sqrt{1-x^2}}$. They differ by a constant ($\\arcsin x+\\arccos x=\\pi/2$). Option B ($\\arctan$) is the antiderivative of $\\frac{1}{1+x^2}$, not this form.",
      },
      {
        question: "Evaluate $\\int_0^1 \\frac{1}{1+x^2}\\,dx$.",
        options: ["$\\pi/4$", "$\\pi/2$", "$1$", "$\\pi$"],
        answerIndex: 0,
        explanation:
          "$[\\arctan x]_0^1 = \\arctan 1 - \\arctan 0 = \\frac{\\pi}{4} - 0 = \\frac{\\pi}{4}$. Option B would correspond to $\\arctan$ from $0$ to $\\infty$. Options C and D are not values of $\\arctan$ at these bounds.",
      },
    ],
  },
  {
    id: "u-substitution",
    name: "U-Substitution",
    unit: "Unit 6: Integration and Accumulation of Change",
    unitNumber: 6,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "Reverse the chain rule by substituting an inner function $u=g(x)$ to simplify a composite integrand.",
    description:
      "U-substitution is the integration analogue of the chain rule for differentiation. When an integrand contains a composite function, choose $u$ to be the inner function; then $du = g'(x)\\,dx$ must appear (or nearly appear) in the integrand. The substitution transforms the integral into a simpler form in terms of $u$, which can be integrated using basic rules, and the result is converted back to $x$ at the end.",
    steps: [
      "Identify a composite function in the integrand; let $u = g(x)$ be the inner function.",
      "Compute $du = g'(x)\\,dx$ and solve for $dx$: $dx = \\frac{du}{g'(x)}$.",
      "Substitute: replace $g(x)$ with $u$ and $g'(x)\\,dx$ with $du$ everywhere in the integral.",
      "Integrate with respect to $u$ using standard antiderivative rules.",
      "Back-substitute: replace $u$ with $g(x)$ in the result.",
      "For definite integrals, change the limits of integration: if $x=a$ then $u=g(a)$; if $x=b$ then $u=g(b)$, so no back-substitution is needed.",
    ],
    examples: [
      {
        problem: "Evaluate $\\int 2x\\cos(x^2)\\,dx$.",
        solution:
          "Let $u=x^2$, $du=2x\\,dx$. Substitute: $\\int\\cos(u)\\,du = \\sin u+C = \\sin(x^2)+C$.",
      },
    ],
    mcqs: [
      {
        question:
          "To evaluate $\\int x^2\\sqrt{x^3+1}\\,dx$ using $u$-substitution, the best choice of $u$ is:",
        options: ["$u=x^2$", "$u=x^3+1$", "$u=\\sqrt{x^3+1}$", "$u=x^3$"],
        answerIndex: 1,
        explanation:
          "Choose $u=x^3+1$ so $du=3x^2\\,dx$, meaning $x^2\\,dx=du/3$. The integral becomes $\\int\\sqrt{u}\\,\\frac{du}{3}=\\frac{1}{3}\\cdot\\frac{2}{3}u^{3/2}+C=\\frac{2}{9}(x^3+1)^{3/2}+C$. Choosing $u=x^2$ leaves the cube root unresolved. Choosing $u=\\sqrt{x^3+1}$ creates a complicated $du$. Choosing $u=x^3$ misses the $+1$.",
      },
      {
        question: "Evaluate $\\int_0^2 x e^{x^2}\\,dx$.",
        options: [
          "$\\frac{e^4-1}{2}$",
          "$e^4-1$",
          "$\\frac{e^4}{2}$",
          "$2e^4$",
        ],
        answerIndex: 0,
        explanation:
          "Let $u=x^2$, $du=2x\\,dx$. Change limits: $x=0\\Rightarrow u=0$; $x=2\\Rightarrow u=4$. Integral becomes $\\frac{1}{2}\\int_0^4 e^u\\,du=\\frac{1}{2}[e^u]_0^4=\\frac{e^4-e^0}{2}=\\frac{e^4-1}{2}$. Option B forgets the factor of $1/2$. Options C and D make further substitution errors.",
      },
    ],
  },
  {
    id: "accumulation-net-change",
    name: "Accumulation Functions and Net Change Theorem",
    unit: "Unit 6: Integration and Accumulation of Change",
    unitNumber: 6,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "The definite integral of a rate of change gives the net change of the quantity over the interval.",
    formula: "\\int_a^b f'(x)\\,dx=f(b)-f(a)",
    description:
      "The Net Change Theorem is a direct corollary of FTC Part 2: integrating a rate of change $f'(x)$ over $[a,b]$ yields the total net change in $f$ over that interval. In applied settings, if $v(t)$ is velocity, then $\\int_a^b v(t)\\,dt$ gives the net displacement (not total distance). Accumulation functions $F(x)=\\int_a^x f(t)\\,dt$ track the running total of $f$ starting from $a$.",
    steps: [
      "Identify the rate of change function $f'(x)$ and the interval $[a,b]$.",
      "Recognize that $\\int_a^b f'(x)\\,dx = f(b)-f(a)$ gives the net change in $f$.",
      "If given an initial value $f(a)$, find $f(b) = f(a)+\\int_a^b f'(x)\\,dx$.",
      "Distinguish net change (signed) from total change (use $\\int|f'|\\,dx$ for total).",
      "For accumulation functions $F(x)=\\int_c^x r(t)\\,dt$, evaluate $F$ by substituting bounds into the integral.",
    ],
    examples: [
      {
        problem:
          "Water flows into a tank at rate $r(t) = 3t^2$ gallons per minute. How many gallons accumulate from $t=1$ to $t=3$?",
        solution: "$\\int_1^3 3t^2\\,dt = [t^3]_1^3 = 27-1=26$ gallons.",
      },
    ],
    mcqs: [
      {
        question:
          "A particle moves along a line with velocity $v(t)=t^2-4$ for $0\\le t\\le 3$. The net displacement of the particle is:",
        options: ["$-3$", "$3$", "$-1$", "$9$"],
        answerIndex: 0,
        explanation:
          "$\\int_0^3(t^2-4)\\,dt=[\\frac{t^3}{3}-4t]_0^3=(9-12)-0=-3$. Net displacement is $-3$. Note that total distance would require integrating $|v(t)|$ and accounting for sign changes, giving a larger value.",
      },
      {
        question: "If $f'(x)=\\cos x$ and $f(0)=2$, what is $f(\\pi)$?",
        options: ["2", "0", "4", "3"],
        answerIndex: 0,
        explanation:
          "Net change theorem: $f(\\pi)=f(0)+\\int_0^{\\pi}\\cos x\\,dx = 2+[\\sin x]_0^{\\pi}=2+(\\sin\\pi-\\sin 0)=2+(0-0)=2$. The integral of $\\cos x$ over a full half-period $[0,\\pi]$ is zero because the positive and negative areas cancel.",
      },
    ],
  },
  {
    id: "average-value",
    name: "Average Value of a Function",
    unit: "Unit 6: Integration and Accumulation of Change",
    unitNumber: 6,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "The average value of $f$ on $[a,b]$ is the definite integral divided by the length of the interval.",
    formula: "\\bar{f}=\\frac{1}{b-a}\\int_a^b f(x)\\,dx",
    description:
      "The average value of a continuous function $f$ on a closed interval $[a,b]$ is defined as $\\frac{1}{b-a}\\int_a^b f(x)\\,dx$. Geometrically, it is the height of a rectangle with base $(b-a)$ that has the same area as the region under the curve. By the Mean Value Theorem for Integrals, there exists at least one $c \\in [a,b]$ where $f(c)$ equals this average value.",
    steps: [
      "Identify the function $f(x)$ and the interval $[a,b]$.",
      "Compute the definite integral $\\int_a^b f(x)\\,dx$.",
      "Divide by the length of the interval: $\\bar{f} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$.",
      "To find the $x$-value where $f$ achieves its average value, set $f(c) = \\bar{f}$ and solve for $c$.",
      "Verify $c \\in [a,b]$ (guaranteed by the MVT for Integrals when $f$ is continuous).",
    ],
    examples: [
      {
        problem: "Find the average value of $f(x)=x^2$ on $[0,3]$.",
        solution:
          "$\\bar{f}=\\frac{1}{3-0}\\int_0^3 x^2\\,dx=\\frac{1}{3}\\cdot\\left[\\frac{x^3}{3}\\right]_0^3=\\frac{1}{3}\\cdot\\frac{27}{3}=\\frac{1}{3}\\cdot 9=3$.",
      },
    ],
    mcqs: [
      {
        question: "The average value of $\\sin x$ on $[0,\\pi]$ is:",
        options: ["$2/\\pi$", "$1/\\pi$", "$0$", "$2$"],
        answerIndex: 0,
        explanation:
          "$\\bar{f}=\\frac{1}{\\pi-0}\\int_0^{\\pi}\\sin x\\,dx=\\frac{1}{\\pi}[-\\cos x]_0^{\\pi}=\\frac{1}{\\pi}(-\\cos\\pi+\\cos 0)=\\frac{1}{\\pi}(1+1)=\\frac{2}{\\pi}$. Option B is missing the factor from the integral. Option C would be the average over $[0,2\\pi]$. Option D is the value of the integral $\\int_0^{\\pi}\\sin x\\,dx$ without dividing.",
      },
      {
        question:
          "Which theorem guarantees that a continuous function $f$ on $[a,b]$ attains its average value at some point $c\\in[a,b]$?",
        options: [
          "Extreme Value Theorem",
          "Mean Value Theorem for Derivatives",
          "Mean Value Theorem for Integrals",
          "Intermediate Value Theorem",
        ],
        answerIndex: 2,
        explanation:
          "The Mean Value Theorem for Integrals states that if $f$ is continuous on $[a,b]$, then there exists $c\\in[a,b]$ such that $f(c)=\\frac{1}{b-a}\\int_a^b f(x)\\,dx$. The EVT guarantees max/min values, the MVT for derivatives concerns $f'$, and the IVT concerns intermediate output values — none directly give the average value point.",
      },
    ],
  },
  {
    id: "integration-by-parts",
    name: "Integration by Parts",
    unit: "Unit 6: Integration and Accumulation of Change",
    unitNumber: 6,
    tags: ["BC only", "MCQ frequent", "FRQ"],
    summary:
      "Integrate products of functions by applying the formula $\\int u\\,dv = uv - \\int v\\,du$.",
    formula: "\\int u\\,dv=uv-\\int v\\,du",
    description:
      "Integration by Parts is the integration analogue of the Product Rule for differentiation. It converts an integral of the form $\\int f(x)g(x)\\,dx$ into (hopefully simpler) parts by choosing one factor as $u$ and the other as $dv$. The mnemonic LIATE (Logarithms, Inverse trig, Algebraic, Trig, Exponential) guides which factor to choose as $u$. Sometimes the technique must be applied twice, or the original integral reappears on the right side and can be solved algebraically.",
    steps: [
      "Choose $u$ and $dv$ using LIATE: the factor earlier in LIATE becomes $u$.",
      "Compute $du$ by differentiating $u$, and compute $v$ by integrating $dv$.",
      "Apply the formula: $\\int u\\,dv = uv - \\int v\\,du$.",
      "Evaluate $\\int v\\,du$; if it is simpler, integrate it directly.",
      "If $\\int v\\,du$ requires another IBP, repeat the process.",
      "If the original integral reappears, collect like terms: $I = uv - cI \\Rightarrow (1+c)I = uv$.",
    ],
    examples: [
      {
        problem: "Evaluate $\\int x e^x\\,dx$.",
        solution:
          "Let $u=x$, $dv=e^x\\,dx$. Then $du=dx$, $v=e^x$. IBP: $xe^x - \\int e^x\\,dx = xe^x - e^x + C = e^x(x-1)+C$.",
      },
    ],
    mcqs: [
      {
        question:
          "Using integration by parts on $\\int x\\cos x\\,dx$, the correct choice is:",
        options: [
          "$u=\\cos x$, $dv=x\\,dx$",
          "$u=x$, $dv=\\cos x\\,dx$",
          "$u=x\\cos x$, $dv=dx$",
          "$u=1$, $dv=x\\cos x\\,dx$",
        ],
        answerIndex: 1,
        explanation:
          "By LIATE, Algebraic ($x$) comes before Trigonometric ($\\cos x$), so choose $u=x$ and $dv=\\cos x\\,dx$. This gives $du=dx$ and $v=\\sin x$, so $\\int x\\cos x\\,dx = x\\sin x - \\int\\sin x\\,dx = x\\sin x+\\cos x+C$. Option A reverses the choice, making $\\int v\\,du$ more complex. Options C and D are not useful factorizations.",
      },
      {
        question: "Evaluate $\\int_0^1 x e^x\\,dx$.",
        options: ["$1$", "$e-1$", "$e$", "$e+1$"],
        answerIndex: 0,
        explanation:
          "From indefinite result $e^x(x-1)+C$: evaluate $[e^x(x-1)]_0^1=(e^1(0))-(e^0(-1))=0-(-1)=1$. Option B is $e-1\\approx 1.718$. Option C is $e$. Option D is $e+1$. The correct numerical answer is exactly $1$.",
      },
    ],
  },
  {
    id: "partial-fractions",
    name: "Partial Fraction Decomposition",
    unit: "Unit 6: Integration and Accumulation of Change",
    unitNumber: 6,
    tags: ["BC only", "FRQ", "MCQ frequent"],
    summary:
      "Decompose a rational integrand into simpler fractions with linear or irreducible quadratic denominators before integrating.",
    description:
      "Partial fraction decomposition rewrites a proper rational function $\\frac{P(x)}{Q(x)}$ as a sum of simpler fractions whose antiderivatives are known (logarithms or inverse trig). The denominator $Q(x)$ is factored into linear and irreducible quadratic factors; each factor contributes a partial fraction term. If the degree of $P$ is not less than the degree of $Q$, perform polynomial long division first to make the fraction proper.",
    steps: [
      "Verify the rational function is proper (deg numerator < deg denominator); if not, do polynomial long division first.",
      "Factor the denominator completely into linear factors $(ax+b)$ and irreducible quadratic factors $(ax^2+bx+c)$.",
      "Write the partial fraction template: each linear factor $(ax+b)^k$ contributes $\\frac{A_1}{ax+b}+\\cdots+\\frac{A_k}{(ax+b)^k}$.",
      "Multiply both sides by the denominator and solve for the unknown constants by substituting strategic values of $x$ or equating coefficients.",
      "Integrate each partial fraction using $\\int\\frac{1}{x-a}\\,dx=\\ln|x-a|+C$ or $\\int\\frac{1}{a^2+x^2}\\,dx=\\frac{1}{a}\\arctan\\frac{x}{a}+C$.",
    ],
    examples: [
      {
        problem: "Evaluate $\\int\\frac{1}{x^2-1}\\,dx$.",
        solution:
          "Factor: $x^2-1=(x-1)(x+1)$. Partial fractions: $\\frac{1}{(x-1)(x+1)}=\\frac{A}{x-1}+\\frac{B}{x+1}$. Solve: $1=A(x+1)+B(x-1)$. Set $x=1$: $A=1/2$. Set $x=-1$: $B=-1/2$. Integral: $\\frac{1}{2}\\ln|x-1|-\\frac{1}{2}\\ln|x+1|+C=\\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right|+C$.",
      },
    ],
    mcqs: [
      {
        question:
          "To integrate $\\frac{5x+3}{(x+1)(x+3)}$ using partial fractions, the correct form is:",
        options: [
          "$\\frac{A}{x+1}+\\frac{B}{x+3}$",
          "$\\frac{Ax+B}{x+1}+\\frac{Cx+D}{x+3}$",
          "$\\frac{A}{(x+1)(x+3)}+B$",
          "$\\frac{A}{x}+\\frac{B}{x+1}+\\frac{C}{x+3}$",
        ],
        answerIndex: 0,
        explanation:
          "For distinct linear factors, each contributes a constant numerator term. So $\\frac{5x+3}{(x+1)(x+3)}=\\frac{A}{x+1}+\\frac{B}{x+3}$. Option B is for irreducible quadratic factors. Option C is incorrect structure. Option D adds a spurious $1/x$ term not from the factored denominator.",
      },
      {
        question:
          "When must you perform polynomial long division before using partial fractions?",
        options: [
          "When the denominator has repeated factors",
          "When the degree of the numerator is greater than or equal to the degree of the denominator",
          "When the denominator has irreducible quadratic factors",
          "When the numerator has degree exactly 1",
        ],
        answerIndex: 1,
        explanation:
          "Partial fraction decomposition requires an improper rational function to be converted to a proper one first. A rational function is improper when deg(numerator) ≥ deg(denominator). In that case, divide first and then decompose the remainder. The other cases do not require long division.",
      },
    ],
  },
  {
    id: "improper-integrals",
    name: "Improper Integrals",
    unit: "Unit 6: Integration and Accumulation of Change",
    unitNumber: 6,
    tags: ["BC only", "FRQ", "MCQ frequent"],
    summary:
      "Evaluate integrals with infinite limits or unbounded integrands using limits of definite integrals.",
    formula:
      "\\int_a^\\infty f(x)\\,dx=\\lim_{b\\to\\infty}\\int_a^b f(x)\\,dx",
    description:
      "An improper integral arises when either a limit of integration is $\\pm\\infty$ or the integrand has a vertical asymptote within the interval. In both cases, replace the problematic bound with a variable and take the limit. If the limit exists and is finite, the improper integral converges; otherwise it diverges. Comparison with known convergent/divergent integrals (like $p$-integrals) can also determine convergence without explicit evaluation.",
    steps: [
      "Identify whether the improper nature comes from an infinite limit or from a discontinuity (vertical asymptote) of $f$ in $[a,b]$.",
      "For infinite upper limit: $\\int_a^{\\infty}f(x)\\,dx = \\lim_{b\\to\\infty}\\int_a^b f(x)\\,dx$.",
      "For infinite lower limit: $\\int_{-\\infty}^b f(x)\\,dx = \\lim_{a\\to-\\infty}\\int_a^b f(x)\\,dx$.",
      "For a discontinuity at $x=c\\in[a,b]$: split into $\\lim_{t\\to c^-}\\int_a^t f\\,dx + \\lim_{t\\to c^+}\\int_t^b f\\,dx$.",
      "Evaluate the definite integral inside the limit using FTC Part 2.",
      "Take the limit; declare convergence if the limit is a finite number, divergence if it is $\\pm\\infty$ or DNE.",
    ],
    examples: [
      {
        problem: "Evaluate $\\int_1^{\\infty}\\frac{1}{x^2}\\,dx$.",
        solution:
          "$\\lim_{b\\to\\infty}\\int_1^b x^{-2}\\,dx = \\lim_{b\\to\\infty}\\left[-\\frac{1}{x}\\right]_1^b = \\lim_{b\\to\\infty}\\left(-\\frac{1}{b}+1\\right)=0+1=1$. The integral converges to $1$.",
      },
    ],
    mcqs: [
      {
        question:
          "Does $\\int_1^{\\infty}\\frac{1}{x}\\,dx$ converge or diverge?",
        options: [
          "Converges to $1$",
          "Converges to $\\ln 2$",
          "Diverges",
          "Converges to $0$",
        ],
        answerIndex: 2,
        explanation:
          "$\\lim_{b\\to\\infty}[\\ln x]_1^b=\\lim_{b\\to\\infty}(\\ln b-0)=\\infty$. The integral diverges. This is the integral of the harmonic series' continuous analogue; it is the $p$-integral with $p=1$, which diverges. All convergent $p$-integrals $\\int_1^\\infty x^{-p}\\,dx$ require $p>1$.",
      },
      {
        question: "Evaluate $\\int_0^{\\infty}e^{-x}\\,dx$.",
        options: ["$0$", "$1$", "$e$", "Diverges"],
        answerIndex: 1,
        explanation:
          "$\\lim_{b\\to\\infty}[-e^{-x}]_0^b=\\lim_{b\\to\\infty}(-e^{-b}+e^0)=0+1=1$. The integral converges to $1$. Option A confuses the limit of $e^{-b}$ (which is 0) with the total integral. Option C misapplies the Euler number. The integral does not diverge since $e^{-x}\\to 0$ fast enough.",
      },
    ],
  },
  {
    id: "long-division-integration",
    name: "Polynomial Long Division Before Integration",
    unit: "Unit 6: Integration and Accumulation of Change",
    unitNumber: 6,
    tags: ["FRQ"],
    summary:
      "When integrating an improper rational function, first divide to rewrite it as a polynomial plus a proper fraction.",
    description:
      "When the degree of the numerator is greater than or equal to the degree of the denominator in a rational integrand, the function must be simplified by polynomial long division before applying partial fractions or direct integration. The result rewrites $\\frac{P(x)}{Q(x)}$ as a polynomial $S(x)$ plus a proper fraction $\\frac{R(x)}{Q(x)}$, each of which can be integrated separately. Skipping this step is a common error that leads to an incorrect setup for partial fractions.",
    steps: [
      "Check the degrees: if deg($P$) $\\geq$ deg($Q$), polynomial long division is needed.",
      "Divide $P(x)$ by $Q(x)$ using long division to obtain a quotient $S(x)$ and remainder $R(x)$.",
      "Rewrite: $\\frac{P(x)}{Q(x)}=S(x)+\\frac{R(x)}{Q(x)}$ where deg($R$) $<$ deg($Q$).",
      "Integrate $S(x)$ term by term using the power rule.",
      "Apply partial fractions or other techniques to integrate $\\frac{R(x)}{Q(x)}$.",
      "Combine results and add $+C$.",
    ],
    examples: [
      {
        problem: "Evaluate $\\int\\frac{x^2+3}{x+1}\\,dx$.",
        solution:
          "Divide $x^2+3$ by $x+1$: $x^2\\div x=x$, so $x^2+3=(x+1)(x-1)+4$, giving $\\frac{x^2+3}{x+1}=x-1+\\frac{4}{x+1}$. Integrate: $\\int\\left(x-1+\\frac{4}{x+1}\\right)dx=\\frac{x^2}{2}-x+4\\ln|x+1|+C$.",
      },
    ],
    mcqs: [
      {
        question:
          "Which integral requires polynomial long division as a first step?",
        options: [
          "$\\int\\frac{x}{x^2+1}\\,dx$",
          "$\\int\\frac{x^3}{x^2+1}\\,dx$",
          "$\\int\\frac{1}{x^2+1}\\,dx$",
          "$\\int\\frac{x+1}{x^2+1}\\,dx$",
        ],
        answerIndex: 1,
        explanation:
          "Long division is needed when deg(numerator) $\\geq$ deg(denominator). In option B, deg($x^3$)=3 $>$ deg($x^2+1$)=2, so division is required. Option A: deg 1 < deg 2 — no division needed ($u$-substitution works). Option C: deg 0 < deg 2 — use arctan. Option D: deg 1 < deg 2 — split into two standard integrals.",
      },
      {
        question:
          "After dividing $\\frac{x^2-1}{x-1}$, what is the simplified integrand?",
        options: ["$x-1$", "$x+1$", "$x$", "$x-1+\\frac{2}{x-1}$"],
        answerIndex: 1,
        explanation:
          "$\\frac{x^2-1}{x-1}=\\frac{(x-1)(x+1)}{x-1}=x+1$ (for $x\\neq 1$). No remainder since $(x-1)$ divides $(x^2-1)$ exactly. Option A drops the $+1$. Option C is just the leading term. Option D has a spurious remainder.",
      },
    ],
  },
  {
    id: "trig-substitution",
    name: "Trigonometric Substitution",
    unit: "Unit 6: Integration and Accumulation of Change",
    unitNumber: 6,
    tags: ["BC only", "FRQ"],
    summary:
      "Trig substitution replaces expressions like $\\sqrt{a^2-x^2}$ with trig functions to eliminate radicals and convert to a standard trig integral.",
    formula:
      "\\sqrt{a^2-x^2}:\\;x=a\\sin\\theta,\\quad\\sqrt{a^2+x^2}:\\;x=a\\tan\\theta,\\quad\\sqrt{x^2-a^2}:\\;x=a\\sec\\theta",
    description:
      "When an integrand contains $\\sqrt{a^2 - x^2}$, $\\sqrt{a^2 + x^2}$, or $\\sqrt{x^2 - a^2}$, a trigonometric substitution eliminates the radical via a Pythagorean identity. The three cases are: $x = a\\sin\\theta$ for $\\sqrt{a^2-x^2}$, $x = a\\tan\\theta$ for $\\sqrt{a^2+x^2}$, and $x = a\\sec\\theta$ for $\\sqrt{x^2-a^2}$. After integrating in $\\theta$, convert back to $x$ using a reference right triangle. The AP BC exam tests this technique particularly on definite integrals with a geometric interpretation (area of a circle or ellipse).",
    steps: [
      "Identify the radical form and choose: $x = a\\sin\\theta$ for $\\sqrt{a^2-x^2}$, $x = a\\tan\\theta$ for $\\sqrt{a^2+x^2}$, $x = a\\sec\\theta$ for $\\sqrt{x^2-a^2}$.",
      "Compute $dx$ in terms of $d\\theta$. For $x=a\\sin\\theta$: $dx = a\\cos\\theta\\,d\\theta$.",
      "Substitute and simplify the radical using a Pythagorean identity: $\\sqrt{a^2-a^2\\sin^2\\theta}=a\\cos\\theta$ (assuming $\\cos\\theta\\ge 0$).",
      "Integrate the resulting trig expression (use $\\cos^2\\theta = \\frac{1+\\cos 2\\theta}{2}$ or $\\sec^2\\theta - 1 = \\tan^2\\theta$ as needed).",
      "Back-substitute using the original substitution and a right-triangle diagram to express $\\sin\\theta$, $\\cos\\theta$, etc. in terms of $x$.",
    ],
    examples: [
      {
        problem: "Evaluate $\\displaystyle\\int \\sqrt{4 - x^2}\\,dx$.",
        solution:
          "Let $x = 2\\sin\\theta$, so $dx = 2\\cos\\theta\\,d\\theta$ and $\\sqrt{4-x^2} = 2\\cos\\theta$. The integral becomes $\\int 2\\cos\\theta\\cdot 2\\cos\\theta\\,d\\theta = 4\\int\\cos^2\\theta\\,d\\theta = 4\\int\\frac{1+\\cos 2\\theta}{2}\\,d\\theta = 2\\theta + \\sin 2\\theta + C$. Using $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$, $\\theta = \\arcsin(x/2)$, and $\\cos\\theta = \\sqrt{4-x^2}/2$: answer is $2\\arcsin\\!\\left(\\frac{x}{2}\\right) + \\frac{x\\sqrt{4-x^2}}{2} + C$.",
      },
    ],
    mcqs: [
      {
        question:
          "To evaluate $\\displaystyle\\int \\frac{dx}{\\sqrt{9 - x^2}}$, the correct trig substitution is:",
        options: [
          "$x = 3\\tan\\theta$",
          "$x = 3\\sin\\theta$",
          "$x = 3\\sec\\theta$",
          "$x = 9\\sin\\theta$",
        ],
        answerIndex: 1,
        explanation:
          "The form $\\sqrt{9-x^2} = \\sqrt{a^2-x^2}$ with $a=3$ calls for $x = 3\\sin\\theta$. This gives $\\sqrt{9-9\\sin^2\\theta} = 3\\cos\\theta$ and $dx = 3\\cos\\theta\\,d\\theta$, so the integral becomes $\\int d\\theta = \\theta + C = \\arcsin(x/3) + C$. Option A ($x = 3\\tan\\theta$) is used for $\\sqrt{9+x^2}$. Option C ($x = 3\\sec\\theta$) is used for $\\sqrt{x^2-9}$. Option D has the wrong scale factor.",
      },
      {
        question:
          "After substituting $x = a\\sin\\theta$ (with $0 \\le \\theta \\le \\pi/2$), the radical $\\sqrt{a^2 - x^2}$ simplifies to:",
        options: [
          "$a\\sin\\theta$",
          "$a\\cos\\theta$",
          "$a\\tan\\theta$",
          "$a\\sec\\theta$",
        ],
        answerIndex: 1,
        explanation:
          "$\\sqrt{a^2-x^2} = \\sqrt{a^2 - a^2\\sin^2\\theta} = a\\sqrt{1-\\sin^2\\theta} = a\\sqrt{\\cos^2\\theta} = a\\cos\\theta$ (positive since $\\cos\\theta \\ge 0$ on $[0,\\pi/2]$). This radical-free form is exactly why trig substitution works.",
      },
    ],
  },
  {
    id: "tabular-ibp",
    name: "Tabular Integration by Parts",
    unit: "Unit 6: Integration and Accumulation of Change",
    unitNumber: 6,
    tags: ["BC only", "FRQ"],
    summary:
      "The tabular method organizes repeated integration-by-parts steps into a two-column table, ideal when a polynomial factor differentiates to zero.",
    formula: "\\int u\\,dv = uv - \\int v\\,du\\quad(\\text{iterated})",
    description:
      "When integration by parts must be applied multiple times — typically when one factor is a polynomial $p(x)$ and the other is $e^x$, $\\sin x$, or $\\cos x$ — the tabular method avoids tedious re-application of the IBP formula. Set up two columns: repeatedly differentiate the polynomial in the left column until reaching 0, and repeatedly integrate the other factor in the right column. Multiply diagonally with alternating signs $(+,-,+,-,\\ldots)$ and sum the products for the antiderivative.",
    steps: [
      "Identify $u$ (the factor that eventually differentiates to zero, usually a polynomial) and $dv$ (the factor that integrates repeatedly without growing, like $e^x$).",
      "Left column: write $u$, then differentiate repeatedly until you reach $0$.",
      "Right column: write $dv$'s antiderivative, then antidifferentiate each successive entry (no $+C$ until the final answer).",
      "Draw diagonal arrows from each left entry to the right entry one row below it.",
      "Assign alternating signs starting with $+$ to each diagonal product; sum all products and add $+C$.",
    ],
    examples: [
      {
        problem: "Use tabular IBP to evaluate $\\displaystyle\\int x^2 e^x\\,dx$.",
        solution:
          "Left column (differentiate $x^2$): $x^2 \\to 2x \\to 2 \\to 0$. Right column (integrate $e^x$): $e^x \\to e^x \\to e^x \\to e^x$. Signs: $+, -, +$. Products: $+x^2 e^x$, $-2xe^x$, $+2e^x$. Answer: $x^2 e^x - 2xe^x + 2e^x + C = e^x(x^2 - 2x + 2) + C$.",
      },
    ],
    mcqs: [
      {
        question:
          "The tabular method for integration by parts is most efficient when:",
        options: [
          "The integrand is a product of two trig functions.",
          "One factor is a polynomial and the other is $e^x$, $\\sin x$, or $\\cos x$.",
          "The integrand contains a logarithm.",
          "The integral requires only a single IBP application.",
        ],
        answerIndex: 1,
        explanation:
          "Tabular IBP shines when a polynomial (which terminates after finitely many derivatives) is multiplied by a function that cycles or stays stable under integration ($e^x$, $\\sin x$, $\\cos x$). Products of two trig functions (A) are usually handled with identities. Logarithms (C) require a single IBP with $u = \\ln x$. If only one IBP application is needed (D), the standard formula is just as fast.",
      },
      {
        question:
          "Applying tabular IBP to $\\displaystyle\\int x^3 \\cos x\\,dx$, the full antiderivative is:",
        options: [
          "$x^3\\sin x + 3x^2\\cos x - 6x\\sin x - 6\\cos x + C$",
          "$x^3\\sin x - 3x^2\\cos x - 6x\\sin x + 6\\cos x + C$",
          "$-x^3\\cos x + 3x^2\\sin x + 6x\\cos x - 6\\sin x + C$",
          "$x^3\\cos x + 3x^2\\sin x - 6x\\cos x - 6\\sin x + C$",
        ],
        answerIndex: 0,
        explanation:
          "Left column (differentiate $x^3$): $x^3,\\ 3x^2,\\ 6x,\\ 6,\\ 0$. Right column (integrate $\\cos x$): $\\cos x \\to \\sin x \\to -\\cos x \\to -\\sin x \\to \\cos x$. Signs: $+,-,+,-$. Products: $+x^3\\sin x$, $-(3x^2)(-\\cos x)=+3x^2\\cos x$, $+(6x)(-\\sin x)=-6x\\sin x$, $-(6)(-\\sin x)$... wait, row 4 right entry is $\\cos x$... Actually: row pairings are (row $i$ left) $\\times$ (row $i+1$ right). Row 0 left = $x^3$, row 1 right = $\\sin x$: product $+x^3\\sin x$. Row 1 left = $3x^2$, row 2 right = $-\\cos x$: product $-(3x^2)(-\\cos x) = +3x^2\\cos x$. Row 2 left = $6x$, row 3 right = $-\\sin x$: product $+(6x)(-\\sin x) = -6x\\sin x$. Row 3 left = $6$, row 4 right = $\\cos x$: product $-(6)(\\cos x) = -6\\cos x$. Sum: $x^3\\sin x + 3x^2\\cos x - 6x\\sin x - 6\\cos x + C$.",
      },
    ],
  },
];
