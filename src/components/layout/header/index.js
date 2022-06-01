import StyledHeader from "./styled";
import { useShoppingContext } from "../../../context/ShoppingContext";

const Header = () => {
	const { increaseAddedProduct } = useShoppingContext();
	return (
		<>
			<StyledHeader />
			<button onClick={() => increaseAddedProduct(8945189)}>Buttonn</button>
		</>
	);
};

export default Header;
