import { ChangeEvent, FC, cloneElement } from "react";
import {
  Input,
  Flex,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useStyleConfig,
} from "@chakra-ui/react";
import type { TextInputProps } from "./TextInputProps";
import { Text } from "../Typography/Text";
import { Error } from "../../icons/library/Error";

export const TextInput: FC<TextInputProps> = (props) => {
  const {
    error,
    caption,
    label,
    width = "fit-content",
    placeholder,
    disabled,
    onChange,
    note,
    size = "md",
    value,
    leftIcon,
    variant,
  } = props;

  const handleInputChange = function handleInputChange(
    event: ChangeEvent<HTMLInputElement>
  ) {
    const newValue = event.target.value;
    onChange?.(newValue);
  };

  const styles = useStyleConfig(
    variant === "base" || !variant ? "TextInput" : "TextInputLight",
    { size }
  );

  const iconProps = {
    boxSize: size === "lg" ? 6 : 5,
    fill: disabled ? "icons-disabled" : "icons-primary",
    "data-testid": "text-input-left-icon",
  };

  const paddingWithIcon = size === "lg" ? "2.5rem" : "2.25rem";

  return (
    <Flex direction="column" w={width}>
      {label && (
        <Text mb="6px" variant="small" color="secondary">
          {label}
        </Text>
      )}
      <InputGroup alignItems="center" justifyContent="center">
        {leftIcon && (
          <InputLeftElement
            pointerEvents="none"
            bottom="0"
            margin="auto"
            width="fit-content"
            paddingX={2}
          >
            {cloneElement(leftIcon, iconProps)}
          </InputLeftElement>
        )}
        <Input
          sx={styles}
          isInvalid={!!error}
          placeholder={placeholder}
          disabled={disabled}
          paddingLeft={leftIcon ? paddingWithIcon : "0.75rem"}
          {...(onChange && { onChange: handleInputChange })}
          {...(value && { value })}
        />
        {note && (
          <InputRightElement
            mr={2}
            bottom="0"
            marginY="auto"
            right={0}
            width="fit-content"
          >
            <Text
              variant={size === "lg" ? "base" : "small"}
              color={disabled ? "disabled" : "secondary"}
            >
              {note}
            </Text>
          </InputRightElement>
        )}
      </InputGroup>
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
