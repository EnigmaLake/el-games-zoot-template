import { Flex } from "@chakra-ui/react";
import { FC, useState } from "react";
import { TextInput } from "./TextInput";
import { Text } from "./../Typography/Text";
import { TextInputProps } from "./TextInputProps";

interface TextInputWithValidationProps {
  onChange: (value: string) => void;
  validate: (value: string) => string;
  onError: (errorMessage: string) => void;
  label?: string;
}

export const TextInputWithValidation: FC<
  TextInputWithValidationProps & TextInputProps
> = ({ onChange, validate, onError, label, ...props }) => {
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <Flex direction="column" w={props.width}>
      {label && <Text variant="footnote">{label}</Text>}
      <TextInput
        onChange={(value) => {
          onChange(value);
          const errorMsg = validate(value);
          onError(errorMsg);
          setErrorMessage(errorMsg);
        }}
        {...props}
        error={errorMessage}
      />
    </Flex>
  );
};
