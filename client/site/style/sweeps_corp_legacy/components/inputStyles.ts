import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const lg = defineStyle({
  fontSize: "md",
  lineHeight: 2, // 32px
  px: 6, // 24px
  py: 4, // 16px
  h: 14, // 56px
});

const sizes = {
  lg: definePartsStyle({ field: lg, addon: lg }),
};

export const inputStyle = defineMultiStyleConfig({ sizes });
