import React from "react";

export default function Select(props) {
  const { elementConfig, label, changed, identifier, htmlProperties } = props;

  let disabled = true;

  let output = <p style={{ color: "red" }}>No select options found</p>;

  if (elementConfig.options) {
    output = (
      <React.Fragment>
        <label htmlFor={label}>{label}</label>
        <select
          className="Select"
          disabled={disabled}
          onChange={changed}
          {...htmlProperties}
        >
          {elementConfig.options.map(option => (
            <option
              key={option.name}
              className="Select__option"
              value={option.value}
            >
              {option.name}
            </option>
          ))}
        </select>
      </React.Fragment>
    );
  }
  return output;
}
