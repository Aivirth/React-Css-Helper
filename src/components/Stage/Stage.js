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

    computedTransformObj.rotateX =
      rotate.axisX.value !== 0
        ? `rotateX(${rotate.axisX.value}${rotate.axisX.measurementUnit})`
        : null;
    computedTransformObj.rotateY =
      rotate.axisY.value !== 0
        ? `rotateY(${rotate.axisY.value}${rotate.axisY.measurementUnit})`
        : null;
    computedTransformObj.rotateZ =
      rotate.axisZ.value !== 0
        ? `rotateZ(${rotate.axisZ.value}${rotate.axisZ.measurementUnit})`
        : null;

    computedTransformObj.scaleX =
      scale.axisX.value !== 0
        ? `scaleX(${scale.axisX.value}${scale.axisX.measurementUnit})`
        : null;
    computedTransformObj.scaleY =
      scale.axisY.value !== 0
        ? `scaleY(${scale.axisY.value}${scale.axisY.measurementUnit})`
        : null;
    computedTransformObj.scaleZ =
      scale.axisZ.value !== 0
        ? `scaleZ(${scale.axisZ.value}${scale.axisZ.measurementUnit})`
        : null;

    computedTransformObj.translateX =
      translate.axisX.value !== 0
        ? `translateX(${translate.axisX.value}${
            translate.axisX.measurementUnit
          })`
        : null;
    computedTransformObj.translateY =
      translate.axisY.value !== 0
        ? `translateY(${translate.axisY.value}${
            translate.axisY.measurementUnit
          })`
        : null;
    computedTransformObj.translateZ =
      translate.axisZ.value !== 0
        ? `translateZ(${translate.axisZ.value}${
            translate.axisZ.measurementUnit
          })`
        : null;

    computedTransformObj.skewX =
      skew.axisX.value !== 0
        ? `skewX(${skew.axisX.value}${skew.axisX.measurementUnit})`
        : null;
    computedTransformObj.skewY =
      skew.axisY.value !== 0
        ? `skewY(${skew.axisY.value}${skew.axisY.measurementUnit})`
        : null;

    computedTransformObj.perspective =
      perspective.value !== 0
        ? `perspective(${perspective.value}${perspective.measurementUnit})`
        : null;

    const transformString = Object.values(computedTransformObj)
      .filter(property => property !== null)
      .join(" ");

    return transformString;
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
      borderRadius,
      transform
    } = this.props.computedStylesFromState;

    const boxShadowInset = boxShadow.inset ? "inset" : "";
    const transformString = this.combineTransformProperty(transform);

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

    transform: ${transformString}
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

    const boxShadowInset = boxShadow.inset ? "inset" : "";
    const transformString = this.combineTransformProperty(transform);

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
      }px`,

      transform: transformString.length > 0 ? transformString : "none"
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
          axisX: {
            value: state.transform.rotate.axes.axisX.value,
            measurementUnit:
              state.transform.rotate.axes.axisX.elementConfig.measurementUnit
          },
          axisY: {
            value: state.transform.rotate.axes.axisY.value,
            measurementUnit:
              state.transform.rotate.axes.axisY.elementConfig.measurementUnit
          },
          axisZ: {
            value: state.transform.rotate.axes.axisZ.value,
            measurementUnit:
              state.transform.rotate.axes.axisZ.elementConfig.measurementUnit
          }
        },
        translate: {
          axisX: {
            value: state.transform.translate.axes.axisX.value,
            measurementUnit:
              state.transform.translate.axes.axisX.elementConfig.measurementUnit
          },
          axisY: {
            value: state.transform.translate.axes.axisY.value,
            measurementUnit:
              state.transform.translate.axes.axisY.elementConfig.measurementUnit
          },
          axisZ: {
            value: state.transform.translate.axes.axisZ.value,
            measurementUnit:
              state.transform.translate.axes.axisZ.elementConfig.measurementUnit
          }
        },
        scale: {
          axisX: {
            value: state.transform.scale.axes.axisX.value,
            measurementUnit:
              state.transform.scale.axes.axisX.elementConfig.measurementUnit
          },
          axisY: {
            value: state.transform.scale.axes.axisY.value,
            measurementUnit:
              state.transform.scale.axes.axisY.elementConfig.measurementUnit
          },
          axisZ: {
            value: state.transform.scale.axes.axisZ.value,
            measurementUnit:
              state.transform.scale.axes.axisZ.elementConfig.measurementUnit
          }
        },
        skew: {
          axisX: {
            value: state.transform.skew.axes.axisX.value,
            measurementUnit:
              state.transform.skew.axes.axisX.elementConfig.measurementUnit
          },
          axisY: {
            value: state.transform.skew.axes.axisY.value,
            measurementUnit:
              state.transform.skew.axes.axisY.elementConfig.measurementUnit
          }
        },
        perspective: {
          value: state.transform.perspective.value,
          measurementUnit:
            state.transform.perspective.elementConfig.measurementUnit
        }
      }
    }
  };
};

export default connect(mapStateToProps)(Stage);
