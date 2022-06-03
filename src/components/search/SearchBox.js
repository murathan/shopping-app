import { useState } from 'react';
import {
	StyledSearchBox,
	SearchListWrapper,
	StyledInput,
	StyledListContainer,
} from './styled';
import { Title } from '../typography';
import CheckBox from './checkbox';
import PropTypes from 'prop-types';

const SearchBox = ({ title, data, addFilter }) => {
	const [selections, setSelections] = useState([]);
	const [searchInput, setSearchInput] = useState('');

	const handleSearchInputChange = (e) => {
		setSearchInput(e.target.value);
	};

	const handleCheckBoxChange = (key) => {
		let tempSelections = [...selections];
		let find = tempSelections.indexOf(key);
		if (find > -1) {
			tempSelections.splice(find, 1);
		} else {
			tempSelections.push(key);
		}
		setSelections(tempSelections);
		addFilter(key);
	};

	const searchedList = data.filter((item) => {
		return item.toLowerCase().includes(searchInput.toLowerCase());
	});

	return (
		<StyledSearchBox>
			<Title size='small'>{title}s</Title>
			<SearchListWrapper>
				<StyledInput
					name='searchInput'
					value={searchInput}
					onChange={handleSearchInputChange}
					placeholder={`Search ${title}`}
				/>
				<StyledListContainer>
					{searchInput
						? searchedList.map((item) => (
								<CheckBox
									key={item}
									label={item}
									onChange={() => handleCheckBoxChange(item)}
									selected={selections.includes(item)}
								/>
						  ))
						: data.map((item) => (
								<CheckBox
									key={item}
									label={item}
									onChange={() => handleCheckBoxChange(item)}
									selected={selections.includes(item)}
								/>
						  ))}
				</StyledListContainer>
			</SearchListWrapper>
		</StyledSearchBox>
	);
};

SearchBox.propTypes = {
	title: PropTypes.string,
	data: PropTypes.arrayOf(PropTypes.string),
	addFilter: PropTypes.func,
};

export default SearchBox;
