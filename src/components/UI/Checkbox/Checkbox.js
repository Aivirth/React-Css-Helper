import React from "react";

export default function Checkbox(props) {
  const { id, checked, label } = props;

  return (
    <React.Fragment>
      <input
        className="Checkbox__input"
        id={id}
        type="checkbox"
        name={id}
        style={{ display: "none" }}
      />
      <label className="Checkbox" htmlFor={id}>
        <span className="Checkbox__svgWrapper">
          <svg width="12px" height="10px" viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1" />
          </svg>
        </span>
        <span className="Checkbox__labelName">{label}</span>
      </label>
    </React.Fragment>
  );
}
