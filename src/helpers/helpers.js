export const trimSpacesInTextArea = string => {
  const stringToArray = string.split(";");
  const trimmedStrings = stringToArray.map(string => string.trim());
  trimmedStrings.forEach(string => string + "\r");
  const cleanedString = trimmedStrings.join(";\r");
  return cleanedString;
};

const isRequired = () => {
  throw new Error("Parameter Missing");
};

export const hexToRgb = hex => {
  let r = null;
  // long version
  r = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (r) {
    return r.slice(1, 4).map(x => parseInt(x, 16));
  }

  // short version
  r = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
  if (r) {
    return r.slice(1, 4).map(x => 0x11 * parseInt(x, 16));
  }

  return r;
};

export const convertStringToBoolean = value => {
  if (value && typeof value === "string") {
    if (value.toLowerCase() === "true") return true;
    if (value.toLowerCase() === "false") return false;
  }
  return value;
};
