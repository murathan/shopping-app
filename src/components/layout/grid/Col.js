import { StyledColumn } from './styled';
import PropTypes from 'prop-types';

const Col = ({ $size, children }) => {
	return <StyledColumn $size={$size}>{children}</StyledColumn>;
};

Col.propTypes = {
	children: PropTypes.node,
	$size: PropTypes.oneOf(['small', 'large']),
};

export default Col;
