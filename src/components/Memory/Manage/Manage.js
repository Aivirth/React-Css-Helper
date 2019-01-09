import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndoAlt, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default class Manage extends Component {
  state = {
    snapShots: null
  };

  componentDidMount() {
    this.loadLocalStorage();
  }

  loadLocalStorage = () => {
    const data = localStorage.getItem("aivirth-css-helper-snaps");
    if (data) {
      this.setState({
        snapShots: JSON.parse(data)
      });
    }
  };

  render() {
    let snapShotList = null;

    if (this.state.snapShots) {
      snapShotList = this.state.snapShots.map(snap => {
        const snapData = JSON.parse(snap.data);
        return (
          <li className="Snapshots__item" key={snap.id}>
            <div className="Snapshots__details">
              <p className="Snapshots__date">Created : {snapData.date}</p>
              <p className="Snapshots__id">
                <small>id : {snap.id}</small>
              </p>
            </div>
            <div className="Snapshots__actions">
              <button className="Snapshots__btn Snapshots__btn--load">
                <FontAwesomeIcon icon={faUndoAlt} />
              </button>
              <button className="Snapshots__btn Snapshots__btn--delete">
                <FontAwesomeIcon icon={faTimesCircle} />
              </button>
            </div>
          </li>
        );
      });
    }

    const listOutput = snapShotList ? snapShotList : "waiting...";

    return (
      <div className="Snapshots">
        <h2 className="Inputs__title Snapshots__title">Manage Snapshots</h2>
        <ul className="Snapshots__list">{listOutput}</ul>
      </div>
    );
  }
}
