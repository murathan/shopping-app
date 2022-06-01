import { useState } from "react";
import {
	StyledProductsWrapper,
	StyledProductCard,
	ProductImage,
	StyledPrice,
	StyledName,
	StyledButton,
	StyledProductRow,
} from "./styled";
import { arrayChunk } from "../../utils";

const Products = ({ data }) => {
	const [products, setProducts] = useState(data);
	const [addedProducts, setAddedProducts] = useState([]);

	const handleOnClick = (id) => {
		let tempAddedProducts = [...addedProducts];
		let find = tempAddedProducts.indexOf(id);
		if (find > -1) {
			tempAddedProducts.splice(find, 1);
		} else {
			tempAddedProducts.push(id);
		}
		setAddedProducts(tempAddedProducts);
	};
	return (
		<StyledProductsWrapper>
			{arrayChunk(products, 4).map((row, i) => (
				<StyledProductRow key={i}>
					{row.map((product, i) => (
						<StyledProductCard>
							<ProductImage />
							<StyledPrice>₺ 14,99</StyledPrice>
							<StyledName>{product.name}</StyledName>
							<StyledButton>Add</StyledButton>
						</StyledProductCard>
					))}
				</StyledProductRow>
			))}
		</StyledProductsWrapper>
	);
};

export default Products;
