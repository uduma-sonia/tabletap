let selectedTheme = "default";

if (localStorage.getItem("custom-app-theme") !== null) {
  selectedTheme = localStorage.getItem("custom-app-theme");
}

const colors = [
  {
    variant: "default",
    background: "#06171f",
    light: "#A9B388",
    textLight: "#FEFAE0",
    secondary: "#334E3b",
  },
  {
    variant: "purple",
    background: "#28193D",
    light: "#B3A3BA",
    textLight: "#D9D8D9",
    secondary: "#10091D",
  },
  {
    variant: "pink",
    background: "#AA4942",
    light: "#F99B99",
    textLight: "#FFDCDB",
    secondary: "#5B180F",
  },
  {
    variant: "blue",
    background: "#316275",
    light: "#B7DDCD",
    textLight: "#E9F9EF",
    secondary: "#162A54",
  },
  {
    variant: "black",
    background: "#000000",
    light: "#f9f9f9",
    textLight: "#E9F9EF",
    secondary: "#c0c0c0",
  },
];

export const currentTheme = colors.find(
  (item) => item.variant === selectedTheme
);
