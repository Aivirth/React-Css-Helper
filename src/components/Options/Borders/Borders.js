import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../../UI/Input";
import Accordion from "../../UI/Accordion/Accordion";
import AccordtionItem from "../../UI/Accordion/AccordionItem/AccordionItem";

import {
  updtBorderTop,
  updtBorderBottom,
  updtBorderLeft,
  updtBorderRight
} from "../../../store/actions/borderActions";

class Borders extends Component {
  componentDidMount() {
    // console.log("Borders:", this.props);
  }

  inputChangeHandler = (e, identifier) => {
    const {
      updtBorderTop,
      updtBorderBottom,
      updtBorderLeft,
      updtBorderRight
    } = this.props;

    const storeCopy = {
      ...this.props.stylesFromState
    };

    const propertyCopy = {
      ...storeCopy[identifier]
    };

    const subPropertyCopy = {
      ...propertyCopy[e.target.dataset.target]
    };

    if (subPropertyCopy.inputType === "range") {
      subPropertyCopy.value = +e.target.value;
    } else {
      subPropertyCopy.value = e.target.value;
    }

    propertyCopy[e.target.dataset.target] = subPropertyCopy;

    switch (identifier) {
      case "top":
        updtBorderTop(propertyCopy);
        break;

      case "bottom":
        updtBorderBottom(propertyCopy);
        break;

      case "right":
        updtBorderRight(propertyCopy);
        break;

      case "left":
        updtBorderLeft(propertyCopy);
        break;

      default:
        return null;
    }
  };

  render() {
    const { stylesFromState } = this.props;

    let propertiesArray = [];

    for (let key in stylesFromState) {
      propertiesArray.push({
        id: key,
        config: this.props.stylesFromState[key]
      });
    }

    const formattedData = [];

    propertiesArray.forEach(property => {
      const newArrFormat = {
        id: property.id,
        properties: [
          property.config.style,
          property.config.color,
          property.config.width
        ]
      };

      formattedData.push(newArrFormat);
    });

    // console.log(propertiesArray);
    // console.log("Borders:", formattedData);

    return (
      <React.Fragment>
        <h2 className="Inputs__title">Borders</h2>

        <Accordion>
          {formattedData.map(border => {
            return (
              <AccordtionItem key={border.id} tabTitle={border.id}>
                {border.properties.map(property => {
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
                      changed={e => this.inputChangeHandler(e, border.id)}
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
      top: state.borders.top,
      bottom: state.borders.bottom,
      right: state.borders.right,
      left: state.borders.left
    }
  };
};

export default connect(
  mapStateToProps,
  {
    updtBorderTop,
    updtBorderBottom,
    updtBorderLeft,
    updtBorderRight
  }
)(Borders);
