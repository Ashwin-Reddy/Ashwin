import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* Logo / Name */}
        <a
          href="#home"
          className="text-xl font-semibold tracking-tight"
        >
          Ashwin<span className="text-[#3282b8]">.</span>
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