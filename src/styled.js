import styled, { createGlobalStyle } from 'styled-components';
import colors from './styling/colors';
import mediaQueries from './styling/mediaQueries';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
        font-family: "Open Sans", sans-serif;
    }
`;

const Content = styled.div`
	padding: 40px 104px;
	background-color: ${colors.white.tertiary};
	min-height: calc(100vh - 256.63px);
	${mediaQueries.lg} {
		padding: 40px 25px;
	}
	${mediaQueries.sm} {
		padding: 40px 10px;
	}
`;

export { GlobalStyle, Content };
