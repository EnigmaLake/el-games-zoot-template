import { Flex } from "@chakra-ui/react";

import { format2Decimals } from "../../../game/utils/formatting";
import { GoldCurrency, SweepsCurrency, Text } from "../../../../design-system";
import { ServerToClientSocketEventPayload } from "../../../game/websocket/socket";
import { CoinType } from "../../../game/utils/interfaces";

export const ScoreboardRow = ({
  entry,
}: {
  entry: ServerToClientSocketEventPayload;
}) => {
  const { userNickname, playAmountInCents, winAmountInCents, winMultiplier } =
    entry;

  let hasWinnings = true;
  if (!winAmountInCents || winAmountInCents <= 0) {
    hasWinnings = false;
  }

  let color =
    entry.coinType === CoinType.sweeps ? "toxic-green" : "yellow-gold";

  if (winAmountInCents && winAmountInCents <= 0) {
    color = "error-primary";
  }

  const icon =
    entry.coinType === CoinType.sweeps ? (
      <SweepsCurrency width={6} color={color} mb={-2} />
    ) : (
      <GoldCurrency width={6} color={color} mb={-2} />
    );

  return (
    <Flex direction="column" px={2}>
      <Flex py={2}>
        <Flex
          flex={0.6}
          alignItems="center"
          justifyContent="flex-start"
          gap={1}
          className="ellipse-text"
        >
          <Text variant="small-callout">{userNickname}</Text>
        </Flex>

        <Flex flex={0.6} alignItems="center" justifyContent="center">
          {!hasWinnings && (
            <Text variant="small-callout" color="secondary">
              -
            </Text>
          )}

          {hasWinnings && (
            <Text variant="small-callout" color="secondary">
              {format2Decimals(Number(winMultiplier))}
            </Text>
          )}
        </Flex>

        <Flex flex={0.6} alignItems="center" justifyContent="center">
          {!hasWinnings && (
            <Text variant="small-callout" color="secondary">
              -
            </Text>
          )}

          {hasWinnings && (
            <>
              {icon}
              <Text variant="small-callout" color={color}>
                {format2Decimals(winAmountInCents / 100)}
              </Text>
            </>
          )}
        </Flex>

        <Flex flex={0.6} alignItems="center" justifyContent="flex-end">
          {icon}
          <Text variant="small-callout" color={color}>
            {format2Decimals(playAmountInCents / 100)}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
