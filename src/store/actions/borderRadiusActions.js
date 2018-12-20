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
