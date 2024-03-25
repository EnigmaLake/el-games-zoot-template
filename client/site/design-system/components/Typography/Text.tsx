import { useStyleConfig } from "@chakra-ui/react";
import type { FC } from "react";
import type { TextProps } from "./TextProps";
import { COLOR_VARIANT_MAPPING } from "./shared";
import dynamic from "next/dynamic";

const ChakraText = dynamic(
  // eslint-disable-next-line promise/prefer-await-to-then
  () => import("@chakra-ui/react").then((mod) => mod.Text),
  { ssr: false }
);

export const Text: FC<TextProps> = (props) => {
  const {
    children,
    color = "primary",
    align = "left",
    as = "span",
    variant = "base",
    width = "fit-content",
    wrap = "initial",
    cssOverride = {},
    transform,
    ...rest
  } = props;

  const styles = useStyleConfig("TextV2", { variant });
  return (
    <ChakraText
      as={as}
      sx={styles}
      color={COLOR_VARIANT_MAPPING[color] ?? color}
      textAlign={align}
      w={width === "full" ? "full" : "fit-content"}
      textTransform={transform}
      css={{
        textWrap: wrap,
        ...cssOverride,
      }}
      {...rest}
    >
      {children}
    </ChakraText>
  );
};
