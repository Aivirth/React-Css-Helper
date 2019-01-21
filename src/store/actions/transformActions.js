import * as actionTypes from "./actionTypes";

export const updtTranslate = payload => {
  return {
    type: actionTypes.UPDT_TRANSLATE,
    payload: payload
  };
};

export const updtRotate = payload => {
  return {
    type: actionTypes.UPDT_ROTATE,
    payload: payload
  };
};

export const updtSkew = payload => {
  return {
    type: actionTypes.UPDT_SKEW,
    payload: payload
  };
};

export const updtScale = payload => {
  return {
    type: actionTypes.UPDT_SCALE,
    payload: payload
  };
};

export const updtPerspective = payload => {
  return {
    type: actionTypes.UPDT_PERSPECTIVE,
    payload: payload
  };
};

export const restoreTransform = payload => {
  return {
    type: actionTypes.RESTORE_TRANSFORM,
    payload: payload
  };
};
