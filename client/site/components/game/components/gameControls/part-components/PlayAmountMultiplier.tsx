import { Flex, Text } from "@chakra-ui/react";

import { multiplyAmountOptions, roundedButtonWidth } from "../utils";
import { SecondaryButton } from "../../../../../design-system";
import { usePlayAmount } from "../../../../../hooks/usePlayAmount";

export const PlayAmountMultiplier = ({
  disabled,
  limits,
}: {
  disabled: boolean;
  limits: { min: number; max: number };
}) => {
  const { playAmount, setPlayAmount } = usePlayAmount();

  const isDisabled = (multiplier) => {
    if (playAmount * multiplier > limits.max) {
      return true;
    }
    if (playAmount * multiplier < limits.min) {
      return true;
    }
    return disabled;
  };

  return (
    <Flex gap={2} alignItems="center">
      {multiplyAmountOptions.map(
        ({ label, multiplier }: { label: string; multiplier: number }) => (
          <SecondaryButton
            width={roundedButtonWidth}
            key={label}
            onClick={() =>
              setPlayAmount(Number((playAmount * multiplier).toFixed(2)))
            }
            disabled={isDisabled(multiplier)}
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
