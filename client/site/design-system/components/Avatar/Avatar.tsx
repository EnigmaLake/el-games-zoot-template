import { Box, Image } from "@chakra-ui/react";
import type { FC } from "react";
import type { AvatarProps } from "./AvatarProps";

export const Avatar: FC<AvatarProps> = (props) => {
  const { src, size = "md", alt, onClick } = props;

  let imageSize;
  switch (size) {
    case "xl":
      imageSize = "8rem";
      break;
    case "lg":
      imageSize = "6.5rem";
      break;
    case "sm":
      imageSize = "3rem";
      break;
    case "xs":
      imageSize = "2rem";
      break;
    case "md":
    default:
      imageSize = "4rem";
  }

  return (
    <Box
      {...(onClick && { onClick, as: "button" })}
      borderRadius="full"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxSize={imageSize}
      backgroundImage="/Avatar_Stroke.png"
      backgroundSize="contain"
      data-testid={`avatar-${alt}`}
    >
      <Image
        src={src}
        alt={alt}
        borderRadius="full"
        boxSize={`calc(${imageSize} - 2px)`}
        objectFit="cover"
        position="relative"
      />
    </Box>
  );
};
