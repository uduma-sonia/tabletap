import { extendTheme } from "@chakra-ui/react";
import { Button, Input, Select } from "./components";
// import { currentTheme } from "./appColors";

let selectedFont = "Manrope Variable";

// if (localStorage.getItem("custom-app-font") !== null) {
//   selectedFont = localStorage.getItem("custom-app-font");
// }

const theme = extendTheme({
  components: {
    Input,
    Select,
    Button,
  },
  colors: {
    brand: {
      primary: "#228B22",
      light: "#3bf73b",
      gray: "#ebf2eb",
      // secondary: currentTheme.secondary,
    },
    green: {
      main: "#5F6F52",
    },
    brown: {
      main: "#765341",
    },
    pink: {
      main: "#AA4942",
    },
    purple: {
      main: "#28193D",
    },
    black: {
      main: "#000000",
    },
    blue: {
      main: "#316275",
    },
  },
  fonts: {
    body: selectedFont,
    heading: selectedFont,
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
});

export default theme;
