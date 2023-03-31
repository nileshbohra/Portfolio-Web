import React from "react";

export default function WorkBox({
  title,
  company,
  companyUrl,
  fromDate,
  toDate,
  workArray,
}) {
  return (
    <div className="workBoxContainer">
      <h1>
        <span className="white">{title} </span>
        <span className="primaryTxt">
          @{" "}
          <a href={companyUrl} target="_blank" rel="noreferrer">
            {company}
          </a>
        </span>
      </h1>
      <p className="offwhite">
        {fromDate} - {toDate}
      </p>
      <ul className="workList">
        {workArray.map((work) => {
          return <li>{work}</li>;
        })}
      </ul>
    </div>
  );
}
