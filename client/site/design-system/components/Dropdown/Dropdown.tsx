import {
  Button,
  Menu as ChakraMenu,
  Flex,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, { FC, ReactElement, cloneElement, useState } from "react";

import { Error } from "../../icons/library/Error";
import { Size } from "../../types/shared";
import { Text } from "../Typography/Text";
import { InternalDropdownOption } from "./DropdownOption";
import type { DropdownOptionProps, DropdownProps } from "./DropdownProps";
import ChevronUp from "../../icons/library/ChevronUp";
import ChevronDown from "../../icons/library/ChevronDown";

const ButtonText = ({
  text,
  textColor,
  size,
}: {
  text: string;
  textColor: string;
  size: Extract<Size, "lg" | "md" | "sm">;
}) => {
  return (
    <Text
      variant={size === "lg" ? "large" : "base"}
      width="fit-content"
      color={textColor}
    >
      {text}
    </Text>
  );
};
/**
 * @description A dropdown should be used when a user needs a menu to select one or more from a list of options.
 * Note: This component uses the Chakra Menu under the hood to allow for multi-select and to be able to style the menu, hence a traditional Select will not work.
 */
export const Dropdown: FC<DropdownProps> = (props) => {
  const {
    error,
    caption,
    label,
    width = "fit-content",
    children,
    type = "single-select",
    size = "md",
    onChange,
    placeholder,
    disabled,
    leftIcon,
    defaultValue,
    note,
    buttonText,
    menuOffset,
    menuPlacement = "bottom",
    customSelectedComponent,
    showSelectedOption = true,
    showChevron = true,
    customButtonStyle = {},
  } = props;

  const [selectedOptions, setSelectedOptions] = useState<string[]>(() => {
    if (defaultValue && typeof defaultValue === "string") {
      return [defaultValue];
    } else if (defaultValue && Array.isArray(defaultValue)) {
      return defaultValue;
    } else {
      return [];
    }
  });
  const styles = useMultiStyleConfig("Dropdown", {
    size,
    variant: error ? "error" : "default",
  });

  const handleSelectOption = function handleSelectOption(value: string) {
    const updateSelectedOptions = function updateSelectedOptions() {
      if (type === "single-select") {
        setSelectedOptions([value]);
        (onChange as (value: string) => void)?.(value);
      } else {
        const newOptions = [...selectedOptions];
        if (newOptions.includes(value)) {
          newOptions.splice(newOptions.indexOf(value), 1);
        } else {
          newOptions.push(value);
        }
        setSelectedOptions(newOptions);
        (onChange as (value: string[]) => void)?.(newOptions);
      }
    };
    return updateSelectedOptions;
  };

  const isMultiSelect = type === "multi-select";
  let textColor = "primary";
  if (disabled) {
    textColor = "disabled";
  } else if (selectedOptions.length === 0) {
    textColor = "tertiary";
  }

  const singleOptionSelected =
    (!isMultiSelect && selectedOptions[0]) ||
    (isMultiSelect && selectedOptions.length === 1);

  let buttonContent = placeholder ?? "";
  if (isMultiSelect && selectedOptions.length > 1) {
    // Temporary until Design finishes the multi-select option
    buttonContent = "Multiple Selected";
  } else if (singleOptionSelected && buttonText) {
    buttonContent = buttonText;
  } else if (singleOptionSelected) {
    buttonContent = selectedOptions[0];
  }

  const iconProps = {
    boxSize: size === "lg" ? 6 : 5,
    fill: disabled ? "icons-disabled" : "icons-primary",
    "data-testid": "text-input-left-icon",
    marginRight: 1,
  };

  const paddingLeft = leftIcon ? 2 : 3;

  return (
    <Flex direction="column" w={width}>
      {label && (
        <Text mb="6px" variant="small" color="secondary">
          {label}
        </Text>
      )}
      <ChakraMenu
        gutter={0}
        matchWidth
        placement={menuPlacement}
        closeOnSelect={!isMultiSelect}
        offset={menuOffset}
      >
        {({ isOpen }) => (
          <>
            <MenuButton
              sx={{ ...styles.button, ...customButtonStyle }}
              disabled={disabled}
              as={Button}
              paddingRight={2}
              isDisabled={disabled}
              paddingLeft={paddingLeft}
              iconSpacing={1}
              rightIcon={
                // eslint-disable-next-line no-nested-ternary
                showChevron ? (
                  isOpen ? (
                    <ChevronUp
                      fill={disabled ? "icons-disabled" : "text-primary"}
                    />
                  ) : (
                    <ChevronDown
                      fill={disabled ? "icons-disabled" : "text-primary"}
                    />
                  )
                ) : (
                  <></>
                )
              }
              {...(leftIcon && { leftIcon: cloneElement(leftIcon, iconProps) })}
            >
              <Flex justifyContent="space-between" alignItems="center">
                {customSelectedComponent ?? (
                  <ButtonText
                    text={buttonContent}
                    textColor={textColor}
                    size={size}
                  />
                )}
                {note && (
                  <Text
                    width="fit-content"
                    variant={size === "lg" ? "base" : "small"}
                    color={disabled ? "disabled" : "secondary"}
                  >
                    {note}
                  </Text>
                )}
              </Flex>
            </MenuButton>
            <MenuList sx={styles.list}>
              <MenuOptionGroup type={isMultiSelect ? "checkbox" : "radio"}>
                {React.Children.map(
                  children as unknown as DropdownOptionProps[],
                  (child: DropdownOptionProps) => {
                    const { props: childProps } =
                      child as unknown as ReactElement;
                    const isSelected = selectedOptions.includes(
                      childProps.value
                    );
                    return (
                      <InternalDropdownOption
                        {...childProps}
                        selected={showSelectedOption ? isSelected : false}
                        onClick={handleSelectOption(childProps.value)}
                      />
                    );
                  }
                )}
              </MenuOptionGroup>
            </MenuList>
          </>
        )}
      </ChakraMenu>
      {caption && (
        <Text ml={1} mt={1} variant="small" color="secondary">
          {caption}
        </Text>
      )}
      {error && (
        <Flex gap={1} ml={1} mt={1} alignItems="flex-start">
          <Error fill="error-primary" data-testid="error-icon" />
          <Text variant="small" color="error">
            {error}
          </Text>
        </Flex>
      )}
    </Flex>
  );
};
