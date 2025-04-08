import React, { Component } from "react";
import { getImageUrl } from "../../utils";
import styles from "../About/About.module.css";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>
        <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
          About
        </ScrollAnimation>
      </h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("about/aboutImage.png")}
          alt="Image-laptop"
        />
        <ul className={styles.aboutItems}>
         
          <ScrollAnimation animateIn="flipInY">
            <li className={styles.aboutItem}>
              <img
                src={getImageUrl("about/serverIcon.png")}
                alt="Server-Icon"
              />
              <div>
                <h3 className={styles.abt_title}>Java Full Stack Developer</h3>
                <p>
                I'm a Java Full-Stack Developer with expertise in Spring Boot, Spring Security, Spring Data JPA, Servlets, and more.
                </p>
              </div>
            </li>
          </ScrollAnimation>

          <ScrollAnimation animateIn="flipInY">
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/uiIcon.png")} alt="Mern-Icon" />
              <div>
                <h3 className={styles.abt_title}>MERN Stack Developer</h3>
                <p>
                  I'm a MERN stack developer proficient in building web
                  applications using MongoDB, Express.js, React, and Node.js,
                  with a passion for creating dynamic and interactive user
                  experiences.
                </p>
              </div>
            </li>
          </ScrollAnimation>

          <ScrollAnimation animateIn="flipInY">
            <li className={styles.aboutItem}>
              <img
                src={getImageUrl("about/cursorIcon.png")}
                alt="Cursor-Icon"
              />
              <div>
                <h3 className={styles.abt_title}>Frontend Developer</h3>
                <p>
                  I'm a frontend developer with experience in building
                  responsive and optimized sites
                </p>
              </div>
            </li>
          </ScrollAnimation>
        </ul>
      </div>
    </section>
  );
};

export default About;
