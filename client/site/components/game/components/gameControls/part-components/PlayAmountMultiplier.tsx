import { Flex, Text } from "@chakra-ui/react";

import {
  minimumValue,
  multiplyAmountOptions,
  roundedButtonWidth,
} from "../utils";
import { SecondaryButton } from "../../../../../design-system";
import { usePlayAmount } from "../../../../../hooks/usePlayAmount";

export const PlayAmountMultiplier = ({ disabled }: { disabled: boolean }) => {
  const { playAmount, setPlayAmount } = usePlayAmount();

  return (
    <Flex gap={2} alignItems="center">
      {multiplyAmountOptions.map(
        ({ label, multiplier }: { label: string; multiplier: number }) => (
          <SecondaryButton
            width={roundedButtonWidth}
            key={label}
            onClick={() => setPlayAmount(playAmount * multiplier)}
            disabled={disabled ?? playAmount * multiplier < minimumValue}
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
