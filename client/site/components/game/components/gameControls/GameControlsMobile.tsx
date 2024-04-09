import { Ref, useRef } from "react";
import { useRecoilState } from "recoil";
import { Box, Flex } from "@chakra-ui/react";
import { Currency } from "@enigma-lake/zoot-game-integration-sdk";

import {
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

interface GameControlsMobileProps {
  onClick: () => void;
  disableControllers: boolean;
}

export const GameControlsMobile = ({
  onClick,
  disableControllers,
}: GameControlsMobileProps) => {
  const { playAmount, setPlayAmount, setLastPlayAmount } = usePlayAmount();

  const [currency, setCurrency] = useRecoilState(useCurrencyAtom);

  const defaultPlayValues = getDefaultPlayValues(currency);

  const inputRef: Ref<{ setValue: (_value: number) => void }> | undefined =
    useRef(null);
  const [{ sweepsBalance, goldBalance }] = useRecoilState(useBalanceAtom);

  const availableBalance =
    currency === Currency.SWEEPS ? sweepsBalance : goldBalance;
  const maximumPlayAmount = maximumValue[currency];

  return (
    <Flex justifyContent="center" gap={4} flexDir="column" alignItems="center">
      <Flex gap={2} justifyContent="space-between" w="100%">
        {defaultPlayValues?.map((option: number) => (
          <SecondaryButton
            key={`${currency}-${option}`}
            width="100%"
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
      <Flex gap={2} justifyContent="space-between" w="100%">
        <SecondaryButton
          width={roundedButtonWidth}
          onClick={setLastPlayAmount}
          borderRadius="xxl"
          disabled={disableControllers}
        >
          <Reload />
        </SecondaryButton>
        <Box width="200px">
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
        <PlayAmountMultiplier disabled={disableControllers} />
      </Flex>
      <Flex gap={2} justifyContent="space-between" w="100%">
        <CurrencySelector
          disabled={disableControllers}
          setCurrency={setCurrency}
          currency={currency}
        />
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
        <Box />
      </Flex>
    </Flex>
  );
};
