import * as d3Color from "d3-color";

export const addTransparencyToColor = (color: string, opacity: number) => {
  const baseColor = d3Color.color(color);
  if (!baseColor) {
    return color;
  }
  return baseColor.copy({ opacity }).formatRgb();
};

export const hasCSSSupport = (key: string, value: string) => {
  if (typeof window !== "undefined" && "CSS" in window && "supports" in CSS) {
    return CSS.supports(key, value);
  }
  return false;
};

export const getFullPageViewHeightValue = () => {
  return hasCSSSupport("height", "100dvh") ? "100dvh" : "100vh";
};
