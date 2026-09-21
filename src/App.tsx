import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import DevStats from "./sections/DevStats";
import Footer from "./components/Footer";
import SplashCursor from "./components/SplashCursor";

function App() {
  return (
    <main>

      <SplashCursor
        DYE_RESOLUTION={1024}
        SPLAT_RADIUS={0.16}
        COLOR_UPDATE_SPEED={8}
        RAINBOW_MODE={false}
        COLOR="#64FFDD"
      />

      <Navbar />

      <Hero />

      <About />

      <Projects />

      <DevStats />

      <Footer />

    </main>
  );
}

export default App;
