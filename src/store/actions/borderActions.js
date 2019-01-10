import * as actionTypes from "./actionTypes";

export const updtBorderTop = payload => {
  return {
    type: actionTypes.UPDT_BORDERTOP,
    payload: payload
  };
};

export const updtBorderBottom = payload => {
  return {
    type: actionTypes.UPDT_BORDERBOTTOM,
    payload: payload
  };
};

export const updtBorderRight = payload => {
  return {
    type: actionTypes.UPDT_BORDERRIGHT,
    payload: payload
  };
};

export const updtBorderLeft = payload => {
  return {
    type: actionTypes.UPDT_BORDERLEFT,
    payload: payload
  };
};

export const restoreBorder = payload => {
  return {
    type: actionTypes.RESTORE_BORDER,
    payload: payload
  };
};
