import { Currency } from "@enigma-lake/zoot-game-integration-sdk";

export const multiplyAmountOptions = [
  { label: "1/2", multiplier: 0.5 },
  { label: "2x", multiplier: 2 },
];

export const buttonWidth = "5.31rem";

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
