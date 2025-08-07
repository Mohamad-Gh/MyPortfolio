import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A fullstack online store built with React, Express, MongoDB, and GraphQL.",
    tags: ["React", "GraphQL", "MongoDB", "Express", "Tailwind"],
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce.example.com",
  },
  {
    title: "Portfolio Website",
    description: "Responsive portfolio with theme toggle and project showcase.",
    tags: ["React", "Vite", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    demo: "",
  },
  // Add more as needed
];

export default function Projects() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="px-6 py-12 space-y-12">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </main>
  );
}
