import {
  Box,
  Flex,
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalContentProps,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps as ChakraModalProps,
  SystemStyleObject,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FC, PropsWithChildren, useCallback, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { ChevronLeft } from "../../icons/library/ChevronLeft";
import { BaseButton } from "../Button/BaseButton";
import { ModalProps } from "./ModalProps";

type FooterDirections = NonNullable<ModalProps["footerButtonsDirection"]>;
const FooterStyles: {
  [K in FooterDirections]: ChakraModalProps["styleConfig"];
} = {
  vertical: {
    flexDirection: "column",
    gap: 2,
    button: {
      width: "fit-content",
    },
    alignSelf: "center",
    paddingTop: 4,
    paddingBottom: 4,
  },
  horizontal: {
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    gap: 4,
    paddingTop: 4,
    paddingBottom: 6,
  },
};

export const Modal: FC<ModalProps> = (props) => {
  const {
    size: sizeProp = "md",
    header,
    scrollFooter,
    children,
    closable,
    onGoBack,
    modalPositioning = "maximum-margin",
    scrollBehavior = "inside",
    footerButtons,
    footerButtonsDirection = "horizontal",
    headerRef,
    shouldHaveTopPadding = true,
    shouldHaveBackgroundOverlay = true,
    shouldHaveBackgroundImage = false,
    modalBodyStyle,
    ...rest
  } = props;
  // -1 => no scroll, 0 => non-scrolled, 1 => scrolled, 2 => fully-scrolled
  const [scrollStatus, setScrollStatus] = useState(-1);
  const onScroll = useDebouncedCallback(
    useCallback((e) => {
      const target = e.target;
      if (target.clientHeight === target.scrollHeight) {
        setScrollStatus(-1);
      } else if (
        target.scrollTop + target.clientHeight >=
        target.scrollHeight
      ) {
        setScrollStatus(2);
      } else if (e.target.scrollTop > 0) {
        setScrollStatus(1);
      } else {
        setScrollStatus(0);
      }
    }, []),
    20
  );
  const size = useBreakpointValue({
    xs: "full",
    md: sizeProp,
  });

  const footerPadding = size === "full" ? 4 : 5;
  const footerContent = footerButtons && (
    <ModalFooter
      paddingInline={scrollFooter ? 0 : footerPadding}
      alignItems="flex-end"
      pos="relative"
      sx={FooterStyles[footerButtonsDirection]}
      mb="1rem"
    >
      {renderFooterButtons(footerButtons)}
      <OverflowBorder
        borderPosition="top"
        visible={scrollStatus >= 0 && scrollStatus < 2}
      />
    </ModalFooter>
  );
  const contentVerticalMargin =
    modalPositioning === "minimum-margin" ? "10rem" : "2.5rem";
  let contentProps: Partial<ModalContentProps> | undefined = {
    my: contentVerticalMargin,
    maxHeight: `calc(100% - 2.5rem)`,
    bg: "background-level-1",
  };
  if (size === "full") {
    contentProps = {
      bg: "background-level-0",
    };
  }
  if (shouldHaveBackgroundImage) {
    contentProps = {
      bgImage: "url(https://c.animaapp.com/mBQkjU0S/img/mask-group.png)",
      bgSize: "cover",
      bgPos: "center",
    };
  }
  let headerPaddingInlineStart = size === "full" ? 4 : 6;

  if (onGoBack) {
    headerPaddingInlineStart = 2;
  }
  return (
    <ChakraModal scrollBehavior={scrollBehavior} size={size} {...rest}>
      {shouldHaveBackgroundOverlay && (
        <ModalOverlay bgColor="bg-transparent-02" backdropFilter="blur(16px)" />
      )}
      <ModalContent shadow="modal" {...contentProps} rounded="14px">
        {header && (
          <ModalHeader
            fontSize="md"
            lineHeight={7} // 1.75rem
            display="flex"
            color="text-primary"
            paddingInlineStart={headerPaddingInlineStart}
            paddingInlineEnd={2}
            position="relative"
          >
            <Flex gap={1} ref={headerRef} w="full">
              {onGoBack && (
                <Flex
                  aria-label="Go back"
                  cursor="pointer"
                  onClick={onGoBack}
                  alignSelf="left"
                >
                  <ChevronLeft boxSize={4} />
                </Flex>
              )}
              {header}
            </Flex>
            {closable && (
              <ModalCloseButton alignContent="end" sx={headerButtonStyles} />
            )}
            <OverflowBorder
              borderPosition="bottom"
              visible={scrollStatus > 0}
            />
          </ModalHeader>
        )}
        <ModalBody
          onScroll={onScroll}
          pt={shouldHaveTopPadding ? 6 : 0}
          pb={scrollFooter ? 0 : 6}
          paddingInline={size === "full" ? 4 : 6}
          ref={(ref) => {
            if (ref) {
              onScroll({ target: ref });
            }
          }}
          {...modalBodyStyle}
        >
          {!header && closable && (
            <ModalCloseButton sx={{ pos: "absolute", right: 2, top: 4 }} />
          )}
          {children}
          {scrollFooter && footerContent}
        </ModalBody>
        {!scrollFooter && footerContent}
      </ModalContent>
    </ChakraModal>
  );
};

const headerButtonStyles: SystemStyleObject = {
  pos: "initial",
  width: "1.75rem",
  height: "1.75rem",
};

const OverflowBorderBg = {
  top: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)",
  bottom: "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)",
};

