import { FC } from "react";
import { Flex } from "@chakra-ui/react";

import { Text } from "../Typography/Text";
import { ButtonSelectGroupProps } from "./ButtonSelectGroupProps";

export const ButtonSelectGroup: FC<ButtonSelectGroupProps> = ({
  options,
  currentOption,
  onChange,
  disabled,
}) => {
  return (
    <Flex
      sx={{
        bgColor: disabled
          ? "inter-primary-disabled-bkgd"
          : "inter-secondary-default",
      }}
      borderRadius="xxl"
      alignItems="center"
      cursor="pointer"
      p={1}
    >
      {options.map((option) => {
        return (
          <Flex
            key={option.value}
            px={4}
            py={2}
            onClick={() => !disabled && onChange(option.value)}
            flex={1 / options.length}
            alignItems="center"
            justifyContent="center"
            sx={
              option.value === currentOption
                ? {
                    bgColor: disabled
                      ? "inter-primary-disabled-bkgd"
                      : "inter-primary-selected-bkgd",
                    borderRadius: "xxl",
                  }
                : {}
            }
          >
            <Text>{option.label}</Text>
          </Flex>
        );
      })}
    </Flex>
  );
};
