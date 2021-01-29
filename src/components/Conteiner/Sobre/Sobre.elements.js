import styled from 'styled-components';
import { corFundoPrimaria, corTextoSecundario, corTextoPrimaria } from "../../UI/variaveis";
import { Titulo, Paragrafo } from '../Banner/Banner.elements';


export const StyleSobre = styled.section`
background-color: ${corFundoPrimaria};
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;

@media screen and (max-width: 600px) {
    height: 100%;
}

@media screen and (min-width: 601px) and (max-width: 736px) {
    height: 100%;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
    height: calc(100vh - 80px);
}
`;

export const TituloSobre = styled(Titulo)`
color: ${corTextoSecundario};
padding-top: 10%;
padding-bottom: 5%;

`;

export const StyleContainer = styled.div`
display: flex;
justify-content: space-between;

@media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 0;
}
`;

export const ImgSobre = styled.img`
width: 500px;
height: 400px;

@media screen and (max-width: 768px) {
    width: 250px;
    height: 200px;
    padding-bottom: 2rem;
}

@media screen and (min-width: 601px) and (max-width: 736px) {
    padding-bottom: 2rem;
}
`;

export const ParagrafoSobre = styled(Paragrafo)`
color: ${corTextoPrimaria};
font-size: 1rem;
line-height: 2rem;
text-align: justify;
max-width: 450px;
padding-left: 2rem;
padding-right: 2rem;
padding-bottom: 2rem;
margin-right: 2rem;

@media screen and (max-width: 600px) {
    margin-left: 0;
    margin-right: 0;
}

@media screen and (min-width: 601px) and (max-width: 736px) {
    margin-left: 2rem;
    margin-right: 2rem;
}
`;
