import { Flex } from "@chakra-ui/react";
import { Text } from "../../design-system";

export const SmallLabel = ({ label }: { label: string }) => {
  return (
    <Flex
      bg="background-level-4"
      w="fit-content"
      px={4}
      pt={2}
      pb={3}
      alignItems="center"
      borderRadius="lg"
      mb={-4}
    >
      <Text variant="base-callout" color="secondary">
        {label}
      </Text>
    </Flex>
  );
};
