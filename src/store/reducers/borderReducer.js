import * as actionTypes from "../actions/actionTypes";
import uuid from "uuid/v4";

const initialState = {
  top: {
    name: "Border Top",
    orientation: "top",
    width: {
      value: 1,
      inputType: "range",
      elementConfig: {
        label: "Border Width"
      },
      htmlProperties: {
        type: "range",
        step: "1",
        min: 0,
        max: 20,
        name: `borderWidth-${uuid()}`
      }
    },
    style: {
      value: "solid",
      inputType: "select",
      elementConfig: {
        label: "Border Style",
        options: [
          { name: "Solid", value: "solid" },
          { name: "None", value: "none" },
          { name: "Hidden", value: "hidden" },
          { name: "Dotted", value: "dotted" },
          { name: "Dashed", value: "dashed" },
          { name: "Double", value: "double" },
          { name: "Groove", value: "groove" },
          { name: "Ridge", value: "ridge" },
          { name: "Inset", value: "inset" },
          { name: "Outset", value: "outset" }
        ]
      },
      htmlProperties: {
        name: `borderStyle-${uuid()}`
      }
    },
    color: {
      value: "#ffb900",
      inputType: "color",
      elementConfig: {
        label: "Border Color"
      },
      htmlProperties: {
        name: `borderColor-${uuid()}`,
        type: "color"
      }
    }
  },

  bottom: {
    name: "Border Bottom",
    orientation: "bottom",
    width: {
      value: 1,
      inputType: "range",
      elementConfig: {
        label: "Border Width"
      },
      htmlProperties: {
        type: "range",
        step: "1",
        min: 0,
        max: 20,
        name: `borderWidth-${uuid()}`
      }
    },
    style: {
      value: "solid",
      inputType: "select",
      elementConfig: {
        label: "Border Style",
        options: [
          { name: "Solid", value: "solid" },
          { name: "None", value: "none" },
          { name: "Hidden", value: "hidden" },
          { name: "Dotted", value: "dotted" },
          { name: "Dashed", value: "dashed" },
          { name: "Double", value: "double" },
          { name: "Groove", value: "groove" },
          { name: "Ridge", value: "ridge" },
          { name: "Inset", value: "inset" },
          { name: "Outset", value: "outset" }
        ]
      },
      htmlProperties: {
        name: `borderStyle-${uuid()}`
      }
    },
    color: {
      value: "#ffb900",
      inputType: "color",
      elementConfig: {
        label: "Border Color"
      },
      htmlProperties: {
        name: `borderColor-${uuid()}`,
        type: "color"
      }
    }
  },
  left: {
    name: "Border Left",
    orientation: "left",
    width: {
      value: 1,
      inputType: "range",
      elementConfig: {
        label: "Border Width"
      },
      htmlProperties: {
        type: "range",
        step: "1",
        min: 0,
        max: 20,
        name: `borderWidth-${uuid()}`
      }
    },
    style: {
      value: "solid",
      inputType: "select",
      elementConfig: {
        label: "Border Style",
        options: [
          { name: "Solid", value: "solid" },
          { name: "None", value: "none" },
          { name: "Hidden", value: "hidden" },
          { name: "Dotted", value: "dotted" },
          { name: "Dashed", value: "dashed" },
          { name: "Double", value: "double" },
          { name: "Groove", value: "groove" },
          { name: "Ridge", value: "ridge" },
          { name: "Inset", value: "inset" },
          { name: "Outset", value: "outset" }
        ]
      },
      htmlProperties: {
        name: `borderStyle-${uuid()}`
      }
    },
    color: {
      value: "#ffb900",
      inputType: "color",
      elementConfig: {
        label: "Border Color"
      },
      htmlProperties: {
        name: `borderColor-${uuid()}`,
        type: "color"
      }
    }
  },
  right: {
    name: "Border Right",
    orientation: "right",
    width: {
      value: 1,
      inputType: "range",
      elementConfig: {
        label: "Border Width"
      },
      htmlProperties: {
        type: "range",
        step: "1",
        min: 0,
        max: 20,
        name: `borderWidth-${uuid()}`
      }
    },
    style: {
      value: "solid",
      inputType: "select",
      elementConfig: {
        label: "Border Style",
        options: [
          { name: "Solid", value: "solid" },
          { name: "None", value: "none" },
          { name: "Hidden", value: "hidden" },
          { name: "Dotted", value: "dotted" },
          { name: "Dashed", value: "dashed" },
          { name: "Double", value: "double" },
          { name: "Groove", value: "groove" },
          { name: "Ridge", value: "ridge" },
          { name: "Inset", value: "inset" },
          { name: "Outset", value: "outset" }
        ]
      },
      htmlProperties: {
        name: `borderStyle-${uuid()}`
      }
    },
    color: {
      value: "#ffb900",
      inputType: "color",
      elementConfig: {
        label: "Border Color"
      },
      htmlProperties: {
        name: `borderColor-${uuid()}`,
        type: "color"
      }
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BORDER:
      return { ...state };

    case actionTypes.UPDT_BORDERTOP:
      return { ...state, top: action.payload };

    case actionTypes.UPDT_BORDERBOTTOM:
      return { ...state, bottom: action.payload };

    case actionTypes.UPDT_BORDERRIGHT:
      return { ...state, right: action.payload };

    case actionTypes.UPDT_BORDERLEFT:
      return { ...state, left: action.payload };

    default:
      return state;
  }
};

export default reducer;
