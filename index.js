const findMatching = (driverNamesArr, targetName) => {
  return driverNamesArr.filter(driverName => driverName.toLowerCase() === targetName.toLowerCase());
};

const fuzzyMatch = (driverNamesArr, targetBeginningLetters) => {
  return driverNamesArr.filter(driverName => driverName.indexOf(targetBeginningLetters) === 0);
};

const matchName = (driverObjectArr, targetName) => {
  return driverObjectArr.filter(driverObject => driverObject.name === targetName);
};