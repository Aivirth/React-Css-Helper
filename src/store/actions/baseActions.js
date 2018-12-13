import * as actionTypes from "./actionTypes";

export const fetchBase = () => {
  return {
    type: actionTypes.FETCH_BASE
  };
};

export const updtBaseWidth = payload => {
  return {
    type: actionTypes.UPDT_BASEWIDTH,
    payload: payload
  };
};

export const updtBaseHeight = payload => {
  return {
    type: actionTypes.UPDT_BASEHEIGHT,
    payload: payload
  };
};

export const updtBaseMargin = payload => {
  return {
    type: actionTypes.UPDT_BASEMARGIN,
    payload: payload
  };
};

export const updtBaseBgColor = payload => {
  return {
    type: actionTypes.UPDT_BASEBGCOLOR,
    payload: payload
  };
};
