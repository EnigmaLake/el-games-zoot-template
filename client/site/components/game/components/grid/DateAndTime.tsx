import moment from "moment/moment";
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { Text } from "../../../../design-system";

export const DateAndTime = () => {
  const [currentDate, setCurrentDate] = useState(
    moment(new Date()).format("MM/DD/YYYY")
  );
  const [currentTime, setCurrentTime] = useState(
    moment(new Date()).format("HH:MM")
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(moment(new Date()).format("MM/DD/YYYY"));
      setCurrentTime(moment(new Date()).format("HH:mm:ss"));
    }, 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  return (
    <Flex direction="column" alignItems="flex-start">
      <Text variant="base-bold">Game Name</Text>
      <Flex gap={2}>
        <Text variant="small-callout">{currentTime}</Text>
        <Text variant="small-callout">{currentDate}</Text>
      </Flex>
    </Flex>
  );
};
