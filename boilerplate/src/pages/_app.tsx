import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import { GlobalStyle } from "@/styles/globalStyle";

function MyApp({Component} : AppProps) {
    console.log('_app')
    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>nextjs boiler plate</title>
            </Head>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component ponent />
            </ThemeProvider>
        </>
    )
}
export default MyApp;