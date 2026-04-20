import type { Topic } from "@/types";

export const fluidsTopics: Topic[] = [
  {
    id: "fluid-density",
    name: "Density",
    unit: "Unit 8: Fluids",
    unitNumber: 8,
    tags: ["MCQ frequent"],
    summary:
      "Density is the mass per unit volume of a substance, a fundamental property that determines buoyancy and pressure effects in fluids.",
    formula: "\\rho = \\frac{m}{V}",
    description:
      "Density quantifies how much mass is packed into a given volume. For uniform materials, density is constant throughout, while for heterogeneous objects it varies. Density is measured in kg/m³ (SI) or g/cm³. A key concept: denser substances sink in less dense fluids, while less dense objects float. Water has a density of approximately 1000 kg/m³, air about 1.2 kg/m³ at sea level.",
    steps: [
      "Identify the mass $m$ of the substance (in kilograms) and its volume $V$ (in cubic meters).",
      "Apply the density formula: $\\rho = \\frac{m}{V}$.",
      "If given density and one other quantity, rearrange to solve: $m = \\rho V$ or $V = \\frac{m}{\\rho}$.",
      "Check units: ensure mass is in kg, volume in m³, so density comes out in kg/m³. Convert if necessary (1 g/cm³ = 1000 kg/m³).",
    ],
    examples: [
      {
        problem:
          "A metal cube with side length 5.0 cm has a mass of 1.0 kg. What is the density of the metal?",
        solution:
          "Volume: $V = (0.05\\,\\text{m})^3 = 1.25 \\times 10^{-4}\\,\\text{m}^3$. Density: $\\rho = \\frac{1.0\\,\\text{kg}}{1.25 \\times 10^{-4}\\,\\text{m}^3} = 8000\\,\\text{kg/m}^3$.",
      },
    ],
    mcqs: [
      {
        question:
          "Two objects have the same mass but different volumes. Which statement is correct?",
        options: [
          "The object with larger volume has greater density",
          "The object with smaller volume has greater density",
          "Both objects have the same density",
          "Density cannot be determined without knowing the material",
        ],
        answerIndex: 1,
        explanation:
          "Correct answer: B. Since $\\rho = m/V$ and mass is the same, smaller volume means greater density. A is backward. C would only be true if volumes were also equal. D is wrong because we have sufficient information to compare densities using the given mass and volumes.",
      },
      {
        question:
          "A liquid has a density of 800 kg/m³. What is the mass of 2.5 m³ of this liquid?",
        options: ["320 kg", "2000 kg", "200 kg", "3.125 kg"],
        answerIndex: 1,
        explanation:
          "Rearrange $\\rho = m/V$ to get $m = \\rho V = 800 \\times 2.5 = 2000\\,\\text{kg}$. A comes from dividing instead of multiplying. C is off by a factor of 10. D incorrectly inverts the calculation ($V/\\rho$).",
      },
    ],
  },
  {
    id: "pressure-definition",
    name: "Pressure (definition)",
    unit: "Unit 8: Fluids",
    unitNumber: 8,
    tags: ["MCQ frequent"],
    summary:
      "Pressure is the force per unit area exerted perpendicular to a surface, measured in pascals (N/m²).",
    formula: "P = \\frac{F}{A}",
    description:
      "Pressure quantifies how concentrated a force is over an area. A smaller area experiencing the same force results in greater pressure. Atmospheric pressure at sea level is about 101,325 Pa (1 atmosphere). Pressure acts equally in all directions at a point in a static fluid. In gases and liquids, pressure can be transmitted through the fluid, leading to Pascal's principle and hydraulic systems.",
    steps: [
      "Identify the perpendicular force $F$ acting on the surface (in newtons).",
      "Identify the area $A$ over which the force is distributed (in square meters).",
      "Calculate pressure using $P = \\frac{F}{A}$ (result in pascals, Pa = N/m²).",
      "If solving for force or area, rearrange: $F = PA$ or $A = \\frac{F}{P}$.",
    ],
    examples: [
      {
        problem:
          "A block with weight 200 N sits on a table. The bottom surface of the block has an area of 0.05 m². What pressure does the block exert on the table?",
        solution:
          "Pressure: $P = \\frac{F}{A} = \\frac{200\\,\\text{N}}{0.05\\,\\text{m}^2} = 4000\\,\\text{Pa}$.",
      },
    ],
    mcqs: [
      {
        question:
          "Why does a sharp knife cut more easily than a dull knife when the same force is applied?",
        options: [
          "The sharp knife applies more force to the material",
          "The sharp edge has a smaller contact area, resulting in greater pressure",
          "The dull knife has greater pressure but less friction",
          "Sharpness affects the material's density, not pressure",
        ],
        answerIndex: 1,
        explanation:
          "Correct answer: B. Since $P = F/A$, for the same force, smaller area (sharp edge) means greater pressure, which allows easier penetration. A is wrong because force is the same. C is incorrect — the dull knife has lower pressure due to larger area. D confuses properties; density is irrelevant here.",
      },
      {
        question:
          "A piston with area 0.02 m² is pushed with a force of 500 N. What is the pressure exerted by the piston?",
        options: ["10 Pa", "100 Pa", "2500 Pa", "25,000 Pa"],
        answerIndex: 3,
        explanation:
          "Calculate: $P = F/A = 500/0.02 = 25{,}000\\,\\text{Pa}$. A and B result from incorrect arithmetic. C comes from multiplying instead of dividing ($F \\times A$).",
      },
    ],
  },
  {
    id: "pressure-depth",
    name: "Pressure at Depth in a Static Fluid",
    unit: "Unit 8: Fluids",
    unitNumber: 8,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "Pressure in a static fluid increases linearly with depth due to the weight of the fluid above.",
    formula: "P = P_0 + \\rho g h",
    description:
      "In a fluid at rest, pressure at a depth h below the surface equals atmospheric pressure P₀ plus the pressure from the fluid column above. The term ρgh represents the weight of the fluid per unit area. Pressure increases by ρg for every meter of depth. This principle explains why dams are thicker at the bottom, why submarines must withstand enormous pressures, and why your ears pop when diving deep in a pool.",
    steps: [
      "Identify the density of the fluid $\\rho$ (in kg/m³), gravitational acceleration $g = 9.8\\,\\text{m/s}^2$, and depth $h$ (in meters).",
      "Identify the surface pressure $P_0$ (often atmospheric pressure, $1.01 \\times 10^5\\,\\text{Pa}$, unless otherwise stated).",
      "Calculate the gauge pressure (pressure due to fluid alone): $P_{gauge} = \\rho g h$.",
      "Add surface pressure to get absolute pressure: $P = P_0 + \\rho g h$.",
    ],
    examples: [
      {
        problem:
          "A diver is 15 m below the surface of a lake. The water density is 1000 kg/m³ and atmospheric pressure is $1.01 \\times 10^5$ Pa. What is the absolute pressure on the diver?",
        solution:
          "Gauge pressure: $\\rho g h = 1000 \\times 9.8 \\times 15 = 147{,}000\\,\\text{Pa}$. Absolute pressure: $P = 1.01 \\times 10^5 + 1.47 \\times 10^5 = 2.48 \\times 10^5\\,\\text{Pa}$.",
      },
    ],
    mcqs: [
      {
        question:
          "Two identical containers are filled to the same height, one with water and one with oil (density less than water). Which statement is true about the pressure at the bottom of each container?",
        options: [
          "Pressure is the same in both",
          "Pressure is greater in the water container",
          "Pressure is greater in the oil container",
          "Pressure depends on the container's shape, not the fluid",
        ],
        answerIndex: 1,
        explanation:
          "Correct answer: B. Since $P = P_0 + \\rho g h$ and $h$ is the same, the fluid with greater density (water) produces greater pressure at the bottom. A would be true only if densities were equal. C is backward. D is wrong — pressure at depth depends on fluid density and height, not container shape.",
      },
      {
        question:
          "At what depth in water (density 1000 kg/m³) does the gauge pressure equal one atmosphere ($1.01 \\times 10^5$ Pa)?",
        options: ["5.2 m", "10.3 m", "15.0 m", "20.6 m"],
        answerIndex: 1,
        explanation:
          "Solve $\\rho g h = 1.01 \\times 10^5$ for $h$: $h = \\frac{1.01 \\times 10^5}{1000 \\times 9.8} \\approx 10.3\\,\\text{m}$. A is half the correct value. C and D result from arithmetic errors or using different density values.",
      },
    ],
  },
  {
    id: "gauge-pressure",
    name: "Gauge Pressure vs. Absolute Pressure",
    unit: "Unit 8: Fluids",
    unitNumber: 8,
    tags: ["MCQ frequent"],
    summary:
      "Gauge pressure measures pressure relative to atmospheric pressure, while absolute pressure includes atmospheric pressure.",
    formula: "P_{\\text{gauge}} = P - P_{\\text{atm}}",
    description:
      "Absolute pressure is the total pressure at a point, including atmospheric pressure. Gauge pressure is the pressure difference above (or below) atmospheric pressure, and is what most pressure gauges measure. For example, a tire gauge reading 200 kPa means the absolute pressure inside is 200 kPa + 101 kPa (atmospheric) = 301 kPa. Gauge pressure can be negative (vacuum), while absolute pressure is always positive.",
    steps: [
      "Determine the absolute pressure $P$ at the location (total pressure including atmosphere).",
      "Identify atmospheric pressure $P_{\\text{atm}}$ (standard value: $1.01 \\times 10^5\\,\\text{Pa}$ or 101 kPa).",
      "Calculate gauge pressure: $P_{\\text{gauge}} = P - P_{\\text{atm}}$.",
      "To convert from gauge to absolute: $P = P_{\\text{gauge}} + P_{\\text{atm}}$.",
    ],
    examples: [
      {
        problem:
          "A pressure gauge on a gas tank reads 250 kPa. If atmospheric pressure is 101 kPa, what is the absolute pressure in the tank?",
        solution:
          "The gauge reads gauge pressure. Absolute pressure: $P = P_{\\text{gauge}} + P_{\\text{atm}} = 250 + 101 = 351\\,\\text{kPa}$.",
      },
    ],
    mcqs: [
      {
        question:
          "A sealed container has an absolute pressure of 80 kPa. If atmospheric pressure is 101 kPa, what is the gauge pressure?",
        options: ["80 kPa", "-21 kPa", "21 kPa", "181 kPa"],
        answerIndex: 1,
        explanation:
          "Correct answer: B. Gauge pressure: $P_{\\text{gauge}} = 80 - 101 = -21\\,\\text{kPa}$. Negative gauge pressure indicates a partial vacuum. A forgets to subtract atmospheric pressure. C has the wrong sign. D incorrectly adds the pressures.",
      },
      {
        question:
          "Why do most pressure measuring devices (like tire gauges) display gauge pressure rather than absolute pressure?",
        options: [
          "Gauge pressure is easier to measure",
          "Absolute pressure is always zero at sea level",
          "Gauge pressure shows the useful pressure difference above atmospheric conditions",
          "Gauge pressure is the same as atmospheric pressure",
        ],
        answerIndex: 2,
        explanation:
          "Correct answer: C. Gauge pressure indicates how much pressure exceeds ambient atmospheric pressure, which is the relevant quantity for most applications (tire inflation, tank pressure, etc.). A is not the primary reason. B is false — absolute pressure at sea level is 101 kPa. D is incorrect; gauge pressure is the difference from atmospheric pressure, not equal to it.",
      },
    ],
  },
  {
    id: "pascal-principle",
    name: "Pascal's Principle",
    unit: "Unit 8: Fluids",
    unitNumber: 8,
    tags: ["MCQ frequent", "theorem"],
    summary:
      "A change in pressure applied to an enclosed incompressible fluid is transmitted undiminished to every point in the fluid and the walls of the container.",
    formula:
      "\\Delta P_1 = \\Delta P_2 \\quad \\Rightarrow \\quad \\frac{F_1}{A_1} = \\frac{F_2}{A_2}",
    description:
      "Pascal's principle underlies hydraulic systems: when you push on a small piston, the pressure increase spreads throughout the fluid, pushing on a larger piston with the same pressure but greater total force (since force = pressure × area). This is the basis of hydraulic jacks, brakes, and lifts. The principle applies only to incompressible fluids (liquids, not gases) in a closed system. Energy is conserved — the larger piston moves a shorter distance.",
    steps: [
      "Identify the two pistons (or areas) in the hydraulic system: small area $A_1$ and large area $A_2$.",
      "Recognize that pressure change is the same throughout: $\\Delta P_1 = \\Delta P_2$, so $\\frac{F_1}{A_1} = \\frac{F_2}{A_2}$.",
      "If given $F_1$ and the areas, solve for $F_2$: $F_2 = F_1 \\times \\frac{A_2}{A_1}$.",
      "Remember the mechanical advantage: larger area means larger force, but smaller displacement (work input = work output, neglecting friction).",
    ],
    examples: [
      {
        problem:
          "In a hydraulic lift, the small piston has an area of 0.01 m² and the large piston has an area of 0.20 m². If a force of 100 N is applied to the small piston, what force is exerted by the large piston?",
        solution:
          "Using Pascal's principle: $F_2 = F_1 \\times \\frac{A_2}{A_1} = 100 \\times \\frac{0.20}{0.01} = 100 \\times 20 = 2000\\,\\text{N}$.",
      },
    ],
    mcqs: [
      {
        question:
          "A hydraulic press has a small piston with radius 2 cm and a large piston with radius 10 cm. If the small piston is pushed with a force of 50 N, what force does the large piston exert?",
        options: ["250 N", "500 N", "1250 N", "2500 N"],
        answerIndex: 2,
        explanation:
          "Correct answer: C. Areas scale as radius squared: $A_2/A_1 = (10/2)^2 = 25$. Force: $F_2 = 50 \\times 25 = 1250\\,\\text{N}$. A incorrectly uses linear radius ratio (5×). B is an arithmetic error. D doubles the correct answer.",
      },
      {
        question:
          "Which statement about Pascal's principle is correct?",
        options: [
          "Pressure changes are greater in the larger piston",
          "The principle applies only to gases, not liquids",
          "A pressure change at one point in a confined fluid is transmitted undiminished throughout the fluid",
          "The smaller piston always exerts more force than the larger piston",
        ],
        answerIndex: 2,
        explanation:
          "Correct answer: C. This is the definition of Pascal's principle. A is wrong — pressure changes are equal throughout. B is backward — the principle applies to incompressible fluids (liquids), not gases. D is wrong — the larger piston exerts more force (force = pressure × area).",
      },
    ],
  },
  {
    id: "archimedes-principle",
    name: "Archimedes' Principle / Buoyant Force",
    unit: "Unit 8: Fluids",
    unitNumber: 8,
    tags: ["MCQ frequent", "FRQ", "theorem"],
    summary:
      "An object immersed in a fluid experiences an upward buoyant force equal to the weight of the fluid displaced by the object.",
    formula: "F_b = \\rho_{\\text{fluid}} V_{\\text{disp}} g",
    description:
      "Archimedes' principle explains why objects float or sink. The buoyant force arises from pressure differences between the top and bottom of a submerged object. If the buoyant force equals the object's weight, the object floats in equilibrium. If buoyant force is less than weight, the object sinks. If buoyant force exceeds weight (for a fully submerged object held down), the object will rise when released. The volume displaced depends on how much of the object is submerged.",
    steps: [
      "Identify the density of the fluid $\\rho_{\\text{fluid}}$ (in kg/m³) and gravitational acceleration $g = 9.8\\,\\text{m/s}^2$.",
      "Determine the volume of fluid displaced $V_{\\text{disp}}$ (in m³). For fully submerged objects, this equals the object's volume. For floating objects, only the submerged portion counts.",
      "Calculate the buoyant force: $F_b = \\rho_{\\text{fluid}} V_{\\text{disp}} g$.",
      "Compare $F_b$ to the object's weight $mg$ to determine if the object floats (equilibrium: $F_b = mg$), sinks ($F_b < mg$), or rises ($F_b > mg$).",
    ],
    examples: [
      {
        problem:
          "A solid cube with volume 0.008 m³ and mass 6 kg is fully submerged in water (density 1000 kg/m³). What is the buoyant force on the cube?",
        solution:
          "Buoyant force: $F_b = \\rho_{\\text{water}} V g = 1000 \\times 0.008 \\times 9.8 = 78.4\\,\\text{N}$. Since weight $= mg = 6 \\times 9.8 = 58.8\\,\\text{N} < F_b$, the cube will rise (it's less dense than water).",
      },
    ],
    mcqs: [
      {
        question:
          "A solid object with volume 0.05 m³ floats in water with 40% of its volume submerged. What is the buoyant force on the object? (Water density = 1000 kg/m³)",
        options: ["196 N", "392 N", "490 N", "98 N"],
        answerIndex: 0,
        explanation:
          "Correct answer: A. Volume displaced: $V_{\\text{disp}} = 0.4 \\times 0.05 = 0.02\\,\\text{m}^3$. Buoyant force: $F_b = 1000 \\times 0.02 \\times 9.8 = 196\\,\\text{N}$. B uses the full volume instead of 40%. C uses half the volume. D is a factor-of-2 error.",
      },
      {
        question:
          "Why does a steel ship float even though steel is denser than water?",
        options: [
          "Steel becomes less dense when formed into a ship",
          "The ship's hollow structure displaces a large volume of water, creating sufficient buoyant force",
          "Ships float due to surface tension, not buoyancy",
          "Archimedes' principle does not apply to large objects",
        ],
        answerIndex: 1,
        explanation:
          "Correct answer: B. The ship's shape creates a large volume that displaces enough water to generate a buoyant force equal to the ship's total weight. A is wrong — steel's density doesn't change. C confuses principles; surface tension is negligible for large objects. D is false — Archimedes' principle applies to all objects regardless of size.",
      },
    ],
  },
  {
    id: "floating-sinking",
    name: "Floating and Sinking Conditions",
    unit: "Unit 8: Fluids",
    unitNumber: 8,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "An object floats if its average density is less than the fluid's density; it sinks if its density is greater; it hovers in equilibrium if densities are equal.",
    formula:
      "\\rho_{\\text{obj}} < \\rho_{\\text{fluid}} \\Rightarrow \\text{floats}",
    description:
      "The floating or sinking behavior depends on comparing densities. For a fully submerged object: if ρ_object < ρ_fluid, buoyant force exceeds weight and the object rises to the surface. Once floating, it settles so that the weight of displaced water equals the object's weight. If ρ_object > ρ_fluid, the object sinks. If ρ_object = ρ_fluid, the object can hover at any depth in neutral buoyancy (submarines achieve this by adjusting ballast). Fraction submerged when floating: (ρ_object / ρ_fluid).",
    steps: [
      "Determine the object's average density $\\rho_{\\text{obj}} = \\frac{m_{\\text{obj}}}{V_{\\text{obj}}}$ and the fluid density $\\rho_{\\text{fluid}}$.",
      "Compare densities: if $\\rho_{\\text{obj}} < \\rho_{\\text{fluid}}$, the object floats; if $\\rho_{\\text{obj}} > \\rho_{\\text{fluid}}$, it sinks; if equal, neutral buoyancy.",
      "For a floating object, find the fraction submerged: $\\frac{V_{\\text{submerged}}}{V_{\\text{total}}} = \\frac{\\rho_{\\text{obj}}}{\\rho_{\\text{fluid}}}$.",
      "Verify equilibrium for a floating object: $F_b = \\rho_{\\text{fluid}} V_{\\text{submerged}} g = m_{\\text{obj}} g$.",
    ],
    examples: [
      {
        problem:
          "A wooden log has a density of 600 kg/m³ and floats in water (density 1000 kg/m³). What fraction of the log is submerged?",
        solution:
          "Fraction submerged: $\\frac{\\rho_{\\text{wood}}}{\\rho_{\\text{water}}} = \\frac{600}{1000} = 0.6 = 60\\%$. So 60% of the log is underwater and 40% is above the surface.",
      },
    ],
    mcqs: [
      {
        question:
          "An object has the same density as the fluid it is placed in. What happens?",
        options: [
          "The object floats at the surface",
          "The object sinks to the bottom",
          "The object hovers in neutral buoyancy at any depth",
          "The object oscillates up and down",
        ],
        answerIndex: 2,
        explanation:
          "Correct answer: C. When densities are equal, buoyant force exactly equals weight at any depth, so the object remains wherever it is placed (neutral buoyancy). A and B occur when densities differ. D is not supported by the principle — no restoring force exists to cause oscillation.",
      },
      {
        question:
          "An ice cube floats in a glass of water. What percentage of the ice is submerged if ice has a density of 920 kg/m³ and water has a density of 1000 kg/m³?",
        options: ["8%", "46%", "92%", "100%"],
        answerIndex: 2,
        explanation:
          "Correct answer: C. Fraction submerged: $920/1000 = 0.92 = 92\\%$. A subtracts densities instead of dividing. B is a miscalculation. D would mean the ice is fully submerged, which only happens if densities are equal or ice is denser.",
      },
    ],
  },
  {
    id: "fluids-newtons-laws",
    name: "Fluids and Newton's Laws (net force on objects)",
    unit: "Unit 8: Fluids",
    unitNumber: 8,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "Objects in fluids experience weight downward and buoyant force upward; the net force determines acceleration according to Newton's second law.",
    description:
      "When analyzing objects in fluids, apply Newton's second law: ΣF = ma. For an object in a fluid, the primary forces are the gravitational force (weight, mg, downward) and the buoyant force (F_b, upward). If F_b > mg, the object accelerates upward. If F_b < mg, it accelerates downward (sinks). If F_b = mg, net force is zero and the object is in equilibrium (floats or hovers). Drag forces may also be relevant for objects moving through fluids, but AP Physics 1 focuses on static or slow-moving cases.",
    steps: [
      "Draw a free-body diagram showing all forces: weight $mg$ (downward) and buoyant force $F_b = \\rho_{\\text{fluid}} V_{\\text{disp}} g$ (upward).",
      "Write Newton's second law in the vertical direction: $\\sum F = F_b - mg = ma$.",
      "Solve for acceleration: $a = \\frac{F_b - mg}{m}$.",
      "Determine the motion: if $a > 0$, object accelerates upward; if $a < 0$, downward; if $a = 0$, equilibrium (floating or neutral buoyancy).",
    ],
    examples: [
      {
        problem:
          "A 2.0 kg object with volume 0.003 m³ is released from rest underwater (water density 1000 kg/m³). What is the object's initial acceleration?",
        solution:
          "Buoyant force: $F_b = 1000 \\times 0.003 \\times 9.8 = 29.4\\,\\text{N}$. Weight: $mg = 2.0 \\times 9.8 = 19.6\\,\\text{N}$. Net force: $F_{\\text{net}} = 29.4 - 19.6 = 9.8\\,\\text{N}$ upward. Acceleration: $a = F_{\\text{net}}/m = 9.8/2.0 = 4.9\\,\\text{m/s}^2$ upward.",
      },
    ],
    mcqs: [
      {
        question:
          "A submerged object has a buoyant force of 50 N and a weight of 70 N. What is the net force on the object?",
        options: ["50 N upward", "70 N downward", "20 N downward", "120 N upward"],
        answerIndex: 2,
        explanation:
          "Correct answer: C. Net force: $F_{\\text{net}} = F_b - mg = 50 - 70 = -20\\,\\text{N}$ (negative indicates downward). A ignores weight. B ignores buoyancy. D incorrectly adds the forces instead of subtracting.",
      },
      {
        question:
          "For an object floating at rest on the surface of a liquid, which statement is true?",
        options: [
          "The buoyant force is greater than the object's weight",
          "The buoyant force equals the object's weight",
          "The object's weight is greater than the buoyant force",
          "The net force on the object is upward",
        ],
        answerIndex: 1,
        explanation:
          "Correct answer: B. For an object at rest (equilibrium), net force must be zero, so $F_b = mg$. A would cause upward acceleration. C would cause sinking. D contradicts equilibrium (net force must be zero for an object at rest).",
      },
    ],
  },
  {
    id: "continuity-equation",
    name: "Continuity Equation (Conservation of Mass in Flow)",
    unit: "Unit 8: Fluids",
    unitNumber: 8,
    tags: ["MCQ frequent", "FRQ", "theorem"],
    summary:
      "For incompressible fluid flow, the product of cross-sectional area and fluid speed is constant along a streamline, reflecting conservation of mass.",
    formula: "A_1 v_1 = A_2 v_2",
    description:
      "The continuity equation states that the volume flow rate (area × speed) is constant in a pipe or tube carrying an incompressible fluid. Where the pipe narrows, fluid speeds up; where it widens, fluid slows down. This ensures the same amount of fluid enters and exits any segment per unit time. The equation applies to steady, incompressible flow (liquids, not gases under varying pressure). It's a consequence of conservation of mass.",
    steps: [
      "Identify two points along the flow: cross-sectional areas $A_1$ and $A_2$, and speeds $v_1$ and $v_2$.",
      "Apply the continuity equation: $A_1 v_1 = A_2 v_2$.",
      "If given three of the four quantities, solve for the unknown: $v_2 = v_1 \\times \\frac{A_1}{A_2}$ or $A_2 = A_1 \\times \\frac{v_1}{v_2}$.",
      "Verify units: areas in m², speeds in m/s, so $A \\times v$ has units of m³/s (volume flow rate).",
    ],
    examples: [
      {
        problem:
          "Water flows through a pipe with a cross-sectional area of 0.02 m² at a speed of 3 m/s. The pipe narrows to an area of 0.005 m². What is the water's speed in the narrow section?",
        solution:
          "Using continuity: $v_2 = v_1 \\times \\frac{A_1}{A_2} = 3 \\times \\frac{0.02}{0.005} = 3 \\times 4 = 12\\,\\text{m/s}$.",
      },
    ],
    mcqs: [
      {
        question:
          "Water flows through a horizontal pipe. Where the pipe's diameter decreases, the water's speed:",
        options: [
          "Decreases because the area is smaller",
          "Increases to maintain constant volume flow rate",
          "Remains constant according to Bernoulli's equation",
          "Increases because pressure increases",
        ],
        answerIndex: 1,
        explanation:
          "Correct answer: B. The continuity equation requires $A_1 v_1 = A_2 v_2$, so smaller area means higher speed to keep the product constant. A is backward. C confuses continuity with Bernoulli's principle. D has the cause-effect relationship reversed — speed increases, causing pressure to decrease (Bernoulli), not the other way around.",
      },
      {
        question:
          "A pipe has a radius of 4 cm at one section and 2 cm at another. If the fluid speed is 2 m/s in the wider section, what is the speed in the narrower section?",
        options: ["0.5 m/s", "1 m/s", "4 m/s", "8 m/s"],
        answerIndex: 3,
        explanation:
          "Correct answer: D. Areas scale as radius squared: $A_1/A_2 = (4/2)^2 = 4$. Speed: $v_2 = v_1 \\times (A_1/A_2) = 2 \\times 4 = 8\\,\\text{m/s}$. A and B result from linear scaling of radius. C uses the linear ratio instead of squared.",
      },
    ],
  },
  {
    id: "bernoullis-equation",
    name: "Bernoulli's Equation",
    unit: "Unit 8: Fluids",
    unitNumber: 8,
    tags: ["MCQ frequent", "FRQ", "theorem"],
    summary:
      "For ideal fluid flow, the sum of pressure, kinetic energy per unit volume, and gravitational potential energy per unit volume is constant along a streamline.",
    formula:
      "P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho g y_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho g y_2",
    description:
      "Bernoulli's equation is conservation of energy applied to fluid flow. Each term represents energy per unit volume: P is pressure energy, (1/2)ρv² is kinetic energy density, and ρgy is gravitational potential energy density. Where fluid speeds up, pressure decreases (explaining airplane lift). Where elevation increases, pressure and/or speed must adjust to conserve total energy. The equation applies to ideal fluids (incompressible, non-viscous, steady flow). In horizontal flow (y constant), it simplifies to P + (1/2)ρv² = constant.",
    steps: [
      "Identify two points along the streamline. For each, determine pressure $P$, fluid speed $v$, and height $y$.",
      "Write Bernoulli's equation: $P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho g y_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho g y_2$.",
      "If the flow is horizontal ($y_1 = y_2$), the gravitational terms cancel: $P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2$.",
      "Solve for the unknown quantity. Often you'll also need the continuity equation $A_1 v_1 = A_2 v_2$ to relate the speeds.",
    ],
    examples: [
      {
        problem:
          "Water flows horizontally through a pipe. At point 1, the speed is 2 m/s and the pressure is 200 kPa. At point 2, the speed is 8 m/s. What is the pressure at point 2? (Water density = 1000 kg/m³)",
        solution:
          "Using Bernoulli (horizontal): $P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2$. Rearrange: $P_2 = P_1 + \\frac{1}{2}\\rho(v_1^2 - v_2^2) = 200{,}000 + \\frac{1}{2}(1000)(4 - 64) = 200{,}000 - 30{,}000 = 170{,}000\\,\\text{Pa} = 170\\,\\text{kPa}$.",
      },
    ],
    mcqs: [
      {
        question:
          "In horizontal fluid flow, if the fluid speed increases, what happens to the pressure?",
        options: [
          "Pressure increases because more fluid is moving",
          "Pressure decreases to conserve energy",
          "Pressure remains constant",
          "Pressure increases proportional to speed squared",
        ],
        answerIndex: 1,
        explanation:
          "Correct answer: B. Bernoulli's equation shows that $P + \\frac{1}{2}\\rho v^2$ is constant in horizontal flow. If $v$ increases, $P$ must decrease to keep the sum constant. A is incorrect — higher speed means lower pressure. C violates Bernoulli's principle. D has the relationship backward.",
      },
      {
        question:
          "Water flows from a tank through a small hole at the bottom. The water surface is 5 m above the hole. What is the approximate speed of water exiting the hole? (Use g = 10 m/s²)",
        options: ["5 m/s", "7 m/s", "10 m/s", "14 m/s"],
        answerIndex: 2,
        explanation:
          "Correct answer: C. Apply Bernoulli from the surface (v ≈ 0, P = P_atm, y = 5 m) to the hole (P = P_atm, y = 0): $P_{\\text{atm}} + 0 + \\rho g (5) = P_{\\text{atm}} + \\frac{1}{2}\\rho v^2 + 0$. Simplify: $g h = \\frac{1}{2}v^2$, so $v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 5} = \\sqrt{100} = 10\\,\\text{m/s}$. This is Torricelli's theorem. A, B, and D result from calculation errors.",
      },
    ],
  },
  {
    id: "bernoulli-apps",
    name: "Applications of Bernoulli (Venturi, lift, Torricelli)",
    unit: "Unit 8: Fluids",
    unitNumber: 8,
    tags: ["MCQ frequent", "FRQ"],
    summary:
      "Bernoulli's equation explains real-world phenomena: flow meters (Venturi), airplane lift, and Torricelli's law for efflux speed from a tank.",
    description:
      "Venturi meter: fluid flows through a constricted section, speeding up and reducing pressure; measuring the pressure difference determines flow rate. Airplane lift: air moves faster over the curved upper wing surface than the flat lower surface, creating lower pressure above and net upward force. Torricelli's law: fluid draining from a hole in a tank exits with speed v = √(2gh), where h is the depth below the surface — the same speed as free fall from height h. These applications illustrate energy conservation in fluid dynamics.",
    steps: [
      "For Venturi: identify the wide and narrow sections. Use continuity ($A_1 v_1 = A_2 v_2$) to relate speeds, then Bernoulli to find pressure difference: $\\Delta P = \\frac{1}{2}\\rho(v_2^2 - v_1^2)$.",
      "For lift: recognize that faster airflow over the top of the wing (greater $v$) means lower pressure there compared to below, resulting in net upward force.",
      "For Torricelli: apply Bernoulli from surface (v ≈ 0, open to atmosphere) to the hole (open to atmosphere, height difference $h$). Gravitational terms yield $v = \\sqrt{2gh}$.",
      "Always check that the assumptions (incompressible, non-viscous, steady flow) are reasonable for the application.",
    ],
    examples: [
      {
        problem:
          "A large open tank of water has a small hole 3.2 m below the water surface. Use Torricelli's law to find the speed of water exiting the hole.",
        solution:
          "Torricelli's law: $v = \\sqrt{2gh} = \\sqrt{2 \\times 9.8 \\times 3.2} = \\sqrt{62.72} \\approx 7.9\\,\\text{m/s}$.",
      },
    ],
    mcqs: [
      {
        question:
          "Why does an airplane wing generate lift according to Bernoulli's principle?",
        options: [
          "The wing pushes air downward, creating an upward reaction force",
          "Air travels faster over the top of the wing, creating lower pressure above than below",
          "The wing's weight compresses air below, increasing pressure there",
          "Lift is independent of airflow speed; it depends only on wing area",
        ],
        answerIndex: 1,
        explanation:
          "Correct answer: B. The curved upper surface forces air to travel farther (and faster) than air below, reducing pressure above. The pressure difference creates lift. A describes Newton's third law (also contributes to lift, but the question asks about Bernoulli). C is incorrect — the wing doesn't compress air by its weight. D is false — lift depends critically on airspeed.",
      },
      {
        question:
          "A Venturi meter has a wide section of area 0.04 m² and a narrow section of area 0.01 m². Water flows at 2 m/s in the wide section. What is the pressure difference between the sections? (Water density = 1000 kg/m³)",
        options: ["3 kPa", "6 kPa", "30 kPa", "60 kPa"],
        answerIndex: 2,
        explanation:
          "Correct answer: C. Continuity: $v_2 = v_1 (A_1/A_2) = 2 \\times (0.04/0.01) = 8\\,\\text{m/s}$. Bernoulli: $\\Delta P = \\frac{1}{2}\\rho(v_2^2 - v_1^2) = \\frac{1}{2}(1000)(64 - 4) = 500 \\times 60 = 30{,}000\\,\\text{Pa} = 30\\,\\text{kPa}$. A and B are too small. D incorrectly uses the full kinetic energy term without the factor of 1/2.",
      },
    ],
  },
  {
    id: "fluid-flow-qualitative",
    name: "Laminar vs. Turbulent Flow (qualitative)",
    unit: "Unit 8: Fluids",
    unitNumber: 8,
    tags: ["MCQ frequent"],
    summary:
      "Laminar flow is smooth and orderly with layers sliding past each other; turbulent flow is chaotic with eddies and vortices. Flow regime depends on speed, viscosity, and geometry.",
    description:
      "Laminar flow occurs at low speeds and high viscosities, where fluid moves in parallel layers (streamlines) without mixing. Examples: honey dripping, blood flow in small vessels. Turbulent flow occurs at high speeds or low viscosities, characterized by irregular, chaotic motion with mixing and eddies. Examples: rapids in a river, airflow over a car. The Reynolds number (not calculated in AP Physics 1) quantifies the transition: low Reynolds means laminar, high means turbulent. Bernoulli's equation strictly applies only to laminar flow.",
    steps: [
      "Determine the fluid's speed, viscosity, and the characteristic size of the flow region.",
      "Identify flow characteristics: smooth, steady, and orderly indicates laminar; chaotic, swirling, and mixing indicates turbulent.",
      "Recognize that increasing speed or decreasing viscosity promotes turbulent flow.",
      "In problems, assume laminar flow unless stated otherwise (allows Bernoulli and continuity equations to apply).",
    ],
    examples: [
      {
        problem:
          "A student pours syrup slowly onto a pancake. Is the syrup flow laminar or turbulent? Why?",
        solution:
          "The flow is laminar. Syrup has high viscosity and is flowing slowly, resulting in smooth, orderly layers sliding past each other without mixing or eddies.",
      },
    ],
    mcqs: [
      {
        question:
          "Which condition is most likely to produce turbulent flow?",
        options: [
          "Slow flow of a viscous liquid",
          "Fast flow of a low-viscosity liquid through a wide pipe",
          "Flow of honey at room temperature",
          "Blood flow in capillaries",
        ],
        answerIndex: 1,
        explanation:
          "Correct answer: B. High speed and low viscosity promote turbulence. A, C, and D all describe conditions favoring laminar flow (slow, high viscosity, or small vessels).",
      },
      {
        question:
          "What is a key characteristic of laminar flow?",
        options: [
          "Fluid particles move in chaotic, unpredictable paths",
          "Fluid moves in smooth, parallel layers without mixing",
          "Eddies and vortices form throughout the fluid",
          "Flow speed is always greater than the speed of sound in the fluid",
        ],
        answerIndex: 1,
        explanation:
          "Correct answer: B. Laminar flow is characterized by smooth, orderly layers (streamlines). A and C describe turbulent flow. D is unrelated — laminar vs. turbulent depends on Reynolds number, not Mach number.",
      },
    ],
  },
];

export default fluidsTopics;
