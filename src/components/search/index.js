import { useState } from "react";
import {
	StyledSearchBox,
	SearchListWrapper,
	StyledInput,
	StyledListContainer,
} from "./styled";
import { Title } from "../typography";
import CheckBox from "./checkbox";

const SearchBox = ({ title, data }) => {
	const [selections, setSelections] = useState([]);
	const [searchInput, setSearchInput] = useState("");

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
	};

	const searchedList = data.filter((item) => {
		return item.name.toLowerCase().includes(searchInput.toLowerCase());
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
									key={item.id}
									label={item.name}
									onChange={() => handleCheckBoxChange(item.name)}
									selected={selections.includes(item.name)}
								/>
						  ))
						: data.map((item) => (
								<CheckBox
									key={item.id}
									label={item.name}
									onChange={() => handleCheckBoxChange(item.name)}
									selected={selections.includes(item.name)}
								/>
						  ))}
				</StyledListContainer>
			</SearchListWrapper>
		</StyledSearchBox>
	);
};

export default SearchBox;
