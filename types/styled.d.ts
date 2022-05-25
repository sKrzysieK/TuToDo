import "styled-components";

export interface BaseThemeInterface {
  fontSizes: string[];
  fontWeights: {
    body: number;
    subheading: number;
    link: number;
    bold: number;
    heading: number;
  };
  lineHeights: {
    body: number;
    heading: number;
    code: number;
  };
}

export interface ThemeInterface extends BaseThemeInterface {
  bg: { primary: string; secondary: string };
  text: {
    primary: string;
    secondary: string;
    crossedOut?: string;
    highlighted: string;
  };
  // links: {link:string, active:string, visited:string, hover:string},
  hover: { primary: string; secondary: string };
}

declare module "styled-components" {
  export interface DefaultTheme extends ThemeInterface {}
}
