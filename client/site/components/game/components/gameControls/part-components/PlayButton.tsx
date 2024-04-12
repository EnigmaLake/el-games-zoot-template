import { GreenButton, Text } from "../../../../../design-system";

export const PlayButton = ({
  onClick,
  disableControllers,
}: {
  onClick: () => void;
  disableControllers: boolean;
}) => {
  return (
    <GreenButton
      width="full"
      borderRadius="xxl"
      onClick={onClick}
      disabled={disableControllers}
    >
      <Text variant="base-callout">Play now</Text>
    </GreenButton>
  );
};
