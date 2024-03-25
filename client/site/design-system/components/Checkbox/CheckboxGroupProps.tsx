export interface CheckboxGroupProps {
  /**
   * @description The checkbox children
   */
  children: JSX.Element[];
  /**
   * @description The parent checkbox grouping them all
   */
  groupLabel: string;
  /**
   * @description The onChange handler for when any item in the checkbox group changes
   */
  onChange?: (checkedItems: Record<string, boolean>) => void;
}
