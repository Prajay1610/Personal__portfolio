import React from "react";

import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import ScrollAnimation from "react-animate-on-scroll";
const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>
        {" "}
        <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
          Projects
        </ScrollAnimation>
      </h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
