import { Ref, useRef } from "react";
import { useRecoilState } from "recoil";
import { Box, Flex } from "@chakra-ui/react";
import { Currency } from "@enigma-lake/zoot-game-integration-sdk";

import {
  buttonWidth,
  getDefaultPlayValues,
  maximumValue,
  minimumValue,
  roundedButtonWidth,
} from "./utils";
import {
  GreenButton,
  NumberInput,
  Reload,
  SecondaryButton,
  Text,
} from "../../../../design-system";
import { CurrencySelector } from "./CurrencySelector";
import { formatBigNumber } from "../../utils/formatting";
import { PlayAmountMultiplier } from "./PlayAmountMultiplier";
import { usePlayAmount } from "../../../../hooks/usePlayAmount";
import { useBalanceAtom } from "../../../../recoil/state/balance";
import { useCurrencyAtom } from "../../../../recoil/state/walletCurrency";

interface GameControlsDesktopProps {
  onClick: () => void;
  disableControllers: boolean;
}

export const GameControlsDesktop = ({
  onClick,
  disableControllers,
}: GameControlsDesktopProps) => {
  const inputRef: Ref<{ setValue: (_value: number) => void }> | undefined =
    useRef(null);

  const { playAmount, setPlayAmount, setLastPlayAmount } = usePlayAmount();
  const [currency, setCurrency] = useRecoilState(useCurrencyAtom);

  const defaultPlayValues = getDefaultPlayValues(currency);
  const [{ sweepsBalance, goldBalance }] = useRecoilState(useBalanceAtom);

  const availableBalance =
    currency === Currency.SWEEPS ? sweepsBalance : goldBalance;
  const maximumPlayAmount = maximumValue[currency];

  const half_length = Math.ceil(defaultPlayValues?.length / 2);

  const leftSide = defaultPlayValues?.slice(0, half_length);
  const rightSide = defaultPlayValues?.slice(
    half_length,
    defaultPlayValues?.length
  );

  return (
    <Flex
      justifyContent="center"
      gap={4}
      flexDir="column"
      alignItems="center"
      w="70%"
    >
      <Flex gap={2}>
        <Flex gap={2}>
          {leftSide?.map((option: number) => (
            <SecondaryButton
              key={`${currency}-${option}`}
              width={buttonWidth}
              disabled={disableControllers}
              onClick={() => setPlayAmount(option)}
              borderRadius="xxl"
            >
              <Text color="white" variant="small-callout">
                {formatBigNumber(option)}
              </Text>
            </SecondaryButton>
          ))}
        </Flex>
        <Box width="250px">
          <NumberInput
            ref={inputRef}
            defaultValue={playAmount}
            min={minimumValue}
            max={
              maximumPlayAmount > availableBalance
                ? availableBalance
                : maximumPlayAmount
            }
            onChange={(newValue) => {
              if (!disableControllers) {
                if (newValue > maximumPlayAmount) {
                  setPlayAmount(
                    maximumPlayAmount > availableBalance
                      ? availableBalance
                      : maximumPlayAmount
                  );
                } else {
                  setPlayAmount(newValue);
                }
              }
            }}
            disabled={disableControllers}
          />
        </Box>
        <Flex gap={2}>
          {rightSide?.map((option: number) => (
            <SecondaryButton
              key={`${currency}-${option}`}
              width={buttonWidth}
              disabled={disableControllers}
              onClick={() => setPlayAmount(option)}
              borderRadius="xxl"
            >
              <Text color="white" variant="small-callout">
                {formatBigNumber(option)}
              </Text>
            </SecondaryButton>
          ))}
        </Flex>
      </Flex>
      <Flex gap={2} justifyContent="space-between" w="100%">
        <Flex gap={2}>
          <CurrencySelector
            disabled={disableControllers}
            setCurrency={setCurrency}
            currency={currency}
          />
          <SecondaryButton
            width={roundedButtonWidth}
            onClick={setLastPlayAmount}
            borderRadius="xxl"
            disabled={disableControllers}
          >
            <Reload />
          </SecondaryButton>
        </Flex>
        <Box width="230px">
          <GreenButton
            width="full"
            borderRadius="xxl"
            onClick={onClick}
            disabled={disableControllers}
          >
            <Text variant="base-callout">Play now</Text>
          </GreenButton>
        </Box>
        <PlayAmountMultiplier disabled={disableControllers} />
      </Flex>
    </Flex>
  );
};
