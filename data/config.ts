// These values are mostly used in meta tags
const config = {
	siteTitle: "AWS Lambda Cost Calculator",
	description: "A Simple Calculator to Estimate AWS Lambda Functions Cost",
	author: "Shubham Prajapat",
	domain: "https://lambda-cost-calculator.vercel.app/",
	social: {
		twitter: "@shubhamp_web",
	},
	memoryList: ["128", "512", "1024", "1536", "2048", "3072", "4096", "5120", "6144", "7168", "8192", "9216", "10240"],
	durationHints: [
		{
			label: "1 Sec",
			ms: 1000,
		},
		{
			label: "1 Min",
			ms: 1000 * 60,
		},
		{
			label: "3 Min",
			ms: 1000 * 60 * 3,
		},
		{
			label: "5 Min",
			ms: 1000 * 60 * 5,
		},
	],
	costPerRequest: 0.0000002, // in dollars
	costPerGBs: { x86: 0.0000166667, arm: 0.0000133334 },
};

export default config;
