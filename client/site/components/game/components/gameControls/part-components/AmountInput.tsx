import { Box } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { Ref, useEffect, useRef } from "react";
import { Currency } from "@enigma-lake/zoot-game-integration-sdk";

import { maximumValue, minimumValue } from "../utils";
import { NumberInput } from "../../../../../design-system";
import { usePlayAmount } from "../../../../../hooks/usePlayAmount";
import { useBalanceAtom } from "../../../../../recoil/state/balance";
import { useCurrencyAtom } from "../../../../../recoil/state/walletCurrency";

export const AmountInput = ({
  disableControllers,
}: {
  disableControllers?: boolean;
}) => {
  const inputRef: Ref<{ setValue: (_value: number) => void }> | undefined =
    useRef(null);

  const { playAmount, setPlayAmount } = usePlayAmount();
  const [currency] = useRecoilState(useCurrencyAtom);

  const [{ sweepsBalance, goldBalance }] = useRecoilState(useBalanceAtom);

  const availableBalance =
    currency === Currency.SWEEPS ? sweepsBalance : goldBalance;
  const maximumPlayAmount = maximumValue[currency];

  useEffect(() => {
    inputRef.current?.setValue(playAmount);
  }, [playAmount]);

  return (
    <Box width={{ base: "150px", lg: "250px" }}>
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
  );
};
