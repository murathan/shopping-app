import { StyledColumn } from "./styled";

const Col = ({ size, children }) => {
	return <StyledColumn $size={size}>{children}</StyledColumn>;
};

export default Col;
