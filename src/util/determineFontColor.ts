export const determineFontColor = (numVal: number) => {
  if (Math.sign(numVal) === -1) {
    return "red";
  } else if (Math.sign(numVal) === 1) {
    return "green";
  }
  return "black";
};