const OverflowBorder: FC<
  PropsWithChildren<{
    visible: boolean;
    borderPosition: "top" | "bottom";
  }>
> = ({ visible, borderPosition }) => {
  return (
    <Box
      pos="absolute"
      w="100%"
      h={1}
      opacity={visible ? 0.3 : 0}
      left={0}
      top={borderPosition === "top" ? "-3px" : undefined}
      bottom={borderPosition === "bottom" ? "-3px" : undefined}
      bg={OverflowBorderBg[borderPosition]}
      transition="opacity 0.25s ease"
      borderColor="border-secondary"
      borderBottomWidth={borderPosition === "top" ? 1 : 0}
      borderTopWidth={borderPosition === "bottom" ? 1 : 0}
    />
  );
};

export function renderFooterButtons(
  footerButtons: ModalProps["footerButtons"]
) {
  return footerButtons?.map((footerButton, idx) => (
    <BaseButton
      key={idx}
      size="lg"
      variant={footerButton.variant}
      onClick={footerButton.onClick}
      disabled={footerButton.disabled}
      loading={footerButton.isLoading}
      borderRadius="xxl"
    >
      {footerButton.label}
      {footerButton.children}
    </BaseButton>
  ));
}

/**
 * Modal replacement component to just render the header, body and footer without the actual Modal.
 */
export const NoModal: FC<ModalProps> = ({
  isOpen,
  header,
  children,
  footerButtons,
  footerButtonsDirection = "horizontal",
  onGoBack,
  headerRef,
}) => {
  if (!isOpen) {
    return null;
  }
  return (
    <Flex flexDir="column">
      <Flex
        fontWeight="semibold"
        fontSize="md"
        lineHeight={7} // 1.75rem
        display="flex"
        justifyContent="space-between"
        color="text-primary"
        paddingY={4}
        paddingInlineEnd={2}
        position="relative"
      >
        <Flex gap={1} ref={headerRef} align="center">
          {onGoBack && (
            <Flex
              aria-label="Go back"
              cursor="pointer"
              onClick={onGoBack}
              align="center"
            >
              <ChevronLeft boxSize={4} />
            </Flex>
          )}
          {header}
        </Flex>
      </Flex>
      {children}
      {footerButtons && (
        <Flex
          flexDir={
            footerButtonsDirection === "vertical" ? "column" : "row-reverse"
          }
          alignItems="flex-end"
          pos="relative"
          paddingY={4}
          sx={FooterStyles[footerButtonsDirection]}
        >
          {renderFooterButtons(footerButtons)}
        </Flex>
      )}
    </Flex>
  );
};
