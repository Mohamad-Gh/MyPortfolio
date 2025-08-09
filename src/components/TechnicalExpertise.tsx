// src/components/TechnicalExpertise.tsx
import { Link } from "react-router-dom";
import { Sparkles, Code, ArrowUpRight, Mail } from "lucide-react";
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaGitAlt,
  FaNpm,
  FaNodeJs,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiVite,
  SiReactrouter,
  SiReactquery,
  SiDaisyui,
  SiAxios,
  SiEslint,
  SiLucide,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Button } from "./ui/button";

const FRONTENDSKILLS = [
  { name: "React", icon: <FaReact className="text-cyan-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "DaisyUI", icon: <SiDaisyui className="text-fuchsia-500" /> },
  { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
  { name: "React Router", icon: <SiReactrouter className="text-rose-500" /> },
  { name: "React Query", icon: <SiReactquery className="text-pink-500" /> },
  { name: "Axios", icon: <SiAxios className="text-blue-400" /> },
  { name: "Vite", icon: <SiVite className="text-purple-500" /> },
  { name: "ESLint", icon: <SiEslint className="text-indigo-500" /> },
  { name: "Lucide-React", icon: <SiLucide className="text-gray-500" /> },
  { name: "NPM", icon: <FaNpm className="text-red-500" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
];

const BACKENDSKILLS = [
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
];

const DEVOPSSKILLS = [
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
];

export default function TechnicalExpertise() {
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });

  const handleGetInTouch = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 max-w-6xl mx-auto">
      <div className="bg-card text-card-foreground border border-border rounded-2xl p-8 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <motion.div
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.4 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold">Technical Expertise</h3>
            </div>

            {/* FRONTEND */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                Frontend
              </h4>
              <div className="flex flex-wrap gap-3">
                {FRONTENDSKILLS.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-center w-12 h-12 bg-muted rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                    title={skill.name}
                  >
                    {skill.icon}
                  </div>
                ))}
              </div>
            </div>

            {/* BACKEND */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                Backend
              </h4>
              <div className="flex flex-wrap gap-3">
                {BACKENDSKILLS.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-center w-12 h-12 bg-muted rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                    title={skill.name}
                  >
                    {skill.icon}
                  </div>
                ))}
              </div>
            </div>

            {/* DEVOPS */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                DevOps
              </h4>
              <div className="flex flex-wrap gap-3">
                {DEVOPSSKILLS.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-center w-12 h-12 bg-muted rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                    title={skill.name}
                  >
                    {skill.icon}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{
              x: isSmallScreen ? 0 : 100,
              y: isSmallScreen ? 50 : 0,
              opacity: 0,
            }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.4 }}
            // className="space-y-8"
            className="flex flex-col justify-start gap-4"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-bold">
                  Let's Build Something Amazing
                </h2>
              </div>

              <div className="space-y-4 mb-8 text-muted-foreground">
                <p>
                  With extensive experience in building production-ready
                  applications, I am well-equipped to bring your next project to
                  life with precision and care.
                </p>
                <p>
                  From concept to deployment, I ensure every detail is crafted
                  with excellence. Let's work together to create something truly
                  exceptional.
                </p>
              </div>
            </div>
            {/* Links */}
            <motion.div
              className="flex justify-center gap-4 flex-wrap"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a href="mailto:ghalebizadem@gmail.com" target="_blank">
                <Button variant="outline">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me
                </Button>
              </a>
              <a
                href="https://github.com/MohamadGH"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  <FaGithub className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </a>
              <a
                href="https://linkedin.com/in/mohamad-ghalebizade"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  <FaLinkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </a>
            </motion.div>
            {/* Buttons */}
            <div className="pt-8 flex flex-col sm:flex-row sm:justify-center gap-4">
              <button
                onClick={handleGetInTouch}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Get In Touch
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <Link to={"/projects"}>
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-muted text-foreground rounded-lg font-medium hover:bg-muted/80 transition-colors">
                  View Projects
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
