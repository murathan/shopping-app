import { useEffect } from 'react';
import SearchBox from './SearchBox';
import { useShoppingContext } from '../../context/ShoppingContext';

const SearchBoxGroup = () => {
	const {
		ProductReducer: { products },
		addBrandFilter,
		addTagFilter,
	} = useShoppingContext();

	useEffect(() => {
		if (products.length > 0) {
			getBrands();
			getTags();
		}
	}, [products]);

	const getBrands = () => {
		const brands = [
			...new Set(products.map((product) => product.manufacturer)),
		];
		return brands;
	};

	const getTags = () => {
		let tags = [];
		products.forEach((product) =>
			product.tags.forEach((tag) => tags.push(tag))
		);
		return [...new Set(tags)];
	};

	const tags = getTags();
	const brands = getBrands();

	return (
		<>
			{brands.length > 0 && (
				<SearchBox title='Brand' data={brands} addFilter={addBrandFilter} />
			)}
			{tags.length > 0 && (
				<SearchBox title='Tag' data={tags} addFilter={addTagFilter} />
			)}
		</>
	);
};

export default SearchBoxGroup;
