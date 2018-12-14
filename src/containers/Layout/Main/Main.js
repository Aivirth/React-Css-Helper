import React from "react";
import InputsForm from "../../InputsForm/InputsForm";
import Stage from "../../../components/Stage/Stage";
import Subnav from "../../Subnav/Subnav";

import { Route } from "react-router-dom";

export default function Main(props) {
  return (
    <div className="Main d-flex container">
      <div className="Main__column">
        <Route
          path="/borders/:subpage"
          render={props => <Subnav {...props} />}
        />

        <InputsForm />
      </div>
      <div className="Main__column">
        <Stage />
      </div>
    </div>
  );
}
