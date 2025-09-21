import React from "react";
import "./Header.css"; // import styles

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Katta Sandhya</h1>
      <nav className="nav">
        <a href="projects">Projects</a>
        <a href="skills">Skills</a>
        <a href="contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
