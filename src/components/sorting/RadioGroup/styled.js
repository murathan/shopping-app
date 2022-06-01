import styled from "styled-components";

const RadioGroupWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 36px;
	margin-left: 24px;
`;

const RadioWrapper = styled.div`
	margin-bottom: 16px;
	display: flex;
	align-items: center;
`;

const RadioButton = styled.input`
	margin-right: 12px;
	width: 22px;
	height: 22px;
`;

export { RadioGroupWrapper, RadioWrapper, RadioButton };
