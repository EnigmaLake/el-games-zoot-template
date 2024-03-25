// THESE ARE DEPRECATED AND DO NOT MATCH THE NEW DESIGN SYSTEM,
// KEEP THEM ONLY FOR BACKWARDS COMPATIBILITY.
// REMOVE WHEN THE ENTIRE SITE USES THE DESIGN SYSTEM
const DEPRECATED = {
  0.25: "0.0625rem", // 1px
  0.75: "0.1875rem", // 3px
  1.25: "0.3125rem", // 6px
  1.5: "0.375rem",
  1.75: "0.4375rem", // 7px
  2.25: "0.5625rem", // 9px
  2.5: "0.625rem", // 10px
  2.75: "0.6875rem", // 11px
  3.25: "0.8125rem", // 13px
  3.5: "0.875rem", // 14px
  4.5: "1.125rem", // 18px
  5: "1.25rem",
  5.5: "1.375rem", // 22px
  6.25: "1.5625rem", // 25px
  6.5: "1.625rem", // 26px
  7: "1.75rem",
  7.5: "1.875rem", //30px
  8.5: "2.125rem", // 34px
  9: "2.25rem",
  9.5: "2.375rem", // 38px
  11: "2.75rem", // 44px
  15: "3.75rem", // 60px
  60: "15rem",
};

export const DESIGN_SYSTEM_SPACING: Record<number, string> = {
  0: "0rem", // 0px
  0.5: "0.125rem", // 2px
  1: "0.25rem", // 4px
  2: "0.5rem", // 8px
  3: "0.75rem", // 12px
  4: "1rem", // 16px
  6: "1.5rem", // 24px
  8: "2rem", // 32px
  10: "2.5rem", // 40px
  12: "3rem", // 48px
  14: "3.5rem", // 56px
  16: "4rem", // 64px
  20: "5rem", // 80px
  24: "6rem", // 96px
  28: "7rem", // 112px
  32: "8rem", // 128px
  36: "9rem", // 144px
  40: "10rem", // 160px
  44: "11rem", // 176px
  48: "12rem", // 192px
  52: "13rem", // 208px
  56: "14rem", // 224px
  64: "16rem", // 256px
  72: "18rem", // 288px
  80: "20rem", // 320px
  96: "24rem", // 384px
};

export const SPACING = {
  ...DESIGN_SYSTEM_SPACING,
  ...DEPRECATED,
};
