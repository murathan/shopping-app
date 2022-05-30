import { StyledTitle } from "./styled";

const Title = ({ size, children }) => {
	return <StyledTitle size={size}>{children}</StyledTitle>;
};

export { Title };
