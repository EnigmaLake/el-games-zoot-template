export const formatMultiplier = (timePassedInMs: number, prefixed = false) => {
  if (prefixed) {
    return `x${format2Decimals(timePassedInMs)}`;
  }
  return `${format2Decimals(timePassedInMs)}x`;
};

export const format2Decimals = (x: number) =>
  parseFloat(x.toString()).toFixed(2);

export const formatBigNumber = (price: number) => price.toLocaleString("en-GB");
