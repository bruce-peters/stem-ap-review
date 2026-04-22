export default [
  {
    id: "area-between-curves-x",
    name: "Area Between Curves (vertical slices)",
    unit: "Unit 8: Applications of Integration",
    unitNumber: 8,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "The area between two curves f(x) and g(x) over [a, b] is the integral of the top curve minus the bottom curve.",
    formula: "\\int_a^b [f(x)-g(x)]\\,dx",
    graph: {
      type: "fns",
      fns: [
        { fn: "x", color: "blue", label: "g(x) = x (top on [0, 1])" },
        { fn: "x * x", color: "red", label: "f(x) = x² (bottom on [0, 1])" },
      ],
      xDomain: [-0.3, 1.6],
      yDomain: [-0.2, 1.3],
      note: "Enclosed region between x and x² from x = 0 to x = 1. Area = ∫₀¹(x − x²)dx = 1/6.",
    },
    description:
      "When f(x) ≥ g(x) on [a, b], the area of the region between them equals the definite integral of f(x) − g(x) over that interval. If the curves intersect within the interval, you must split the integral at each crossing and take the absolute value of each piece. Finding intersection points by setting f(x) = g(x) is the essential first step.",
    steps: [
      "Set f(x) = g(x) and solve for the x-coordinates of any intersection points — these become your limits of integration (or subdivide the interval).",
      "Determine which function is on top (greater y-value) on each subinterval by testing a sample point.",
      "Write the integral as $\\int_a^b [f_{\\text{top}}(x) - f_{\\text{bottom}}(x)]\\,dx$, splitting at intersections as needed.",
      "Evaluate each antiderivative and apply the Fundamental Theorem of Calculus.",
      "Add the areas of all subintervals (all values must be positive; take absolute values if needed).",
    ],
    examples: [
      {
        problem:
          "Find the area enclosed by $f(x) = x^2$ and $g(x) = x$ over their intersection region.",
        solution:
          "Set $x^2 = x \\Rightarrow x(x-1)=0$, so $x=0$ and $x=1$. On $[0,1]$, $g(x)=x \\ge x^2 = f(x)$. Area $= \\int_0^1 (x - x^2)\\,dx = \\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$.",
      },
    ],
    mcqs: [
      {
        question:
          "Which expression correctly gives the area between $f(x) = 4 - x^2$ and $g(x) = x + 2$ on their enclosed region?",
        options: [
          "$\\int_{-2}^{1} [(4-x^2)-(x+2)]\\,dx$",
          "$\\int_{-1}^{2} [(x+2)-(4-x^2)]\\,dx$",
          "$\\int_{-2}^{1} [(x+2)-(4-x^2)]\\,dx$",
          "$\\int_{0}^{1} [(4-x^2)-(x+2)]\\,dx$",
        ],
        answerIndex: 0,
        explanation:
          "Setting $4-x^2 = x+2$ gives $x^2+x-2=0$, so $x=-2$ and $x=1$. On $[-2,1]$, the parabola $4-x^2$ lies above $x+2$, so the integrand is $(4-x^2)-(x+2)$ with limits $-2$ to $1$. Option B has the integrand inverted; option C inverts it too; option D uses wrong limits.",
      },
      {
        question:
          "The area between $y = \\sin x$ and $y = 0$ on $[0, \\pi]$ equals:",
        options: ["0", "1", "2", "$\\pi$"],
        answerIndex: 2,
        explanation:
          "$\\int_0^\\pi \\sin x\\,dx = [-\\cos x]_0^\\pi = -\\cos\\pi + \\cos 0 = 1 + 1 = 2$. The answer is 2, not 0 (which would be the signed integral over a full period) and not $\\pi$ or 1.",
      },
    ],
  },
  {
    id: "area-between-curves-y",
    name: "Area Between Curves (horizontal slices)",
    unit: "Unit 8: Applications of Integration",
    unitNumber: 8,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "Integrating with respect to y (horizontal slices) is useful when curves are naturally expressed as x = f(y).",
    formula: "\\int_c^d [f(y)-g(y)]\\,dy",
    description:
      "When a region is bounded by curves that are more naturally written as x = f(y) and x = g(y), integrate along the y-axis using horizontal strips. Here f(y) is the right boundary and g(y) is the left boundary, and the limits c and d are y-values of the intersection points. This approach avoids the need to split the integral that often arises with vertical slices for sideways-opening regions.",
    steps: [
      "Rewrite both boundary curves as functions of y: $x = f(y)$ (right) and $x = g(y)$ (left).",
      "Set f(y) = g(y) to find the y-values c and d of the intersection points.",
      "Confirm which curve is further right on each subinterval by testing a sample y-value.",
      "Set up $\\int_c^d [f(y) - g(y)]\\,dy$ (right minus left).",
      "Evaluate the integral and confirm the result is positive.",
    ],
    examples: [
      {
        problem: "Find the area enclosed by $x = y^2$ and $x = y + 2$.",
        solution:
          "Set $y^2 = y+2 \\Rightarrow y^2-y-2=0 \\Rightarrow (y-2)(y+1)=0$, so $y=-1$ and $y=2$. On $[-1,2]$, $x=y+2$ is the right curve. Area $= \\int_{-1}^{2}[(y+2)-y^2]\\,dy = \\left[\\frac{y^2}{2}+2y-\\frac{y^3}{3}\\right]_{-1}^{2} = (2+4-\\frac{8}{3})-(\\frac{1}{2}-2+\\frac{1}{3}) = \\frac{9}{2}$.",
      },
    ],
    mcqs: [
      {
        question:
          "When is integrating with respect to y preferred over integrating with respect to x?",
        options: [
          "When the region's right and left boundaries are single-valued functions of y and the region would require multiple x-integrals.",
          "When the integrand contains trigonometric functions.",
          "When the area is larger than 10 square units.",
          "When the curves are linear (straight lines).",
        ],
        answerIndex: 0,
        explanation:
          "Horizontal slices (integration in y) are preferred when the region is naturally bounded on the left and right by curves expressed as x = f(y), avoiding the need to split the integral at multiple intersection points. Trig functions, region size, and linearity are not the determining factors.",
      },
      {
        question:
          "The area enclosed by $x = y^2 - 1$ and $x = 3$ using horizontal slices is:",
        options: [
          "$\\int_{-2}^{2}[3-(y^2-1)]\\,dy$",
          "$\\int_{0}^{3}[3-(y^2-1)]\\,dy$",
          "$\\int_{-2}^{2}[(y^2-1)-3]\\,dy$",
          "$\\int_{-1}^{3}[3-(y^2-1)]\\,dy$",
        ],
        answerIndex: 0,
        explanation:
          "Set $y^2 - 1 = 3 \\Rightarrow y^2=4 \\Rightarrow y=\\pm 2$. The right boundary is $x=3$ and left is $x=y^2-1$, giving integrand $3-(y^2-1) = 4-y^2$ with limits $-2$ to $2$. Option B uses wrong limits; option C inverts right/left; option D uses wrong limits.",
      },
    ],
  },
  {
    id: "disk-method",
    name: "Disk Method (Volume of Revolution)",
    unit: "Unit 8: Applications of Integration",
    unitNumber: 8,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "Rotating a region bounded above by f(x) and below by the x-axis around the x-axis generates a solid whose volume uses circular disk cross-sections.",
    formula: "V=\\pi\\int_a^b [f(x)]^2\\,dx",
    graph: {
      type: "fns",
      fns: [
        {
          fn: "Math.sqrt(Math.max(x, 0))",
          color: "blue",
          label: "f(x) = √x (disk radius)",
        },
        {
          fn: "-Math.sqrt(Math.max(x, 0))",
          color: "blue",
          label: "",
        },
      ],
      xDomain: [-0.3, 4.5],
      yDomain: [-2.4, 2.4],
      note: "Rotating √x around the x-axis: both the curve and its mirror trace the circular cross-sections. Each disk radius = √x.",
    },
    description:
      "When a curve f(x) ≥ 0 is rotated around the x-axis, each thin vertical slice of width dx sweeps out a disk with radius f(x) and area π[f(x)]². Integrating these disk areas over [a, b] gives the total volume. The disk method applies when there is no gap between the axis of rotation and the curve being revolved.",
    steps: [
      "Identify the axis of rotation (typically the x-axis or y-axis) and write the radius of a representative disk as a function of the integration variable.",
      "Write the area of one disk: $A = \\pi [r(x)]^2$.",
      "Set up the integral $V = \\pi \\int_a^b [f(x)]^2\\,dx$ with the appropriate limits.",
      "Expand or simplify $[f(x)]^2$ if needed, then integrate term by term.",
      "Evaluate using the Fundamental Theorem of Calculus and include the factor of $\\pi$.",
    ],
    examples: [
      {
        problem:
          "Find the volume of the solid generated by rotating $f(x) = \\sqrt{x}$ on $[0, 4]$ around the x-axis.",
        solution:
          "$V = \\pi\\int_0^4 (\\sqrt{x})^2\\,dx = \\pi\\int_0^4 x\\,dx = \\pi\\left[\\frac{x^2}{2}\\right]_0^4 = \\pi \\cdot 8 = 8\\pi$.",
      },
    ],
    mcqs: [
      {
        question:
          "The disk method gives the volume formula $V = \\pi\\int_a^b [f(x)]^2\\,dx$ because each disk has:",
        options: [
          "Radius $f(x)$ and thickness $dx$, so area $\\pi[f(x)]^2$ times thickness gives the disk's volume.",
          "Diameter $f(x)$ and thickness $dx$.",
          "Circumference $2\\pi f(x)$ integrated over the interval.",
          "Area $f(x)$ and height $\\pi$.",
        ],
        answerIndex: 0,
        explanation:
          "Each cross-sectional disk has radius equal to the function value f(x) (the distance from the axis), so its face area is $\\pi[f(x)]^2$. Multiplying by the infinitesimal thickness dx and integrating gives total volume. The disk method is NOT the same as the shell method (which uses circumference); diameter or area interpretations are incorrect.",
      },
      {
        question:
          "The volume of the solid formed by rotating $y = x^2$ on $[0, 2]$ about the x-axis is:",
        options: [
          "$\\frac{32\\pi}{5}$",
          "$8\\pi$",
          "$\\frac{16\\pi}{3}$",
          "$4\\pi$",
        ],
        answerIndex: 0,
        explanation:
          "$V = \\pi\\int_0^2 (x^2)^2\\,dx = \\pi\\int_0^2 x^4\\,dx = \\pi\\left[\\frac{x^5}{5}\\right]_0^2 = \\pi\\cdot\\frac{32}{5} = \\frac{32\\pi}{5}$. The other options arise from integrating $x^2$ instead of $x^4$, or from arithmetic errors.",
      },
    ],
  },
  {
    id: "washer-method",
    name: "Washer Method (Volume of Revolution)",
    unit: "Unit 8: Applications of Integration",
    unitNumber: 8,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "When rotating a region between two curves around an axis, subtract the inner disk from the outer disk to form a washer cross-section.",
    formula: "V=\\pi\\int_a^b \\bigl([f(x)]^2-[g(x)]^2\\bigr)\\,dx",
    graph: {
      type: "fns",
      fns: [
        {
          fn: "Math.sqrt(Math.max(x, 0))",
          color: "blue",
          label: "√x — outer radius",
        },
        {
          fn: "Math.max(x, 0)",
          color: "red",
          label: "x — inner radius",
        },
        {
          fn: "-Math.sqrt(Math.max(x, 0))",
          color: "blue",
          label: "",
        },
        {
          fn: "-Math.max(x, 0)",
          color: "red",
          label: "",
        },
      ],
      xDomain: [-0.15, 1.2],
      yDomain: [-1.2, 1.2],
      note: "Rotating the region between √x (outer) and x (inner) around the x-axis. Each cross-section is a washer: outer radius √x, inner radius x.",
    },
    description:
      "The washer method extends the disk method to regions where a gap exists between the axis of rotation and the inner boundary curve g(x). Each cross section is an annulus (washer) with outer radius f(x) and inner radius g(x), giving an area of π([f(x)]² − [g(x)]²). This difference of squares accounts for the hole in the middle of the solid.",
    steps: [
      "Identify the outer radius R(x) = f(x) (farther from the axis) and the inner radius r(x) = g(x) (closer to the axis).",
      "Write the washer area: $A(x) = \\pi\\bigl([R(x)]^2 - [r(x)]^2\\bigr)$.",
      "Find the limits of integration by locating where f(x) = g(x) or using the given bounds.",
      "Set up $V = \\pi\\int_a^b\\bigl([f(x)]^2 - [g(x)]^2\\bigr)\\,dx$.",
      "Expand both squares separately, then integrate term by term and evaluate.",
    ],
    examples: [
      {
        problem:
          "Find the volume when the region between $f(x) = \\sqrt{x}$ and $g(x) = x$ on $[0,1]$ is rotated about the x-axis.",
        solution:
          "On $[0,1]$, $\\sqrt{x} \\ge x$, so outer radius $= \\sqrt{x}$, inner radius $= x$. $V = \\pi\\int_0^1 \\bigl((\\sqrt{x})^2 - x^2\\bigr)\\,dx = \\pi\\int_0^1 (x - x^2)\\,dx = \\pi\\left[\\frac{x^2}{2}-\\frac{x^3}{3}\\right]_0^1 = \\pi\\left(\\frac{1}{2}-\\frac{1}{3}\\right) = \\frac{\\pi}{6}$.",
      },
    ],
    mcqs: [
      {
        question: "When applying the washer method, the inner radius must be:",
        options: [
          "The distance from the axis of rotation to the curve that is closer to the axis.",
          "Always equal to zero.",
          "The distance from the origin to the outer curve.",
          "The average of the two boundary functions.",
        ],
        answerIndex: 0,
        explanation:
          "The inner radius is the distance from the axis of rotation to the boundary curve nearest to the axis (which creates the hole). It is zero only when that inner curve lies on the axis, reducing the washer to a disk. Using the origin distance or averaging the functions would give incorrect cross-sectional areas.",
      },
      {
        question:
          "The volume generated by rotating the region between $y = 2$ and $y = x$ on $[0, 2]$ around the x-axis is:",
        options: [
          "$\\frac{8\\pi}{3}$",
          "$4\\pi$",
          "$\\frac{16\\pi}{3}$",
          "$8\\pi$",
        ],
        answerIndex: 2,
        explanation:
          "Outer radius $= 2$, inner radius $= x$. $V = \\pi\\int_0^2(4 - x^2)\\,dx = \\pi\\left[4x - \\frac{x^3}{3}\\right]_0^2 = \\pi\\left(8 - \\frac{8}{3}\\right) = \\pi\\cdot\\frac{16}{3} = \\frac{16\\pi}{3}$. Option A omits the $\\pi$ factor properly; option B and D come from squaring incorrectly.",
      },
    ],
  },
  {
    id: "shell-method",
    name: "Shell Method (Volume of Revolution)",
    unit: "Unit 8: Applications of Integration",
    unitNumber: 8,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "The shell method computes volume by summing the volumes of thin cylindrical shells swept out as vertical (or horizontal) strips are revolved around an axis.",
    formula: "V=2\\pi\\int_a^b x\\,f(x)\\,dx",
    description:
      "Instead of slicing perpendicular to the axis of rotation, the shell method uses strips parallel to the axis. A vertical strip at position x with height f(x) and width dx, rotated around the y-axis, forms a cylindrical shell of radius x, height f(x), and circumference 2πx. The volume of each thin shell is approximately 2πx·f(x)·dx, and integrating over [a, b] gives the total volume. This method is often algebraically simpler when the axis is perpendicular to the integration variable.",
    steps: [
      "Identify the axis of rotation. For the y-axis, integrate in x; for the x-axis, integrate in y.",
      "Write the shell radius (distance from the strip to the axis) and shell height (length of the strip) as functions of the integration variable.",
      "Form the shell volume element: $dV = 2\\pi \\cdot (\\text{radius}) \\cdot (\\text{height})\\,d(\\text{variable})$.",
      "Determine the limits of integration (typically where the region begins and ends).",
      "Evaluate $V = 2\\pi\\int_a^b (\\text{radius})(\\text{height})\\,dx$ and simplify.",
    ],
    examples: [
      {
        problem:
          "Use the shell method to find the volume when $y = x^2$ on $[0, 2]$ is rotated around the y-axis.",
        solution:
          "Shell radius $= x$, shell height $= x^2$. $V = 2\\pi\\int_0^2 x \\cdot x^2\\,dx = 2\\pi\\int_0^2 x^3\\,dx = 2\\pi\\left[\\frac{x^4}{4}\\right]_0^2 = 2\\pi\\cdot 4 = 8\\pi$.",
      },
    ],
    mcqs: [
      {
        question:
          "In the shell method formula $V = 2\\pi\\int_a^b x\\,f(x)\\,dx$, the factor $2\\pi x$ represents:",
        options: [
          "The circumference of the cylindrical shell at position x.",
          "The cross-sectional area of the shell.",
          "The volume of a single disk at position x.",
          "The derivative of the radius with respect to x.",
        ],
        answerIndex: 0,
        explanation:
          "$2\\pi x$ is the circumference of a circle of radius x — the distance around one thin cylindrical shell. Multiplying by height $f(x)$ gives the lateral surface area of the shell, and multiplying again by thickness $dx$ gives its volume. This is distinct from cross-sectional area (used in the disk/washer method).",
      },
      {
        question:
          "The volume formed by rotating the region bounded by $y = x$, $y = 0$, and $x = 3$ around the y-axis using the shell method is:",
        options: ["$9\\pi$", "$18\\pi$", "$6\\pi$", "$27\\pi$"],
        answerIndex: 1,
        explanation:
          "$V = 2\\pi\\int_0^3 x \\cdot x\\,dx = 2\\pi\\int_0^3 x^2\\,dx = 2\\pi\\left[\\frac{x^3}{3}\\right]_0^3 = 2\\pi\\cdot 9 = 18\\pi$. Option A forgets the factor of 2; options C and D result from algebraic errors in integration.",
      },
    ],
  },
  {
    id: "cross-section-volume",
    name: "Volume with Known Cross Sections",
    unit: "Unit 8: Applications of Integration",
    unitNumber: 8,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "If the cross-sectional area A(x) of a solid perpendicular to the x-axis is known, the volume is the integral of A(x) over the length of the solid.",
    formula: "V=\\int_a^b A(x)\\,dx",
    description:
      "For solids that are not solids of revolution, the cross-section perpendicular to the x-axis may be a square, equilateral triangle, semicircle, or other shape whose area can be expressed in terms of x. The side length (or radius) of the cross section is typically the vertical extent of the base region, f(x) − g(x). Integrating the area formula A(x) over [a, b] accumulates the volumes of all infinitesimally thin slices.",
    steps: [
      "Identify the base region in the xy-plane and determine the length of a representative cross section: $s(x) = f(x) - g(x)$.",
      "Identify the shape of each cross section (square, equilateral triangle, semicircle, etc.) and write its area formula in terms of s(x).",
      "Express A(x) explicitly: e.g., squares give $A(x) = [s(x)]^2$; semicircles give $A(x) = \\frac{\\pi}{2}\\left[\\frac{s(x)}{2}\\right]^2$.",
      "Set up $V = \\int_a^b A(x)\\,dx$ with limits matching the base region.",
      "Evaluate the integral and simplify; keep exact form (leave $\\pi$, $\\sqrt{3}$, etc. symbolic).",
    ],
    examples: [
      {
        problem:
          "A solid has base bounded by $y = \\sqrt{x}$ and $y = 0$ on $[0, 4]$. Cross sections perpendicular to the x-axis are squares. Find the volume.",
        solution:
          "The side of each square equals $\\sqrt{x} - 0 = \\sqrt{x}$, so $A(x) = (\\sqrt{x})^2 = x$. $V = \\int_0^4 x\\,dx = \\left[\\frac{x^2}{2}\\right]_0^4 = 8$.",
      },
    ],
    mcqs: [
      {
        question:
          "A solid's base is the region between $y = \\cos x$ and $y = 0$ on $[0, \\pi/2]$. Cross sections perpendicular to the x-axis are equilateral triangles (side = height of base). The area of each cross section is:",
        options: [
          "$\\frac{\\sqrt{3}}{4}\\cos^2 x$",
          "$\\cos^2 x$",
          "$\\frac{1}{2}\\cos^2 x$",
          "$\\sqrt{3}\\cos^2 x$",
        ],
        answerIndex: 0,
        explanation:
          "An equilateral triangle with side $s$ has area $\\frac{\\sqrt{3}}{4}s^2$. Here $s = \\cos x$, so $A(x) = \\frac{\\sqrt{3}}{4}\\cos^2 x$. Option B forgets the $\\frac{\\sqrt{3}}{4}$ coefficient; option C is the formula for a right triangle; option D has an incorrect coefficient.",
      },
      {
        question:
          "The volume of a solid with base between $y=x$ and $y=0$ on $[0,2]$ with semicircular cross sections (diameter = height of base) perpendicular to the x-axis is:",
        options: [
          "$\\frac{\\pi}{12}$",
          "$\\frac{\\pi}{3}$",
          "$\\frac{2\\pi}{3}$",
          "$\\pi$",
        ],
        answerIndex: 1,
        explanation:
          "Diameter $= x$, so radius $= x/2$. Semicircle area $= \\frac{1}{2}\\pi(x/2)^2 = \\frac{\\pi x^2}{8}$. $V = \\int_0^2 \\frac{\\pi x^2}{8}\\,dx = \\frac{\\pi}{8}\\left[\\frac{x^3}{3}\\right]_0^2 = \\frac{\\pi}{8}\\cdot\\frac{8}{3} = \\frac{\\pi}{3}$. Option A comes from a limit error; options C and D from coefficient mistakes.",
      },
    ],
  },
  {
    id: "arc-length-cartesian",
    name: "Arc Length of a Cartesian Curve",
    unit: "Unit 8: Applications of Integration",
    unitNumber: 8,
    tags: ["BC only", "FRQ"],
    summary:
      "The length of a smooth curve y = f(x) from x = a to x = b is found by integrating the arc-length element derived from the Pythagorean theorem.",
    formula: "L=\\int_a^b\\sqrt{1+[f'(x)]^2}\\,dx",
    description:
      "Each infinitesimal segment of a curve has length $ds = \\sqrt{(dx)^2+(dy)^2} = \\sqrt{1+(dy/dx)^2}\\,dx$, derived from the Pythagorean theorem applied to a tiny right triangle. Integrating ds over [a, b] accumulates the total arc length. The derivative f'(x) must be continuous on [a, b] for the formula to apply, and the integral often requires a calculator or a clever substitution since many arc-length integrands are not elementary.",
    steps: [
      "Compute $f'(x)$ and then $[f'(x)]^2$.",
      "Form the integrand: $\\sqrt{1 + [f'(x)]^2}$.",
      "Set up $L = \\int_a^b \\sqrt{1+[f'(x)]^2}\\,dx$ with the given limits.",
      "Simplify the expression under the radical if possible (look for perfect-square trinomials or u-substitution).",
      "Evaluate exactly or, if the integral is not elementary, use a numerical method or calculator.",
    ],
    examples: [
      {
        problem:
          "Find the arc length of $f(x) = \\frac{x^{3/2}}{3}$ on $[0, 4]$.",
        solution:
          "$f'(x) = \\frac{1}{2}x^{1/2}$, so $[f'(x)]^2 = \\frac{x}{4}$. $L = \\int_0^4 \\sqrt{1+\\frac{x}{4}}\\,dx$. Let $u = 1+\\frac{x}{4}$, $du = \\frac{1}{4}dx$, $dx = 4\\,du$. When $x=0$, $u=1$; when $x=4$, $u=2$. $L = 4\\int_1^2 u^{1/2}\\,du = 4\\left[\\frac{2}{3}u^{3/2}\\right]_1^2 = \\frac{8}{3}(2\\sqrt{2}-1)$.",
      },
    ],
    mcqs: [
      {
        question:
          "The arc-length formula $L=\\int_a^b\\sqrt{1+[f'(x)]^2}\\,dx$ comes from:",
        options: [
          "Applying the Pythagorean theorem to the infinitesimal right triangle with legs $dx$ and $dy = f'(x)\\,dx$.",
          "Rotating the curve around the x-axis and computing surface area.",
          "Taking the limit of the trapezoidal rule applied to f(x).",
          "Differentiating the area function $A(x) = \\int_a^x f(t)\\,dt$.",
        ],
        answerIndex: 0,
        explanation:
          "The arc-length element $ds=\\sqrt{(dx)^2+(dy)^2}$ follows directly from the Pythagorean theorem on the tiny right triangle formed by horizontal increment $dx$ and vertical increment $dy=f'(x)\\,dx$. Dividing inside the radical by $(dx)^2$ and factoring gives $\\sqrt{1+[f'(x)]^2}\\,dx$. Surface area, trapezoidal limits, and FTC derivatives are different concepts.",
      },
      {
        question: "The arc length of $y = x$ on $[0, 1]$ is:",
        options: ["$\\sqrt{2}$", "$1$", "$2$", "$\\frac{\\sqrt{2}}{2}$"],
        answerIndex: 0,
        explanation:
          "$f'(x) = 1$, so $L = \\int_0^1\\sqrt{1+1}\\,dx = \\sqrt{2}\\cdot 1 = \\sqrt{2}$. This matches the geometric distance from $(0,0)$ to $(1,1)$ via the Pythagorean theorem: $\\sqrt{1^2+1^2}=\\sqrt{2}$. The other options are common errors from forgetting to include $[f'(x)]^2$ in the integrand.",
      },
    ],
  },
  {
    id: "net-displacement",
    name: "Net Displacement from Velocity",
    unit: "Unit 8: Applications of Integration",
    unitNumber: 8,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "The net displacement of a particle over [a, b] equals the definite integral of its velocity function — positive and negative motion cancel.",
    formula: "\\int_a^b v(t)\\,dt=s(b)-s(a)",
    description:
      "By the Net Change Theorem (a direct consequence of the Fundamental Theorem of Calculus), integrating velocity over a time interval gives the net change in position, or displacement. Displacement is a signed quantity: motion in the negative direction reduces it. This is distinct from total distance, which requires integrating |v(t)| to prevent cancellation of forward and backward motion.",
    steps: [
      "Identify the velocity function $v(t)$ and the time interval $[a, b]$.",
      "Set up the integral $\\Delta s = \\int_a^b v(t)\\,dt$.",
      "Find an antiderivative $s(t)$ of $v(t)$ (use substitution or antiderivative rules as needed).",
      "Apply the FTC: $\\Delta s = s(b) - s(a)$.",
      "Interpret the sign: a positive result means net rightward (or upward) movement; negative means net leftward (or downward).",
    ],
    examples: [
      {
        problem:
          "A particle moves with velocity $v(t) = t^2 - 4$ on $[0, 3]$. Find the net displacement.",
        solution:
          "$\\Delta s = \\int_0^3 (t^2-4)\\,dt = \\left[\\frac{t^3}{3}-4t\\right]_0^3 = (9-12)-(0) = -3$. The particle has a net displacement of $-3$ units (it moved 3 units in the negative direction overall).",
      },
    ],
    mcqs: [
      {
        question:
          "Which of the following best describes the difference between net displacement and total distance traveled?",
        options: [
          "Net displacement is $\\int_a^b v(t)\\,dt$ (signed), while total distance is $\\int_a^b |v(t)|\\,dt$ (always non-negative).",
          "Net displacement is always greater than total distance.",
          "Total distance equals displacement when velocity is constant.",
          "Both quantities are always equal for a particle moving in one dimension.",
        ],
        answerIndex: 0,
        explanation:
          "Net displacement uses the signed integral $\\int v\\,dt$, so motion in opposite directions cancels. Total distance uses $\\int|v|\\,dt$, guaranteeing a non-negative result. Total distance equals displacement only when v(t) never changes sign (the particle never reverses), not merely when velocity is constant.",
      },
      {
        question:
          "A particle moves with velocity $v(t) = \\sin t$ on $[0, 2\\pi]$. Its net displacement is:",
        options: ["0", "2", "$2\\pi$", "4"],
        answerIndex: 0,
        explanation:
          "$\\int_0^{2\\pi}\\sin t\\,dt = [-\\cos t]_0^{2\\pi} = -\\cos(2\\pi)+\\cos(0) = -1+1 = 0$. The particle travels forward on $[0,\\pi]$ and backward by the same amount on $[\\pi, 2\\pi]$, so net displacement is zero. Total distance would be 4 (not 0).",
      },
    ],
  },
  {
    id: "total-distance",
    name: "Total Distance Traveled",
    unit: "Unit 8: Applications of Integration",
    unitNumber: 8,
    tags: ["MCQ frequent", "FRQ", "calculator active"],
    summary:
      "Total distance traveled by a particle over [a, b] equals the integral of the absolute value of its velocity — no cancellation of forward and backward motion.",
    formula: "\\int_a^b |v(t)|\\,dt",
    description:
      "Unlike net displacement, total distance counts all motion regardless of direction by integrating |v(t)|. In practice this requires finding the zeros of v(t) on [a, b], splitting the interval at each sign change, and adding the absolute values of the sub-integrals. On calculator-active problems, the absolute value integral can be evaluated directly with a CAS or numerical integrator.",
    steps: [
      "Find all zeros of $v(t)$ on $[a, b]$ by solving $v(t) = 0$; these are the points where the particle reverses direction.",
      "Split $[a, b]$ into subintervals on each of which $v(t)$ does not change sign.",
      "Integrate $v(t)$ over each subinterval and take the absolute value of each result.",
      "Sum the absolute values: $\\text{Total distance} = \\sum |\\int_{t_i}^{t_{i+1}} v(t)\\,dt|$.",
      "Alternatively, evaluate $\\int_a^b |v(t)|\\,dt$ directly on a graphing calculator.",
    ],
    examples: [
      {
        problem:
          "A particle has velocity $v(t) = t^2 - 4$ on $[0, 3]$. Find the total distance traveled.",
        solution:
          "$v(t)=0$ when $t=2$ (on $[0,3]$). On $[0,2]$: $v < 0$; on $[2,3]$: $v > 0$. $\\int_0^2(t^2-4)\\,dt = \\left[\\frac{t^3}{3}-4t\\right]_0^2 = \\frac{8}{3}-8 = -\\frac{16}{3}$. $\\int_2^3(t^2-4)\\,dt = (9-12)-(\\frac{8}{3}-8) = -3+\\frac{16}{3} = \\frac{7}{3}$. Total distance $= \\frac{16}{3}+\\frac{7}{3} = \\frac{23}{3}$.",
      },
    ],
    mcqs: [
      {
        question:
          "Why must you take the absolute value (or split at zeros) when computing total distance rather than simply evaluating $\\int_a^b v(t)\\,dt$?",
        options: [
          "Because when $v(t) < 0$, the integral is negative, and distance traveled in the negative direction would be subtracted rather than added.",
          "Because the absolute value makes differentiation easier.",
          "Because total distance is always zero for a closed path.",
          "Because velocity must be non-negative by definition.",
        ],
        answerIndex: 0,
        explanation:
          "When velocity is negative, the signed integral subtracts that portion, yielding net displacement. To count all motion as positive (total distance), we need $\\int|v|$, which flips negative pieces to positive. Velocity can certainly be negative (backward motion); it need not be non-negative. Total distance is not always zero — only displacement over a closed path is zero.",
      },
      {
        question:
          "A particle moves with $v(t) = \\cos t$ on $[0, \\pi]$. The total distance traveled is:",
        options: ["0", "1", "2", "$\\pi$"],
        answerIndex: 2,
        explanation:
          "$v(t)=0$ at $t=\\pi/2$. On $[0,\\pi/2]$: $v > 0$, $\\int_0^{\\pi/2}\\cos t\\,dt = 1$. On $[\\pi/2,\\pi]$: $v < 0$, $|\\int_{\\pi/2}^{\\pi}\\cos t\\,dt| = |-1| = 1$. Total distance $= 1+1=2$. The net displacement is $\\int_0^\\pi\\cos t\\,dt = 0$, not the total distance.",
      },
    ],
  },
  {
    id: "area-accumulation-context",
    name: "Area as Accumulation in Applied Context",
    unit: "Unit 8: Applications of Integration",
    unitNumber: 8,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "In applied problems, a definite integral represents the accumulated total of a rate — such as total flow, total cost, or total population change — over a time interval.",
    description:
      "The Net Change Theorem states that the definite integral of a rate of change gives the total accumulated change in the underlying quantity. In context, this means $\\int_a^b R(t)\\,dt$ represents the total amount accumulated (water pumped, money earned, population grown) when R(t) is a rate. Reading and interpreting the units — rate × time = total quantity — is essential for full credit on FRQ problems.",
    steps: [
      "Identify the rate function $R(t)$ and the quantity it is the rate of (e.g., gallons per minute → total gallons).",
      "Determine the interval $[a, b]$ over which accumulation is measured.",
      "Set up $\\text{Total} = \\int_a^b R(t)\\,dt$ and identify the units of the result (units of R times units of t).",
      "Evaluate the integral using antiderivatives, FTC, or a given graph/table (Riemann sum approximation if needed).",
      "Interpret the result in context: state what quantity has been accumulated and check the sign (negative accumulation = net decrease).",
    ],
    examples: [
      {
        problem:
          "Water flows into a tank at a rate of $R(t) = 2t + 1$ gallons per minute for $0 \\le t \\le 5$ minutes. How many gallons enter the tank?",
        solution:
          "$\\int_0^5 (2t+1)\\,dt = \\left[t^2+t\\right]_0^5 = 25+5 = 30$ gallons.",
      },
    ],
    mcqs: [
      {
        question:
          "If $R(t)$ is the rate (in people per year) at which a city's population is growing, what does $\\int_0^{10} R(t)\\,dt$ represent?",
        options: [
          "The total increase in population over the 10-year period.",
          "The average population during the 10 years.",
          "The rate of population growth at $t = 10$.",
          "The population at $t = 10$.",
        ],
        answerIndex: 0,
        explanation:
          "Integrating a rate of change over an interval gives the net change (accumulation) in the quantity, not the quantity itself. $\\int_0^{10}R(t)\\,dt$ is the total number of people added over 10 years. To get the population at $t=10$, you would need to add this to the initial population. Average population uses $\\frac{1}{10}\\int_0^{10}P(t)\\,dt$, and the rate at $t=10$ is just $R(10)$.",
      },
      {
        question:
          "A car's fuel consumption rate (in gallons per hour) is $C(t) = 3 - 0.5t$ for $0 \\le t \\le 4$ hours. The total fuel used is:",
        options: ["4 gallons", "6 gallons", "8 gallons", "3 gallons"],
        answerIndex: 0,
        explanation:
          "$\\int_0^4(3-0.5t)\\,dt = \\left[3t - 0.25t^2\\right]_0^4 = (12-4) - 0 = 8-4=4$ gallons. A common error is evaluating $C(4)=3-2=1$ or using $C(0)\\cdot 4=12$; the correct approach integrates the rate over the interval.",
      },
    ],
  },
];
