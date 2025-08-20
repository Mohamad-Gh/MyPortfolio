import { ExternalLink, Github } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { type ProjectType } from "@/data/ProjectsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import TypingText from "./TypingText";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

export default function ProjectCard({
  title,
  description,
  technologiesWithIcons,
  gallery,
  liveUrl,
  repoUrl,
}: ProjectType) {
  return (
    <div className="flex flex-col h-full border rounded-xl p-4 sm:p-6 bg-card shadow-md hover:shadow-lg transition-shadow">
      {/* Title */}
      <h2 className="text-lg sm:text-xl font-semibold mb-2">{title}</h2>

      {/* Description (fixed height for alignment) */}
      <div className="mb-4 min-h-[4.5rem] sm:min-h-[5.5rem] lg:min-h-[auto]">
        {description === "work in progress ..." ? (
          <TypingText text={description} />
        ) : (
          <p className="text-muted-foreground line-clamp-3 sm:line-clamp-4 lg:line-clamp-none h-24">
            {description}
          </p>
        )}
      </div>

      {/* Carousel */}
      {gallery && gallery.length > 0 && (
        <div className="relative mb-4">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{
              clickable: true,
              el: ".swiper-custom-pagination",
            }}
            spaceBetween={10}
            slidesPerView={1}
            className="rounded-lg border border-border overflow-hidden"
          >
            {gallery.map((imgSrc, idx) => (
              <SwiperSlide
                key={idx}
                className="flex justify-center items-center"
              >
                <img
                  src={imgSrc}
                  alt={`${title} image ${idx + 1}`}
                  className="w-full h-40 sm:h-48 md:h-56 object-contain bg-background"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Pagination dots outside image */}
          <div className="swiper-custom-pagination mt-2 flex justify-center" />
        </div>
      )}

      {/* Technologies */}
      <div className="flex flex-wrap gap-3 mb-4">
        <TooltipProvider>
          {technologiesWithIcons.map((tech, i) => {
            const Icon = tech.icon || null;
            return Icon ? (
              <Tooltip key={i}>
                <TooltipTrigger asChild>
                  <span className="text-lg sm:text-xl" aria-label={tech.name}>
                    <Icon />
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tech.name}</p>
                </TooltipContent>
              </Tooltip>
            ) : (
              <span
                key={i}
                className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-sm"
              >
                {tech.name}
              </span>
            );
          })}
        </TooltipProvider>
      </div>

      {/* Links (footer pinned to bottom) */}
      <div className="flex flex-wrap gap-2 sm:gap-4 mt-auto pt-4">
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-primary"
          >
            <Github size={18} /> Code
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
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
