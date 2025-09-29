import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} SANDHYA KATTA
        </div>
        <div className={styles.links}>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
