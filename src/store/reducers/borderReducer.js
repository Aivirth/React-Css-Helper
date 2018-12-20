import * as actionTypes from "../actions/actionTypes";
import uuid from "uuid/v4";

const initialState = {
  top: {
    name: "Border Top",
    width: {
      value: 1,
      inputType: "range",
      elementConfig: {
        label: "Width"
      },
      htmlProperties: {
        type: "range",
        step: "1",
        min: 0,
        max: 20,
        name: `borderWidth-${uuid()}`
      },
      dataSets: {
        "data-target": "width"
      }
    },
    style: {
      value: "solid",
      inputType: "select",
      elementConfig: {
        label: "Style",
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
      },
      dataSets: {
        "data-target": "style"
      }
    },
    color: {
      value: "#ffb900",
      inputType: "color",
      elementConfig: {
        label: "Color"
      },
      htmlProperties: {
        name: `borderColor-${uuid()}`,
        type: "color"
      },
      dataSets: {
        "data-target": "color"
      }
    }
  },

  bottom: {
    name: "Border Bottom",
    width: {
      value: 1,
      inputType: "range",
      elementConfig: {
        label: "Width"
      },
      htmlProperties: {
        type: "range",
        step: "1",
        min: 0,
        max: 20,
        name: `borderWidth-${uuid()}`
      },
      dataSets: {
        "data-target": "width"
      }
    },
    style: {
      value: "solid",
      inputType: "select",
      elementConfig: {
        label: "Style",
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
      },
      dataSets: {
        "data-target": "style"
      }
    },
    color: {
      value: "#ffb900",
      inputType: "color",
      elementConfig: {
        label: "Color"
      },
      htmlProperties: {
        name: `borderColor-${uuid()}`,
        type: "color"
      },
      dataSets: {
        "data-target": "color"
      }
    }
  },
  left: {
    name: "Border Left",
    width: {
      value: 1,
      inputType: "range",
      elementConfig: {
        label: "Width"
      },
      htmlProperties: {
        type: "range",
        step: "1",
        min: 0,
        max: 20,
        name: `borderWidth-${uuid()}`
      },
      dataSets: {
        "data-target": "width"
      }
    },
    style: {
      value: "solid",
      inputType: "select",
      elementConfig: {
        label: "Style",
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
      },
      dataSets: {
        "data-target": "style"
      }
    },
    color: {
      value: "#ffb900",
      inputType: "color",
      elementConfig: {
        label: "Color"
      },
      htmlProperties: {
        name: `borderColor-${uuid()}`,
        type: "color"
      },
      dataSets: {
        "data-target": "color"
      }
    }
  },
  right: {
    name: "Border Right",
    width: {
      value: 1,
      inputType: "range",
      elementConfig: {
        label: "Width"
      },
      htmlProperties: {
        type: "range",
        step: "1",
        min: 0,
        max: 20,
        name: `borderWidth-${uuid()}`
      },
      dataSets: {
        "data-target": "width"
      }
    },
    style: {
      value: "solid",
      inputType: "select",
      elementConfig: {
        label: "Style",
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
      },
      dataSets: {
        "data-target": "style"
      }
    },
    color: {
      value: "#ffb900",
      inputType: "color",
      elementConfig: {
        label: "Color"
      },
      htmlProperties: {
        name: `borderColor-${uuid()}`,
        type: "color"
      },
      dataSets: {
        "data-target": "color"
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
