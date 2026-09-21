import { useEffect, useState } from "react";

const Hero = () => {
    const fullText = "Hi, Ashwin here.";

    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let index = 0;

        const typingInterval = setInterval(() => {
            setDisplayText(fullText.slice(0, index + 1));
            index++;

            if (index === fullText.length) {
                clearInterval(typingInterval);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, []);

    const beforeName = displayText.slice(0, 4);
    const name = displayText.slice(4, 10);
    const afterName = displayText.slice(10);

    return (
        <section
            id="home"
            className="min-h-[calc(100vh-80px)] px-6"
        >
            <div className="mx-auto flex min-h-[calc(110vh-80px)] max-w-7xl items-center justify-center">

                {/* Text */}
                <div className="w-full text-center">
                    <h1 className="text-5xl font-medium tracking-tight md:text-6xl lg:text-7xl">
                        <span>{beforeName}</span>

                        <span className="text-[#64ffda]">
                            {name}
                        </span>

                        <span>{afterName}</span>

                        {/* Blinking cursor */}
                        <span
                            className="
                                ml-1
                                inline-block
                                h-[0.9em]
                                w-[4px]
                                translate-y-[0.08em]
                                cursor-blink
                                bg-[#64ffda]
                            "
                        />
                    </h1>

                    <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#9BA8AB] md:text-lg">
                        Software engineer from India. I turn caffeine, curiosity, questionable ideas and terminal addiction into working software. Usually, it becomes a useful product. The rest becomes very educational bugs.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Hero;