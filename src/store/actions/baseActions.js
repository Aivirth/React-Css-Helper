import * as actionTypes from "./actionTypes";

export const fetchBase = () => {
  return {
    type: actionTypes.FETCH_BASE
  };
};

export const updtBase = payload => {
  return {
    type: actionTypes.UPDT_BASE,
    payload: payload
  };
};
