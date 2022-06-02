import styled from 'styled-components';
import colors from '../../../styling/colors';

const StyledCheckBox = styled.input`
	margin-right: 8px;
	border-radius: 2px;
	width: 22px;
	height: 22px;
	float: left;
	box-shadow: 0px 1px 7px ${colors.purpleShadow};
	-webkit-appearance: ${(props) => !props.checked && 'none'};
	-moz-appearance: ${(props) => !props.checked && 'none'};
	appearance: ${(props) => !props.checked && 'none'};
`;
const Container = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 18px;
	&:after {
		content: '';
		display: table;
		clear: both;
	}
`;
const StyledLabel = styled.p`
	margin: 0;
	font-size: 14px;
	text-align: left;
`;

export { StyledCheckBox, Container, StyledLabel };
