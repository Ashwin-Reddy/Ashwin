import { useEffect, useState } from "react";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaBars,
    FaTimes,
} from "react-icons/fa";

const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "devstats", label: "Stats" },
];

const Navbar = () => {
    const [isSticky, setIsSticky] =
        useState(false);

    const [activeSection, setActiveSection] =
        useState("home");

    const [isMenuOpen, setIsMenuOpen] =
        useState(false);

    /*
     * Handles:
     * 1. Sticky navbar
     * 2. Active section
     */
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            /*
             * Sticky Navbar
             */
            const aboutSection =
                document.getElementById("about");

            if (aboutSection) {
                const aboutTop =
                    aboutSection.getBoundingClientRect().top;

                setIsSticky(aboutTop <= 0);
            }

            /*
             * Active Section
             */
            if (scrollY < 100) {
                setActiveSection("home");
                return;
            }

            const referencePoint =
                scrollY +
                window.innerHeight * 0.35;

            let currentSection = "home";
            let closestSectionTop = -Infinity;

            sections.forEach((section) => {
                const element =
                    document.getElementById(
                        section.id
                    );

                if (!element) {
                    return;
                }

                const sectionTop =
                    element.getBoundingClientRect().top +
                    scrollY;

                if (
                    sectionTop <=
                        referencePoint &&
                    sectionTop >
                        closestSectionTop
                ) {
                    closestSectionTop =
                        sectionTop;

                    currentSection =
                        section.id;
                }
            });

            setActiveSection(
                currentSection
            );
        };

        handleScroll();

        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );

        window.addEventListener(
            "resize",
            handleScroll
        );

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );

            window.removeEventListener(
                "resize",
                handleScroll
            );
        };
    }, []);

    /*
     * Close the mobile menu if the
     * viewport becomes desktop-sized.
     */
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener(
            "resize",
            handleResize
        );

        return () => {
            window.removeEventListener(
                "resize",
                handleResize
            );
        };
    }, []);

    return (
        <nav
            className={`
                z-50 w-full px-4 sm:px-6
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
                    relative
                    mx-auto
                    flex
                    max-w-6xl
                    items-center
                    justify-between
                    px-0
                    py-4
                    transition-all
                    duration-300

                    ${
                        isSticky
                            ? `
                                rounded-2xl
                                border
                                border-[#CCD0CF]/15
                                bg-[#11212D]/55
                                px-4
                                shadow-[0_8px_32px_rgba(0,0,0,0.2)]
                                backdrop-blur-md
                                sm:px-6
                            `
                            : ""
                    }
                `}
            >

                {/* ================================
                    Mobile Menu Button
                ================================= */}

                <button
                    type="button"
                    aria-label={
                        isMenuOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    aria-expanded={
                        isMenuOpen
                    }
                    onClick={() =>
                        setIsMenuOpen(
                            (prev) => !prev
                        )
                    }
                    className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        text-[#64FFDD]
                        transition-colors
                        hover:text-[#CCD0CF]
                        md:hidden
                    "
                >
                    {isMenuOpen ? (
                        <FaTimes size={18} />
                    ) : (
                        <FaBars size={18} />
                    )}
                </button>


                {/* ================================
                    Logo / Name
                ================================= */}

                <a
                    href="#home"
                    onClick={() =>
                        setIsMenuOpen(false)
                    }
                    className="
                        text-lg
                        font-semibold
                        tracking-tight
                        sm:text-xl
                    "
                >
                    Ashwin
                    <span className="text-[#64ffdd]">
                        .
                    </span>
                </a>


                {/* ================================
                    Desktop Navigation
                ================================= */}

                <div
                    className="
                        hidden
                        items-center
                        gap-8
                        md:flex
                    "
                >
                    {sections.map(
                        (section) => {
                            const isActive =
                                activeSection ===
                                section.id;

                            return (
                                <a
                                    key={
                                        section.id
                                    }
                                    href={`#${section.id}`}
                                    className={`
                                        flex
                                        items-center
                                        gap-2
                                        text-sm
                                        transition-all
                                        duration-300
                                        ${
                                            isActive
                                                ? "text-[#CCD0CF]"
                                                : "text-[#9BA8AB]"
                                        }
                                        hover:text-[#CCD0CF]
                                    `}
                                >
                                    {/* Active Indicator */}
                                    <span
                                        className={`
                                            h-1.5
                                            w-1.5
                                            rounded-full
                                            bg-[#64ffdd]
                                            transition-all
                                            duration-300
                                            ${
                                                isActive
                                                    ? "scale-100 opacity-100"
                                                    : "scale-0 opacity-0"
                                            }
                                        `}
                                    />

                                    {
                                        section.label
                                    }
                                </a>
                            );
                        }
                    )}
                </div>


                {/* ================================
                    Social Links
                ================================= */}

                <div
                    className="
                        flex
                        items-center
                        gap-4
                        text-[#64FFDD]
                        sm:gap-5
                    "
                >

                    {/* Email */}
                    <a
                        href="mailto:ashwindeepak.official@gmail.com"
                        aria-label="Email"
                        className="
                            transition-colors
                            hover:text-[#CCD0CF]
                        "
                    >
                        <FaEnvelope
                            size={16}
                        />
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/Ashwin-Reddy"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="
                            transition-colors
                            hover:text-[#CCD0CF]
                        "
                    >
                        <FaGithub
                            size={16}
                        />
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/in/ashwinreddy16"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="
                            transition-colors
                            hover:text-[#CCD0CF]
                        "
                    >
                        <FaLinkedin
                            size={16}
                        />
                    </a>

                </div>


                {/* ================================
                    Mobile Navigation Menu
                ================================= */}

                {isMenuOpen && (
                    <div
                        className="
                            absolute
                            left-0
                            right-0
                            top-full
                            mt-3
                            overflow-hidden
                            rounded-2xl
                            border
                            border-[#CCD0CF]/15
                            bg-[#11212D]/90
                            p-2
                            shadow-[0_12px_40px_rgba(0,0,0,0.3)]
                            backdrop-blur-xl
                            md:hidden
                        "
                    >
                        {sections.map(
                            (section) => {
                                const isActive =
                                    activeSection ===
                                    section.id;

                                return (
                                    <a
                                        key={
                                            section.id
                                        }
                                        href={`#${section.id}`}
                                        onClick={() =>
                                            setIsMenuOpen(
                                                false
                                            )
                                        }
                                        className={`
                                            flex
                                            items-center
                                            gap-3
                                            rounded-xl
                                            px-4
                                            py-3
                                            text-sm
                                            transition-all
                                            duration-200

                                            ${
                                                isActive
                                                    ? `
                                                        bg-[#06141B]/60
                                                        text-[#CCD0CF]
                                                    `
                                                    : `
                                                        text-[#9BA8AB]
                                                        hover:bg-[#06141B]/40
                                                        hover:text-[#CCD0CF]
                                                    `
                                            }
                                        `}
                                    >

                                        {/* Active Indicator */}
                                        <span
                                            className={`
                                                h-1.5
                                                w-1.5
                                                shrink-0
                                                rounded-full
                                                bg-[#64FFDD]
                                                transition-all
                                                duration-200
                                                ${
                                                    isActive
                                                        ? "scale-100 opacity-100"
                                                        : "scale-0 opacity-0"
                                                }
                                            `}
                                        />

                                        {
                                            section.label
                                        }
                                    </a>
                                );
                            }
                        )}
                    </div>
                )}

            </div>
        </nav>
    );
};

export default Navbar;