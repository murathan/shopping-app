import styled from "styled-components";

const StyledBasket = styled.div`
	display: flex;
	flex-direction: column;
	width: 296px;
	padding: 30px;
	border: 7px solid #1976d2;
`;

const StyledAddedProductWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #f4f4f4;
	padding-bottom: 18px;
`;

const StyledLeftSide = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledAddedProductName = styled.div`
	font-size: 14px;
	color: #191919;
	margin-bottom: 4.5px;
`;

const StyledButton = styled.button`
	width: 32px;
	height: 32px;
	border: none;
	background: none;
	color: #1976d2;
	font-size: 18px;
`;

const StyledProductCount = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 32px;
	height: 32px;
	border: none;
	color: #ffffff;
	background-color: #1976d2;
	font-size: 15px;
`;

const StyledRightSide = styled.div`
	display: flex;
	padding-top: 2px;
`;

const StyledTotalPrice = styled.div`
	color: #1976d2;
	border: 1px solid #1976d2;
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
