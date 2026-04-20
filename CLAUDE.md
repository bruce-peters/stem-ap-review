# AP Study App — Project Spec

## Project Overview

React + Vite + TypeScript study app. shadcn/ui + Tailwind. KaTeX for math rendering. No backend — all content is static TypeScript data files. Deploy target: Vercel.

## Stack

- React 18 + Vite + TypeScript
- shadcn/ui (zinc/slate dark theme)
- Tailwind CSS
- KaTeX (npm, not CDN)
- No backend, no database

## File Structure

src/
data/
calcbc.ts # AP Calc BC content
physics.ts # placeholder
cs.ts # placeholder
components/
Math.tsx # reusable KaTeX wrapper (<Math inline /> and <Math block />)
SubjectTabs.tsx
UnitSidebar.tsx
TopicCard.tsx
TopicSheet.tsx # shadcn Sheet, slides in from right on card click
MCQBlock.tsx
StepList.tsx
App.tsx

## Data Schema

Every item in every data file must match this TypeScript type exactly:

```ts
type Topic = {
  id: string; // kebab-case unique id
  name: string; // display name
  unit: string; // e.g. "Unit 3: Differentiation Rules"
  unitNumber: number; // 1–8
  tags: string[]; // subset of: "MCQ frequent" | "FRQ" | "BC only" | "calculator active" | "theorem"
  summary: string; // one sentence max
  formula?: string; // LaTeX string, no $$ delimiters
  description: string; // 2–3 sentence conceptual explanation, plain English
  steps?: string[]; // numbered how-to, each step is a plain string (LaTeX allowed inline with $ $)
  examples?: {
    problem: string;
    solution: string;
  }[];
  mcqs?: {
    question: string;
    options: string[]; // always exactly 4
    answerIndex: number; // 0-indexed
    explanation: string; // why the answer is correct and why distractors are wrong
  }[];
};
```

## Content Inventory — AP Calculus BC

For each unit below, every item that is testable on the AP Calc BC exam.
Format: `ID | Name | Formula (LaTeX) | Tags`

---

### Unit 1: Limits and Continuity

```
limit-definition           | Definition of a Limit                          | \lim_{x \to a} f(x) = L                                                    | MCQ frequent
one-sided-limits           | One-Sided Limits                               | \lim_{x \to a^-} f(x),\ \lim_{x \to a^+} f(x)                             | MCQ frequent
limit-laws                 | Limit Laws (sum, product, quotient, scalar)    |                                                                             | MCQ frequent
squeeze-theorem            | Squeeze Theorem                                | g(x)\le f(x)\le h(x)\Rightarrow\lim f=\lim g                               | theorem, MCQ frequent
trig-special-limits        | Special Trigonometric Limits                   | \lim_{x\to 0}\frac{\sin x}{x}=1,\quad\lim_{x\to 0}\frac{1-\cos x}{x}=0   | MCQ frequent
limits-at-infinity         | Limits at Infinity / End Behavior              | \lim_{x\to\infty} f(x)                                                     | MCQ frequent
infinite-limits            | Infinite Limits                                | \lim_{x\to a} f(x)=\pm\infty                                               | MCQ frequent
vertical-asymptotes        | Vertical Asymptotes                            |                                                                             | MCQ frequent
horizontal-asymptotes      | Horizontal Asymptotes                          |                                                                             | MCQ frequent
continuity-definition      | Continuity at a Point (3-part definition)      |                                                                             | MCQ frequent, theorem
types-of-discontinuity     | Types of Discontinuity (removable, jump, infinite) |                                                                         | MCQ frequent
ivt                        | Intermediate Value Theorem                     |                                                                             | theorem, MCQ frequent, FRQ
```

---

### Unit 2: Differentiation — Definition and Fundamental Properties

```
derivative-limit-def       | Limit Definition of the Derivative             | f'(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}                                  | MCQ frequent, theorem
differentiability          | Differentiability Implies Continuity            |                                                                             | theorem, MCQ frequent
power-rule                 | Power Rule                                     | \frac{d}{dx}[x^n]=nx^{n-1}                                                 | MCQ frequent
sum-difference-rule        | Sum and Difference Rule                        | (f\pm g)'=f'\pm g'                                                          | MCQ frequent
constant-multiple-rule     | Constant Multiple Rule                         | (cf)'=cf'                                                                   | MCQ frequent
product-rule               | Product Rule                                   | (fg)'=f'g+fg'                                                               | MCQ frequent
quotient-rule              | Quotient Rule                                  | \left(\frac{f}{g}\right)'=\frac{f'g-fg'}{g^2}                              | MCQ frequent
sin-cos-derivatives        | Derivatives of Sine and Cosine                 | \frac{d}{dx}[\sin x]=\cos x,\quad\frac{d}{dx}[\cos x]=-\sin x              | MCQ frequent
all-trig-derivatives       | Derivatives of All Six Trig Functions          | \frac{d}{dx}[\tan x]=\sec^2 x,\quad\frac{d}{dx}[\sec x]=\sec x\tan x      | MCQ frequent
exp-log-derivatives        | Derivatives of e^x and ln x                   | \frac{d}{dx}[e^x]=e^x,\quad\frac{d}{dx}[\ln x]=\frac{1}{x}                | MCQ frequent
higher-order-derivatives   | Higher-Order Derivatives                       | f'',\ f''',\ f^{(n)}                                                        | MCQ frequent
```

