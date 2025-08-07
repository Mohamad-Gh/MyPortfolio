import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = Array.from({ length: 6 }, (_, i) => ({
  title: `Project ${i + 1}`,
  description: `This is a placeholder description for project ${
    i + 1
  }. Replace it with real project data later.`,
  url: "#",
}));

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-3">Projects</h1>
          <p className="text-muted-foreground text-lg mb-4">
            A collection of my personal and full-stack projects.
          </p>
          <Link to="/" className="text-primary underline text-sm">
            ← Back to Home
          </Link>
        </header>

        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="border rounded-lg p-5 bg-card shadow hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline text-sm"
              >
                View Code →
              </a>
            </motion.div>
          ))}
        </section>
      </div>
    </main>
  );
}
