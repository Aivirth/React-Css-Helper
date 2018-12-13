import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../../UI/Input";
// import { convertStateObjToArr } from "../../../helpers/helpers";

import {
  updtBaseWidth,
  updtBaseHeight,
  updtBaseBgColor
} from "../../../store/actions/baseActions";

class Base extends Component {
  inputChangeHandler = (e, identifier) => {
    const { updtBaseWidth, updtBaseHeight, updtBaseBgColor } = this.props;
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
    // storeCopy[identifier] = propertyCopy;

    switch (identifier) {
      case "width":
        updtBaseWidth(propertyCopy);
        break;

      case "height":
        updtBaseHeight(propertyCopy);

        break;
      default:
        return null;
    }
  };

  componentDidMount() {
    console.log("Base:", this.props);
  }

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
        <h2 className="Inputs__title">Base</h2>
        {stylesArray.map(style => {
          const {
            htmlProperties,
            elementConfig,
            inputType,
            value
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
      width: state.base.width,
      height: state.base.height,
      margin: state.base.margin,
      backgroundColor: state.base.backgroundColor
    }
  };
};

export default connect(
  mapStateToProps,
  { updtBaseWidth, updtBaseHeight, updtBaseBgColor }
)(Base);
