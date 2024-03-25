import {
  Box,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels as ChakraTabsPanel,
  Tabs as ChakraTabs,
  useMultiStyleConfig,
  useTab,
} from "@chakra-ui/react";
import React, { FC, useMemo } from "react";
import { TabButton } from "./TabButton";
import {
  _InternalTabProps,
  TabsListProps,
  TabsPanelProps,
  TabsProps,
} from "./TabProps";

interface TabStyles {
  _selected: { color?: string };
  [key: string]: string | number | boolean | object | undefined;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InternalTab = React.forwardRef<any, _InternalTabProps>((props, ref) => {
  const tabProps = useTab<object>({ ...props, ref });
  const styles = useMultiStyleConfig("Tabs", tabProps);
  const isSelected = !!tabProps["aria-selected"];

  const tabStyles: TabStyles = styles.tab as unknown as TabStyles;
  const textColor = (
    isSelected ? tabStyles?.["_selected"]?.color : styles?.tab?.color
  ) as string;

  return (
    <Box
      __css={styles.tab}
      {...tabProps}
      data-testid={undefined}
      transitionDuration="500ms"
    >
      <TabButton
        variant="tertiary"
        {...props}
        {...tabProps}
        disabled={props.isDisabled}
        cssOverrides={styles.tab}
        textColor={textColor}
      >
        {props.children}
      </TabButton>
    </Box>
  );
});

InternalTab.displayName = "InternalTab";

export const TabsList: FC<TabsListProps> = (props) => {
  const { tabs, size, isFitted, justifyContent } = props;
  const tabComponents = useMemo(() => {
    if (tabs && Array.isArray(tabs)) {
      return tabs.map((tabItem, index) => {
        const isString = typeof tabItem === "string";
        const {
          text,
          icon = undefined,
          isDisabled = false,
          useTrailingIcon = false,
        } = isString ? { text: tabItem } : tabItem;
        const iconProp = { [useTrailingIcon ? "rightIcon" : "leftIcon"]: icon };

        return (
          <InternalTab
            key={`tabs-${icon ? "icon-" : ""}tab-${index}`}
            data-testid={`tabs-${icon ? "icon-" : ""}tab-${index}`}
            isDisabled={isDisabled}
            size={size}
            isFitted={isFitted}
            justifyContent={justifyContent}
            {...iconProp}
          >
            {text}
          </InternalTab>
        );
      });
    }
  }, [tabs, size, isFitted, justifyContent]);

  return <TabList>{tabComponents}</TabList>;
};

export const TabsPanel: FC<TabsPanelProps> = ({ panels }) => {
  const panelComponents = useMemo(() => {
    if (panels && Array.isArray(panels)) {
      return panels.map((panelItem, index) => {
        return (
          <TabPanel
            key={`tabs-panel-${index}`}
            data-testid={`tabs-panel-${index}`}
            p={0}
            mt={4}
          >
            {panelItem}
          </TabPanel>
        );
      });
    }
  }, [panels]);

  return <ChakraTabsPanel>{panelComponents}</ChakraTabsPanel>;
};

const _indicatorStyles = {
  mt: "-2px",
  height: "2px",
  bg: "inter-primary-default",
  borderRadius: "1px",
};

/**
 * @description Tabs
 */
export const Tabs: FC<TabsProps> = (props) => {
  const {
    isFitted,
    lazyBehavior = "unmount",
    tabs = [],
    panels = [],
    width = "full",
    size = "md",
    defaultTabIndex,
    justifyContent,
    indicatorColor = "inter-primary-default",
    indicatorPosition = "bottom",
    shouldDisableIndicator = false,
    onChange: propsOnChange,
    ...rest // spread on root tab object
  } = props;
  const indicatorOverride = useMemo(
    () => ({
      bg: indicatorColor,
      top: indicatorPosition === "top" ? 0 : undefined,
    }),
    [indicatorColor, indicatorPosition]
  );

  const defaultIndex = useMemo(
    () =>
      tabs.findIndex(
        (tab) =>
          typeof tab === "string" ||
          tab.isDisabled === false ||
          tab.isDisabled === undefined
      ) ?? 0,
    [tabs]
  );

  const handleOnChange = (value: number) => {
    // performance any common action
    // then call the onChange prop if provided
    if (propsOnChange && typeof propsOnChange === "function") {
      propsOnChange(value);
    }
  };

  return (
    <ChakraTabs
      w={width}
      size={size}
      isFitted={isFitted}
      isLazy
      lazyBehavior={lazyBehavior}
      defaultIndex={defaultTabIndex ?? defaultIndex}
      {...rest}
      position="relative"
      onChange={handleOnChange}
    >
      {tabs.length > 1 && (
        <Box
          overflowX="auto"
          pos="relative"
          overscrollBehavior="none"
          sx={{ "::-webkit-scrollbar": { display: "none" } }}
        >
          <TabsList
            tabs={tabs}
            size={size}
            isFitted={isFitted}
            justifyContent={justifyContent}
          />
          {!shouldDisableIndicator && (
            <TabIndicator {...{ ..._indicatorStyles, ...indicatorOverride }} />
          )}
        </Box>
      )}
      <TabsPanel panels={panels} />
    </ChakraTabs>
  );
};
