import { FC } from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { Size } from "../../types/shared";
import { ButtonProps } from "./ButtonProps";
import { Button as ChakraButton, useStyleConfig } from "@chakra-ui/react";

export interface CloseButtonProps
  extends Pick<ButtonProps, "onClick" | "disabled"> {
  size?: Extract<Size, "xs" | "sm" | "md" | "lg">;
}
export const CloseButton: FC<CloseButtonProps> = (props) => {
  const { size = "md", ...rest } = props;
  let closeButtonSize;
  const styles = useStyleConfig("CloseButton", { size });
  switch (size) {
    case "xs":
      closeButtonSize = 2;
      break;
    case "sm":
      closeButtonSize = 3;
      break;
    case "lg":
      closeButtonSize = 6;
      break;
    case "md":
    default:
      closeButtonSize = 4;
  }
  return (
    <ChakraButton sx={styles} {...rest}>
      <CloseIcon data-testid="close-icon" boxSize={closeButtonSize} />
    </ChakraButton>
  );
};
