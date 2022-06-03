import { useState, useEffect } from 'react';
import {
	StyledProductsWrapper,
	StyledProductCard,
	ProductImageWrapper,
	StyledName,
	StyledButton,
	StyledProductRow,
} from './styled';
import { arrayChunk } from '../../utils';
import { useShoppingContext } from '../../context/ShoppingContext';
import Pagination from '../pagination';
import useDeviceSize from '../../hooks/useDeviceSize';
import { Price } from '../typography';

const Products = () => {
	const {
		ProductReducer: { products },
		FilterReducer: { brands, tags, types, sortingChoice },
		fetchProducts,
		addProduct,
	} = useShoppingContext();
	// const [addedProducts, setAddedProducts] = useState([])

	const [currentPage, setCurrentPage] = useState(1);
	const [productCountPerPage, setProductCountPerPage] = useState(16);
	const deviceSize = useDeviceSize();
	useEffect(() => {
		fetchProducts();
	}, []);
	const handleClick = (event) => {
		setCurrentPage(Number(event.target.id));
	};
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

	const indexOfLastProduct = currentPage * productCountPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productCountPerPage;
	const currentProducts = sortedProducts.slice(
		indexOfFirstProduct,
		indexOfLastProduct
	);

	return (
		<div>
			<StyledProductsWrapper>
				{arrayChunk(currentProducts, 4).map((row, i) => (
					<StyledProductRow key={i}>
						{row.map((product) => (
							<StyledProductCard key={product.id}>
								<ProductImageWrapper>
									<div></div>
								</ProductImageWrapper>
								<Price>{product.price}</Price>
								<StyledName>{product.name}</StyledName>
								<StyledButton onClick={() => addProduct(product)}>
									Add
								</StyledButton>
							</StyledProductCard>
						))}
					</StyledProductRow>
				))}
			</StyledProductsWrapper>
			<Pagination
				items={sortedProducts}
				itemCountPerPage={productCountPerPage}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				handleClick={handleClick}
			/>
		</div>
	);
};

export default Products;
