import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Fullstack Blog App",
    description: "React, Node.js, GraphQL, Tailwind, MongoDB",
    link: "/projects/fullstack-blog",
  },
  {
    title: "E-commerce Store",
    description: "Next.js, Stripe, Firebase, Tailwind",
    link: "/projects/ecommerce-store",
  },
  {
    title: "Portfolio Website",
    description: "React, Framer Motion, shadcn/ui, TypeScript",
    link: "/projects/portfolio",
  },
];

export default function ProjectsPreview() {
  return (
    <section className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <Link to="/projects" className="text-primary hover:underline text-sm">
          View All Projects →
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link to={project.link}>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
