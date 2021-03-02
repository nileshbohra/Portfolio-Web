import React from "react";
import ProjectItem from "./components/ProjectItem";

export default function Projects() {
  return (
    <section id="Projects">
      <h1 className="primaryTxt heading">Projects</h1>
      <div className="projectsList">
        <ProjectItem
          imageSrc="./images/ProjectImgs/personalPortfolio.png"
          imageAlt="Personal Portfolio"
          projectTitle="Personal Portfolio"
          projectDesc="Personal Portfolio Website made with ReactJs, MaterialUI"
          projectWebsite="https://dicegame-js.netlify.app/"
          projectCode="https://github.com/nileshbohra/DiceGame"
        />
      </div>
      <div className="projectsList">
        <ProjectItem
          imageSrc="./images/ProjectImgs/dicegame-js.png"
          imageAlt="DiceGame"
          projectTitle="DiceGame"
          projectDesc="Web Based Luck Game of Rolling Dice"
          projectWebsite="https://dicegame-js.netlify.app/"
          projectCode="https://github.com/nileshbohra/DiceGame"
        />
        <ProjectItem
          imageSrc="./images/ProjectImgs/drumkit-web.png"
          imageAlt="DrumKit"
          projectTitle="DrumKit"
          projectDesc="Play Drums on Web"
          projectWebsite="https://drumkit-web.netlify.app/"
          projectCode="https://github.com/nileshbohra/DrumKit-Js"
        />
      </div>
      <div className="projectsList">
        <ProjectItem
          imageSrc="./images/ProjectImgs/hero-vs-villian.png"
          imageAlt="Hero V/s Villian"
          projectTitle="Hero-V/s-Villian"
          projectDesc="Generates Random Names of Hero or Villian Upon Selection"
          projectWebsite="https://hero-vs-villian.herokuapp.com/"
          projectCode="https://github.com/nileshbohra/SuperHero-Vs-SuperVillian"
        />
        <ProjectItem
          imageSrc="./images/ProjectImgs/simple-calculator.png"
          imageAlt="Calculator"
          projectTitle="Calculator"
          projectDesc="Simple Web Based Calculator"
          projectWebsite="https://simple-calculator-web.netlify.app/"
          projectCode="https://github.com/nileshbohra/Calculator-in-js"
        />
      </div>
      <div className="moreProjects">
        <a
          href="https://github.com/nileshbohra?tab=repositories"
          target="_blank"
          className="btn"
        >
          More Projects &nbsp;{">"}
        </a>
      </div>
    </section>
  );
}
