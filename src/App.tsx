import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  FileText,
  Code2,
  User,
  GitBranch,
  ServerCog,
  LayoutDashboard,
} from "lucide-react";
import {
  FaReact,
  FaSun,
  FaMoon,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaVuejs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiPrisma,
  SiRedux,
  SiGraphql,
  SiExpress,
  SiVercel,
} from "react-icons/si";
// import Skills from "./components/skills/Skills";
// import SkillsGPT from "./components/skills/SkillsGPT";
import SkillsG from "./components/skills/SkillsG";

const skillIconsOuter = [
  FaReact,
  SiNextdotjs,
  FaVuejs,
  FaNodeJs,
  SiExpress,
  SiRedux,
  SiGraphql,
  SiVercel,
  FaGitAlt,
  FaFigma,
];

const skillIconsInner = [
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiPrisma,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
];

export default function PortfolioPage() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const scrollElements = document.querySelectorAll("[data-animate]");
    const handleScroll = () => {
      scrollElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight - 100;
        if (inView) {
          el.classList.add("animate-fade-in");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <div className="bg-gradient-to-b from-slate-100 to-white dark:from-slate-900 dark:to-black text-gray-800 dark:text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-black shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Mohamad</h1>
        <nav className="flex gap-6 text-sm">
          {["Home", "About", "Skills", "Projects", "Contact"].map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className="hover:text-primary transition-colors"
            >
              {section}
            </a>
          ))}
        </nav>
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-full bg-slate-200 dark:bg-slate-700"
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </header>

      <main className="space-y-32 max-w-6xl mx-auto p-6">
        {/* Hero Section */}
        <section id="home" className="text-center space-y-4" data-animate>
          <img
            src="https://source.unsplash.com/random/600x300/?developer"
            alt="Developer"
            className="mx-auto rounded-2xl shadow-md"
          />
          <h1 className="text-4xl font-bold">Hi, I'm Mohamad</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Frontend Developer building modern, interactive web interfaces.
          </p>
          <div className="flex justify-center gap-4">
            <Button>Hire Me</Button>
            <Button variant="outline">Download Resume</Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" data-animate>
          <Card>
            <CardHeader>
              <CardTitle>
                <User className="inline mr-2" />
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                I'm a frontend developer skilled in React, TypeScript, and UI
                design. I care deeply about performance, accessibility, and
                great UX.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          data-animate
          className="relative flex justify-center items-center h-[500px]"
        >
          {/* <SkillsGPT /> */}
          {/* <Skills /> */}
          <SkillsG />
        </section>

        {/* Projects Section */}
        <section id="projects" data-animate>
          <Card>
            <CardHeader>
              <CardTitle>
                <FileText className="inline mr-2" />
                Projects
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
              {[1, 2].map((n) => (
                <div
                  key={n}
                  className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-slate-800"
                >
                  <img
                    src={`https://source.unsplash.com/random/600x300/?project-${n}`}
                    alt="Project"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">Project Title {n}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Short project description goes here, outlining the goal
                      and outcome.
                    </p>
                    <div className="flex gap-2 mt-2">
                      {[...skillIconsOuter, ...skillIconsInner]
                        .slice(0, 5)
                        .map((Icon, i) => (
                          <span
                            key={i}
                            className="bg-slate-200 dark:bg-slate-700 p-2 rounded-full text-lg"
                          >
                            <Icon />
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section id="contact" data-animate>
          <Card>
            <CardHeader>
              <CardTitle>
                <Mail className="inline mr-2" />
                Contact Me
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" type="email" />
                <Textarea placeholder="Your Message" />
                <Button type="submit">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500">
          <div className="flex justify-center gap-4 py-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
            <a href="tel:+123456789">
              <Phone />
            </a>
          </div>
          <p>
            &copy; {new Date().getFullYear()} Mohamad Ghalebizade. All rights
            reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
