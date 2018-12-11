import * as actionTypes from "../actions/actionTypes";
const initialState = {
  borderTopLeftRadius: {
    inputType: "range",
    elementConfig: {
      label: "Border Top-Left Radius"
    },
    htmlProperties: {
      type: "range",
      step: "1",
      min: 0,
      max: 300,
      name: "borderTopLeftRadius"
    },
    radii: { radiusX: 50, radiusY: 20 }
  },
  borderTopRightRadius: {
    inputType: "range",
    elementConfig: {
      label: "Border Top-Right Radius"
    },
    htmlProperties: {
      type: "range",
      step: "1",
      min: 0,
      max: 300,
      name: "borderTopRightRadius"
    },
    radii: { radiusX: 50, radiusY: 20 }
  },
  borderBottomLeftRadius: {
    inputType: "range",
    elementConfig: {
      label: "Border Bottom-Left Radius"
    },
    htmlProperties: {
      type: "range",
      step: "1",
      min: 0,
      max: 300,
      name: "borderBottomLeftRadius"
    },
    radii: { radiusX: 50, radiusY: 20 }
  },
  borderBottomRightRadius: {
    inputType: "range",
    elementConfig: {
      label: "Border Bottom-Right Radius"
    },
    htmlProperties: {
      type: "range",
      step: "1",
      min: 0,
      max: 300,
      name: "borderBottomRightRadius"
    },
    radii: { radiusX: 50, radiusY: 20 }
  }
};
