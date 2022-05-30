import styled from "styled-components";

const StyledSearchBox = styled.div`
	width: 296px;
	height: 274px;
	margin-top: 24px;
`;

const SearchListWrapper = styled.div`
	padding: 24px;
	margin-top: 12px;
	background-color: #ffffff;
`;

const StyledInput = styled.input`
	width: 248px;
	height: 48px;
	border: 2px solid #e0e0e0;
	color: #a8a8a8;
	font-size: 14px;
	padding: 12px 16px;
`;

const StyledListContainer = styled.div`
	max-height: 142px;
	overflow-y: scroll;
	margin-top: 18px;
	padding: 1px;
	::-webkit-scrollbar {
		width: 4px;
	}

	::-webkit-scrollbar-thumb {
		background: #e0e0e0;
		border-radius: 4px;
	}
`;

export { StyledSearchBox, SearchListWrapper, StyledInput, StyledListContainer };
