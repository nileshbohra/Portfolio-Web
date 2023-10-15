import React from "react";

export default function WorkBox({
  title,
  company,
  companyUrl,
  fromDate,
  toDate,
  workArray,
  current,
}) {
  let styleForCurrent = {
    border: "2px solid var(--primary-txt)",
  };
  return (
    <fieldset className="workBox" style={current ? styleForCurrent : {}}>
      <legend className="primaryTxt" style={{fontWeight: "bolder"}}>{current ? "current" : "previous"}</legend>
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
        {workArray.map((work, idx) => {
          return <li key={idx}>{work}</li>;
        })}
      </ul>
    </fieldset>
  );
}
