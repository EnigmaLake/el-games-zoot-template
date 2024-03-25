import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const sm = defineStyle({
  maxWidth: "xs",
});

const md = defineStyle({
  maxWidth: "md",
});

const lg = defineStyle({
  maxWidth: "xl",
});

const fit = defineStyle({
  maxWidth: "fit-content",
});

const full = defineStyle({
  maxWidth: "full",
});

const sizes = {
  sm: definePartsStyle({ dialog: sm }),
  md: definePartsStyle({ dialog: md }),
  lg: definePartsStyle({ dialog: lg }),
  fit: definePartsStyle({ dialog: fit }),
  full: definePartsStyle({ dialog: full }),
};

export const Modal = defineMultiStyleConfig({ sizes });
