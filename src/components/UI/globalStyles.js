import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
}
`;

export const Container = styled.div`
z-index: 1;
width: 100vh;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
padding-right: 50px;
padding-left: 50px;
`;

export default GlobalStyle