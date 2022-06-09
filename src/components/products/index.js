import { useEffect } from 'react';
import { StyledProductsWrapper, StyledProductCard } from './styled';
import { useShoppingContext } from '../../context/ShoppingContext';
import CustomPagination from '../customPagination';

const Products = () => {
	const {
		ProductReducer: { products },
		FilterReducer: { brands, tags, types, sortingChoice },
		fetchProducts,
	} = useShoppingContext();

	useEffect(() => {
		fetchProducts();
	}, []);

	const brandFilteredProducts =
		brands.length > 0
			? products.filter((product) => brands.includes(product.manufacturer))
			: products;
	const brandAndTagFilteredProducts =
		tags.length > 0
			? brandFilteredProducts.filter((product) =>
					tags.some((tag) => product.tags.includes(tag))
			  )
			: brandFilteredProducts;

	const finalFilteredProducts =
		types.length > 0
			? brandAndTagFilteredProducts.filter((product) =>
					types.includes(product.itemType)
			  )
			: [];

	const sortedProducts = finalFilteredProducts.sort((a, b) => {
		if (sortingChoice === 'priceLowToHigh') return a.price - b.price;
		else if (sortingChoice === 'priceHighToLow') return b.price - a.price;
		else if (sortingChoice === 'newToOld') return b.added - a.added;
		else if (sortingChoice === 'oldToNew') return a.added - b.added;
	});

	return (
		<div>
			<StyledProductsWrapper>
				<CustomPagination
					data={sortedProducts}
					RenderComponent={StyledProductCard}
					buttonConst={3}
					contentPerPage={16}
					siblingCount={2}
				/>
			</StyledProductsWrapper>
		</div>
	);
};

export default Products;
