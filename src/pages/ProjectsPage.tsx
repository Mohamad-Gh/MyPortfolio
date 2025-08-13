import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/ProjectsData";

export default function Projects() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="px-6 py-12 space-y-12">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </main>
  );
}
