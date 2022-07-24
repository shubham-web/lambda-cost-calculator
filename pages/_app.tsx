import type { AppProps } from "next/app";
import Head from "next/head";
import config from "../data/config";
import theme from "../data/theme";
import { createGlobalStyle } from "styled-components";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>{config.siteTitle}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<GlobalStyle />
			<Component {...pageProps} />
			<Toaster position="bottom-center" />
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
    body{
        background: #000000;
        color: white;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    h1,h2,h3,h4,h5,h6{
        margin: 0;
    }

    
    input[type="checkbox"],
    input[type="radio"] {
        position: absolute;
        opacity: 0;
        z-index: -1;
    }
        
    input[type="radio"] + label::before {
        border-radius: 1em;
    }
    
        
    /* Checked */
    input[type=checkbox]:checked + label,
    input[type=radio]:checked + label {
        padding-left: 1em;
        color: white;
    }

        
    input[type=checkbox]:checked + label:before,
    input[type=radio]:checked + label:before {
        top: 0;
        width: 100%;
        height: 2em;
        background: #081f2a;
    }

    @media (max-width: 550px) {
        html{
            font-size: 14px;
        }
    }

`;

export default MyApp;
