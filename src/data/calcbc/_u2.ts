export default [
  {
    id: "derivative-limit-def",
    name: "Limit Definition of the Derivative",
    unit: "Unit 2: Differentiation — Definition and Fundamental Properties",
    unitNumber: 2,
    tags: ["MCQ frequent", "theorem"],
    summary:
      "The derivative is defined as the limit of the difference quotient as h approaches zero.",
    formula: "f'(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}",
    description:
      "The derivative $f'(x)$ measures the instantaneous rate of change of $f$ at $x$ and equals the slope of the tangent line at that point. It is formally defined as the limit of the average rate of change (difference quotient) over an interval $[x, x+h]$ as the interval width $h$ shrinks to zero. When this limit exists, we say $f$ is differentiable at $x$.",
    steps: [
      "Write the difference quotient: $\\frac{f(x+h)-f(x)}{h}$.",
      "Substitute the expression for $f(x+h)$ by replacing every $x$ in $f(x)$ with $(x+h)$.",
      "Expand and simplify the numerator, canceling terms so that $h$ is a common factor.",
      "Factor $h$ out of the numerator and cancel with the $h$ in the denominator.",
      "Take the limit as $h \\to 0$ of the simplified expression to obtain $f'(x)$.",
    ],
    examples: [
      {
        problem: "Use the limit definition to find $f'(x)$ for $f(x)=x^2$.",
        solution:
          "$f'(x)=\\lim_{h\\to 0}\\frac{(x+h)^2-x^2}{h}=\\lim_{h\\to 0}\\frac{x^2+2xh+h^2-x^2}{h}=\\lim_{h\\to 0}\\frac{2xh+h^2}{h}=\\lim_{h\\to 0}(2x+h)=2x$.",
      },
    ],
    mcqs: [
      {
        question:
          "Which expression correctly represents the derivative of $f$ at $x=3$ using the limit definition?",
        options: [
          "$\\lim_{h\\to 0}\\frac{f(3+h)-f(3)}{h}$",
          "$\\lim_{h\\to 3}\\frac{f(h)-f(3)}{h-3}$",
          "$\\lim_{h\\to 0}\\frac{f(3+h)+f(3)}{h}$",
          "$\\lim_{h\\to 0}\\frac{f(3)-f(3-h)}{h^2}$",
        ],
        answerIndex: 0,
        explanation:
          "Choice A is the standard difference quotient $\\frac{f(3+h)-f(3)}{h}$ evaluated as $h\\to 0$, which is the limit definition of the derivative at $x=3$. Choice B uses the wrong limit variable (approaching 3 instead of 0) and is actually the equivalent form $\\lim_{x\\to 3}\\frac{f(x)-f(3)}{x-3}$, not choice B's expression. Choice C adds rather than subtracts in the numerator, which does not give a rate of change. Choice D squares $h$ in the denominator, making the limit infinite rather than the derivative.",
      },
      {
        question: "Using the limit definition, what is $f'(x)$ if $f(x)=3x+5$?",
        options: ["$3$", "$5$", "$3x$", "$3x+5$"],
        answerIndex: 0,
        explanation:
          "$f'(x)=\\lim_{h\\to 0}\\frac{[3(x+h)+5]-(3x+5)}{h}=\\lim_{h\\to 0}\\frac{3h}{h}=3$. The derivative of a linear function is its slope, which is 3. Choice B (5) is the y-intercept, not the slope. Choice C ($3x$) incorrectly treats the constant 3 as a coefficient that carries $x$. Choice D ($3x+5$) is $f(x)$ itself, not its derivative.",
      },
    ],
  },
  {
    id: "differentiability",
    name: "Differentiability Implies Continuity",
    unit: "Unit 2: Differentiation — Definition and Fundamental Properties",
    unitNumber: 2,
    tags: ["theorem", "MCQ frequent"],
    summary:
      "If a function is differentiable at a point, then it must be continuous there, but the converse is not always true.",
    description:
      "A function $f$ is differentiable at $x=a$ if the limit definition of the derivative exists at $a$. The theorem states that differentiability at a point is a stronger condition than continuity: every differentiable function is continuous, but a continuous function can fail to be differentiable (e.g., at a corner or cusp). Common points of non-differentiability include corners, cusps, vertical tangents, and jump discontinuities.",
    steps: [
      "Check whether $f$ is continuous at $x=a$: if there is a discontinuity (jump, infinite, or removable), then $f$ is automatically non-differentiable at $a$.",
      "Examine the graph or formula for corners (where the left and right slopes differ), cusps (where the slope becomes infinite from both sides), or vertical tangent lines.",
      "To verify differentiability analytically, compute the left-hand and right-hand limits of the difference quotient at $a$; both must exist and be equal.",
      "If both one-sided derivative limits agree, $f$ is differentiable at $a$; state the derivative value and confirm continuity follows.",
    ],
    examples: [
      {
        problem:
          "Is $f(x)=|x|$ differentiable at $x=0$? Justify using one-sided limits.",
        solution:
          "Left-hand derivative: $\\lim_{h\\to 0^-}\\frac{|0+h|-|0|}{h}=\\lim_{h\\to 0^-}\\frac{-h}{h}=-1$. Right-hand derivative: $\\lim_{h\\to 0^+}\\frac{|h|}{h}=1$. Since $-1\\neq 1$, the limit does not exist and $f$ is not differentiable at $x=0$, even though $f$ is continuous there.",
      },
    ],
    mcqs: [
      {
        question:
          "Which statement about differentiability and continuity is always true?",
        options: [
          "If $f$ is differentiable at $x=a$, then $f$ is continuous at $x=a$.",
          "If $f$ is continuous at $x=a$, then $f$ is differentiable at $x=a$.",
          "If $f$ is not differentiable at $x=a$, then $f$ is not continuous at $x=a$.",
          "Differentiability and continuity are independent conditions.",
        ],
        answerIndex: 0,
        explanation:
          "Choice A states the theorem correctly: differentiability implies continuity. Choice B is the incorrect converse; $f(x)=|x|$ is continuous but not differentiable at 0. Choice C is the incorrect inverse; a function can be non-differentiable yet still continuous (corners, cusps). Choice D is false because differentiability is strictly stronger than continuity—they are not independent.",
      },
      {
        question:
          "At which of the following points is $f(x)=x^{2/3}$ NOT differentiable?",
        options: ["$x=0$", "$x=1$", "$x=-1$", "$x=8$"],
        answerIndex: 0,
        explanation:
          "At $x=0$, $f'(x)=\\frac{2}{3}x^{-1/3}$ is undefined because $x^{-1/3}\\to\\infty$ as $x\\to 0$; the graph has a vertical tangent (cusp) at the origin, so $f$ is not differentiable there. At $x=1$, $-1$, and $8$, the derivative $\\frac{2}{3}x^{-1/3}$ is finite and well-defined, so $f$ is differentiable at those points.",
      },
    ],
  },
  {
    id: "power-rule",
    name: "Power Rule",
    unit: "Unit 2: Differentiation — Definition and Fundamental Properties",
    unitNumber: 2,
    tags: ["MCQ frequent"],
    summary: "The derivative of $x^n$ is $nx^{n-1}$ for any real number $n$.",
    formula: "\\frac{d}{dx}[x^n]=nx^{n-1}",
    graph: {
      type: "fns",
      fns: [
        { fn: "x*x", color: "blue", label: "f(x) = x²" },
        { fn: "2*x", color: "red", label: "f'(x) = 2x" },
      ],
      xDomain: [-2, 2],
      yDomain: [-2, 4],
      note: "Power Rule illustrated: the derivative of x² is 2x (linear).",
    },
    description:
      "The Power Rule is the most-used differentiation rule and applies to any real exponent, including negative and fractional powers. To differentiate $x^n$, bring the exponent down as a coefficient and reduce the exponent by one. Rewrite radical and rational expressions as powers of $x$ before applying the rule.",
    steps: [
      "Rewrite any radicals or fractions involving $x$ as powers: e.g., $\\sqrt{x}=x^{1/2}$ and $\\frac{1}{x^3}=x^{-3}$.",
      "Identify the exponent $n$ on $x$.",
      "Multiply the coefficient by $n$: new coefficient $= (\\text{original coefficient})\\cdot n$.",
      "Subtract 1 from the exponent: new exponent $= n-1$.",
      "Write the result and simplify, rewriting negative or fractional exponents if the problem requires a specific form.",
    ],
    examples: [
      {
        problem: "Differentiate $f(x)=4x^3-\\frac{2}{x^2}+5\\sqrt{x}$.",
        solution:
          "Rewrite: $f(x)=4x^3-2x^{-2}+5x^{1/2}$. Apply the Power Rule term by term: $f'(x)=12x^2-(-2)\\cdot 2x^{-3}+5\\cdot\\frac{1}{2}x^{-1/2}=12x^2+4x^{-3}+\\frac{5}{2}x^{-1/2}$, or equivalently $12x^2+\\frac{4}{x^3}+\\frac{5}{2\\sqrt{x}}$.",
      },
    ],
    mcqs: [
      {
        question: "What is $\\frac{d}{dx}\\left[x^{-4}\\right]$?",
        options: ["$-4x^{-5}$", "$-4x^{-3}$", "$4x^{-5}$", "$4x^{-3}$"],
        answerIndex: 0,
        explanation:
          "By the Power Rule, $\\frac{d}{dx}[x^{-4}]=(-4)x^{-4-1}=-4x^{-5}$. Choice B incorrectly adds 1 to the exponent instead of subtracting. Choice C gets the sign wrong. Choice D both gets the sign wrong and adds 1 to the exponent.",
      },
      {
        question: "If $g(x)=6x^5-3x^2+7$, what is $g'(x)$?",
        options: ["$30x^4-6x$", "$30x^4-6x+7$", "$6x^4-3x$", "$30x^5-6x^2$"],
        answerIndex: 0,
        explanation:
          "$g'(x)=6\\cdot 5x^4-3\\cdot 2x+0=30x^4-6x$. Choice B incorrectly keeps the constant term 7 (the derivative of a constant is 0). Choice C forgets to bring down the exponent for the first term. Choice D forgets to decrease the exponents by 1.",
      },
    ],
  },
  {
    id: "sum-difference-rule",
    name: "Sum and Difference Rule",
    unit: "Unit 2: Differentiation — Definition and Fundamental Properties",
    unitNumber: 2,
    tags: ["MCQ frequent"],
    summary:
      "The derivative of a sum or difference of functions equals the sum or difference of their individual derivatives.",
    formula: "(f\\pm g)'=f'\\pm g'",
    description:
      "Differentiation is a linear operation, so it distributes over addition and subtraction. This rule allows each term of a polynomial or multi-term expression to be differentiated independently. Combined with the Power Rule and Constant Multiple Rule, it handles every polynomial in one step.",
    steps: [
      "Identify each term in the sum or difference separately.",
      "Differentiate each term individually using the appropriate rule (Power, trig, exponential, etc.).",
      "Preserve the $+$ or $-$ sign between terms in the result.",
      "Simplify the resulting expression by combining like terms if possible.",
    ],
    examples: [
      {
        problem: "Find $h'(x)$ if $h(x)=x^4+\\cos x - e^x$.",
        solution:
          "Apply the Sum/Difference Rule term by term: $h'(x)=\\frac{d}{dx}[x^4]+\\frac{d}{dx}[\\cos x]-\\frac{d}{dx}[e^x]=4x^3-\\sin x-e^x$.",
      },
    ],
    mcqs: [
      {
        question:
          "Which best describes why $\\frac{d}{dx}[f(x)+g(x)]=f'(x)+g'(x)$?",
        options: [
          "Differentiation is a linear operator that distributes over addition.",
          "The product of two functions differentiates to the sum of their derivatives.",
          "This is only true when $f$ and $g$ are polynomials.",
          "It follows from the Chain Rule applied to $f+g$.",
        ],
        answerIndex: 0,
        explanation:
          "Choice A is correct: linearity of differentiation means it distributes over sums, valid for any differentiable functions. Choice B confusingly references the product rule, which is a different rule entirely. Choice C is false; the Sum Rule holds for any differentiable functions, not just polynomials. Choice D is wrong; the Chain Rule applies to compositions, not sums.",
      },
      {
        question: "If $p(x)=x^3-5x+2$, what is $p'(x)$?",
        options: ["$3x^2-5$", "$3x^2-5+2$", "$3x^2-5x$", "$x^2-5$"],
        answerIndex: 0,
        explanation:
          "$p'(x)=3x^2-5+0=3x^2-5$. Choice B incorrectly keeps the constant 2 (its derivative is 0). Choice C fails to differentiate the $-5x$ term correctly, leaving $-5x$ unchanged. Choice D applies the Power Rule incorrectly to $x^3$, yielding $x^2$ instead of $3x^2$.",
      },
    ],
  },
  {
    id: "constant-multiple-rule",
    name: "Constant Multiple Rule",
    unit: "Unit 2: Differentiation — Definition and Fundamental Properties",
    unitNumber: 2,
    tags: ["MCQ frequent"],
    summary:
      "A constant factor can be pulled outside the derivative operator without changing the result.",
    formula: "(cf)'=cf'",
    description:
      "When a function is multiplied by a constant, the derivative of the product is simply the constant times the derivative of the function. This rule reflects the linearity of differentiation and is used in every computation that involves coefficients. It is usually applied together with the Sum/Difference Rule when differentiating polynomials.",
    steps: [
      "Identify the constant factor $c$ and the function $f(x)$ in the expression $c\\cdot f(x)$.",
      "Keep $c$ in place and differentiate only $f(x)$.",
      "Multiply the result: the derivative is $c\\cdot f'(x)$.",
      "Simplify if possible; constants such as $\\pi$, $e$, or numeric coefficients all follow the same rule.",
    ],
    examples: [
      {
        problem: "Differentiate $y=7\\sin x$.",
        solution:
          "By the Constant Multiple Rule, $\\frac{dy}{dx}=7\\cdot\\frac{d}{dx}[\\sin x]=7\\cos x$.",
      },
    ],
    mcqs: [
      {
        question: "What is $\\frac{d}{dx}[\\pi x^3]$?",
        options: ["$3\\pi x^2$", "$\\pi x^2$", "$3x^2$", "$3\\pi x^3$"],
        answerIndex: 0,
        explanation:
          "The Constant Multiple Rule gives $\\frac{d}{dx}[\\pi x^3]=\\pi\\cdot 3x^2=3\\pi x^2$. Choice B forgets to bring down the exponent 3. Choice C drops the constant $\\pi$. Choice D keeps the exponent unchanged instead of reducing it by 1.",
      },
      {
        question:
          "If $f(x)=kx^2$ where $k$ is a nonzero constant, then $f'(x)=$",
        options: ["$2kx$", "$kx$", "$2k$", "$2x$"],
        answerIndex: 0,
        explanation:
          "$f'(x)=k\\cdot 2x=2kx$ by the Constant Multiple Rule combined with the Power Rule. Choice B omits the factor of 2 from the Power Rule. Choice C treats $x$ as if it disappears (correct only if we were evaluating at $x=1$). Choice D drops the constant $k$.",
      },
    ],
  },
  {
    id: "product-rule",
    name: "Product Rule",
    unit: "Unit 2: Differentiation — Definition and Fundamental Properties",
    unitNumber: 2,
    tags: ["MCQ frequent"],
    summary:
      "The derivative of a product of two functions is the first times the derivative of the second plus the second times the derivative of the first.",
    formula: "(fg)'=f'g+fg'",
    graph: {
      type: "fns",
      fns: [
        { fn: "x*sin(x)", color: "blue", label: "x·sin(x)" },
        { fn: "sin(x)+x*cos(x)", color: "green", label: "sin(x)+x·cos(x)" },
      ],
      xDomain: [-6, 6],
      yDomain: [-3, 3],
    },
    description:
      "When two differentiable functions are multiplied together, their product cannot be differentiated by simply multiplying their individual derivatives. Instead, the Product Rule gives $(fg)'=f'g+fg'$, which accounts for the rate at which each factor changes while the other is held fixed. This rule is essential whenever two non-constant expressions are multiplied.",
    steps: [
      "Label the two factors: let $u=f(x)$ and $v=g(x)$.",
      "Compute $u'=f'(x)$ and $v'=g'(x)$ separately.",
      "Apply the formula: derivative $= u'v + uv'$ (first' times second, plus first times second').",
      "Expand and simplify the result, combining like terms where possible.",
    ],
    examples: [
      {
        problem: "Differentiate $y=x^2\\sin x$.",
        solution:
          "Let $u=x^2$ and $v=\\sin x$, so $u'=2x$ and $v'=\\cos x$. By the Product Rule: $y'=u'v+uv'=2x\\sin x+x^2\\cos x$.",
      },
    ],
    mcqs: [
      {
        question: "If $h(x)=x^3 e^x$, which of the following equals $h'(x)$?",
        options: [
          "$3x^2 e^x + x^3 e^x$",
          "$3x^2 e^x$",
          "$x^3 e^x$",
          "$3x^2 \\cdot x e^{x-1}$",
        ],
        answerIndex: 0,
        explanation:
          "With $u=x^3$ and $v=e^x$: $h'(x)=3x^2 e^x+x^3 e^x$. Choice B ignores the $uv'$ term entirely. Choice C ignores the $u'v$ term. Choice D incorrectly applies the Power Rule to $e^x$, treating it like a power function.",
      },
      {
        question:
          "Which of the following statements about the Product Rule is correct?",
        options: [
          "$(fg)'=f'g+fg'$",
          "$(fg)'=f'g'$",
          "$(fg)'=f'g-fg'$",
          "$(fg)'=(f+g)'$",
        ],
        answerIndex: 0,
        explanation:
          "The Product Rule is $(fg)'=f'g+fg'$. Choice B (multiplying the individual derivatives) is a very common error that gives the wrong answer. Choice C has a minus sign, which is incorrect and more closely resembles the Quotient Rule's numerator. Choice D confuses the product $fg$ with the sum $f+g$.",
      },
    ],
  },
  {
    id: "quotient-rule",
    name: "Quotient Rule",
    unit: "Unit 2: Differentiation — Definition and Fundamental Properties",
    unitNumber: 2,
    tags: ["MCQ frequent"],
    summary:
      "The derivative of a quotient is the denominator times the derivative of the numerator minus the numerator times the derivative of the denominator, all divided by the denominator squared.",
    formula: "\\left(\\frac{f}{g}\\right)'=\\frac{f'g-fg'}{g^2}",
    description:
      "When one differentiable function is divided by another, the Quotient Rule gives the derivative as $\\frac{f'g-fg'}{g^2}$, valid wherever $g(x)\\neq 0$. The order of subtraction in the numerator matters: numerator's derivative times denominator, minus numerator times denominator's derivative. A helpful mnemonic is \"low d-high minus high d-low, over low squared.\"",
    steps: [
      'Identify the numerator $f(x)$ ("high") and denominator $g(x)$ ("low").',
      "Compute $f'(x)$ and $g'(x)$ separately.",
      "Form the numerator of the result: $f'(x)\\cdot g(x) - f(x)\\cdot g'(x)$ (high-d-low order, or \"low-d-high minus high-d-low\").",
      "Divide by $[g(x)]^2$.",
      "Simplify the resulting expression, factoring if needed.",
    ],
    examples: [
      {
        problem: "Find $\\frac{d}{dx}\\left[\\frac{x^2+1}{x-3}\\right]$.",
        solution:
          "Let $f=x^2+1$, $g=x-3$, so $f'=2x$ and $g'=1$. Quotient Rule: $\\frac{2x(x-3)-(x^2+1)(1)}{(x-3)^2}=\\frac{2x^2-6x-x^2-1}{(x-3)^2}=\\frac{x^2-6x-1}{(x-3)^2}$.",
      },
    ],
    mcqs: [
      {
        question: "What is $\\frac{d}{dx}\\left[\\frac{\\sin x}{x}\\right]$?",
        options: [
          "$\\frac{x\\cos x-\\sin x}{x^2}$",
          "$\\frac{\\cos x-\\sin x}{x^2}$",
          "$\\frac{x\\cos x+\\sin x}{x^2}$",
          "$\\cos x$",
        ],
        answerIndex: 0,
        explanation:
          "With $f=\\sin x$ and $g=x$: $\\frac{(\\cos x)(x)-(\\sin x)(1)}{x^2}=\\frac{x\\cos x-\\sin x}{x^2}$. Choice B forgets to multiply $\\cos x$ by $x$ in the first term. Choice C uses a plus instead of minus in the numerator. Choice D is $\\frac{d}{dx}[\\sin x]$ without accounting for the quotient.",
      },
      {
        question:
          "A student computes $\\frac{d}{dx}\\left[\\frac{f}{g}\\right]=\\frac{f'}{g'}$. What is wrong with this?",
        options: [
          "The Quotient Rule requires subtracting $fg'$ from $f'g$ in the numerator, then dividing by $g^2$.",
          "Nothing; dividing the derivatives is a valid shortcut.",
          "The student should multiply by $g^2$ rather than divide.",
          "The numerator should be $f'g'+fg$.",
        ],
        answerIndex: 0,
        explanation:
          "The Quotient Rule is $\\frac{f'g-fg'}{g^2}$, not $\\frac{f'}{g'}$. Simply dividing the derivatives ignores the product terms and the squared denominator, producing incorrect results in general. Choices B, C, and D all reflect different misunderstandings of the rule.",
      },
    ],
  },
  {
    id: "sin-cos-derivatives",
    name: "Derivatives of Sine and Cosine",
    unit: "Unit 2: Differentiation — Definition and Fundamental Properties",
    unitNumber: 2,
    tags: ["MCQ frequent"],
    summary:
      "The derivative of $\\sin x$ is $\\cos x$, and the derivative of $\\cos x$ is $-\\sin x$.",
    formula:
      "\\frac{d}{dx}[\\sin x]=\\cos x,\\quad\\frac{d}{dx}[\\cos x]=-\\sin x",
    graph: {
      type: "fns",
      fns: [
        { fn: "sin(x)", color: "blue", label: "sin(x)" },
        { fn: "cos(x)", color: "red", label: "cos(x) = d/dx[sin(x)]" },
      ],
      xDomain: [-6.3, 6.3],
      yDomain: [-1.5, 1.5],
      note: "The derivative of sin(x) is cos(x). Note: cos is 0 when sin has max/min.",
    },
    description:
      "These two fundamental trigonometric derivatives are proved using the limit definition and the special limits $\\lim_{h\\to 0}\\frac{\\sin h}{h}=1$ and $\\lim_{h\\to 0}\\frac{\\cos h -1}{h}=0$. They cycle: differentiating $\\sin x$ four times returns to $\\sin x$. The negative sign on the cosine derivative is a frequent source of errors and must be memorized precisely.",
    steps: [
      "Memorize: $\\frac{d}{dx}[\\sin x]=\\cos x$ (positive cosine).",
      "Memorize: $\\frac{d}{dx}[\\cos x]=-\\sin x$ (negative sine).",
      "When combined with the Constant Multiple Rule, scale the result: $\\frac{d}{dx}[k\\sin x]=k\\cos x$.",
      "Apply these results as building blocks whenever the Product Rule, Quotient Rule, or later Chain Rule involves $\\sin$ or $\\cos$.",
    ],
    examples: [
      {
        problem: "Find $y'$ if $y=3\\sin x - 2\\cos x$.",
        solution: "$y'=3\\cos x-2(-\\sin x)=3\\cos x+2\\sin x$.",
      },
    ],
    mcqs: [
      {
        question: "What is $\\frac{d}{dx}[\\cos x]$?",
        options: ["$-\\sin x$", "$\\sin x$", "$-\\cos x$", "$\\sec^2 x$"],
        answerIndex: 0,
        explanation:
          "$\\frac{d}{dx}[\\cos x]=-\\sin x$. Choice B omits the negative sign, a very common error. Choice C is the derivative of $\\sin x$ with a sign error applied to the wrong function. Choice D is $\\frac{d}{dx}[\\tan x]$, a different trig derivative.",
      },
      {
        question: "If $f(x)=\\sin x+\\cos x$, then $f''(x)=$",
        options: [
          "$-\\sin x-\\cos x$",
          "$\\cos x-\\sin x$",
          "$\\sin x+\\cos x$",
          "$-\\cos x+\\sin x$",
        ],
        answerIndex: 0,
        explanation:
          "$f'(x)=\\cos x-\\sin x$, then $f''(x)=-\\sin x-\\cos x$. Choice B is only $f'(x)$, not the second derivative. Choice C is $f(x)$ itself (the pattern repeats every 4 derivatives). Choice D has the signs reversed from the correct answer.",
      },
    ],
  },
  {
    id: "all-trig-derivatives",
    name: "Derivatives of All Six Trig Functions",
    unit: "Unit 2: Differentiation — Definition and Fundamental Properties",
    unitNumber: 2,
    tags: ["MCQ frequent"],
    summary:
      "Each of the six trigonometric functions has a standard derivative that must be memorized for the AP exam.",
    formula:
      "\\frac{d}{dx}[\\tan x]=\\sec^2 x,\\quad\\frac{d}{dx}[\\sec x]=\\sec x\\tan x",
    description:
      'Beyond sine and cosine, the derivatives of $\\tan x$, $\\cot x$, $\\sec x$, and $\\csc x$ are derived via the Quotient Rule. A helpful pattern is that the "co-" functions ($\\cos$, $\\cot$, $\\csc$) all carry a negative sign in their derivatives, while $\\sin$, $\\tan$, and $\\sec$ do not. Recognizing these patterns reduces memorization errors under exam pressure.',
    steps: [
      "Memorize the complete table: $\\frac{d}{dx}[\\tan x]=\\sec^2 x$, $\\frac{d}{dx}[\\cot x]=-\\csc^2 x$, $\\frac{d}{dx}[\\sec x]=\\sec x\\tan x$, $\\frac{d}{dx}[\\csc x]=-\\csc x\\cot x$.",
      "Note the co-function sign rule: derivatives of $\\cos x$, $\\cot x$, and $\\csc x$ each carry a negative sign.",
      "Derive these from the Quotient Rule if needed: e.g., $\\tan x=\\frac{\\sin x}{\\cos x}$ gives $\\frac{\\cos x\\cdot\\cos x-\\sin x\\cdot(-\\sin x)}{\\cos^2 x}=\\frac{1}{\\cos^2 x}=\\sec^2 x$.",
      "Apply with the Constant Multiple Rule or Product Rule as required by the problem.",
    ],
    examples: [
      {
        problem: "Differentiate $f(x)=\\tan x - 4\\csc x$.",
        solution:
          "$f'(x)=\\sec^2 x-4(-\\csc x\\cot x)=\\sec^2 x+4\\csc x\\cot x$.",
      },
    ],
    mcqs: [
      {
        question: "What is $\\frac{d}{dx}[\\csc x]$?",
        options: [
          "$-\\csc x\\cot x$",
          "$\\csc x\\cot x$",
          "$-\\sec x\\tan x$",
          "$\\csc^2 x$",
        ],
        answerIndex: 0,
        explanation:
          "$\\frac{d}{dx}[\\csc x]=-\\csc x\\cot x$. Choice B omits the negative sign. Choice C is the derivative of $\\sec x$ with a sign error. Choice D is $-\\frac{d}{dx}[\\cot x]$ (with sign), which corresponds to $\\csc^2 x$ (positive) — not the derivative of $\\csc x$.",
      },
      {
        question: "Which of the following derivatives is INCORRECT?",
        options: [
          "$\\frac{d}{dx}[\\cot x]=\\csc^2 x$",
          "$\\frac{d}{dx}[\\tan x]=\\sec^2 x$",
          "$\\frac{d}{dx}[\\sec x]=\\sec x\\tan x$",
          "$\\frac{d}{dx}[\\sin x]=\\cos x$",
        ],
        answerIndex: 0,
        explanation:
          "Choice A is incorrect because $\\frac{d}{dx}[\\cot x]=-\\csc^2 x$ (negative sign required). Choices B, C, and D are all correct standard derivatives.",
      },
    ],
  },
  {
    id: "exp-log-derivatives",
    name: "Derivatives of e^x and ln x",
    unit: "Unit 2: Differentiation — Definition and Fundamental Properties",
    unitNumber: 2,
    tags: ["MCQ frequent"],
    summary:
      "The derivative of $e^x$ is itself, and the derivative of $\\ln x$ is $\\frac{1}{x}$.",
    formula: "\\frac{d}{dx}[e^x]=e^x,\\quad\\frac{d}{dx}[\\ln x]=\\frac{1}{x}",
    description:
      "The natural exponential function $e^x$ is unique in that it is its own derivative, making it fundamental in differential equations and growth models. The natural logarithm $\\ln x$ has derivative $\\frac{1}{x}$, valid for $x>0$; more generally $\\frac{d}{dx}[\\ln|x|]=\\frac{1}{x}$. These two derivatives are paired antiderivatives and appear constantly on the AP exam.",
    steps: [
      "Remember: $\\frac{d}{dx}[e^x]=e^x$ — the function is unchanged by differentiation.",
      "Remember: $\\frac{d}{dx}[\\ln x]=\\frac{1}{x}$ for $x>0$.",
      "Apply the Constant Multiple Rule as needed: $\\frac{d}{dx}[ae^x]=ae^x$ and $\\frac{d}{dx}[k\\ln x]=\\frac{k}{x}$.",
      "Combine with the Product or Quotient Rule when $e^x$ or $\\ln x$ appears alongside another function.",
    ],
    examples: [
      {
        problem: "Find $y'$ if $y=x^2 e^x + 3\\ln x$.",
        solution:
          "Use the Product Rule on $x^2 e^x$: $\\frac{d}{dx}[x^2 e^x]=2x e^x+x^2 e^x$. Then $\\frac{d}{dx}[3\\ln x]=\\frac{3}{x}$. So $y'=2xe^x+x^2 e^x+\\frac{3}{x}$.",
      },
    ],
    mcqs: [
      {
        question: "What is $\\frac{d}{dx}[e^x+\\ln x]$?",
        options: [
          "$e^x+\\frac{1}{x}$",
          "$e^x+\\ln x$",
          "$xe^{x-1}+\\frac{1}{x}$",
          "$e^x+x$",
        ],
        answerIndex: 0,
        explanation:
          "$\\frac{d}{dx}[e^x]=e^x$ and $\\frac{d}{dx}[\\ln x]=\\frac{1}{x}$, giving $e^x+\\frac{1}{x}$. Choice B mistakenly leaves $\\ln x$ undifferentiated. Choice C incorrectly applies the Power Rule to $e^x$ as if it were $x^e$. Choice D replaces $\\frac{1}{x}$ with $x$, the antiderivative direction.",
      },
      {
        question: "If $f(x)=e^x \\ln x$, then $f'(x)=$",
        options: [
          "$e^x\\ln x+\\frac{e^x}{x}$",
          "$e^x\\cdot\\frac{1}{x}$",
          "$e^x+\\frac{1}{x}$",
          "$\\frac{e^x}{x}+\\ln x$",
        ],
        answerIndex: 0,
        explanation:
          "By the Product Rule: $f'(x)=e^x\\cdot\\ln x + e^x\\cdot\\frac{1}{x}=e^x\\ln x+\\frac{e^x}{x}$. Choice B forgets the $u'v$ term $e^x\\ln x$. Choice C omits both factors of the Product Rule correctly and just adds the standalone derivatives. Choice D switches which factor gets differentiated (applies $\\frac{1}{x}$ to the wrong piece).",
      },
    ],
  },
  {
    id: "higher-order-derivatives",
    name: "Higher-Order Derivatives",
    unit: "Unit 2: Differentiation — Definition and Fundamental Properties",
    unitNumber: 2,
    tags: ["MCQ frequent"],
    summary:
      "Higher-order derivatives are obtained by repeatedly differentiating a function, and they describe acceleration, concavity, and behavior in Taylor series.",
    formula: "f'',\\ f''',\\ f^{(n)}",
    description:
      "The second derivative $f''(x)$ is the derivative of $f'(x)$ and measures the rate of change of the slope, which corresponds to concavity and acceleration in motion problems. Higher derivatives $f^{(n)}$ are found by differentiating $n$ times successively. Notation includes both prime notation ($f''$) and Leibniz notation ($\\frac{d^2y}{dx^2}$).",
    steps: [
      "Find $f'(x)$ by differentiating $f(x)$ once using all applicable rules.",
      "Find $f''(x)$ by differentiating $f'(x)$.",
      "Continue differentiating to reach the required order $n$, being careful to apply product, quotient, or chain rules at each step as the expression changes.",
      "Use Leibniz notation $\\frac{d^2y}{dx^2}$ when the problem or context calls for it, especially in implicit differentiation or physics.",
      "Check for patterns (e.g., repeated derivatives of $e^x$, $\\sin x$, or polynomials) that simplify finding $f^{(n)}$ for large $n$.",
    ],
    examples: [
      {
        problem: "Find $f''(x)$ if $f(x)=x^4-3x^2+2x$.",
        solution: "$f'(x)=4x^3-6x+2$. Differentiating again: $f''(x)=12x^2-6$.",
      },
    ],
    mcqs: [
      {
        question:
          "If $f(x)=\\sin x$, what is $f^{(4)}(x)$ (the fourth derivative)?",
        options: ["$\\sin x$", "$\\cos x$", "$-\\sin x$", "$-\\cos x$"],
        answerIndex: 0,
        explanation:
          "The derivatives of $\\sin x$ cycle with period 4: $f'=\\cos x$, $f''=-\\sin x$, $f'''=-\\cos x$, $f^{(4)}=\\sin x$. Choice B would be the result after 1 or 5 differentiations. Choice C is the second derivative. Choice D is the third derivative.",
      },
      {
        question:
          "What does the second derivative $f''(x)$ represent geometrically?",
        options: [
          "The concavity (curvature) of the graph of $f$.",
          "The slope of the tangent line to $f$.",
          "The $x$-intercepts of $f$.",
          "The average rate of change of $f$ over an interval.",
        ],
        answerIndex: 0,
        explanation:
          "$f''(x)>0$ means $f$ is concave up, and $f''(x)<0$ means $f$ is concave down, so $f''$ describes the concavity (curvature) of the graph. Choice B describes $f'(x)$, the first derivative. Choice C ($x$-intercepts) comes from setting $f(x)=0$, unrelated to derivatives. Choice D (average rate of change) is the difference quotient $\\frac{f(b)-f(a)}{b-a}$, not a derivative.",
      },
    ],
  },
];
