import React, { Component } from "react";
import { connect } from "react-redux";

import Select from "../../UI/Select/Select";

class Base extends Component {
  componentDidMount() {
    // console.log(this.props);
  }

  render() {
    return (
      <div>
        <h2>Base</h2>
        <Select />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    width: state.base.width,
    height: state.base.height,
    margin: state.base.margin,
    backgroundColor: state.base.backgroundColor
  };
};

export default connect(mapStateToProps)(Base);
