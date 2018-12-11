import * as actionTypes from "../actions/actionTypes";
const initialState = {
  top: {
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
        name: "borderWidth"
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
        name: "borderStyle"
      }
    },
    color: {
      value: "#ffb900",
      inputType: "color",
      elementConfig: {
        label: "Border Color"
      },
      htmlProperties: {
        name: "borderColor",
        type: "color"
      }
    }
  },

  bottom: {
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
        name: "borderWidth"
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
        name: "borderStyle"
      }
    },
    color: {
      value: "#ffb900",
      inputType: "color",
      elementConfig: {
        label: "Border Color"
      },
      htmlProperties: {
        name: "borderColor",
        type: "color"
      }
    }
  },
  left: {
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
        name: "borderWidth"
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
        name: "borderStyle"
      }
    },
    color: {
      value: "#ffb900",
      inputType: "color",
      elementConfig: {
        label: "Border Color"
      },
      htmlProperties: {
        name: "borderColor",
        type: "color"
      }
    }
  },
  right: {
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
        name: "borderWidth"
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
        name: "borderStyle"
      }
    },
    color: {
      value: "#ffb900",
      inputType: "color",
      elementConfig: {
        label: "Border Color"
      },
      htmlProperties: {
        name: "borderColor",
        type: "color"
      }
    }
  }
};
