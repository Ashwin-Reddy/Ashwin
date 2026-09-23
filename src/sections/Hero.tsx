import { useEffect, useState } from "react";
import heroBackground from "../assets/images/hero-background.webp";

const Hero = () => {
    const fullText = "Hi, Ashwin here.";

    const [displayText, setDisplayText] =
        useState("");

    useEffect(() => {
        let index = 0;

        const typingInterval = setInterval(() => {
            setDisplayText(
                fullText.slice(0, index + 1)
            );

            index++;

            if (index === fullText.length) {
                clearInterval(typingInterval);
            }
        }, 100);

        return () =>
            clearInterval(typingInterval);
    }, []);

    const beforeName =
        displayText.slice(0, 4);

    const name =
        displayText.slice(4, 10);

    const afterName =
        displayText.slice(10);

    return (
        <section
            id="home"
            className="
                relative
                min-h-[100svh]
                overflow-hidden
                px-4
                sm:px-6
                md:min-h-[calc(100vh-80px)]
            "
        >

            {/* ========================================
                Hero Background
            ========================================= */}

            <div
                className="
                    absolute
                    inset-0
                    z-0
                    bg-no-repeat

                    bg-[length:auto_42%]
                    bg-[position:center_bottom]

                    sm:bg-[length:auto_48%]

                    md:bg-cover
                    md:bg-center
                "
                style={{
                    backgroundImage: `url(${heroBackground})`,
                }}
            />


            {/* ========================================
                Readability Overlay
            ========================================= */}

            <div
                className="
                    absolute
                    inset-0
                    z-[1]
                    bg-gradient-to-b
                    from-[#06141B]/40
                    via-[#06141B]/55
                    to-[#06141B]

                    md:from-[#06141B]/25
                    md:via-[#06141B]/45
                    md:to-[#06141B]
                "
            />


            {/* ========================================
                Hero Content
            ========================================= */}

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    flex
                    min-h-[100svh]
                    max-w-7xl
                    items-center
                    justify-center

                    md:min-h-[calc(100vh-80px)]
                "
            >

                {/* Text */}
                <div
                    className="
                        w-full
                        text-center
                    "
                >

                    {/* Heading */}
                    <h1
                        className="
                            whitespace-nowrap
                            text-4xl
                            font-medium
                            tracking-tight

                            sm:text-5xl
                            md:text-6xl
                            lg:text-7xl
                        "
                    >
                        <span>
                            {beforeName}
                        </span>

                        <span className="text-[#64ffda]">
                            {name}
                        </span>

                        <span>
                            {afterName}
                        </span>

                        {/* Blinking Cursor */}
                        <span
                            className="
                                ml-1
                                inline-block
                                h-[0.9em]
                                w-[3px]
                                translate-y-[0.08em]
                                cursor-blink
                                bg-[#64ffda]
                            "
                        />
                    </h1>


                    {/* Description */}
                    <p
                        className="
                            mx-auto
                            mt-5
                            max-w-[330px]
                            text-sm
                            leading-7
                            text-[#9BA8AB]

                            sm:mt-6
                            sm:max-w-xl
                            sm:text-base

                            md:mt-8
                            md:max-w-2xl
                            md:text-lg
                            md:leading-8
                        "
                    >
                        Software engineer from India.
                        I turn caffeine, curiosity,
                        questionable ideas and terminal
                        addiction into working software.
                        Usually, it becomes a useful product.
                        The rest becomes very educational
                        bugs.
                    </p>

                </div>

            </div>


            {/* ========================================
                Bottom Fade
            ========================================= */}

            <div
                className="
                    absolute
                    inset-x-0
                    bottom-0
                    z-[2]
                    h-24
                    bg-gradient-to-t
                    from-[#06141B]
                    to-transparent

                    md:h-32
                "
            />

        </section>
    );
};

export default Hero;