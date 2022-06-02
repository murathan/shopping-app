import { StyledTitle, StyledPrice } from './styled';

const Title = ({ size, children }) => {
	return <StyledTitle size={size}>{children}</StyledTitle>;
};

const Price = ({ children, inHeader }) => {
	return <StyledPrice inHeader={inHeader}>₺ {children.toFixed(2)}</StyledPrice>;
};

export { Title, Price };
