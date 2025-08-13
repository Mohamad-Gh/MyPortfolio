import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJs, FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiMui,
  SiFramer,
  SiGraphql,
  SiMongodb,
  SiFirebase,
  SiStripe,
  SiExpress,
  SiVercel,
} from "react-icons/si";

import { useResponsiveRadius } from "@/hooks/useResponsiveRadius";
import type { IconType } from "react-icons";

type SkillIcons = { Icon: IconType; color: string };

// ---------------- FRONTEND (outer) ----------------
const outerCircleSkills = [
  { Icon: FaReact, color: "#61DAFB" },
  { Icon: SiNextdotjs, color: "#000000" },
  { Icon: SiTailwindcss, color: "#38BDF8" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: SiRedux, color: "#764ABC" },
  { Icon: SiMui, color: "#007FFF" },
  { Icon: SiFramer, color: "#0055FF" },
  { Icon: FaJs, color: "#F7DF1E" },
  { Icon: SiVercel, color: "#000000" },
];

// ---------------- BACKEND + DEVOPS (inner) ----------------
const innerCircleSkills = [
  { Icon: FaNodeJs, color: "#3C873A" },
  { Icon: SiExpress, color: "#000000" },
  { Icon: SiGraphql, color: "#E10098" },
  { Icon: SiMongodb, color: "#47A248" },
  { Icon: SiFirebase, color: "#FFCA28" },
  { Icon: SiStripe, color: "#635BFF" },
  // { Icon: FaDocker, color: "#2496ED" },
  { Icon: FaGithub, color: "#181717" },
];

const SkillsOrbit = () => {
  const K = 1;
  const radiusScale = useResponsiveRadius();
  const orbitSize = 450 * radiusScale * K;
  const innerRadius = 135 * radiusScale * K;
  const outerRadius = 230 * radiusScale * K;

  // Helper to distribute icons evenly
  const getOrbitSkills = (
    skills: SkillIcons[],
    radius: number,
    durationBase: number,
    direction: number
  ) =>
    skills.map((skill, i) => ({
      ...skill,
      radius,
      iconSize: 50 * radiusScale * K,
      duration: durationBase,
      delay: (i / skills.length) * durationBase,
      direction,
    }));

  const orbitSkills = [
    ...getOrbitSkills(innerCircleSkills, innerRadius, 20, 1), // inner clockwise
    ...getOrbitSkills(outerCircleSkills, outerRadius, 30, -1), // outer counter
  ];

  return (
    <div className="hidden lg:flex justify-center items-center mt-10 mb-4 md:mb-0">
      <motion.div
        className="relative flex flex-col items-center justify-center w-full max-w-sm h-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Title */}
        <motion.div
          className="absolute text-lg sm:text-xl md:text-4xl font-extrabold text-foreground z-10 uppercase tracking-wide drop-shadow-[0_0_10px_var(--glow-color)]"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Skills
        </motion.div>

        {/* Orbital Layout */}
        <div
          className="relative"
          style={{ width: `${orbitSize}px`, height: `${orbitSize}px` }}
        >
          {/* Outer Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-dashed"
            style={{ borderColor: "hsl(var(--primary) / 0.35)" }}
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          />

          {/* Inner Ring */}
          <motion.div
            className="absolute inset-0 m-auto rounded-full border-2 border-dashed"
            style={{
              width: `${orbitSize * 0.6}px`,
              height: `${orbitSize * 0.6}px`,
              borderColor: "hsl(var(--primary) / 0.35)",
            }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          />

          {/* Orbiting Icons */}
          {orbitSkills.map(
            (
              { Icon, color, radius, iconSize, duration, delay, direction },
              index
            ) => (
              <motion.div
                key={index}
                className="absolute left-1/2 top-1/2"
                style={{ width: 0, height: 0 }}
                animate={{ rotate: -360 * direction }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration,
                  delay,
                }}
              >
                <motion.div
                  className={`absolute flex items-center justify-center rounded-full bg-secondary p-1 shadow-xl ${
                    (color === "#000000" || color === "#181717") && "bg-white"
                  }`}
                  style={{
                    zIndex: orbitSkills.length - index,
                    left: -iconSize / 2,
                    top: -radius - iconSize / 2,
                    width: `${iconSize}px`,
                    height: `${iconSize}px`,
                    color,
                  }}
                  animate={{ rotate: 360 * direction }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration,
                    delay,
                  }}
                >
                  <Icon size={iconSize * 0.6} />
                </motion.div>
              </motion.div>
            )
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsOrbit;
