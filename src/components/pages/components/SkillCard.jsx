import React from "react";

export default function SkillCard(props) {
  return (
    <div
      id="SkillCard"
      style={{ backgroundImage: `url(${props.imageUrl})` }}
    ></div>
  );
}
