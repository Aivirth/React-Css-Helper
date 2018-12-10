import React from "react";
import Stage from "../../../components/Stage/Stage";

export default function Main(props) {
  return (
    <div className="Main d-flex container">
      <div className="Main__column">
        {/* Temp Inputs */}
        <div style={{ marginBottom: "30px" }} />

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
      </div>
      <div className="Main__column">
        <Stage />
      </div>
    </div>
  );
}
