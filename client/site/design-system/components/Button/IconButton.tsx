import {
  Button as ChakraButton,
  PositionProps,
  useStyleConfig,
} from "@chakra-ui/react";
import { FC, cloneElement } from "react";
import { ButtonProps } from "./ButtonProps";

export interface IconButtonProps
  extends Omit<ButtonProps, "variant" | "width" | "children">,
    Pick<PositionProps, "position" | "top" | "left" | "bottom" | "right"> {
  /**
   * @description If the button is rounded
   * @default false
   */
  rounded?: boolean;
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
  children: JSX.Element;
  bg?: string;
}

export const IconButton: FC<IconButtonProps> = (props) => {
  const {
    children,
    onClick,
    disabled,
    size = "md",
    loading = false,
    variant,
    rounded = false,
    bg,
    ...rest
  } = props;

  const styles = useStyleConfig("IconButton", { variant, size });

  let iconSize;
  switch (size) {
    case "xl":
      iconSize = "2.5";
      break;
    case "lg":
      iconSize = "2";
      break;
    case "md":
    case "sm":
    case "xs":
    default:
      iconSize = "1";
      break;
  }

  return (
    <ChakraButton
      sx={{ ...styles, bg }}
      variant="solid"
      onClick={onClick}
      disabled={disabled}
      isLoading={loading}
      borderRadius={rounded ? "full" : "md"}
      {...rest}
    >
      {cloneElement(children, { transform: `scale(${iconSize})` })}
    </ChakraButton>
  );
};
