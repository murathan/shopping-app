import styled from 'styled-components';
import colors from '../../styling/colors';
import { Price } from '../typography';

const StyledBasket = styled.div`
	display: flex;
	flex-direction: column;
	width: 296px;
	padding: 30px;
	border: 7px solid ${colors.blue};
`;

const StyledAddedProductWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid ${colors.white.secondary};
	padding: 18px 0;
`;

const StyledLeftSide = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledAddedProductName = styled.div`
	font-size: 14px;
	color: ${colors.black};
	margin-bottom: 4.5px;
`;

const StyledButton = styled.button`
	width: 32px;
	height: 32px;
	border: none;
	background: none;
	color: ${colors.blue};
	font-size: 18px;
	cursor: pointer;
`;

const StyledProductCount = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 32px;
	height: 32px;
	border: none;
	color: ${colors.white.primary};
	background-color: ${colors.blue};
	font-size: 15px;
`;

const StyledRightSide = styled.div`
	display: flex;
	padding-top: 2px;
`;

const StyledTotalPrice = styled.div`
	color: ${colors.blue};
	border: 2px solid ${colors.blue};
	border-radius: 2px;
	padding: 17.37px 24px;
	margin-left: auto;
	margin-top: 17px;
`;

export {
	StyledBasket,
	StyledAddedProductWrapper,
	StyledLeftSide,
	StyledAddedProductName,
	StyledButton,
	StyledProductCount,
	StyledRightSide,
	StyledTotalPrice,
};
