import { Flex } from "@chakra-ui/react";
import { Header } from "../../design-system";
import { MouseEventHandler } from "react";

export const BigLabel = ({ label }: { label: string }) => {
  return (
    <Flex
      bg="background-level-4"
      w="fit-content"
      px={4}
      pt={3}
      pb={6}
      alignItems="center"
      borderRadius="lg"
      mb={-4}
    >
      <Header variant="h4">{label}</Header>
    </Flex>
  );
};

export const BigInteractiveLabel = ({
  label,
  isSelected,
  onClick,
}: {
  label: string;
  isSelected: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <Flex
      bg={isSelected ? "background-level-2" : "background-level-4"}
      w="fit-content"
      px={4}
      mt={isSelected ? "-0.25rem" : "0.25rem"}
      alignItems="center"
      borderTopRadius="lg"
      mb={-10}
      cursor="pointer"
      _hover={{ bg: "background-level-2" }}
      onClick={onClick}
    >
      <Header variant="h4">{label}</Header>
    </Flex>
  );
};
