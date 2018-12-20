import * as actionTypes from "../actions/actionTypes";
import uuid from "uuid/v4";

const initialState = {
  topLeft: {
    radiusX: {
      value: 50,
      inputType: "range",
      elementConfig: {
        label: "Border Top-Left Radius X"
      },
      htmlProperties: {
        type: "range",
        step: "1",
        min: 0,
        max: 300,
        name: "borderTopLeftRadiusX" + uuid()
      },
      dataSets: {
        "data-radius": "radiusX"
      }
    },
    radiusY: {
      value: 20,
      inputType: "range",
      elementConfig: {
        label: "Border Top-Left Radius Y"
      },
      htmlProperties: {
        type: "range",
        step: "1",
        min: 0,
        max: 300,
        name: "borderTopLeftRadiusY" + uuid()
      },
      dataSets: {
        "data-radius": "radiusY"
      }
    }
  },

  topRight: {
    radiusX: {
      value: 50,
      inputType: "range",
      elementConfig: {
        label: "Border Top-Right Radius X"
      },
      htmlProperties: {
        type: "range",
        step: "1",
        min: 0,
        max: 300,
        name: "borderTopRightRadiusX" + uuid()
      },
      dataSets: {
        "data-radius": "radiusX"
      }
    },
    radiusY: {
      value: 20,
      inputType: "range",
      elementConfig: {
        label: "Border Top-Right Radius Y"
      },
      htmlProperties: {
        type: "range",
        step: "1",
        min: 0,
        max: 300,
        name: "borderTopRightRadiusY" + uuid()
      },
      dataSets: {
        "data-radius": "radiusY"
      }
    }
  },

  bottomRight: {
    radiusX: {
      value: 50,
      inputType: "range",
      elementConfig: {
        label: "Border Bottom-Right Radius X"
      },
      htmlProperties: {
        type: "range",
        step: "1",
        min: 0,
        max: 300,
        name: "borderBottomRightRadiusX" + uuid()
      },
      dataSets: {
        "data-radius": "radiusX"
      }
    },
    radiusY: {
      value: 20,
      inputType: "range",
      elementConfig: {
        label: "Border Bottom-Right Radius Y"
      },
      htmlProperties: {
        type: "range",
        step: "1",
        min: 0,
        max: 300,
        name: "borderBottomRightRadiusY" + uuid()
      },
      dataSets: {
        "data-radius": "radiusY"
      }
    }
  },

  bottomLeft: {
    radiusX: {
      value: 50,
      inputType: "range",
      elementConfig: {
        label: "Border Bottom-Left Radius X"
      },
      htmlProperties: {
        type: "range",
        step: "1",
        min: 0,
        max: 300,
        name: "borderBottomLeftRadiusX" + uuid()
      },
      dataSets: {
        "data-radius": "radiusX"
      }
    },
    radiusY: {
      value: 20,
      inputType: "range",
      elementConfig: {
        label: "Border Bottom-Left Radius Y"
      },
      htmlProperties: {
        type: "range",
        step: "1",
        min: 0,
        max: 300,
        name: "borderBottomLeftRadiusY" + uuid()
      },
      dataSets: {
        "data-radius": "radiusY"
      }
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BORDERRADIUS:
      return { ...state };

    case actionTypes.UPDT_BORDERRADIUS_TOPLEFT:
      return { ...state, topLeft: action.payload };

    case actionTypes.UPDT_BORDERRADIUS_TOPRIGHT:
      return { ...state, topRight: action.payload };

    case actionTypes.UPDT_BORDERRADIUS_BOTTOMRIGHT:
      return { ...state, bottomRight: action.payload };

    case actionTypes.UPDT_BORDERRADIUS_BOTTOMLEFT:
      return { ...state, bottomLeft: action.payload };

    default:
      return state;
  }
};

export default reducer;
