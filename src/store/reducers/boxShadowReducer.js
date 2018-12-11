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
    value: "",
    inputType: "switch",
    elementConfig: {
      label: "Inset",
      isSwitch: true
    },
    htmlProperties: {
      type: "checkbox",
      name: "inset"
    }
  }
};
