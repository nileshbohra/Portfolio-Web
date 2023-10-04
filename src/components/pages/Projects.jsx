import React from "react";
import ProjectItem from "./components/ProjectItem";
import Slide from "@material-ui/core/Slide";
import travelAdvisorImg from "../../assets/images/ProjectImgs/travel-advisor.png";
import nerdleImg from "../../assets/images/ProjectImgs/nerdle.png";
import todoImg from "../../assets/images/ProjectImgs/todo-list-ease.netlify.png";
import noteKeeperImg from "../../assets/images/ProjectImgs/notekeeper-reactapp.png";
import drumKitImg from "../../assets/images/ProjectImgs/drumkit-web.png";
import weatherAppImg from "../../assets/images/ProjectImgs/weatherapp.png";
import diceGameImg from "../../assets/images/ProjectImgs/dicegame-js.png";
import heroVsVillianImg from "../../assets/images/ProjectImgs/hero-vs-villian.png";

export default function Projects() {
    return (
        <Slide in={true} direction="up" timeout={1000}>
            <section id="Projects">
                <h1 className="primaryTxt heading">Personal Projects</h1>
                <div className="projectsListContainer">
                    <div className="projectsList">
                        <ProjectItem
                            imageSrc={travelAdvisorImg}
                            imageAlt="Travel Advisor"
                            projectTitle="Travel Advisor"
                            projectDesc="Travel Advisor is App that helps user to pick the best restaurants, hotels and attractions wherever they are in the world."
                            projectWebsite="https://the-travel-advisor-app.netlify.app/"
                            projectCode="https://github.com/nileshbohra/TravelAdvisor"
                        />
                        <ProjectItem
                            imageSrc={nerdleImg}
                            imageAlt="nerdle"
                            projectTitle="nerdle"
                            projectDesc="wordle but with math equation"
                            projectWebsite="https://nerdle-game.netlify.app/"
                            projectCode="https://github.com/nileshbohra/nerdle-game"
                        />
                    </div>
                    <div className="projectsList">
                        <ProjectItem
                            imageSrc={todoImg}
                            imageAlt="ToDoListApp"
                            projectTitle="ToDoListApp"
                            projectDesc="FullStack ToDoListApp created with MERN stack and RestAPI"
                            projectWebsite="https://todo-list-ease.netlify.app"
                            projectCode="https://github.com/nileshbohra/To-Do-List-App"
                        />
                        <ProjectItem
                            imageSrc={noteKeeperImg}
                            imageAlt="NoteKeeperApp"
                            projectTitle="NoteKeeperApp"
                            projectDesc="FullStack NoteKeeperApp created with MERN stack"
                            projectWebsite="https://notekeeper-reactapp.netlify.app/"
                            projectCode="https://github.com/nileshbohra/NoteKeeper"
                        />
                    </div>
                    <div className="projectsList">
                        <ProjectItem
                            imageSrc={drumKitImg}
                            imageAlt="DrumKit"
                            projectTitle="DrumKit"
                            projectDesc="Play Drums on Web"
                            projectWebsite="https://drumkit-web.netlify.app/"
                            projectCode="https://github.com/nileshbohra/DrumKit-Js"
                        />
                        <ProjectItem
                            imageSrc={heroVsVillianImg}
                            imageAlt="Hero V/s Villian"
                            projectTitle="Hero-V/s-Villian"
                            projectDesc="Generates Random Names of Hero or Villian Upon Selection"
                            projectWebsite="https://hero-vs-villian.herokuapp.com/"
                            projectCode="https://github.com/nileshbohra/SuperHero-Vs-SuperVillian"
                        />
                    </div>
                    <div className="projectsList">
                        <ProjectItem
                            imageSrc={weatherAppImg}
                            imageAlt="WeatherApp"
                            projectTitle="WeatherApp"
                            projectDesc="WeatherApp shows current Weather"
                            projectWebsite="https://weatherapp-zone.netlify.app/"
                            projectCode="https://github.com/nileshbohra/WeatherApp"
                        />
                        <ProjectItem
                            imageSrc={diceGameImg}
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
                            rel="nofollow noopener noreferrer"
                        >
                            More Projects &nbsp;{">"}
                        </a>
                    </div>
                </div>
            </section>
        </Slide>
    );
}
