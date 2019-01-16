import * as actionTypes from "../actions/actionTypes";
import uuid from "uuid/v4";

const initialState = {
  translate: {
    name: "Translate",
    isActive: true,
    axes: {
      axisX: {
        value: 20,
        inputType: "range",
        elementConfig: {
          label: "Translate X"
        },
        htmlProperties: {
          type: "range",
          step: "1",
          min: 0,
          max: 20,
          name: `translateX-${uuid()}`
        },
        dataSets: {
          "data-target": "axisX"
        }
      },
      axisY: {
        value: 20,
        inputType: "range",
        elementConfig: {
          label: "Translate Y"
        },
        htmlProperties: {
          type: "range",
          step: "1",
          min: 0,
          max: 20,
          name: `translateY-${uuid()}`
        },
        dataSets: {
          "data-target": "axisY"
        }
      },
      axisZ: {
        value: 20,
        inputType: "range",
        elementConfig: {
          label: "Translate Z"
        },
        htmlProperties: {
          type: "range",
          step: "1",
          min: 0,
          max: 20,
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
        value: 20,
        inputType: "range",
        elementConfig: {
          label: "Rotate X"
        },
        htmlProperties: {
          type: "range",
          step: "1",
          min: 0,
          max: 20,
          name: `rotateX-${uuid()}`
        },
        dataSets: {
          "data-target": "axisX"
        }
      },
      axisY: {
        value: 20,
        inputType: "range",
        elementConfig: {
          label: "Rotate Y"
        },
        htmlProperties: {
          type: "range",
          step: "1",
          min: 0,
          max: 20,
          name: `rotateY-${uuid()}`
        },
        dataSets: {
          "data-target": "axisY"
        }
      },
      axisZ: {
        value: 20,
        inputType: "range",
        elementConfig: {
          label: "Rotate Z"
        },
        htmlProperties: {
          type: "range",
          step: "1",
          min: 0,
          max: 20,
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
        value: 20,
        inputType: "range",
        elementConfig: {
          label: "Skew X"
        },
        htmlProperties: {
          type: "range",
          step: "1",
          min: 0,
          max: 20,
          name: `skewX-${uuid()}`
        },
        dataSets: {
          "data-target": "axisX"
        }
      },
      axisY: {
        value: 20,
        inputType: "range",
        elementConfig: {
          label: "Skew Y"
        },
        htmlProperties: {
          type: "range",
          step: "1",
          min: 0,
          max: 20,
          name: `skewY-${uuid()}`
        },
        dataSets: {
          "data-target": "axisY"
        }
      },
      axisZ: {
        value: 20,
        inputType: "range",
        elementConfig: {
          label: "Skew Z"
        },
        htmlProperties: {
          type: "range",
          step: "1",
          min: 0,
          max: 20,
          name: `skewZ-${uuid()}`
        },
        dataSets: {
          "data-target": "axisZ"
        }
      }
    }
  },

  scale: {
    name: "Scale",
    isActive: true,
    axes: {
      axisX: {
        value: 20,
        inputType: "range",
        elementConfig: {
          label: "Scale X"
        },
        htmlProperties: {
          type: "range",
          step: "1",
          min: 0,
          max: 20,
          name: `scaleX-${uuid()}`
        },
        dataSets: {
          "data-target": "axisX"
        }
      },
      axisY: {
        value: 20,
        inputType: "range",
        elementConfig: {
          label: "Scale Y"
        },
        htmlProperties: {
          type: "range",
          step: "1",
          min: 0,
          max: 20,
          name: `scaleY-${uuid()}`
        },
        dataSets: {
          "data-target": "axisY"
        }
      },
      axisZ: {
        value: 20,
        inputType: "range",
        elementConfig: {
          label: "Scale Z"
        },
        htmlProperties: {
          type: "range",
          step: "1",
          min: 0,
          max: 20,
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
    value: 10,
    inputType: "number",
    elementConfig: {
      label: "Perspective"
    },
    htmlProperties: {
      type: "number",
      step: "1",
      min: -10,
      max: 20,
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

    default:
      return state;
  }
};

export default reducer;
