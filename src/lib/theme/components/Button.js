import { theme } from "@chakra-ui/react";

export const Button = {
  ...theme.components.Button,
  variants: {
    primary: {
      fontSize: "md",
      height: "45px",
      fontWeight: "700",
      boxShadow: "lg",
      bg: "brand.primary",
      color: "white",
      borderRadius: "10px",
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
