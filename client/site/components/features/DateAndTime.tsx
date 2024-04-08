import moment from "moment/moment";
import { Flex } from "@chakra-ui/react";
import { Text } from "../../design-system";
import { useEffect, useState } from "react";

export const DateAndTime = () => {
  const [currentDate, setCurrentDate] = useState(
    moment(new Date()).format("MM/DD/YYYY")
  );
  const [currentTime, setCurrentTime] = useState(
    moment(new Date()).format("HH:mm")
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(moment(new Date()).format("MM/DD/YYYY"));
      setCurrentTime(moment(new Date()).format("HH:mm"));
    }, 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  return (
    <Flex direction="column" alignItems="flex-start">
      <Text variant="base-bold">Classic Mines</Text>
      <Flex gap={2}>
        <Text variant="small-callout">{currentTime}</Text>
        <Text variant="small-callout">{currentDate}</Text>
      </Flex>
    </Flex>
  );
};
