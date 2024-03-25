import { useStyleConfig, useCheckbox, Box, Flex } from "@chakra-ui/react";
import { Text } from "../Typography/Text";
import type { ChangeEvent, FC } from "react";
import type { CheckboxProps } from "./CheckboxProps";
import { Check1 } from "../../icons/library/Check1";
import { Minus } from "../../icons/library/Minus";

export const Checkbox: FC<CheckboxProps> = (props) => {
  const {
    disabled,
    size = "md",
    children,
    labelColor,
    indeterminate,
    checked,
    error,
    onChange,
    subLabel,
    icon,
    ...rest
  } = props;

  const handleChange = function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const isChecked = e.currentTarget.checked;
    onChange?.(isChecked);
  };

  const checkboxProps = {
    isIndeterminate: indeterminate,
    isChecked: checked,
    isInvalid: error,
    isDisabled: disabled,
    onChange: handleChange,
    ...rest,
  };
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox(checkboxProps);

  const { isChecked, isInvalid, isIndeterminate, isDisabled } = state;

  let variant;
  if (isChecked || isIndeterminate) {
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

  const styles = useStyleConfig("CheckboxV2", { size, variant });

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
      <input {...getInputProps()} data-testid="checkbox-input" hidden />
      <Flex sx={styles} {...getCheckboxProps()}>
        {isIndeterminate && (
          <Minus
            data-testid="indeterminate"
            boxSize={4}
            fill={isDisabled ? "icons-secondary" : "icons-primary"}
          />
        )}
        {isChecked && !isIndeterminate && (
          <Check1
            data-testid="checkmark"
            boxSize={4}
            fill={isDisabled ? "icons-secondary" : "icons-primary"}
          />
        )}
      </Flex>
      {children && (
        <Flex alignItems="center" gap={1}>
          <>
            {icon}
            <Text
              variant="base"
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
          </>
        </Flex>
      )}
    </Box>
  );
};
