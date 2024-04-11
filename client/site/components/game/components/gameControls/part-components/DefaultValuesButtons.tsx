import { useRecoilState } from "recoil";

import { buttonWidth } from "../utils";
import { formatBigNumber } from "../../../utils/formatting";
import { usePlayAmount } from "../../../../../hooks/usePlayAmount";
import { SecondaryButton, Text } from "../../../../../design-system";
import { useCurrencyAtom } from "../../../../../recoil/state/walletCurrency";

interface DefaultValuesButtonsProps {
  disableControllers?: boolean;
  defaultPlayValues?: number[];
}

export const DefaultValuesButtons = ({
  disableControllers,
  defaultPlayValues,
}: DefaultValuesButtonsProps) => {
  const { setPlayAmount } = usePlayAmount();

  const [currency] = useRecoilState(useCurrencyAtom);

  return (
    <>
      {defaultPlayValues?.map((option: number) => (
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
    </>
  );
};