---

### Unit 3: Differentiation — Composite, Implicit, Inverse

```
chain-rule                 | Chain Rule                                     | \frac{d}{dx}[f(g(x))]=f'(g(x))\cdot g'(x)                                  | MCQ frequent
chain-rule-leibniz         | Chain Rule — Leibniz Form                      | \frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dx}                              | MCQ frequent
implicit-differentiation   | Implicit Differentiation                       |                                                                             | MCQ frequent, FRQ
higher-order-implicit      | Second Derivative via Implicit Differentiation |                                                                             | FRQ
inverse-function-derivative| Derivative of an Inverse Function              | (f^{-1})'(b)=\frac{1}{f'(f^{-1}(b))}                                      | theorem, MCQ frequent
arcsin-arccos-derivatives  | Derivatives of arcsin and arccos               | \frac{d}{dx}[\arcsin x]=\frac{1}{\sqrt{1-x^2}}                             | MCQ frequent
arctan-derivative          | Derivative of arctan                           | \frac{d}{dx}[\arctan x]=\frac{1}{1+x^2}                                    | MCQ frequent
general-exp-log-derivatives| Derivatives of a^x and log_a x               | \frac{d}{dx}[a^x]=a^x\ln a,\quad\frac{d}{dx}[\log_a x]=\frac{1}{x\ln a}  | MCQ frequent
logarithmic-differentiation| Logarithmic Differentiation                    |                                                                             | FRQ
```

---

### Unit 4: Contextual Applications of Differentiation

```
motion-pva                 | Position, Velocity, Acceleration               | v(t)=s'(t),\quad a(t)=v'(t)                                                | MCQ frequent, FRQ, calculator active
speed-direction-motion     | Speed and Direction of Motion                  | \text{speed}=|v(t)|                                                         | MCQ frequent, FRQ
related-rates              | Related Rates                                  |                                                                             | FRQ, MCQ frequent
tangent-normal-lines       | Tangent and Normal Lines                       | y-f(a)=f'(a)(x-a)                                                           | MCQ frequent, FRQ
linear-approximation       | Local Linearity / Linear Approximation         | L(x)=f(a)+f'(a)(x-a)                                                       | MCQ frequent
lhopitals-rule             | L'Hôpital's Rule                               | \lim_{x\to a}\frac{f(x)}{g(x)}=\lim_{x\to a}\frac{f'(x)}{g'(x)}          | theorem, MCQ frequent
indeterminate-forms        | Indeterminate Forms                            | \tfrac{0}{0},\ \tfrac{\infty}{\infty},\ 0\cdot\infty,\ 1^\infty,\ 0^0     | MCQ frequent
rates-of-change-context    | Rates of Change in Applied Contexts            |                                                                             | FRQ, MCQ frequent
interpreting-derivatives   | Interpreting the Meaning of a Derivative       |                                                                             | MCQ frequent, FRQ
```

---

### Unit 5: Analytical Applications of Differentiation

```
evt                        | Extreme Value Theorem                          |                                                                             | theorem, MCQ frequent
mvt                        | Mean Value Theorem                             | f'(c)=\frac{f(b)-f(a)}{b-a}                                                | theorem, MCQ frequent, FRQ
critical-points            | Critical Points                                | f'(c)=0\ \text{or}\ f'(c)\ \text{DNE}                                      | MCQ frequent, FRQ
candidates-test            | Candidates Test (Closed Interval Method)       |                                                                             | MCQ frequent, FRQ, calculator active
first-derivative-test      | First Derivative Test                          |                                                                             | MCQ frequent, FRQ
second-derivative-test     | Second Derivative Test                         | f'(c)=0\ \text{and}\ f''(c)>0\Rightarrow\text{local min}                   | MCQ frequent
increasing-decreasing      | Increasing and Decreasing Intervals            | f'>0\Rightarrow\text{increasing}                                            | MCQ frequent, FRQ
concavity-inflection       | Concavity and Points of Inflection             | f''>0\Rightarrow\text{concave up}                                           | MCQ frequent, FRQ
optimization               | Optimization (Global and Local Extrema)        |                                                                             | FRQ, MCQ frequent, calculator active
connecting-f-fprime-fpp    | Connecting f, f', and f'' Graphically          |                                                                             | MCQ frequent, FRQ
sketching-from-derivatives | Sketching f from f' or f''                     |                                                                             | MCQ frequent
implicit-second-derivative | Second Derivative from Implicit Differentiation|                                                                             | FRQ
```

