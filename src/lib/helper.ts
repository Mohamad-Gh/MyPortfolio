import { type Skill } from "./skillsData";

export interface OrbitSkill extends Skill {
  radius: number;
  iconSize: number;
  duration: number;
  delay: number;
  direction: number;
}

export const getOrbitSkills = (
  innerCircleSkills: Skill[],
  outerCircleSkills: Skill[],
  innerRadius: number,
  outerRadius: number,
  radiusScale: number
): OrbitSkill[] => [
  ...innerCircleSkills.map((skill, i) => ({
    ...skill,
    radius: innerRadius,
    iconSize: 24 * radiusScale + 12,
    duration: 15,
    delay: (i / innerCircleSkills.length) * 15,
    direction: 1, // clockwise
  })),
  ...outerCircleSkills.map((skill, i) => ({
    ...skill,
    radius: outerRadius,
    iconSize: 28 * radiusScale + 12,
    duration: 20,
    delay: (i / outerCircleSkills.length) * 20,
    direction: -1, // counterclockwise
  })),
];
