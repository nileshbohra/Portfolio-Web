import React from "react";
import Slide from "@material-ui/core/Slide";
import WorkBox from "./components/WorkBox";

export default function Experience() {
  let workArray = [];
  workArray.push(`Worked on reconciliation software, added major features and solved
various bugs which massively increased the performance and UX of
our data analyst team.`);
  workArray.push(`Built a infrastructure management system application to
maintain company's core projects deployed across
freebsd droplets on digitalocean. Which reduced maintenance overhead.`);
  workArray.push(`Integrated new features in infra management app like Disk Monitoring, Memory Consumption,
Bandwidth Consumption etc by individual applications for easy monitoring and maintenance.`);
  workArray.push(`Built Selenium Scrapers to scrape data from various merchant websites and
store them in SFTP servers, Which reduced manual work of data analyst team.`);
  workArray.push(`Tech Stack: AngularJs, NodeJs, Express, MySql, Sequelize,
WebStorm, freebsd, unix, linux.`);

  let workArray2 = [];
  workArray2.push(`Maintained Hosted client servers on DigitalOcean and
also developed automation for infra management via
CSM (Cointab Systems Management).`);
  workArray2.push(`Developed a file transfer system between nodejs and
java using socket programming which reduced infra
cost by 20%.`);
  workArray2.push(`Mentored and guided junior developers, contributing
to their professional development within the
organization.`);
  workArray2.push(`Automated Manual Data Reterival by integrating
HDFC Bank And Atom PG Api's into the system.`);

  return (
    <Slide in={true} direction="up" timeout={1000}>
      <section id="Experience">
        <h1 className="primaryTxt heading">Experience</h1>
        <div className="workBoxContainer">
          <WorkBox
            title="SDE - II"
            company="Cointab"
            companyUrl="https://www.cointab.in/"
            fromDate="May 2023"
            toDate="present"
            workArray={workArray2}
            current={true}
          />
          <WorkBox
            title="SDE - I"
            company="Cointab"
            companyUrl="https://www.cointab.in/"
            fromDate="June 2022"
            toDate="May 2023"
            workArray={workArray}
          />
        </div>
      </section>
    </Slide>
  );
}
