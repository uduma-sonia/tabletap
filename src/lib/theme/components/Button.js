import { theme } from "@chakra-ui/react";

export const Button = {
  ...theme.components.Button,
  variants: {
    primary: {
      fontSize: "sm",
      height: "fit-content",
      py: "5px",
      boxShadow: "lg",
      bg: "brand.secondary",
      color: "white",
    },
    thick: {
      fontSize: "sm",
      height: "fit-content",
      py: "5px",
      boxShadow: "lg",
      bg: "brand.secondary",
      color: "white",
    },
  },
  defaultProps: {
    ...theme.components.Button.defaultProps,
    variant: "primary",
  },
};
