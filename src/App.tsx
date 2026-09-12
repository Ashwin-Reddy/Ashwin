import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import DevStats from "./sections/DevStats";
import Footer from "./components/Footer";

function App() {
  return (
    <main>

      <Navbar />

      <Hero />

      <About />

      <DevStats />

      <Projects />

      <Footer />

    </main>
  );
}

export default App;