import { Box, Text } from "@chakra-ui/react";
import type { FC, PropsWithChildren } from "react";

interface TextDividerProps {
  color?: string;
  textTransform?: "uppercase" | "none";
}

const TextDivider: FC<PropsWithChildren<TextDividerProps>> = ({
  children,
  textTransform = "uppercase",
  color = "text-primary",
}) => (
  <Text
    _before={{
      content: '""',
      height: "1px",
      position: "absolute",
      backgroundColor: "neutrals.neutral700",
      width: "full",
    }}
    position="relative"
    display="flex"
    alignItems="center"
    justifyContent="center"
    textTransform={textTransform}
    fontSize="xs"
    width="full"
    color={color}
  >
    <Box as="span" width="fit-content" zIndex={1} px={4}>
      {children}
    </Box>
  </Text>
);

export default TextDivider;
