import { useState } from 'react';
import { StyledCheckButtonGroup, StyledCheckButton } from './styled';
import { useShoppingContext } from '../../context/ShoppingContext';

const CheckButtonGroup = () => {
	const {
		ProductReducer: { products },
		FilterReducer: { types },
		addTypeFilter,
	} = useShoppingContext();

	const getTypes = () => {
		const types = [...new Set(products.map((product) => product.itemType))];
		return types;
	};
	const totalTypes = getTypes();
	const [selectedTypes, setSelectedTypes] = useState(totalTypes);

	const handleCheckButtonChange = (key) => {
		let tempSelectedTypes = [...selectedTypes];
		let find = tempSelectedTypes.indexOf(key);
		if (find > -1) {
			tempSelectedTypes.splice(find, 1);
		} else {
			tempSelectedTypes.push(key);
		}
		setSelectedTypes(tempSelectedTypes);
		addTypeFilter(key);
	};

	return (
		<StyledCheckButtonGroup>
			{totalTypes.map((type) => (
				<StyledCheckButton
					key={type}
					onClick={() => handleCheckButtonChange(type)}
					active={types.includes(type)}
				>
					{type}
				</StyledCheckButton>
			))}
		</StyledCheckButtonGroup>
	);
};

export default CheckButtonGroup;
