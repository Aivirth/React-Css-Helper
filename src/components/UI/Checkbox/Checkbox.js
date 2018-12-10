import React from "react";

export default function Checkbox(props) {
  const { id, checked, label } = props;

  return (
    <React.Fragment>
      <input
        className="inp-cbx"
        id={id}
        type="checkbox"
        style={{ display: "none" }}
      />
      <label className="cbx" htmlFor={id}>
        <span>
          <svg width="12px" height="10px" viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1" />
          </svg>
        </span>
        <span>{label}</span>
      </label>
    </React.Fragment>
  );
}
