import styled from 'styled-components';
import mediaQueries from '../../../styling/mediaQueries';

const StyledColumn = styled.div`
	padding: 8px;
	display: flex;
	flex-direction: column;
	width: ${(props) => (props.$size === 'small' ? '25' : '50')}%;
	${mediaQueries.md} {
		width: ${(props) => (props.$size === 'small' ? '25' : '40')}%;
	}
	${mediaQueries.sm} {
		width: 50%;
		&:not(:first-child) {
			margin-top: 15px;
		}
	}
	${mediaQueries.xs} {
		width: 100%;
		align-items: center;
	}
`;

const StyledRow = styled.div`
	display: flex;
	${mediaQueries.sm} {
		flex-direction: column;
		align-items: center;
	}
`;

export { StyledRow, StyledColumn };
