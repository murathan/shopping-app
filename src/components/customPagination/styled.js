import styled from 'styled-components';
import colors from '../../styling/colors';
import mediaQueries from '../../styling/mediaQueries';

const ProductsWrapper = styled.div`
	width: 100%;
	display: grid;
	gap: 10px;
	grid-template-columns: repeat(4, 1fr);
	justify-items: center;
	${mediaQueries.lg} {
		grid-template-columns: repeat(3, 1fr);
	}
	${mediaQueries.md} {
		grid-template-columns: repeat(2, 1fr);
	}
	${mediaQueries.xs} {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const PaginationWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 32px;
`;

const StyledUL = styled.ul`
	display: flex;
	gap: 4px;
	list-style: none;
	padding: 0 50px;
`;

const StyledLi = styled.li`
	width: 32px;
	height: 40px;
	font-size: 14px;
	color: ${(props) =>
		props.$active ? colors.white.primary : colors.gray.primary};
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
	color: ${(props) => (props.$type === 'prev' ? colors.blue : colors.gray)};
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 5px;
`;

export { ProductsWrapper, PaginationWrapper, StyledUL, StyledLi, StyledButton };
