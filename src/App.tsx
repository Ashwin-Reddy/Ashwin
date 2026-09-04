import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";

function App() {
  return (
    <main id="home">
      <Navbar />

      <Hero />

      <About />

      <Projects />

    </main>
  );
}

export default App;