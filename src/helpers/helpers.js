export const trimSpacesInTextArea = string => {
  const stringToArray = string.split(";");
  const trimmedStrings = stringToArray.map(string => string.trim());
  trimmedStrings.forEach(string => string + "\n\r");
  const cleanedString = trimmedStrings.join(";\n\r");
  return cleanedString;
};

// export const convertStateObjToArr = (
//   stylesFromStateObj = isRequired(),
//   componentProps = isRequired()
// ) => {
//   const outputArray = [];

//   for (let key in stylesFromStateObj) {
//     outputArray.push({
//       id: key,
//       config: componentProps.stylesFromStateObj[key]
//     });
//   }

//   return outputArray;
// };

const isRequired = () => {
  throw new Error("Parameter Missing");
};
