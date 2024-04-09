import { Flex, Text } from "@chakra-ui/react";

import { SecondaryButton } from "../../../../design-system";
import { buttonWidth, minimumValue, multiplyAmountOptions } from "./utils";
import { usePlayAmount } from "../../../../hooks/usePlayAmount";

export const PlayAmountMultiplier = ({ disabled }: { disabled: boolean }) => {
  const { playAmount, setPlayAmount } = usePlayAmount();

  return (
    <Flex gap={{ xs: 1, base: 2 }} alignItems="center">
      {multiplyAmountOptions.map(
        ({ label, multiplier }: { label: string; multiplier: number }) => (
          <SecondaryButton
            width={buttonWidth}
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
