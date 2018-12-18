import React from "react";
export default function Range(props) {
  const {
    label,
    id,
    value,
    changed,
    identifier,
    radiusDir,
    htmlProperties,
    dataSets
  } = props;
  return (
    <div className="Inputs__wrapper">
      <label className="Inputs__label" htmlFor={id}>
        {label} : <strong>{value}</strong>
      </label>
      <input
        className="Range Inputs__control"
        id={id}
        value={value}
        onChange={changed}
        data-identifier={identifier}
        data-radiusdir={radiusDir}
        {...htmlProperties}
        {...dataSets}
      />
    </div>
  );
}