---

### Unit 6: Integration and Accumulation of Change

```
riemann-sums               | Riemann Sums (Left, Right, Midpoint)           | \sum_{i=1}^n f(x_i^*)\,\Delta x                                            | MCQ frequent, FRQ
trapezoidal-rule           | Trapezoidal Rule                               | \tfrac{\Delta x}{2}[f(x_0)+2f(x_1)+\cdots+f(x_n)]                         | MCQ frequent, FRQ
definite-integral-def      | Definite Integral as Limit of Riemann Sums     | \int_a^b f(x)\,dx=\lim_{n\to\infty}\sum_{i=1}^n f(x_i^*)\Delta x          | MCQ frequent
integral-properties        | Properties of Definite Integrals               | \int_a^b f+\int_b^c f=\int_a^c f                                            | MCQ frequent
ftc1                       | Fundamental Theorem of Calculus — Part 1       | \frac{d}{dx}\!\int_a^x f(t)\,dt=f(x)                                       | theorem, MCQ frequent, FRQ
ftc1-chain                 | FTC Part 1 with Chain Rule                     | \frac{d}{dx}\!\int_a^{g(x)}\!f(t)\,dt=f(g(x))\cdot g'(x)                  | MCQ frequent, FRQ
ftc2                       | Fundamental Theorem of Calculus — Part 2       | \int_a^b f(x)\,dx=F(b)-F(a)                                                 | theorem, MCQ frequent, FRQ
antiderivative-power       | Power Rule for Antiderivatives                 | \int x^n\,dx=\frac{x^{n+1}}{n+1}+C,\quad n\neq -1                         | MCQ frequent
trig-antiderivatives       | Antiderivatives of Trig Functions              | \int\sin x\,dx=-\cos x+C,\quad\int\cos x\,dx=\sin x+C                     | MCQ frequent
exp-log-antiderivatives    | Antiderivatives of Exponential and 1/x         | \int e^x\,dx=e^x+C,\quad\int\tfrac{1}{x}\,dx=\ln|x|+C                     | MCQ frequent
inverse-trig-antiderivatives| Integrals Yielding Inverse Trig Functions     | \int\frac{1}{\sqrt{1-x^2}}\,dx=\arcsin x+C                                 | MCQ frequent
u-substitution             | U-Substitution                                 |                                                                             | MCQ frequent, FRQ
accumulation-net-change    | Accumulation Functions and Net Change Theorem  | \int_a^b f'(x)\,dx=f(b)-f(a)                                               | MCQ frequent, FRQ
average-value              | Average Value of a Function                    | \bar{f}=\frac{1}{b-a}\int_a^b f(x)\,dx                                     | MCQ frequent, FRQ
integration-by-parts       | Integration by Parts                           | \int u\,dv=uv-\int v\,du                                                    | BC only, MCQ frequent, FRQ
partial-fractions          | Partial Fraction Decomposition                 |                                                                             | BC only, FRQ, MCQ frequent
improper-integrals         | Improper Integrals                             | \int_a^\infty f(x)\,dx=\lim_{b\to\infty}\int_a^b f(x)\,dx                  | BC only, FRQ, MCQ frequent
long-division-integration  | Polynomial Long Division Before Integration    |                                                                             | FRQ
```

---

### Unit 7: Differential Equations

```
slope-fields               | Slope Fields                                   |                                                                             | MCQ frequent, FRQ
verify-de-solution         | Verifying a Solution to a DE                   |                                                                             | FRQ
separation-of-variables    | Separation of Variables                        | \frac{dy}{dx}=g(x)h(y)\Rightarrow\int\frac{dy}{h(y)}=\int g(x)\,dx        | MCQ frequent, FRQ
general-particular-solution| General and Particular Solutions               |                                                                             | MCQ frequent, FRQ
exponential-growth-decay   | Exponential Growth and Decay Model             | \frac{dy}{dt}=ky\Rightarrow y=Ce^{kt}                                       | MCQ frequent, FRQ
de-modeling                | Modeling with Differential Equations           |                                                                             | FRQ
initial-value-problems     | Initial Value Problems                         |                                                                             | MCQ frequent, FRQ
euler-method               | Euler's Method                                 | y_{n+1}=y_n+h\cdot f(x_n,y_n)                                              | BC only, MCQ frequent, FRQ
logistic-growth-de         | Logistic Growth — Differential Equation        | \frac{dP}{dt}=kP\!\left(1-\frac{P}{L}\right)                               | BC only, MCQ frequent, FRQ
logistic-growth-solution   | Logistic Growth — Solution and Behavior        | P(t)=\frac{L}{1+Ae^{-kt}}                                                  | BC only, FRQ
```

