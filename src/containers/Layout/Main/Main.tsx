import React from "react";
import Stage from "../../../components/Stage/Stage";

export default function Main(props: any) {
  return (
    <div className="Main d-flex container">
      <div className="Main__column">Current Options</div>
      <div className="Main__column">
        <Stage />
      </div>
    </div>
  );
}
