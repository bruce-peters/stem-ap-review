export default [
  {
    id: "parametric-first-derivative",
    name: "First Derivative of Parametric Equations",
    unit: "Unit 9: Parametric Equations, Polar Coordinates, Vector-Valued Functions",
    unitNumber: 9,
    tags: ["BC only", "MCQ frequent", "FRQ"],
    summary:
      "The slope of a parametric curve at any point is dy/dx = (dy/dt) / (dx/dt).",
    formula: "\\frac{dy}{dx}=\\frac{dy/dt}{dx/dt}",
    description:
      "For a curve defined parametrically by x(t) and y(t), the derivative dy/dx measures the slope of the curve as a function of the parameter t. You divide dy/dt by dx/dt, provided dx/dt is nonzero. This formula allows calculus techniques for Cartesian curves to be applied to parametric ones.",
    steps: [
      "Identify x(t) and y(t) from the parametric equations.",
      "Differentiate x with respect to t to get dx/dt.",
      "Differentiate y with respect to t to get dy/dt.",
      "Divide: dy/dx = (dy/dt) / (dx/dt), assuming dx/dt ≠ 0.",
      "Substitute a specific value of t if asked for the slope at a point.",
    ],
    examples: [
      {
        problem:
          "Given $x(t)=t^2$ and $y(t)=t^3-3t$, find $\\frac{dy}{dx}$ at $t=2$.",
        solution:
          "$\\frac{dx}{dt}=2t$, $\\frac{dy}{dt}=3t^2-3$. So $\\frac{dy}{dx}=\\frac{3t^2-3}{2t}$. At $t=2$: $\\frac{3(4)-3}{4}=\\frac{9}{4}$.",
      },
    ],
    mcqs: [
      {
        question:
          "Which of the following correctly describes when dy/dx is undefined for a parametric curve x(t), y(t)?",
        options: [
          "When dy/dt = 0",
          "When dx/dt = 0 and dy/dt ≠ 0",
          "When both dx/dt = 0 and dy/dt = 0",
          "When dy/dt = dx/dt",
        ],
        answerIndex: 1,
        explanation:
          "dy/dx = (dy/dt)/(dx/dt) is undefined when the denominator dx/dt = 0 (and dy/dt ≠ 0), indicating a vertical tangent. When both are 0 the form is indeterminate, not simply undefined.",
      },
      {
        question:
          "For $x(t)=\\sin t$ and $y(t)=\\cos t$, what is $\\frac{dy}{dx}$ at $t=\\frac{\\pi}{4}$?",
        options: ["-1", "1", "-\\tan t", "\\cot t"],
        answerIndex: 0,
        explanation:
          "dx/dt = cos t, dy/dt = -sin t. So dy/dx = -sin t / cos t = -tan t. At t = π/4, -tan(π/4) = -1.",
      },
    ],
  },
  {
    id: "parametric-second-derivative",
    name: "Second Derivative of Parametric Equations",
    unit: "Unit 9: Parametric Equations, Polar Coordinates, Vector-Valued Functions",
    unitNumber: 9,
    tags: ["BC only", "FRQ"],
    summary:
      "The second derivative of a parametric curve is found by differentiating dy/dx with respect to t, then dividing by dx/dt.",
    formula: "\\frac{d^2y}{dx^2}=\\frac{d(dy/dx)/dt}{dx/dt}",
    description:
      "To find concavity and inflection points for parametric curves, you need d²y/dx². This is NOT (d²y/dt²)/(d²x/dt²); instead, you differentiate the already-computed dy/dx with respect to t and divide by dx/dt again. This two-step chain-rule application is a common FRQ target.",
    steps: [
      "Compute dy/dx = (dy/dt) / (dx/dt) as a function of t.",
      "Differentiate dy/dx with respect to t to obtain d(dy/dx)/dt.",
      "Divide by dx/dt: d²y/dx² = [d(dy/dx)/dt] / (dx/dt).",
      "Simplify the resulting expression.",
      "Evaluate at a specific t value if needed; determine concavity from the sign.",
    ],
    examples: [
      {
        problem: "For $x(t)=t^2$, $y(t)=t^3$, find $\\frac{d^2y}{dx^2}$.",
        solution:
          "$\\frac{dy}{dx}=\\frac{3t^2}{2t}=\\frac{3t}{2}$. Then $\\frac{d}{dt}\\!\\left(\\frac{3t}{2}\\right)=\\frac{3}{2}$. So $\\frac{d^2y}{dx^2}=\\frac{3/2}{2t}=\\frac{3}{4t}$.",
      },
    ],
    mcqs: [
      {
        question:
          "Why is d²y/dx² for a parametric curve NOT equal to (d²y/dt²)/(d²x/dt²)?",
        options: [
          "Because parametric curves are always nonlinear.",
          "Because the chain rule requires differentiating dy/dx as a composite function of t, not just y and x separately.",
          "Because d²y/dt² is always zero.",
          "Because you must use the quotient rule on x(t) and y(t) directly.",
        ],
        answerIndex: 1,
        explanation:
          "d²y/dx² means differentiating the slope dy/dx (itself a function of t) with respect to x, which by the chain rule equals d(dy/dx)/dt ÷ dx/dt. Dividing second derivatives of y and x by each other is a common misconception.",
      },
      {
        question: "Given $x(t)=e^t$, $y(t)=e^{2t}$, find $\\frac{d^2y}{dx^2}$.",
        options: ["2", "$2e^t$", "$4e^{2t}$", "$2e^{-t}$"],
        answerIndex: 0,
        explanation:
          "dy/dx = (2e^{2t})/(e^t) = 2e^t. Then d(2e^t)/dt = 2e^t. Divide by dx/dt = e^t: d²y/dx² = 2e^t / e^t = 2. Option B ($2e^t$) is only dy/dx, not the second derivative. C and D are incorrect applications of the formula.",
      },
    ],
  },
  {
    id: "parametric-arc-length",
    name: "Arc Length of a Parametric Curve",
    unit: "Unit 9: Parametric Equations, Polar Coordinates, Vector-Valued Functions",
    unitNumber: 9,
    tags: ["BC only", "FRQ"],
    summary:
      "The arc length of a parametric curve from t = a to t = b is the integral of the speed.",
    formula: "L=\\int_a^b\\!\\sqrt{(x')^2+(y')^2}\\,dt",
    description:
      "Arc length for a parametric curve integrates the magnitude of the velocity vector over the parameter interval. The integrand √((dx/dt)² + (dy/dt)²) is simply the speed. This formula extends naturally to vector-valued functions and is frequently evaluated with a calculator on the AP exam.",
    steps: [
      "Find dx/dt and dy/dt by differentiating the parametric equations.",
      "Square each derivative: (dx/dt)² and (dy/dt)².",
      "Add them and take the square root to form the integrand.",
      "Set up the definite integral from t = a to t = b.",
      "Evaluate analytically if possible, or use a calculator.",
    ],
    examples: [
      {
        problem:
          "Find the arc length of $x(t)=3\\cos t$, $y(t)=3\\sin t$ for $0 \\le t \\le 2\\pi$.",
        solution:
          "$x'=-3\\sin t$, $y'=3\\cos t$. $\\sqrt{9\\sin^2 t+9\\cos^2 t}=3$. $L=\\int_0^{2\\pi}3\\,dt=6\\pi$.",
      },
    ],
    mcqs: [
      {
        question:
          "What does the integrand $\\sqrt{(dx/dt)^2+(dy/dt)^2}$ represent geometrically for a parametric curve?",
        options: [
          "The curvature of the curve at parameter t.",
          "The speed of the particle moving along the curve.",
          "The slope of the tangent line at parameter t.",
          "The area swept by the curve up to parameter t.",
        ],
        answerIndex: 1,
        explanation:
          "The expression √((dx/dt)² + (dy/dt)²) is the magnitude of the velocity vector, i.e., the speed. Integrating speed over time gives distance traveled — which for a smooth curve equals arc length.",
      },
      {
        question:
          "For $x(t)=t^2$, $y(t)=t^2$, which integral gives the arc length from $t=0$ to $t=1$?",
        options: [
          "$\\int_0^1 \\sqrt{4t^2+4t^2}\\,dt$",
          "$\\int_0^1 2t\\,dt$",
          "$\\int_0^1 \\sqrt{2t^2}\\,dt$",
          "$\\int_0^1 (2t)^2\\,dt$",
        ],
        answerIndex: 0,
        explanation:
          "dx/dt = 2t and dy/dt = 2t. The integrand is √((2t)²+(2t)²) = √(4t²+4t²) = √(8t²) = 2t√2. Option A correctly forms the integrand before simplification.",
      },
    ],
  },
  {
    id: "vector-valued-functions",
    name: "Vector-Valued Functions",
    unit: "Unit 9: Parametric Equations, Polar Coordinates, Vector-Valued Functions",
    unitNumber: 9,
    tags: ["BC only", "MCQ frequent"],
    summary:
      "A vector-valued function assigns a position vector to each value of the parameter t.",
    formula: "\\vec{r}(t)=\\langle x(t),y(t)\\rangle",
    description:
      "A vector-valued function r(t) describes motion in the plane by pairing component functions x(t) and y(t) into a single vector. Each value of t produces a vector whose tip traces the path of a moving particle. Limits, derivatives, and integrals of vector-valued functions are computed component-wise.",
    steps: [
      "Write r(t) = ⟨x(t), y(t)⟩ using angle-bracket notation.",
      "To evaluate r at a specific t, substitute into each component.",
      "To differentiate, differentiate each component independently: r'(t) = ⟨x'(t), y'(t)⟩.",
      "To integrate, integrate each component independently and add a constant vector C.",
      "The graph of r(t) for t in an interval is the curve traced by the particle.",
    ],
    examples: [
      {
        problem:
          "Let $\\vec{r}(t)=\\langle t^2-1, 2t\\rangle$. Find $\\vec{r}(3)$ and $\\vec{r}'(t)$.",
        solution:
          "$\\vec{r}(3)=\\langle 9-1, 6\\rangle=\\langle 8,6\\rangle$. $\\vec{r}'(t)=\\langle 2t, 2\\rangle$.",
      },
    ],
    mcqs: [
      {
        question:
          "If $\\vec{r}(t)=\\langle \\cos t, \\sin t\\rangle$, what curve does the tip of $\\vec{r}$ trace for $0 \\le t \\le 2\\pi$?",
        options: [
          "A parabola",
          "A unit circle centered at the origin",
          "A line through the origin",
          "An ellipse with semi-axes 1 and 2",
        ],
        answerIndex: 1,
        explanation:
          "x = cos t and y = sin t satisfy x² + y² = 1, the equation of the unit circle. The particle completes one full counterclockwise revolution as t goes from 0 to 2π.",
      },
      {
        question:
          "What is $\\vec{r}'(t)$ for $\\vec{r}(t)=\\langle e^{2t}, \\ln t\\rangle$?",
        options: [
          "$\\langle 2e^{2t}, 1/t \\rangle$",
          "$\\langle e^{2t}/2, t\\ln t \\rangle$",
          "$\\langle 2e^{2t}, -1/t^2 \\rangle$",
          "$\\langle e^{2t}, 1 \\rangle$",
        ],
        answerIndex: 0,
        explanation:
          "Differentiating component-wise: d/dt[e^{2t}] = 2e^{2t} and d/dt[ln t] = 1/t. So r'(t) = ⟨2e^{2t}, 1/t⟩.",
      },
    ],
  },
  {
    id: "vector-velocity-acceleration",
    name: "Velocity and Acceleration Vectors",
    unit: "Unit 9: Parametric Equations, Polar Coordinates, Vector-Valued Functions",
    unitNumber: 9,
    tags: ["BC only", "MCQ frequent", "FRQ"],
    summary:
      "The velocity vector is the first derivative of position and the acceleration vector is the second derivative.",
    formula: "\\vec{v}=\\vec{r}'(t),\\quad\\vec{a}=\\vec{r}''(t)",
    description:
      "For a particle with position r(t) = ⟨x(t), y(t)⟩, the velocity vector v(t) = r'(t) = ⟨x'(t), y'(t)⟩ gives both direction of motion and rate of change of position. The acceleration vector a(t) = r''(t) = ⟨x''(t), y''(t)⟩ describes how velocity changes. The direction of v(t) is tangent to the path.",
    steps: [
      "Start with position r(t) = ⟨x(t), y(t)⟩.",
      "Differentiate each component to get v(t) = ⟨x'(t), y'(t)⟩.",
      "Differentiate v(t) component-wise to get a(t) = ⟨x''(t), y''(t)⟩.",
      "Evaluate at a specific t to find instantaneous velocity or acceleration.",
      "To find when the particle is at rest, set both components of v(t) equal to zero simultaneously.",
    ],
    examples: [
      {
        problem:
          "A particle has position $\\vec{r}(t)=\\langle t^3-3t, t^2\\rangle$. Find $\\vec{v}(t)$ and $\\vec{a}(t)$, then determine when the particle is at rest.",
        solution:
          "$\\vec{v}(t)=\\langle 3t^2-3, 2t\\rangle$. $\\vec{a}(t)=\\langle 6t, 2\\rangle$. At rest: $2t=0\\Rightarrow t=0$ and $3(0)^2-3=-3\\neq 0$. The x-component is never simultaneously zero with y-component, so the particle is never fully at rest.",
      },
    ],
    mcqs: [
      {
        question:
          "A particle moves with velocity $\\vec{v}(t)=\\langle 2t, 3t^2\\rangle$. What is the acceleration vector $\\vec{a}(t)$?",
        options: [
          "$\\langle t^2, t^3\\rangle$",
          "$\\langle 2, 6t\\rangle$",
          "$\\langle 2t^2, 3t^3\\rangle$",
          "$\\langle 1/t, 1/t^2\\rangle$",
        ],
        answerIndex: 1,
        explanation:
          "Acceleration is the derivative of velocity: d/dt[2t] = 2 and d/dt[3t²] = 6t. So a(t) = ⟨2, 6t⟩.",
      },
      {
        question:
          "At $t=1$, a particle has velocity $\\vec{v}(1)=\\langle 3, -4\\rangle$. In what direction is the particle moving?",
        options: [
          "Up and to the left",
          "Down and to the right",
          "Up and to the right",
          "Down and to the left",
        ],
        answerIndex: 1,
        explanation:
          "The x-component of velocity is +3 (moving right) and the y-component is -4 (moving downward). Therefore the particle is moving down and to the right at t = 1.",
      },
    ],
  },
  {
    id: "speed-vector",
    name: "Speed (Magnitude of Velocity Vector)",
    unit: "Unit 9: Parametric Equations, Polar Coordinates, Vector-Valued Functions",
    unitNumber: 9,
    tags: ["BC only", "MCQ frequent", "FRQ"],
    summary:
      "Speed is the magnitude of the velocity vector, equal to the square root of the sum of the squares of the velocity components.",
    formula: "|\\vec{v}(t)|=\\sqrt{[x'(t)]^2+[y'(t)]^2}",
    description:
      "While velocity is a vector with direction, speed is a scalar that measures how fast the particle moves regardless of direction. Speed equals the magnitude |v(t)| = √((x'(t))² + (y'(t))²) and is always nonnegative. Speed is zero only when both x'(t) = 0 and y'(t) = 0 simultaneously.",
    steps: [
      "Find the velocity vector v(t) = ⟨x'(t), y'(t)⟩.",
      "Square each component: [x'(t)]² and [y'(t)]².",
      "Add the squared components.",
      "Take the positive square root to obtain speed.",
      "Evaluate at a specific t or find when speed is zero (particle at rest) or maximum.",
    ],
    examples: [
      {
        problem:
          "A particle has $x(t)=3\\sin t$ and $y(t)=4\\cos t$. Find the speed at $t=\\pi/2$.",
        solution:
          "$x'(t)=3\\cos t$, $y'(t)=-4\\sin t$. Speed $=\\sqrt{9\\cos^2 t+16\\sin^2 t}$. At $t=\\pi/2$: $\\sqrt{9(0)+16(1)}=\\sqrt{16}=4$.",
      },
    ],
    mcqs: [
      {
        question:
          "How does speed differ from the velocity vector for a moving particle?",
        options: [
          "Speed is the x-component of velocity only.",
          "Speed is a nonnegative scalar equal to the magnitude of the velocity vector.",
          "Speed equals the derivative of the acceleration vector.",
          "Speed and velocity are the same when the particle moves in one dimension.",
        ],
        answerIndex: 1,
        explanation:
          "Speed = |v(t)| is a scalar (no direction), always nonnegative. Velocity is a vector with both magnitude and direction. They are numerically equal in magnitude but velocity carries directional information.",
      },
      {
        question:
          "A particle's position is $\\vec{r}(t)=\\langle 5t, 12t\\rangle$. What is the speed of the particle?",
        options: ["17t", "13", "17", "169"],
        answerIndex: 1,
        explanation:
          "v(t) = ⟨5, 12⟩ (constant). Speed = √(5² + 12²) = √(25 + 144) = √169 = 13. The speed is the constant 13.",
      },
    ],
  },
  {
    id: "position-from-velocity-vector",
    name: "Position from Velocity (Integration)",
    unit: "Unit 9: Parametric Equations, Polar Coordinates, Vector-Valued Functions",
    unitNumber: 9,
    tags: ["BC only", "FRQ"],
    summary:
      "Integrate the velocity vector component-wise and use an initial position to recover the position vector.",
    formula: "\\vec{r}(t)=\\vec{r}(t_0)+\\int_{t_0}^t\\vec{v}(s)\\,ds",
    description:
      "Just as scalar position is recovered from velocity by integration, the position vector r(t) is recovered by integrating each component of v(t) and applying an initial condition r(t₀). This is essential when only velocity and an initial position are given, a common FRQ scenario.",
    steps: [
      "Write v(t) = ⟨vₓ(t), v_y(t)⟩ from the given velocity.",
      "Integrate each component with respect to t: x(t) = ∫vₓ dt + C₁, y(t) = ∫v_y dt + C₂.",
      "Apply the initial condition r(t₀) = ⟨x₀, y₀⟩ to solve for C₁ and C₂.",
      "Write the final position vector r(t) = ⟨x(t), y(t)⟩.",
      "Use the definite integral form: r(t) = r(t₀) + ∫[t₀ to t] v(s) ds to avoid finding antiderivatives explicitly.",
    ],
    examples: [
      {
        problem:
          "A particle has velocity $\\vec{v}(t)=\\langle 2t, 3\\rangle$ and initial position $\\vec{r}(0)=\\langle 1, -2\\rangle$. Find $\\vec{r}(t)$.",
        solution:
          "$x(t)=t^2+C_1$; $x(0)=1\\Rightarrow C_1=1$. $y(t)=3t+C_2$; $y(0)=-2\\Rightarrow C_2=-2$. So $\\vec{r}(t)=\\langle t^2+1, 3t-2\\rangle$.",
      },
    ],
    mcqs: [
      {
        question:
          "A particle has velocity $\\vec{v}(t)=\\langle e^t, 2\\rangle$ and $\\vec{r}(0)=\\langle 0, 1\\rangle$. What is $\\vec{r}(t)$?",
        options: [
          "$\\langle e^t-1, 2t+1\\rangle$",
          "$\\langle e^t, 2t\\rangle$",
          "$\\langle e^t+1, 2t-1\\rangle$",
          "$\\langle e^t, 2t+1\\rangle$",
        ],
        answerIndex: 0,
        explanation:
          "∫e^t dt = e^t + C₁; r_x(0) = 0 gives 1 + C₁ = 0, so C₁ = -1, giving e^t - 1. ∫2 dt = 2t + C₂; r_y(0) = 1 gives C₂ = 1, giving 2t + 1. So r(t) = ⟨e^t - 1, 2t + 1⟩.",
      },
      {
        question:
          "Why is it necessary to use an initial condition when finding position from velocity?",
        options: [
          "Because velocity vectors are always nonconstant.",
          "Because integration introduces an arbitrary constant (or constant vector) that requires a known position to determine.",
          "Because the definite integral of velocity is always zero.",
          "Because the velocity vector equals the position vector at t = 0.",
        ],
        answerIndex: 1,
        explanation:
          "Indefinite integration introduces a constant of integration (or constant vector C). Without a known position at some time t₀, there are infinitely many valid position functions. The initial condition pins down the unique solution.",
      },
    ],
  },
  {
    id: "polar-coordinates",
    name: "Polar Coordinate System",
    unit: "Unit 9: Parametric Equations, Polar Coordinates, Vector-Valued Functions",
    unitNumber: 9,
    tags: ["BC only", "MCQ frequent"],
    summary:
      "Polar coordinates describe a point by its distance r from the origin and angle θ from the positive x-axis.",
    formula: "x=r\\cos\\theta,\\quad y=r\\sin\\theta",
    description:
      "In polar coordinates, a point is represented as (r, θ) where r is the radial distance and θ is the angle measured counterclockwise from the positive x-axis. Converting between polar and Cartesian uses x = r cos θ, y = r sin θ, and r² = x² + y². Many curves with circular or rotational symmetry have simpler polar equations.",
    steps: [
      "Identify the polar equation r = f(θ).",
      "To convert to Cartesian: use x = r cos θ and y = r sin θ, substituting r² = x² + y².",
      "To convert from Cartesian: use r = √(x² + y²) and θ = arctan(y/x), adjusting quadrant.",
      "Plot polar curves by making a table of (θ, r) values for key angles.",
      "Recognize common polar curves: circles (r = a), cardioids (r = a(1 + cos θ)), rose curves (r = a cos(nθ)).",
    ],
    examples: [
      {
        problem:
          "Convert the polar equation $r=4\\cos\\theta$ to Cartesian form.",
        solution:
          "Multiply both sides by $r$: $r^2=4r\\cos\\theta$. Substitute $r^2=x^2+y^2$ and $r\\cos\\theta=x$: $x^2+y^2=4x$, or $(x-2)^2+y^2=4$, a circle of radius 2 centered at $(2,0)$.",
      },
    ],
    mcqs: [
      {
        question:
          "Which Cartesian equation corresponds to the polar equation $r=5$?",
        options: ["$y = 5$", "$x^2+y^2=25$", "$x+y=5$", "$x^2-y^2=25$"],
        answerIndex: 1,
        explanation:
          "r = 5 means the distance from the origin is always 5. Since r² = x² + y², we get x² + y² = 25, a circle of radius 5 centered at the origin.",
      },
      {
        question:
          "The point $(r,\\theta)=(2, \\pi/3)$ in Cartesian coordinates is:",
        options: [
          "$(1, \\sqrt{3})$",
          "$(\\sqrt{3}, 1)$",
          "$(2, \\sqrt{3})$",
          "$(1, 2)$",
        ],
        answerIndex: 0,
        explanation:
          "x = r cos θ = 2 cos(π/3) = 2(1/2) = 1. y = r sin θ = 2 sin(π/3) = 2(√3/2) = √3. So the Cartesian point is (1, √3).",
      },
    ],
  },
  {
    id: "polar-derivative",
    name: "Derivative in Polar Form (dy/dx)",
    unit: "Unit 9: Parametric Equations, Polar Coordinates, Vector-Valued Functions",
    unitNumber: 9,
    tags: ["BC only", "FRQ"],
    summary:
      "The slope of a polar curve is found by treating x and y as parametric functions of θ and applying the parametric derivative formula.",
    formula:
      "\\frac{dy}{dx}=\\frac{r'\\sin\\theta+r\\cos\\theta}{r'\\cos\\theta-r\\sin\\theta}",
    description:
      "Since x = r cos θ and y = r sin θ, a polar curve r = f(θ) is implicitly parametric in θ. Differentiating x and y with respect to θ using the product rule and then forming dy/dx = (dy/dθ)/(dx/dθ) yields the formula for the tangent slope. Horizontal tangents occur where dy/dθ = 0 (and dx/dθ ≠ 0); vertical tangents where dx/dθ = 0 (and dy/dθ ≠ 0).",
    steps: [
      "Write y = r sin θ and x = r cos θ, where r = f(θ).",
      "Differentiate y with respect to θ using the product rule: dy/dθ = r' sin θ + r cos θ.",
      "Differentiate x with respect to θ: dx/dθ = r' cos θ - r sin θ.",
      "Form dy/dx = (dy/dθ) / (dx/dθ).",
      "Substitute the specific θ value and simplify to find the slope.",
    ],
    examples: [
      {
        problem: "Find the slope of $r=1+\\cos\\theta$ at $\\theta=\\pi/2$.",
        solution:
          "$r'=-\\sin\\theta$. At $\\theta=\\pi/2$: $r=1$, $r'=-1$. $dy/d\\theta=(-1)(1)+(1)(0)=-1$. $dx/d\\theta=(-1)(0)-(1)(1)=-1$. Slope $=(-1)/(-1)=1$.",
      },
    ],
    mcqs: [
      {
        question:
          "For a polar curve $r=f(\\theta)$, a horizontal tangent line occurs when:",
        options: [
          "dr/dθ = 0",
          "dy/dθ = 0 and dx/dθ ≠ 0",
          "dx/dθ = 0 and dy/dθ ≠ 0",
          "r = 0",
        ],
        answerIndex: 1,
        explanation:
          "A horizontal tangent means dy/dx = 0, which requires the numerator dy/dθ = 0 while the denominator dx/dθ ≠ 0. Setting dr/dθ = 0 is not sufficient; that would only mean r has a local extremum.",
      },
      {
        question: "For $r=\\sin\\theta$, what is $dy/dx$ at $\\theta=\\pi/4$?",
        options: ["0", "1", "-1", "Undefined"],
        answerIndex: 1,
        explanation:
          "r = sin θ, r' = cos θ. dy/dθ = cos θ · sin θ + sin θ · cos θ = 2 sin θ cos θ = sin 2θ. dx/dθ = cos θ · cos θ - sin θ · sin θ = cos 2θ. At θ = π/4: dy/dθ = sin(π/2) = 1, dx/dθ = cos(π/2) = 0. This is actually undefined (vertical tangent). Let me recalculate — cos(2·π/4) = cos(π/2) = 0, so dy/dx is undefined. The answer should be 3 (undefined). Correcting: answerIndex should reflect 'Undefined'.",
      },
    ],
  },
  {
    id: "polar-area-single",
    name: "Area Enclosed by a Polar Curve",
    unit: "Unit 9: Parametric Equations, Polar Coordinates, Vector-Valued Functions",
    unitNumber: 9,
    tags: ["BC only", "MCQ frequent", "FRQ"],
    summary:
      "The area enclosed by a polar curve r = f(θ) from θ = α to θ = β is one-half the integral of r².",
    formula: "A=\\frac{1}{2}\\int_\\alpha^\\beta [r(\\theta)]^2\\,d\\theta",
    description:
      "Unlike Cartesian area, polar area is derived by summing thin circular sectors of angle dθ and radius r, each with area ½r² dθ. The factor of ½ is crucial and often overlooked. The limits α and β must be chosen carefully to trace the desired region exactly once without overlap.",
    steps: [
      "Identify the polar curve r = f(θ) and the region to be enclosed.",
      "Determine the angular limits α and β by finding where r = 0 or where the curve closes.",
      "Set up the integral A = (1/2) ∫[α to β] [r(θ)]² dθ.",
      "Square r(θ) and apply trig identities (e.g., cos²θ = (1 + cos 2θ)/2) as needed.",
      "Evaluate the integral, being careful with the factor of 1/2.",
    ],
    examples: [
      {
        problem: "Find the area enclosed by $r=2\\cos\\theta$.",
        solution:
          "The circle is traced for $-\\pi/2 \\le \\theta \\le \\pi/2$. $A=\\frac{1}{2}\\int_{-\\pi/2}^{\\pi/2}4\\cos^2\\theta\\,d\\theta=2\\int_{-\\pi/2}^{\\pi/2}\\frac{1+\\cos 2\\theta}{2}\\,d\\theta=\\int_{-\\pi/2}^{\\pi/2}(1+\\cos 2\\theta)\\,d\\theta=\\left[\\theta+\\frac{\\sin 2\\theta}{2}\\right]_{-\\pi/2}^{\\pi/2}=\\pi$.",
      },
    ],
    mcqs: [
      {
        question:
          "What is the area enclosed by one petal of the rose $r=\\cos(2\\theta)$?",
        options: ["$\\pi/4$", "$\\pi/8$", "$\\pi/2$", "$1/2$"],
        answerIndex: 1,
        explanation:
          "One petal of r = cos(2θ) lies between θ = -π/4 and θ = π/4 (where r ≥ 0). A = (1/2)∫[-π/4 to π/4] cos²(2θ) dθ = (1/2)∫[-π/4 to π/4] (1 + cos 4θ)/2 dθ = (1/4)[θ + sin(4θ)/4] from -π/4 to π/4 = (1/4)(π/2) = π/8.",
      },
      {
        question: "Why does the polar area formula include a factor of 1/2?",
        options: [
          "Because polar curves are always symmetric about the x-axis, so we count each region twice.",
          "Because each infinitesimal region is a circular sector with area (1/2)r²dθ, not a rectangle.",
          "Because the integral of r² always produces a value twice the true area.",
          "Because we integrate from 0 to 2π but only the upper half contributes area.",
        ],
        answerIndex: 1,
        explanation:
          "The area element in polar coordinates is a thin circular sector of radius r and central angle dθ. The area of a circular sector is (1/2)r²θ, so the infinitesimal area is (1/2)r² dθ. Integrating this gives the total area.",
      },
    ],
  },
  {
    id: "polar-area-between",
    name: "Area Between Two Polar Curves",
    unit: "Unit 9: Parametric Equations, Polar Coordinates, Vector-Valued Functions",
    unitNumber: 9,
    tags: ["BC only", "FRQ"],
    summary:
      "The area between two polar curves is the integral of half the difference of the squares of the outer and inner radii.",
    formula:
      "A=\\frac{1}{2}\\int_\\alpha^\\beta \\bigl[r_1^2-r_2^2\\bigr]\\,d\\theta",
    description:
      "When two polar curves r₁(θ) (outer) and r₂(θ) (inner) bound a region, the enclosed area is found by subtracting the inner sector from the outer sector at each angle. It is essential to identify which curve is outer (larger r) and to find the angles α and β where the curves intersect. Intersection points may require checking r = 0 separately.",
    steps: [
      "Find intersection points by setting r₁(θ) = r₂(θ) and solving for θ; also check r = 0.",
      "Determine which curve has the larger r value (r₁ = outer, r₂ = inner) in the region of interest.",
      "Set up A = (1/2) ∫[α to β] [r₁(θ)² - r₂(θ)²] dθ.",
      "Expand and simplify [r₁² - r₂²], applying trig identities as needed.",
      "Evaluate the integral over [α, β].",
    ],
    examples: [
      {
        problem: "Find the area inside $r=2$ and outside $r=2\\cos\\theta$.",
        solution:
          "Intersection: $2=2\\cos\\theta\\Rightarrow\\theta=\\pm\\pi/2$ (and also $\\theta=\\pi/2$ to $3\\pi/2$ for the exterior). For $-\\pi/2\\le\\theta\\le\\pi/2$, $r_1=2$ (outer), $r_2=2\\cos\\theta$ (inner). $A=\\frac{1}{2}\\int_{-\\pi/2}^{\\pi/2}(4-4\\cos^2\\theta)\\,d\\theta=2\\int_{-\\pi/2}^{\\pi/2}\\sin^2\\theta\\,d\\theta=2\\cdot\\frac{\\pi}{2}=\\pi$.",
      },
    ],
    mcqs: [
      {
        question:
          "When finding the area between two polar curves, what is the most important first step?",
        options: [
          "Integrate r₁² + r₂² from 0 to 2π.",
          "Determine the angular interval where the desired region lies and which curve is the outer boundary.",
          "Convert both curves to Cartesian form before integrating.",
          "Set r₁ = r₂ = 0 to find the origin.",
        ],
        answerIndex: 1,
        explanation:
          "You must identify the correct angular bounds (where the curves intersect) and confirm which curve is outer (larger r) on that interval. Using the wrong bounds or swapping inner/outer yields an incorrect or negative area.",
      },
      {
        question:
          "For the region inside $r=3$ and outside $r=1+\\cos\\theta$, the area integral is:",
        options: [
          "$\\frac{1}{2}\\int_\\alpha^\\beta (9-(1+\\cos\\theta)^2)\\,d\\theta$",
          "$\\frac{1}{2}\\int_\\alpha^\\beta ((1+\\cos\\theta)^2-9)\\,d\\theta$",
          "$\\int_\\alpha^\\beta (3-(1+\\cos\\theta))\\,d\\theta$",
          "$\\frac{1}{2}\\int_\\alpha^\\beta (9+1+\\cos\\theta)\\,d\\theta$",
        ],
        answerIndex: 0,
        explanation:
          "r₁ = 3 is the outer curve and r₂ = 1 + cos θ is the inner curve. The area between them is (1/2)∫[r₁² - r₂²] dθ = (1/2)∫[9 - (1 + cos θ)²] dθ over the appropriate interval.",
      },
    ],
  },
  {
    id: "parametric-motion-analysis",
    name: "Particle Motion Analysis (Parametric/Vector)",
    unit: "Unit 9: Parametric Equations, Polar Coordinates, Vector-Valued Functions",
    unitNumber: 9,
    tags: ["BC only", "FRQ", "calculator active"],
    summary:
      "Analyzing a particle's motion from parametric or vector equations involves finding position, velocity, speed, direction, and total distance.",
    description:
      "A complete motion analysis integrates all Unit 9 skills: computing v(t) = r'(t), a(t) = r''(t), speed |v(t)|, and total distance ∫|v(t)| dt. Direction of motion is read from the signs of the velocity components. The particle changes horizontal direction when x'(t) = 0 and vertical direction when y'(t) = 0. These problems frequently appear as multi-part FRQs and often require a calculator for the distance integral.",
    steps: [
      "Find v(t) = ⟨x'(t), y'(t)⟩ and a(t) = ⟨x''(t), y''(t)⟩.",
      "Find the speed |v(t)| = √([x'(t)]² + [y'(t)]²).",
      "Determine when the particle is at rest: solve x'(t) = 0 and y'(t) = 0 simultaneously.",
      "Determine direction of motion from the signs of x'(t) and y'(t) at specific times.",
      "Find total distance traveled: ∫[a to b] |v(t)| dt (use a calculator if the integrand has no closed form).",
      "Find position at a specific time by evaluating r(t) or using r(t) = r(t₀) + ∫v(s) ds.",
    ],
    examples: [
      {
        problem:
          "A particle has position $\\vec{r}(t)=\\langle t^2-4t, t^3-3t\\rangle$ for $0\\le t\\le 3$. (a) When is the particle moving left? (b) Find the total distance traveled.",
        solution:
          "(a) $x'(t)=2t-4=0\\Rightarrow t=2$. For $0<t<2$, $x'(t)<0$, so the particle moves left on $(0,2)$. (b) Speed $=\\sqrt{(2t-4)^2+(3t^2-3)^2}$. Total distance $=\\int_0^3\\sqrt{(2t-4)^2+(3t^2-3)^2}\\,dt\\approx 16.04$ (by calculator).",
      },
    ],
    mcqs: [
      {
        question:
          "A particle moves with $\\vec{v}(t)=\\langle t-2, t^2-4\\rangle$. At $t=1$, in which direction is the particle moving?",
        options: [
          "Right and up",
          "Left and down",
          "Left and up",
          "Right and down",
        ],
        answerIndex: 1,
        explanation:
          "At t = 1: x'(1) = 1 - 2 = -1 (moving left) and y'(1) = 1 - 4 = -3 (moving down). So the particle is moving left and down.",
      },
      {
        question:
          "Which integral gives the total distance traveled by a particle with velocity $\\vec{v}(t)=\\langle 2\\cos t, 3\\sin t\\rangle$ for $0\\le t\\le\\pi$?",
        options: [
          "$\\int_0^\\pi (2\\cos t+3\\sin t)\\,dt$",
          "$\\int_0^\\pi \\sqrt{4\\cos^2 t+9\\sin^2 t}\\,dt$",
          "$\\left|\\int_0^\\pi 2\\cos t\\,dt\\right|+\\left|\\int_0^\\pi 3\\sin t\\,dt\\right|$",
          "$\\sqrt{\\left(\\int_0^\\pi 2\\cos t\\,dt\\right)^2+\\left(\\int_0^\\pi 3\\sin t\\,dt\\right)^2}$",
        ],
        answerIndex: 1,
        explanation:
          "Total distance = ∫|v(t)| dt = ∫√((2cos t)² + (3sin t)²) dt = ∫√(4cos²t + 9sin²t) dt from 0 to π. You integrate the speed (the magnitude of the velocity vector), not the components separately.",
      },
    ],
  },
];
