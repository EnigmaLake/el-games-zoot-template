import { GridItem } from "@chakra-ui/react";
import BaseGrid from "../site/components/base/BaseGrid";
import { Header } from "../site/design-system";

const NotFound = () => {
  return (
    <BaseGrid hasNavigation>
      <GridItem
        gridColumnStart={{
          base: 1,
          xl: 1,
        }}
        bg="background-level-0"
        colSpan={{ base: 12, xl: -1 }}
      >
        <Header ml={10}>Page not found</Header>
      </GridItem>
    </BaseGrid>
  );
};

export default NotFound;
