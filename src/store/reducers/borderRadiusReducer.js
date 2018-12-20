import * as actionTypes from "../actions/actionTypes";
import uuid from "uuid/v4";

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
      name: "borderTopLeftRadius" + uuid()
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
      name: "borderTopRightRadius" + uuid()
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
      name: "borderBottomLeftRadius" + uuid()
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
      name: "borderBottomRightRadius" + uuid()
    },
    radii: { radiusX: 50, radiusY: 20 }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BORDERRADIUS:
      return { ...state };

    case actionTypes.UPDT_BORDERRADIUS_TOPLEFT:
      return { ...state, borderTopLeftRadius: action.payload };

    case actionTypes.UPDT_BORDERRADIUS_TOPRIGHT:
      return { ...state, borderTopRightRadius: action.payload };

    case actionTypes.UPDT_BORDERRADIUS_BOTTOMRIGHT:
      return { ...state, borderBottomRightRadius: action.payload };

    case actionTypes.UPDT_BORDERRADIUS_BOTTOMLEFT:
      return { ...state, borderBottomLeftRadius: action.payload };

    default:
      return state;
  }
};

export default reducer;
