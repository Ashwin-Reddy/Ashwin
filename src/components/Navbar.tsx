import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "devstats", label: "Stats" },
  { id: "projects", label: "Projects" },
];

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const aboutSection = document.getElementById("about");

    if (!aboutSection) return;

    const handleScroll = () => {
      const aboutTop = aboutSection.getBoundingClientRect().top;

      setIsSticky(aboutTop <= 0);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sectionElements.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={`
        z-50 w-full px-6
        transition-all duration-300
        ${
          isSticky
            ? "fixed left-0 top-3"
            : "absolute left-0 top-0"
        }
      `}
    >
      <div
        className={`
          mx-auto flex max-w-6xl items-center justify-between
          px-0 py-5
          transition-all duration-300
          ${
            isSticky
              ? `
                rounded-2xl
                border border-[#CCD0CF]/15
                bg-[#11212D]/55
                px-6
                shadow-[0_8px_32px_rgba(0,0,0,0.2)]
                backdrop-blur-md
              `
              : ""
          }
        `}
      >

        {/* Logo / Name */}
        <a
          href="#home"
          className="text-xl font-semibold tracking-tight"
        >
          Ashwin<span className="text-[#64ffdd]">.</span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {sections.map((section) => {
            const isActive = activeSection === section.id;

            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`
                  flex items-center gap-2
                  text-sm
                  transition-all duration-300
                  ${
                    isActive
                      ? "text-[#CCD0CF]"
                      : "text-[#9BA8AB]"
                  }
                  hover:text-[#CCD0CF]
                `}
              >
                {/* Active indicator */}
                <span
                  className={`
                    h-1.5 w-1.5 rounded-full
                    bg-[#64ffdd]
                    transition-all duration-300
                    ${
                      isActive
                        ? "scale-100 opacity-100"
                        : "scale-0 opacity-0"
                    }
                  `}
                />

                {section.label}
              </a>
            );
          })}
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5">

          <a
            href="mailto:ashwindeepak.official@gmail.com"
            aria-label="Email"
            className="transition-opacity hover:opacity-60"
          >
            <FaEnvelope size={18} />
          </a>

          <a
            href="https://github.com/Ashwin-Reddy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-opacity hover:opacity-60"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://linkedin.com/in/ashwinreddy16"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-opacity hover:opacity-60"
          >
            <FaLinkedin size={18} />
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;