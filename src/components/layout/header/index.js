import { StyledHeader, BasketInHeader, StyledPriceInHeader } from "./styled";
import { useShoppingContext } from "../../../context/ShoppingContext";
import basketIcon from "../../../icons/basket.svg";

const Header = () => {
	const { increaseAddedProduct } = useShoppingContext();
	return (
		<>
			<StyledHeader>
				<BasketInHeader>
					<img src={basketIcon} />
					<StyledPriceInHeader>₺ 39,97</StyledPriceInHeader>
				</BasketInHeader>
			</StyledHeader>
			<button onClick={() => increaseAddedProduct(8945189)}>Buttonn</button>
		</>
	);
};

export default Header;
