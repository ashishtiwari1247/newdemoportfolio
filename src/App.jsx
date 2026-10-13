import React from "react";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Skillcard from "./Components/Skillcard";
import Project from "./Pages/Project";
import Projectcard from "./Components/Projectcard";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
