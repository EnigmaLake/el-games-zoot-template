import {
  Button,
  CloseButtonProps,
  Modal as ChakraModal,
  ModalBody,
  ModalBodyProps,
  ModalCloseButton,
  ModalContent,
  ModalContentProps,
  ModalFooter,
  ModalFooterProps,
  ModalHeader,
  ModalHeaderProps,
  ModalOverlay,
  Spinner,
} from "@chakra-ui/react";
import { ComponentProps, FC, ReactNode, useCallback, useState } from "react";
import { legacy_colors } from "../../style/sweeps_corp_legacy";
import { addTransparencyToColor } from "../../utility/style";
// TO DO: Remove reference to colors like this when we transition to the design system

export interface Props {
  /** Used to control of the dialog is open or not */
  isOpen: boolean;
  /** Body of the dialog */
  content: React.ReactNode;
  /** Called when the dialog is closed from a user clicking on the close button */
  onClose?: () => void;
  /**
   * Callback when the "ok" button is pressed. If this returns a promise, the
   * dialog will be unclosable until the promise completes */
  onOk?: (() => void) | (() => Promise<unknown>) | undefined;
  /** If present, replaces the "Ok" text in the ok button */
  okText?: React.ReactNode;
  /** If present, adds a "close" button to the dialog with this text, in a ModalFooter */
  closeText?: React.ReactNode;
  /** When set to true, adds a "close" button to the upper right, as a ModalCloseButton */
  closable?: boolean;
  footer?: ReactNode;
  /** Props for the Chakra <Modal> component */
  modalProps?: Partial<ComponentProps<typeof ChakraModal>>;
  modalContentProps?: ModalContentProps;
  modalBodyProps?: ModalBodyProps;
  /** When there is a footer, pass these props along */
  modalFooterProps?: ModalFooterProps;
  /**  */
  header?: React.ReactNode;
  modalHeaderProps?: ModalHeaderProps;
  /** Determines if the dialog looks "busy". If true, also disables the various ok/close buttons */
  isBusy?: boolean;
  /** Forces the ok button to be disabled */
  okDisabled?: boolean;
  /** If the modal is closable, pass these props to the button */
  closeButtonProps?: CloseButtonProps;
}

export const Modal: FC<Props> = ({
  isOpen,
  content,
  onClose,
  closeText = "Close",
  closable = false,
  footer,
  modalBodyProps,
  modalContentProps,
  modalFooterProps,
  header,
  modalHeaderProps,
  modalProps,
  okText = "Ok",
  onOk,
  okDisabled,
  isBusy,
  closeButtonProps,
}) => {
  const [canClose, setCanClose] = useState(true);

  // TODO: expose business to consumer
  const onClickOk = useCallback(async () => {
    const result = onOk?.();
    if (result) {
      try {
        setCanClose(false);
        await result;
      } finally {
        setCanClose(true);
      }
    }
  }, [onOk]);
  const onClickClose = useCallback(() => {
    if (canClose) {
      onClose?.();
    }
  }, [canClose, onClose]);

  const hasOkButton = !!okText && !!onOk;

  const hasCloseButton = !!closeText && !!onClose;
  const hasFooter = !!footer || hasOkButton || hasCloseButton;
  return (
    <ChakraModal
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={onClickClose}
      isCentered
      {...modalProps}
    >
      <ModalOverlay
        bgColor={addTransparencyToColor(
          legacy_colors.brand.neutral900 as string,
          0.7
        )}
        backdropFilter="blur(20px)"
      />
      <ModalContent
        bg="brand.neutral900"
        boxShadow="0px 16px 32px rgba(3, 17, 36, 0.5)"
        borderRadius="lg"
        {...modalContentProps}
      >
        {closable && (
          <ModalCloseButton disabled={!canClose} {...closeButtonProps} />
        )}
        {header && (
          <ModalHeader py={8} {...modalHeaderProps}>
            {header}
          </ModalHeader>
        )}
        <ModalBody {...modalBodyProps}>{content}</ModalBody>
        {hasFooter && (
          <ModalFooter
            gap={1}
            display="flex"
            flexDirection="column"
            {...modalFooterProps}
          >
            {footer}
            {isBusy && <Spinner />}
            {hasOkButton && (
              <Button
                variant="primary"
                h={12}
                onClick={onClickOk}
                disabled={okDisabled ?? (!canClose && !isBusy)}
                width="24rem"
                fontSize="base"
              >
                {okText}
              </Button>
            )}
            {hasCloseButton && (
              <Button
                variant="ghost"
                h={12}
                onClick={onClickClose}
                disabled={!canClose && !isBusy}
                width="24rem"
                fontSize="base"
              >
                {closeText}
              </Button>
            )}
          </ModalFooter>
        )}
      </ModalContent>
    </ChakraModal>
  );
};
