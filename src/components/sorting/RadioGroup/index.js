import { useState } from 'react';
import { RadioGroupWrapper, RadioWrapper, RadioButton } from './styled';
import { useShoppingContext } from '../../../context/ShoppingContext';

const RadioGroup = () => {
	// priceLowToHigh, priceHighToLow, newToOld, oldToNew

	const [sortingChoiceState, setSortingChoiceState] = useState('');

	const {
		FilterReducer: { sortingChoice },
		setSortingChoice,
	} = useShoppingContext();

	const handleOnChange = (e) => {
		setSortingChoice(e.target.value);
		setSortingChoiceState(e.target.value);
	};

	return (
		<RadioGroupWrapper onChange={handleOnChange}>
			<RadioWrapper>
				<RadioButton
					type='radio'
					name='sorting'
					value='priceLowToHigh'
					checked={sortingChoiceState === 'priceLowToHigh'}
				/>
				Price low to high
			</RadioWrapper>
			<RadioWrapper>
				<RadioButton
					type='radio'
					name='sorting'
					value='priceHighToLow'
					checked={sortingChoiceState === 'priceHighToLow'}
				/>
				Price high to low
			</RadioWrapper>
			<RadioWrapper>
				<RadioButton
					type='radio'
					name='sorting'
					value='newToOld'
					checked={sortingChoiceState === 'newToOld'}
				/>
				New to old
			</RadioWrapper>
			<RadioWrapper>
				<RadioButton
					type='radio'
					name='sorting'
					value='oldToNew'
					checked={sortingChoiceState === 'oldToNew'}
				/>
				Old to new
			</RadioWrapper>
		</RadioGroupWrapper>
	);
};

export default RadioGroup;
