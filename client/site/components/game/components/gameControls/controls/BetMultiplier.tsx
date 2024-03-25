import { Flex, Text } from "@chakra-ui/react";

import { useBetAmount } from "../../../hooks/useBetAmount";
import { SecondaryButton } from "../../../../../design-system";
import {
  buttonWidth,
  minimumValue,
  multiplyAmountOptions,
} from "../utils/constants";

export const BetMultiplier = ({ disabled }: { disabled?: boolean }) => {
  const { betAmount, setBetAmount } = useBetAmount();

  return (
    <Flex gap={{ xs: 1, base: 2 }} alignItems="center">
      {multiplyAmountOptions.map(
        ({ label, multiplier }: { label: string; multiplier: number }) => (
          <SecondaryButton
            width={buttonWidth}
            key={label}
            onClick={() => setBetAmount(betAmount * multiplier)}
            disabled={disabled ?? betAmount * multiplier < minimumValue}
            borderRadius="xxl"
          >
            <Text color="secondary" variant="small-callout">
              {label}
            </Text>
          </SecondaryButton>
        )
      )}
    </Flex>
  );
};
