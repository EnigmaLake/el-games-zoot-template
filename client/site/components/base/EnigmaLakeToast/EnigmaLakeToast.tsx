import { Box, Flex, SystemStyleObject } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import Alert from "../../Icon/Alert";
import CircleCheckMark from "../../Icon/CircleCheckMark";
import CircleExclamationMark from "../../Icon/CircleExclamationMark";

interface EnigmaLakeToastProps {
  text: string | ReactNode;
  icon?: ReactNode;
}

export interface EnigmaLakeToastPresetProps {
  text: string | ReactNode;
  height?: number;
  width?: number;
  icon?: ReactNode;
}

const style: SystemStyleObject = {
  bgColor: "background-level-1",
  borderColor: "rgba(30, 51, 82, 0.48)",
  borderRadius: "smBase",
  borderStyle: "solid",
  borderWidth: "1px",
  color: "white",
  paddingX: 6,
  paddingY: 3,
  boxShadow: "lg",
};

export const EnigmaLakeToastSuccess: FC<EnigmaLakeToastPresetProps> = ({
  text,
  height,
  width,
}) => {
  return (
    <EnigmaLakeToast
      text={text}
      icon={<CircleCheckMark height={height ?? 4} width={width ?? 4} />}
    />
  );
};

export const EnigmaLakeToastError: FC<EnigmaLakeToastPresetProps> = ({
  text,
  height,
  width,
}) => {
  return (
    <EnigmaLakeToast
      text={text}
      icon={<CircleExclamationMark height={height ?? 4} width={width ?? 4} />}
    />
  );
};

export const EnigmaLakeToastInfo: FC<EnigmaLakeToastPresetProps> = ({
  text,
  height,
  width,
}) => {
  return (
    <EnigmaLakeToast
      text={text}
      icon={<Alert fill="orange100" height={height ?? 4} width={width ?? 4} />}
    />
  );
};

export const EnigmaLakeToast: FC<EnigmaLakeToastProps> = ({ text, icon }) => {
  return (
    <Flex sx={style} alignItems="center" fontWeight="medium">
      {icon}
      <Box pl={icon ? "2" : "0"}>{text}</Box>
    </Flex>
  );
};
