import React from "react";

export default props => {
  const { changed, id, value, label } = props;
  return (
    <div className="Inputs__wrapper">
      <label htmlFor={id} className="Inputs__label">
        {label}: <strong>{value}</strong>
      </label>
      <div className="Inputs__control">
        <input
          className="Inputs__color"
          type="color"
          id={id}
          name={id}
          onChange={changed}
          value={value}
        />
      </div>
    </div>
  );
};
