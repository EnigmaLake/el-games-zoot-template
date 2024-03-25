import { createIcon } from "@chakra-ui/icon";
import colors from "../../theme/base/colors";

export const Windows = createIcon({
  displayName: "Windows",
  defaultProps: {
    fill: colors["icons-disabled"],
    height: 4,
    display: "block",
  },
  path: (
    <path
      key={0}
      d="M0 3.398L9.80805 2.06642L9.81245 11.4979L0.00906957 11.5535L0 3.398ZM9.80338 12.5846L9.81107 22.0243L0.00769539 20.6806L0.00714572 12.5213L9.80338 12.5846ZM10.9923 1.89216L23.997 0V11.3779L10.9923 11.4809V1.89216ZM24 12.6733L23.997 24L10.9923 22.1703L10.9742 12.6522L24 12.6733Z"
    />
  ),
});
