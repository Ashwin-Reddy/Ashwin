import Navbar from "./components/Navbar";
import Starfield from "./components/Starfield";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";

function App() {
  return (
    <main className="relative">
      <Starfield />

      <Navbar />

      <Hero />

      <About />

      <Projects />

    </main>
  );
}

export default App;