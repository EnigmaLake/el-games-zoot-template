import { Flex } from "@chakra-ui/react";
import { Header } from "../site/design-system";

const NotFound = () => {
  return (
    <Flex w="full" justifyContent="center">
      <Header color="neutral600" ml={10}>
        Page not found
      </Header>
    </Flex>
  );
};

export default NotFound;
