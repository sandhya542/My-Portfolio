import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>
      <div className="projects">

        <div className="project">
          <h3>FUTR Payments</h3>
          <p>
            A modern consumer-facing platform for digital payments and loan
            management. Built with <strong>React, Vite, TypeScript, Redux,
            TanStack Table, Framer Motion, SCSS</strong> and integrated with
            multiple APIs.
          </p>
          <p className="tech-stack">
            <strong>Stack:</strong> React, Vite, Redux, TypeScript, SCSS, Storybook
          </p>
        </div>

        <div className="project">
          <h3>Ask Setu</h3>
          <p>
            A Q&A platform to explore job opportunities and resources. Developed
            with <strong>Next.js, TailwindCSS, Sass</strong> ensuring a smooth and
            responsive user experience.
          </p>
          <p className="tech-stack">
            <strong>Stack:</strong> Next.js, React, TailwindCSS, Sass
          </p>
        </div>

        <div className="project">
          <h3>Ecowizi</h3>
          <p>
            A knowledge platform leveraging AI (OpenAI) for content insights and
            sustainability education. Built using <strong>Next.js, TypeScript,
            Axios, OpenAI API, Sass</strong>.
          </p>
          <p className="tech-stack">
            <strong>Stack:</strong> Next.js, React, OpenAI API, Axios, Sass
          </p>
        </div>

      </div>
    </section>
  );
}

export default Projects;
