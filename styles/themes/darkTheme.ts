import { ThemeInterface } from "../../types/styled";
import defaultTheme from "./baseTheme";

const darkTheme: ThemeInterface = {
  ...defaultTheme,
  bg: {
    primary: "#121212",
    secondary: "#111111",
  },
  text: {
    primary: "#fbfbfc",
    secondary: "#767676",
    highlighted: "#e0a912",
  },
  hover: {
    primary: "#202020",
    secondary: "#fff",
  },
};

export default darkTheme;
