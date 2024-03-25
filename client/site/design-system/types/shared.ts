import { SpaceProps, BoxProps, LayoutProps } from "@chakra-ui/react";

export type TokenSets = "enigma";

export type Size = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

// Add to this union type if you need to add props that will be included on all components
export type DesignSystemBaseProps = SpaceProps & Pick<LayoutProps, "display">;

export interface TokenVariant {
  [key: string]: Record<string, string>;
}

export type IconVariant = "default" | "thick" | "thin";

export type ColorMode = "light" | "dark";

export interface IconProps
  extends Pick<BoxProps, "boxSize" | "transition" | "transform">,
    SpaceProps {
  variant?: IconVariant;
  fill?: string;
  colorMode?: ColorMode;
}
