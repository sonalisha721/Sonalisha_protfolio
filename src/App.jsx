import { useRef } from "react";

// Importing all page components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  // useRef is used to create references to DOM elements
  // These refs will point to different sections of the page
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll smoothly to a particular section
  // ref.current points to the actual DOM node of that section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="font-sans">
      {/* Navbar component receives the scroll function and all refs */}
      <Navbar
        scrollToSection={scrollToSection}
        refs={{ homeRef, aboutRef, projectsRef, contactRef }}
      />

      {/* Each section is wrapped in a <section> tag and linked with a ref */}
      <section
        ref={homeRef}
        className="min-h-screen pt-20 flex items-center justify-center bg-pink-300 border-b border-black"
      >
        <Home />
      </section>

      <section
        ref={aboutRef}
        className="min-h-screen pt-20 flex items-center justify-center bg-pink-300 border-b border-black"
      >
        <About />
      </section>

      <section
        ref={projectsRef}
        className="min-h-screen pt-20 flex items-center justify-center bg-pink-300 border-b border-black"
      >
        <Projects />
      </section>

      <section
        ref={contactRef}
        className="min-h-screen pt-20 flex items-center justify-center bg-pink-300 border-b border-black"
      >
        <Contact />
      </section>
    </div>
  );
}

export default App;
