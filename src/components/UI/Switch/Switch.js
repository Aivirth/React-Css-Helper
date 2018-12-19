import React from "react";

export default function Switch(props) {
  const { label, value, changed, htmlProperties, dataSets } = props;

  return (
    <div className="Inputs__wrapper">
      <p className="Inputs__label">{label}</p>
      <div className="Inputs__control">
        <label htmlFor={htmlProperties.name} className="Switch">
          <input
            onChange={changed}
            {...htmlProperties}
            {...dataSets}
            className="Switch__input"
            value={value}
            defaultChecked={value}
            id={htmlProperties.name}
          />
          <span className="Switch__slider" />
        </label>
      </div>
    </div>
  );
}
