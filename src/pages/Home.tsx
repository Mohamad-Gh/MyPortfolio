// src/App.tsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";

export default function App() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background text-foreground p-6">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mt-20">
            <motion.img
              src="https://picsum.photos/400"
              alt="Profile"
              className="w-40 h-40 rounded-full mx-auto mb-6 object-cover"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
            <motion.h1
              className="text-4xl font-bold mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Mohamad Ghalebizade
            </motion.h1>
            <motion.p
              className="text-muted-foreground text-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Frontend Developer • React • Tailwind CSS • GraphQL
            </motion.p>
          </section>

          {/* Tech Stack Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Tech Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "React",
                "TypeScript",
                "Tailwind",
                "GraphQL",
                "MongoDB",
                "Express",
                "Firebase",
              ].map((tech, i) => (
                <motion.div
                  key={tech}
                  className="px-4 py-2 rounded-full bg-card shadow"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Link to Projects Page */}
          <section className="mt-16 text-center">
            <Link
              to="/projects"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition"
            >
              View Projects →
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
