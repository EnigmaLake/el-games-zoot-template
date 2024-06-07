import { Currency } from "@enigma-lake/zoot-platform-sdk";
import { BaseButton, Text } from "../../../../../design-system";

export const PlayButton = ({
  onClick,
  disableControllers,
  currency,
}: {
  onClick: () => void;
  disableControllers: boolean;
  currency: Currency;
}) => {
  const buttonType = currency === Currency.GOLD ? "yellow" : "green";
  return (
    <BaseButton
      variant={buttonType}
      width="full"
      borderRadius="xxl"
      onClick={onClick}
      disabled={disableControllers}
    >
      <Text variant="base-callout">Play now</Text>
    </BaseButton>
  );
};
