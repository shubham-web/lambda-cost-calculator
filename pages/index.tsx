import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>MyApp • Home</title>
			</Head>
			<Wrapper>
				<Heading>You&apos;re Almost Done!</Heading>
				<Steps>
					<Step>
						Edit <FilePath>data/config.ts</FilePath> to set app name and meta data.
					</Step>
					<Step>
						Edit <FilePath>data/theme.ts</FilePath> to set color, fonts, etc.
					</Step>
					<Step>Start Coding! 👨‍💻</Step>
				</Steps>
			</Wrapper>
		</>
	);
};

const Wrapper = styled.div`
	padding: 3rem;
`;
const Heading = styled.h1`
	color: var(--color-primary);
`;

const Steps = styled.ul`
	margin: 2rem 0;
	display: grid;
	gap: 1rem;
`;
const Step = styled.li``;

const FilePath = styled.span`
	padding: 0.25rem 0.5rem;
	border-radius: 5px;
	background: #262626;
	color: white;
`;

export default Home;
