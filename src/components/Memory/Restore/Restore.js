import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndoAlt } from "@fortawesome/free-solid-svg-icons";

import { restoreBase } from "../../../store/actions/baseActions";
import { restoreBorder } from "../../../store/actions/borderActions";
import { restoreBoxShadow } from "../../../store/actions/boxShadowActions";
import { restoreBorderRadius } from "../../../store/actions/borderRadiusActions";
import { restoreTransform } from "../../../store/actions/transformActions";

class Restore extends Component {
  restoreController = snapStateProperties => {
    const {
      restoreBase,
      restoreBorder,
      restoreBorderRadius,
      restoreBoxShadow,
      restoreTransform
    } = this.props;

    Object.keys(snapStateProperties).forEach(property => {
      switch (property) {
        case "base":
          restoreBase(snapStateProperties[property]);
          break;
        case "borders":
          restoreBorder(snapStateProperties[property]);
          break;
        case "boxShadow":
          restoreBoxShadow(snapStateProperties[property]);
          break;
        case "borderRadius":
          restoreBorderRadius(snapStateProperties[property]);
          break;
        case "transform":
          restoreTransform(snapStateProperties[property]);
          break;
        default:
          return null;
      }
    });
  };

  restoreSnapshot = (e, data) => {
    e.preventDefault();
    this.restoreController(data);
  };

  render() {
    const snapState = this.props.snapData.state;
    return (
      <button
        className="Snapshots__btn Snapshots__btn--load"
        onClick={e => this.restoreSnapshot(e, snapState)}
      >
        <FontAwesomeIcon icon={faUndoAlt} />
      </button>
    );
  }
}

export default connect(
  null,
  {
    restoreBase,
    restoreBorder,
    restoreBorderRadius,
    restoreBoxShadow,
    restoreTransform
  }
)(Restore);
