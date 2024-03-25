import { Icon } from "@chakra-ui/react";
import { ComponentProps, FC } from "react";
import Checkmark from "../Icon/Checkmark";

type CheckboxIconProps = ComponentProps<typeof Icon> & {
  isIndeterminate?: boolean;
  isChecked?: boolean;
};
/** This is a wrapper component around an icon for use with `<Checkbox />`
 *
 * Note that `<Checkbox>` will clone this and pass in `isIndeterminate` and
 * `isChecked` to reflect the various states of the icon, and this component
 * should show different icons depending on those states
 */
export const CheckboxCheckmarkIcon: FC<CheckboxIconProps> = (props) => {
  const { isIndeterminate, isChecked, ...rest } = props;
  // TODO: deal with "isChecked" and "isIndeterminate" props
  return isChecked ? (
    <Checkmark {...rest} data-testid="checkmark-icon" />
  ) : null;
};
