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
const Products = () => {
	const {
		ProductReducer: { products },
	} = useShoppingContext();
	// const [addedProducts, setAddedProducts] = useState([])
	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage, setProductsPerPage] = useState(16);

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

	const handleClick = (event) => {
		setCurrentPage(Number(event.target.id));
	};

	// Logic for displaying current todos
	const indexOfLastTodo = currentPage * productsPerPage;
	const indexOfFirstTodo = indexOfLastTodo - productsPerPage;
	const currentProducts = products.slice(indexOfFirstTodo, indexOfLastTodo);

	// Logic for displaying page numbers
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
		pageNumbers.push(i);
	}

	const renderPageNumbers = pageNumbers.map((number) => {
		return (
			<li key={number} id={number} onClick={handleClick}>
				{number}
			</li>
		);
	});

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
			<ul style={{ display: "flex", gap: "8px", listStyle: "none" }}>
				{renderPageNumbers}
			</ul>
		</div>
	);
};

export default Products;
