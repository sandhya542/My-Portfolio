import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section className="section" id="skills">
      <h2>Skills</h2>

      <div className="skills">

        <div className="skill-category">
          <h3>Frontend</h3>
          <ul>
            <li>React.js</li>
            <li>Next.js</li>
            <li>React Native</li>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>HTML5</li>
            <li>CSS3 (Cascading Style Sheets)</li>
            <li>Bootstrap</li>
            <li>UI/UX Design</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>REST APIs</li>
            <li>SQL</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Programming & Foundations</h3>
          <ul>
            <li>Python</li>
            <li>Programming Foundations with Python</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Other</h3>
          <ul>
            <li>API Integration</li>
            <li>Version Control (Git)</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;
