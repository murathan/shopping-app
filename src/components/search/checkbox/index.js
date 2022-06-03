import { StyledCheckBox, Container, StyledLabel } from './styled';
import PropTypes from 'prop-types';

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

CheckBox.propTypes = {
	label: PropTypes.string,
	onChange: PropTypes.func,
	selected: PropTypes.bool,
};

CheckBox.defaultProps = {
	label: '',
};

export default CheckBox;
