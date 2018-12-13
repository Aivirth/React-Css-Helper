import React from "react";
import Select from "./Select/Select";
import Range from "./Range/Range";
import Checkbox from "./Checkbox/Checkbox";
import Switch from "./Switch/Switch";
import ColorPicker from "./ColorPicker/ColorPicker";

export default function Input(props) {
  const {
    value,
    inputType,
    label,
    dataSets,
    htmlProperties,
    changed,
    elementConfig
  } = props;

  let inputElement = null;

  switch (inputType) {
    case "range":
      inputElement = (
        <Range
          value={value}
          htmlProperties={htmlProperties}
          label={label}
          dataSets={dataSets}
          changed={changed}
        />
      );
      break;

    case "checkbox":
      inputElement = (
        <Checkbox
          value={value}
          htmlProperties={htmlProperties}
          label={label}
          dataSets={dataSets}
          changed={changed}
        />
      );
      break;

    case "color":
      inputElement = (
        <ColorPicker
          value={value}
          htmlProperties={htmlProperties}
          label={label}
          dataSets={dataSets}
          changed={changed}
        />
      );
      break;

    case "select":
      inputElement = (
        <Select
          value={value}
          htmlProperties={htmlProperties}
          dataSets={dataSets}
          label={label}
          elementConfig={elementConfig}
          changed={changed}
        />
      );

      break;

    case "switch":
      inputElement = (
        <Switch
          value={value}
          htmlProperties={htmlProperties}
          label={label}
          changed={changed}
        />
      );

      break;

    case "":
      inputElement = <span style={{ display: "none" }} />;
      break;

    default:
      inputElement = (
        <p style={{ color: "red" }}>Input type not recognized by application</p>
      );
  }

  return inputElement;
}
