import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

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
          mx-auto flex max-w-7xl items-center justify-between
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
          Ashwin<span className="text-[#64ffda]">.</span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm transition-opacity hover:opacity-60"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm transition-opacity hover:opacity-60"
          >
            About
          </a>

          <a
            href="#devstats"
            className="text-sm transition-opacity hover:opacity-60"
          >
            Stats
          </a>

          <a
            href="#projects"
            className="text-sm transition-opacity hover:opacity-60"
          >
            Projects
          </a>
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