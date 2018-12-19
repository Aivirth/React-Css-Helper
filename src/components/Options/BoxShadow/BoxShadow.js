import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../../UI/Input";

class BoxShadow extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  inputChangeHandler = (e, identifier) => {
    console.log(e.target.value);
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

export default connect(mapStateToProps)(BoxShadow);
