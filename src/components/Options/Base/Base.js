import React, { Component } from "react";
import { connect } from "react-redux";

class Base extends Component {
  componentDidMount() {
    // console.log(this.props);
  }

  render() {
    return <div>Base</div>;
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
