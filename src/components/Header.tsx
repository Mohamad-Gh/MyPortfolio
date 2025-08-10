import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import DarkLogo from "/DarkLogo.png";
import LightLogo from "/LightLogo.png";

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const sunControls = useAnimation();
  const moonControls = useAnimation();

  // const radius = 40; // Radius of the vertical circle
  const duration = 0.8; // Animation duration

  // Toggle theme and animate icons
  const animate = async () => {
    // const sunStartAngle = isDark ? 0 : 180; // Sun: top (0°) in dark mode, bottom (180°) in light mode
    // const moonStartAngle = isDark ? 180 : 0; // Moon: bottom (180°) in dark mode, top (0°) in light mode

    await Promise.all([
      sunControls.start({
        rotate: isDark ? -180 : 0, // Sun moves to bottom in light mode, top in dark mode
        opacity: isDark ? 0 : 1, // Fade out in light mode, fade in in dark mode
        transition: { duration, ease: "easeInOut" },
      }),
      moonControls.start({
        rotate: isDark ? 0 : -180, // Moon moves to top in light mode, bottom in dark mode
        opacity: isDark ? 1 : 0, // Fade in in light mode, fade out in dark mode
        transition: { duration, ease: "easeInOut" },
      }),
    ]);

    setIsDark(!isDark);
  };

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialTheme = stored || systemTheme;
    setIsDark(initialTheme === "dark");
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    localStorage.setItem("theme", initialTheme);
  }, []);

  // Update theme and localStorage
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  // Set initial icon positions
  useEffect(() => {
    sunControls.set({
      rotate: isDark ? 0 : 180, // Sun at top (0°) in dark mode, bottom (180°) in light mode
      opacity: isDark ? 1 : 0, // Visible in dark mode, invisible in light mode
    });
    moonControls.set({
      rotate: isDark ? 180 : 0, // Moon at bottom (180°) in dark mode, top (0°) in light mode
      opacity: isDark ? 0 : 1, // Invisible in dark mode, visible in light mode
    });
  }, [isDark, sunControls, moonControls]);

  return (
    <header className="relative z-10 flex justify-between items-center px-6 border-b border-border bg-background">
      <div className="flex items-center space-x-8">
        <img
          className="object-cover"
          height={70}
          width={70}
          src={isDark ? DarkLogo : LightLogo}
        />
        <nav className="flex gap-4 text-sm font-medium">
          <Link to="/" className="hover:underline hover:text-primary">
            Home
          </Link>
          <Link to="/projects" className="hover:underline hover:text-primary">
            Projects
          </Link>
        </nav>
      </div>

      <div className="relative w-20 h-20">
        <svg
          className="absolute"
          width="30"
          height="10"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            overflow: "visible",
          }}
        >
          <path d="M 20 60 A 20 20 0 0 1 20 0" fill="none" stroke="none" />
          {/* Sun Icon – visible in dark mode */}
          <motion.g
            animate={sunControls}
            style={{ originX: "20px", originY: "40px" }}
          >
            <foreignObject x="-12" y="-12" width="24" height="24">
              <button disabled={!isDark} onClick={animate}>
                <Sun
                  className={`w-6 h-6 ${
                    isDark ? "cursor-pointer" : "cursor-default"
                  } text-yellow-400`}
                />
              </button>
            </foreignObject>
          </motion.g>
          {/* Moon Icon – visible in light mode */}
          <motion.g
            animate={moonControls}
            style={{ originX: "10px", originY: "40px" }}
          >
            <foreignObject x="-12" y="-12" width="24" height="24">
              <button disabled={isDark} onClick={animate}>
                <Moon
                  className={`w-6 h-6 ${
                    !isDark ? "cursor-pointer" : "cursor-default"
                  } text-sky-400`}
                />
              </button>
            </foreignObject>
          </motion.g>
        </svg>
      </div>
    </header>
  );
}
