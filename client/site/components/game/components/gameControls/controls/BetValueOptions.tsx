import { Ref, useEffect, useRef } from "react";
import { Flex, useBreakpointValue } from "@chakra-ui/react";

import {
  NumberInput,
  SecondaryButton,
  Text,
} from "../../../../../design-system";
import { buttonWidth, minimumValue } from "../utils/constants";
import { useCurrency } from "../../../hooks/useCurrency";
import { formatBigNumber } from "../../../../../utility/formatting";
import { useBetAmount } from "../../../hooks/useBetAmount";

interface BetValueOptionsProps {
  disabled?: boolean;
}

export const BetValueOptions = ({ disabled }: BetValueOptionsProps) => {
  const inputRef: Ref<{ setValue: (value: number) => void }> | undefined =
    useRef(null);

  const { betAmount, setBetAmount } = useBetAmount();
  const { currency, defaultBetValues } = useCurrency();

  const half_length = Math.ceil(defaultBetValues.length / 2);

  const leftSide = defaultBetValues.slice(0, half_length);
  const rightSide = defaultBetValues.slice(
    half_length,
    defaultBetValues.length
  );

  const isMobile = useBreakpointValue({
    lg: true,
    xl: false,
    xs: true,
    sm: true,
    base: true,
    "2sm": true,
  });

  useEffect(() => {
    inputRef.current?.setValue(betAmount);
  }, [betAmount]);

  return (
    <Flex
      justifyContent="center"
      gap={2}
      flexDir={isMobile ? "column" : "row"}
      alignItems="center"
    >
      {!isMobile &&
        leftSide.map((option: number) => (
          <SecondaryButton
            key={`${currency}-${option}`}
            width={buttonWidth}
            disabled={disabled}
            onClick={() => setBetAmount(option)}
            borderRadius="xxl"
          >
            <Text color="white" variant="small-callout">
              {formatBigNumber(option)}
            </Text>
          </SecondaryButton>
        ))}
      <NumberInput
        ref={inputRef}
        defaultValue={betAmount}
        min={minimumValue}
        onChange={(newValue) => {
          if (!disabled) {
            setBetAmount(newValue);
          }
        }}
      />
      <Flex gap={2}>
        {isMobile &&
          leftSide.map((option: number) => (
            <SecondaryButton
              key={`${currency}-${option}`}
              width={buttonWidth}
              disabled={disabled}
              onClick={() => setBetAmount(option)}
              borderRadius="xxl"
            >
              <Text color="white" variant="small-callout">
                {formatBigNumber(option)}
              </Text>
            </SecondaryButton>
          ))}
        {rightSide.map((option: number) => (
          <SecondaryButton
            key={`${currency}-${option}`}
            width={buttonWidth}
            disabled={disabled}
            onClick={() => setBetAmount(option)}
            borderRadius="xxl"
          >
            <Text color="white" variant="small-callout">
              {formatBigNumber(option)}
            </Text>
          </SecondaryButton>
        ))}
      </Flex>
    </Flex>
  );
};
