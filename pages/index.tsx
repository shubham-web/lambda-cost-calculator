import type { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import styled, { css } from "styled-components";
import CoolBox from "../components/CoolBox";
import Heading from "../components/Heading";
import Result from "../components/Result";
import config from "../data/config";
import { getCost, validateInputs } from "../utils";

// prettier-ignore
const memoryList = ["128","512","1024",	"1536","2048","3072","4096","5120","6144","7168","8192","9216","10240"];

const durationHints: Array<{ label: string; ms: number }> = [
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
];

const COST_PER_REQUEST = 0.0000002; // in dollars
const COST_PER_GB_S = { x86: 0.0000166667, arm: 0.0000133334 };

const Home: NextPage = () => {
	const [execution, setExecution] = useState("1000");
	const [architecture, setArchitecture] = useState<"x86" | "arm">("x86");
	const [memory, setMemory] = useState(memoryList[0]);
	const [duration, setDuration] = useState("3000");

	return (
		<>
			<BlurredCircle />
			<Wrapper>
				<Heading>{config.siteTitle}</Heading>
				<CoolBox>
					<Content>
						<Form>
							<Label>Number of Executions per Month</Label>
							<Input
								type="number"
								min={1}
								value={execution}
								onChange={(e) => setExecution(e.target.value)}
							/>
							<br />
							<br />
							<Label>Architectures</Label>
							<RadioGroup>
								<input
									type="radio"
									name="architecture"
									id="x86"
									checked={architecture === "x86"}
									onChange={(e) => setArchitecture("x86")}
								/>
								<label htmlFor="x86">x86</label>
								<input
									type="radio"
									name="architecture"
									id="arm"
									checked={architecture === "arm"}
									onChange={(e) => setArchitecture("arm")}
								/>
								<label htmlFor="arm">Arm</label>
							</RadioGroup>
							<Label>Memory Allocation</Label>
							<Input
								as="select"
								onChange={(e: ChangeEvent<HTMLSelectElement>) => setMemory(e.target.value)}
								value={memory}
							>
								{memoryList.map((mb) => {
									return <option key={mb}>{mb} MB</option>;
								})}
							</Input>
							<br />
							<br />
							<Label>Average Duration of Execution (in ms)</Label>
							<Input
								type="number"
								min={1}
								value={duration}
								onChange={(e) => setDuration(e.target.value)}
							/>
							<DurationHints>
								<span>or click</span>
								{durationHints.map((d) => {
									return (
										<HintButton
											onClick={() => setDuration(d.ms.toString())}
											key={d.ms}
											active={duration === d.ms.toString()}
										>
											{d.label}
										</HintButton>
									);
								})}
							</DurationHints>
						</Form>
						<Result
							inputs={validateInputs({
								rates: { execution: COST_PER_GB_S[architecture], request: COST_PER_REQUEST },
								memory: memory,
								executions: execution,
								avgDuration: duration,
							})}
						/>
					</Content>
				</CoolBox>
			</Wrapper>
		</>
	);
};

const Wrapper = styled.div`
	position: relative;
	padding: 3rem 0 0;
	display: grid;
	gap: 2rem;
	width: 50%;
	width: min(960px, 90%);
	margin: 0 auto;
	z-index: 2;
`;
const Form = styled.div``;
const Content = styled.div`
	padding: 2.5rem 3rem;
	display: grid;
	grid-template-columns: 1.25fr 1fr;
	gap: 1rem;
	@media (max-width: 900px) {
		grid-template-columns: 1fr;
	}
`;
const BlurredCircle = styled.div`
	position: absolute;
	top: 40%;
	left: 20%;
	transform: translate(-50%, -50%);
	width: 400px;
	height: 400px;
	display: inline-block;
	background: dodgerblue;
	border-radius: 50%;
	filter: blur(100px) brightness(0.3);
	z-index: 1;
`;
const Input = styled.input`
	background: black;
	color: rgb(153, 169, 194);
	outline: none;
	border: 1px ridge #1da1f210;
	font-size: 1.5rem;
	padding: 0.5rem 0.8rem;
	border-radius: 0.35rem;
	max-width: 100%;
	border: 2px solid transparent;
	&:focus {
		border-color: #2d6a86;
	}
`;
const Label = styled.label`
	color: rgb(153, 169, 194);
	display: block;
	font-size: 1rem;
	margin-bottom: 1rem;
`;
const RadioGroup = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	margin-bottom: 2em;

	& > label {
		color: rgb(153, 169, 194);
		position: relative;
		margin-right: 1em;
		padding-left: 2em;
		padding-right: 1em;
		line-height: 2;
		cursor: pointer;
		z-index: 1;
		transition: 0.25s all ease;
		&:before {
			box-sizing: border-box;
			content: " ";
			position: absolute;
			top: 0.3em;
			left: 0;
			display: block;
			width: 1.4em;
			height: 1.4em;
			border: 2px solid #2d6a86;
			border-radius: 0.25em;
			z-index: -1;
			transition: 0.25s all ease;
		}
	}
`;

const DurationHints = styled.div`
	& > span {
		opacity: 0.4;
	}
	display: flex;
	gap: 0.25rem;
	padding: 0.5rem 0;
`;
const HintButton = styled.button<{ active: boolean }>`
	padding: 0.25rem 0.4rem;
	border-radius: 0.25rem;
	background: transparent;
	color: rgb(153, 169, 194);
	font-size: 0.9rem;
	border: 2px ridge #2d6a86;
	cursor: pointer;

	${(props) =>
		props.active &&
		css`
			background: #081f2a;
			color: white;
		`}
`;

export default Home;
