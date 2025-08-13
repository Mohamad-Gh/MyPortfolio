import { motion } from "framer-motion";
import ProjectsPreview from "@/components/ProjectPreview";
import ContactForm from "@/components/ContactForm";
import SkillsOrbit from "@/components/skills/SkillsOrbit";
import TechnicalExpertise from "@/components/TechnicalExpertise";
import ProfileImage from "@/assets/images/Profile/profilePicture.jpg";
export default function App() {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center mt-20">
        <div className="flex justify-between">
          <div className="w-full lg:w-1/2 ">
            {
              <motion.img
                src={ProfileImage}
                alt="Portrait of Mohamad Ghalebizade"
                className="w-96 h-96 rounded-4xl mx-auto mb-6 object-cover "
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
              Node.js • MongoDB • Firebase • Vercel • Material UI
            </motion.p>
            {/* about  */}
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
