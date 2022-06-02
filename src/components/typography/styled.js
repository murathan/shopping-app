import styled from 'styled-components';
import colors from '../../styling/colors';

const StyledTitle = styled.span`
	font-size: ${(props) => (props.size === 'small' ? '13' : '20')}px;
	margin-bottom: 16px;
	color: ${colors.gray.primary};
`;

const StyledPrice = styled.span`
	width: 100%;
	text-align: left;
	font-size: 14px;
	color: ${(props) => (props.inHeader ? colors.white.primary : colors.blue)};
	font-weight: 700;
`;

export { StyledTitle, StyledPrice };
