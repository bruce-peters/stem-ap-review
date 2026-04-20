import type { Topic } from "@/types";

const circularMotionGravitationTopics: Topic[] = [
  {
    id: "uniform-circular-motion",
    name: "Uniform Circular Motion",
    unit: "Unit 3: Circular Motion and Gravitation",
    unitNumber: 3,
    tags: ["MCQ frequent"],
    summary:
      "An object moving in a circle at constant speed experiences centripetal acceleration directed toward the center of the circle.",
    formula: "a_c = \\frac{v^2}{r}",
    description:
      "Uniform circular motion occurs when an object moves along a circular path at constant speed. Although the speed is constant, the velocity is continuously changing direction, resulting in a centripetal (center-seeking) acceleration. This acceleration is always perpendicular to the velocity and points toward the center of the circular path. The magnitude of centripetal acceleration depends on the square of the speed and is inversely proportional to the radius of the circle.",
    steps: [
      "Identify the radius $r$ of the circular path and the speed $v$ of the object moving along the circle.",
      "Recall that centripetal acceleration is given by $a_c = \\frac{v^2}{r}$ and always points toward the center.",
      "If given the period $T$ instead of speed, use $v = \\frac{2\\pi r}{T}$ to find the speed first.",
      "Substitute known values into $a_c = \\frac{v^2}{r}$ to calculate the magnitude of centripetal acceleration.",
      "Indicate the direction: centripetal acceleration always points toward the center of the circular path.",
    ],
    examples: [
      {
        problem:
          "A car moves around a circular track of radius 50 m at a constant speed of 20 m/s. What is the magnitude of the car's centripetal acceleration?",
        solution:
          "Using $a_c = \\frac{v^2}{r}$, substitute $v = 20$ m/s and $r = 50$ m: $a_c = \\frac{(20)^2}{50} = \\frac{400}{50} = 8$ m/s². The centripetal acceleration is 8 m/s² directed toward the center of the track.",
      },
    ],
    mcqs: [
      {
        question:
          "A ball attached to a string is whirled in a horizontal circle at constant speed. Which statement correctly describes the ball's motion?",
        options: [
          "The ball's velocity is constant because its speed is constant",
          "The ball experiences zero acceleration because its speed is constant",
          "The ball's acceleration is directed tangent to the circular path",
          "The ball's acceleration is directed toward the center of the circle",
        ],
        answerIndex: 3,
        explanation:
          "The correct answer is D: even though the speed is constant, the direction of velocity continuously changes, resulting in acceleration toward the center. A is wrong because velocity is a vector that includes direction, which is constantly changing. B is wrong because changing direction means the object is accelerating. C is wrong because centripetal acceleration is perpendicular to the tangential velocity, pointing inward.",
      },
      {
        question:
          "A satellite orbits Earth at a constant speed of 8000 m/s in a circular orbit of radius 8 × 10⁶ m. What is the magnitude of the satellite's centripetal acceleration?",
        options: ["8 m/s²", "1 m/s²", "64 m/s²", "8000 m/s²"],
        answerIndex: 0,
        explanation:
          "Using $a_c = \\frac{v^2}{r} = \\frac{(8000)^2}{8 \\times 10^6} = \\frac{64 \\times 10^6}{8 \\times 10^6} = 8$ m/s². B (1 m/s²) results from incorrect calculation. C (64 m/s²) comes from forgetting to divide by radius. D (8000 m/s²) confuses speed with acceleration units.",
      },
    ],
  },
  {
    id: "centripetal-force",
    name: "Net Centripetal Force",
    unit: "Unit 3: Circular Motion and Gravitation",
    unitNumber: 3,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "A net inward force is required to maintain circular motion, calculated as the product of mass and centripetal acceleration.",
    formula: "F_c = \\frac{mv^2}{r}",
    description:
      "Newton's second law applied to circular motion requires a net force directed toward the center to produce centripetal acceleration. This centripetal force is not a new type of force but rather the net effect of real forces (tension, gravity, friction, normal force, etc.) acting on the object. The magnitude of the required centripetal force equals mass times centripetal acceleration. Any force or combination of forces can provide the centripetal force needed to maintain circular motion.",
    steps: [
      "Draw a free-body diagram showing all forces acting on the object in circular motion.",
      "Identify which forces or components of forces point toward the center of the circle (these provide centripetal force).",
      "Apply Newton's second law in the radial direction: $\\sum F_c = ma_c = \\frac{mv^2}{r}$.",
      "Set the net inward force equal to $\\frac{mv^2}{r}$ and solve for the unknown quantity (could be speed, radius, force magnitude, or mass).",
      "Check units and verify that the direction of the net force points toward the center of the circular path.",
    ],
    examples: [
      {
        problem:
          "A 2.0 kg ball is attached to a 1.5 m string and whirled in a horizontal circle at 4.0 m/s. What is the tension in the string?",
        solution:
          "The tension provides the centripetal force. Using $F_c = \\frac{mv^2}{r}$: $T = \\frac{(2.0)(4.0)^2}{1.5} = \\frac{32}{1.5} = 21.3$ N. The tension in the string is approximately 21 N directed toward the center.",
      },
    ],
    mcqs: [
      {
        question:
          "A car goes around a flat circular curve. What force provides the centripetal force needed to keep the car moving in a circle?",
        options: [
          "The centrifugal force pushing outward",
          "The force of gravity pulling downward",
          "The friction force between tires and road pointing toward the center",
          "The normal force from the road pushing upward",
        ],
        answerIndex: 2,
        explanation:
          "The correct answer is C: friction between the tires and road provides the horizontal inward force needed for circular motion. A is wrong because centrifugal force is a fictitious force felt only in a rotating reference frame — it is not a real force. B is wrong because gravity acts vertically and cannot provide horizontal centripetal force on a flat curve. D is wrong because the normal force is vertical and balances gravity but does not contribute to horizontal circular motion.",
      },
      {
        question:
          "A 0.50 kg object moves in a horizontal circle of radius 2.0 m. If the centripetal force acting on it is 10 N, what is its speed?",
        options: ["4.0 m/s", "6.3 m/s", "10 m/s", "40 m/s"],
        answerIndex: 1,
        explanation:
          "Using $F_c = \\frac{mv^2}{r}$, solve for $v$: $v = \\sqrt{\\frac{F_c r}{m}} = \\sqrt{\\frac{10 \\times 2.0}{0.50}} = \\sqrt{40} \\approx 6.3$ m/s. A (4.0 m/s) results from arithmetic error or using wrong formula. C (10 m/s) comes from confusing force magnitude with speed. D (40 m/s) is the value under the square root before taking the root.",
      },
    ],
  },
  {
    id: "universal-gravitation",
    name: "Newton's Law of Universal Gravitation",
    unit: "Unit 3: Circular Motion and Gravitation",
    unitNumber: 3,
    tags: ["MCQ frequent", "theorem"],
    summary:
      "Every mass attracts every other mass with a force proportional to the product of their masses and inversely proportional to the square of the distance between them.",
    formula: "F_g = \\frac{Gm_1 m_2}{r^2}",
    description:
      "Newton's law of universal gravitation states that two point masses (or spherically symmetric objects) attract each other with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers. The universal gravitational constant G = 6.67 × 10⁻¹¹ N·m²/kg² is one of the fundamental constants of nature. This force is always attractive and acts along the line connecting the centers of the two masses.",
    steps: [
      "Identify the two masses: $m_1$ and $m_2$, and the center-to-center distance $r$ between them.",
      "Recall the universal gravitational constant: $G = 6.67 \\times 10^{-11}$ N·m²/kg².",
      "Substitute into the formula: $F_g = \\frac{Gm_1 m_2}{r^2}$.",
      "Calculate the magnitude of the gravitational force, ensuring units are consistent (SI units: kg, m, N).",
      "Note the direction: the force on each mass is attractive, pointing toward the other mass along the line connecting their centers.",
    ],
    examples: [
      {
        problem:
          "Calculate the gravitational force between Earth (mass = 6.0 × 10²⁴ kg) and a 70 kg person standing on its surface. Earth's radius is 6.4 × 10⁶ m.",
        solution:
          "Using $F_g = \\frac{Gm_1 m_2}{r^2}$: $F_g = \\frac{(6.67 \\times 10^{-11})(6.0 \\times 10^{24})(70)}{(6.4 \\times 10^6)^2} = \\frac{2.8 \\times 10^{16}}{4.1 \\times 10^{13}} \\approx 683$ N. This is approximately the person's weight (mg ≈ 686 N), confirming the calculation.",
      },
    ],
    mcqs: [
      {
        question:
          "If the distance between two masses is doubled while their masses remain constant, how does the gravitational force between them change?",
        options: [
          "It doubles",
          "It is reduced to one-half",
          "It is reduced to one-quarter",
          "It remains the same",
        ],
        answerIndex: 2,
        explanation:
          "The correct answer is C: gravitational force is inversely proportional to $r^2$. If $r$ doubles, $r^2$ increases by a factor of 4, so the force decreases to $\\frac{1}{4}$ of the original value. A is wrong because it suggests direct proportionality. B applies only $1/r$, not $1/r^2$. D ignores the inverse-square dependence on distance.",
      },
      {
        question:
          "Two masses of 10 kg and 20 kg are separated by 2.0 m. What is the approximate magnitude of the gravitational force between them? (Use G = 6.67 × 10⁻¹¹ N·m²/kg²)",
        options: ["3.3 × 10⁻⁹ N", "6.7 × 10⁻¹⁰ N", "1.3 × 10⁻⁹ N", "2.7 × 10⁻⁸ N"],
        answerIndex: 0,
        explanation:
          "Using $F_g = \\frac{Gm_1 m_2}{r^2} = \\frac{(6.67 \\times 10^{-11})(10)(20)}{(2.0)^2} = \\frac{1.334 \\times 10^{-8}}{4} = 3.3 \\times 10^{-9}$ N. B results from arithmetic error in numerator. C comes from incorrect exponent manipulation. D is an order-of-magnitude error in division.",
      },
    ],
  },
  {
    id: "gravitational-field",
    name: "Gravitational Field Strength",
    unit: "Unit 3: Circular Motion and Gravitation",
    unitNumber: 3,
    tags: ["MCQ frequent"],
    summary:
      "Gravitational field strength at a point is the gravitational force per unit mass experienced by a test mass at that location.",
    formula: "g = \\frac{GM}{r^2}",
    description:
      "The gravitational field strength (g) represents the acceleration due to gravity at a particular location. Near Earth's surface, g ≈ 9.8 N/kg or 9.8 m/s². At any distance r from the center of a mass M, the field strength can be calculated using the universal gravitation formula divided by the test mass. This quantity is useful for understanding orbital mechanics and satellite motion, where g varies significantly with altitude. The field strength decreases with the square of the distance from the center of the mass.",
    steps: [
      "Identify the mass $M$ creating the gravitational field (e.g., Earth, another planet, or star).",
      "Determine the distance $r$ from the center of mass $M$ to the point where you want to find the field strength.",
      "Use the universal gravitational constant $G = 6.67 \\times 10^{-11}$ N·m²/kg².",
      "Calculate gravitational field strength: $g = \\frac{GM}{r^2}$, which gives units of N/kg or m/s².",
      "Interpret: this is the acceleration any object would experience at that location due to the gravitational field of mass $M$.",
    ],
    examples: [
      {
        problem:
          "Calculate the gravitational field strength at an altitude of 3.6 × 10⁶ m above Earth's surface. (Earth's mass = 6.0 × 10²⁴ kg, Earth's radius = 6.4 × 10⁶ m)",
        solution:
          "Total distance from Earth's center: $r = 6.4 \\times 10^6 + 3.6 \\times 10^6 = 1.0 \\times 10^7$ m. Using $g = \\frac{GM}{r^2}$: $g = \\frac{(6.67 \\times 10^{-11})(6.0 \\times 10^{24})}{(1.0 \\times 10^7)^2} = \\frac{4.0 \\times 10^{14}}{1.0 \\times 10^{14}} = 4.0$ m/s². This is less than the surface value of 9.8 m/s² because the distance from Earth's center has increased.",
      },
    ],
    mcqs: [
      {
        question:
          "What is the relationship between gravitational field strength (g) and weight (w) for an object of mass m?",
        options: [
          "w = g/m",
          "w = mg",
          "w = m/g",
          "w and g are independent quantities",
        ],
        answerIndex: 1,
        explanation:
          "The correct answer is B: weight is the gravitational force on an object, given by $w = mg$, where $g$ is the local gravitational field strength. A is dimensionally incorrect (would give m²/s² units). C gives units of s² which makes no sense for weight. D is wrong because weight explicitly depends on g — changing location (and thus g) changes weight.",
      },
      {
        question:
          "At what distance from Earth's center is the gravitational field strength equal to one-fourth of its value at Earth's surface?",
        options: [
          "Four times Earth's radius",
          "Twice Earth's radius",
          "Half of Earth's radius",
          "One-fourth of Earth's radius",
        ],
        answerIndex: 1,
        explanation:
          "Since $g \\propto 1/r^2$, to reduce g to $1/4$ of its original value, $r^2$ must increase by a factor of 4, meaning $r$ must double. So the distance is twice Earth's radius. A (four times) would reduce g to 1/16. C (half) would quadruple g. D (one-fourth) would make g 16 times larger.",
      },
    ],
  },
  {
    id: "orbital-speed",
    name: "Speed of Circular Orbit",
    unit: "Unit 3: Circular Motion and Gravitation",
    unitNumber: 3,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "The orbital speed of an object in a circular orbit is determined by the balance between gravitational force and required centripetal force.",
    formula: "v_{orb} = \\sqrt{\\frac{GM}{r}}",
    description:
      "For an object to maintain a stable circular orbit, the gravitational force must provide exactly the centripetal force needed for circular motion. Setting the gravitational force equal to the centripetal force requirement and solving for velocity gives the orbital speed formula. Note that orbital speed decreases as the orbital radius increases — satellites in higher orbits move more slowly. This formula applies to satellites orbiting planets, planets orbiting stars, and any circular orbital motion governed by gravity.",
    steps: [
      "Set gravitational force equal to required centripetal force: $\\frac{GMm}{r^2} = \\frac{mv^2}{r}$.",
      "Notice the mass of the orbiting object $m$ cancels from both sides.",
      "Multiply both sides by $r$ and rearrange: $\\frac{GM}{r} = v^2$.",
      "Take the square root to solve for orbital speed: $v_{orb} = \\sqrt{\\frac{GM}{r}}$.",
      "Substitute known values for $G$, $M$ (mass of central body), and $r$ (orbital radius from center) to calculate orbital speed.",
    ],
    examples: [
      {
        problem:
          "Calculate the orbital speed of a satellite orbiting Earth at an altitude of 4.0 × 10⁵ m. (Earth's mass = 6.0 × 10²⁴ kg, Earth's radius = 6.4 × 10⁶ m, G = 6.67 × 10⁻¹¹ N·m²/kg²)",
        solution:
          "Orbital radius from Earth's center: $r = 6.4 \\times 10^6 + 4.0 \\times 10^5 = 6.8 \\times 10^6$ m. Using $v_{orb} = \\sqrt{\\frac{GM}{r}}$: $v_{orb} = \\sqrt{\\frac{(6.67 \\times 10^{-11})(6.0 \\times 10^{24})}{6.8 \\times 10^6}} = \\sqrt{\\frac{4.0 \\times 10^{14}}{6.8 \\times 10^6}} = \\sqrt{5.88 \\times 10^7} \\approx 7.7 \\times 10^3$ m/s or 7700 m/s.",
      },
    ],
    mcqs: [
      {
        question:
          "A satellite is moved from a low orbit to a higher orbit around the same planet. How does its orbital speed change?",
        options: [
          "It increases because it is farther from the planet",
          "It decreases because gravitational force is weaker at greater distance",
          "It remains the same because orbital speed is independent of radius",
          "It increases because the satellite needs more speed to maintain the higher orbit",
        ],
        answerIndex: 1,
        explanation:
          "The correct answer is B: orbital speed $v \\propto 1/\\sqrt{r}$, so as orbital radius increases, speed decreases. This may seem counterintuitive, but satellites in higher orbits move more slowly because weaker gravity requires less centripetal force. A is wrong — farther orbits are slower. C is wrong because $v_{orb}$ explicitly depends on $r$. D contradicts the physics — higher orbits actually require less speed.",
      },
      {
        question:
          "For a satellite in circular orbit, which statement correctly describes the relationship between gravitational force and motion?",
        options: [
          "Gravitational force is balanced by an outward centrifugal force",
          "Gravitational force is zero because the satellite is in free fall",
          "Gravitational force provides the centripetal force needed for circular motion",
          "Gravitational force is perpendicular to the satellite's velocity",
        ],
        answerIndex: 2,
        explanation:
          "The correct answer is C: gravity provides exactly the inward force required to maintain circular motion. A is wrong because centrifugal force is fictitious and only appears in rotating frames. B is wrong — gravity is definitely not zero; the satellite is accelerating toward Earth. D is wrong because gravity points radially inward while velocity is tangent to the orbit — they are perpendicular to each other, but the force is not perpendicular in the sense implied.",
      },
    ],
  },
  {
    id: "orbital-period",
    name: "Period of Circular Orbit",
    unit: "Unit 3: Circular Motion and Gravitation",
    unitNumber: 3,
    tags: ["MCQ frequent"],
    summary:
      "The orbital period is the time required for an object to complete one full orbit around a central body.",
    formula: "T = \\frac{2\\pi r}{v}",
    description:
      "The orbital period T is the time for one complete revolution. Since the object travels a distance equal to the circumference of the orbit (2πr) at orbital speed v, the period is simply circumference divided by speed. By substituting the orbital speed formula, the period can also be expressed as $T = 2\\pi\\sqrt{\\frac{r^3}{GM}}$, which shows that period increases with orbital radius — more distant orbits take longer to complete. This relationship is the basis of Kepler's Third Law.",
    steps: [
      "Identify the orbital radius $r$ and orbital speed $v$, or calculate $v$ using $v = \\sqrt{\\frac{GM}{r}}$ if not given.",
      "Calculate the circumference of the circular orbit: $C = 2\\pi r$.",
      "Divide the circumference by the orbital speed to find the period: $T = \\frac{2\\pi r}{v}$.",
      "Alternatively, substitute the expression for $v$ to get $T = 2\\pi\\sqrt{\\frac{r^3}{GM}}$ if you want to find T directly from $r$ and $M$.",
      "Check units: period should be in seconds (or convert to minutes, hours, days as appropriate).",
    ],
    examples: [
      {
        problem:
          "A satellite orbits Earth at an orbital radius of 7.0 × 10⁶ m with an orbital speed of 7.5 × 10³ m/s. What is the orbital period in minutes?",
        solution:
          "Using $T = \\frac{2\\pi r}{v}$: $T = \\frac{2\\pi(7.0 \\times 10^6)}{7.5 \\times 10^3} = \\frac{4.4 \\times 10^7}{7.5 \\times 10^3} \\approx 5867$ seconds. Converting to minutes: $\\frac{5867}{60} \\approx 98$ minutes, or about 1 hour and 38 minutes.",
      },
    ],
    mcqs: [
      {
        question:
          "If the orbital radius of a satellite is doubled, how does its orbital period change? (Assume circular orbit)",
        options: [
          "It doubles",
          "It quadruples",
          "It increases by a factor of 2√2",
          "It remains the same",
        ],
        answerIndex: 2,
        explanation:
          "The correct answer is C: since $T \\propto r^{3/2}$, doubling $r$ means $T$ increases by a factor of $2^{3/2} = 2\\sqrt{2} \\approx 2.83$. A (doubles) would apply if $T \\propto r$, which is not correct. B (quadruples) would require $T \\propto r^2$. D is clearly wrong since period depends on radius.",
      },
      {
        question:
          "The Moon orbits Earth with a period of approximately 27 days. If a satellite orbits at one-fourth the Moon's orbital radius, approximately what is the satellite's period?",
        options: ["About 1.7 days", "About 6.8 days", "About 3.4 days", "About 13.5 days"],
        answerIndex: 2,
        explanation:
          "Using $T \\propto r^{3/2}$: if $r$ is reduced to $1/4$, then $T$ is reduced by a factor of $(1/4)^{3/2} = 1/8$. So $T_{satellite} = 27/8 \\approx 3.4$ days. A uses the wrong exponent. B assumes linear proportionality. D is half the Moon's period, which would correspond to a different radius ratio.",
      },
    ],
  },
  {
    id: "vertical-circular-motion",
    name: "Vertical Circular Motion (top and bottom)",
    unit: "Unit 3: Circular Motion and Gravitation",
    unitNumber: 3,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "In vertical circular motion, the net centripetal force at the top and bottom of the loop includes both tension (or normal force) and the component of gravity.",
    description:
      "When an object moves in a vertical circle (like a roller coaster loop or a ball on a string), both gravity and the constraint force (tension or normal force) contribute to the net centripetal force. At the bottom of the loop, tension and gravity point in opposite directions; tension must provide the centripetal force plus support the weight. At the top, both tension and gravity point toward the center (downward), so they add to provide centripetal force. The minimum speed at the top occurs when tension becomes zero — all centripetal force is provided by gravity alone.",
    steps: [
      "Draw a free-body diagram for the object at the top and bottom of the vertical circle.",
      "At the bottom: tension $T$ points up (toward center), weight $mg$ points down (away from center). Net centripetal force: $T - mg = \\frac{mv^2}{r}$.",
      "At the top: both tension $T$ and weight $mg$ point down (toward center). Net centripetal force: $T + mg = \\frac{mv^2}{r}$.",
      "For minimum speed at the top (critical condition), set $T = 0$: then $mg = \\frac{mv^2}{r}$, giving $v_{min} = \\sqrt{gr}$.",
      "Solve for the unknown (tension, speed, or radius) using the appropriate equation for the location in the circle.",
    ],
    examples: [
      {
        problem:
          "A 0.20 kg ball is swung in a vertical circle of radius 0.80 m. At the bottom of the circle, the ball moves at 6.0 m/s. What is the tension in the string at the bottom?",
        solution:
          "At the bottom: $T - mg = \\frac{mv^2}{r}$. Solving for $T$: $T = mg + \\frac{mv^2}{r} = (0.20)(9.8) + \\frac{(0.20)(6.0)^2}{0.80} = 1.96 + 9.0 = 10.96$ N. The tension is approximately 11 N.",
      },
    ],
    mcqs: [
      {
        question:
          "A car goes over the top of a hill that has a circular shape with radius r. At what speed does the car lose contact with the road (normal force becomes zero)?",
        options: [
          "v = √(gr)",
          "v = √(2gr)",
          "v = gr",
          "v = 2√(gr)",
        ],
        answerIndex: 0,
        explanation:
          "The correct answer is A: when the normal force is zero, gravity alone provides centripetal force: $mg = \\frac{mv^2}{r}$, which gives $v = \\sqrt{gr}$. B would be the speed after free-falling a height $r$. C has wrong units (should be square root). D is twice the correct value.",
      },
      {
        question:
          "A roller coaster car moves through a vertical loop. Where is the normal force exerted by the seat on a passenger the greatest?",
        options: [
          "At the top of the loop",
          "At the bottom of the loop",
          "At the sides of the loop",
          "The normal force is constant throughout the loop",
        ],
        answerIndex: 1,
        explanation:
          "The correct answer is B: at the bottom, the normal force must provide centripetal force plus support the passenger's weight, so $N = mg + \\frac{mv^2}{r}$, which is maximum. At the top, $N = \\frac{mv^2}{r} - mg$, which is smaller. C (sides) would have intermediate values. D is wrong because the normal force varies significantly throughout a vertical loop.",
      },
    ],
  },
];

export default circularMotionGravitationTopics;
