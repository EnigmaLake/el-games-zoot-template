import type { FC } from "react";
import { Avatar, Box } from "@chakra-ui/react";

interface BrandedAvatarProps {
  src: string;
  name: string;
  borderRadius?: string;
  borderWidth?: string;
  width?: string;
  height?: string;
}

export const BrandedAvatar: FC<BrandedAvatarProps> = ({
  src,
  name,
  borderRadius = "50%",
  borderWidth = "4px",
  width = "9.375rem",
  height = "9.375rem",
}) => {
  return (
    <Box
      borderRadius={borderRadius}
      padding={borderWidth}
      background="gradients.conic.brandColors_80"
    >
      <Avatar width={width} height={height} name={name} src={src} />
    </Box>
  );
};
