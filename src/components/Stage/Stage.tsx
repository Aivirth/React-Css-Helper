import React, { Component } from "react";

class Stage extends Component {
  state = {
    isRevealActive: false
  };

  onTabOptionClickHandler = () => {
    this.setState({ isRevealActive: true });
  };

  onRevealCloseButtonClickHandler = () => {
    this.setState({ isRevealActive: false });
  };

  render() {
    const { isRevealActive } = this.state;

    return (
      <div className="Stage">
        <div className="Stage__wrapper">
          <div className="Stage__actor">Actor</div>

          <div
            className={`Stage__reveal ${
              isRevealActive ? "Stage__reveal--active" : ""
            }`}
          >
            <div className="Stage__reveal__content">
              <textarea name="" id="" />
              <button>Get Styles</button>
            </div>

            <div className="Stage__reveal__footer">
              <button
                className="Stage__closeBtn"
                onClick={this.onRevealCloseButtonClickHandler}
              >
                CLOSE
              </button>
            </div>
          </div>

          <div className="Stage__options">
            <ul className="Stage__tabs">
              <li className="Stage__tab">
                <button
                  className="Stage__tab__link active"
                  onClick={this.onTabOptionClickHandler}
                >
                  GET STYLES
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Stage;
