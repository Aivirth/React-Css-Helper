import * as actionTypes from "../actions/actionTypes";
import uuid from "uuid/v4";

const initialState = {
  translate: {
    name: "Translate",
    isActive: true,
    translateX: {
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
        "data-target": "translateX"
      }
    },
    translateY: {
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
        "data-target": "translateY"
      }
    },
    translateZ: {
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
        "data-target": "translateZ"
      }
    }
  },
  rotate: {
    name: "Rotate",
    isActive: true,
    rotateX: {
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
        "data-target": "rotateX"
      }
    },
    rotateY: {
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
        "data-target": "rotateY"
      }
    },
    rotateZ: {
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
        "data-target": "rotateZ"
      }
    }
  },

  skew: {
    name: "Skew",
    isActive: true,
    skewX: {
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
        "data-target": "skewX"
      }
    },
    skewY: {
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
        "data-target": "skewY"
      }
    },
    skewZ: {
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
        "data-target": "skewZ"
      }
    }
  },

  scale: {
    name: "Scale",
    isActive: true,
    skewX: {
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
        "data-target": "scaleX"
      }
    },
    skewY: {
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
        "data-target": "scaleY"
      }
    },
    skewZ: {
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
        "data-target": "scaleZ"
      }
    }
  },

  perspective: {
    name: "Perspective",
    isActive: true,
    value: 10,
    inputType: "number",
    elementConfig: {
      label: "Perspective Z"
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
