import { Flex, Progress } from "@chakra-ui/react";
import type { FC } from "react";
import { Text } from "../Typography/Text";
import type { ProgressBarProps } from "./ProgressBarProps";

export const ProgressBar: FC<ProgressBarProps> = (props) => {
  const { showLabel, progress } = props;

  if (progress < 0 || progress > 100) {
    console.warn("Progress must be between 0 and 100");
  }

  return (
    <Flex gap={2} direction="column">
      <Progress
        value={progress}
        height={2}
        borderRadius="lg"
        backgroundColor="background-level-3"
        colorScheme="yellow"
        // The progress bar chakra component does not easily allow us to edit the color...
        sx={{
          "div[role=progressbar]": {
            backgroundColor: "success-primary",
          },
        }}
      />
      {showLabel && (
        <Text
          variant="footnote"
          color="secondary"
        >{`${progress}% complete`}</Text>
      )}
    </Flex>
  );
};
