import React, { Component } from "react";
import Download from "../Download/Download";
import Restore from "../Restore/Restore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default class Manage extends Component {
  state = {
    snapShots: []
  };

  componentWillMount() {
    this.loadLocalStorage();
  }

  loadLocalStorage = () => {
    const data = localStorage.getItem("aivirth-css-helper-snaps");
    if (data) {
      this.setState({
        snapShots: this.state.snapShots.concat(JSON.parse(data))
      });
    }
  };

  deleteSnapshotItem = (e, id) => {
    e.preventDefault();
    const snapShotsCopy = [...this.state.snapShots];
    const updatedSnapshotsList = snapShotsCopy.filter(snap => snap.id !== id);

    localStorage.setItem(
      "aivirth-css-helper-snaps",
      JSON.stringify(updatedSnapshotsList)
    );

    this.setState({
      snapShots: updatedSnapshotsList
    });
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
              <Restore snapId={snap.id} snapData={snapData} />

              <Download
                data={JSON.stringify(snap)}
                fileName={`${snap.id}.json`}
              />
              <button
                className="Snapshots__btn Snapshots__btn--delete"
                onClick={e => this.deleteSnapshotItem(e, snap.id)}
              >
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
        <ul className="Snapshots__list">{listOutput.reverse()}</ul>
      </div>
    );
  }
}
