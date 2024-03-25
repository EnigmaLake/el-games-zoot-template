import type { ReactNode } from "react";
import { Size } from "../../types/shared";

export interface _InternalTabProps {
  "data-testid": string;
  justifyContent?: string;
  leftIcon?: JSX.Element;
  isDisabled?: boolean;
  isFitted?: boolean;
  size?: Size;
  children?: ReactNode;
}

interface _TabListItem {
  text: string;
  icon?: JSX.Element;
  isDisabled?: boolean;
  useTrailingIcon?: boolean;
}

export interface TabsListProps {
  isFitted?: boolean;
  justifyContent?: string;
  tabs: Array<string | _TabListItem>;
  size: Size;
}

export interface TabsPanelProps {
  panels?: Array<string | ReactNode>;
}

export interface TabsProps {
  isFitted?: boolean;
  justifyContent?: string;
  lazyBehavior?: "unmount" | "keepMounted";
  tabs: TabsListProps["tabs"];
  panels: TabsPanelProps["panels"];
  width?: string;
  size?: Size;
  variant?: string;
  defaultTabIndex?: number;
  indicatorColor?: string;
  indicatorPosition?: "top" | "bottom";
  shouldDisableIndicator?: boolean;
  onChange?: (args: number) => void;
  index?: number; // used when Tabs is a managed component
}
