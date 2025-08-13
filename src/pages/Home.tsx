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
        <div className="flex justify-between">
          <div className="w-full lg:w-1/2 ">
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
              className="text-muted-foreground text-lg tracking-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              React • Next.js • TypeScript • Tailwind CSS • Redux • GraphQL •
              Node.js • MongoDB • Firebase • Material UI
            </motion.p>
            {/* about  */}
            <p className="mt-10 text-center tracking-tight text-muted-foreground">
              Frontend-focused fullstack developer experienced in building
              high-performance web apps — from e-commerce stores and rental
              platforms to team management tools — using React, Next.js,
              Tailwind CSS, and TypeScript. Skilled in GraphQL, Node.js,
              MongoDB, and Firebase, I craft scalable, maintainable, and
              visually engaging interfaces backed by clean, efficient code and
              modern deployment workflows.
            </p>
          </div>
          {/* <div className="hidden lg:flex lg:w-1/2"> */}
          <SkillsOrbit />
          {/* </div> */}
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
