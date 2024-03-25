import { FC, PropsWithChildren, RefObject, useEffect, useState } from "react";
import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { getFullPageViewHeightValue } from "../../utility/style";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  header?: JSX.Element | string | null;
  footer?: JSX.Element | string | null;
  bgColor?: string;
  closeOnOverlayClick?: boolean;
  initialFocusRef?: RefObject<HTMLElement>;
}

// TO DO: Can we make this generic enough for the design system/base component library
const Drawer: FC<PropsWithChildren<DrawerProps>> = ({
  isOpen,
  onClose,
  header,
  footer,
  children,
  bgColor = "_background.bgSolidL0",
  closeOnOverlayClick = true,
  initialFocusRef,
}) => {
  const [heightValue, setHeightValue] = useState("100vh");

  useEffect(() => {
    setHeightValue(getFullPageViewHeightValue());
  }, []);
  return (
    <ChakraDrawer
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef={initialFocusRef}
      size={{ base: "full", lg: "md" }}
      closeOnOverlayClick={closeOnOverlayClick}
    >
      <DrawerOverlay />
      <DrawerContent
        m={0}
        borderRadius={0}
        backgroundColor={bgColor}
        p={{ base: 3, lg: 6 }}
        height={heightValue}
        maxHeight={heightValue}
      >
        {header && <DrawerHeader p={0}>{header}</DrawerHeader>}
        <DrawerCloseButton />
        <DrawerBody p={0}>{children}</DrawerBody>
        {footer && <DrawerFooter p={0}>{footer}</DrawerFooter>}
      </DrawerContent>
    </ChakraDrawer>
  );
};

export default Drawer;