---

### Unit 8: Applications of Integration

```
area-between-curves-x      | Area Between Curves (vertical slices)          | \int_a^b [f(x)-g(x)]\,dx                                                   | MCQ frequent, FRQ
area-between-curves-y      | Area Between Curves (horizontal slices)        | \int_c^d [f(y)-g(y)]\,dy                                                   | MCQ frequent, FRQ
disk-method                | Disk Method (Volume of Revolution)             | V=\pi\int_a^b [f(x)]^2\,dx                                                 | MCQ frequent, FRQ
washer-method              | Washer Method (Volume of Revolution)           | V=\pi\int_a^b \bigl([f(x)]^2-[g(x)]^2\bigr)\,dx                           | MCQ frequent, FRQ
shell-method               | Shell Method (Volume of Revolution)            | V=2\pi\int_a^b x\,f(x)\,dx                                                 | MCQ frequent, FRQ
cross-section-volume       | Volume with Known Cross Sections               | V=\int_a^b A(x)\,dx                                                         | MCQ frequent, FRQ
arc-length-cartesian       | Arc Length of a Cartesian Curve                | L=\int_a^b\sqrt{1+[f'(x)]^2}\,dx                                           | BC only, FRQ
net-displacement           | Net Displacement from Velocity                 | \int_a^b v(t)\,dt=s(b)-s(a)                                                 | MCQ frequent, FRQ
total-distance             | Total Distance Traveled                        | \int_a^b |v(t)|\,dt                                                          | MCQ frequent, FRQ, calculator active
area-accumulation-context  | Area as Accumulation in Applied Context        |                                                                             | MCQ frequent, FRQ
```

---

### Unit 9: Parametric Equations, Polar Coordinates, Vector-Valued Functions (BC only)

```
parametric-first-derivative    | First Derivative of Parametric Equations      | \frac{dy}{dx}=\frac{dy/dt}{dx/dt}                                          | BC only, MCQ frequent, FRQ
parametric-second-derivative   | Second Derivative of Parametric Equations     | \frac{d^2y}{dx^2}=\frac{d(dy/dx)/dt}{dx/dt}                                | BC only, FRQ
parametric-arc-length          | Arc Length of a Parametric Curve              | L=\int_a^b\!\sqrt{(x')^2+(y')^2}\,dt                                       | BC only, FRQ
vector-valued-functions        | Vector-Valued Functions                       | \vec{r}(t)=\langle x(t),y(t)\rangle                                        | BC only, MCQ frequent
vector-velocity-acceleration   | Velocity and Acceleration Vectors             | \vec{v}=\vec{r}'(t),\quad\vec{a}=\vec{r}''(t)                              | BC only, MCQ frequent, FRQ
speed-vector                   | Speed (Magnitude of Velocity Vector)          | |\vec{v}(t)|=\sqrt{[x'(t)]^2+[y'(t)]^2}                                   | BC only, MCQ frequent, FRQ
position-from-velocity-vector  | Position from Velocity (Integration)          | \vec{r}(t)=\vec{r}(t_0)+\int_{t_0}^t\vec{v}(s)\,ds                        | BC only, FRQ
polar-coordinates              | Polar Coordinate System                       | x=r\cos\theta,\quad y=r\sin\theta                                           | BC only, MCQ frequent
polar-derivative               | Derivative in Polar Form (dy/dx)              | \frac{dy}{dx}=\frac{r'\sin\theta+r\cos\theta}{r'\cos\theta-r\sin\theta}    | BC only, FRQ
polar-area-single              | Area Enclosed by a Polar Curve                | A=\frac{1}{2}\int_\alpha^\beta [r(\theta)]^2\,d\theta                       | BC only, MCQ frequent, FRQ
polar-area-between             | Area Between Two Polar Curves                 | A=\frac{1}{2}\int_\alpha^\beta \bigl[r_1^2-r_2^2\bigr]\,d\theta            | BC only, FRQ
parametric-motion-analysis     | Particle Motion Analysis (Parametric/Vector)  |                                                                             | BC only, FRQ, calculator active
```

