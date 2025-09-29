import React from "react";
import styles from "./MoreAboutMe.module.css";
import LetsConnect from "../LetsConnect/LetsConnect";

const MoreAboutMe = ({ setShowMore }) => {
  return (
    <div className={styles.moreAbout} >
      {/* Resume + Social */}
      <div className={styles.actions}>
         <div className={styles.headerBlock}>
            <button onClick={() => setShowMore(false)}>BACK</button>
                <h2 className={styles.title}>ABOUT ME</h2>
                <div className={styles.textBlock}>
                  <h3>
                    I am a front-end developer based in Sydney.<br />
                    Has Mechanical Engineering background.
                  </h3>
                  <p>
                    I am a front-end developer based in Sydney looking for exciting
                    opportunities. Has Mechanical Engineering background. Likes to
                    focus on accessibility when developing. Passionate and curious
                    about solving problems. Currently, I’m exploring Reactjs, Webflow
                    and a bit of Designing. While I am not programming, I enjoy playing
                    football, photography and playing Valorant. Learning more to improve skill.
                  </p>
                  <div className={styles.buttoncontainer}>
                     <button className={styles.resumeBtn}>DOWNLOAD RESUME</button>
        <div className={styles.socials}>
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="GitHub">gh</a>
        </div>
                  </div>
                 
                </div>
                
              </div>
        
      </div>

      {/* Capabilities */}
      <section className={styles.capabilities}>
        <h2>MY CAPABILITIES</h2>
        <div>
             <p>
          I am always looking to add more skills. Morbi egestas neque eu blandit
          fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus
          faucibus tristique ut et dolor.
        </p>
        <div className={styles.skillTags}>
          <span>HTML</span>
          <span>CSS</span>
          <span>JAVASCRIPT</span>
          <span>JQUERY</span>
          <span>ACCESSIBILITY</span>
          <span>FIGMA</span>
          <span>TAILWIND CSS</span>
        </div>
        </div>
       
      </section>

      {/* Experience */}
      <section className={styles.experience}>
        <h2>MY EXPERIENCE</h2>
        <div>
              <div className={styles.expItem}>
                <div>
                    <h3>Freelance Developer</h3>
          <span className={styles.date}>Nov 2023 – Present</span>
                </div>
          
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className={styles.expItem}>
            <div>
                 <h3>Front-End Intern <span className={styles.company}>Roos Tech</span></h3>
          <span className={styles.date}>Sep 2023 – Nov 2023</span>
            </div>
         
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        </div>
      
      </section>

      {/* Connect Form */}
      <LetsConnect />
    </div>
  );
};

export default MoreAboutMe;
