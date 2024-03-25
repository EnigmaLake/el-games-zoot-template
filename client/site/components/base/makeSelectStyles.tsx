import { mergeStyles, StylesConfig } from "react-select";

const defaultControlBgColor = "var(--chakra-colors-background-02)";
const defaultMenuBgColor = "var(--chakra-colors-background-01)";

/** Create styles */
export function makeSelectStyles<T, IsMulti extends boolean>(
  customStyles?: StylesConfig<T, IsMulti>
): StylesConfig<T, IsMulti> {
  const baseStyles: StylesConfig<T, IsMulti> = {
    control: (provided) => ({
      ...provided,
      borderWidth: 0,
      backgroundColor: defaultControlBgColor,
      borderRadius: "var(--radius-m)",
    }),
    container: (provided) => ({
      ...provided,
      border: "none",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      alignItems: "flex-start",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      margin: 0,
      backgroundColor: "var(--chakra-colors-background-01)",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "white",
      cursor: "pointer",
      opacity: 0.6,
      ":hover": {
        opacity: 1,
      },
    }),
    clearIndicator: (provided) => ({
      ...provided,
      cursor: "pointer",
      opacity: 0.6,
      ":hover": {
        opacity: 1,
      },
    }),
    input: (provided) => ({
      ...provided,
      color: "var(--chakra-colors-grayscale-white)",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: defaultMenuBgColor,
      border: "1px solid var(--chakra-colors-background-01)",
      color: "white",
      borderRadius: "var(--chakra-radii-base)",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state?.isFocused
        ? "var(--chakra-colors-background-02)"
        : "transparent",
      cursor: "pointer",
      fontSize: "var(--chakra-fontSizes-sm)",
      lineHeight: "var(--chakra-lineHeights-5)",
    }),
    multiValue: (provided) => ({
      ...provided,
      borderRadius: "var(--chakra-radii-lg)",
      color: "white",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      fontSize: "var(--chakra-fontSizes-xs)",
      lineHeight: "var(--chakra-lineHeights-4\\.5)",
      color: "white",
    }),
    multiValueRemove: () => ({
      backgroundColor: "transparent",
      color: "white",
      marginLeft: "var(--chakra-space-1\\.5)",
      opacity: 0.6,
      ":hover": {
        opacity: 1,
      },
    }),
  };

  if (customStyles) {
    return mergeStyles(baseStyles, customStyles);
  }
  return baseStyles;
}
