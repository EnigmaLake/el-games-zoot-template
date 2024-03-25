import deepmerge from "deepmerge";
import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import { TokenVariant, TokenSets } from "../types/shared";
import base from "../theme/base";
import Enigma from "../theme/tokens/enigma";

// TO DO: What we have here is just a sample overriding token set. Replace when we have an official set outside of the base Aqua token set.
export const TOKEN_MAPPING: Record<string, TokenVariant> = {
  enigma: Enigma,
};

export function getTheme(tokenSet?: TokenSets, customTheme?: ThemeConfig) {
  const theme = extendTheme(
    deepmerge.all([
      // Design system base theme and token set
      base,
      tokenSet && TOKEN_MAPPING[tokenSet] ? TOKEN_MAPPING[tokenSet] : {},
      customTheme ?? {},
    ])
  );

  return theme;
}
