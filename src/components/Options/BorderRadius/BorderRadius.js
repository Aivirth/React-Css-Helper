import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../../UI/Input";
import Accordion from "../../UI/Accordion/Accordion";
import AccordtionItem from "../../UI/Accordion/AccordionItem/AccordionItem";

import {
  updtBorderRadiusBottomLeft,
  updtBorderRadiusBottomRight,
  updtBorderRadiusTopLeft,
  updtBorderRadiusTopRight
} from "../../../store/actions/borderRadiusActions";

class BorderRadius extends Component {
  // componentDidMount() {
  //   console.log(this.props);
  // }

  inputChangeHandler = (e, identifier) => {
    const {
      updtBorderRadiusBottomLeft,
      updtBorderRadiusBottomRight,
      updtBorderRadiusTopLeft,
      updtBorderRadiusTopRight
    } = this.props;

    const storeCopy = {
      ...this.props.stylesFromState
    };

    const propertyCopy = {
      ...storeCopy[identifier]
    };

    const subPropertyCopy = {
      ...propertyCopy[e.target.dataset.radius]
    };

    if (subPropertyCopy.inputType === "range") {
      subPropertyCopy.value = +e.target.value;
    } else {
      subPropertyCopy.value = e.target.value;
    }

    propertyCopy[e.target.dataset.radius] = subPropertyCopy;

    switch (identifier) {
      case "topLeft":
        updtBorderRadiusTopLeft(propertyCopy);
        break;

      case "topRight":
        updtBorderRadiusTopRight(propertyCopy);
        break;

      case "bottomLeft":
        updtBorderRadiusBottomLeft(propertyCopy);
        break;

      case "bottomRight":
        updtBorderRadiusBottomRight(propertyCopy);
        break;

      default:
        return null;
    }
  };

  render() {
    const { stylesFromState } = this.props;

    let radiiArray = [];

    for (let key in stylesFromState) {
      radiiArray.push({
        id: key,
        config: this.props.stylesFromState[key]
      });
    }

    const formattedData = [];

    radiiArray.forEach(radius => {
      const newArrFormat = {
        id: radius.id,
        name: radius.config.name,
        radii: [radius.config.radiusX, radius.config.radiusY]
      };

      formattedData.push(newArrFormat);
    });

    // console.log(radiiArray);
    // console.log("BorderRadius:", formattedData);

    return (
      <React.Fragment>
        <h2 className="Inputs__title">Border Radius</h2>

        <Accordion>
          {formattedData.map(radius => {
            return (
              <AccordtionItem key={radius.id} tabTitle={radius.name}>
                {radius.radii.map(property => {
                  const {
                    htmlProperties,
                    elementConfig,
                    inputType,
                    value,
                    dataSets
                  } = property;

                  return (
                    <Input
                      key={htmlProperties.name}
                      inputType={inputType}
                      htmlProperties={htmlProperties}
                      changed={e => this.inputChangeHandler(e, radius.id)}
                      elementConfig={elementConfig}
                      label={elementConfig.label}
                      value={value}
                      dataSets={dataSets}
                    />
                  );
                })}
              </AccordtionItem>
            );
          })}
        </Accordion>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    stylesFromState: {
      topLeft: state.borderRadius.topLeft,
      topRight: state.borderRadius.topRight,
      bottomLeft: state.borderRadius.bottomLeft,
      bottomRight: state.borderRadius.bottomRight
    }
  };
};

export default connect(
  mapStateToProps,
  {
    updtBorderRadiusBottomLeft,
    updtBorderRadiusBottomRight,
    updtBorderRadiusTopLeft,
    updtBorderRadiusTopRight
  }
)(BorderRadius);
