import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiGraphql } from "react-icons/si";
const projects = [
  {
    title: "Fullstack Blog App",
    description: "React, Node.js, GraphQL, Tailwind, MongoDB",
    link: "/projects/fullstack-blog",
    github: "https://github.com/yourusername/fullstack-blog",
    live: "https://fullstack-blog-live.com",
    image: ["/images/fullstack-blog.png"],
    tech: ["react-dom"],
    techIcons: [
      <FaReact key="react" className="text-cyan-500" />,
      <FaNodeJs key="node" className="text-green-500" />,
      <SiGraphql key="graphql" className="text-pink-500" />,
      <SiTailwindcss key="tailwind" className="text-teal-400" />,
    ],
  },
  {
    title: "E-commerce Store",
    description: "Next.js, Stripe, Firebase, Tailwind",
    link: "/projects/ecommerce-store",
    github: "https://github.com/yourusername/ecommerce-store",
    live: "https://ecommerce-store-live.com",
    image: ["/images/ecommerce-store.png"],
    tech: ["react-dom"],
    techIcons: [
      <SiTypescript key="typescript" className="text-blue-500" />,
      <SiTailwindcss key="tailwind" className="text-teal-400" />,
      <FaGithub key="github" className="text-gray-700" />,
    ],
  },
  {
    title: "Trend Market App",
    description: "React, Framer Motion, shadcn/ui, TypeScript",
    link: "/projects/portfolio",
    github: "https://github.com/yourusername/portfolio",
    live: "https://portfolio-live.com",
    image: ["/images/portfolio.png"],
    tech: ["react-dom"],

    techIcons: [
      <FaReact key="react" className="text-cyan-500" />,
      <SiTypescript key="typescript" className="text-blue-500" />,
    ],
  },
  {
    title: "OMC Digital FrontEnd App",
    description:
      "write a description for this website that offers services to new start ups to grow, find clients, mangage their employees, advertise their brand, and improve its markets",
    link: "https://mohamad-gh.github.io/portfolio/projects/OMGDigital/index.html",
    github:
      "https://github.com/Mohamad-Gh/portfolio/tree/main/projects/OMGDigital",
    live: "https://mohamad-gh.github.io/portfolio/projects/OMGDigital/index.html",
    image: ["/images/portfolio.png"],
    tech: ["JavaScript", "jQeury", "CSS", "HTML"],
    techIcons: [
      <FaReact key="react" className="text-cyan-500" />,
      <SiTypescript key="typescript" className="text-blue-500" />,
    ],
  },
];
