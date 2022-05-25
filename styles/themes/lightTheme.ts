import { ThemeInterface } from "../../types/styled";
import defaultTheme from "./baseTheme";

const lightTheme: ThemeInterface = {
  ...defaultTheme,
  bg: {
    primary: "#fff",
    secondary: "#edae0e",
  },
  text: {
    primary: "#000000",
    secondary: "#767676",
    crossedOut: "#292929",
    highlighted: "#e0a912",
  },
  hover: {
    primary: "#202020",
    secondary: "#fff",
  },
};

export default lightTheme;
