import React from "react";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import history from "../../data/history.json";
import styles from "./Experience.module.css";
import ScrollAnimation from "react-animate-on-scroll";

const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>
        <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
          Skills & Experience
        </ScrollAnimation>
      </h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <ScrollAnimation animateIn="flipInY">
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                </ScrollAnimation>
                <p className={styles.skillTitle}>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((history, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(history.imageSrc)}
                  alt={`${history.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${history.role}, ${history.organisation}`}</h3>
                  <p>{`${history.startDate}- ${history.endDate}`}</p>
                  <ul className="history-roles">
                    {history.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
