import { Box, Flex, useRadio, useStyleConfig } from "@chakra-ui/react";
import type { ChangeEvent, FC } from "react";
import { Text } from "../Typography/Text";
import type { RadioProps } from "./RadioProps";

export const Radio: FC<RadioProps> = (props) => {
  const {
    disabled,
    size = "md",
    children,
    labelColor,
    checked,
    error,
    onChange,
    subLabel,
    ...rest
  } = props;

  const handleChange = function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const isChecked = e.currentTarget.checked;
    onChange?.(isChecked);
  };

  const radioProps = {
    isChecked: checked,
    isInvalid: error,
    isDisabled: disabled,
    onChange: handleChange,
    ...rest,
  };

  // getCheckboxProps is from chakra no mistyping here...
  const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } =
    useRadio(radioProps);

  const { isChecked, isInvalid } = state;

  let variant;
  if (isChecked) {
    if (isInvalid) {
      variant = "error-selected";
    } else {
      variant = "default-selected";
    }
  } else {
    if (isInvalid) {
      variant = "error";
    } else {
      variant = "default";
    }
  }

  const styles = useStyleConfig("RadioV2", { size, variant });

  return (
    <Box
      as="label"
      display="flex"
      flexDirection="row"
      alignItems="center"
      gap={2}
      w="fit-content"
      cursor="pointer"
      {...htmlProps}
    >
      <input {...getInputProps()} data-testid="radio-input" hidden />
      <Flex sx={styles} {...getCheckboxProps()} rounded="full" />
      {children && (
        <Text
          variant={size === "md" ? "base" : "small"}
          color={labelColor ?? "primary"}
          {...getLabelProps()}
        >
          {children}
          {subLabel && (
            <Text ml="1" variant="footnote" color="tertiary">
              {subLabel}
            </Text>
          )}
        </Text>
      )}
    </Box>
  );
};
