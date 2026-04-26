export default [
  {
    id: "chain-rule",
    name: "Chain Rule",
    unit: "Unit 3: Differentiation — Composite, Implicit, Inverse",
    unitNumber: 3,
    tags: ["MCQ frequent"],
    summary:
      "The chain rule differentiates composite functions by multiplying the derivative of the outer function by the derivative of the inner function.",
    formula: "\\frac{d}{dx}[f(g(x))]=f'(g(x))\\cdot g'(x)",
    graph: {
      type: "fns",
      fns: [
        { fn: "sin(x*x)", color: "blue", label: "sin(x²)" },
        { fn: "2*x*cos(x*x)", color: "green", label: "2x·cos(x²)" },
      ],
      xDomain: [-3, 3],
      yDomain: [-2, 2],
      note: "Chain Rule: d/dx[sin(x²)] = cos(x²)·2x. Outer derivative times inner derivative.",
    },
    description:
      "When differentiating a composite function $f(g(x))$, you evaluate the derivative of the outer function $f$ at the inner function $g(x)$, then multiply by the derivative of the inner function $g'(x)$. This rule extends to chains of any length by repeated application. Forgetting to multiply by $g'(x)$ is the single most common chain-rule error on the AP exam.",
    steps: [
      "Identify the outer function $f$ and inner function $g$ so that the expression equals $f(g(x))$.",
      "Differentiate the outer function with respect to its argument, leaving the inner function untouched: compute $f'(g(x))$.",
      "Differentiate the inner function separately: compute $g'(x)$.",
      "Multiply the two results: $\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$.",
      "Simplify the resulting expression and verify every layer of composition has been accounted for.",
    ],
    examples: [
      {
        problem: "Find $\\frac{d}{dx}[\\sin(x^3)]$.",
        solution:
          "Let $f(u) = \\sin u$ and $g(x) = x^3$. Then $f'(u) = \\cos u$ and $g'(x) = 3x^2$. By the chain rule: $\\frac{d}{dx}[\\sin(x^3)] = \\cos(x^3) \\cdot 3x^2 = 3x^2\\cos(x^3)$.",
      },
    ],
    mcqs: [
      {
        question:
          "Which expression correctly describes the chain rule for differentiating $f(g(x))$?",
        options: [
          "$f'(g(x)) \\cdot g'(x)$",
          "$f'(x) \\cdot g'(x)$",
          "$f'(g'(x))$",
          "$f(g'(x)) \\cdot g(x)$",
        ],
        answerIndex: 0,
        explanation:
          "The chain rule states $\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$: the outer derivative evaluated at the inner function times the inner derivative. Option B incorrectly evaluates $f'$ at $x$ rather than $g(x)$. Option C composes instead of multiplies. Option D swaps the roles of $f$ and $g$ entirely.",
      },
      {
        question: "If $h(x) = (3x^2 + 1)^5$, what is $h'(x)$?",
        options: [
          "$5(3x^2+1)^4$",
          "$30x(3x^2+1)^4$",
          "$5 \\cdot 6x \\cdot (3x^2+1)^4$",
          "$10x(3x^2+1)^4$",
        ],
        answerIndex: 1,
        explanation:
          "Let $g(x) = 3x^2+1$, so $g'(x) = 6x$. The outer function is $u^5$ with derivative $5u^4$. Chain rule gives $5(3x^2+1)^4 \\cdot 6x = 30x(3x^2+1)^4$. Option A forgets to multiply by $g'(x) = 6x$. Option C writes the multiplication unsimplified but $5 \\cdot 6x = 30x$, so C equals B — however B is the cleaner correct form. Option D uses $2x$ instead of $6x$ as $g'(x)$.",
      },
    ],
  },
  {
    id: "chain-rule-leibniz",
    name: "Chain Rule — Leibniz Form",
    unit: "Unit 3: Differentiation — Composite, Implicit, Inverse",
    unitNumber: 3,
    tags: ["MCQ frequent"],
    summary:
      "The Leibniz form of the chain rule expresses the derivative of a composition as the product of two rates of change written as fractions.",
    formula: "\\frac{dy}{dx}=\\frac{dy}{du}\\cdot\\frac{du}{dx}",
    description:
      "When $y$ is a function of $u$ and $u$ is a function of $x$, the overall rate of change $\\frac{dy}{dx}$ equals the rate of $y$ with respect to $u$ multiplied by the rate of $u$ with respect to $x$. This notation makes the 'cancellation' of $du$ intuitive and is especially useful when intermediate variables are explicitly named. It generalises naturally to longer chains: $\\frac{dy}{dx} = \\frac{dy}{dw}\\cdot\\frac{dw}{du}\\cdot\\frac{du}{dx}$.",
    steps: [
      "Introduce an intermediate variable: let $u = g(x)$ so that $y = f(u)$.",
      "Compute $\\frac{dy}{du}$ by differentiating $y$ with respect to $u$ (treat $u$ as the variable).",
      "Compute $\\frac{du}{dx}$ by differentiating $u = g(x)$ with respect to $x$.",
      "Multiply: $\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$.",
      "Back-substitute $u = g(x)$ so the final answer is expressed in terms of $x$ alone.",
    ],
    examples: [
      {
        problem:
          "Let $u = e^x$ and $y = u^4$. Find $\\frac{dy}{dx}$ using the Leibniz chain rule.",
        solution:
          "$\\frac{dy}{du} = 4u^3$ and $\\frac{du}{dx} = e^x$. So $\\frac{dy}{dx} = 4u^3 \\cdot e^x = 4(e^x)^3 \\cdot e^x = 4e^{4x}$.",
      },
    ],
    mcqs: [
      {
        question:
          "If $y = f(u)$ and $u = g(x)$, the Leibniz chain rule gives $\\frac{dy}{dx}$ as:",
        options: [
          "$\\frac{dy}{du} + \\frac{du}{dx}$",
          "$\\frac{dy}{du} \\cdot \\frac{du}{dx}$",
          "$\\frac{du}{dy} \\cdot \\frac{dx}{du}$",
          "$\\frac{d}{du}\\left[\\frac{dy}{dx}\\right]$",
        ],
        answerIndex: 1,
        explanation:
          "The Leibniz chain rule multiplies the two rates: $\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$. Option A adds instead of multiplies. Option C inverts both factors, giving $\\frac{dx}{dy}$, not $\\frac{dy}{dx}$. Option D is not a meaningful application of the rule.",
      },
      {
        question:
          "Suppose $u = \\ln x$ and $y = u^2$. What is $\\frac{dy}{dx}$?",
        options: [
          "$2\\ln x$",
          "$\\frac{2\\ln x}{x}$",
          "$\\frac{2}{x}$",
          "$2u \\cdot \\ln x$",
        ],
        answerIndex: 1,
        explanation:
          "$\\frac{dy}{du} = 2u = 2\\ln x$ and $\\frac{du}{dx} = \\frac{1}{x}$. Multiplying gives $\\frac{2\\ln x}{x}$. Option A omits division by $x$. Option C omits the $\\ln x$ factor from $\\frac{dy}{du}$. Option D is not simplified correctly.",
      },
    ],
  },
  {
    id: "implicit-differentiation",
    name: "Implicit Differentiation",
    unit: "Unit 3: Differentiation — Composite, Implicit, Inverse",
    unitNumber: 3,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "Implicit differentiation finds $\\frac{dy}{dx}$ for equations where $y$ cannot be (or is not) isolated as an explicit function of $x$.",
    graph: {
      type: "fns",
      fns: [
        { fn: "sqrt(25-x*x)", color: "blue", label: "x² + y² = 25 (top)" },
        { fn: "-sqrt(25-x*x)", color: "blue", label: "" },
      ],
      xDomain: [-5.5, 5.5],
      yDomain: [-5.5, 5.5],
      note: "Circle x² + y² = 25. Implicit differentiation gives dy/dx = −x/y.",
    },
    description:
      "When an equation relates $x$ and $y$ without solving for $y$ explicitly, differentiate both sides with respect to $x$, treating $y$ as a function of $x$ and applying the chain rule whenever $y$ appears — so $\\frac{d}{dx}[y^n] = ny^{n-1}\\frac{dy}{dx}$. After differentiating, collect all terms containing $\\frac{dy}{dx}$ on one side and solve algebraically. This technique is essential for curves like circles, ellipses, and more exotic relations that fail the vertical-line test globally.",
    steps: [
      "Differentiate both sides of the equation with respect to $x$, term by term.",
      "Apply the chain rule to every term involving $y$: $\\frac{d}{dx}[y^n] = ny^{n-1}\\frac{dy}{dx}$; for products of $x$ and $y$, use the product rule.",
      "Collect all terms containing $\\frac{dy}{dx}$ on the left side and move all other terms to the right.",
      "Factor out $\\frac{dy}{dx}$ from the left side.",
      "Divide both sides by the remaining factor to isolate $\\frac{dy}{dx}$; the answer may contain both $x$ and $y$.",
    ],
    examples: [
      {
        problem: "Find $\\frac{dy}{dx}$ if $x^2 + y^2 = 25$.",
        solution:
          "Differentiate both sides: $2x + 2y\\frac{dy}{dx} = 0$. Solve: $\\frac{dy}{dx} = -\\frac{x}{y}$.",
      },
    ],
    mcqs: [
      {
        question:
          "When differentiating the term $y^3$ with respect to $x$ implicitly, the result is:",
        options: [
          "$3y^2$",
          "$3y^2 \\cdot \\frac{dy}{dx}$",
          "$3x^2 \\cdot \\frac{dy}{dx}$",
          "$3y^2 \\cdot \\frac{dx}{dy}$",
        ],
        answerIndex: 1,
        explanation:
          "By the chain rule, $\\frac{d}{dx}[y^3] = 3y^2 \\cdot \\frac{dy}{dx}$ because $y$ is a function of $x$. Option A forgets the chain-rule factor $\\frac{dy}{dx}$. Option C uses $x$ instead of $y$ in the base. Option D inverts the derivative fraction.",
      },
      {
        question: "Given $x^2 + xy + y^2 = 7$, what is $\\frac{dy}{dx}$?",
        options: [
          "$\\frac{-2x - y}{x + 2y}$",
          "$\\frac{2x + y}{x + 2y}$",
          "$\\frac{-2x - y}{2y}$",
          "$\\frac{2x}{2y + 1}$",
        ],
        answerIndex: 0,
        explanation:
          "Differentiate: $2x + (y + x\\frac{dy}{dx}) + 2y\\frac{dy}{dx} = 0$. Collecting $\\frac{dy}{dx}$ terms: $(x + 2y)\\frac{dy}{dx} = -2x - y$, so $\\frac{dy}{dx} = \\frac{-2x-y}{x+2y}$. Option B has the wrong sign in the numerator. Option C omits the $x$ term in the denominator from the product rule on $xy$. Option D ignores $y$ from the product-rule term entirely.",
      },
    ],
  },
  {
    id: "higher-order-implicit",
    name: "Second Derivative via Implicit Differentiation",
    unit: "Unit 3: Differentiation — Composite, Implicit, Inverse",
    unitNumber: 3,
    tags: ["FRQ"],
    summary:
      "Finding $\\frac{d^2y}{dx^2}$ implicitly requires differentiating $\\frac{dy}{dx}$ (which contains $y$) with respect to $x$ a second time and substituting the first derivative back in.",
    description:
      "After obtaining $\\frac{dy}{dx}$ by implicit differentiation, differentiate that expression again with respect to $x$ to get $\\frac{d^2y}{dx^2}$. Because $\\frac{dy}{dx}$ typically involves both $x$ and $y$, the quotient rule (or product rule) is usually needed, and every occurrence of $\\frac{dy}{dx}$ in the result must be replaced with the expression found in the first step. The final answer is often left in terms of both $x$ and $y$, which is acceptable on the AP exam.",
    steps: [
      "Use implicit differentiation to find $\\frac{dy}{dx}$ in terms of $x$ and $y$.",
      "Differentiate both sides of the equation $\\frac{dy}{dx} = \\text{(expression)}$ with respect to $x$ again, treating $y$ as a function of $x$.",
      "Apply the quotient rule (or product rule) as needed; every $\\frac{d}{dx}[y]$ that appears becomes $\\frac{dy}{dx}$.",
      "Substitute the expression for $\\frac{dy}{dx}$ found in Step 1 into the result to eliminate $\\frac{dy}{dx}$ from the formula.",
      "Simplify; it is fine to leave $\\frac{d^2y}{dx^2}$ in terms of both $x$ and $y$.",
    ],
    examples: [
      {
        problem: "Find $\\frac{d^2y}{dx^2}$ for $x^2 + y^2 = 25$.",
        solution:
          "From implicit differentiation, $\\frac{dy}{dx} = -\\frac{x}{y}$. Differentiate again: $\\frac{d^2y}{dx^2} = -\\frac{y \\cdot 1 - x \\cdot \\frac{dy}{dx}}{y^2} = -\\frac{y - x(-x/y)}{y^2} = -\\frac{y^2 + x^2}{y^3} = -\\frac{25}{y^3}$ (using $x^2+y^2=25$).",
      },
    ],
    mcqs: [
      {
        question:
          "After finding $\\frac{dy}{dx}$ implicitly, what must you do when it appears in the expression for $\\frac{d^2y}{dx^2}$?",
        options: [
          "Leave it as $\\frac{dy}{dx}$ since it is already simplified.",
          "Replace it with its expression in terms of $x$ and $y$ found in the first step.",
          "Set it equal to zero because it is a constant.",
          "Differentiate it again with respect to $y$.",
        ],
        answerIndex: 1,
        explanation:
          "Any remaining $\\frac{dy}{dx}$ in the second-derivative expression must be substituted with the formula obtained in the first step so the answer is written in terms of $x$ and $y$ only. Option A leaves an unsimplified intermediate quantity. Option C is false — $\\frac{dy}{dx}$ is generally not zero. Option D differentiates with respect to the wrong variable.",
      },
      {
        question:
          "For $x^2 + y^2 = 1$, the value of $\\frac{d^2y}{dx^2}$ at the point $(0, 1)$ is:",
        options: ["$0$", "$-1$", "$1$", "$-\\frac{1}{y^3}$"],
        answerIndex: 1,
        explanation:
          "We showed $\\frac{d^2y}{dx^2} = -\\frac{x^2+y^2}{y^3} = -\\frac{1}{y^3}$. At $(0,1)$: $-\\frac{1}{1^3} = -1$. Option A would require $x^2+y^2 = 0$, impossible on the unit circle. Option C has the wrong sign. Option D is the un-evaluated general formula, not the numerical value.",
      },
    ],
  },
  {
    id: "inverse-function-derivative",
    name: "Derivative of an Inverse Function",
    unit: "Unit 3: Differentiation — Composite, Implicit, Inverse",
    unitNumber: 3,
    tags: ["theorem", "MCQ frequent"],
    summary:
      "The derivative of an inverse function at a point equals the reciprocal of the original function's derivative evaluated at the corresponding pre-image.",
    formula: "(f^{-1})'(b)=\\frac{1}{f'(f^{-1}(b))}",
    description:
      "If $f$ is differentiable and one-to-one near a point and $f(a) = b$, then $f^{-1}$ is differentiable at $b$ and $(f^{-1})'(b) = \\frac{1}{f'(a)}$. Graphically, the slope of $f^{-1}$ at $(b, a)$ is the reciprocal of the slope of $f$ at $(a, b)$, reflecting the symmetry across $y = x$. This theorem is used extensively on AP FRQs where the inverse is not given explicitly.",
    steps: [
      "Identify the point $b$ at which you need $(f^{-1})'(b)$.",
      "Find $a = f^{-1}(b)$ by solving $f(a) = b$ (often from a table of values or equation).",
      "Compute $f'(a)$ — differentiate $f$ and evaluate at $a$.",
      "Apply the formula: $(f^{-1})'(b) = \\frac{1}{f'(a)}$.",
      "Check that $f'(a) \\neq 0$; if it equals zero, the inverse is not differentiable at $b$.",
    ],
    examples: [
      {
        problem: "Let $f(x) = x^3 + x$. Find $(f^{-1})'(2)$.",
        solution:
          "First find $a$ such that $f(a) = 2$: $a^3 + a = 2 \\Rightarrow a = 1$. Then $f'(x) = 3x^2 + 1$, so $f'(1) = 4$. Therefore $(f^{-1})'(2) = \\frac{1}{4}$.",
      },
    ],
    mcqs: [
      {
        question: "If $f(3) = 7$ and $f'(3) = 5$, what is $(f^{-1})'(7)$?",
        options: ["$5$", "$\\frac{1}{5}$", "$\\frac{1}{7}$", "$-5$"],
        answerIndex: 1,
        explanation:
          "Since $f(3) = 7$, we have $f^{-1}(7) = 3$. The formula gives $(f^{-1})'(7) = \\frac{1}{f'(3)} = \\frac{1}{5}$. Option A returns $f'(3)$ itself without taking the reciprocal. Option C incorrectly uses the $y$-value $7$ in the denominator. Option D introduces a sign error.",
      },
      {
        question:
          "A function $g$ satisfies $g(2) = 5$ and $g'(x) = \\sqrt{x+2}$ for all $x$. What is $(g^{-1})'(5)$?",
        options: [
          "$\\frac{1}{2}$",
          "$\\sqrt{7}$",
          "$2$",
          "$\\frac{1}{\\sqrt{7}}$",
        ],
        answerIndex: 0,
        explanation:
          "$g^{-1}(5) = 2$ since $g(2)=5$. Then $g'(2) = \\sqrt{2+2} = \\sqrt{4} = 2$. So $(g^{-1})'(5) = \\frac{1}{2}$. Option B gives $g'(5) = \\sqrt{7}$, confusing the input. Option C gives $g'(2)$ without taking the reciprocal. Option D divides 1 by $\\sqrt{7}$, which applies $g'$ at the wrong point.",
      },
    ],
  },
  {
    id: "arcsin-arccos-derivatives",
    name: "Derivatives of arcsin and arccos",
    unit: "Unit 3: Differentiation — Composite, Implicit, Inverse",
    unitNumber: 3,
    tags: ["MCQ frequent"],
    summary:
      "The derivatives of $\\arcsin x$ and $\\arccos x$ are reciprocals of each other in sign, both involving the factor $\\frac{1}{\\sqrt{1-x^2}}$.",
    formula:
      "\\frac{d}{dx}[\\arcsin x]=\\frac{1}{\\sqrt{1-x^2}},\\quad\\frac{d}{dx}[\\arccos x]=-\\frac{1}{\\sqrt{1-x^2}}",
    graph: {
      type: "fns",
      fns: [
        { fn: "asin(x)", color: "blue", label: "arcsin(x)" },
        { fn: "acos(x)", color: "red", label: "arccos(x)" },
      ],
      xDomain: [-1.1, 1.1],
      yDomain: [-2, 3.5],
    },
    description:
      "These formulas are derived by applying the inverse-function derivative rule to $\\sin$ and $\\cos$, using the Pythagorean identity to rewrite $\\cos(\\arcsin x) = \\sqrt{1-x^2}$. The domain is $-1 < x < 1$ for both derivatives. Notably $\\frac{d}{dx}[\\arcsin x] + \\frac{d}{dx}[\\arccos x] = 0$, consistent with the identity $\\arcsin x + \\arccos x = \\frac{\\pi}{2}$.",
    steps: [
      "Recall the formula: $\\frac{d}{dx}[\\arcsin x] = \\frac{1}{\\sqrt{1-x^2}}$ and $\\frac{d}{dx}[\\arccos x] = -\\frac{1}{\\sqrt{1-x^2}}$.",
      "When differentiating a composition such as $\\arcsin(g(x))$, apply the chain rule: multiply by $g'(x)$.",
      "Write the result as $\\frac{g'(x)}{\\sqrt{1-(g(x))^2}}$ for $\\arcsin(g(x))$ or its negative for $\\arccos(g(x))$.",
      "Check that the domain condition $|g(x)| < 1$ is relevant for the context of the problem.",
    ],
    examples: [
      {
        problem: "Find $\\frac{d}{dx}[\\arcsin(3x)]$.",
        solution:
          "By the chain rule: $\\frac{d}{dx}[\\arcsin(3x)] = \\frac{1}{\\sqrt{1-(3x)^2}} \\cdot 3 = \\frac{3}{\\sqrt{1-9x^2}}$.",
      },
    ],
    mcqs: [
      {
        question: "What is $\\frac{d}{dx}[\\arccos x]$?",
        options: [
          "$\\frac{1}{\\sqrt{1-x^2}}$",
          "$-\\frac{1}{\\sqrt{1-x^2}}$",
          "$\\frac{-1}{1+x^2}$",
          "$\\frac{1}{\\sqrt{x^2-1}}$",
        ],
        answerIndex: 1,
        explanation:
          "$\\frac{d}{dx}[\\arccos x] = -\\frac{1}{\\sqrt{1-x^2}}$. Option A is the derivative of $\\arcsin x$, missing the negative sign. Option C is related to $\\arctan$ with a sign error. Option D has the wrong expression under the radical.",
      },
      {
        question: "If $h(x) = \\arcsin(x^2)$, then $h'(x) =$",
        options: [
          "$\\frac{1}{\\sqrt{1-x^4}}$",
          "$\\frac{2x}{\\sqrt{1-x^2}}$",
          "$\\frac{2x}{\\sqrt{1-x^4}}$",
          "$\\frac{x^2}{\\sqrt{1-x^4}}$",
        ],
        answerIndex: 2,
        explanation:
          "Chain rule: $h'(x) = \\frac{1}{\\sqrt{1-(x^2)^2}} \\cdot 2x = \\frac{2x}{\\sqrt{1-x^4}}$. Option A omits the factor $2x$ from the chain rule. Option B substitutes $x$ instead of $x^2$ inside the radical, giving $\\sqrt{1-x^2}$ rather than $\\sqrt{1-x^4}$. Option D uses $x^2$ instead of $2x$ for the inner derivative.",
      },
    ],
  },
  {
    id: "arctan-derivative",
    name: "Derivative of arctan",
    unit: "Unit 3: Differentiation — Composite, Implicit, Inverse",
    unitNumber: 3,
    tags: ["MCQ frequent"],
    summary:
      "The derivative of $\\arctan x$ is $\\frac{1}{1+x^2}$, valid for all real $x$.",
    formula: "\\frac{d}{dx}[\\arctan x]=\\frac{1}{1+x^2}",
    graph: {
      type: "fns",
      fns: [
        { fn: "atan(x)", color: "blue", label: "arctan(x)" },
        { fn: "1/(1+x*x)", color: "red", label: "1/(1+x²)" },
      ],
      xDomain: [-4, 4],
      yDomain: [-2, 2],
    },
    description:
      "This formula follows from the inverse-function derivative theorem applied to $\\tan$: since $\\frac{d}{dx}[\\tan x] = \\sec^2 x = 1 + \\tan^2 x$, the reciprocal at the corresponding point gives $\\frac{1}{1+x^2}$. Unlike the arcsin/arccos derivatives, this formula is defined for all real numbers because the denominator $1+x^2$ is never zero. Combined with the chain rule, it produces antiderivatives of the form $\\frac{1}{a^2+x^2}$, which appear frequently in integration problems.",
    steps: [
      "Recall the formula: $\\frac{d}{dx}[\\arctan x] = \\frac{1}{1+x^2}$.",
      "For a composition $\\arctan(g(x))$, apply the chain rule: $\\frac{d}{dx}[\\arctan(g(x))] = \\frac{g'(x)}{1+(g(x))^2}$.",
      "Substitute and simplify the denominator $(1 + (g(x))^2)$ carefully.",
      "Check whether the problem is asking for a derivative or an antiderivative — $\\int \\frac{1}{1+x^2}\\,dx = \\arctan x + C$ is the reverse direction.",
    ],
    examples: [
      {
        problem: "Find $\\frac{d}{dx}[\\arctan(5x^2)]$.",
        solution:
          "Let $g(x) = 5x^2$, so $g'(x) = 10x$. Then $\\frac{d}{dx}[\\arctan(5x^2)] = \\frac{10x}{1+(5x^2)^2} = \\frac{10x}{1+25x^4}$.",
      },
    ],
    mcqs: [
      {
        question: "Which of the following is $\\frac{d}{dx}[\\arctan x]$?",
        options: [
          "$\\frac{1}{\\sqrt{1-x^2}}$",
          "$\\sec^2 x$",
          "$\\frac{1}{1+x^2}$",
          "$\\frac{-1}{1+x^2}$",
        ],
        answerIndex: 2,
        explanation:
          "$\\frac{d}{dx}[\\arctan x] = \\frac{1}{1+x^2}$. Option A is the derivative of $\\arcsin x$. Option B is the derivative of $\\tan x$, not $\\arctan x$. Option D has an incorrect negative sign; $\\arctan$ is increasing on all of $\\mathbb{R}$ so its derivative is always positive.",
      },
      {
        question:
          "If $f(x) = \\arctan\\!\\left(\\frac{x}{3}\\right)$, what is $f'(x)$?",
        options: [
          "$\\frac{3}{9+x^2}$",
          "$\\frac{1}{9+x^2}$",
          "$\\frac{1}{3(1+x^2)}$",
          "$\\frac{1}{3+x^2}$",
        ],
        answerIndex: 0,
        explanation:
          "Chain rule: $f'(x) = \\frac{1}{1+(x/3)^2} \\cdot \\frac{1}{3} = \\frac{1/3}{1+x^2/9} = \\frac{1/3}{(9+x^2)/9} = \\frac{3}{9+x^2}$. Option B forgets to multiply by the inner derivative $\\frac{1}{3}$. Option C keeps $\\frac{1}{3}$ but uses $1+x^2$ in the denominator instead of $1+(x/3)^2 = (9+x^2)/9$. Option D has neither the correct numerator nor denominator.",
      },
    ],
  },
  {
    id: "general-exp-log-derivatives",
    name: "Derivatives of a^x and log_a x",
    unit: "Unit 3: Differentiation — Composite, Implicit, Inverse",
    unitNumber: 3,
    tags: ["MCQ frequent"],
    summary:
      "General exponential functions $a^x$ differentiate to $a^x \\ln a$, and general logarithms $\\log_a x$ differentiate to $\\frac{1}{x \\ln a}$.",
    formula:
      "\\frac{d}{dx}[a^x]=a^x\\ln a,\\quad\\frac{d}{dx}[\\log_a x]=\\frac{1}{x\\ln a}",
    description:
      "These formulas reduce to the special cases $\\frac{d}{dx}[e^x] = e^x$ and $\\frac{d}{dx}[\\ln x] = \\frac{1}{x}$ when $a = e$ since $\\ln e = 1$. For $a^x$, rewrite as $e^{x \\ln a}$ and differentiate using the chain rule to derive the formula. For $\\log_a x$, use the change-of-base identity $\\log_a x = \\frac{\\ln x}{\\ln a}$ and differentiate $\\ln x$. The factor $\\ln a$ always appears in the denominator for logarithms and multiplied for exponentials.",
    steps: [
      "To differentiate $a^x$: rewrite as $e^{x\\ln a}$, then $\\frac{d}{dx}[e^{x\\ln a}] = e^{x\\ln a} \\cdot \\ln a = a^x \\ln a$.",
      "To differentiate $a^{g(x)}$ (chain rule): $a^{g(x)} \\ln a \\cdot g'(x)$.",
      "To differentiate $\\log_a x$: use change-of-base $\\log_a x = \\frac{\\ln x}{\\ln a}$, then differentiate to get $\\frac{1}{x \\ln a}$.",
      "To differentiate $\\log_a(g(x))$ (chain rule): $\\frac{g'(x)}{g(x)\\ln a}$.",
      "Remember: $\\ln a$ is a constant — it does not depend on $x$ — so treat it as a fixed multiplier.",
    ],
    examples: [
      {
        problem: "Find $\\frac{d}{dx}[3^x + \\log_5 x]$.",
        solution:
          "$\\frac{d}{dx}[3^x] = 3^x \\ln 3$ and $\\frac{d}{dx}[\\log_5 x] = \\frac{1}{x \\ln 5}$. So the derivative is $3^x \\ln 3 + \\frac{1}{x \\ln 5}$.",
      },
    ],
    mcqs: [
      {
        question: "What is $\\frac{d}{dx}[4^x]$?",
        options: [
          "$x \\cdot 4^{x-1}$",
          "$4^x$",
          "$4^x \\ln 4$",
          "$\\frac{4^x}{\\ln 4}$",
        ],
        answerIndex: 2,
        explanation:
          "$\\frac{d}{dx}[4^x] = 4^x \\ln 4$. Option A applies the power rule, which is only valid when the base is a variable and the exponent is a constant — here it is reversed. Option B would be true only if the base were $e$. Option D divides instead of multiplies by $\\ln 4$.",
      },
      {
        question: "If $f(x) = \\log_2(x^3)$, then $f'(x) =$",
        options: [
          "$\\frac{3}{x \\ln 2}$",
          "$\\frac{1}{3x \\ln 2}$",
          "$\\frac{3x^2}{\\ln 2}$",
          "$3\\log_2 x$",
        ],
        answerIndex: 0,
        explanation:
          "Either simplify first: $\\log_2(x^3) = 3\\log_2 x$, so $f'(x) = \\frac{3}{x \\ln 2}$. Or chain rule directly: $\\frac{3x^2}{x^3 \\ln 2} = \\frac{3}{x \\ln 2}$. Option B inverts the 3 factor. Option C forgets to divide by $x^3$ in the chain-rule denominator. Option D differentiates $3\\log_2 x$ as if it were the answer itself rather than computing its derivative.",
      },
    ],
  },
  {
    id: "logarithmic-differentiation",
    name: "Logarithmic Differentiation",
    unit: "Unit 3: Differentiation — Composite, Implicit, Inverse",
    unitNumber: 3,
    tags: ["FRQ"],
    summary:
      "Logarithmic differentiation simplifies differentiating products, quotients, and variable-exponent functions by taking the natural log of both sides before differentiating.",
    description:
      "For functions of the form $y = f(x)^{g(x)}$ or complicated products/quotients, take $\\ln$ of both sides to convert exponents into multiplied factors and products into sums, making differentiation tractable. After differentiating both sides implicitly with respect to $x$ (the left side becomes $\\frac{1}{y}\\frac{dy}{dx}$ by the chain rule), solve for $\\frac{dy}{dx}$ and back-substitute $y$. This technique handles indeterminate-exponent forms like $x^x$ that cannot be differentiated directly by the power rule or exponential rule alone.",
    steps: [
      "Write $y = f(x)$ (or the given expression) and take $\\ln$ of both sides: $\\ln y = \\ln(f(x))$.",
      "Use logarithm laws to expand $\\ln(f(x))$: $\\ln(AB) = \\ln A + \\ln B$, $\\ln(A/B) = \\ln A - \\ln B$, $\\ln(A^k) = k\\ln A$.",
      "Differentiate both sides with respect to $x$; the left side gives $\\frac{1}{y}\\frac{dy}{dx}$ by implicit differentiation.",
      "Solve for $\\frac{dy}{dx}$: multiply both sides by $y$.",
      "Substitute the original expression for $y$ to write the derivative in terms of $x$ alone.",
    ],
    examples: [
      {
        problem: "Find $\\frac{d}{dx}[x^x]$ for $x > 0$.",
        solution:
          "Let $y = x^x$. Then $\\ln y = x \\ln x$. Differentiate: $\\frac{1}{y}\\frac{dy}{dx} = \\ln x + x \\cdot \\frac{1}{x} = \\ln x + 1$. So $\\frac{dy}{dx} = y(\\ln x + 1) = x^x(\\ln x + 1)$.",
      },
    ],
    mcqs: [
      {
        question:
          "The first step in logarithmic differentiation of $y = x^{\\sin x}$ is to write:",
        options: [
          "$y' = \\sin x \\cdot x^{\\sin x - 1}$",
          "$\\ln y = \\sin x \\cdot \\ln x$",
          "$\\ln y = x \\ln(\\sin x)$",
          "$e^y = x^{\\sin x}$",
        ],
        answerIndex: 1,
        explanation:
          "Taking $\\ln$ of both sides gives $\\ln y = \\ln(x^{\\sin x}) = \\sin x \\cdot \\ln x$ by the logarithm power rule. Option A incorrectly applies the power rule to a variable-exponent function. Option C swaps the base and exponent inside the log. Option D introduces $e^y$ without purpose.",
      },
      {
        question:
          "Using logarithmic differentiation, $\\frac{d}{dx}[x^x]$ equals:",
        options: [
          "$x \\cdot x^{x-1}$",
          "$x^x \\cdot \\ln x$",
          "$x^x(1 + \\ln x)$",
          "$x^x \\cdot \\frac{1}{x}$",
        ],
        answerIndex: 2,
        explanation:
          "As derived: $\\ln y = x\\ln x \\Rightarrow \\frac{1}{y}y' = \\ln x + 1 \\Rightarrow y' = x^x(1+\\ln x)$. Option A is the (incorrect) power-rule answer. Option B omits the $+1$ term from differentiating $x\\ln x$. Option D computes $y \\cdot \\frac{d}{dx}[\\ln x]$ without applying the product rule to $x \\ln x$.",
      },
    ],
  },
];