---

### Unit 10: Infinite Sequences and Series (BC only)

```
sequence-convergence           | Convergence and Divergence of Sequences       | \lim_{n\to\infty} a_n                                                       | BC only, MCQ frequent
series-definition              | Definition of an Infinite Series              | \sum_{n=1}^\infty a_n=\lim_{N\to\infty}\sum_{n=1}^N a_n                    | BC only, MCQ frequent
geometric-series               | Geometric Series                              | \sum_{n=0}^\infty ar^n=\frac{a}{1-r},\quad|r|<1                            | BC only, MCQ frequent, FRQ
harmonic-series                | Harmonic Series (diverges)                    | \sum_{n=1}^\infty\frac{1}{n}\ \text{diverges}                               | BC only, MCQ frequent
p-series                       | p-Series Test                                 | \sum\frac{1}{n^p}\ \text{converges iff}\ p>1                                | BC only, MCQ frequent
nth-term-divergence-test       | nth-Term Divergence Test                      | \lim_{n\to\infty}a_n\neq 0\Rightarrow\text{diverges}                       | BC only, MCQ frequent
integral-test                  | Integral Test                                 |                                                                             | BC only, MCQ frequent
direct-comparison-test         | Direct Comparison Test                        | 0\le a_n\le b_n                                                              | BC only, MCQ frequent
limit-comparison-test          | Limit Comparison Test                         | \lim_{n\to\infty}\frac{a_n}{b_n}=L,\ 0<L<\infty                            | BC only, MCQ frequent
alternating-series-test        | Alternating Series Test (Leibniz)             |                                                                             | BC only, MCQ frequent, FRQ
alternating-series-error-bound | Alternating Series Error Bound                | |R_N|\le a_{N+1}                                                             | BC only, MCQ frequent, FRQ
ratio-test                     | Ratio Test                                    | L=\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|                        | BC only, MCQ frequent, FRQ
absolute-conditional-convergence| Absolute and Conditional Convergence         |                                                                             | BC only, MCQ frequent
power-series                   | Power Series                                  | \sum_{n=0}^\infty c_n(x-a)^n                                                | BC only, MCQ frequent, FRQ
radius-of-convergence          | Radius and Interval of Convergence            |                                                                             | BC only, MCQ frequent, FRQ
taylor-polynomial              | Taylor Polynomials (Degree-n Approximation)   | P_n(x)=\sum_{k=0}^n\frac{f^{(k)}(a)}{k!}(x-a)^k                           | BC only, MCQ frequent, FRQ
maclaurin-common-series        | Common Maclaurin Series                       | e^x=\sum_{n=0}^\infty\frac{x^n}{n!},\quad\sin x=\sum_{n=0}^\infty\frac{(-1)^n x^{2n+1}}{(2n+1)!} | BC only, MCQ frequent, FRQ
taylor-series                  | Taylor Series (General)                       | f(x)=\sum_{n=0}^\infty\frac{f^{(n)}(a)}{n!}(x-a)^n                        | BC only, MCQ frequent, FRQ
lagrange-error-bound           | Lagrange Error Bound                          | |R_n(x)|\le\frac{M|x-a|^{n+1}}{(n+1)!}                                    | BC only, MCQ frequent, FRQ
series-manipulation            | Manipulating Series (substitution, differentiation, integration) |                                                             | BC only, FRQ
```

---

## UI Behavior Notes

- Subject tabs at top: Calc BC / Physics / CS
- Left sidebar: unit list, filters cards on click
- Main area: card grid showing name + summary + formula preview
- Clicking a card opens a shadcn Sheet from the right containing:
  - Full description
  - Formula (KaTeX block)
  - Step-by-step list
  - Worked examples
  - MCQ section: shadcn RadioGroup, submit button, reveal answer with shadcn Alert (green/red) + explanation
- Search bar filters across all units and subjects
- Tag filter pills below search bar

---

## Content: AP Physics 1 (Revised 2025)

### File Structure for Physics
```
src/data/physics/
  index.ts       # re-exports all units, exports physicsUnits string[]
  u1-kinematics.ts
  u2-dynamics.ts
  u3-circular-motion-gravitation.ts
  u4-energy.ts
  u5-torque-rotational-dynamics.ts
  u6-energy-momentum-rotating-systems.ts
  u7-oscillations.ts
  u8-fluids.ts
```

All files export an array of Topic[] using the same schema already defined in this file.

### Content Inventory — AP Physics 1

For each unit, list every testable concept, law, equation, and problem type.
Format each item as a single compact line:
ID | Name | Formula (plain text ok here) | Tags | Exam weight note

