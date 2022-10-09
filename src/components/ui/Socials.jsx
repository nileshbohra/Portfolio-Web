import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Slide from "@material-ui/core/Slide";

export default function Socials() {
  return (
    <>
      <Slide in={true} direction="right" timeout={3000}>
        <aside id="contactVia">
          <a
            href="https://www.linkedin.com/in/nilesh-bohra-4188a21a1/"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <LinkedInIcon style={{ fontSize: 27 }} />
          </a>
          <a
            href="https://github.com/nileshbohra"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <GitHubIcon style={{ fontSize: 26 }} />
          </a>
        </aside>
      </Slide>
    </>
  );
}
