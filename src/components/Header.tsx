import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import DarkLogo from "@/assets/images/Logos/NeonLogo.png";
import LightLogo from "@/assets/images/Logos/NeonLogo.png";

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const sunControls = useAnimation();
  const moonControls = useAnimation();

  const duration = 0.8; // icon animation duration

  const animate = async () => {
    await Promise.all([
      sunControls.start({
        rotate: isDark ? -180 : 0,
        opacity: isDark ? 0 : 1,
        transition: { duration, ease: "easeInOut" },
      }),
      moonControls.start({
        rotate: isDark ? 0 : -180,
        opacity: isDark ? 1 : 0,
        transition: { duration, ease: "easeInOut" },
      }),
    ]);
    setIsDark(!isDark);
  };

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

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    sunControls.set({
      rotate: isDark ? 0 : 180,
      opacity: isDark ? 1 : 0,
    });
    moonControls.set({
      rotate: isDark ? 180 : 0,
      opacity: isDark ? 0 : 1,
    });
  }, [isDark, sunControls, moonControls]);

  return (
    <header className="relative z-10 flex justify-between items-center px-6 border-b border-border bg-background">
      <div className="flex items-center space-x-8">
        {/* Pulsing Logo */}
        <Link to="/">
          <motion.img
            className="object-cover"
            height={70}
            width={70}
            src={isDark ? DarkLogo : LightLogo}
            animate={{
              scale: [1, 1.05, 1],
              filter: ["brightness(1)", "brightness(1.15)", "brightness(1)"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </Link>
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
