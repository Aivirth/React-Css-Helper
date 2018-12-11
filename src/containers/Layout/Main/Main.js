import React from "react";
import InputsForm from "../../InputsForm/InputsForm";
import Stage from "../../../components/Stage/Stage";

export default function Main(props) {
  return (
    <div className="Main d-flex container">
      <div className="Main__column">
        <InputsForm />
      </div>
      <div className="Main__column">
        <Stage />
      </div>
    </div>
  );
}
