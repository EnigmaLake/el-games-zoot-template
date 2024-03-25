import { defineStyleConfig } from "@chakra-ui/react";

const error = {
  background: "error-background",
  color: "error-primary",
};

export const AlertBanner = defineStyleConfig({
  baseStyle: {
    padding: 3,
    borderRadius: "md",
  },
  variants: {
    success: {
      background: "success-background",
      color: "success-primary",
    },
    error,
    errorWithPadding: {
      ...error,
      padding: "12px 24px",
    },
    warning: {
      background: "warning-background",
      color: "warning-primary",
    },
    info: {
      background: "background-level-2",
      color: "inter-primary-default",
    },
    loading: {
      background: "background-level-2",
      color: "text-primary",
    },
  },
  defaultProps: {
    variant: "success",
    size: "md",
  },
});
