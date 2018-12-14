import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../../UI/Input";

class Borders extends Component {
  componentDidMount() {
    console.log("Borders:", this.props);
  }

  inputChangeHandler = (e, identifier) => {
    console.log(e, identifier);
  };

  render() {
    const { stylesFromState } = this.props;

    // console.log("Borders", stylesFromState);

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
    // console.log(formattedData);

    return (
      <React.Fragment>
        <h2 className="Inputs__title">Borders</h2>

        {formattedData.map(border => {
          return (
            <React.Fragment key={border.id}>
              <h3>{border.id}</h3>
              {border.properties.map(property => {
                const {
                  htmlProperties,
                  elementConfig,
                  inputType,
                  value
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
                  />
                );
              })}
            </React.Fragment>
          );
        })}
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

export default connect(mapStateToProps)(Borders);
