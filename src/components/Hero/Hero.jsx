import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Hi! I'm</h2>
        <h1 className={styles.name}> Prajay Chavan</h1>
        <p className={styles.description}>
          I am into{""}{" "}
          <Typed
            strings={[
              "Full Stack Development.",
              "MERN Stack Development.",
              "Problem Solving.",
              "Backend Development.",
              "Cloud Computing.",
              "Computer Networking.",
            ]}
            typeSpeed={180}
            backSpeed={50}
            loop
          />
        </p>
        <div className={styles.btn_container}>
          <a className={styles.contactBtn} href="mailto:prajaypc16@gmail.com">
            Contact Me
          </a>
          <a
            className={styles.resumeBtn}
            href="https://drive.google.com/file/d/1shNdrxIPCp8mIUJfZQa4wOyGBjLEcoGY/view?usp=sharing"
          >
            Resume
          </a>
        </div>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/profilepic.jpg")}
        alt="Hero-Image"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
