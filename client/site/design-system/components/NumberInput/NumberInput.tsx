import {
  Button,
  Flex,
  FormLabel,
  Input,
  useId,
  useNumberInput,
  useStyleConfig,
} from "@chakra-ui/react";
import {
  FC,
  FormEvent,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import { Error } from "../../icons/library/Error";
import { Minus } from "../../icons/library/Minus";
import { Plus } from "../../icons/library/Plus";
import { baseNumberInputStyle } from "../../theme/components/numberInput";
import { Text } from "../Typography/Text";
import type { NumberInputProps } from "./NumberInputProps";

export const NumberInput: FC<NumberInputProps> = forwardRef(
  (
    {
      size = "md",
      min = 0,
      max,
      onChange: onChangeProp,
      defaultValue,
      placeholder,
      precision = 2,
      step = 1,
      readOnlyInput,
      error,
      caption,
      label,
      width = "fit-content",
      showButtons = true,
      disabled,
      ...rest
    },
    ref
  ) => {
    const numberInputId = useId("", "number-input");
    const inputRef = useRef(null);

    const onChange = (_: string, num: number) => onChangeProp(num);

    const isValidCharacter = (value: string) => /^[Ee0-9+\-.,]$/.test(value);

    const parse = (value: string) => value.replace(",", ".");

    const inputStyles = useStyleConfig("NumberInputV2", { size });
    const inputButtonStyles = useStyleConfig("NumberInputButton", { size });
    const iconProps = {
      boxSize: size === "lg" ? 6 : 5,
      "data-testid": "text-input-left-icon",
    };
    const numberInputStyle = {
      ...inputStyles,
      borderRadius: showButtons ? 0 : "xxl",
      backgroundColor: "bg-transparent-01",
      color: "white",
    };

    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
      useNumberInput({
        defaultValue,
        min,
        max,
        precision,
        step,
        onChange,
        isValidCharacter,
        parse,
        isDisabled: disabled,
      });

    const inputProps = useMemo(() => getInputProps(), [getInputProps]);

    const setValue = useCallback(
      (value: number | string) => {
        if (!inputRef.current || !inputProps.onChange) {
          return;
        }
        inputProps.onChange({
          nativeEvent: { isComposing: false },
          currentTarget: { value: `${value}` },
        } as unknown as FormEvent<HTMLInputElement>);
      },
      [inputProps]
    );

    useImperativeHandle(ref, () => ({ setValue }), [setValue]);

    // flex doesn't pick up disabled/invalid state so that style is applied manually
    let containerStyle;
    if (error) {
      containerStyle = baseNumberInputStyle.container._invalid;
    } else if (disabled) {
      containerStyle = baseNumberInputStyle.container._disabled;
    } else {
      containerStyle = baseNumberInputStyle.container;
    }

    return (
      <Flex direction="column" w={width}>
        {label && (
          <Text mb="6px" variant="small" color="secondary">
            {label}
          </Text>
        )}
        <FormLabel htmlFor={numberInputId} hidden />
        <Flex alignSelf="stretch" sx={containerStyle}>
          {showButtons && (
            <Button
              {...getDecrementButtonProps()}
              aria-label="number-input-decrease"
              sx={inputButtonStyles}
            >
              <Minus variant="thick" {...iconProps} />
            </Button>
          )}
          <Input
            id={numberInputId}
            {...inputProps}
            aria-label="number-input"
            role="input"
            readOnly={readOnlyInput}
            placeholder={placeholder}
            borderColor="transparent"
            sx={numberInputStyle}
            {...rest}
            ref={inputRef}
          />
          {showButtons && (
            <Button
              {...getIncrementButtonProps()}
              aria-label="number-input-increase"
              sx={inputButtonStyles}
            >
              <Plus variant="thick" {...iconProps} />
            </Button>
          )}
        </Flex>
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
  }
);

// this is required for ref forwarding components
NumberInput.displayName = "NumberInput";
