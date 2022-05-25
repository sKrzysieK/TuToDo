import type { AppProps } from "next/app";
import BasicLayout from "../layouts/BasicLayout";
import CustomThemeProvider from "../providers/CustomThemeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider>
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
    </CustomThemeProvider>
  );
}

export default MyApp;
