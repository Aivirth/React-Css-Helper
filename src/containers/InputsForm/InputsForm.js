import React from "react";
import Base from "../../components/Options/Base/Base";
import BorderRadius from "../../components/Options/BorderRadius/BorderRadius";
import Borders from "../../components/Options/Borders/Borders";
import BoxShadow from "../../components/Options/BoxShadow/BoxShadow";
import Manage from "../../components/Memory/Manage/Manage";
import { Route } from "react-router-dom";

export default function InputsForm() {
  return (
    <div className="Inputs">
      <div className="Inputs__container">
        <Route path="/base" component={Base} />
        <Route path="/box-shadow" component={BoxShadow} />
        <Route path="/borders" component={Borders} />
        <Route path="/border-radius" component={BorderRadius} />
        <Route path="/manage" component={Manage} />
      </div>
    </div>
  );
}
