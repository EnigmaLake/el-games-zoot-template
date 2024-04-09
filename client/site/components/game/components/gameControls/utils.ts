import { Currency } from "@enigma-lake/zoot-game-integration-sdk";

export const multiplyAmountOptions = [
  { label: "1/2", multiplier: 0.5 },
  { label: "2x", multiplier: 2 },
];

export const roundedButtonWidth = "43px";
export const buttonMaxWidth = "5.31rem";
export const buttonWidth = {
  xxs: "4rem",
  xs: "4rem",
  sm: "4rem",
  "2sm": "4rem",
  md: buttonMaxWidth,
  base: buttonMaxWidth,
  lg: buttonMaxWidth,
  xl: buttonMaxWidth,
};

export const minimumValue = 0.5;
export const maximumValue = {
  sweeps: 1000,
  gold: 50_000,
};

export const getDefaultPlayValues = (currency: Currency) =>
  ({
    [Currency.GOLD]: [100, 1000, 10_000, 50_000],
    [Currency.SWEEPS]: [0.5, 1, 5, 10],
  }[currency]);
