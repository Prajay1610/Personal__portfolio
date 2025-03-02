import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import ScrollAnimation from "react-animate-on-scroll";

export const ProjectCard = ({ project, index }) => {
  const { title, imageSrc, description, skills, source } = project;
  const [showMore, setShowMore] = useState(false);

  // Alternate left-right layout for zig-zag effect
  const isEven = index % 2 === 0;

  return (
    <ScrollAnimation animateIn="fadeInUp">
      <div className={`${styles.container} ${isEven ? styles.left : styles.right}`}>
        {/* Image Section */}
        <div className={styles.imageContainer}>
          <img
            src={getImageUrl(imageSrc)}
            alt={`Image of ${title}`}
            className={styles.image}
          />
        </div>

        {/* Text & Details Section */}
        <div className={styles.details}>
          <h3 className={styles.title}>{title}</h3>

          <p className={styles.description}>
            {description.length > 150 && !showMore
              ? `${description.substring(0, 150)}...`
              : description}
          </p>

          {description.length > 150 && (
            <button className={styles.read_more} onClick={() => setShowMore(!showMore)}>
              {showMore ? "Read Less" : "Read More"}
            </button>
          )}

          {/* Tech Stack */}
          <ul className={styles.skills}>
            {skills.map((skill, id) => (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            ))}
          </ul>

          {/* Links */}
          <div className={styles.links}>
            <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
              Source Code
            </a>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};
