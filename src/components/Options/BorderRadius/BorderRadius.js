import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../../UI/Input";
import Accordion from "../../UI/Accordion/Accordion";
import AccordtionItem from "../../UI/Accordion/AccordionItem/AccordionItem";

class BorderRadius extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  inputChangeHandler = (e, identifier) => {
    console.log(e.target.value);
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
        radii: [radius.config.radiusX, radius.config.radiusY]
      };

      formattedData.push(newArrFormat);
    });

    console.log(radiiArray);
    console.log("BorderRadius:", formattedData);

    return (
      <React.Fragment>
        <h2 className="Inputs__title">Border Radius</h2>

        <Accordion>
          {formattedData.map(radius => {
            return (
              <AccordtionItem key={radius.id} tabTitle={radius.id}>
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

export default connect(mapStateToProps)(BorderRadius);
