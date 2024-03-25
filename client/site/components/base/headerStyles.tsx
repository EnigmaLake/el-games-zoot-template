import { ReactNode } from "react";
import { StylesConfig } from "react-select";
import { makeSelectStyles } from "./makeSelectStyles";

interface Option {
  value: string;
  label: ReactNode;
}

export function makeSearchHeaderSelectStyles<T extends Option>(
  customStyles?: StylesConfig<T, false>
) {
  return makeSelectStyles<T, false>({
    control: (provided) => ({
      ...provided,
      minHeight: 10,
      minWidth: "100px",
    }),
    indicatorSeparator: () => ({}),
    valueContainer: (provided) => ({
      ...provided,
      paddingLeft: "var(--chakra-space-2)",
      paddingRight: "var(--chakra-space-4)",

      lineHeight: "0",
      padding: undefined,
    }),
    singleValue: (provided) => ({
      ...provided,
      margin: "0",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      alignItems: "center",
    }),
    menu: (provided) => ({
      ...provided,
      width: "none",
      minWidth: "100%",
    }),
    ...customStyles,
  });
}
