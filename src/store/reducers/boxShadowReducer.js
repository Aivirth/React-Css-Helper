import * as actionTypes from "../actions/actionTypes";
import uuid from "uuid/v4";

const initialState = {
  offsetY: {
    value: 10,
    inputType: "range",
    elementConfig: {
      label: "Vertical Offset"
    },
    htmlProperties: {
      type: "range",
      step: "1",
      min: -100,
      max: 100,
      name: "verticalOffset"
    }
  },

  offsetX: {
    value: 10,
    inputType: "range",
    elementConfig: {
      label: "Horizontal Offset"
    },
    htmlProperties: {
      type: "range",
      step: "1",
      min: -100,
      max: 100,
      name: "horizontalOffset"
    }
  },

  blur: {
    value: 3,
    inputType: "range",
    elementConfig: {
      label: "Blur"
    },
    htmlProperties: {
      type: "range",
      step: "1",
      min: 0,
      max: 200,
      name: "blur"
    }
  },

  spread: {
    value: 3,
    inputType: "range",
    elementConfig: {
      label: "Spread"
    },
    htmlProperties: {
      type: "range",
      step: "1",
      min: 0,
      max: 100,
      name: "spread"
    }
  },

  color: {
    value: "#095609",
    inputType: "color",
    elementConfig: {
      label: "Color"
    },
    htmlProperties: {
      type: "color",
      name: "color"
    }
  },

  opacity: {
    value: 1,
    inputType: "range",
    elementConfig: {
      label: "Opacity"
    },
    htmlProperties: {
      type: "range",
      step: "0.1",
      min: 0,
      max: 1,
      name: "opacity"
    }
  },

  inset: {
    value: false,
    inputType: "switch",
    elementConfig: {
      label: "Inset"
    },
    htmlProperties: {
      type: "checkbox",
      name: `inset-${uuid()}`
    },
    dataSets: {
      "data-switch": "isSwitch"
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BOXSHADOW:
      return { ...state };

    case actionTypes.UPDT_BOXSHADOWOFFSETY:
      return { ...state, offsetY: action.payload };

    case actionTypes.UPDT_BOXSHADOWOFFSETX:
      return { ...state, offsetX: action.payload };

    case actionTypes.UPDT_BOXSHADOWBLUR:
      return { ...state, blur: action.payload };

    case actionTypes.UPDT_BOXSHADOWSPREAD:
      return { ...state, spread: action.payload };

    case actionTypes.UPDT_BOXSHADOWCOLOR:
      return { ...state, color: action.payload };

    case actionTypes.UPDT_BOXSHADOWOPACITY:
      return { ...state, opacity: action.payload };

    case actionTypes.UPDT_BOXSHADOWINSET:
      return { ...state, inset: action.payload };

    case actionTypes.RESTORE_BOXSHADOW:
      return {
        ...state,
        offsetY: action.payload.offsetY,
        offsetX: action.payload.offsetX,
        blur: action.payload.blur,
        spread: action.payload.spread,
        color: action.payload.color,
        opacity: action.payload.opacity,
        inset: action.payload.inset
      };

    default:
      return state;
  }
};

export default reducer;
