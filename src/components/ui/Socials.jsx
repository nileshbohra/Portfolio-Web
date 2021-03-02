import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import Slide from "@material-ui/core/Slide";

export default function Socials() {
  return (
    <>
      <aside id="contactVia">
        <Slide in={true} direction="right" timeout={3000}>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/nilesh-bohra-4188a21a1/"
                target="_blank"
              >
                {/* <i className="fab fa-linkedin"></i> */}
                <LinkedInIcon style={{ fontSize: 26 }} />
              </a>
            </li>
            <li>
              <a href="https://github.com/nileshbohra" target="_blank">
                {/* <i className="fab fa-github"></i> */}
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/_.nilesh.bohra._/"
                target="_blank"
              >
                {/* <i className="fab fa-instagram"></i> */}
                <InstagramIcon style={{ fontSize: 26 }} />
              </a>
            </li>
          </ul>
        </Slide>
      </aside>
    </>
  );
}
