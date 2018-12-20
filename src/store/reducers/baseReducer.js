import * as actionTypes from "../actions/actionTypes";
import uuid from "uuid/v4";

const initialState = {
  width: {
    value: 200,
    inputType: "range",
    elementConfig: {
      label: "Width"
    },
    htmlProperties: {
      type: "range",
      step: "1",
      min: 0,
      max: 500,
      name: "width-" + uuid()
    }
  },

  height: {
    value: 200,
    inputType: "range",
    elementConfig: {
      label: "Height"
    },
    htmlProperties: {
      type: "range",
      step: "1",
      min: 0,
      max: 500,
      name: "height-" + uuid()
    }
  },

  margin: {
    value: "auto",
    inputType: "",
    elementConfig: {},
    htmlProperties: {}
  },

  backgroundColor: {
    value: "#00bcd4",
    inputType: "color",
    elementConfig: {
      label: "Background Color"
    },
    htmlProperties: {
      type: "color",
      name: "backgroundColor-" + uuid()
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BASE:
      return { ...state };

    case actionTypes.UPDT_BASEWIDTH:
      return { ...state, width: action.payload };

    case actionTypes.UPDT_BASEHEIGHT:
      return { ...state, height: action.payload };

    case actionTypes.UPDT_BASEMARGIN:
      return { ...state, margin: action.payload };

    case actionTypes.UPDT_BASEBGCOLOR:
      return { ...state, backgroundColor: action.payload };

    default:
      return state;
  }
};

export default reducer;
