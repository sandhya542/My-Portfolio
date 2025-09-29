import React from "react";
import styles from "./Hero.module.css";
// replace with your actual image path
import profilePic from "../../assets/images/profilePic.svg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.left}>
        <div className={styles.greeting}>
          <div>HI, I AM</div>
          <div className={styles.name}>SANDHYA KATTA.</div>
        </div>

        <div className={styles.description}>
          <div>
            I’m a front-end developer passionate about crafting clean UI/UX,
            integrating APIs, and building logical, scalable web applications.
          </div>
        </div>

        <div className={styles.buttons}>
          <a href="#contact" className={styles.contactBtn + " cta"}>CONTACT ME</a>

          <div className={styles.iconRow}>
            <a className={styles.iconBtn} href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a className={styles.iconBtn} href="#" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <img src={profilePic} alt="profile" />
      </div>
    </div>
  );
};

export default Hero;
