// src/components/LoadingPage.tsx
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function LoadingPage() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <p className="text-muted-foreground text-sm">Loading...</p>
      </motion.div>
    </div>
  );
}
