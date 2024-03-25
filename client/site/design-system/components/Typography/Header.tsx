import { Heading as ChakraHeading, useStyleConfig } from "@chakra-ui/react";
import type { FC } from "react";
import type { HeaderProps } from "./HeaderProps";
import { COLOR_VARIANT_MAPPING } from "./shared";

/**
 * @description Use Header typography when you need to separated sections of text with h1-h6 elements.
 */
export const Header: FC<HeaderProps> = (props) => {
  const {
    children,
    color = "primary",
    align = "left",
    width = "fit",
    variant = "h2",
    ...rest
  } = props;

  const styles = useStyleConfig("Header", {
    variant,
  });

  return (
    <ChakraHeading
      sx={styles}
      color={COLOR_VARIANT_MAPPING[color] ?? color}
      textAlign={align}
      w={width === "full" ? "full" : "fit-content"}
      {...rest}
    >
      {children}
    </ChakraHeading>
  );
};
