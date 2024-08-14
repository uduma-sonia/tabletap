import { theme } from "@chakra-ui/react";

export const Input = {
  ...theme.components.Input,
  variants: {
    ...theme.components.Input.variants,
    primary: {
      field: {
        py: "clamp(1rem, 0.125vw + 1rem, 1.125rem)",
        px: "clamp(1rem, 1vw + 0.3rem, 1rem)",
        height: "45px",
        border: "1px solid",
        borderRadius: "0px",
        fontSize: "sm",
        bg: "transparent",
        borderColor: "brand.light",
        color: "white",
        fontWeight: "600",
        // fontFamily: "Manrope Variable",
      },
    },
  },
  defaultProps: {
    ...theme.components.Input.defaultProps,
    variant: "primary",
  },
};
