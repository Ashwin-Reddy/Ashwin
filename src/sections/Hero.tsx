import heroImage from "../assets/images/hero.jpg"

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-[calc(100vh-80px)] px-6"
        >
            <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center">

                {/* Text */}
                <div className="w-1/2">
                    <h1 className="text-5xl font-medium tracking-tight md:text-6xl lg:text-7xl">
                        Hi, Ashwin here.
                    </h1>

                    <p className="mt-8 max-w-xl text-base leading-8 opacity-70 md:text-lg">
                        Software engineer from India. I turn caffeine, curiosity, questionable ideas and terminal addiction into working software. Usually, it becomes a useful product. The rest becomes very educational bugs.
                    </p>
                </div>

                {/* Image */}
                <div className="flex w-1/2 justify-center">
                    <img
                        src={heroImage}
                        alt="Ashwin"
                        className="h-auto max-w-md object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;