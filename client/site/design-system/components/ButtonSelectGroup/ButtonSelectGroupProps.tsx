import { DesignSystemBaseProps } from "../../types/shared";

interface Option {
  label: string;
  value: string;
}

export interface ButtonSelectGroupProps extends DesignSystemBaseProps {
  /**
   * @description The array with all the available options.
   * @default []
   */
  options: Option[];
  /**
   * @description the current selected option
   * @default ""
   */
  currentOption: string;
  /**
   * @description Change handler invoked when the option is clicked
   */
  onChange: (valueAsNumber: string) => void;
  /**
   * @description is this field disabled
   */
  disabled?: boolean;
}
