import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaJs,
  FaPython,
  FaGitAlt,
  FaAws,
  FaFigma,
  FaDatabase,
  FaJava,
  FaGithub,
  FaVuejs,
  FaHtml5,
} from "react-icons/fa";

export interface Skill {
  Icon: React.ComponentType<{ size: number }>;
  color: string;
}

export const innerCircleSkills: Skill[] = [
  { Icon: FaReact, color: "#61DAFB" },
  { Icon: FaNodeJs, color: "#339933" },
  { Icon: FaDocker, color: "#0db7ed" },
  { Icon: FaJs, color: "#F7DF1E" },
  { Icon: FaPython, color: "#ffffff" },
];

export const outerCircleSkills: Skill[] = [
  { Icon: FaGitAlt, color: "#ffffff" },
  { Icon: FaAws, color: "#FF9900" },
  { Icon: FaFigma, color: "#326CE5" },
  { Icon: FaDatabase, color: "#6DB33F" },
  { Icon: FaJava, color: "#0089D6" },
  { Icon: FaGithub, color: "#1bbd00" },
  { Icon: FaVuejs, color: "#47A248" },
  { Icon: FaHtml5, color: "#FF6C37" },
  { Icon: FaDatabase, color: "#0089D6" },
  { Icon: FaPython, color: "#ffffff" },
];
