import { useRadio, Box, Flex } from "@chakra-ui/react";
import type { UseRadioProps } from "@chakra-ui/react";
import type { ComponentType, FC } from "react";
import React from "react";
import type { Size, Width, SelectGroupCardProps } from "./SelectGroupProps";

function RadioCircle({ isChecked, size }: { isChecked: boolean; size: Size }) {
  return (
    <Box
      borderRadius="full"
      borderWidth="1.5px"
      borderColor={isChecked ? "transparent" : "selectGroup.radioBorder"}
      bg={isChecked ? "interactions.primary" : "transparent"}
      minW={size === "large" ? 5 : 4}
      h={size === "large" ? 5 : 4}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        borderRadius="full"
        bg={isChecked ? "icon.primary" : "transparent"}
        w={size === "large" ? 2.5 : 2}
        h={size === "large" ? 2.5 : 2}
      />
    </Box>
  );
}

export interface InternalCardProps extends SelectGroupCardProps {
  radioProps?: UseRadioProps;
  size?: Size;
  showRadio?: boolean;
  width?: Width;
}

export const InternalCard: FC<InternalCardProps> = (props) => {
  const {
    radioProps,
    children,
    size = "medium",
    showRadio,
    width,
    disabled = false,
    value,
  } = props;
  const { getInputProps, getCheckboxProps, state } = useRadio({
    ...radioProps,
    isDisabled: disabled,
  });
  const { isChecked } = state;

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" flex={width === "full" ? 1 : "0 1 auto"}>
      <input {...input} data-testid={`input-${value}`} />
      <Box
        {...checkbox}
        pointerEvents={disabled ? "none" : "auto"}
        cursor={disabled ? "not-allowed" : "pointer"}
        borderRadius="0.375rem"
        borderWidth="1.5px"
        borderColor="transparent"
        boxShadow="md"
        bg="neutrals.neutral700"
        _checked={{
          bg: "interactions.tertiary",
          borderColor: "interactions.primary",
        }}
        _focus={{
          bg: "interactions.tertiary",
          borderColor: "interactions.primary",
        }}
        _hover={{
          bg: "interactions.tertiary",
        }}
        _disabled={{
          bg: "neutrals.neutral700",
        }}
        px={size === "large" ? 5 : 4}
        py={4}
      >
        <Flex gap={3} display="flex" justifyContent="space-between">
          {children}
          {showRadio && <RadioCircle isChecked={isChecked} size={size} />}
        </Flex>
      </Box>
    </Box>
  );
};

/**
 * We do not want to expose certain props to the consumer, as some should only come from the SelectGroup parent component.
 * Therefore, we expose a wrapped ExternalCard that eventually gets overridden by the InternalCard
 * when the SelectGroup is rendering the children.
 * https://react-typescript-cheatsheet.netlify.app/docs/hoc/excluding_props/
 */

function withExternalCardProps({
  radioProps,
  showRadio,
  size,
  width,
}: {
  radioProps?: UseRadioProps;
  showRadio?: boolean;
  size?: Size;
  width?: Width;
}) {
  return function <
    T extends {
      radioProps?: UseRadioProps;
      showRadio?: boolean;
      size?: Size;
      width?: Width;
    }
  >(Component: ComponentType<T>) {
    return function Card(
      props: Omit<T, "radioProps" | "showRadio" | "size" | "width">
    ): JSX.Element {
      const newProps = { ...props, radioProps, showRadio, size, width } as T;
      return <Component {...newProps} />;
    };
  };
}

export const SelectGroupCard = withExternalCardProps({})(InternalCard);
