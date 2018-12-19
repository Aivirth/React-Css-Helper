import * as actionTypes from "./actionTypes";

export const updtBoxShadowOffsetY = payload => {
  return {
    type: actionTypes.UPDT_BOXSHADOWOFFSETY,
    payload: payload
  };
};

export const updtBoxShadowOffsetX = payload => {
  return {
    type: actionTypes.UPDT_BOXSHADOWOFFSETX,
    payload: payload
  };
};

export const updtBoxShadowBlur = payload => {
  return {
    type: actionTypes.UPDT_BOXSHADOWBLUR,
    payload: payload
  };
};

export const updtBoxShadowSpread = payload => {
  return {
    type: actionTypes.UPDT_BOXSHADOWSPREAD,
    payload: payload
  };
};

export const updtBoxShadowColor = payload => {
  return {
    type: actionTypes.UPDT_BOXSHADOWCOLOR,
    payload: payload
  };
};

export const updtBoxShadowOpacity = payload => {
  return {
    type: actionTypes.UPDT_BOXSHADOWOPACITY,
    payload: payload
  };
};

export const updtBoxShadowInset = payload => {
  return {
    type: actionTypes.UPDT_BOXSHADOWINSET,
    payload: payload
  };
};
