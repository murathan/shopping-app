import { StyledTitle, StyledPrice } from './styled';
import PropTypes from 'prop-types';

const Title = ({ $size, children }) => {
	return <StyledTitle $size={$size}>{children}</StyledTitle>;
};

const Price = ({ children, $inHeader }) => {
	return (
		<StyledPrice $inHeader={$inHeader}>₺ {children.toFixed(2)}</StyledPrice>
	);
};

Title.propTypes = {
	size: PropTypes.oneOf(['small', 'large']),
};

Price.propTypes = {
	children: PropTypes.node.isRequired,
	$inHeader: PropTypes.bool,
};

export { Title, Price };
