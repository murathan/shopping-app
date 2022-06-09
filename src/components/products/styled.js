import styled from 'styled-components';
import { StyledRow } from '../layout/grid/styled';
import colors from '../../styling/colors';
import mediaQueries from '../../styling/mediaQueries';

const StyledProductsWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 20px;
	margin-top: 16px;
	background-color: ${colors.white.primary};
	min-height: 1000px;
`;

const StyledProductCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 124px;
`;

const ProductImageWrapper = styled.div`
	padding: 16px;
	margin-bottom: 8px;
	border-radius: 16px;
	border: 1px solid ${colors.white.alternative};
	> div {
		width: 92px;
		height: 92px;
		background-image: url('https://source.unsplash.com/92x92');
		background-size: cover;
	}
`;

const StyledName = styled.span`
	width: 100%;
	text-align: left;
	font-size: 14px;
	color: ${colors.black};
	min-height: 40px;
	margin-top: 10px;
`;

const StyledButton = styled.button`
	width: 100%;
	height: 22px;
	color: ${colors.white.quaternary};
	background-color: ${colors.blue};
	margin-top: 8px;
	border: none;
	border-radius: 2px;
	font-size: 12px;
	cursor: pointer;
`;

const StyledProductRow = styled(StyledRow)`
	&:not(:first-child) {
		margin-top: 20px;
	}
	${mediaQueries.md} {
		flex-direction: row;
	}
`;

export {
	StyledProductsWrapper,
	StyledProductCard,
	ProductImageWrapper,
	StyledName,
	StyledButton,
	StyledProductRow,
};
