import React, { Component } from "react";
import { connect } from "react-redux";
import Actor from "./Actor/Actor";
import Spectator from "./Spectator/Spectator";
import { hexToRgb, rawHexToRgba } from "../../helpers/helpers";

class Stage extends Component {
  state = {
    isRevealActive: false
  };

  componentDidMount() {
    console.log("Stage:", this.props);
  }

  combineTransformProperty = transformObj => {
    const { rotate, translate, scale, perspective, skew } = transformObj;

    const computedTransformObj = {};

    computedTransformObj.rotateX = rotate.axisX !== 0 ? rotate.axisX : null;
    computedTransformObj.rotateY = rotate.axisY !== 0 ? rotate.axisY : null;
    computedTransformObj.rotateZ = rotate.axisZ !== 0 ? rotate.axisZ : null;

    computedTransformObj.skewX = skew.axisX !== 0 ? skew.axisX : null;
    computedTransformObj.skewY = skew.axisY !== 0 ? skew.axisY : null;
    computedTransformObj.skewZ = skew.axisZ !== 0 ? skew.axisZ : null;

    computedTransformObj.translateX =
      translate.axisX !== 0 ? translate.axisX : null;
    computedTransformObj.translateY =
      translate.axisY !== 0 ? translate.axisY : null;
    computedTransformObj.translateZ =
      translate.axisZ !== 0 ? translate.axisZ : null;

    computedTransformObj.scaleX = scale.axisX !== 0 ? scale.axisX : null;
    computedTransformObj.scaleY = scale.axisY !== 0 ? scale.axisY : null;
    computedTransformObj.scaleZ = scale.axisZ !== 0 ? scale.axisZ : null;

    computedTransformObj.perspective = perspective !== 0 ? perspective : null;

    console.log(computedTransformObj);
  };

  onTabOptionClickHandler = () => {
    this.setState({ isRevealActive: true });
  };

  onRevealCloseButtonClickHandler = () => {
    this.setState({ isRevealActive: false });
  };

  formatSpectatorDataFromStore = () => {
    const {
      base,
      borders,
      boxShadow,
      borderRadius
    } = this.props.computedStylesFromState;

    const boxShadowInset = boxShadow.inset ? "inset" : "";

    return `
    width: ${base.width}px; 
    height: ${base.height}px; 
    margin: ${base.margin};
    background-color: ${base.backgroundColor}; 
    border-top: ${borders.top.width}px ${borders.top.style} ${
      borders.top.color
    };
    border-bottom: ${borders.bottom.width}px ${borders.bottom.style} ${
      borders.bottom.color
    };
    border-right: ${borders.right.width}px ${borders.right.style} ${
      borders.right.color
    };
    border-left: ${borders.left.width}px ${borders.left.style} ${
      borders.left.color
    }; 
    box-shadow: ${boxShadow.offsetY}px ${boxShadow.offsetX}px ${
      boxShadow.blur
    }px ${boxShadow.spread}px ${rawHexToRgba(
      hexToRgb(boxShadow.color),
      boxShadow.opacity
    )} ${boxShadowInset};    
    
    border-top-right-radius: ${borderRadius.topRight.radiusX}px ${
      borderRadius.topRight.radiusY
    }px;

    border-top-left-radius: ${borderRadius.topLeft.radiusX}px ${
      borderRadius.topLeft.radiusY
    }px;

    border-bottom-left-radius: ${borderRadius.bottomLeft.radiusX}px ${
      borderRadius.bottomLeft.radiusY
    }px;

    border-bottom-right-radius: ${borderRadius.bottomRight.radiusX}px ${
      borderRadius.bottomRight.radiusY
    }px;
    `;
  };

  formatActorStylesFromStore = () => {
    const {
      base,
      borders,
      boxShadow,
      borderRadius,
      transform
    } = this.props.computedStylesFromState;

    this.combineTransformProperty(transform);

    const boxShadowInset = boxShadow.inset ? "inset" : "";

    return {
      width: `${base.width}px`,
      height: `${base.height}px`,
      margin: base.margin,
      backgroundColor: base.backgroundColor,

      borderTop: `${borders.top.width}px ${borders.top.style} ${
        borders.top.color
      }`,
      borderBottom: `${borders.bottom.width}px ${borders.bottom.style} ${
        borders.bottom.color
      }`,
      borderRight: `${borders.right.width}px ${borders.right.style} ${
        borders.right.color
      }`,
      borderLeft: `${borders.left.width}px ${borders.left.style} ${
        borders.left.color
      }`,

      boxShadow: `${boxShadow.offsetX}px ${boxShadow.offsetY}px ${
        boxShadow.blur
      }px ${boxShadow.spread}px ${rawHexToRgba(
        hexToRgb(boxShadow.color),
        boxShadow.opacity
      )} ${boxShadowInset}`,

      borderTopRightRadius: `${borderRadius.topRight.radiusX}px ${
        borderRadius.topRight.radiusY
      }px`,

      borderTopLeftRadius: `${borderRadius.topLeft.radiusX}px ${
        borderRadius.topLeft.radiusY
      }px`,

      borderBottomLeftRadius: `${borderRadius.bottomLeft.radiusX}px ${
        borderRadius.bottomLeft.radiusY
      }px`,

      borderBottomRightRadius: `${borderRadius.bottomRight.radiusX}px ${
        borderRadius.bottomRight.radiusY
      }px`
    };
  };

  render() {
    const { isRevealActive } = this.state;

    return (
      <div className="Stage">
        <div className="Stage__wrapper">
          <div className="Stage__actor">
            <Actor styles={this.formatActorStylesFromStore()} />
          </div>

          <div
            className={`Stage__reveal ${
              isRevealActive ? "Stage__reveal--active" : ""
            }`}
          >
            {isRevealActive ? (
              <Spectator styles={this.formatSpectatorDataFromStore()} />
            ) : null}
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
      },
      borderRadius: {
        topLeft: {
          radiusX: state.borderRadius.topLeft.radiusX.value,
          radiusY: state.borderRadius.topLeft.radiusY.value
        },
        topRight: {
          radiusX: state.borderRadius.topRight.radiusX.value,
          radiusY: state.borderRadius.topRight.radiusY.value
        },
        bottomLeft: {
          radiusX: state.borderRadius.bottomLeft.radiusX.value,
          radiusY: state.borderRadius.bottomLeft.radiusY.value
        },
        bottomRight: {
          radiusX: state.borderRadius.bottomRight.radiusX.value,
          radiusY: state.borderRadius.bottomRight.radiusY.value
        }
      },
      transform: {
        rotate: {
          axisX: state.transform.rotate.axes.axisX.value,
          axisY: state.transform.rotate.axes.axisY.value,
          axisZ: state.transform.rotate.axes.axisZ.value
        },
        translate: {
          axisX: state.transform.translate.axes.axisX.value,
          axisY: state.transform.translate.axes.axisY.value,
          axisZ: state.transform.translate.axes.axisZ.value
        },
        scale: {
          axisX: state.transform.scale.axes.axisX.value,
          axisY: state.transform.scale.axes.axisY.value,
          axisZ: state.transform.scale.axes.axisZ.value
        },
        skew: {
          axisX: state.transform.skew.axes.axisX.value,
          axisY: state.transform.skew.axes.axisY.value,
          axisZ: state.transform.skew.axes.axisZ.value
        },
        perspective: state.transform.perspective.value
      }
    }
  };
};

export default connect(mapStateToProps)(Stage);
