import { useState, useEffect } from 'react';
import {
	StyledBasket,
	StyledAddedProductWrapper,
	StyledLeftSide,
	StyledAddedProductName,
	StyledButton,
	StyledProductCount,
	StyledRightSide,
	StyledTotalPrice,
} from './styled';
import { Price } from '../typography';
import { useShoppingContext } from '../../context/ShoppingContext';

const Basket = () => {
	const {
		CartReducer: { addedProducts },
		increaseAddedProduct,
		decreaseAddedProduct,
	} = useShoppingContext();
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		let tempTotalPrice = 0;
		if (addedProducts) {
			addedProducts.forEach((product) => {
				tempTotalPrice += product.price * product.count;
			});
		}
		setTotalPrice(tempTotalPrice);
		localStorage.setItem('basketItems', JSON.stringify(addedProducts));
	}, [addedProducts]);
	return (
		<>
			{addedProducts && addedProducts.length > 0 && (
				<StyledBasket>
					{addedProducts.map(
						(product) =>
							product.count > 0 && (
								<StyledAddedProductWrapper key={product.id}>
									<StyledLeftSide>
										<StyledAddedProductName>
											{product.name}
										</StyledAddedProductName>
										<Price>{product.price}</Price>
									</StyledLeftSide>
									<StyledRightSide>
										<StyledButton
											onClick={() => {
												decreaseAddedProduct(product.id);
											}}
										>
											-
										</StyledButton>
										<StyledProductCount>{product.count}</StyledProductCount>
										<StyledButton
											onClick={() => increaseAddedProduct(product.id)}
										>
											+
										</StyledButton>
									</StyledRightSide>
								</StyledAddedProductWrapper>
							)
					)}
					<StyledTotalPrice>
						<Price>{totalPrice}</Price>
					</StyledTotalPrice>
				</StyledBasket>
			)}
		</>
	);
};

export default Basket;
