import React from "react";
import Inputs from "../../Inputs/Inputs";
import Stage from "../../../components/Stage/Stage";

export default function Main(props) {
  return (
    <div className="Main d-flex container">
      <div className="Main__column">
        <Inputs />
      </div>
      <div className="Main__column">
        <Stage />
      </div>
    </div>
  );
}
