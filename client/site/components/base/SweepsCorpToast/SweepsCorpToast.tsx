import { Box, Flex, SystemStyleObject } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import Alert from "../../Icon/Alert";
import CircleCheckMark from "../../Icon/CircleCheckMark";
import CircleExclamationMark from "../../Icon/CircleExclamationMark";

interface SweepsCorpToastProps {
  text: string | ReactNode;
  icon?: ReactNode;
}

export interface SweepsCorpToastPresetProps {
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

export const SweepsCorpToastSuccess: FC<SweepsCorpToastPresetProps> = ({
  text,
  height,
  width,
}) => {
  return (
    <SweepsCorpToast
      text={text}
      icon={<CircleCheckMark height={height ?? 4} width={width ?? 4} />}
    />
  );
};

export const SweepsCorpToastError: FC<SweepsCorpToastPresetProps> = ({
  text,
  height,
  width,
}) => {
  return (
    <SweepsCorpToast
      text={text}
      icon={<CircleExclamationMark height={height ?? 4} width={width ?? 4} />}
    />
  );
};

export const SweepsCorpToastInfo: FC<SweepsCorpToastPresetProps> = ({
  text,
  height,
  width,
}) => {
  return (
    <SweepsCorpToast
      text={text}
      icon={<Alert fill="orange100" height={height ?? 4} width={width ?? 4} />}
    />
  );
};

export const SweepsCorpToast: FC<SweepsCorpToastProps> = ({ text, icon }) => {
  return (
    <Flex sx={style} alignItems="center" fontWeight="medium">
      {icon}
      <Box pl={icon ? "2" : "0"}>{text}</Box>
    </Flex>
  );
};
