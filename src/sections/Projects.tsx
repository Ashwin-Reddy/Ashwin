import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

import projects from "../data/projects.json";

type Project = {
  name: string;
  description: string;
  technologies: string[];
  startDate: string;
  endDate: string;
  github: string;
};

const typedProjects = projects as Project[];

const CARD_WIDTH = 336;
const AUTO_SCROLL_INTERVAL = 5000;

const Projects = () => {
  const projectCount = typedProjects.length;

  /*
   * Three copies allow us to create an infinite carousel:
   *
   * [ A B C D E ] [ A B C D E ] [ A B C D E ]
   *
   * We start in the middle copy.
   */
  const extendedProjects = [
    ...typedProjects,
    ...typedProjects,
    ...typedProjects,
  ];

  const [activeIndex, setActiveIndex] = useState(projectCount);
  const [isResetting, setIsResetting] = useState(false);

  /*
   * Move to next project.
   */
  const nextProject = () => {
    setActiveIndex((current) => current + 1);
  };

  /*
   * Move to previous project.
   */
  const previousProject = () => {
    setActiveIndex((current) => current - 1);
  };

  /*
   * Automatic scrolling.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => current + 1);
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  /*
   * Infinite carousel reset.
   *
   * Once we move into the third copy,
   * silently jump back to the middle copy.
   */
  useEffect(() => {
    if (activeIndex >= projectCount * 2) {
      const timeout = setTimeout(() => {
        setIsResetting(true);
        setActiveIndex((current) => current - projectCount);
      }, 550);

      return () => clearTimeout(timeout);
    }

    /*
     * Same thing when moving backwards.
     */
    if (activeIndex < projectCount) {
      const timeout = setTimeout(() => {
        setIsResetting(true);
        setActiveIndex((current) => current + projectCount);
      }, 550);

      return () => clearTimeout(timeout);
    }
  }, [activeIndex, projectCount]);

  /*
   * Turn animations back on after
   * the invisible repositioning.
   */
  useEffect(() => {
    if (!isResetting) return;

    const timeout = setTimeout(() => {
      setIsResetting(false);
    }, 50);

    return () => clearTimeout(timeout);
  }, [isResetting]);

  return (
    <section
      id="projects"
      className="overflow-hidden px-6 py-32 md:py-40"
    >
      {/* Section heading */}
      <div className="mx-auto mb-14 flex max-w-6xl items-center gap-5">
        <h2 className="whitespace-nowrap text-3xl font-semibold tracking-tight md:text-4xl">
          / projects
        </h2>

        <div className="flex-1 border-t border-[#CCD0CF]/20" />
      </div>

      {/* Coverflow container */}
      <div className="relative mx-auto max-w-7xl">

        {/* Carousel viewport */}
        <div
          className="
            relative
            h-[390px]
            overflow-visible
            [perspective:1200px]
          "
        >
          <motion.div
            className="
              absolute
              left-1/2
              top-1/2
              flex
              h-[350px]
              items-center
            "
            animate={{
              x: `calc(-${activeIndex * CARD_WIDTH}px - ${CARD_WIDTH / 2}px)`,
              y: "-50%",
            }}
            transition={
              isResetting
                ? { duration: 0 }
                : {
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }
            }
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {extendedProjects.map((project, index) => {
              const distance = index - activeIndex;
              const absoluteDistance = Math.abs(distance);

              /*
               * How far the card is from the center.
               */
              const isActive = distance === 0;

              /*
               * Cards move closer together as they
               * move away from the center.
               */
              const sideOffset = distance * -125;

              /*
               * Rotate cards inward.
               */
              const rotateY = distance * -32;

              /*
               * Make side cards slightly smaller.
               */
              const scale = Math.max(
                0.78,
                1 - absoluteDistance * 0.08
              );

              /*
               * Fade cards as they move away
               * from the center.
               */
              const opacity = Math.max(
                0.2,
                1 - absoluteDistance * 0.18
              );

              /* Blur inactive cards */
              const blur = Math.min(
                absoluteDistance * 2,
                6
              )

              /*
               * Keep cards closer to the front
               * when they are near the center.
               */
              const zIndex = 20 - absoluteDistance;

              return (
                <motion.div
                  key={`${project.name}-${index}`}
                  className="
                    absolute
                    left-0
                    top-0
                    w-[336px]
                  "
                  animate={{
                    x: index * CARD_WIDTH + sideOffset,
                    scale,
                    opacity,
                    rotateY,
                    zIndex,
                    filter: `blur(${blur}px)`,
                  }}
                  transition={
                    isResetting
                      ? { duration: 0 }
                      : {
                          duration: 0.55,
                          ease: [0.22, 1, 0.36, 1],
                        }
                  }
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div
                    className={`
                      flex h-[350px] flex-col
                      rounded-2xl border p-7
                      transition-colors duration-500
                      ${
                        isActive
                          ? "border-[#CCD0CF]/60 bg-[#11212D]"
                          : "border-[#CCD0CF]/10 bg-[#11212D]"
                      }
                    `}
                  >

                    {/* Project name */}
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold leading-snug text-[#CCD0CF]">
                        {project.name}
                      </h3>
                    </div>

                    {/* Date */}
                    <div className="shrink-0 text-right text-xs leading-5 text-[#9BA8AB]">
                      <div>
                        {project.startDate} - {project.endDate}
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      className="mt-5 text-sm leading-6 text-[#9BA8AB]"
                      title={project.description}
                    >
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-10 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="
                            rounded-full
                            border border-[#CCD0CF]/10
                            px-3 py-1.5
                            text-xs text-[#9BA8AB]
                          "
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    {/* Push link to bottom */}
                    <div className="flex-1" />

                    {/* GitHub */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        w-fit
                        items-center
                        gap-2
                        text-sm
                        text-[#9BA8AB]
                        transition-colors
                        duration-300
                        hover:text-[#CCD0CF]
                      "
                    >
                      <ExternalLink size={16} />
                      View Project
                    </a>

                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Previous button */}
        <button
          type="button"
          onClick={previousProject}
          aria-label="Previous project"
          className="
            absolute
            left-2
            top-1/2
            z-30
            flex
            h-11
            w-11
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-[#CCD0CF]/20
            bg-[#06141B]
            text-[#CCD0CF]
            transition-all
            duration-300
            hover:border-[#CCD0CF]/50
            hover:bg-[#CCD0CF]
            hover:text-[#06141B]
            md:left-4
          "
        >
          <ArrowLeft size={18} />
        </button>

        {/* Next button */}
        <button
          type="button"
          onClick={nextProject}
          aria-label="Next project"
          className="
            absolute
            right-2
            top-1/2
            z-30
            flex
            h-11
            w-11
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-[#CCD0CF]/20
            bg-[#06141B]
            text-[#CCD0CF]
            transition-all
            duration-300
            hover:border-[#CCD0CF]/50
            hover:bg-[#CCD0CF]
            hover:text-[#06141B]
            md:right-4
          "
        >
          <ArrowRight size={18} />
        </button>

      </div>
    </section>
  );
};

export default Projects;