Only include what's on the revised 2025 AP Physics 1 exam.
Flag any item that is "new to 2025" so agents know to pay extra attention to sourcing.

> **Curriculum note:** The official 2025 College Board unit structure differs slightly from the headings
> below (official Unit 2 "Force and Translational Dynamics" covers all dynamics + circular motion as one
> unit; official Unit 4 "Linear Momentum" is a standalone 10–15% unit not represented in this file
> structure). Linear momentum items are filed under Unit 4 (Energy) here. Agents generating content
> should draw from both the dynamics and circular motion sources for Unit 2 and Unit 3 respectively,
> and include all momentum items within Unit 4.

---

### Unit 1: Kinematics (10–15% of exam)

```
kinematics-scalars-vectors     | Scalars and Vectors in One Dimension              |                                                                              | MCQ frequent
kinematics-displacement        | Displacement and Distance                         | \Delta x = x_f - x_i                                                         | MCQ frequent
kinematics-avg-velocity        | Average Velocity and Speed                        | \bar{v} = \Delta x / \Delta t                                                | MCQ frequent
kinematics-acceleration        | Acceleration                                      | a = \Delta v / \Delta t                                                      | MCQ frequent
kinematics-eq-vt               | Kinematic Equation 1 (v–t)                        | v = v_0 + at                                                                  | MCQ frequent
kinematics-eq-xt               | Kinematic Equation 2 (x–t)                        | x = x_0 + v_0 t + \tfrac{1}{2}at^2                                           | MCQ frequent
kinematics-eq-vx               | Kinematic Equation 3 (v²–x)                       | v^2 = v_0^2 + 2a\Delta x                                                     | MCQ frequent
motion-graphs                  | Interpreting Motion Graphs (x-t, v-t, a-t)        |                                                                              | MCQ frequent, FRQ
free-fall                      | Free Fall and Acceleration Due to Gravity         | a = g = 9.8\ \text{m/s}^2                                                    | MCQ frequent
reference-frames               | Reference Frames and Relative Motion              | \vec{v}_{AC} = \vec{v}_{AB} + \vec{v}_{BC}                                   | MCQ frequent
projectile-motion              | Projectile Motion                                 | x = v_{x0}t,\quad y = v_{y0}t - \tfrac{1}{2}gt^2                            | MCQ frequent, FRQ
vector-components              | Vector Resolution into Components                 | v_x = v\cos\theta,\quad v_y = v\sin\theta                                    | MCQ frequent
```

---

### Unit 2: Dynamics (10–15%)

```
systems-center-of-mass         | Systems and Center of Mass                        | x_{cm} = \frac{\sum m_i x_i}{\sum m_i}                                       | MCQ frequent
free-body-diagrams             | Free-Body Diagrams                                |                                                                              | MCQ frequent, FRQ
newtons-first-law              | Newton's First Law (Law of Inertia)               | \sum \vec{F} = \vec{0} \Rightarrow a = 0                                     | MCQ frequent, theorem
newtons-second-law             | Newton's Second Law                               | \sum F = ma                                                                   | MCQ frequent, FRQ, theorem
newtons-third-law              | Newton's Third Law (Action-Reaction Pairs)        | \vec{F}_{AB} = -\vec{F}_{BA}                                                  | MCQ frequent, theorem
weight-near-surface            | Weight and Near-Surface Gravitational Force       | F_g = mg                                                                      | MCQ frequent
normal-force                   | Normal Force                                      |                                                                              | MCQ frequent
static-kinetic-friction        | Static and Kinetic Friction                       | f_s \le \mu_s F_N,\quad f_k = \mu_k F_N                                      | MCQ frequent, FRQ
hookes-law                     | Hooke's Law / Spring Force                        | F_s = kx                                                                      | MCQ frequent
multi-body-systems             | Multi-Body Systems and Tension                    |                                                                              | MCQ frequent, FRQ
inclined-plane-forces          | Force Analysis on Inclined Planes                 |                                                                              | MCQ frequent, FRQ
```

---

### Unit 3: Circular Motion and Gravitation (5–10%)

```
uniform-circular-motion        | Uniform Circular Motion                           | a_c = v^2/r                                                                   | MCQ frequent
centripetal-force              | Net Centripetal Force                             | F_c = mv^2/r                                                                  | MCQ frequent, FRQ
universal-gravitation          | Newton's Law of Universal Gravitation             | F_g = Gm_1 m_2 / r^2                                                         | MCQ frequent, theorem
gravitational-field            | Gravitational Field Strength                      | g = GM/r^2                                                                    | MCQ frequent
orbital-speed                  | Speed of Circular Orbit                           | v_{orb} = \sqrt{GM/r}                                                         | MCQ frequent, FRQ
orbital-period                 | Period of Circular Orbit                          | T = 2\pi r / v                                                                | MCQ frequent
vertical-circular-motion       | Vertical Circular Motion (top and bottom)         |                                                                              | MCQ frequent, FRQ
```

