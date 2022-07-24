import styled, { css } from "styled-components";

const Heading = styled.h1<{ secondary?: boolean }>`
	color: var(--color-primary);
	text-align: center;
	font-size: 2rem;

	${(props) =>
		props.secondary &&
		css`
			color: rgba(255, 255, 255, 0.8);
			font-weight: normal;
			font-size: 1.8rem;
		`}
`;
export default Heading;
