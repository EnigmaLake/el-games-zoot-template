import { createIcon } from "@chakra-ui/react";

const PoweredByAeropay = createIcon({
  displayName: "PoweredByAeropay",
  viewBox: "0 0 106 24",
  defaultProps: {
    width: "106px",
    height: "24px",
    color: "text-secondary",
  },
  path: <>{/* TOOD: Add SVG saying "powered by Aeropay" */}</>,
});

export { PoweredByAeropay };
