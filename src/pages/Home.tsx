import { motion } from "framer-motion";
import ProjectsPreview from "@/components/ProjectPreview";
import ContactForm from "@/components/ContactForm";
import SkillsOrbit from "@/components/skills/SkillsOrbit";
import TechnicalExpertise from "@/components/TechnicalExpertise";

export default function App() {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center mt-20">
        <div className="flex">
          <div className="w-1/2">
            {
              <motion.img
                src={"https://picsum.photos/400"}
                // src={imageUrl}
                alt="Portrait of Mohamad Ghalebizade"
                className="w-40 h-40 rounded-full mx-auto mb-6 object-cover"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
            }
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
            {/* about  */}
            <p className="mt-10 text-center text-muted-foreground line-clamp-3">
              Passionate frontend developer with experience in modern web
              technologies including React, Tailwind, TypeScript, and GraphQL. I
              focus on building scalable UI with clean, maintainable code and
              user-centric design.
            </p>
          </div>
          <div className="w-1/2">
            <SkillsOrbit />
          </div>
        </div>
      </section>
      {/* Tech Stack Section */}
      <TechnicalExpertise />
      {/* Projects Preview */}
      <ProjectsPreview />
      {/* <AboutContact /> */}
      <ContactForm />
    </>
  );
}
