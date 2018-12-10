import React from "react";

import Range from "../../components/UI/Range/Range";
import Checkbox from "../../components/UI/Checkbox/Checkbox";

export default function Inputs(props) {
  return (
    <div className="Inputs">
      <Checkbox id="checkTest" label="checkbox Test" />

      <Range id="rangeTest" label="Range Proto" min="-10" max="10" step="1" />
    </div>
  );
}
