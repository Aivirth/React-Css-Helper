import * as actionTypes from "../actions/actionTypes";
import uuid from "uuid/v4";

const initialState = {
  topLeft: {
    name: "Top Left",
    radiusX: {
      value: 0,
      inputType: "range",
      elementConfig: {
        label: "Radius X"
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
      value: 0,
      inputType: "range",
      elementConfig: {
        label: "Radius Y"
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
    name: "Top Right",
    radiusX: {
      value: 0,
      inputType: "range",
      elementConfig: {
        label: "Radius X"
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
      value: 0,
      inputType: "range",
      elementConfig: {
        label: "Radius Y"
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
    name: "Bottom Right",
    radiusX: {
      value: 0,
      inputType: "range",
      elementConfig: {
        label: "Radius X"
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
      value: 0,
      inputType: "range",
      elementConfig: {
        label: "Radius Y"
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
    name: "Bottom Left",
    radiusX: {
      value: 0,
      inputType: "range",
      elementConfig: {
        label: "Radius X"
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
      value: 0,
      inputType: "range",
      elementConfig: {
        label: "Radius Y"
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

    case actionTypes.RESTORE_BORDERRADIUS:
      return {
        ...state,
        bottomRight: action.payload.bottomRight,
        topRight: action.payload.topRight,
        bottomLeft: action.payload.bottomLeft,
        topLeft: action.payload.topLeft
      };

    default:
      return state;
  }
};

export default reducer;
