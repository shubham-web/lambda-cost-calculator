import styled from "styled-components";
import { getCost } from "../utils";
import Heading from "./Heading";
import toast from "react-hot-toast";

const Result: React.FC<{ inputs: UserInput<number> | false }> = ({ inputs }) => {
	if (inputs === false) {
		return (
			<Wrapper>
				<Heading secondary>Invalid Input</Heading>
			</Wrapper>
		);
	}

	const { executionCost, requestCost } = getCost(inputs);
	const rows = [
		{
			name: "Request cost:",
			cost: requestCost,
		},
		{
			name: "Execution cost:",
			cost: executionCost,
		},
		{
			name: "Total:",
			cost: executionCost + requestCost,
		},
	];

	return (
		<Wrapper>
			<Heading secondary>Results</Heading>
			<p>Tip: Click to Copy the Precise Value</p>
			<ResultTable>
				<tbody>
					{rows.map((result, index) => {
						return (
							<tr key={index}>
								<td>{result.name}</td>
								<td>
									<Cost
										title={"$".concat(result.cost.toString()).concat(" (Click to Copy)")}
										onClick={() => {
											navigator.clipboard.writeText(result.cost.toString());
											toast.success(`Copied!`);
										}}
									>
										${result.cost.toFixed(3)}/month
									</Cost>
								</td>
							</tr>
						);
					})}
				</tbody>
			</ResultTable>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background: black;
	color: rgb(153, 169, 194);
	padding: 2rem 2rem;
	height: max-content;
	border-radius: 1rem;
	@media (max-width: 900px) {
		justify-self: center;
		width: 100%;
		text-align: center;
	}
`;
const Cost = styled.span`
	display: inline-block;
	background: rgba(255, 255, 255, 0.1);
	padding: 0.5rem 1rem;
	cursor: copy;
`;
const ResultTable = styled.table`
	width: 100%;
	border: none;
	border-collapse: collapse;
	& td {
		padding: 0.5rem;
	}
`;
export default Result;
