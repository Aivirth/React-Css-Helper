import React from "react";

export default function Select(props) {
  const { elementConfig, label, changed, identifier, htmlProperties } = props;

  let disabled = false;

  let output = <p style={{ color: "red" }}>No select options found</p>;

  if (elementConfig.options) {
    output = (
      <div className="Inputs__wrapper">
        <label className="Inputs__label" htmlFor={label}>
          {label}
        </label>
        <select
          className="Select Inputs__control"
          disabled={disabled}
          onChange={changed}
          {...htmlProperties}
        >
          {elementConfig.options.map(option => (
            <option
              key={option.name}
              className="Select__option "
              value={option.value}
            >
              {option.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
  return output;
}
