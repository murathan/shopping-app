import styled from 'styled-components';
import colors from '../../../styling/colors';

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	width: 100%;
	height: 76.64px;
	background-color: ${colors.blue};
`;

const BasketInHeader = styled.div`
	display: flex;
	align-items: center;
	width: fit-content;
	height: 24.53px;
	margin-right: 128px;
	margin-left: auto;
`;

const StyledImg = styled.img`
	margin-right: 8px;
`;

export { StyledHeader, BasketInHeader, StyledImg };
