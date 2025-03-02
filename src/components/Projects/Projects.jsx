import React, { useState, useEffect } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { ProjectCardMobile } from "./ProjectCardMobile";
import ScrollAnimation from "react-animate-on-scroll";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>
        <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
          Projects
        </ScrollAnimation>
      </h2>
      <div className={styles.projects}>
        {projects.map((project, id) =>
          isMobile ? (
            <ProjectCardMobile key={id} project={project} />
          ) : (
            <ProjectCard key={id} project={project} index={id} />
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
