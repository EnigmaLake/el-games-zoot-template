import { Currency } from "@enigma-lake/zoot-game-integration-sdk";
import {
  Dropdown,
  DropdownOption,
  GoldCurrency,
  SweepsCurrency,
  Text,
} from "../../../../../design-system";

const buttonWidth = "4.5rem";

interface CurrencySelectorProps {
  currency: string;
  setCurrency: (newValue: Currency) => void;
  disabled?: boolean;
}

export const CurrencySelector = ({
  setCurrency,
  currency,
  disabled,
}: CurrencySelectorProps) => {
  const customSelectedComponent =
    currency === Currency.SWEEPS ? (
      <SweepsCurrency
        width={9}
        height={9}
        pt={2}
        opacity={disabled ? 0.2 : 1}
      />
    ) : (
      <GoldCurrency width={9} height={9} pt={2} opacity={disabled ? 0.2 : 1} />
    );

  return (
    <Dropdown
      type="single-select"
      width={buttonWidth}
      showSelectedOption={false}
      onChange={(value: Currency) => setCurrency(value)}
      customSelectedComponent={customSelectedComponent}
      disabled={disabled}
      customButtonStyle={{
        borderRadius: "xxl",
        backgroundColor: "inter-secondary-default",
      }}
      menuPlacement="end-end"
    >
      <DropdownOption value={Currency.SWEEPS}>
        <Text color="white">Sweeps</Text>
        <SweepsCurrency />
      </DropdownOption>
      <DropdownOption value={Currency.GOLD}>
        <Text color="white">Gold</Text>
        <GoldCurrency />
      </DropdownOption>
    </Dropdown>
  );
};
