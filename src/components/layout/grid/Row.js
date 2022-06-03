import { StyledRow } from './styled';
import PropTypes from 'prop-types';

const Row = ({ children }) => {
	return <StyledRow>{children}</StyledRow>;
};

Row.propTypes = {
	children: PropTypes.node,
	size: PropTypes.oneOf(['small', 'large']),
};

export default Row;
