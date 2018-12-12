import React from "react";

export default function Switch(props) {
  return (
    <label htmlFor="protoSwitch" className="Switch">
      <input id="protoSwitch" className="Switch__input" type="checkbox" />
      <span className="Switch__slider" />
    </label>
  );
}
