import { Html, Head, Main, NextScript } from "next/document";
import config from "../data/config";
let { siteTitle, description, domain, social, author } = config;
export default function Document() {
	return (
		<Html lang="en">
			<Head>
				{/* Primary Tags */}
				<meta charSet="utf-8" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="title" content={siteTitle} />
				<meta name="description" content={description} />
				<meta name="author" content={author} />

				{/* Twitter */}
				<meta property="twitter:title" content={siteTitle} />
				<meta property="twitter:description" content={description} />
				<meta property="twitter:image" content={new URL(domain).origin.concat("/card.png")} />
				<meta property="twitter:url" content={new URL(domain).origin} />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:site" content={social.twitter} />
				<meta property="twitter:creator" content={social.twitter} />

				{/* Facebook */}
				<meta property="og:title" content={siteTitle} />
				<meta property="og:site_name" content={siteTitle} />
				<meta property="og:description" content={description} />
				<meta property="og:url" content={new URL(domain).origin} />
				<meta property="og:image" content={new URL(domain).origin.concat("/card.png")} />
				<meta property="og:type" content="website" />

				{/* Fonts */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
				<link href="https://fonts.googleapis.com/css2?family=Poppins&amp;display=swap" rel="stylesheet" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
