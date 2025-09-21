import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h2>
          Hi, I’m <span className="highlight">Sandhya</span> 👋
        </h2>
        <h3>Frontend Developer | UI/UX Enthusiast</h3>
        <p>
          I specialize in building modern, responsive, and user-friendly web
          applications. Skilled in <strong>React.js, JavaScript, API
          integration, and UI/UX design</strong>, I create seamless digital
          experiences.
        </p>
        <p>
          I’m continuously <strong>learning and upgrading my skills</strong> to
          stay up to date with the latest technologies — currently expanding my
          knowledge in <strong>Backend development</strong> as well.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View My Work</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </div>

      <div className="hero-image">
        {/* Replace with your profile image */}
        <img src="https://via.placeholder.com/250" alt="Sandhya Profile" />
      </div>
    </section>
  );
}

export default Hero;
