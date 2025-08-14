import { Code } from "lucide-react";
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaGitAlt,
  FaNpm,
  FaNodeJs,
  FaAws,
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
  SiFramer,
  SiShadcnui,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiGraphql,
  SiApollographql,
  SiFirebase,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
const SIZE = 25;

const FRONTENDSKILLS = [
  { name: "React", icon: <FaReact className="text-cyan-500" size={SIZE} /> },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500" size={SIZE} />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400" size={SIZE} />,
  },
  {
    name: "DaisyUI",
    icon: <SiDaisyui className="text-fuchsia-500" size={SIZE} />,
  },
  {
    name: "shadcn/ui",
    icon: <SiShadcnui className="text-gray-500" size={SIZE} />,
  },
  {
    name: "Redux Toolkit",
    icon: <SiRedux className="text-purple-500" size={SIZE} />,
  },
  {
    name: "React Router",
    icon: <SiReactrouter className="text-rose-500" size={SIZE} />,
  },
  {
    name: "React Query",
    icon: <SiReactquery className="text-pink-500" size={SIZE} />,
  },
  { name: "Axios", icon: <SiAxios className="text-blue-400" size={SIZE} /> },
  {
    name: "Framer Motion",
    icon: <SiFramer className="text-indigo-500" size={SIZE} />,
  },
  { name: "Vite", icon: <SiVite className="text-purple-500" size={SIZE} /> },
  {
    name: "ESLint",
    icon: <SiEslint className="text-indigo-400" size={SIZE} />,
  },
  {
    name: "Lucide-React",
    icon: <SiLucide className="text-gray-500" size={SIZE} />,
  },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" size={SIZE} /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" size={SIZE} /> },
];

const BACKENDSKILLS = [
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500" size={SIZE} />,
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-500" size={SIZE} />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600" size={SIZE} />,
  },
  {
    name: "Mongoose",
    icon: <SiMongoose className="text-red-500" size={SIZE} />,
  },
  {
    name: "GraphQL",
    icon: <SiGraphql className="text-pink-500" size={SIZE} />,
  },
  {
    name: "Apollo Server",
    icon: <SiApollographql className="text-indigo-500" size={SIZE} />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-yellow-500" size={SIZE} />,
  },
];

const DEVOPSSKILLS = [
  { name: "Git", icon: <FaGitAlt className="text-orange-500" size={SIZE} /> },
  {
    name: "GitHub",
    icon: <FaGithub className="text-foreground" size={SIZE} />,
  },
  { name: "NPM", icon: <FaNpm className="text-red-500" size={SIZE} /> },
  { name: "AWS", icon: <FaAws className="text-yellow-400" size={SIZE} /> },
  {
    name: "Vercel",
    icon: <SiVercel className="text-foreground" size={SIZE} />,
  },
  {
    name: "Netlify",
    icon: <SiNetlify className="text-teal-400" size={SIZE} />,
  },
];

export default function TechnicalExpertise() {
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });

  return (
    <section className="py-16 mx-auto ">
      <div className="bg-card text-card-foreground border border-border rounded-2xl p-8 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
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
            className="flex flex-col justify-start gap-8"
          >
            <div>
              <h4 className="text-lg font-semibold mb-2">Frontend</h4>
              <p className="text-sm text-muted-foreground">
                I design and build scalable, responsive, and visually engaging
                user interfaces using modern frameworks like React and
                TypeScript, enhanced with Tailwind CSS, shadcn/ui, DaisyUI, and
                animations via Framer Motion for delightful user experiences.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Backend</h4>
              <p className="text-sm text-muted-foreground">
                I develop robust backend solutions using Node.js, Express.js,
                and MongoDB with Mongoose, and integrate flexible APIs powered
                by GraphQL and Apollo Server. I also leverage Firebase for
                real-time functionality when needed.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">DevOps</h4>
              <p className="text-sm text-muted-foreground">
                I manage version control with Git/GitHub, automate workflows,
                and deploy projects to platforms like Vercel, Netlify, and AWS —
                ensuring smooth CI/CD and optimized delivery pipelines.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
