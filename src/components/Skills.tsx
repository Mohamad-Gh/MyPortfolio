// src/components/Skills.tsx
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaGitAlt,
  FaNpm,
  FaNodeJs,
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
  //   SiDayjs,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "DaisyUI", icon: <SiDaisyui className="text-fuchsia-500" /> },
  { name: "Redux Toolkit", icon: <SiRedux className="text-purple-600" /> },
  { name: "React Router", icon: <SiReactrouter className="text-rose-500" /> },
  { name: "React Query", icon: <SiReactquery className="text-pink-500" /> },
  { name: "Axios", icon: <SiAxios className="text-blue-400" /> },
  //   { name: "Dayjs", icon: <SiDayjs className="text-orange-400" /> },
  { name: "Vite", icon: <SiVite className="text-purple-500" /> },
  { name: "ESLint", icon: <SiEslint className="text-indigo-600" /> },
  { name: "Lucide-React", icon: <SiLucide className="text-slate-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "NPM", icon: <FaNpm className="text-red-600" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
];

export default function Skills() {
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center space-y-2 text-muted-foreground"
          >
            <div className="text-4xl">{skill.icon}</div>
            <div>{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
