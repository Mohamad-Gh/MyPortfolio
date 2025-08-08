import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutContact() {
  return (
    <section className="py-6 text-center max-w-2xl mx-auto">
      <motion.h2
        className="text-2xl py-2 font-semibold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Let's Build Something Together
      </motion.h2>

      <motion.p
        className="text-muted-foreground text-sm py-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
      >
        I'm a frontend developer passionate about building clean, responsive,
        and delightful user experiences. Feel free to reach out if you're
        hiring, collaborating, or just want to say hi.
      </motion.p>

      <motion.div
        className="flex justify-center gap-4 flex-wrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <a href="mailto:ghalebizadem@gmail.com" target="_blank">
          <Button variant="outline">
            <Mail className="w-4 h-4 mr-2" />
            Email Me
          </Button>
        </a>
        <a
          href="https://github.com/MohamadGH"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline">
            <FaGithub className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        </a>
        <a
          href="https://linkedin.com/in/mohamad-ghalebizade"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline">
            <FaLinkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
        </a>
      </motion.div>
    </section>
  );
}
