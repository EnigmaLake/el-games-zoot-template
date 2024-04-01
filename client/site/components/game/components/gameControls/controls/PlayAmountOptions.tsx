import { Ref, useEffect, useRef } from "react";
import { Flex, useBreakpointValue } from "@chakra-ui/react";

import {
  NumberInput,
  SecondaryButton,
  Text,
} from "../../../../../design-system";
import { buttonWidth, minimumValue, maximumValue } from "./constants";
import { useCurrency } from "../../../hooks/useCurrency";

import { usePlayAmount } from "../../../hooks/usePlayAmount";
import { useBalance } from "../../../hooks/useBalance";
import { Currency } from "@enigma-lake/zoot-game-integration-sdk";
import { formatBigNumber } from "../../../utils/formatting";

interface PlayAmountOptionsProps {
  disabled?: boolean;
}

export const PlayAmountOptions = ({ disabled }: PlayAmountOptionsProps) => {
  const inputRef: Ref<{ setValue: (_value: number) => void }> | undefined =
    useRef(null);

  const { playAmount, setPlayAmount } = usePlayAmount();
  const { currency, defaultPlayValues } = useCurrency();

  const {
    balance: { sweepsBalance, goldBalance },
  } = useBalance();

  const availableBalance =
    currency === Currency.SWEEPS ? sweepsBalance : goldBalance;

  const half_length = Math.ceil(defaultPlayValues?.length / 2);

  const leftSide = defaultPlayValues?.slice(0, half_length);
  const rightSide = defaultPlayValues?.slice(
    half_length,
    defaultPlayValues?.length
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
    inputRef.current?.setValue(playAmount);
  }, [playAmount]);

  return (
    <Flex
      justifyContent="center"
      gap={2}
      flexDir={isMobile ? "column" : "row"}
      alignItems="center"
    >
      {!isMobile &&
        leftSide?.map((option: number) => (
          <SecondaryButton
            key={`${currency}-${option}`}
            width={buttonWidth}
            disabled={disabled}
            onClick={() => setPlayAmount(option)}
            borderRadius="xxl"
          >
            <Text color="white" variant="small-callout">
              {formatBigNumber(option)}
            </Text>
          </SecondaryButton>
        ))}
      <NumberInput
        ref={inputRef}
        defaultValue={playAmount}
        min={minimumValue}
        max={maximumValue > availableBalance ? availableBalance : maximumValue}
        onChange={(newValue) => {
          if (!disabled) {
            if (newValue > maximumValue) {
              setPlayAmount(
                maximumValue > availableBalance
                  ? availableBalance
                  : maximumValue
              );
            } else {
              setPlayAmount(newValue);
            }
          }
        }}
      />
      <Flex gap={2}>
        {isMobile &&
          leftSide?.map((option: number) => (
            <SecondaryButton
              key={`${currency}-${option}`}
              width={buttonWidth}
              disabled={disabled}
              onClick={() => setPlayAmount(option)}
              borderRadius="xxl"
            >
              <Text color="white" variant="small-callout">
                {formatBigNumber(option)}
              </Text>
            </SecondaryButton>
          ))}
        {rightSide?.map((option: number) => (
          <SecondaryButton
            key={`${currency}-${option}`}
            width={buttonWidth}
            disabled={disabled}
            onClick={() => setPlayAmount(option)}
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