---

### Unit 4: Energy (18–23%)

> Includes **Linear Momentum** items (official 2025 Unit 4, 10–15%) since the app file structure
> has no standalone momentum file. Momentum IDs are prefixed `mom-`.

```
translational-ke               | Translational Kinetic Energy                      | K = \tfrac{1}{2}mv^2                                                          | MCQ frequent
gravitational-pe               | Gravitational Potential Energy                    | U_g = mgy                                                                     | MCQ frequent
elastic-pe                     | Elastic (Spring) Potential Energy                 | U_s = \tfrac{1}{2}kx^2                                                        | MCQ frequent
work-constant-force            | Work by a Constant Force                          | W = Fd\cos\theta                                                              | MCQ frequent, FRQ
work-variable-force            | Work by a Variable Force (area under F-x graph)   |                                                                              | MCQ frequent, FRQ
work-energy-theorem            | Work-Energy Theorem                               | W_{net} = \Delta K                                                            | MCQ frequent, theorem
conservation-energy            | Conservation of Mechanical Energy                 | E_{mech} = K + U = \text{const (no friction)}                                | MCQ frequent, FRQ, theorem
energy-nonconservative         | Energy with Non-Conservative Forces               | W_{ext} = \Delta E_{system}                                                   | MCQ frequent, FRQ
power                          | Power                                             | P = W/t = Fv                                                                  | MCQ frequent
energy-bar-charts              | Energy Bar Charts / LOL Diagrams                  |                                                                              | MCQ frequent, FRQ
mom-linear-momentum            | Linear Momentum                                   | p = mv                                                                        | MCQ frequent
mom-impulse-momentum           | Impulse-Momentum Theorem                          | J = F\Delta t = \Delta p                                                      | MCQ frequent, FRQ
mom-conservation               | Conservation of Linear Momentum                   | \sum p_i = \sum p_f                                                           | MCQ frequent, FRQ, theorem
mom-elastic-collision          | Elastic Collisions                                | K_i = K_f,\quad \sum p_i = \sum p_f                                           | MCQ frequent, FRQ
mom-inelastic-collision        | Perfectly Inelastic Collisions                    |                                                                              | MCQ frequent, FRQ
mom-impulse-ft-graph           | Impulse from Force-Time Graphs                    | J = \text{area under }F\text{-}t\text{ curve}                                | MCQ frequent, FRQ
```

---

### Unit 5: Torque and Rotational Dynamics (10–15%)

```
rotational-kinematics          | Rotational Kinematics Equations                   | \omega = \omega_0 + \alpha t,\quad \theta = \omega_0 t + \tfrac{1}{2}\alpha t^2 | MCQ frequent
angular-velocity-acceleration  | Angular Velocity and Angular Acceleration         | \omega = \Delta\theta/\Delta t,\quad \alpha = \Delta\omega/\Delta t          | MCQ frequent
linear-rotational-link         | Connecting Linear and Rotational Quantities       | v = r\omega,\quad a_t = r\alpha                                               | MCQ frequent
torque                         | Torque                                            | \tau = rF\sin\theta                                                           | MCQ frequent, FRQ
rotational-inertia-def         | Rotational Inertia (Definition)                   | I = \sum m_i r_i^2                                                            | MCQ frequent, theorem
rotational-inertia-objects     | Rotational Inertia of Common Objects              | I_{disk}=\tfrac{1}{2}MR^2,\quad I_{rod,cm}=\tfrac{1}{12}ML^2,\quad I_{sphere}=\tfrac{2}{5}MR^2 | MCQ frequent, FRQ
rotational-newtons-2nd         | Newton's Second Law in Rotational Form            | \sum\tau = I\alpha                                                            | MCQ frequent, FRQ, theorem
rotational-equilibrium         | Rotational Equilibrium (Newton's 1st, Rotational) | \sum\tau = 0                                                                  | MCQ frequent, FRQ, theorem
static-equilibrium             | Static Equilibrium (Translational + Rotational)   | \sum F = 0,\quad \sum\tau = 0                                                 | MCQ frequent, FRQ
```

---

### Unit 6: Energy and Momentum of Rotating Systems (5–10%)

