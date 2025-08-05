import React from "react";
import { motion, type Variants, type Easing } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaJs,
  FaAws,
  FaHtml5,
  FaGitAlt,
} from "react-icons/fa";
import { SiMongodb, SiSpring, SiPostgresql } from "react-icons/si";

// Define icon data with colors (no hardcoded angles)
const innerIcons = [
  { Icon: FaReact, color: "#61DAFB" },
  { Icon: FaNodeJs, color: "#339933" },
  { Icon: FaDocker, color: "#0db7ed" },
  { Icon: FaJs, color: "#F7DF1E" },
  { Icon: SiMongodb, color: "#ffffff" },
  { Icon: FaAws, color: "#ffffff" },
];

const outerIcons = [
  { Icon: SiPostgresql, color: "#326CE5" },
  { Icon: SiSpring, color: "#6DB33F" },
  { Icon: FaHtml5, color: "#0089D6" },
  { Icon: FaGitAlt, color: "#1bbd00" },
  { Icon: FaJs, color: "#ffffff" },
  { Icon: SiPostgresql, color: "#47A248" },
  { Icon: FaHtml5, color: "#FF6C37" },
  { Icon: SiPostgresql, color: "#ffffff" },
];

// Define TypeScript type for Framer Motion variants
interface CircleVariants extends Variants {
  animate: {
    rotate: number;
    transition: {
      repeat: number;
      duration: number;
      ease: Easing;
    };
  };
}

// Animation variants for circles and icons
const circleVariants: CircleVariants = {
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 20,
      ease: "linear",
    },
  },
};

const counterCircleVariants: CircleVariants = {
  animate: {
    rotate: -360,
    transition: {
      repeat: Infinity,
      duration: 15,
      ease: "linear",
    },
  },
};

// Animation for fade-in
const fadeInVariants: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Animation for pulsing text
const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: { duration: 1.5, repeat: Infinity },
  },
};

const Skills: React.FC = () => {
  // Calculate angles dynamically in radians based on number of icons
  const innerAngleStep = (2 * Math.PI) / innerIcons.length;
  const outerAngleStep = (2 * Math.PI) / outerIcons.length;

  // Calculate radius based on container size (responsive)
  const getRadius = (isInner: boolean, containerWidth: number) => {
    // Base radius as percentage of container width
    const baseRadius = isInner ? containerWidth * 0.4 : containerWidth * 0.75;
    return baseRadius;
  };

  return (
    <div className="w-full lg:w-1/2 mt-6 mb-4 md:mb-0 lg:mt-0 flex justify-center items-center">
      <motion.div
        className="relative flex flex-col items-center justify-center w-full max-w-[20rem] sm:max-w-[24rem] md:max-w-[28rem] lg:max-w-[32rem] h-auto"
        variants={fadeInVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute text-lg sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-white z-10 uppercase tracking-wide drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
          variants={pulseVariants}
          animate="animate"
        >
          Skills
        </motion.div>
        <div className="relative w-[16rem] h-[16rem] sm:w-[20rem] sm:h-[20rem] md:w-[24rem] md:h-[24rem] lg:w-[28rem] lg:h-[28rem]">
          {/* Inner Circle with Icons */}
          <motion.div
            className="absolute inset-0 w-full h-full flex items-center justify-center"
            variants={circleVariants}
            animate="animate"
            style={{ transformOrigin: "center center" }}
          >
            <div className="relative w-full h-full rounded-full border-2 border-dashed border-white/30">
              {innerIcons.map(({ Icon, color }, index) => {
                const angle = index * innerAngleStep;
                // const radius = getRadius(true, 16); // Base radius for 16rem container
                const radius = 120;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                return (
                  <motion.div
                    key={`inner-${index}`}
                    className="absolute w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    <div
                      className="flex items-center justify-center w-full h-full rounded-full bg-gray-800/80 p-1 sm:p-2 md:p-3 shadow-xl"
                      style={{ color }}
                    >
                      <Icon
                        size="1.5rem"
                        className="sm:w-6 sm:h-6 md:w-8 md:h-8"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          {/* Outer Circle with Icons */}
          <motion.div
            className="absolute inset-0 w-[60%] h-[60%] m-auto flex items-center justify-center"
            variants={counterCircleVariants}
            animate="animate"
            style={{ transformOrigin: "center center" }}
          >
            <div className="relative w-full h-full rounded-full border-dashed border-2 border-white/30">
              {outerIcons.map(({ Icon, color }, index) => {
                const angle = index * outerAngleStep;
                const radius = getRadius(false, 16 * 0.6); // Base radius for 60% of 16rem
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                return (
                  <motion.div
                    key={`outer-${index}`}
                    className="absolute w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center"
                    style={{
                      transform: `translate(${x}px, ${y}py)`,
                    }}
                  >
                    <div
                      className="flex items-center justify-center w-full h-full rounded-full bg-gray-800/80 p-1 sm:p-2 md:p-3 shadow-xl"
                      style={{ color }}
                    >
                      <Icon
                        size="1.75rem"
                        className="sm:w-7 sm:h-7 md:w-9 md:h-9"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
