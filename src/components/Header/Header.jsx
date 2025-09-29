import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>SANDHYA KATTA</div>
        <div className={styles.nav}>
          <a href="#work" className={styles.link}>Work</a>
          <a href="#about" className={styles.link}>About</a>
          <a href="#contact" className={styles.link}>Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
