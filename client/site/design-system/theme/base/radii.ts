// THESE ARE DEPRECATED AND DO NOT MATCH THE NEW DESIGN SYSTEM,
// KEEP THEM ONLY FOR BACKWARDS COMPATIBILITY.
// REMOVE WHEN THE ENTIRE SITE USES THE DESIGN SYSTEM
const DEPRECATED = {
  xs: "0.125rem", // 2px
  smBase: "0.375rem", // 6px
  mdBase: "0.75rem", //12px
  xxl: "2.5rem", // 40px
};

export const DESIGN_SYSTEM_RADII: Record<string, string> = {
  none: "0rem", // 0px
  sm: "0.125rem", // 2px
  base: "0.25rem", // 4px
  md: "0.375rem", // 6px
  lg: "0.5rem", // 8px
  xl: "0.75rem", // 12px
  "2xl": "1rem", // 16px
  "3xl": "1.5rem", // 24px
  full: "9999px",
};
export const RADII = {
  ...DESIGN_SYSTEM_RADII,
  ...DEPRECATED,
};
