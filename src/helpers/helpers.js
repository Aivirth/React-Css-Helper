export const trimSpacesInTextArea = string => {
  const stringToArray = string.split(";");
  const trimmedStrings = stringToArray.map(string => string.trim());
  trimmedStrings.forEach(string => string + "\n\r");
  const cleanedString = trimmedStrings.join(";\n\r");
  return cleanedString;
};
