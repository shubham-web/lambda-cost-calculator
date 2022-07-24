import styled from "styled-components";
import CoolBox from "./CoolBox";

const Links: React.FC = () => {
	return (
		<Wrapper>
			<CoolBox radius="1rem">
				<Content>
					<a href="https://aws.amazon.com/lambda/pricing/#AWS_Lambda_Pricing">Official Page 🔗</a>
				</Content>
			</CoolBox>
			<CoolBox radius="1rem">
				<Content>
					<a href="https://github.com/shubham-web/lambda-cost-calculator">Code</a>
				</Content>
			</CoolBox>
			<CoolBox radius="1rem">
				<Content>
					<a href="https://twitter.com/shubhamp_web">Twitter</a>
				</Content>
			</CoolBox>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: max-content;
	margin: 0 auto;
	display: flex;
	gap: 1rem;
`;
const Content = styled.div`
	padding: 1rem;
	width: max-content;
	& > a {
		color: #1da1f2;
		opacity: 0.8;
	}
	& > a:hover {
		opacity: 1;
	}
`;

export default Links;
