import { motion } from "framer-motion";
import { useResponsiveRadius } from "@/hooks/useResponsiveRadius";
import { getOrbitSkills } from "@/lib/helper";
import { innerCircleSkills, outerCircleSkills } from "@/lib/skillsData";

const SkillsOrbit = () => {
  const radiusScale = useResponsiveRadius();
  const orbitSize = 450 * radiusScale;
  const innerRadius = 135 * radiusScale;
  const outerRadius = 230 * radiusScale;

  const orbitSkills = getOrbitSkills(
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
          className="absolute text-lg sm:text-xl md:text-4xl font-extrabold text-[--text-primary] z-10 uppercase tracking-wide drop-shadow-[0_0_10px_var(--glow-color)]"
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
            className="absolute inset-0 rounded-full border-2 border-dashed border-[--ring-color]"
            animate={{ rotate: -360 }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40,
            }}
          />

          {/* Inner Ring (clockwise) */}
          <motion.div
            className="absolute inset-0 m-auto rounded-full border-2 border-dashed border-[--ring-color]"
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
                  className="absolute flex items-center justify-center rounded-full bg-[--bg-secondary] p-1 shadow-xl"
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
