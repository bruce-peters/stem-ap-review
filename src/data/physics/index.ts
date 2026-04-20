import type { Topic } from "@/types";

export { kinematicsTopics } from "./u1-kinematics";
export { dynamicsTopics } from "./u2-dynamics";
import circularMotionGravitationTopics from "./u3-circular-motion-gravitation";
export { energyTopics } from "./u4-energy";
import torqueRotationalDynamicsTopics from "./u5-torque-rotational-dynamics";
export { energyMomentumRotatingSystemsTopics } from "./u6-energy-momentum-rotating-systems";
import oscillationsTopics from "./u7-oscillations";
export { fluidsTopics } from "./u8-fluids";

export { circularMotionGravitationTopics };
export { torqueRotationalDynamicsTopics };
export { oscillationsTopics };

import { kinematicsTopics } from "./u1-kinematics";
import { dynamicsTopics } from "./u2-dynamics";
import { energyTopics } from "./u4-energy";
import { energyMomentumRotatingSystemsTopics } from "./u6-energy-momentum-rotating-systems";
import { fluidsTopics } from "./u8-fluids";

export const physicsTopics: Topic[] = [
  ...kinematicsTopics,
  ...dynamicsTopics,
  ...circularMotionGravitationTopics,
  ...energyTopics,
  ...torqueRotationalDynamicsTopics,
  ...energyMomentumRotatingSystemsTopics,
  ...oscillationsTopics,
  ...fluidsTopics,
];

export const physicsUnits: string[] = [
  "Unit 1: Kinematics",
  "Unit 2: Dynamics",
  "Unit 3: Circular Motion and Gravitation",
  "Unit 4: Energy",
  "Unit 5: Torque and Rotational Dynamics",
  "Unit 6: Energy and Momentum of Rotating Systems",
  "Unit 7: Oscillations",
  "Unit 8: Fluids",
];
