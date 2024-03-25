export const formatMultiplier = (timePassedInMs, prefixed = false) => {
  if (prefixed) {
    return `x${format2Decimals(timePassedInMs)}`;
  }
  return `${format2Decimals(timePassedInMs)}x`;
};

export const format2Decimals = (x) => parseFloat(x.toString()).toFixed(2);
