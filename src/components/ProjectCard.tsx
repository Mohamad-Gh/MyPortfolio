import { ExternalLink, Github } from "lucide-react";
import { techIcons } from "@/lib/techIcons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
};

export default function ProjectCard({
  title,
  description,
  tags,
  github,
  demo,
}: Props) {
  return (
    <div className="border rounded-xl p-6 space-y-4 bg-card shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-muted-foreground">{description}</p>

      <div className="flex flex-wrap gap-3">
        <TooltipProvider>
          {tags.map((tag, i) => {
            const Icon = techIcons[tag] || null;
            return Icon ? (
              <Tooltip key={i}>
                <TooltipTrigger asChild>
                  <span className="text-xl" aria-label={tag}>
                    <Icon />
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tag}</p>
                </TooltipContent>
              </Tooltip>
            ) : (
              <span
                key={i}
                className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-sm"
              >
                {tag}
              </span>
            );
          })}
        </TooltipProvider>
      </div>

      <div className="flex gap-4 mt-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-primary"
          >
            <Github size={18} /> Code
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-primary"
          >
            <ExternalLink size={18} /> Live
          </a>
        )}
      </div>
    </div>
  );
}
