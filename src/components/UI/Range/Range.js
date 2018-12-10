import React from "react";

export default function Range(props) {
  const { id, label, min, max, step } = props;
  return (
    <React.Fragment>
      <input
        type="range"
        id={id}
        name={id}
        min={min}
        max={max}
        defaultValue="0"
        step={step}
      />
      <label htmlFor={id}>{label}</label>
    </React.Fragment>
  );
}
