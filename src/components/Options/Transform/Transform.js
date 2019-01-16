import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../../UI/Input";
import Accordion from "../../UI/Accordion/Accordion";
import AccordionItem from "../../UI/Accordion/AccordionItem/AccordionItem";
import { isObjectEmpty } from "../../../helpers/helpers";

import {
  updtPerspective,
  updtRotate,
  updtScale,
  updtSkew,
  updtTranslate
} from "../../../store/actions/transformActions";

class Transform extends Component {
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
      const axesCopy = { ...property.config.axes };

      if (!isObjectEmpty(axesCopy)) {
        const formattedAxesAsArr = Object.keys(axesCopy).map(key => ({
          direction: key,
          options: axesCopy[key]
        }));

        const newArrFormat = {
          id: property.id,
          name: property.config.name,
          axes: formattedAxesAsArr,
          isActive: property.config.isActive
        };
        formattedData.push(newArrFormat);
      }
    });

    let accordionAxisPropertiesOutput = formattedData.map(element => {
      return (
        <AccordionItem key={element.id} tabTitle={element.name}>
          {element.axes
            ? element.axes.map(property => {
                const {
                  htmlProperties,
                  elementConfig,
                  inputType,
                  value,
                  dataSets
                } = property.options;

                return (
                  <Input
                    key={htmlProperties.name}
                    inputType={inputType}
                    htmlProperties={htmlProperties}
                    changed={e => this.inputChangeHandler(e, element.id)}
                    elementConfig={elementConfig}
                    label={elementConfig.label}
                    value={value}
                    dataSets={dataSets}
                  />
                );
              })
            : null}
        </AccordionItem>
      );
    });

    const accordionNormalProperties = propertiesArray.filter(
      element => !element.config.axes
    );

    const accordionNormalPropertiesOutput = accordionNormalProperties.map(
      element => {
        const {
          htmlProperties,
          elementConfig,
          inputType,
          value,
          dataSets,
          name
        } = element.config;

        return (
          <AccordionItem key={element.id} tabTitle={name}>
            <Input
              key={htmlProperties.name}
              inputType={inputType}
              htmlProperties={htmlProperties}
              changed={e => this.inputChangeHandler(e, element.id)}
              elementConfig={elementConfig}
              label={elementConfig.label}
              value={value}
              dataSets={dataSets}
            />
          </AccordionItem>
        );
      }
    );

    return (
      <React.Fragment>
        <h2 className="Inputs__title">Transforms</h2>

        {
          <Accordion>
            {accordionAxisPropertiesOutput.concat(
              accordionNormalPropertiesOutput
            )}
          </Accordion>
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    stylesFromState: {
      rotate: state.transform.rotate,
      scale: state.transform.scale,
      translate: state.transform.translate,
      perspective: state.transform.perspective,
      skew: state.transform.skew
    }
  };
};

export default connect(
  mapStateToProps,
  {
    updtPerspective,
    updtRotate,
    updtScale,
    updtSkew,
    updtTranslate
  }
)(Transform);
