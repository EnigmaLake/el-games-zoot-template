import { Box, CSSObject } from "@chakra-ui/react";
import {
  ComponentType,
  FC,
  ForwardedRef,
  forwardRef,
  ReactNode,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  AnimatePresence,
  AnimationProps,
  motion,
  TargetAndTransition,
  Tween,
} from "framer-motion";

export interface PanelSwitcherProps<T> {
  InitialComponent: ComponentType<T>;
  initialComponentProps?: Omit<T, "switchPanel">;
  initialDirection?: TransitionDirection;
  initialComponentKey?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  NextComponent?: ComponentType<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  nextComponentProps?: any;
  nextComponentDirection?: TransitionDirection;
  nextComponentKey?: string;
  onPanelSwitch?: (newPanelKey: string) => void;
  /**
   * This prop will keep in memory the history of panels, so you don't lose passed states passed to the next panel
   * NOTE: the props passed to the next panel will be frozen. So make sure if you pass a value you don't expect it to
   * change.
   */
  keepPanelsAlive?: boolean;
  style?: object;
}

interface SwitchPanelParams<P> {
  Component: ComponentType<P>;
  componentProps?: Omit<P, "switchPanel">;
  direction?: TransitionDirection;
  componentKey?: string;
}

interface PanelData {
  // The component currently rendered, or to be rendered.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: ComponentType<any>;
  pageId: string;

  // The props for the component that is currently rendered, or to be rendered
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  componentProps?: any;
}

export interface PanelSwitcherComponentProps extends Record<string, unknown> {
  switchPanel: <K>(params: SwitchPanelParams<K>) => void;
  reset: () => void;
  goBack: () => void;
}

export type TransitionDirection = "forward" | "backward";

/**
 * A component that allows components to animate between, and pass props to, each other.
 */
