import React from "react";
import "./App.css"; // optional, empty or small overrides
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import LetsConnect from "./components/LetsConnect/LetsConnect";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app-root">
      <Header />
      <main className="container">
        {/* order: top-to-bottom */}
        <Hero />
        <Projects />
        <About />
        <LetsConnect />
        <Footer />
      </main>
    </div>
  );
}

export default App;
