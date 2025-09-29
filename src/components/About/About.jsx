import React, { useState } from "react";
import styles from "./About.module.css";

const experiences = [
  {
    id: 1,
    role: "Front-End Developer (Full-Time) at Adaptive",
    date: "Jan 2025 – Present",
    description:
      "Building responsive, accessible, and user-focused web apps. Collaborating with cross-functional teams to ship features.",
  },
  {
    id: 2,
    role: "Freelance Front-End Developer",
    date: "Dec 2023 – Mar 2024",
    description:
      "Delivered responsive UI components and improved UX across client projects.",
  },
];

const About = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.aboutSection} id="about">
      {!expanded ? (
        <div className={styles.headerBlock}>
          <div className={styles.titleBlock}>
            <div className={styles.title}>ABOUT ME</div>
          </div>

          <div className={styles.textBlock}>
            <div className={styles.subTitle}>
              I am a Front-End Developer. Background in Computer Science.
            </div>

            <div className={styles.paragraph}>
              I am a Front-End Developer with <strong>1 year of professional experience</strong> and over <strong>2 years of hands-on practice</strong> building modern, user-friendly applications. I focus on building accessible, responsive, performance-driven interfaces and I enjoy learning and shipping reliable UI.
            </div>

            <div className={styles.actionsRow}>
              <button className={styles.moreBtn} onClick={() => setExpanded(true)}>
                MORE ABOUT ME
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.moreAbout}>
          <div className={styles.backRow}>
            <button className={styles.moreBtn} onClick={() => setExpanded(false)}>
              BACK
            </button>
          </div>

          <div className={styles.grid}>
            <div className={styles.title}>ABOUT ME</div>
            <div className={styles.subTitle}>
              I am a Front-End Developer. Background in Computer Science.
            </div>
            <div className={styles.paragraph}>
              I am a Front-End Developer with <strong>1 year of professional experience</strong> and over <strong>2 years of hands-on practice</strong> building modern, user-friendly applications. I focus on building accessible, responsive, performance-driven interfaces and I enjoy learning and shipping reliable UI.
            </div>

            <div className={styles.section}>
              <div className={styles.sectionTitle}>MY CAPABILITIES</div>
              <div className={styles.paragraph}>
                I enjoy building modern, accessible applications. Technologies: HTML, CSS, JavaScript, React.js, TypeScript, Next.js, Node.js, Express, Tailwind, Sass, Figma, Git.
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionTitle}>MY EXPERIENCE</div>
              <div>
                {experiences.map((e) => (
                  <div className={styles.expItem} key={e.id}>
                    <div className={styles.expHeader}>
                      <div className={styles.expRole}>{e.role}</div>
                      <div className={styles.expDate}>{e.date}</div>
                    </div>
                    <div className={styles.paragraph}>{e.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
