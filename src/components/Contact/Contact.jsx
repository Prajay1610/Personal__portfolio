import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";
import ScrollAnimation from "react-animate-on-scroll";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
          <h2>Thanks For Visiting My Personal Portfolio Website💖</h2>
          <p>Feel free to reach out!</p>
        </ScrollAnimation>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
            <a href={"mailto:prajaypc16@gmail.com"}>prajaypc16@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="Linkedin Icon"
            />
            <a href={"https://www.linkedin.com/in/prajay-chavan-7b639921a"}>
              linkedin.com/Prajay
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="github Icon"
            />
            <a href={"https://github.com/Prajay1610"}>github/Prajay1610</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Contact;
