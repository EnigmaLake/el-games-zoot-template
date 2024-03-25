import { createIcon } from "@chakra-ui/react";
import colors from "../../theme/base/colors";

export const Ellipse = createIcon({
  displayName: "Ellipse",
  viewBox: "0 0 8 8",
  defaultProps: {
    width: 2,
    height: 2,
    color: colors.green300,
  },
  path: [
    <circle
      key="ellipse"
      id="Ellipse 1"
      cx="4"
      cy="4"
      r="4"
      fill="currentColor"
    />,
  ],
});
