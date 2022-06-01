import {
	StyledBasket,
	StyledAddedProductWrapper,
	StyledLeftSide,
	StyledAddedProductName,
} from "./styled";
import { StyledPrice } from "../products/styled";

const Basket = ({ data }) => {
	return (
		<StyledBasket>
			<StyledAddedProductWrapper>
				<StyledLeftSide>
					<StyledAddedProductName>productttt</StyledAddedProductName>
					<StyledPrice>14.99</StyledPrice>
				</StyledLeftSide>
			</StyledAddedProductWrapper>
		</StyledBasket>
	);
};

export default Basket;
