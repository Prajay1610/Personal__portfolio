import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import ScrollAnimation from "react-animate-on-scroll";

export const ProjectCardMobile = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <ScrollAnimation animateIn="flipInY">
      <div className={styles.container}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <h3 className={styles.title}>{title}</h3>

        <p className={styles.description}>
          {description.length > 150 && !showMore
            ? `${description.substring(0, 150)}...`
            : description}
        </p>

        {description.length > 150 && (
          <button className={styles.readMore} onClick={() => setShowMore(!showMore)}>
            {showMore ? "Read Less" : "Read More"}
          </button>
        )}

        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>

        <div className={styles.links}>
          <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
        </div>
      </div>
    </ScrollAnimation>
  );
};
