import React from "react";
import LinkIcon from "@material-ui/icons/Link";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function ProjectItem(props) {
  return (
    <div className="projectItem">
      <div className="projectImage">
        <img
          className="projectImgs"
          src={props.imageSrc}
          alt={props.imageAlt}
        />
      </div>
      <div className="projectInfo">
        <div className="descCol">
          <div className="projectTitle">
            <h1 className="primaryTxt">{props.projectTitle}</h1>
          </div>
          <div className="projectDesc">
            <p className="secondaryTxt">{props.projectDesc}</p>
          </div>
        </div>
        <div className="projectLinks">
          <a href={props.projectWebsite} target="_blank">
            <Tooltip title="Website" TransitionComponent={Zoom} arrow>
              <LinkIcon />
            </Tooltip>
          </a>
          <a href={props.projectCode} target="_blank">
            <Tooltip title="Code" TransitionComponent={Zoom} arrow>
              <GitHubIcon />
            </Tooltip>
          </a>
        </div>
      </div>
    </div>
  );
}
