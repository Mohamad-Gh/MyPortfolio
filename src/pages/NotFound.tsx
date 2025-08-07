import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="h-[calc(100dvh-64px)] flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        className="text-7xl font-extrabold tracking-tight text-primary"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        404
      </motion.h1>

      <motion.p
        className="text-lg text-muted-foreground mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Page not found. The page you're looking for doesn't exist.
      </motion.p>

      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link
          to="/"
          className="inline-block bg-primary text-white px-5 py-2 rounded-xl hover:bg-primary/90 transition-colors"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
}
