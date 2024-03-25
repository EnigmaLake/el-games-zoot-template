const CheckboxStyles = {
  baseStyle: {
    control: {
      bg: "transparent",
      _checked: {
        bg: "interactions.primary",
        _hover: {
          bg: [
            "interactions.primary",
            "interactions.primary",
            "linear-gradient(0deg, rgba(25, 101, 191, 0.5), rgba(25, 101, 191, 0.5)), #1E7AE6;",
          ],
        },
      },
    },
  },
  variants: {
    optionMenu: {
      control: {
        bg: "transparent",
        _checked: {
          bg: "interactions.primary",
          _hover: {
            bg: "transparent",
            borderColor: "transparent",
          },
        },
        _hover: {
          bg: "transparent",
        },
      },
    },
  },
};

export default CheckboxStyles;
