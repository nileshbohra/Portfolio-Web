import React from "react";
import ProjectItem from "./components/ProjectItem";
import Slide from "@material-ui/core/Slide";

export default function Projects() {
  return (
    <Slide in={true} direction="up" timeout={1000}>
      <section id="Projects">
        <h1 className="primaryTxt heading">Projects</h1>
        <div className="projectsList">
          <ProjectItem
            imageSrc="./images/ProjectImgs/personalPortfolio.png"
            imageAlt="Personal Portfolio"
            projectTitle="Personal Portfolio"
            projectDesc="Portfolio Website made with ReactJs, MaterialUI"
            projectWebsite="https://nileshbohra.netlify.app/"
            projectCode="https://github.com/nileshbohra/Portfolio-Web"
          />
          <ProjectItem
            imageSrc="./images/ProjectImgs/weatherapp.png"
            imageAlt="WeatherApp"
            projectTitle="WeatherApp"
            projectDesc="WeatherApp shows current Weather"
            projectWebsite="https://weatherapp-zone.netlify.app/"
            projectCode="https://github.com/nileshbohra/WeatherApp"
          />
        </div>
        <div className="projectsList">
          <ProjectItem
            imageSrc="./images/ProjectImgs/todo-list-ease.netlify.png"
            imageAlt="ToDoListApp"
            projectTitle="ToDoListApp"
            projectDesc="FullStack ToDoListApp created with MERN stack and RestAPI"
            projectWebsite="https://todo-list-ease.netlify.app"
            projectCode="https://github.com/nileshbohra/To-Do-List-App"
          />
          <ProjectItem
            imageSrc="./images/ProjectImgs/notekeeper-reactapp.png"
            imageAlt="NoteKeeperApp"
            projectTitle="NoteKeeperApp"
            projectDesc="FullStack NoteKeeperApp created with MERN stack"
            projectWebsite="https://notekeeper-reactapp.netlify.app/"
            projectCode="https://github.com/nileshbohra/NoteKeeper"
          />
        </div>
        <div className="projectsList">
          <ProjectItem
            imageSrc="./images/ProjectImgs/drumkit-web.png"
            imageAlt="DrumKit"
            projectTitle="DrumKit"
            projectDesc="Play Drums on Web"
            projectWebsite="https://drumkit-web.netlify.app/"
            projectCode="https://github.com/nileshbohra/DrumKit-Js"
          />
          <ProjectItem
            imageSrc="./images/ProjectImgs/hero-vs-villian.png"
            imageAlt="Hero V/s Villian"
            projectTitle="Hero-V/s-Villian"
            projectDesc="Generates Random Names of Hero or Villian Upon Selection"
            projectWebsite="https://hero-vs-villian.herokuapp.com/"
            projectCode="https://github.com/nileshbohra/SuperHero-Vs-SuperVillian"
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
    </Slide>
  );
}
