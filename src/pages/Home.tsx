import { motion } from "framer-motion";
import Skills from "@/components/Skills";
import ProjectsPreview from "@/components/ProjectPreview";
import AboutContact from "@/components/AboutContact";
import { useEffect, useState } from "react";

export default function App() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch("https://picsum.photos/400");
        if (!response.ok) {
          throw new Error("Failed to fetch image");
        }
        // No need for response.json() since the API returns the image directly
        setImageUrl("https://picsum.photos/400"); // Use the URL directly
        setLoading(false);
      } catch (err: unknown) {
        // Handle unknown error type safely
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  //   if (loading) return <div>Loading...</div>;
  //   if (error) return <div>Error: {error}</div>;

  return (
    <>
      <main className="min-h-screen bg-background text-foreground p-6">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mt-20">
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
          </section>
          {/* about section */}
          <section className="mt-16 max-w-3xl mx-auto text-center text-muted-foreground">
            <p>
              Passionate frontend developer with experience in modern web
              technologies including React, Tailwind, TypeScript, and GraphQL. I
              focus on building scalable UI with clean, maintainable code and
              user-centric design.
            </p>
          </section>

          {/* Tech Stack Section */}

          <Skills />
          {/* Projects Preview */}
          <ProjectsPreview />
          {/* About and Contacts */}
          <AboutContact />
        </div>
      </main>
    </>
  );
}
