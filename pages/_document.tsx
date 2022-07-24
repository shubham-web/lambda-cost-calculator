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
				<meta name="twitter:title" content={siteTitle} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content={new URL(domain).origin.concat("/card.png")} />
				<meta name="twitter:url" content={new URL(domain).origin} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content={social.twitter} />
				<meta name="twitter:creator" content={social.twitter} />

				{/* Facebook */}
				<meta name="og:title" content={siteTitle} />
				<meta name="og:site_name" content={siteTitle} />
				<meta name="og:description" content={description} />
				<meta name="og:url" content={new URL(domain).origin} />
				<meta name="og:image" content={new URL(domain).origin.concat("/card.png")} />
				<meta name="og:type" content="website" />

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
