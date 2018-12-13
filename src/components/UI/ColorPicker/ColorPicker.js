import React from "react";

export default props => {
  const { changed, id, value } = props;
  return (
    <div>
      <label htmlFor={id}>
        Color: <strong>{value}</strong>
      </label>
      <input type="color" id={id} name={id} onChange={changed} value={value} />
    </div>
  );
};
