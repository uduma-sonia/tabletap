import { theme } from "@chakra-ui/react";

export const Select = {
  ...theme.components.Select,
  variants: {
    ...theme.components.Input.variants,
    primary: {
      field: {
        height: "45px",
        border: "1.4px solid",
        borderRadius: "10px",
        borderColor: "brand.gray",
        color: "#222222",
        fontWeight: "600",
        cursor: "pointer",
        fontSize: "sm",
        _placeholder: { opacity: "1", fontWeight: "300" },
        _invalid: {
          borderWidth: "1.4px",
          borderColor: "red.300",
        },
      },
    },
  },
  defaultProps: {
    ...theme.components.Select.defaultProps,
    variant: "primary",
  },
};
