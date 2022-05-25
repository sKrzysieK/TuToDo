// Providers.tsx
import { ThemeProvider } from "styled-components";
import darkTheme from "../styles/themes/darkTheme";
import lightTheme from "../styles/themes/lightTheme";

const CustomThemeProvider = (props: any) => {
  // i opt out of localStorage and the built in onChange handler because I want all theming to be based on the user's OS preferences
  //   const { value } = useDarkMode(false, { storageKey: null, onChange: null })
  const theme = lightTheme;

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default CustomThemeProvider;
