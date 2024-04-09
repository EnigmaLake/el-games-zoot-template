import { roundedButtonWidth } from "../utils";
import { usePlayAmount } from "../../../../../hooks/usePlayAmount";
import { Reload, SecondaryButton } from "../../../../../design-system";

export const ReloadButton = ({
  disableControllers,
}: {
  disableControllers: boolean;
}) => {
  const { setLastPlayAmount } = usePlayAmount();

  return (
    <SecondaryButton
      width={roundedButtonWidth}
      onClick={setLastPlayAmount}
      borderRadius="xxl"
      disabled={disableControllers}
    >
      <Reload />
    </SecondaryButton>
  );
};
