import React, { Component } from "react";
import { connect } from "react-redux";
import { createTimeStamp } from "../../../helpers/helpers";
import uuid from "uuid/v4";

class Save extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  saveCurrentStateToLocalStorage = e => {
    e.preventDefault();

    const newStateSnapshot = {
      date: createTimeStamp(),
      state: { ...this.props.currentState }
    };

    const formattedSnapshot = JSON.stringify(newStateSnapshot);
    let savedData = localStorage.getItem("aivirth-css-helper-snaps");

    savedData = savedData ? JSON.parse(savedData) : [];
    savedData.push({
      id: uuid(),
      data: formattedSnapshot
    });

    localStorage.setItem("aivirth-css-helper-snaps", JSON.stringify(savedData));
  };

  render() {
    const { cssClasses } = this.props;
    return (
      <button
        className={`${cssClasses} saveToLS`}
        onClick={this.saveCurrentStateToLocalStorage}
      >
        Save
      </button>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentState: {
      base: state.base,
      borders: state.borders,
      boxShadow: state.boxShadow,
      borderRadius: state.borderRadius
    }
  };
};

export default connect(mapStateToProps)(Save);
