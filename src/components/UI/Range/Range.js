import React from "react";
export default function Range(props) {
  const {
    label,
    id,
    value,
    changed,
    identifier,
    radiusDir,
    htmlProperties
  } = props;
  return (
    <React.Fragment>
      <label htmlFor={id}>
        {label} : <strong>{value}</strong>
      </label>
      <input
        className="Range"
        id={id}
        value={value}
        onChange={changed}
        data-identifier={identifier}
        data-radiusdir={radiusDir}
        {...htmlProperties}
      />
    </React.Fragment>
  );
}
