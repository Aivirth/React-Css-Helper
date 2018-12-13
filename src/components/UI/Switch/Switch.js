import React from "react";

export default function Switch(props) {
  const { changed, id, value, htmlProperties } = props;

  return (
    <div>
      <p>Label Name</p>
      <label htmlFor={htmlProperties.label} className="Switch">
        <input
          onChange={changed}
          {...htmlProperties}
          id={htmlProperties.label}
          data-switch="isSwitch"
          className="Switch__input"
          value={value}
        />
        <span className="Switch__slider" />
      </label>
    </div>
  );
}
