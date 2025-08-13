// import { ExternalLink, Github } from "lucide-react";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { type ProjectType } from "@/data/ProjectsData";

// export default function ProjectCard({
//   title,
//   description,
//   technologiesWithIcons,
//   thumbnail,
//   gallery,
//   liveUrl,
//   repoUrl,
// }: ProjectType) {
//   return (
//     <div className="border rounded-xl p-6 space-y-4 bg-card shadow-md hover:shadow-lg transition-shadow">
//       <h2 className="text-xl font-semibold">{title}</h2>
//       <p className="text-muted-foreground">{description}</p>

//       <div className="flex flex-wrap gap-3">
//         <TooltipProvider>
//           {technologiesWithIcons.map((tech, i) => {
//             const Icon = tech.icon || null;
//             return Icon ? (
//               <Tooltip key={i}>
//                 <TooltipTrigger asChild>
//                   <span className="text-xl" aria-label={tech.name}>
//                     <Icon />
//                   </span>
//                 </TooltipTrigger>
//                 <TooltipContent>
//                   <p>{tech.name}</p>
//                 </TooltipContent>
//               </Tooltip>
//             ) : (
//               <span
//                 key={i}
//                 className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-sm"
//               >
//                 {tech.name}
//               </span>
//             );
//           })}
//         </TooltipProvider>
//       </div>

//       <div className="flex gap-4 mt-4">
//         {repoUrl && (
//           <a
//             href={repoUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-1 hover:text-primary"
//           >
//             <Github size={18} /> Code
//           </a>
//         )}
//         {liveUrl && (
//           <a
//             href={liveUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-1 hover:text-primary"
//           >
//             <ExternalLink size={18} /> Live
//           </a>
//         )}
//       </div>
//     </div>
//   );
// }

// first Approach

// import { ExternalLink, Github } from "lucide-react";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { type ProjectType } from "@/data/ProjectsData";

// export default function ProjectCard({
//   title,
//   description,
//   technologiesWithIcons,
//   thumbnail,
//   liveUrl,
//   repoUrl,
// }: ProjectType) {
//   return (
//     <div className="border rounded-xl p-6 space-y-4 bg-card shadow-md hover:shadow-lg transition-shadow">
//       <h2 className="text-xl font-semibold">{title}</h2>
//       <p className="text-muted-foreground">{description}</p>

//       {/* Thumbnail Image */}
//       {thumbnail && (
//         <div className="overflow-hidden rounded-lg border border-border">
//           <img
//             src={thumbnail}
//             alt={`${title} thumbnail`}
//             className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
//           />
//         </div>
//       )}

//       {/* Technologies */}
//       <div className="flex flex-wrap gap-3">
//         <TooltipProvider>
//           {technologiesWithIcons.map((tech, i) => {
//             const Icon = tech.icon || null;
//             return Icon ? (
//               <Tooltip key={i}>
//                 <TooltipTrigger asChild>
//                   <span className="text-xl" aria-label={tech.name}>
//                     <Icon />
//                   </span>
//                 </TooltipTrigger>
//                 <TooltipContent>
//                   <p>{tech.name}</p>
//                 </TooltipContent>
//               </Tooltip>
//             ) : (
//               <span
//                 key={i}
//                 className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-sm"
//               >
//                 {tech.name}
//               </span>
//             );
//           })}
//         </TooltipProvider>
//       </div>

//       {/* Links */}
//       <div className="flex gap-4 mt-4">
//         {repoUrl && (
//           <a
//             href={repoUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-1 hover:text-primary"
//           >
//             <Github size={18} /> Code
//           </a>
//         )}
//         {liveUrl && (
//           <a
//             href={liveUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-1 hover:text-primary"
//           >
//             <ExternalLink size={18} /> Live
//           </a>
//         )}
//       </div>
//     </div>
//   );
// }
//second Apprach
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

export default function ProjectCard({
  title,
  description,
  technologiesWithIcons,
  gallery,
  liveUrl,
  repoUrl,
}: ProjectType) {
  return (
    <div className="border rounded-xl p-6 space-y-4 bg-card shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className=" h-24 text-muted-foreground line-clamp-4">{description}</p>

      {/* Carousel */}
      {gallery && gallery.length > 0 && (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          // autoplay={{ delay: 3000 }}
          spaceBetween={10}
          slidesPerView={1}
          className="rounded-lg border border-border overflow-hidden"
        >
          {gallery.map((imgSrc, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={imgSrc}
                alt={`${title} image ${idx + 1}`}
                className="w-full h-48 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Technologies */}
      <div className="flex flex-wrap gap-3">
        <TooltipProvider>
          {technologiesWithIcons.map((tech, i) => {
            const Icon = tech.icon || null;
            return Icon ? (
              <Tooltip key={i}>
                <TooltipTrigger asChild>
                  <span className="text-xl" aria-label={tech.name}>
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

      {/* Links */}
      <div className="flex gap-4 mt-4">
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
