import type { FC } from "react";
import { memo, useMemo } from "react";
import { Divider } from "@chakra-ui/react";

interface BrandedDividerProps {
  direction?: "left" | "right";
  ml?: string;
  mr?: string;
  mb?: string;
  height?: string;
  translateXAmount?: string;
  roundBordersEnd?: "left" | "right";
}

const BrandedDivider: FC<BrandedDividerProps> = ({
  direction = "right",
  height = "4px",
  ml = "0px",
  mr = "0px",
  mb = "0px",
  translateXAmount,
  roundBordersEnd,
}) => {
  const backgroundValue =
    direction === "right"
      ? "gradients.linear.brandColors"
      : "gradients.linear.brandColors_reverse";

  const translateProp = useMemo(() => {
    if (translateXAmount) {
      return {
        transform: `translateX(${translateXAmount})`,
      };
    }

    return {};
  }, [translateXAmount]);

  const roundedBordersProp = useMemo(() => {
    const userProp = roundBordersEnd?.toLowerCase();
    let returnValue = {};

    switch (userProp) {
      case "left":
        returnValue = {
          borderTopLeftRadius: height,
          borderBottomLeftRadius: height,
        };
        break;
      case "right":
        returnValue = {
          borderTopRightRadius: height,
          borderBottomRightRadius: height,
        };
        break;
    }

    return returnValue;
  }, [height, roundBordersEnd]);

  return (
    <Divider
      ml={ml}
      mr={mr}
      mb={mb}
      borderWidth="0px"
      background={backgroundValue}
      height={height}
      width="auto"
      {...translateProp}
      {...roundedBordersProp}
    />
  );
};

export default memo(BrandedDivider);
