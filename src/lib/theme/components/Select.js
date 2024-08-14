import { theme } from "@chakra-ui/react";

export const Select = {
  ...theme.components.Select,
  variants: {
    ...theme.components.Input.variants,
    primary: {
      field: {
        height: "42px",
        border: "1.4px solid",
        borderRadius: "10px",
        fontSize: "sm",
        borderColor: "brand.400",
        cursor: "pointer",
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
