import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    // border-t border-border
    <footer className="w-full  py-6 px-4 md:px-8 text-sm text-muted-foreground">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Mohamad Ghalebizade. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/your-github" // replace with your link
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 hover:text-primary transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin" // replace with your link
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 hover:text-primary transition-colors" />
          </a>
          <a
            href="mailto:your@email.com" // replace with your email
            aria-label="Email"
          >
            <Mail className="w-5 h-5 hover:text-primary transition-colors" />
          </a>
          {/* Optional: Resume link */}
          {/* <Link
            to="/resume.pdf"
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            Resume
          </Link> */}
        </div>
      </div>
    </footer>
  );
}
