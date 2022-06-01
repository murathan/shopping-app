import { useState } from "react";
import { StyledCheckButtonGroup, StyledCheckButton } from "./styled";

const CheckButtonGroup = ({ data }) => {
	const [selectedTypes, setSelectedTypes] = useState(data);

	const handleCheckButtonChange = (key) => {
		let tempSelectedTypes = [...selectedTypes];
		let find = tempSelectedTypes.indexOf(key);
		if (find > -1) {
			tempSelectedTypes.splice(find, 1);
		} else {
			tempSelectedTypes.push(key);
		}
		setSelectedTypes(tempSelectedTypes);
	};

	return (
		<StyledCheckButtonGroup>
			{data.map((product) => (
				<StyledCheckButton
					key={product.name}
					onClick={() => handleCheckButtonChange(product.name)}
					active={selectedTypes.includes(product.name)}
				>
					{product.name}
				</StyledCheckButton>
			))}
		</StyledCheckButtonGroup>
	);
};

export default CheckButtonGroup;
