import React from "react";
import InputsForm from "../../InputsForm/InputsForm";
import Stage from "../../../components/Stage/Stage";
import Sidenav from "../../Sidenav/Sidenav";

export default function Main(props) {
  return (
    <div className="Main d-flex container">
      <Sidenav />
      <div className="Main__column">
        <InputsForm />
      </div>
      <div className="Main__column">
        <Stage />
      </div>
    </div>
  );
}
