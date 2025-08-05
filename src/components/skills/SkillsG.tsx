import { motion } from "framer-motion";
import { useResponsiveRadius } from "@/hooks/useResponsiveRadius";
import { getOrbitSkills } from "@/lib/helper";
import { innerCircleSkills, outerCircleSkills } from "@/lib/skillsData";

const SkillsOrbit: React.FC = () => {
  const radiusScale: number = useResponsiveRadius();
  const orbitSize: number = 450 * radiusScale;
  const innerRadius: number = 135 * radiusScale;
  const outerRadius: number = 230 * radiusScale;

  const orbitSkills: {
    Icon: React.ComponentType<{ size: number }>;
    color: string;
    radius: number;
    iconSize: number;
    duration: number;
    delay: number;
    direction: number;
  }[] = getOrbitSkills(
    innerCircleSkills,
    outerCircleSkills,
    innerRadius,
    outerRadius,
    radiusScale
  );

  return (
    <div className="w-full flex justify-center items-center mt-10 mb-4 md:mb-0">
      <motion.div
        className="relative flex flex-col items-center justify-center w-full max-w-sm h-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute text-lg sm:text-xl md:text-4xl font-extrabold text-white z-10 uppercase tracking-wide drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Skills
        </motion.div>

        <div
          className="relative"
          style={{ width: `${orbitSize}px`, height: `${orbitSize}px` }}
        >
          {/* Outer Ring (counterclockwise) */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-dashed border-white/30"
            animate={{ rotate: -360 }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40,
            }}
          />

          {/* Inner Ring (clockwise) */}
          <motion.div
            className="absolute inset-0 m-auto rounded-full border-2 border-dashed border-white/30"
            style={{
              width: `${orbitSize * 0.6}px`,
              height: `${orbitSize * 0.6}px`,
            }}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
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
                  className="absolute flex items-center justify-center rounded-full bg-gray-800/80 p-1 shadow-xl"
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
// import { motion } from "framer-motion";
// import {
//   FaReact,
//   FaNodeJs,
//   FaDocker,
//   FaJs,
//   FaPython,
//   FaGitAlt,
//   FaAws,
//   FaFigma,
//   FaDatabase,
//   FaJava,
//   FaGithub,
//   FaVuejs,
//   FaHtml5,
// } from "react-icons/fa";
// import { useEffect, useState } from "react";

// // Define inner and outer circle skills
// const innerCircleSkills = [
//   { Icon: FaReact, color: "#61DAFB" },
//   { Icon: FaNodeJs, color: "#339933" },
//   { Icon: FaDocker, color: "#0db7ed" },
//   { Icon: FaJs, color: "#F7DF1E" },
//   { Icon: FaPython, color: "#ffffff" },
// ];

// const outerCircleSkills = [
//   { Icon: FaGitAlt, color: "#ffffff" },
//   { Icon: FaAws, color: "#FF9900" },
//   { Icon: FaFigma, color: "#326CE5" },
//   { Icon: FaDatabase, color: "#6DB33F" },
//   { Icon: FaJava, color: "#0089D6" },
//   { Icon: FaGithub, color: "#1bbd00" },
//   { Icon: FaVuejs, color: "#47A248" },
//   { Icon: FaHtml5, color: "#FF6C37" },
//   { Icon: FaDatabase, color: "#0089D6" },
//   { Icon: FaPython, color: "#ffffff" },
// ];

// const SkillsOrbit = () => {
//   const [radiusScale, setRadiusScale] = useState(1);

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width < 480) setRadiusScale(0.5);
//       else if (width < 768) setRadiusScale(0.75);
//       else if (width < 1024) setRadiusScale(0.9);
//       else setRadiusScale(1);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const orbitSize = 450 * radiusScale;
//   const innerRadius = 135 * radiusScale;
//   const outerRadius = 230 * radiusScale;

//   const orbitSkills = [
//     ...innerCircleSkills.map((skill, i) => ({
//       ...skill,
//       radius: innerRadius,
//       iconSize: 24 * radiusScale + 12,
//       duration: 15,
//       delay: (i / innerCircleSkills.length) * 15,
//       direction: 1, // clockwise
//     })),
//     ...outerCircleSkills.map((skill, i) => ({
//       ...skill,
//       radius: outerRadius,
//       iconSize: 28 * radiusScale + 12,
//       duration: 20,
//       delay: (i / outerCircleSkills.length) * 20,
//       direction: -1, // counterclockwise
//     })),
//   ];

//   return (
//     <div className="w-full flex justify-center items-center mt-10 mb-4 md:mb-0">
//       <motion.div
//         className="relative flex flex-col items-center justify-center w-full max-w-sm h-auto"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <motion.div
//           className="absolute text-lg sm:text-xl md:text-4xl font-extrabold text-white z-10 uppercase tracking-wide drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
//           animate={{ scale: [1, 1.05, 1] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//         >
//           Skills
//         </motion.div>

//         <div
//           className="relative"
//           style={{ width: `${orbitSize}px`, height: `${orbitSize}px` }}
//         >
//           {/* Outer Ring (counterclockwise) */}
//           <motion.div
//             className="absolute inset-0 rounded-full border-2 border-dashed border-white/30"
//             animate={{ rotate: -360 }}
//             transition={{
//               repeat: Infinity,
//               ease: "linear",
//               duration: 40,
//             }}
//           />

//           {/* Inner Ring (clockwise) */}
//           <motion.div
//             className="absolute inset-0 m-auto rounded-full border-2 border-dashed border-white/30"
//             style={{
//               width: `${orbitSize * 0.6}px`,
//               height: `${orbitSize * 0.6}px`,
//             }}
//             animate={{ rotate: 360 }}
//             transition={{
//               repeat: Infinity,
//               ease: "linear",
//               duration: 30,
//             }}
//           />

//           {/* Orbiting Icons */}
//           {orbitSkills.map(
//             (
//               { Icon, color, radius, iconSize, duration, delay, direction },
//               index
//             ) => (
//               <motion.div
//                 key={index}
//                 className="absolute left-1/2 top-1/2"
//                 style={{ width: 0, height: 0 }}
//                 animate={{ rotate: -360 * direction }}
//                 transition={{
//                   repeat: Infinity,
//                   ease: "linear",
//                   duration,
//                   delay,
//                 }}
//               >
//                 <motion.div
//                   className="absolute flex items-center justify-center rounded-full bg-gray-800/80 p-1 shadow-xl"
//                   style={{
//                     zIndex: orbitSkills.length - index,
//                     left: -iconSize / 2,
//                     top: -radius - iconSize / 2,
//                     width: `${iconSize}px`,
//                     height: `${iconSize}px`,
//                     color,
//                   }}
//                   animate={{ rotate: 360 * direction }}
//                   transition={{
//                     repeat: Infinity,
//                     ease: "linear",
//                     duration,
//                     delay,
//                   }}
//                 >
//                   <Icon size={iconSize * 0.6} />
//                 </motion.div>
//               </motion.div>
//             )
//           )}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default SkillsOrbit;
