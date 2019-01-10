import * as actionTypes from "./actionTypes";

export const updtBorderRadiusTopLeft = payload => {
  return {
    type: actionTypes.UPDT_BORDERRADIUS_TOPLEFT,
    payload: payload
  };
};

export const updtBorderRadiusTopRight = payload => {
  return {
    type: actionTypes.UPDT_BORDERRADIUS_TOPRIGHT,
    payload: payload
  };
};

export const updtBorderRadiusBottomLeft = payload => {
  return {
    type: actionTypes.UPDT_BORDERRADIUS_BOTTOMLEFT,
    payload: payload
  };
};

export const updtBorderRadiusBottomRight = payload => {
  return {
    type: actionTypes.UPDT_BORDERRADIUS_BOTTOMRIGHT,
    payload: payload
  };
};

export const restoreBorderRadius = payload => {
  return {
    type: actionTypes.RESTORE_BORDERRADIUS,
    payload: payload
  };
};
