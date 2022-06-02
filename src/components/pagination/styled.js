import styled from 'styled-components';
import colors from '../../styling/colors';

const PaginationWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 32px;
`;

const StyledUL = styled.ul`
	display: flex;
	gap: 4px;
	list-style: none;
	padding: 0;
`;

const StyledLi = styled.li`
	width: 32px;
	height: 40px;
	font-size: 14px;
	color: ${(props) => (props.$active ? colors.white.primary : colors.gray)};
	background-color: ${(props) => (props.$active ? colors.blue : 'transparent')};
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const StyledButton = styled.button`
	border: none;
	background: none;
	font-size: 14px;
	color: ${(props) => (props.type === 'prev' ? colors.blue : colors.gray)};
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 5px;
`;

export { PaginationWrapper, StyledUL, StyledLi, StyledButton };
