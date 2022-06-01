import { useState } from "react";
import { RadioGroupWrapper, RadioWrapper, RadioButton } from "./styled";

const RadioGroup = () => {
	// priceLowToHigh, priceHighToLow, newToOld, oldToNew
	const [sortingChoice, setSortingChoice] = useState("priceLowToHigh");

	const handleOnChange = (e) => {
		setSortingChoice(e.target.value);
	};

	console.log(sortingChoice);

	return (
		<RadioGroupWrapper onChange={handleOnChange}>
			<RadioWrapper>
				<RadioButton type='radio' name='sorting' value='priceLowToHigh' />
				Price low to high
			</RadioWrapper>
			<RadioWrapper>
				<RadioButton type='radio' name='sorting' value='priceHighToLow' />
				Price high to low
			</RadioWrapper>
			<RadioWrapper>
				<RadioButton type='radio' name='sorting' value='newToOld' />
				New to old
			</RadioWrapper>
			<RadioWrapper>
				<RadioButton type='radio' name='sorting' value='oldToNew' />
				Old to new
			</RadioWrapper>
		</RadioGroupWrapper>
	);
};

export default RadioGroup;
