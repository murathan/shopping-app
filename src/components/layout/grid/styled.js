import styled from "styled-components";

const StyledColumn = styled.div`
	padding: 8px;
	display: flex;
	flex-direction: column;
	width: ${(props) => (props.$size === "small" ? "25" : "50")}%;
`;

const StyledRow = styled.div`
	display: flex;
`;

export { StyledRow, StyledColumn };
