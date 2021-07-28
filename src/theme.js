// Import Statements
import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const colors = {
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "76E4F7",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044",
  },
  // ...
};

const fonts = {
  heading: "Source Code Pro",
  body: "Source Code Pro",
};

// extend the theme
const theme = extendTheme({ config, colors, fonts });
export default theme;
