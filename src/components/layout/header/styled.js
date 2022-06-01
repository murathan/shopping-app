import styled from "styled-components";
import { StyledPrice } from "../../typography/styled";

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	width: 100%;
	height: 76.64px;
	background-color: #1976d2;
`;

const BasketInHeader = styled.div`
	display: flex;
	align-items: center;
	width: fit-content;
	height: 24.53px;
	margin-right: 128px;
	margin-left: auto;
`;

const StyledPriceInHeader = styled(StyledPrice)`
	color: #ffffff;
	height: 18px;
	margin-top: 3px;
	margin-left: 8px;
	font-weight: 400;
`;

export { StyledHeader, BasketInHeader, StyledPriceInHeader };
