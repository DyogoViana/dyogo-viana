import styled from "styled-components";

const FooterDiv = styled.div`
	flex: 2;
	display: flex;

	&:nth-child(1) {
		border-bottom: 1px solid #bfbfbf;
	}

	&:nth-child(2) {
		flex: 1;
		display: flex;
	}
`;

export default FooterDiv;