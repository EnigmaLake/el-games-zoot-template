const Header = {
  baseStyle: {
    fontWeight: 600,
  },
  variants: {
    h1: {
      fontSize: { base: "2rem", lg: "2.5rem" },
      lineHeight: { base: "2.5rem", lg: "3.125rem" },
      letterSpacing: { base: "-0.2px", lg: "-0.2px" },
    },
    h2: {
      fontSize: { base: "1.5625rem", lg: "1.75rem" },
      lineHeight: { base: "1.9375rem", lg: "2.1875rem" },
      letterSpacing: { base: "-0.12px", lg: "-0.12px" },
    },
    h3: {
      fontSize: "1.25rem",
      lineHeight: "1.5625rem",
      letterSpacing: "0px",
    },
    h4: {
      fontSize: "1rem",
      lineHeight: "1.25rem",
      letterSpacing: "0.12px",
    },
    h5: {
      fontSize: "0.875rem",
      lineHeight: "1.125rem",
      letterSpacing: "0.24px",
    },
    h6: {
      fontSize: "0.75rem",
      lineHeight: "0.9375rem",
      letterSpacing: "0.32px",
    },
  },
  defaultProps: {
    variant: "h2",
  },
};

const Text = {
  variants: {
    large: {
      fontSize: "1.25rem",
      fontWeight: 400,
      lineHeight: "1.75rem",
      letterSpacing: "0px",
    },
    "large-bold": {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: "1.75rem",
      letterSpacing: "0px",
    },
    "large-callout": {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: "1.75rem",
      letterSpacing: "0.64px",
    },
    base: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1.25rem",
      letterSpacing: "0.12px",
    },
    "base-bold": {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: "1.25rem",
      letterSpacing: "0.12px",
    },
    "base-bold-ellipsis": {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: "1.25rem",
      letterSpacing: "0.12px",
      whiteSpace: "nowrap",
      width: "100%",
      textOverflow: "ellipsis",
      display: "inline-block",
      textWrap: "nowrap !important",
      overflow: "hidden",
    },
    "base-callout": {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: "1.25rem",
      letterSpacing: "0.64px",
    },
    "base-monospace": {
      fontSize: "1rem",
      fontWeight: 700,
      lineHeight: "1.25rem",
      letterSpacing: "0.12px",
      fontFamily: "Roboto Mono",
    },
    "base-paragraph": {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1.5rem",
      letterSpacing: "0.12px",
    },
    "base-paragraph-bold": {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: "1.5rem",
      letterSpacing: "0.12px",
    },
    small: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "18px",
      letterSpacing: "0.24px",
    },
    "small-bold": {
      fontSize: "0.875rem",
      fontWeight: 600,
      lineHeight: "18px",
      letterSpacing: "0.24px",
    },
    "small-callout": {
      fontSize: "0.875rem",
      fontWeight: 600,
      lineHeight: "18px",
      letterSpacing: "0.64px",
    },
    "small-paragraph": {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.25rem",
      letterSpacing: "0.24px",
    },
    "small-paragraph-bold": {
      fontSize: "0.875rem",
      fontWeight: 600,
      lineHeight: "1.25rem",
      letterSpacing: "0.24px",
    },
    footnote: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: "1rem",
      letterSpacing: "0.32px",
    },
    "footnote-bold": {
      fontSize: "0.75rem",
      fontWeight: 600,
      lineHeight: "1rem",
      letterSpacing: "0.32px",
    },
    "footnote-overline": {
      fontSize: "0.75rem",
      fontWeight: 500,
      lineHeight: "1rem",
      letterSpacing: "0.72px",
      textTransform: "uppercase",
    },
    "subscript-overline": {
      fontSize: "10px",
      fontWeight: 500,
      lineHeight: "0.875rem",
      letterSpacing: "0.72px",
      textTransform: "uppercase",
    },
  },
  defaultProps: {
    variant: "base",
  },
};

export { Header, Text };
