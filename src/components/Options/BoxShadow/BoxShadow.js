import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../../UI/Input";
import {
  updtBoxShadowOffsetY,
  updtBoxShadowOffsetX,
  updtBoxShadowBlur,
  updtBoxShadowSpread,
  updtBoxShadowColor,
  updtBoxShadowOpacity,
  updtBoxShadowInset
} from "../../../store/actions/boxShadowActions";

class BoxShadow extends Component {
  inputChangeHandler = (e, identifier) => {
    const {
      updtBoxShadowOffsetY,
      updtBoxShadowOffsetX,
      updtBoxShadowBlur,
      updtBoxShadowSpread,
      updtBoxShadowColor,
      updtBoxShadowOpacity,
      updtBoxShadowInset
    } = this.props;

    const storeCopy = {
      ...this.props.stylesFromState
    };
    const propertyCopy = {
      ...storeCopy[identifier]
    };

    if (propertyCopy.inputType === "range") {
      propertyCopy.value = +e.target.value;
    } else {
      propertyCopy.value = e.target.value;
    }

    if (
      e.target.dataset.switch === "isSwitch" &&
      e.target.type === "checkbox"
    ) {
      propertyCopy.value = e.target.checked;
    }

    switch (identifier) {
      case "offsetY":
        updtBoxShadowOffsetY(propertyCopy);
        break;

      case "offsetX":
        updtBoxShadowOffsetX(propertyCopy);
        break;

      case "blur":
        updtBoxShadowBlur(propertyCopy);
        break;
      case "spread":
        updtBoxShadowSpread(propertyCopy);
        break;
      case "color":
        updtBoxShadowColor(propertyCopy);
        break;
      case "opacity":
        updtBoxShadowOpacity(propertyCopy);
        break;
      case "inset":
        updtBoxShadowInset(propertyCopy);
        break;

      default:
        return null;
    }
  };

  render() {
    const { stylesFromState } = this.props;

    let stylesArray = [];

    for (let key in stylesFromState) {
      stylesArray.push({
        id: key,
        config: this.props.stylesFromState[key]
      });
    }

    return (
      <React.Fragment>
        <h2 className="Inputs__title">Box Shadow</h2>
        {stylesArray.map(style => {
          const {
            htmlProperties,
            elementConfig,
            inputType,
            value,
            dataSets
          } = style.config;

          return (
            <Input
              key={style.id}
              inputType={inputType}
              htmlProperties={htmlProperties}
              changed={e => this.inputChangeHandler(e, style.id)}
              elementConfig={elementConfig}
              label={elementConfig.label}
              value={value}
              dataSets={dataSets}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    stylesFromState: {
      offsetY: state.boxShadow.offsetY,
      offsetX: state.boxShadow.offsetX,
      blur: state.boxShadow.blur,
      spread: state.boxShadow.spread,
      color: state.boxShadow.color,
      opacity: state.boxShadow.opacity,
      inset: state.boxShadow.inset
    }
  };
};

export default connect(
  mapStateToProps,
  {
    updtBoxShadowOffsetY,
    updtBoxShadowOffsetX,
    updtBoxShadowBlur,
    updtBoxShadowSpread,
    updtBoxShadowColor,
    updtBoxShadowOpacity,
    updtBoxShadowInset
  }
)(BoxShadow);
