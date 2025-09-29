import React from "react";
import styles from "./Projects.module.css";
// replace these with your project images
import project1 from "../../assets/project/img1.svg";

const projects = [
  {
    id: 1,
    title: "FUTR Payments",
    description:
      "Modern payments platform — React, TypeScript, Vite, scalable UI patterns and API integrations.",
    image: project1,
    demo: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Ask Setu",
    description:
      "A Q&A platform built for fast, responsive experiences and accessible UI.",
    image: project1,
    demo: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <div className={styles.projectsSection} id="work">
      <div className={styles.titleRow}>
        <div className={styles.sectionTitle}>FEATURED PROJECTS</div>
        <div className={styles.sectionSubtitle}>
          Here are selected projects showcasing my front-end work.
        </div>
      </div>

      <div className={styles.projectsContainer}>
        {projects.map((p) => (
          <div className={styles.projectCard} key={p.id}>
            <div className={styles.projectImage}>
              <img src={p.image} alt={p.title} />
            </div>

            <div className={styles.projectDetails}>
              <div className={styles.projectTitle}>{p.title}</div>
              <div className={styles.projectDescription}>{p.description}</div>
              <div className={styles.projectLinks}>
                <a href={p.demo}>LIVE DEMO ↗</a>
                <a href={p.github}>SEE ON GITHUB ⌘</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
