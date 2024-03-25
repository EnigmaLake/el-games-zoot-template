import { Box, BoxProps, Text, useStyleConfig } from "@chakra-ui/react";
import { FC } from "react";

interface MenuButtonProps {
  isActive: boolean;
  icon: JSX.Element;
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: string;
  shouldPrependPath?: boolean;
}

const noop = () => {
  /*no-op*/
};

const MenuButton: FC<MenuButtonProps> = ({
  variant,
  isActive,
  icon,
  label,
  href,
  onClick,
}) => {
  const isActiveMenu = href && isActive;
  const styleVariant = variant !== "white" && isActiveMenu ? "active" : variant;
  const styles = useStyleConfig("SidebarMenuButton", { variant: styleVariant });
  const backgroundColor = isActiveMenu ? "brand.neutral700" : styles.bg;

  return (
    <Box
      className="menu-button"
      as={href ? "a" : "div"}
      alignItems="center"
      backgroundColor={backgroundColor as BoxProps["backgroundColor"]}
      borderRadius="2.5rem" // 40px
      display="flex"
      px={2.5}
      width="full"
      height={9}
      transition="all 200ms"
      sx={styles}
      onClick={href ? onClick : noop}
      data-test={`nav-item-sidebar-${label.toLowerCase()}`}
    >
      {icon}
      <Text
        color="inherit"
        fontSize="sm"
        ml={2}
        whiteSpace="nowrap"
        letterSpacing="minimum"
      >
        {label}
      </Text>
    </Box>
  );
};

export default MenuButton;
