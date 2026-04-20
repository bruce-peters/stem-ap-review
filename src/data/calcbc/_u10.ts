export default [
  {
    id: "sequence-convergence",
    name: "Convergence and Divergence of Sequences",
    unit: "Unit 10: Infinite Sequences and Series",
    unitNumber: 10,
    tags: ["BC only", "MCQ frequent"],
    summary:
      "A sequence converges if its terms approach a finite limit as n approaches infinity; otherwise it diverges.",
    formula: "\\lim_{n\\to\\infty} a_n",
    description:
      "A sequence \\{a_n\\} converges to L if \\(\\lim_{n\\to\\infty} a_n = L\\) is a finite real number. If the limit is infinite or does not exist, the sequence diverges. Common techniques include algebraic simplification, L'Hôpital's Rule, and squeeze-theorem arguments.",
    steps: [
      "Write out the general term $a_n$ explicitly.",
      "Take $\\lim_{n\\to\\infty} a_n$; divide numerator and denominator by the highest power of $n$ when needed.",
      "Apply L'Hôpital's Rule if the limit has an indeterminate form such as $\\infty/\\infty$.",
      "Conclude: if the limit equals a finite number $L$, the sequence converges to $L$; otherwise it diverges.",
    ],
    examples: [
      {
        problem:
          "Determine whether $a_n = \\dfrac{3n^2 - 1}{5n^2 + 2}$ converges.",
        solution:
          "Divide top and bottom by $n^2$: $\\lim_{n\\to\\infty}\\dfrac{3 - 1/n^2}{5 + 2/n^2} = \\dfrac{3}{5}$. The sequence converges to $\\dfrac{3}{5}$.",
      },
    ],
    mcqs: [
      {
        question: "Which of the following sequences converges?",
        options: [
          "$a_n = (-1)^n$",
          "$a_n = \\dfrac{n}{n+1}$",
          "$a_n = \\ln n$",
          "$a_n = n^2$",
        ],
        answerIndex: 1,
        explanation:
          "$a_n = n/(n+1) \\to 1$ as $n\\to\\infty$, so it converges. $(-1)^n$ oscillates, $\\ln n \\to \\infty$, and $n^2 \\to \\infty$, so those three diverge.",
      },
      {
        question: "Find $\\lim_{n\\to\\infty} \\dfrac{2n^3 - n}{4n^3 + 7}$.",
        options: [
          "0",
          "$\\dfrac{1}{2}$",
          "$\\dfrac{2}{7}$",
          "The limit does not exist",
        ],
        answerIndex: 1,
        explanation:
          "Divide numerator and denominator by $n^3$: $(2 - 1/n^2)/(4 + 7/n^3) \\to 2/4 = 1/2$.",
      },
    ],
  },
  {
    id: "series-definition",
    name: "Definition of an Infinite Series",
    unit: "Unit 10: Infinite Sequences and Series",
    unitNumber: 10,
    tags: ["BC only", "MCQ frequent"],
    summary:
      "An infinite series is the limit of the partial sums of its terms; it converges when that limit is finite.",
    formula: "\\sum_{n=1}^\\infty a_n=\\lim_{N\\to\\infty}\\sum_{n=1}^N a_n",
    description:
      "Given a sequence \\{a_n\\}, the infinite series $\\sum a_n$ is defined as $\\lim_{N\\to\\infty} S_N$ where $S_N = a_1 + a_2 + \\cdots + a_N$ is the $N$th partial sum. If this limit exists and is finite, the series converges; otherwise it diverges. Understanding partial sums is the foundation for all convergence tests.",
    steps: [
      "Write the $N$th partial sum $S_N = \\sum_{n=1}^N a_n$.",
      "Find a closed-form expression for $S_N$ if possible (e.g., telescoping or geometric).",
      "Evaluate $\\lim_{N\\to\\infty} S_N$.",
      "If the limit is a finite number $S$, the series converges to $S$; if not, it diverges.",
    ],
    examples: [
      {
        problem:
          "Find the sum of the telescoping series $\\sum_{n=1}^\\infty \\left(\\dfrac{1}{n} - \\dfrac{1}{n+1}\\right)$.",
        solution:
          "$S_N = 1 - \\dfrac{1}{N+1}$. As $N\\to\\infty$, $S_N \\to 1$. The series converges to $1$.",
      },
    ],
    mcqs: [
      {
        question:
          "What does it mean for an infinite series $\\sum_{n=1}^\\infty a_n$ to converge?",
        options: [
          "The terms $a_n$ approach zero.",
          "The sequence of partial sums approaches a finite limit.",
          "The terms are all positive.",
          "The ratio $a_{n+1}/a_n$ is less than 1 for all $n$.",
        ],
        answerIndex: 1,
        explanation:
          "Convergence of a series means the sequence of partial sums $S_N$ has a finite limit. Terms approaching zero is necessary but not sufficient (the harmonic series is a counterexample).",
      },
      {
        question:
          "The partial sums of a series satisfy $S_N = \\dfrac{2N}{N+3}$. What does the series converge to?",
        options: ["0", "1", "2", "The series diverges"],
        answerIndex: 2,
        explanation:
          "$\\lim_{N\\to\\infty} 2N/(N+3) = \\lim_{N\\to\\infty} 2/(1+3/N) = 2$. The series converges to $2$.",
      },
    ],
  },
  {
    id: "geometric-series",
    name: "Geometric Series",
    unit: "Unit 10: Infinite Sequences and Series",
    unitNumber: 10,
    tags: ["BC only", "MCQ frequent", "FRQ"],
    summary:
      "A geometric series converges to $a/(1-r)$ when $|r| < 1$ and diverges when $|r| \\ge 1$.",
    formula: "\\sum_{n=0}^\\infty ar^n=\\frac{a}{1-r},\\quad|r|<1",
    description:
      "A geometric series has the form $\\sum_{n=0}^\\infty ar^n$ where $a$ is the first term and $r$ is the common ratio. It converges to $a/(1-r)$ precisely when $|r| < 1$. When $|r| \\ge 1$ the partial sums grow without bound (or oscillate), so the series diverges.",
    steps: [
      "Identify the first term $a$ and the common ratio $r$ in the series.",
      "Check the condition: does $|r| < 1$?",
      "If yes, the series converges and the sum is $S = \\dfrac{a}{1-r}$.",
      "If $|r| \\ge 1$, state that the series diverges.",
    ],
    examples: [
      {
        problem:
          "Find the sum of $\\sum_{n=0}^\\infty 3\\left(\\dfrac{2}{5}\\right)^n$.",
        solution:
          "Here $a = 3$ and $r = 2/5$. Since $|2/5| < 1$, the series converges. $S = \\dfrac{3}{1 - 2/5} = \\dfrac{3}{3/5} = 5$.",
      },
    ],
    mcqs: [
      {
        question:
          "For which value of $x$ does the series $\\sum_{n=0}^\\infty (2x)^n$ converge?",
        options: [
          "$x = 1$",
          "$x = -1$",
          "$x = \\dfrac{1}{3}$",
          "$x = \\dfrac{3}{4}$",
        ],
        answerIndex: 2,
        explanation:
          "The series is geometric with $r = 2x$. It converges when $|2x| < 1$, i.e., $|x| < 1/2$. Only $x = 1/3$ satisfies this; $x = 1, -1, 3/4$ give $|r| \\ge 1$.",
      },
      {
        question:
          "What is the sum of $\\sum_{n=1}^\\infty \\left(\\dfrac{1}{3}\\right)^n$?",
        options: [
          "$\\dfrac{1}{2}$",
          "$\\dfrac{1}{3}$",
          "$\\dfrac{2}{3}$",
          "$3$",
        ],
        answerIndex: 0,
        explanation:
          "Rewrite as $\\sum_{n=0}^\\infty (1/3)^n - 1 = \\dfrac{1}{1-1/3} - 1 = \\dfrac{3}{2} - 1 = \\dfrac{1}{2}$. Alternatively, first term is $1/3$ and $r = 1/3$, so $S = (1/3)/(1-1/3) = (1/3)/(2/3) = 1/2$.",
      },
    ],
  },
  {
    id: "harmonic-series",
    name: "Harmonic Series (diverges)",
    unit: "Unit 10: Infinite Sequences and Series",
    unitNumber: 10,
    tags: ["BC only", "MCQ frequent"],
    summary:
      "The harmonic series $\\sum 1/n$ diverges even though its terms approach zero.",
    formula: "\\sum_{n=1}^\\infty\\frac{1}{n}\\ \\text{diverges}",
    description:
      "The harmonic series $1 + 1/2 + 1/3 + 1/4 + \\cdots$ is the canonical example of a series whose terms tend to zero yet the series still diverges. This is proved by the integral test or by grouping terms. It is also the boundary case of the $p$-series with $p = 1$.",
    steps: [
      "Recognize the series as $\\sum_{n=1}^\\infty 1/n$.",
      "Note that $\\lim_{n\\to\\infty} 1/n = 0$, so the nth-term test is inconclusive.",
      "Apply the integral test: $\\int_1^\\infty (1/x)\\,dx = \\lim_{b\\to\\infty} \\ln b = \\infty$, which diverges.",
      "Conclude the harmonic series diverges (partial sums grow without bound, albeit very slowly).",
    ],
    examples: [
      {
        problem:
          "Explain why $\\sum_{n=1}^\\infty \\dfrac{1}{n}$ diverges despite $1/n \\to 0$.",
        solution:
          "Group terms: $(1) + (1/2) + (1/3+1/4) + (1/5+\\cdots+1/8)+\\cdots$. Each group sums to at least $1/2$, giving infinitely many groups each $\\ge 1/2$, so the total sum is infinite.",
      },
    ],
    mcqs: [
      {
        question: "Which statement about the harmonic series is TRUE?",
        options: [
          "It converges because $1/n \\to 0$.",
          "It diverges, and this can be shown using the integral test.",
          "It converges to $\\ln 2$.",
          "It diverges only for $n > 100$.",
        ],
        answerIndex: 1,
        explanation:
          "The harmonic series diverges. The integral test confirms this since $\\int_1^\\infty (1/x)\\,dx$ diverges. Terms approaching zero is necessary but not sufficient for convergence.",
      },
      {
        question:
          "Does $\\sum_{n=1}^\\infty \\dfrac{1}{n+5}$ converge or diverge?",
        options: [
          "Converges, because the terms are smaller than $1/n$.",
          "Diverges, by comparison with the harmonic series.",
          "Converges to $1/5$.",
          "Cannot be determined without more information.",
        ],
        answerIndex: 1,
        explanation:
          "Since $1/(n+5) > 0$ and $\\sum 1/n$ diverges, and $1/(n+5)$ is comparable to $1/n$ (limit comparison gives limit 1), the series diverges by the limit comparison test.",
      },
    ],
  },
  {
    id: "p-series",
    name: "p-Series Test",
    unit: "Unit 10: Infinite Sequences and Series",
    unitNumber: 10,
    tags: ["BC only", "MCQ frequent"],
    summary:
      "The p-series $\\sum 1/n^p$ converges if $p > 1$ and diverges if $p \\le 1$.",
    formula: "\\sum\\frac{1}{n^p}\\ \\text{converges iff}\\ p>1",
    description:
      "The $p$-series $\\sum_{n=1}^\\infty n^{-p}$ is a fundamental benchmark series. It is proved convergent for $p > 1$ and divergent for $p \\le 1$ via the integral test. The harmonic series ($p = 1$) is the most important boundary case.",
    steps: [
      "Identify the series as having the form $\\sum_{n=1}^\\infty 1/n^p$.",
      "Determine the value of $p$ by examining the exponent on $n$.",
      "If $p > 1$, conclude the series converges (exact sum requires advanced methods).",
      "If $p \\le 1$ (including $p = 1$, the harmonic series), conclude the series diverges.",
    ],
    examples: [
      {
        problem:
          "Determine whether $\\sum_{n=1}^\\infty \\dfrac{1}{n^{3/2}}$ converges or diverges.",
        solution:
          "This is a $p$-series with $p = 3/2 > 1$. Therefore the series converges.",
      },
    ],
    mcqs: [
      {
        question: "Which of the following $p$-series converges?",
        options: [
          "$\\sum_{n=1}^\\infty \\dfrac{1}{\\sqrt{n}}$",
          "$\\sum_{n=1}^\\infty \\dfrac{1}{n}$",
          "$\\sum_{n=1}^\\infty \\dfrac{1}{n^{0.99}}$",
          "$\\sum_{n=1}^\\infty \\dfrac{1}{n^2}$",
        ],
        answerIndex: 3,
        explanation:
          "$1/n^2$ is a $p$-series with $p = 2 > 1$, so it converges. $1/\\sqrt{n}$ has $p = 1/2$, $1/n$ has $p = 1$, and $1/n^{0.99}$ has $p = 0.99$; all have $p \\le 1$ and diverge.",
      },
      {
        question:
          "For what values of $p$ does $\\sum_{n=1}^\\infty \\dfrac{1}{n^p}$ diverge?",
        options: ["$p > 1$", "$p < 1$ only", "$p \\le 1$", "$p \\ge 1$"],
        answerIndex: 2,
        explanation:
          "The $p$-series diverges when $p \\le 1$. This includes $p = 1$ (harmonic series) and all smaller values.",
      },
    ],
  },
  {
    id: "nth-term-divergence-test",
    name: "nth-Term Divergence Test",
    unit: "Unit 10: Infinite Sequences and Series",
    unitNumber: 10,
    tags: ["BC only", "MCQ frequent"],
    summary:
      "If the terms of a series do not approach zero, the series must diverge.",
    formula: "\\lim_{n\\to\\infty}a_n\\neq 0\\Rightarrow\\text{diverges}",
    description:
      "The nth-term test (or divergence test) states that if $\\lim_{n\\to\\infty} a_n \\neq 0$ (or does not exist), then $\\sum a_n$ diverges. Crucially, if $\\lim_{n\\to\\infty} a_n = 0$, the test is inconclusive — the series may still converge or diverge.",
    steps: [
      "Compute $\\lim_{n\\to\\infty} a_n$.",
      "If the limit is nonzero or does not exist, conclude immediately that the series diverges.",
      "If the limit equals zero, the test is inconclusive — apply another convergence test.",
      "Never conclude convergence from this test alone.",
    ],
    examples: [
      {
        problem:
          "Does $\\sum_{n=1}^\\infty \\dfrac{n}{2n+1}$ converge or diverge?",
        solution:
          "$\\lim_{n\\to\\infty} \\dfrac{n}{2n+1} = \\dfrac{1}{2} \\neq 0$. By the nth-term divergence test, the series diverges.",
      },
    ],
    mcqs: [
      {
        question: "If $\\lim_{n\\to\\infty} a_n = 0$, what can we conclude?",
        options: [
          "The series $\\sum a_n$ converges.",
          "The series $\\sum a_n$ diverges.",
          "The nth-term test is inconclusive; another test is needed.",
          "The series converges to 0.",
        ],
        answerIndex: 2,
        explanation:
          "When $\\lim a_n = 0$, the nth-term test gives no conclusion. The harmonic series has $1/n \\to 0$ yet diverges; $\\sum 1/n^2$ also has terms $\\to 0$ but converges.",
      },
      {
        question:
          "Use the nth-term divergence test on $\\sum_{n=1}^\\infty \\dfrac{3n^2}{n^2+1}$.",
        options: [
          "Converges to 3.",
          "Diverges, because the limit of terms is 3.",
          "Inconclusive; need another test.",
          "Diverges, because the limit of terms is $\\infty$.",
        ],
        answerIndex: 1,
        explanation:
          "$\\lim_{n\\to\\infty} 3n^2/(n^2+1) = 3 \\neq 0$, so the series diverges by the nth-term test.",
      },
    ],
  },
  {
    id: "integral-test",
    name: "Integral Test",
    unit: "Unit 10: Infinite Sequences and Series",
    unitNumber: 10,
    tags: ["BC only", "MCQ frequent"],
    summary:
      "If $f$ is positive, continuous, and decreasing, then $\\sum f(n)$ and $\\int f(x)\\,dx$ either both converge or both diverge.",
    description:
      "The integral test connects the convergence of a series to the convergence of a related improper integral. If $f(x)$ is positive, continuous, and decreasing on $[1, \\infty)$ with $a_n = f(n)$, then $\\sum_{n=1}^\\infty a_n$ converges if and only if $\\int_1^\\infty f(x)\\,dx$ converges. This test is especially useful for $p$-series and logarithm-type series.",
    steps: [
      "Verify that $f(x)$ (where $a_n = f(n)$) is positive, continuous, and eventually decreasing.",
      "Set up the improper integral $\\int_1^\\infty f(x)\\,dx$.",
      "Evaluate the integral: $\\lim_{b\\to\\infty} \\int_1^b f(x)\\,dx$.",
      "If the integral converges (finite limit), the series converges; if it diverges, the series diverges.",
    ],
    examples: [
      {
        problem:
          "Use the integral test to determine whether $\\sum_{n=1}^\\infty \\dfrac{1}{n^2}$ converges.",
        solution:
          "$f(x) = 1/x^2$ is positive, continuous, and decreasing. $\\int_1^\\infty x^{-2}\\,dx = [-1/x]_1^\\infty = 0 - (-1) = 1 < \\infty$. The integral converges, so the series converges.",
      },
    ],
    mcqs: [
      {
        question: "Which condition is NOT required to apply the integral test?",
        options: [
          "$f(x) > 0$ for all relevant $x$",
          "$f(x)$ is continuous on $[1, \\infty)$",
          "$f(x)$ is decreasing",
          "$f(x)$ must have an elementary antiderivative",
        ],
        answerIndex: 3,
        explanation:
          "The integral test requires $f$ to be positive, continuous, and decreasing. It does not require an elementary antiderivative — convergence only needs to be established, not the exact value of the integral.",
      },
      {
        question:
          "Using the integral test, does $\\sum_{n=2}^\\infty \\dfrac{1}{n\\ln n}$ converge or diverge?",
        options: [
          "Converges, since terms go to zero.",
          "Diverges, because $\\int_2^\\infty \\dfrac{1}{x\\ln x}\\,dx$ diverges.",
          "Converges, because $\\int_2^\\infty \\dfrac{1}{x\\ln x}\\,dx$ converges.",
          "The integral test cannot be applied here.",
        ],
        answerIndex: 1,
        explanation:
          "$\\int_2^\\infty \\frac{1}{x\\ln x}\\,dx = [\\ln(\\ln x)]_2^\\infty = \\infty$. The improper integral diverges, so the series diverges.",
      },
    ],
  },
  {
    id: "direct-comparison-test",
    name: "Direct Comparison Test",
    unit: "Unit 10: Infinite Sequences and Series",
    unitNumber: 10,
    tags: ["BC only", "MCQ frequent"],
    summary:
      "Compare a series term-by-term with a known benchmark; a smaller convergent series or larger divergent series transfers the result.",
    formula: "0\\le a_n\\le b_n",
    description:
      "If $0 \\le a_n \\le b_n$ for all $n$ and $\\sum b_n$ converges, then $\\sum a_n$ converges. Conversely, if $\\sum a_n$ diverges and $a_n \\le b_n$, then $\\sum b_n$ also diverges. The key is finding an appropriate known series (geometric or $p$-series) that bounds the given series.",
    steps: [
      "Identify a known benchmark series $\\sum b_n$ (often a $p$-series or geometric series).",
      "Establish the inequality $0 \\le a_n \\le b_n$ (or $a_n \\ge b_n$) for all sufficiently large $n$.",
      "State the convergence or divergence of the benchmark series.",
      "Apply the direct comparison test to conclude the same behavior for $\\sum a_n$.",
    ],
    examples: [
      {
        problem:
          "Determine whether $\\sum_{n=1}^\\infty \\dfrac{1}{n^2 + 1}$ converges.",
        solution:
          "Since $n^2 + 1 > n^2$, we have $0 < \\dfrac{1}{n^2+1} < \\dfrac{1}{n^2}$. The $p$-series $\\sum 1/n^2$ converges ($p=2>1$), so by direct comparison, $\\sum 1/(n^2+1)$ also converges.",
      },
    ],
    mcqs: [
      {
        question:
          "Which comparison correctly shows $\\sum_{n=1}^\\infty \\dfrac{1}{2^n + n}$ converges?",
        options: [
          "$\\dfrac{1}{2^n+n} \\le \\dfrac{1}{n}$ and $\\sum 1/n$ converges.",
          "$\\dfrac{1}{2^n+n} \\le \\dfrac{1}{2^n}$ and $\\sum 1/2^n$ converges.",
          "$\\dfrac{1}{2^n+n} \\ge \\dfrac{1}{2^n}$ and $\\sum 1/2^n$ converges.",
          "$\\dfrac{1}{2^n+n} \\ge \\dfrac{1}{n}$ and $\\sum 1/n$ diverges.",
        ],
        answerIndex: 1,
        explanation:
          "Since $2^n + n > 2^n$, we get $1/(2^n+n) < 1/2^n$. The geometric series $\\sum (1/2)^n$ converges, so by direct comparison the original series converges.",
      },
      {
        question:
          "To show $\\sum_{n=1}^\\infty \\dfrac{1}{\\sqrt{n}-0.5}$ diverges using direct comparison, the best benchmark is:",
        options: [
          "$\\sum 1/n^2$, which converges.",
          "$\\sum 1/\\sqrt{n}$, which diverges.",
          "$\\sum 1/n$, which diverges.",
          "$\\sum (1/2)^n$, which converges.",
        ],
        answerIndex: 1,
        explanation:
          "For large $n$, $\\sqrt{n} - 0.5 < \\sqrt{n}$, so $1/(\\sqrt{n}-0.5) > 1/\\sqrt{n}$. Since $\\sum 1/\\sqrt{n}$ is a $p$-series with $p = 1/2 < 1$ (diverges), the original series diverges by direct comparison.",
      },
    ],
  },
  {
    id: "limit-comparison-test",
    name: "Limit Comparison Test",
    unit: "Unit 10: Infinite Sequences and Series",
    unitNumber: 10,
    tags: ["BC only", "MCQ frequent"],
    summary:
      "If the ratio of two series' terms approaches a finite positive limit, the series share the same convergence behavior.",
    formula: "\\lim_{n\\to\\infty}\\frac{a_n}{b_n}=L,\\ 0<L<\\infty",
    description:
      "The limit comparison test states: if $a_n, b_n > 0$ and $\\lim_{n\\to\\infty} a_n/b_n = L$ with $0 < L < \\infty$, then $\\sum a_n$ and $\\sum b_n$ either both converge or both diverge. This is often easier to apply than direct comparison when inequalities are hard to establish.",
    steps: [
      "Choose a benchmark series $\\sum b_n$ with known behavior, typically by keeping only dominant terms of $a_n$.",
      "Compute $L = \\lim_{n\\to\\infty} \\dfrac{a_n}{b_n}$.",
      "Check that $0 < L < \\infty$ (the limit is positive and finite).",
      "Conclude: $\\sum a_n$ and $\\sum b_n$ have the same convergence/divergence.",
    ],
    examples: [
      {
        problem:
          "Test $\\sum_{n=1}^\\infty \\dfrac{3n+2}{n^2-n+1}$ for convergence.",
        solution:
          "Dominant terms give $a_n \\approx 3n/n^2 = 3/n$. Compare with $b_n = 1/n$. $L = \\lim (3n+2)/(n^2-n+1) \\cdot n = \\lim (3n^2+2n)/(n^2-n+1) = 3$. Since $0 < 3 < \\infty$ and $\\sum 1/n$ diverges, the original series diverges.",
      },
    ],
    mcqs: [
      {
        question:
          "The limit comparison test requires $L = \\lim a_n/b_n$ to satisfy:",
        options: ["$L = 0$", "$L = \\infty$", "$0 < L < \\infty$", "$L < 1$"],
        answerIndex: 2,
        explanation:
          "The limit comparison test applies when $0 < L < \\infty$. If $L = 0$ or $L = \\infty$, the test gives partial information but not the symmetric convergence conclusion.",
      },
      {
        question:
          "Use limit comparison to determine the behavior of $\\sum_{n=1}^\\infty \\dfrac{n^2+1}{n^4+3}$.",
        options: [
          "Diverges, compared to $\\sum 1/n^2$.",
          "Converges, compared to $\\sum 1/n^2$.",
          "Diverges, compared to $\\sum 1/n$.",
          "Converges, compared to $\\sum 1/n^4$.",
        ],
        answerIndex: 1,
        explanation:
          "Dominant terms: $(n^2)/(n^4) = 1/n^2$. $\\lim (n^2+1)/(n^4+3) \\cdot n^2 = \\lim (n^4+n^2)/(n^4+3) = 1$. Since $0<1<\\infty$ and $\\sum 1/n^2$ converges ($p=2$), the original series converges.",
      },
    ],
  },
  {
    id: "alternating-series-test",
    name: "Alternating Series Test (Leibniz)",
    unit: "Unit 10: Infinite Sequences and Series",
    unitNumber: 10,
    tags: ["BC only", "MCQ frequent", "FRQ"],
    summary:
      "An alternating series converges if its terms are eventually decreasing in absolute value and approach zero.",
    description:
      "The alternating series test (Leibniz criterion) states that $\\sum (-1)^{n+1} b_n$ converges if (1) $b_n > 0$, (2) $b_n$ is eventually decreasing ($b_{n+1} \\le b_n$), and (3) $\\lim_{n\\to\\infty} b_n = 0$. All three conditions must be verified. This test does not require absolute convergence.",
    steps: [
      "Write the series in the form $\\sum (-1)^{n+1} b_n$ with $b_n > 0$.",
      "Verify that $b_{n+1} \\le b_n$ for all sufficiently large $n$ (terms are decreasing).",
      "Verify that $\\lim_{n\\to\\infty} b_n = 0$.",
      "If both conditions hold, conclude the alternating series converges.",
    ],
    examples: [
      {
        problem:
          "Does the alternating harmonic series $\\sum_{n=1}^\\infty \\dfrac{(-1)^{n+1}}{n}$ converge?",
        solution:
          "Here $b_n = 1/n$. (1) $b_n > 0$. (2) $1/(n+1) < 1/n$, so decreasing. (3) $1/n \\to 0$. All three conditions hold, so the series converges (to $\\ln 2$).",
      },
    ],
    mcqs: [
      {
        question: "Which condition is NOT part of the alternating series test?",
        options: [
          "$b_n > 0$",
          "$b_{n+1} \\le b_n$ (decreasing)",
          "$\\lim_{n\\to\\infty} b_n = 0$",
          "The series must be absolutely convergent",
        ],
        answerIndex: 3,
        explanation:
          "The alternating series test does not require absolute convergence — in fact, the alternating harmonic series converges conditionally but not absolutely. The three conditions needed are positivity, decreasing terms, and limit zero.",
      },
      {
        question:
          "Does $\\sum_{n=1}^\\infty \\dfrac{(-1)^n n}{n+1}$ converge by the alternating series test?",
        options: [
          "Yes, because terms alternate in sign.",
          "No, because $b_n = n/(n+1) \\to 1 \\neq 0$.",
          "Yes, because $b_n$ is decreasing.",
          "Cannot be determined from the alternating series test.",
        ],
        answerIndex: 1,
        explanation:
          "$b_n = n/(n+1) \\to 1 \\neq 0$, so the third condition fails. In fact, by the nth-term divergence test, since the terms do not approach zero, the series diverges.",
      },
    ],
  },
  {
    id: "alternating-series-error-bound",
    name: "Alternating Series Error Bound",
    unit: "Unit 10: Infinite Sequences and Series",
    unitNumber: 10,
    tags: ["BC only", "MCQ frequent", "FRQ"],
    summary:
      "The error in a partial sum of a convergent alternating series is at most the absolute value of the first omitted term.",
    formula: "|R_N|\\le a_{N+1}",
    description:
      "If an alternating series satisfies the conditions of the Leibniz test, then the absolute error (remainder) $|R_N| = |S - S_N|$ satisfies $|R_N| \\le b_{N+1}$, where $b_{N+1}$ is the first omitted term. The true sum lies between any two consecutive partial sums, and the partial sums alternately overshoot and undershoot the true sum.",
    steps: [
      "Confirm the series satisfies the alternating series test (positive, decreasing, limit zero).",
      "Write $N$ terms in the partial sum $S_N$.",
      "The error satisfies $|S - S_N| \\le b_{N+1}$, the absolute value of the $(N+1)$th term.",
      "To achieve error $< \\varepsilon$, find the smallest $N$ such that $b_{N+1} < \\varepsilon$.",
    ],
    examples: [
      {
        problem:
          "Approximate $\\sum_{n=1}^\\infty \\dfrac{(-1)^{n+1}}{n^2}$ using 4 terms and bound the error.",
        solution:
          "$S_4 = 1 - 1/4 + 1/9 - 1/16 = 0.7986...$. The error satisfies $|R_4| \\le b_5 = 1/25 = 0.04$. So the true sum is within $0.04$ of $0.7986$.",
      },
    ],
    mcqs: [
      {
        question:
          "For the series $\\sum_{n=1}^\\infty \\dfrac{(-1)^{n+1}}{n^3}$, how many terms are needed to guarantee error less than $0.005$?",
        options: ["$N = 3$", "$N = 4$", "$N = 5$", "$N = 6$"],
        answerIndex: 2,
        explanation:
          "We need $b_{N+1} = 1/(N+1)^3 < 0.005$, so $(N+1)^3 > 200$, giving $N+1 > 5.85$, so $N+1 = 6$ meaning $N = 5$. Check: $b_6 = 1/216 \\approx 0.0046 < 0.005$.",
      },
      {
        question:
          "The alternating series error bound guarantees that $|S - S_N|$ is:",
        options: [
          "Less than or equal to $b_N$, the last included term.",
          "Less than or equal to $b_{N+1}$, the first omitted term.",
          "Exactly equal to $b_{N+1}$.",
          "Less than $b_N - b_{N+1}$.",
        ],
        answerIndex: 1,
        explanation:
          "The error bound states $|R_N| \\le b_{N+1}$, the absolute value of the first omitted term. This is not $b_N$ (the last included term) and is an upper bound, not the exact error.",
      },
    ],
  },
  {
    id: "ratio-test",
    name: "Ratio Test",
    unit: "Unit 10: Infinite Sequences and Series",
    unitNumber: 10,
    tags: ["BC only", "MCQ frequent", "FRQ"],
    summary:
      "The ratio test uses the limit of successive term ratios to determine convergence; $L < 1$ means converge, $L > 1$ means diverge.",
    formula: "L=\\lim_{n\\to\\infty}\\left|\\frac{a_{n+1}}{a_n}\\right|",
    description:
      "The ratio test states: compute $L = \\lim_{n\\to\\infty}|a_{n+1}/a_n|$. If $L < 1$, the series converges absolutely; if $L > 1$ (or $L = \\infty$), the series diverges; if $L = 1$, the test is inconclusive. It is most powerful for series involving factorials or exponentials.",
    steps: [
      "Form the ratio $\\left|\\dfrac{a_{n+1}}{a_n}\\right|$ and simplify.",
      "Take the limit $L = \\lim_{n\\to\\infty}\\left|\\dfrac{a_{n+1}}{a_n}\\right|$.",
      "If $L < 1$: series converges absolutely.",
      "If $L > 1$ or $L = \\infty$: series diverges. If $L = 1$: test is inconclusive, try another test.",
    ],
    examples: [
      {
        problem:
          "Test $\\sum_{n=0}^\\infty \\dfrac{2^n}{n!}$ for convergence using the ratio test.",
        solution:
          "$\\left|\\dfrac{a_{n+1}}{a_n}\\right| = \\dfrac{2^{n+1}/(n+1)!}{2^n/n!} = \\dfrac{2}{n+1} \\to 0 < 1$. The series converges absolutely.",
      },
    ],
    mcqs: [
      {
        question:
          "Apply the ratio test to $\\sum_{n=1}^\\infty \\dfrac{n!}{5^n}$. What is $L$?",
        options: ["$0$", "$1/5$", "$\\infty$", "$5$"],
        answerIndex: 2,
        explanation:
          "$|a_{n+1}/a_n| = (n+1)!/5^{n+1} \\cdot 5^n/n! = (n+1)/5 \\to \\infty$. Since $L = \\infty > 1$, the series diverges.",
      },
      {
        question:
          "When the ratio test gives $L = 1$, the correct conclusion is:",
        options: [
          "The series converges.",
          "The series diverges.",
          "The series converges absolutely.",
          "The test is inconclusive; another test must be used.",
        ],
        answerIndex: 3,
        explanation:
          "When $L = 1$, the ratio test provides no information. Both convergent series (like $\\sum 1/n^2$) and divergent series (like $\\sum 1/n$) can give $L = 1$.",
      },
    ],
  },
  {
    id: "absolute-conditional-convergence",
    name: "Absolute and Conditional Convergence",
    unit: "Unit 10: Infinite Sequences and Series",
    unitNumber: 10,
    tags: ["BC only", "MCQ frequent"],
    summary:
      "A series converges absolutely if $\\sum |a_n|$ converges; it converges conditionally if it converges but not absolutely.",
    description:
      "A series $\\sum a_n$ is absolutely convergent if $\\sum |a_n|$ converges, and absolute convergence implies convergence. A series is conditionally convergent if $\\sum a_n$ converges but $\\sum |a_n|$ diverges. The alternating harmonic series is the standard example of conditional convergence.",
    steps: [
      "Test $\\sum |a_n|$ for convergence using an appropriate test.",
      "If $\\sum |a_n|$ converges, the original series converges absolutely.",
      "If $\\sum |a_n|$ diverges but $\\sum a_n$ converges (e.g., by the alternating series test), then convergence is conditional.",
      "If both $\\sum |a_n|$ and $\\sum a_n$ diverge, the series diverges.",
    ],
    examples: [
      {
        problem:
          "Classify $\\sum_{n=1}^\\infty \\dfrac{(-1)^{n+1}}{n}$ as absolutely convergent, conditionally convergent, or divergent.",
        solution:
          "$\\sum |a_n| = \\sum 1/n$ diverges (harmonic series). But $\\sum (-1)^{n+1}/n$ converges by the alternating series test. Therefore the series is conditionally convergent.",
      },
    ],
    mcqs: [
      {
        question: "Which of the following is true about absolute convergence?",
        options: [
          "Absolute convergence implies conditional convergence.",
          "Absolute convergence implies convergence of the original series.",
          "Conditional convergence implies absolute convergence.",
          "A series can converge absolutely without converging.",
        ],
        answerIndex: 1,
        explanation:
          "Absolute convergence (convergence of $\\sum |a_n|$) implies convergence of $\\sum a_n$. The converse is false: a series can converge without converging absolutely (conditional convergence).",
      },
      {
        question: "The series $\\sum_{n=1}^\\infty \\dfrac{(-1)^n}{n^2}$ is:",
        options: [
          "Divergent",
          "Conditionally convergent only",
          "Absolutely convergent",
          "Neither convergent nor divergent",
        ],
        answerIndex: 2,
        explanation:
          "$\\sum |(-1)^n/n^2| = \\sum 1/n^2$ is a convergent $p$-series ($p=2$). Since $\\sum |a_n|$ converges, the series is absolutely convergent.",
      },
    ],
  },
  {
    id: "power-series",
    name: "Power Series",
    unit: "Unit 10: Infinite Sequences and Series",
    unitNumber: 10,
    tags: ["BC only", "MCQ frequent", "FRQ"],
    summary:
      "A power series is an infinite polynomial centered at $a$ that converges on an interval determined by its radius of convergence.",
    formula: "\\sum_{n=0}^\\infty c_n(x-a)^n",
    description:
      "A power series $\\sum_{n=0}^\\infty c_n(x-a)^n$ is centered at $x = a$ with coefficients $c_n$. It converges for all $x$ in some interval $(a-R, a+R)$ where $R$ is the radius of convergence, and may or may not converge at the endpoints. Within its interval of convergence, a power series defines a function that can be differentiated and integrated term by term.",
    steps: [
      "Identify the center $a$ and the general coefficient $c_n$.",
      "Apply the ratio test: compute $L = \\lim_{n\\to\\infty} |c_{n+1}(x-a)^{n+1} / (c_n(x-a)^n)|$.",
      "Solve $L < 1$ for $x$ to find the open interval of convergence; this gives $R = 1/\\lim|c_{n+1}/c_n|$.",
      "Check endpoints separately by substituting $x = a \\pm R$ into the series.",
    ],
    examples: [
      {
        problem:
          "Find the interval of convergence of $\\sum_{n=0}^\\infty \\dfrac{x^n}{n+1}$.",
        solution:
          "Ratio test: $|a_{n+1}/a_n| = |x|(n+1)/(n+2) \\to |x|$. Converges when $|x| < 1$, so $R = 1$. At $x = 1$: $\\sum 1/(n+1)$ diverges. At $x = -1$: $\\sum (-1)^n/(n+1)$ converges by AST. Interval of convergence: $[-1, 1)$.",
      },
    ],
    mcqs: [
      {
        question:
          "A power series $\\sum c_n x^n$ converges at $x = 3$ and diverges at $x = 5$. Which is certain?",
        options: [
          "It converges at $x = -4$.",
          "It converges at $x = 2$.",
          "It diverges at $x = -3$.",
          "It diverges at $x = 4$.",
        ],
        answerIndex: 1,
        explanation:
          "Convergence at $x=3$ means $R \\ge 3$, so the series converges at least on $(-3, 3)$. Thus $x = 2$ is definitely inside the interval. We cannot conclude about $x = -4$ (may be outside), nor is $x = -3$ or $x = 4$ certain without knowing $R$ exactly.",
      },
      {
        question: "Within its interval of convergence, a power series can be:",
        options: [
          "Differentiated term by term only",
          "Integrated term by term only",
          "Both differentiated and integrated term by term",
          "Neither differentiated nor integrated",
        ],
        answerIndex: 2,
        explanation:
          "Within the open interval of convergence, a power series can be both differentiated and integrated term by term, and the resulting series has the same radius of convergence.",
      },
    ],
  },
  {
    id: "radius-of-convergence",
    name: "Radius and Interval of Convergence",
    unit: "Unit 10: Infinite Sequences and Series",
    unitNumber: 10,
    tags: ["BC only", "MCQ frequent", "FRQ"],
    summary:
      "The radius of convergence $R$ defines where a power series converges; endpoint behavior must be checked separately.",
    description:
      "For a power series $\\sum c_n(x-a)^n$, the radius of convergence $R$ is found using the ratio or root test: $1/R = \\lim |c_{n+1}/c_n|$ (ratio test). The series converges absolutely for $|x - a| < R$, diverges for $|x - a| > R$, and requires separate endpoint tests at $x = a \\pm R$. The interval of convergence may be open, half-open, or closed depending on endpoint behavior.",
    steps: [
      "Use the ratio test on the power series to find $L = \\lim |a_{n+1}/a_n|$ in terms of $x$.",
      "Set $L < 1$ and solve for $|x - a| < R$ to identify $R$.",
      "Substitute $x = a + R$ and $x = a - R$ individually into the series.",
      "Determine convergence at each endpoint using an appropriate series test; state the interval of convergence.",
    ],
    examples: [
      {
        problem:
          "Find the radius and interval of convergence of $\\sum_{n=1}^\\infty \\dfrac{(x-2)^n}{n \\cdot 3^n}$.",
        solution:
          "Ratio test: $L = |x-2|/3$. Converges when $|x-2| < 3$, so $R = 3$, centered at 2. At $x=5$: $\\sum 1/n$ diverges. At $x=-1$: $\\sum (-1)^n/n$ converges (AST). Interval: $[-1, 5)$.",
      },
    ],
    mcqs: [
      {
        question:
          "The power series $\\sum_{n=0}^\\infty n! \\, x^n$ has radius of convergence:",
        options: ["$R = \\infty$", "$R = 1$", "$R = 0$", "$R = e$"],
        answerIndex: 2,
        explanation:
          "Ratio test: $|(n+1)!x^{n+1}/(n!x^n)| = (n+1)|x| \\to \\infty$ for any $x \\neq 0$. The series converges only at $x = 0$, so $R = 0$.",
      },
      {
        question:
          "A power series has $R = 4$ centered at $x = 1$. At which $x$-value is convergence guaranteed?",
        options: ["$x = 6$", "$x = -4$", "$x = 3$", "$x = -3$"],
        answerIndex: 2,
        explanation:
          "The series converges for $|x-1| < 4$, i.e., $-3 < x < 5$. $x = 3$ satisfies $|3-1| = 2 < 4$. $x = 6$: $|6-1|=5>4$ (diverges). $x=-4$: $|-4-1|=5>4$ (diverges). $x=-3$: $|-3-1|=4$ (endpoint, not guaranteed).",
      },
    ],
  },
  {
    id: "taylor-polynomial",
    name: "Taylor Polynomials (Degree-n Approximation)",
    unit: "Unit 10: Infinite Sequences and Series",
    unitNumber: 10,
    tags: ["BC only", "MCQ frequent", "FRQ"],
    summary:
      "A Taylor polynomial of degree $n$ approximates a function near $x = a$ using derivatives at that point.",
    formula: "P_n(x)=\\sum_{k=0}^n\\frac{f^{(k)}(a)}{k!}(x-a)^k",
    description:
      "The degree-$n$ Taylor polynomial of $f$ centered at $a$ is $P_n(x) = f(a) + f'(a)(x-a) + \\dfrac{f''(a)}{2!}(x-a)^2 + \\cdots + \\dfrac{f^{(n)}(a)}{n!}(x-a)^n$. It matches $f$ and its first $n$ derivatives at $x = a$. Centered at $a = 0$, it is called a Maclaurin polynomial.",
    steps: [
      "Compute $f(a), f'(a), f''(a), \\ldots, f^{(n)}(a)$.",
      "Substitute into the formula: $P_n(x) = \\sum_{k=0}^n \\dfrac{f^{(k)}(a)}{k!}(x-a)^k$.",
      "Simplify each term $\\dfrac{f^{(k)}(a)}{k!}(x-a)^k$.",
      "Use $P_n(x)$ to approximate $f(x)$ for $x$ near $a$; accuracy improves with higher degree $n$.",
    ],
    examples: [
      {
        problem: "Find the degree-3 Maclaurin polynomial for $f(x) = e^x$.",
        solution:
          "$f(0)=1, f'(0)=1, f''(0)=1, f'''(0)=1$. So $P_3(x) = 1 + x + \\dfrac{x^2}{2!} + \\dfrac{x^3}{3!} = 1 + x + \\dfrac{x^2}{2} + \\dfrac{x^3}{6}$.",
      },
    ],
    mcqs: [
      {
        question:
          "What is the degree-2 Taylor polynomial for $f(x) = \\cos x$ centered at $x = 0$?",
        options: [
          "$1 - x$",
          "$1 - \\dfrac{x^2}{2}$",
          "$1 - x + \\dfrac{x^2}{2}$",
          "$x - \\dfrac{x^3}{6}$",
        ],
        answerIndex: 1,
        explanation:
          "$f(0)=1, f'(0)=\\sin(0)\\cdot(-1)=0$ (actually $f'(x)=-\\sin x$, $f'(0)=0$), $f''(0)=-\\cos(0)=-1$. $P_2(x)=1+0\\cdot x + (-1)/2! \\cdot x^2 = 1 - x^2/2$.",
      },
      {
        question:
          "The coefficient of $(x-a)^3$ in the Taylor polynomial of $f$ centered at $a$ is:",
        options: [
          "$f'''(a)$",
          "$\\dfrac{f'''(a)}{3}$",
          "$\\dfrac{f'''(a)}{6}$",
          "$3f'''(a)$",
        ],
        answerIndex: 2,
        explanation:
          "The general term is $\\dfrac{f^{(k)}(a)}{k!}(x-a)^k$. For $k=3$: coefficient is $\\dfrac{f'''(a)}{3!} = \\dfrac{f'''(a)}{6}$.",
      },
    ],
  },
  {
    id: "maclaurin-common-series",
    name: "Common Maclaurin Series",
    unit: "Unit 10: Infinite Sequences and Series",
    unitNumber: 10,
    tags: ["BC only", "MCQ frequent", "FRQ"],
    summary:
      "Memorize the Maclaurin series for $e^x$, $\\sin x$, $\\cos x$, and $1/(1-x)$; they form the basis for many series problems.",
    formula:
      "e^x=\\sum_{n=0}^\\infty\\frac{x^n}{n!},\\quad\\sin x=\\sum_{n=0}^\\infty\\frac{(-1)^n x^{2n+1}}{(2n+1)!}",
    description:
      "The four essential Maclaurin series are: $e^x = \\sum x^n/n!$ (converges everywhere), $\\sin x = \\sum (-1)^n x^{2n+1}/(2n+1)!$ (converges everywhere), $\\cos x = \\sum (-1)^n x^{2n}/(2n)!$ (converges everywhere), and $\\dfrac{1}{1-x} = \\sum x^n$ ($|x|<1$). These are foundational for substitution and manipulation problems.",
    steps: [
      "Memorize: $e^x = 1 + x + x^2/2! + x^3/3! + \\cdots$",
      "Memorize: $\\sin x = x - x^3/3! + x^5/5! - \\cdots$ (odd powers, alternating)",
      "Memorize: $\\cos x = 1 - x^2/2! + x^4/4! - \\cdots$ (even powers, alternating)",
      "Memorize: $1/(1-x) = 1 + x + x^2 + x^3 + \\cdots$ for $|x| < 1$; use substitution to generate related series.",
    ],
    examples: [
      {
        problem:
          "Write the first four nonzero terms of the Maclaurin series for $\\sin(x^2)$.",
        solution:
          "Replace $x$ with $x^2$ in $\\sin x = x - x^3/3! + x^5/5! - \\cdots$: $\\sin(x^2) = x^2 - \\dfrac{x^6}{6} + \\dfrac{x^{10}}{120} - \\cdots$",
      },
    ],
    mcqs: [
      {
        question: "The Maclaurin series for $e^{-x}$ is:",
        options: [
          "$\\sum_{n=0}^\\infty \\dfrac{x^n}{n!}$",
          "$\\sum_{n=0}^\\infty \\dfrac{(-1)^n x^n}{n!}$",
          "$\\sum_{n=0}^\\infty (-x^n)$",
          "$\\sum_{n=0}^\\infty \\dfrac{(-1)^n x^{2n}}{(2n)!}$",
        ],
        answerIndex: 1,
        explanation:
          "Substitute $-x$ for $x$ in $e^x = \\sum x^n/n!$: $e^{-x} = \\sum (-x)^n/n! = \\sum (-1)^n x^n / n!$. Option D is the series for $\\cos x$.",
      },
      {
        question: "The Maclaurin series for $\\cos x$ contains only:",
        options: [
          "Odd powers of $x$",
          "Even powers of $x$",
          "All powers of $x$",
          "Powers of $x^2$ only starting at $x^2$",
        ],
        answerIndex: 1,
        explanation:
          "$\\cos x = \\sum_{n=0}^\\infty (-1)^n x^{2n}/(2n)! = 1 - x^2/2 + x^4/24 - \\cdots$ contains only even powers (including the constant term $x^0 = 1$).",
      },
    ],
  },
  {
    id: "taylor-series",
    name: "Taylor Series (General)",
    unit: "Unit 10: Infinite Sequences and Series",
    unitNumber: 10,
    tags: ["BC only", "MCQ frequent", "FRQ"],
    summary:
      "The Taylor series of $f$ centered at $a$ represents $f(x)$ as an infinite sum of powers of $(x-a)$, valid within the interval of convergence.",
    formula: "f(x)=\\sum_{n=0}^\\infty\\frac{f^{(n)}(a)}{n!}(x-a)^n",
    description:
      "The Taylor series of $f$ about $x = a$ is $\\sum_{n=0}^\\infty \\dfrac{f^{(n)}(a)}{n!}(x-a)^n$. When $a = 0$ it is called a Maclaurin series. For the series to equal $f(x)$ at a given $x$, the remainder $R_n(x) \\to 0$ as $n \\to \\infty$. Taylor series are used to compute limits, integrals, and approximate function values.",
    steps: [
      "Choose the center $a$ and compute $f(a), f'(a), f''(a), \\ldots$ for as many terms as needed.",
      "Write the general term $\\dfrac{f^{(n)}(a)}{n!}(x-a)^n$ and identify the pattern.",
      "Express the series in sigma notation: $\\sum_{n=0}^\\infty \\dfrac{f^{(n)}(a)}{n!}(x-a)^n$.",
      "State the radius of convergence (found via ratio test) and check endpoints if needed.",
    ],
    examples: [
      {
        problem:
          "Find the Taylor series for $f(x) = \\ln x$ centered at $a = 1$.",
        solution:
          "$f(1)=0, f'(1)=1, f''(1)=-1, f'''(1)=2, f^{(4)}(1)=-6$. General pattern: $f^{(n)}(1) = (-1)^{n+1}(n-1)!$ for $n \\ge 1$. Series: $\\ln x = \\sum_{n=1}^\\infty \\dfrac{(-1)^{n+1}}{n}(x-1)^n$, valid for $0 < x \\le 2$.",
      },
    ],
    mcqs: [
      {
        question:
          "The Taylor series of $f(x)$ centered at $a$ converges to $f(x)$ at a given $x$ when:",
        options: [
          "$f$ has derivatives of all orders at $a$.",
          "The remainder $R_n(x) \\to 0$ as $n \\to \\infty$.",
          "$x$ is in the interval $(a-1, a+1)$.",
          "The series converges by the ratio test.",
        ],
        answerIndex: 1,
        explanation:
          "Having derivatives of all orders guarantees the series can be written, but convergence to $f(x)$ requires the remainder $R_n(x) \\to 0$. The ratio test determines the radius of convergence but the series must equal $f(x)$, not just converge.",
      },
      {
        question:
          "The coefficient of $(x-1)^2$ in the Taylor series of $f(x) = e^x$ centered at $x=1$ is:",
        options: ["$e$", "$e/2$", "$e/6$", "$1/2$"],
        answerIndex: 1,
        explanation: "Coefficient of $(x-1)^2$ is $f''(1)/2! = e^1/2 = e/2$.",
      },
    ],
  },
  {
    id: "lagrange-error-bound",
    name: "Lagrange Error Bound",
    unit: "Unit 10: Infinite Sequences and Series",
    unitNumber: 10,
    tags: ["BC only", "MCQ frequent", "FRQ"],
    summary:
      "The Lagrange error bound gives a guaranteed upper bound on the error when approximating $f(x)$ by its degree-$n$ Taylor polynomial.",
    formula: "|R_n(x)|\\le\\frac{M|x-a|^{n+1}}{(n+1)!}",
    description:
      "If $P_n(x)$ is the degree-$n$ Taylor polynomial of $f$ centered at $a$, and $|f^{(n+1)}(t)| \\le M$ for all $t$ between $a$ and $x$, then the remainder satisfies $|R_n(x)| = |f(x) - P_n(x)| \\le \\dfrac{M|x-a|^{n+1}}{(n+1)!}$. The key step is bounding the $(n+1)$th derivative on the relevant interval.",
    steps: [
      "Identify $n$, the degree of the Taylor polynomial, and the center $a$.",
      "Find $f^{(n+1)}(t)$ and bound it: determine $M = \\max|f^{(n+1)}(t)|$ for $t$ between $a$ and $x$.",
      "Apply the bound: $|R_n(x)| \\le \\dfrac{M|x-a|^{n+1}}{(n+1)!}$.",
      "Interpret the result: the true value $f(x)$ differs from $P_n(x)$ by at most this amount.",
    ],
    examples: [
      {
        problem:
          "Use $P_3(x) = 1 + x + x^2/2 + x^3/6$ to approximate $e^{0.1}$ and bound the error.",
        solution:
          "$|R_3(0.1)| \\le \\dfrac{M|0.1|^4}{4!}$ where $M = \\max e^t$ for $t \\in [0, 0.1]$. Since $e^t < e^{0.1} < 2$, use $M = 2$: $|R_3| \\le 2(0.1)^4/24 = 2(0.0001)/24 \\approx 0.0000083$.",
      },
    ],
    mcqs: [
      {
        question:
          "In the Lagrange error bound $|R_n(x)| \\le \\dfrac{M|x-a|^{n+1}}{(n+1)!}$, $M$ represents:",
        options: [
          "The maximum value of $|f^{(n)}|$ between $a$ and $x$",
          "The maximum value of $|f^{(n+1)}|$ between $a$ and $x$",
          "The number of terms in the polynomial",
          "The value $f^{(n+1)}(a)$",
        ],
        answerIndex: 1,
        explanation:
          "$M$ is an upper bound for the absolute value of the $(n+1)$th derivative on the interval between $a$ and $x$. It is the $(n+1)$th derivative — one order higher than the degree of the polynomial.",
      },
      {
        question:
          "The degree-2 Maclaurin polynomial for $\\sin x$ is used to approximate $\\sin(0.2)$. The Lagrange error bound gives $|R_2(0.2)| \\le$:",
        options: [
          "$\\dfrac{(0.2)^3}{6}$",
          "$\\dfrac{(0.2)^2}{2}$",
          "$\\dfrac{(0.2)^3}{3}$",
          "$\\dfrac{(0.2)^4}{24}$",
        ],
        answerIndex: 0,
        explanation:
          "The degree-2 polynomial for $\\sin x$ is $P_2(x) = x$ (since $\\sin''(0)=0$, the $x^2$ term vanishes). $f^{(3)}(x) = -\\cos x$, so $M=1$. $|R_2(0.2)| \\le 1 \\cdot (0.2)^3/3! = (0.2)^3/6$.",
      },
    ],
  },
  {
    id: "series-manipulation",
    name: "Manipulating Series (substitution, differentiation, integration)",
    unit: "Unit 10: Infinite Sequences and Series",
    unitNumber: 10,
    tags: ["BC only", "FRQ"],
    summary:
      "Known power series can be adapted by substitution, term-by-term differentiation, or term-by-term integration to find new series representations.",
    description:
      "Starting from a known Maclaurin series, you can substitute expressions for $x$, differentiate term by term, or integrate term by term to obtain power series for related functions. Differentiation and integration of power series are valid within the open interval of convergence and the resulting series has the same radius of convergence, though endpoint behavior may change.",
    steps: [
      "Start from a known series (e.g., $1/(1-x)$, $e^x$, $\\sin x$, $\\cos x$).",
      "For substitution: replace $x$ with an expression (e.g., $-x^2$) and simplify term by term.",
      "For differentiation: differentiate both sides term by term; the coefficient of $x^n$ becomes $n c_n x^{n-1}$.",
      "For integration: integrate both sides term by term; the constant of integration is determined by the initial condition.",
    ],
    examples: [
      {
        problem:
          "Find the power series for $\\arctan x$ by integrating the series for $\\dfrac{1}{1+x^2}$.",
        solution:
          "Start with $\\dfrac{1}{1-u} = \\sum u^n$. Substitute $u = -x^2$: $\\dfrac{1}{1+x^2} = \\sum_{n=0}^\\infty (-1)^n x^{2n}$. Integrate: $\\arctan x = \\sum_{n=0}^\\infty \\dfrac{(-1)^n x^{2n+1}}{2n+1} = x - \\dfrac{x^3}{3} + \\dfrac{x^5}{5} - \\cdots$, valid for $|x| \\le 1$.",
      },
    ],
    mcqs: [
      {
        question:
          "To find the power series for $xe^{x^2}$, the best strategy is:",
        options: [
          "Compute derivatives of $xe^{x^2}$ at $x=0$ directly.",
          "Substitute $x^2$ for $x$ in the series for $e^x$, then multiply by $x$.",
          "Integrate the series for $e^{x^2}$.",
          "Differentiate the series for $e^{x^2}$.",
        ],
        answerIndex: 1,
        explanation:
          "Replace $x$ with $x^2$ in $e^x = \\sum x^n/n!$ to get $e^{x^2} = \\sum x^{2n}/n!$, then multiply each term by $x$: $xe^{x^2} = \\sum x^{2n+1}/n!$. This is faster than repeated differentiation.",
      },
      {
        question:
          "Differentiating $\\dfrac{1}{1-x} = \\sum_{n=0}^\\infty x^n$ term by term gives:",
        options: [
          "$\\dfrac{1}{(1-x)^2} = \\sum_{n=0}^\\infty x^n$",
          "$\\dfrac{1}{(1-x)^2} = \\sum_{n=1}^\\infty n x^{n-1}$",
          "$\\dfrac{-1}{(1-x)^2} = \\sum_{n=1}^\\infty n x^{n-1}$",
          "$\\dfrac{1}{(1-x)^2} = \\sum_{n=0}^\\infty (n+1) x^n$",
        ],
        answerIndex: 1,
        explanation:
          "Differentiating both sides: $d/dx[1/(1-x)] = 1/(1-x)^2$ and $d/dx[\\sum x^n] = \\sum_{n=1}^\\infty n x^{n-1}$. Both options B and D are correct representations (they are the same series reindexed), but B directly matches the term-by-term derivative without reindexing.",
      },
    ],
  },
];
