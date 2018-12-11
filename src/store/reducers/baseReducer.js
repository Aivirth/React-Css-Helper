const initialState = {
  width: {
    value: 200,
    inputType: "range",
    elementConfig: {
      label: "Width"
    },
    htmlProperties: {
      type: "range",
      step: "1",
      min: 0,
      max: 500,
      name: "width"
    }
  },

  height: {
    value: 200,
    inputType: "range",
    elementConfig: {
      label: "Height"
    },
    htmlProperties: {
      type: "range",
      step: "1",
      min: 0,
      max: 500,
      name: "height"
    }
  },

  margin: {
    value: "auto",
    inputType: "",
    elementConfig: {},
    htmlProperties: {}
  },

  backgroundColor: {
    value: "#00bcd4",
    inputType: "color",
    elementConfig: {
      label: "Background Color"
    },
    htmlProperties: {
      type: "color",
      name: "backgroundColor"
    }
  }
};
