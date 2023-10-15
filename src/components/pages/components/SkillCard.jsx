import React from "react";

export default function SkillCard(props) {
  return (
    // <div
    //   id="SkillCard"
    //   style={{ backgroundImage: `url(${props.imageUrl})` }}
    // ></div>
    <div id="SkillCard">
      <img src={props.imageUrl} alt={props.imageAlt} loading="lazy" />
    </div>
  );
}
