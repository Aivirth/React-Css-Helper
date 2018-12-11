import React from "react";

export default function Select(props) {
  const { options } = props;

  let disabled = true;

  let output = <p style={{ color: "red" }}>No select options found</p>;

  if (options) {
    output = (
      <select className="Select" disabled={disabled}>
        {options.map(option => (
          <option
            key={option.name}
            className="Select__option"
            value={option.value}
          >
            {option.name}
          </option>
        ))}
      </select>
    );
  }
  return output;
}
