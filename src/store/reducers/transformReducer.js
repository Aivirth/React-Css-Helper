import * as actionTypes from "../actions/actionTypes";
import uuid from "uuid/v4";

const initialState = {
  translate: {
    name: "Translate",
    isActive: true,
    axes: {
      axisX: {
        value: 0,
        inputType: "range",
        elementConfig: {
          label: "Translate X",
          measurementUnit: "px"
        },
        htmlProperties: {
          type: "range",
          step: "1",
          min: -500,
          max: 500,
          name: `translateX-${uuid()}`
        },
        dataSets: {
          "data-target": "axisX"
        }
      },
      axisY: {
        value: 0,
        inputType: "range",
        elementConfig: {
          label: "Translate Y",
          measurementUnit: "px"
        },
        htmlProperties: {
          type: "range",
          step: "1",
          min: -500,
          max: 500,
          name: `translateY-${uuid()}`
        },
        dataSets: {
          "data-target": "axisY"
        }
      },
      axisZ: {
        value: 0,
        inputType: "range",
        elementConfig: {
          label: "Translate Z",
          measurementUnit: "px"
        },
        htmlProperties: {
          type: "range",
          step: "1",
          min: -500,
          max: 500,
          name: `translateZ-${uuid()}`
        },
        dataSets: {
          "data-target": "axisZ"
        }
      }
    }
  },
  rotate: {
    name: "Rotate",
    isActive: true,
    axes: {
      axisX: {
        value: 0,
        inputType: "range",
        elementConfig: {
          label: "Rotate X",
          measurementUnit: "deg"
        },
        htmlProperties: {
          type: "range",
          step: "1",
          min: 0,
          max: 360,
          name: `rotateX-${uuid()}`
        },
        dataSets: {
          "data-target": "axisX"
        }
      },
      axisY: {
        value: 0,
        inputType: "range",
        elementConfig: {
          label: "Rotate Y",
          measurementUnit: "deg"
        },
        htmlProperties: {
          type: "range",
          step: "1",
          min: 0,
          max: 360,
          name: `rotateY-${uuid()}`
        },
        dataSets: {
          "data-target": "axisY"
        }
      },
      axisZ: {
        value: 0,
        inputType: "range",
        elementConfig: {
          label: "Rotate Z",
          measurementUnit: "deg"
        },
        htmlProperties: {
          type: "range",
          step: "1",
          min: 0,
          max: 360,
          name: `rotateZ-${uuid()}`
        },
        dataSets: {
          "data-target": "axisZ"
        }
      }
    }
  },

  skew: {
    name: "Skew",
    isActive: true,
    axes: {
      axisX: {
        value: 0,
        inputType: "range",
        elementConfig: {
          label: "Skew X",
          measurementUnit: "deg"
        },
        htmlProperties: {
          type: "range",
          step: "1",
          min: -360,
          max: 360,
          name: `skewX-${uuid()}`
        },
        dataSets: {
          "data-target": "axisX"
        }
      },
      axisY: {
        value: 0,
        inputType: "range",
        elementConfig: {
          label: "Skew Y",
          measurementUnit: "deg"
        },
        htmlProperties: {
          type: "range",
          step: "1",
          min: -360,
          max: 360,
          name: `skewY-${uuid()}`
        },
        dataSets: {
          "data-target": "axisY"
        }
      }
    }
  },

  scale: {
    name: "Scale",
    isActive: true,
    axes: {
      axisX: {
        value: 0,
        inputType: "range",
        elementConfig: {
          label: "Scale X",
          measurementUnit: ""
        },
        htmlProperties: {
          type: "range",
          step: "0.1",
          min: 0,
          max: 3,
          name: `scaleX-${uuid()}`
        },
        dataSets: {
          "data-target": "axisX"
        }
      },
      axisY: {
        value: 0,
        inputType: "range",
        elementConfig: {
          label: "Scale Y",
          measurementUnit: ""
        },
        htmlProperties: {
          type: "range",
          step: "0.1",
          min: 0,
          max: 3,
          name: `scaleY-${uuid()}`
        },
        dataSets: {
          "data-target": "axisY"
        }
      },
      axisZ: {
        value: 0,
        inputType: "range",
        elementConfig: {
          label: "Scale Z",
          measurementUnit: ""
        },
        htmlProperties: {
          type: "range",
          step: "0.1",
          min: 0,
          max: 3,
          name: `scaleZ-${uuid()}`
        },
        dataSets: {
          "data-target": "axisZ"
        }
      }
    }
  },

  perspective: {
    name: "Perspective",
    isActive: true,
    value: 0,
    inputType: "number",
    elementConfig: {
      label: "Perspective",
      measurementUnit: "px"
    },
    htmlProperties: {
      type: "number",
      step: "1",
      min: -99999,
      max: 99999,
      name: `perspective-${uuid()}`
    },
    dataSets: {
      "data-target": "perspective"
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDT_TRANSLATE:
      return { ...state, translate: action.payload };

    case actionTypes.UPDT_ROTATE:
      return { ...state, rotate: action.payload };

    case actionTypes.UPDT_SKEW:
      return { ...state, skew: action.payload };

    case actionTypes.UPDT_SCALE:
      return { ...state, scale: action.payload };

    case actionTypes.UPDT_PERSPECTIVE:
      return { ...state, perspective: action.payload };

    case actionTypes.RESTORE_TRANSFORM:
      return {
        ...state,
        translate: action.payload.translate,
        rotate: action.payload.rotate,
        skew: action.payload.skew,
        scale: action.payload.scale,
        perspective: action.payload.perspective
      };

    default:
      return state;
  }
};

export default reducer;
