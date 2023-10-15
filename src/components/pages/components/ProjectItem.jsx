import React from "react";
import LinkIcon from "@material-ui/icons/Link";
import CodeIcon from "@material-ui/icons/Code";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

export default function ProjectItem(props) {
    return (
        <div className="projectItem">
            <div className="projectImage">
                <img
                    className="projectImgs"
                    loading="lazy"
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
                    <a
                        href={props.projectWebsite}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                    >
                        <Tooltip title="Website" TransitionComponent={Zoom} arrow>
                            <LinkIcon/>
                        </Tooltip>
                    </a>
                    <a
                        href={props.projectCode}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                    >
                        <Tooltip title="Code" TransitionComponent={Zoom} arrow>
                            <CodeIcon/>
                        </Tooltip>
                    </a>
                </div>
            </div>
        </div>
    );
}
