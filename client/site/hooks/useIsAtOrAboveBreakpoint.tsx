import { useMediaQuery } from "@chakra-ui/react";
import { theme } from "../style/sweeps_corp_legacy";

const breakpoints = theme.breakpoints;

type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

export const useIsAtOrAboveBreakpoint = (breakpoint: Breakpoint): boolean => {
  const [isAtLeastAtBreakpoint] = useMediaQuery(
    `(min-width: ${breakpoints[breakpoint]})`
  );

  return isAtLeastAtBreakpoint;
};

export const useIsAtDesktopWidth = () => {
  return useIsAtOrAboveBreakpoint("lg");
};

// 480px ->
export const useIsAtTabletWidth = () => {
  return useIsAtOrAboveBreakpoint("sm");
};
