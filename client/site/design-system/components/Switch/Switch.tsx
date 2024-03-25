import type { ChangeEvent, FC } from "react";
import { useMemo } from "react";
import { nanoid } from "nanoid";
import { Switch as ChakraSwitch, Flex, FormLabel } from "@chakra-ui/react";
import type { SwitchProps } from "./SwitchProps";
import { Text } from "../Typography/Text";
import type { TypographyVariant } from "../Typography/TextProps";

export const Switch: FC<SwitchProps> = (props) => {
  const {
    children,
    onChange,
    disabled,
    checked,
    labelColor,
    size = "md",
    ...rest
  } = props;

  const id = useMemo(() => `switch-${nanoid()}`, []);

  const handleChange = function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange?.(e.currentTarget.checked);
  };

  let textVariant: TypographyVariant;
  switch (size) {
    case "sm":
      textVariant = "small";
      break;
    case "lg":
      textVariant = "large";
      break;
    case "md":
    default:
      textVariant = "base";
  }

  return (
    <Flex gap={3} width="fit-content" alignItems="center">
      <ChakraSwitch
        id={id}
        onChange={handleChange}
        isDisabled={disabled}
        isChecked={checked}
        size={size}
        data-testid="switch"
        {...rest}
      />
      {children && (
        <FormLabel htmlFor={id} m={0} display="flex">
          <Text
            variant={textVariant}
            color={disabled ? "disabled" : labelColor ?? "primary"}
          >
            {children}
          </Text>
        </FormLabel>
      )}
    </Flex>
  );
};
