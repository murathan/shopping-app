import {
	StyledBasket,
	StyledAddedProductWrapper,
	StyledLeftSide,
	StyledAddedProductName,
	StyledButton,
	StyledProductCount,
	StyledRightSide,
	StyledTotalPrice,
} from "./styled";
import { StyledPrice } from "../typography/styled";

const Basket = ({ data }) => {
	return (
		<StyledBasket>
			<StyledAddedProductWrapper>
				<StyledLeftSide>
					<StyledAddedProductName>productttt</StyledAddedProductName>
					<StyledPrice>14.99</StyledPrice>
				</StyledLeftSide>
				<StyledRightSide>
					<StyledButton>-</StyledButton>
					<StyledProductCount>5</StyledProductCount>
					<StyledButton>+</StyledButton>
				</StyledRightSide>
			</StyledAddedProductWrapper>
			<StyledTotalPrice>₺39,97</StyledTotalPrice>
		</StyledBasket>
	);
};

export default Basket;