```
rotational-ke                  | Rotational Kinetic Energy                         | K_{rot} = \tfrac{1}{2}I\omega^2                                               | MCQ frequent
total-ke-rolling               | Total KE of a Rolling Object                      | K_{total} = \tfrac{1}{2}mv^2 + \tfrac{1}{2}I\omega^2                         | MCQ frequent, FRQ
torque-work                    | Work Done by a Torque                             | W = \tau\Delta\theta                                                          | MCQ frequent
angular-momentum               | Angular Momentum                                  | L = I\omega                                                                   | MCQ frequent
angular-impulse                | Angular Impulse-Momentum Theorem                  | \Delta L = \tau\Delta t                                                       | MCQ frequent, FRQ
conservation-angular-momentum  | Conservation of Angular Momentum                  | L_i = L_f\ \text{(no net external torque)}                                   | MCQ frequent, FRQ, theorem
rolling-without-slipping       | Rolling Without Slipping Constraint               | v_{cm} = r\omega,\quad a_{cm} = r\alpha                                       | MCQ frequent, FRQ
orbital-motion-energy          | Orbiting Satellites and Gravitational Energy      |                                                                              | MCQ frequent, FRQ
```

---

### Unit 7: Oscillations / Simple Harmonic Motion (5–10%)

```
shm-restoring-force            | Restoring Force in SHM                            | F_{net} = -kx                                                                 | MCQ frequent, theorem
shm-conditions                 | Conditions for Simple Harmonic Motion             | a \propto -x                                                                  | MCQ frequent
shm-period-frequency           | Period, Frequency, and Angular Frequency          | f = 1/T,\quad \omega = 2\pi f                                                 | MCQ frequent
spring-period                  | Period of a Spring-Mass System                    | T = 2\pi\sqrt{m/k}                                                            | MCQ frequent, FRQ
pendulum-period                | Period of a Simple Pendulum                       | T = 2\pi\sqrt{L/g}                                                            | MCQ frequent, FRQ
shm-position-time              | Position as a Function of Time in SHM             | x(t) = A\cos(2\pi ft)                                                         | MCQ frequent
shm-velocity-acceleration      | Maximum Velocity and Acceleration in SHM          | v_{max} = A\omega,\quad a_{max} = A\omega^2                                   | MCQ frequent
shm-energy                     | Energy Conservation in SHM                        | E = \tfrac{1}{2}kA^2 = K + U_s = \text{const}                                | MCQ frequent, FRQ
shm-graphs                     | SHM Graphical Representations (x, v, a vs. t)     |                                                                              | MCQ frequent, FRQ
shm-reference-circle           | Relationship Between SHM and Circular Motion      |                                                                              | MCQ frequent
```

---

### Unit 8: Fluids (10–15%) ← NEW in 2025

```
fluid-density                  | Density                                           | \rho = m/V                                                                    | MCQ frequent | new to 2025
pressure-definition            | Pressure (definition)                             | P = F/A                                                                       | MCQ frequent | new to 2025
pressure-depth                 | Pressure at Depth in a Static Fluid               | P = P_0 + \rho g h                                                            | MCQ frequent, FRQ | new to 2025
gauge-pressure                 | Gauge Pressure vs. Absolute Pressure              | P_{gauge} = P - P_{atm}                                                       | MCQ frequent | new to 2025
pascal-principle               | Pascal's Principle                                | \Delta P_1 = \Delta P_2\ \Rightarrow\ F_1/A_1 = F_2/A_2                      | MCQ frequent, theorem | new to 2025
archimedes-principle           | Archimedes' Principle / Buoyant Force             | F_b = \rho_{fluid}\, V_{disp}\, g                                             | MCQ frequent, FRQ, theorem | new to 2025
floating-sinking               | Floating and Sinking Conditions                   | \rho_{obj} < \rho_{fluid} \Rightarrow \text{floats}                           | MCQ frequent, FRQ | new to 2025
fluids-newtons-laws            | Fluids and Newton's Laws (net force on objects)   |                                                                              | MCQ frequent, FRQ | new to 2025
continuity-equation            | Continuity Equation (Conservation of Mass in Flow)| A_1 v_1 = A_2 v_2                                                             | MCQ frequent, FRQ, theorem | new to 2025
bernoullis-equation            | Bernoulli's Equation                              | P_1 + \tfrac{1}{2}\rho v_1^2 + \rho g y_1 = P_2 + \tfrac{1}{2}\rho v_2^2 + \rho g y_2 | MCQ frequent, FRQ, theorem | new to 2025
bernoulli-apps                 | Applications of Bernoulli (Venturi, lift, Torricelli) |                                                                          | MCQ frequent, FRQ | new to 2025
fluid-flow-qualitative         | Laminar vs. Turbulent Flow (qualitative)          |                                                                              | MCQ frequent | new to 2025
```

---
