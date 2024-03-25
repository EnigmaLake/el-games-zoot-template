export interface RadioGroupProps {
  /**
   * @description The radio children
   */
  children: JSX.Element[];
  /**
   * @description Label of the radio group
   */
  groupLabel?: string;
  /**
   * @description The onChange handler for when any item in the checkbox group changes
   */
  onChange?: (checkedItems: Record<string, boolean>) => void;
  /**
   * @description spread the radio buttons over columns, defaults to 1
   */
  columns?: number;
}
