import { Box, ChakraProps, Grid } from "@chakra-ui/react";
import type { FC, ReactNode } from "react";
import { RefObject, useEffect, useState } from "react";
import { getFullPageViewHeightValue } from "../../utility/style";

type BaseGridProps = {
  children?: ReactNode;
  layoutRef?: RefObject<HTMLDivElement>;
  hasNavigation?: boolean;
  hasFooter?: boolean;
  customHeight?: string;
};

export const CommonGrid = (props: BaseGridProps & ChakraProps) => {
  const { children, hasNavigation, hasFooter, ...rest } = props;

  const templateRows = ["auto"];
  if (hasNavigation) {
    templateRows.unshift("min-content");
  }

  if (hasFooter) {
    templateRows.push("min-content");
  }

  return (
    <Grid
      templateColumns="repeat(12, minmax(0, 1fr)) "
      gap={0}
      templateRows={templateRows.toString().replace(/,/gm, " ")}
      {...rest}
    >
      {children}
    </Grid>
  );
};

const BaseGrid: FC<BaseGridProps> = ({
  children,
  layoutRef,
  customHeight,
  ...rest
}) => {
  const [height, setHeight] = useState(customHeight ?? "100vh");

  useEffect(() => {
    if (!customHeight) {
      setHeight(getFullPageViewHeightValue());
    }
  }, [customHeight]);

  return (
    <Box
      id="page-wrapper"
      h={height}
      w="100%"
      overflowY="auto"
      overflowX="hidden"
      ref={layoutRef}
      bgColor="#0c1f3a"
      bgRepeat="no-repeat"
      bgSize="100% 100%"
    >
      <CommonGrid h="100%" {...rest}>
        {children}
      </CommonGrid>
    </Box>
  );
};

export default BaseGrid;
