import styled from "styled-components";

const StyledTitle = styled.span`
	font-size: ${(props) => (props.size === "small" ? "13" : "20")}px;
	margin-bottom: 16px;
	color: #697488;
`;

const StyledPrice = styled.span`
	width: 100%;
	text-align: left;
	font-size: 14px;
	color: #1976d2;
	font-weight: 700;
`;

export { StyledTitle, StyledPrice };
