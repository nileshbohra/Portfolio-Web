import React from "react";
import Slide from "@material-ui/core/Slide";
import WorkBox from "./components/WorkBox";

export default function Experience() {
  let workArray = [];
  workArray.push(`Worked on reconciliation software, added major features and solved
various bugs which massively increased the performance and UX of
our data analyst team.`);
  workArray.push(`Worked on Infrastructure management system application to
maintain company's core recon applications deployed across
freebsd droplets on digitalocean.`);
  workArray.push(`Added Features like Monitoring DISK Capacity, RAM Consumption,
Bandwidth Consumption etc by individual applications.`);
  workArray.push(`Used Selenium to scrape data from Various merchant websites and
store them in SFTP servers.`);
  workArray.push(`Tech Stack: AngularJs, NodeJs, Express, MySql, Sequelize,
WebStorm, freebsd.`);

let workArray2 = [];
  return (
    <Slide in={true} direction="up" timeout={1000}>
      <section id="Experience">
        <h1 className="primaryTxt heading">Experience</h1>
        <WorkBox
          title="SDE - II"
          company="Cointab"
          companyUrl="https://www.cointab.in/"
          fromDate="May 2023"
          toDate="present"
          workArray={workArray2}
        />
        <WorkBox
          title="SDE - I"
          company="Cointab"
          companyUrl="https://www.cointab.in/"
          fromDate="June 2022"
          toDate="May 2023"
          workArray={workArray}
        />
      </section>
    </Slide>
  );
}
