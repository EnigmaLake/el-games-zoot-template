import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { listAnatomy as parts } from "@chakra-ui/anatomy";
import { mode } from "@chakra-ui/theme-tools";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const variants = {
  "em-primary": definePartsStyle((props) => ({
    item: {
      ml: 2,
      "&::marker": {
        color: mode("white", "white")(props),
      },
    },
  })),
};

export const List = defineMultiStyleConfig({ variants });
