import type { AppProps } from "next/app";
import Head from "next/head";
import config from "../data/config";
import theme from "../data/theme";
import { createGlobalStyle } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>{config.siteTitle}</title>
			</Head>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}

// Global CSS
const GlobalStyle = createGlobalStyle`
    :root{
        --color-primary: ${theme.colors.primary};
        --color-secondary: ${theme.colors.secondary};
    }
    * {
        box-sizing: border-box;
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: ${theme.font.main}, ${theme.font.fallBacks};
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    h1,h2,h3,h4,h5,h6{
        margin: 0;
    }
`;

export default MyApp;
