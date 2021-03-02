import React from "react";

export default function FormGroup(props) {
  return (
    <div className="formGroup">
      <label htmlFor={props.labelFor}>{props.labelText}</label>
      <input
        type={props.inputType}
        name={props.inputName}
        id={props.labelFor}
        placeholder={props.inputPlaceholder}
        required={props.required}
      />
    </div>
  );
}
