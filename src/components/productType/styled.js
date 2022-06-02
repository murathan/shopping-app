import styled from 'styled-components';
import colors from '../../styling/colors';

const StyledCheckButton = styled.button`
	height: 30px;
	width: fit-content;
	padding: 6px 16px;
	border-radius: 2px;
	border: none;
	color: ${(props) => (props.active ? colors.white.quaternary : colors.blue)};
	background-color: ${(props) =>
		props.active ? colors.blue : colors.white.quaternary};
	&:not(:last-child) {
		margin-right: 10px;
	}
	cursor: pointer;
`;

const StyledCheckButtonGroup = styled.div``;

export { StyledCheckButtonGroup, StyledCheckButton };
