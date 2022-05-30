import styled from 'styled-components';

const StyledTitle = styled.span`
    font-size: ${props => props.size === 'small' ? '13' : '20'}px;
    color: #697488;
`;

export {StyledTitle};