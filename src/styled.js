import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
`;

const Content = styled.div`
    min-height: 100%;
    padding: 40px 104px;
`;

export {GlobalStyle, Content};