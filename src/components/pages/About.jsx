import React from "react";

export default function About() {
  return (
    <section id="About">
      <h1 className="primaryTxt heading">About Me</h1>
      <div className="content">
        <div className="aboutPageImage">
          <img src="./images/AboutPageImage.jpg" alt="aboutMe" />
        </div>
        <div className="aboutDesc">
          <h1 className="primaryTxt myName">
            <span class="nameTxt">I'm</span> Nilesh Bohra
          </h1>
          <h3 className="primaryTxt title"> A FullStack Developer</h3>
          <p className="secondaryTxt">
            I am always ready to learn new skills and technologies.As a full
            stack developer my skills focuses on front-end as well as back-end
            development. I have already made few web based projects present on
            my{" "}
            <a href="https://github.com/nileshbohra" target="_blank">
              GitHub
            </a>
            .I currently have knowledge of developing web projects using MERN ie
            Mongodb,Express,React and Node with HTML5, CSS3, JavaScript,
            jQuery, Bootstrap.
          </p>
        </div>
      </div>
      <div id="Skills">
        <h1 className="primaryTxt heading">Skills</h1>
        <div className="content">
          <img
            className="mern"
            src="./images/mern-stack.jpg"
            alt="mern stack"
          />
          <a
            href="https://www.linkedin.com/in/nilesh-bohra-4188a21a1/detail/skills/"
            target="_blank"
            className="btn"
          >
            Skills &nbsp;&nbsp; {">"}
          </a>
        </div>
      </div>
    </section>
  );
}
