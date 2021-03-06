import React from "react";
import Slide from "@material-ui/core/Slide";

export default function Home() {
  return (
    <Slide in={true} direction="up" timeout={1000}>
      <section id="Home">
        <div id="introduction">
          <p className="secondaryTxt">Hi there,</p>
          <h1 className="primaryTxt myName">
            <span className="nameTxt">I'm</span> Nilesh Bohra
          </h1>
          <h3 className="primaryTxt title">A FullStack Developer</h3>
          <p className="secondaryTxt">
            I am always ready to learn new skills and technologies.As a full
            stack developer my skills focuses on front-end as well as back-end
            development. I have already made few web based projects present on
            my{" "}
            <a href="https://github.com/nileshbohra" target="_blank">
              GitHub
            </a>
            .I currently have knowledge of developing web projects using MERN ie
            Mongodb,Express,React and Node with HTML5, CSS3/SCSS, JavaScript, Ejs,
            jQuery, Bootstrap.
          </p>
          <a href="./resume.pdf" target="_blank" className="btn btnResume">Resume</a>
        </div>
        <div className="heroImage">
          <img src="./images/heroImage.jpg" alt="heroImage" />
        </div>
      </section>
    </Slide>
  );
}
