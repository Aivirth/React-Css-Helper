import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../../UI/Input";
// import { convertStateObjToArr } from "../../../helpers/helpers";

class Base extends Component {
  inputChangeHandler = e => {
    console.log(e.target);
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
      <div>
        <h2>Base</h2>
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
              changed={this.inputChangeHandler}
              elementConfig={elementConfig}
              label={elementConfig.label}
              value={value}
            />
          );
        })}
      </div>
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

export default connect(mapStateToProps)(Base);
