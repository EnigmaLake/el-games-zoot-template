import { GreenButton, Text } from "../../../../../design-system";
import { Box } from "@chakra-ui/react";

export const PlayButton = ({
  onClick,
  disableControllers,
}: {
  onClick: () => void;
  disableControllers: boolean;
}) => {
  return (
    <Box width="230px">
      <GreenButton
        width="full"
        borderRadius="xxl"
        onClick={onClick}
        disabled={disableControllers}
      >
        <Text variant="base-callout">Play now</Text>
      </GreenButton>
    </Box>
  );
};
