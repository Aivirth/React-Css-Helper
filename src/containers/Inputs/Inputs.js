import React from "react";

import Range from "../../components/UI/Range/Range";

export default function Inputs(props) {
  return (
    <div>
      <input
        className="inp-cbx"
        id="cbx"
        type="checkbox"
        style={{ display: "none" }}
      />
      <label className="cbx" htmlFor="cbx">
        <span>
          <svg width="12px" height="10px" viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1" />
          </svg>
        </span>
        <span>CodePenChallenge</span>
      </label>

      <hr />

      <Range id="rangeTest" label="Range Proto" min="-10" max="10" step="1" />
    </div>
  );
}
