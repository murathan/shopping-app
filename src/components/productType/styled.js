import styled from "styled-components";

const StyledCheckButton = styled.button`
	height: 30px;
	width: fit-content;
	padding: 6px 16px;
	border-radius: 2px;
	border: none;
	color: ${(props) => (props.active ? "#F2F0FD" : "#1976D2")};
	background-color: ${(props) => (props.active ? "#1976D2" : "#F2F0FD")};
	&:not(:last-child) {
		margin-right: 10px;
	}
	cursor: pointer;
`;

const StyledCheckButtonGroup = styled.div``;

export { StyledCheckButtonGroup, StyledCheckButton };
