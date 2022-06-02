import { StyledHeader, BasketInHeader, StyledImg } from './styled';
import basketIcon from '../../../icons/basket.svg';
import { useShoppingContext } from '../../../context/ShoppingContext';
import { Price } from '../../typography';

const Header = () => {
	const { totalPrice } = useShoppingContext();
	return (
		<>
			<StyledHeader>
				<BasketInHeader>
					<StyledImg src={basketIcon} />
					{totalPrice > 0 && <Price inHeader>{totalPrice}</Price>}
				</BasketInHeader>
			</StyledHeader>
		</>
	);
};

export default Header;
