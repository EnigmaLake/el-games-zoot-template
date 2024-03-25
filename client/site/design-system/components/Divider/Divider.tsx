import { FC } from "react";
import { DividerProps } from "./DividerProps";
import { Divider as ChakraDivider } from "@chakra-ui/react";

export const Divider: FC<DividerProps> = ({ variant = "primary", ...rest }) => {
  return (
    <ChakraDivider
      borderColor={`border-${variant}`}
      borderWidth={1}
      width="initial"
      {...rest}
    />
  );
};
