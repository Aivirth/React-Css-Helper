import React, { Component } from "react";
import { connect } from "react-redux";

class Stage extends Component {
  state = {
    isRevealActive: false
  };

  componentDidMount() {
    console.log(this.props);
  }

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
              <button>Copy to Clipboard</button>
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

const mapStateToProps = state => {
  return {
    computedStylesFromState: {
      base: {
        width: state.base.width.value,
        height: state.base.height.value,
        margin: state.base.margin.value,
        backgroundColor: state.base.backgroundColor.value
      },
      borders: {
        top: {
          width: state.borders.top.width.value,
          style: state.borders.top.style.value,
          color: state.borders.top.color.value
        },
        bottom: {
          width: state.borders.bottom.width.value,
          style: state.borders.bottom.style.value,
          color: state.borders.bottom.color.value
        },
        right: {
          width: state.borders.right.width.value,
          style: state.borders.right.style.value,
          color: state.borders.right.color.value
        },
        left: {
          width: state.borders.left.width.value,
          style: state.borders.left.style.value,
          color: state.borders.left.color.value
        }
      },
      boxShadow: {
        offsetY: state.boxShadow.offsetY.value,
        offsetX: state.boxShadow.offsetX.value,
        blur: state.boxShadow.blur.value,
        spread: state.boxShadow.spread.value,
        color: state.boxShadow.color.value,
        opacity: state.boxShadow.opacity.value,
        inset: state.boxShadow.inset.value
      }
    }
  };
};

export default connect(mapStateToProps)(Stage);
