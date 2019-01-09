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

export const rawHexToRgba = (rgbaArr = isRequired(), opacity = 1) => {
  const rgba = rgbaArr.concat(opacity).join(", ");
  return `rgba(${rgba})`;
};

export const convertStringToBoolean = value => {
  if (value && typeof value === "string") {
    if (value.toLowerCase() === "true") return true;
    if (value.toLowerCase() === "false") return false;
  }
  return value;
};

export const createTimeStamp = () => {
  // Create a date object with the current time
  const now = new Date();

  // Create an array with the current month, day and time
  const date = [now.getMonth() + 1, now.getDate(), now.getFullYear()];

  // Create an array with the current hour, minute and second
  const time = [now.getHours(), now.getMinutes(), now.getSeconds()];

  // Determine AM or PM suffix based on the hour
  const suffix = time[0] < 12 ? "AM" : "PM";

  // Convert hour from military time
  time[0] = time[0] < 12 ? time[0] : time[0] - 12;

  // If hour is 0, set it to 12
  time[0] = time[0] || 12;

  // If seconds and minutes are less than 10, add a zero
  for (var i = 1; i < 3; i++) {
    if (time[i] < 10) {
      time[i] = "0" + time[i];
    }
  }

  // Return the formatted string
  return date.join("/") + " " + time.join(":") + " " + suffix;
};
