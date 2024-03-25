import { Button, useMultiStyleConfig, useTab } from "@chakra-ui/react";
import { SegmentProps } from "./SegmentControllerProps";
import { Text } from "../Typography/Text";
import { ComponentType, FC, ReactNode } from "react";
import { TypographyVariant } from "../Typography/TextProps";
import { Size } from "../../types/shared";

export const InternalSegment: FC<SegmentProps> = (props) => {
  const { size, children, isFirstSegment, isLastSegment, disabled } = props;
  const tabProps = useTab({ ...props });
  const styles = useMultiStyleConfig("SegmentController", { size });

  let textVariant: TypographyVariant;
  switch (size) {
    case "sm":
    default:
      textVariant = "small-callout";
  }

  const isSelected = tabProps.tabIndex === 0;

  return (
    <Button
      variant="unstyled"
      __css={styles.tab}
      {...tabProps}
      {...(isFirstSegment && {
        borderTopLeftRadius: "md",
        borderBottomLeftRadius: "md",
      })}
      {...(isLastSegment && {
        borderTopRightRadius: "md",
        borderBottomRightRadius: "md",
      })}
      disabled={disabled}
    >
      <Text variant={textVariant} color={!isSelected ? "secondary" : "primary"}>
        {children}
      </Text>
    </Button>
  );
};

/**
 * We do not want to expose certain props to the consumer, as some should only come from the SegmentController parent component.
 * Therefore, we expose a wrapped Segment component that eventually gets overridden by the InternalSegment
 * when the Segment is rendering the children.
 * https://react-typescript-cheatsheet.netlify.app/docs/hoc/excluding_props/
 */

function withExternalSegmentProps({
  children,
  size = "sm",
  disabled = false,
  isLastSegment = false,
  isFirstSegment = false,
}: {
  size?: Extract<Size, "sm">;
  children?: string | ReactNode | JSX.Element | JSX.Element[];
  disabled?: boolean;
  isFirstSegment?: boolean;
  isLastSegment?: boolean;
}) {
  return function <
    T extends {
      size?: Extract<Size, "sm">;
      children?: string | ReactNode | JSX.Element | JSX.Element[];
      disabled?: boolean;
      isFirstSegment?: boolean;
      isLastSegment?: boolean;
    }
  >(Component: ComponentType<T>) {
    return function Segment(props: Omit<T, "size">): JSX.Element {
      const newProps = {
        ...props,
        size,
        children,
        disabled,
        isFirstSegment,
        isLastSegment,
      } as T;
      return <Component {...newProps} />;
    };
  };
}

export const Segment = withExternalSegmentProps({})(InternalSegment);
