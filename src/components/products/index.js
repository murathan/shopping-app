import { useState } from "react";
import {
	StyledProductsWrapper,
	StyledProductCard,
	ProductImageWrapper,
	StyledPrice,
	StyledName,
	StyledButton,
	StyledProductRow,
} from "./styled";
import { arrayChunk } from "../../utils";
import { useShoppingContext } from "../../context/ShoppingContext";
import Pagination from "../pagination";

const Products = () => {
	const {
		ProductReducer: { products },
	} = useShoppingContext();
	// const [addedProducts, setAddedProducts] = useState([])

	const [currentPage, setCurrentPage] = useState(1);
	const [productCountPerPage, setProductCountPerPage] = useState(16);

	const handleClick = (event) => {
		setCurrentPage(Number(event.target.id));
	};

	const indexOfLastProduct = currentPage * productCountPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productCountPerPage;
	const currentProducts = products.slice(
		indexOfFirstProduct,
		indexOfLastProduct
	);

	// const handleOnClick = (id) => {
	//   let tempAddedProducts = [...addedProducts]
	//   let find = tempAddedProducts.indexOf(id)
	//   if (find > -1) {
	//     tempAddedProducts.splice(find, 1)
	//   } else {
	//     tempAddedProducts.push(id)
	//   }
	//   setAddedProducts(tempAddedProducts)
	// }

	return (
		<div>
			<StyledProductsWrapper>
				{arrayChunk(currentProducts, 4).map((row, i) => (
					<StyledProductRow key={i}>
						{row.map((product, i) => (
							<StyledProductCard>
								<ProductImageWrapper>
									<div></div>
								</ProductImageWrapper>
								<StyledPrice>₺ 14,99</StyledPrice>
								<StyledName>{product.name}</StyledName>
								<StyledButton>Add</StyledButton>
							</StyledProductCard>
						))}
					</StyledProductRow>
				))}
			</StyledProductsWrapper>
			<Pagination
				items={products}
				itemCountPerPage={productCountPerPage}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				handleClick={handleClick}
			/>
		</div>
	);
};

export default Products;
