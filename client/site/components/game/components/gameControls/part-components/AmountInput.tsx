import { Box } from "@chakra-ui/react";
import { Ref, useEffect, useRef } from "react";

import { NumberInput } from "../../../../../design-system";
import { usePlayAmount } from "../../../../../hooks/usePlayAmount";

export const AmountInput = ({
  disableControllers,
  limits,
}: {
  disableControllers?: boolean;
  limits: {
    min: number;
    max: number;
  };
}) => {
  const inputRef: Ref<{ setValue: (_value: number) => void }> | undefined =
    useRef(null);

  const { availableBalance, playAmount, setPlayAmount } = usePlayAmount();
  const { min, max } = limits;

  useEffect(() => {
    inputRef.current?.setValue(playAmount);
  }, [playAmount]);

  return (
    <Box width={{ base: "150px", lg: "250px" }}>
      <NumberInput
        ref={inputRef}
        defaultValue={playAmount}
        min={min}
        max={max > availableBalance ? availableBalance : max}
        onChange={(newValue) => {
          if (!disableControllers) {
            if (newValue > max) {
              if (max > availableBalance) {
                return setPlayAmount(availableBalance);
              }
              setPlayAmount(max);
            }
            if (newValue < min) {
              if (min > availableBalance) {
                return;
              }
              setPlayAmount(min);
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
