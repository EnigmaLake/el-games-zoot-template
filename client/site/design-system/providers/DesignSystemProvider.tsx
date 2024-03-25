import { ChakraProvider } from "@chakra-ui/react";
import { Dict } from "@chakra-ui/utils";
import { FC, ReactNode } from "react";
import { TokenSets } from "../types/shared";
import { getTheme } from "../utility/getTheme";

interface DesignSystemProviderProps {
  children?: ReactNode;
  tokenSet?: TokenSets;
  themeOverrides?: Dict;
}
export const DesignSystemProvider: FC<DesignSystemProviderProps> = ({
  children,
  tokenSet,
  themeOverrides,
}) => {
  const theme = getTheme(tokenSet, themeOverrides);
  return (
    <ChakraProvider resetCSS theme={theme}>
      {children}
    </ChakraProvider>
  );
};

export default DesignSystemProvider;
