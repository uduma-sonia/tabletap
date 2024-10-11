import { theme } from "@chakra-ui/react";

export const Textarea = {
  ...theme.components.Textarea,
  variants: {
    ...theme.components.Textarea.variants,
    primary: {
      field: {
        // py: "clamp(1rem, 0.125vw + 1rem, 1.125rem)",
        // px: "clamp(1rem, 1vw + 0.3rem, 1rem)",
        // height: "45px",
        // border: "1px solid",
        // borderRadius: "10px",
        // fontSize: "sm",
        // bg: "transparent",
        // borderColor: "black",
        // color: "#222222",
        // fontWeight: "600",
      },
    },
  },
  defaultProps: {
    ...theme.components.Textarea.defaultProps,
    variant: "primary",
  },
};