function PanelSwitcherInner<T>(
  {
    InitialComponent,
    initialComponentProps,
    initialDirection = "forward",
    initialComponentKey,
    NextComponent,
    nextComponentProps,
    nextComponentDirection = "forward",
    nextComponentKey,
    onPanelSwitch,
    keepPanelsAlive,
    style,
  }: PanelSwitcherProps<T>,
  ref: ForwardedRef<PanelSwitcherComponentProps> | undefined
) {
  const [currentPanel, setCurrentPanel] = useState<PanelData>({
    Component: InitialComponent,
    pageId: initialComponentKey ?? InitialComponent.name,
    componentProps: initialComponentProps,
  });
  const [nextTransitionDirection, setNextTransitionDirection] =
    useState<TransitionDirection>(initialDirection ?? "forward");
  const nextTransitionDirectionRef = useRef(initialDirection ?? "forward");
  const nextPanel = useRef<PanelData | null>(null);
  const isFirstRender = useRef<boolean>(true);
  const history = useRef<PanelData[]>([]);
  const renderedHistory = useRef<{ [k: string]: ReactNode }>({});

  useEffect(() => {
    if (currentPanel.Component.name !== InitialComponent.name) {
      // Set the props only once or this will create a max update depth exceeded error.
      if (currentPanel.componentProps) {
        return;
      }
      // this will make the initialComponentProps available to each subsequent panel
      // however, it will not be there on initial render, so panels should account for at least 1 rerender
      setCurrentPanel((state) => ({
        ...state,
        componentProps: {
          ...initialComponentProps,
          ...currentPanel.componentProps,
        },
      }));
    } else {
      setCurrentPanel((state) => ({
        ...state,
        componentProps: initialComponentProps,
      }));
    }
  }, [
    initialComponentProps,
    currentPanel?.Component?.name,
    InitialComponent?.name,
    currentPanel.componentProps,
  ]);

  const processNextPanel = useCallback(
    (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Component: ComponentType<any>,
      componentName: string,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      componentProps: any,
      direction: TransitionDirection,
      componentKey?: string
    ) => {
      // If the transition direction needs to change (e.g. from 'forward' to 'backward'),
      // update the nextTransition state so that the existing panel's exit animation gets changed
      // to match the desired direction. (We'll render the provided panel in the resulting render + useEffect).
      // Otherwise, immediately set the current page to render the next panel.
      if (nextTransitionDirectionRef.current !== direction) {
        nextTransitionDirectionRef.current = direction;
        setNextTransitionDirection(direction);
      } else {
        setCurrentPanel({
          Component,
          pageId: componentKey ?? componentName,
          componentProps,
        });
        nextPanel.current = null;
      }
    },
    []
  );

  const switchPanel = useCallback(
    <P,>({
      Component,
      componentProps,
      direction = "forward",
      componentKey,
    }: SwitchPanelParams<P>) => {
      const componentName = Component.name;

      // Queue the new panel up for rendering.
      nextPanel.current = {
        Component,
        pageId: componentName,
        componentProps,
      };

      history.current.push(currentPanel);
      processNextPanel(
        Component,
        componentName,
        componentProps,
        direction,
        componentKey
      );

      onPanelSwitch?.(componentKey ?? componentName);
    },
    [currentPanel, processNextPanel, onPanelSwitch]
  );

  const goBackCallback = useCallback(() => {
    const previousPanel = history.current.pop();
    if (!previousPanel) {
      return;
    }

    nextPanel.current = previousPanel;
    nextTransitionDirectionRef.current = "backward";
    setNextTransitionDirection("backward");

    onPanelSwitch?.(
      previousPanel.pageId ?? previousPanel.Component.displayName
    );
  }, [onPanelSwitch]);

  useImperativeHandle(ref, () => ({
    goBack() {
      goBackCallback();
    },
    switchPanel<P>(data: SwitchPanelParams<P>) {
      switchPanel(data);
    },
    reset,
  }));

  const reset = useCallback(() => {
    switchPanel({
      Component: InitialComponent,
      componentProps: initialComponentProps,
      direction: "backward",
    });
  }, [InitialComponent, initialComponentProps, switchPanel]);

  useEffect(() => {
    // If we are transitioning using switchPanel and needed to change animation directions first,
    // just set the current panel to trigger rendering the next panel/
    if (nextPanel.current) {
      setCurrentPanel(nextPanel.current);
      nextPanel.current = null;
      return;
    }

    // If we are transitioning using NextComponent and related props,
    // set the next transition direction if necessary, then set current panel to the component data
    // provided to PanelSwitcher via props.
    if (!NextComponent) {
      return;
    }

    history.current.push(currentPanel);
    processNextPanel(
      NextComponent,
      NextComponent.name,
      nextComponentProps,
      nextComponentDirection,
      nextComponentKey
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    NextComponent,
    nextComponentDirection,
    nextComponentProps,
    nextTransitionDirection,
    processNextPanel,
  ]);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  const augmentedComponentProps = {
    ...currentPanel.componentProps,
    switchPanel,
    goBack: goBackCallback,
    reset,
  };

  const rendered = renderedHistory.current[currentPanel.pageId] ? (
    renderedHistory.current[currentPanel.pageId]
  ) : (
    <currentPanel.Component
      key={currentPanel.pageId}
      {...augmentedComponentProps}
    />
  );

  if (keepPanelsAlive && !renderedHistory.current[currentPanel.pageId]) {
    renderedHistory.current[currentPanel.pageId] = rendered;
  }

  return (
    <Box
      whiteSpace="nowrap"
      overflowY="auto"
      overflowX="hidden"
      width="100%"
      sx={scrollbarStyle}
      {...style}
    >
      <TransitionContainer
        pageId={currentPanel.pageId}
        nextTransitionDirection={nextTransitionDirection}
        // If we still need to render new contents, (e.g. the current render is to simply
        // update the current component's exit direction) render contents in the placeholder.
        isPlaceholder={!!nextPanel.current}
        // If rendering for the first time, don't play the intro animation of contents.
        // Since it's the first render, the contents should already be there w/o animating in.
        shouldPlayIntroAnimation={!isFirstRender.current}
      >
        {rendered}
      </TransitionContainer>
    </Box>
  );
}

export const PanelSwitcher = forwardRef(PanelSwitcherInner) as <T>(
  props: PanelSwitcherProps<T> & {
    ref?: ForwardedRef<PanelSwitcherComponentProps>;
  }
) => ReturnType<typeof PanelSwitcherInner>;

interface TransitionContainerProps {
  pageId: string;
  nextTransitionDirection: TransitionDirection;
  isPlaceholder?: boolean;
  shouldPlayIntroAnimation?: boolean;
  children: ReactNode;
}

/**
 * The internal container that enables a rendered panel to enter/exit in an animated fashion.
 */
const TransitionContainer: FC<TransitionContainerProps> = ({
  pageId,
  nextTransitionDirection,
  shouldPlayIntroAnimation = true,
  isPlaceholder = false,
  children,
}) => {
  const normalizedMotionProps = { ...motionProps[nextTransitionDirection] };

  if (isPlaceholder || !shouldPlayIntroAnimation) {
    normalizedMotionProps["initial"] = { x: "0%" };
  }
  return (
    <AnimatePresence>
      <motion.div
        style={{
          display: "inline-block",
          verticalAlign: "top",
          whiteSpace: "nowrap",
          width: "100%",
        }}
        key={pageId}
        {...normalizedMotionProps}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const DEFAULT_TRANSITION_DURATION = 0.2;

// The end state for all animations:
// Rendered panel should end at a position of 0% and animation using the specified transition config.
const animateConfig: TargetAndTransition = {
  x: "0%",
  transition: {
    duration: DEFAULT_TRANSITION_DURATION,
    delay: DEFAULT_TRANSITION_DURATION,
    ease: "easeOut",
  },
};

// The standard exit animation behavior.
const exitTransitionConfig: Tween = {
  duration: DEFAULT_TRANSITION_DURATION,
  ease: "easeIn",
};

// Animation props for each transition direction:
// For instance, if animating "forward" (components enter from the right):
//   a. the element should start at a position of x: 100%
//   b. it should end the animation at x: 0%,
//   c. it should exit to a position of x: -100%
const motionProps: Record<TransitionDirection, AnimationProps> = {
  forward: {
    initial: { x: "100%" },
    animate: animateConfig,
    exit: {
      x: "-100%",
      transition: exitTransitionConfig,
    },
  },
  backward: {
    initial: { x: "-200%" },
    animate: animateConfig,
    exit: {
      x: "100%",
      transition: exitTransitionConfig,
    },
  },
};

const scrollbarStyle: CSSObject = {
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    width: "0px",
  },
};
