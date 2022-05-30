import { StyledCheckBox, Container, StyledLabel } from "./styled";

const CheckBox = ({ label, onChange, selected }) => {
	return (
		<Container>
			<StyledCheckBox
				type='checkbox'
				checked={selected}
				onChange={onChange}
			></StyledCheckBox>
			<StyledLabel>{label}</StyledLabel>
		</Container>
	);
};

export default CheckBox;
