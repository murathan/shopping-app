import { StyledHeader, BasketInHeader, StyledPriceInHeader } from "./styled";
import basketIcon from "../../../icons/basket.svg";

const Header = () => {
	return (
		<>
			<StyledHeader>
				<BasketInHeader>
					<img src={basketIcon} />
					<StyledPriceInHeader>₺ 39,97</StyledPriceInHeader>
				</BasketInHeader>
			</StyledHeader>
		</>
	);
};

export default Header;
