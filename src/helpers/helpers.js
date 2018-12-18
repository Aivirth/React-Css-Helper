export const trimSpacesInTextArea = string => {
  const stringToArray = string.split(";");
  const trimmedStrings = stringToArray.map(string => string.trim());
  trimmedStrings.forEach(string => string + "\n\r");
  const cleanedString = trimmedStrings.join(";\n\r");
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
