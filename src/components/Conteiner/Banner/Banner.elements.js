import styled from 'styled-components';
import { corFundoPrimaria, corTextoPrimaria, corFundoSecundario, corTextoSecundario } from "../../UI/variaveis";
import fundo_banner from '../../../imagens/fundo_banner.jpg';
import { Link } from 'react-scroll';

export const StyleBanner = styled.section`
display: flex;
height: 100vh;

@media screen and (max-width: 600px) {
    height: calc(100vh - 80px);
}

@media screen and (min-width: 601px) and (max-width: 736px) {
    height: 100%;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
    height: 100vh;
}
`;

export const SectionBanner = styled.section`
background-image: url(${fundo_banner});
background-repeat: no-repeat;
width: 100%;
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;

@media screen and (max-width: 600px) {
    background-size: 200% 100%;
}
`;

export const Titulo = styled.h1`
font-size: 3rem;
padding-top: 15%;
font-weight: bold;

@media screen and (max-width: 600px) {
    padding-top: 30%;
    font-size: 2.3rem;
    text-align: center;
}

@media screen and (min-width: 601px) and (max-width: 736px) {
    padding-top: 10%;
}

@media screen and (min-width: 737px) and (max-width: 960px) {
    padding-top: 30%;
    font-size: 3rem;
    text-align: center;
}
`;

export const Subtitulo = styled.h2`
font-size: 2rem;
padding-top: 2rem;
color:${corFundoSecundario};

@media screen and (max-width: 600px) {
    padding-top:2.5rem;
    font-size: 1.2rem;
    text-align: center;  
}

@media screen and (min-width: 601px) and (max-width: 960px) {
    padding-top:2.5rem;
    font-size: 2rem;
    text-align: center;  
}
`;

export const Paragrafo = styled.p`
font-size: 1.5rem;
padding-top: 5%;

@media screen and (max-width: 600px) {
    font-size: 1.2rem;
    padding-top: 10%;
    text-align: center; 
}

@media screen and (min-width: 601px) and (max-width: 960px) {
    font-size: 1.5rem;
    padding-top: 10%;
    text-align: center; 
}
`;

export const BtnChamada = styled(Link)`
border-radius: 30px;
background-image: linear-gradient(${corFundoSecundario}, ${corFundoPrimaria});
color: ${corTextoPrimaria};
border: none;
height: 60px;
font-size: 1.5rem;
font-weight: bold;
outline: none;
width: 400px;
margin: 5% auto;
padding-top: 1%;
text-decoration: none;
text-align: center;

&:hover {
    color: ${corTextoSecundario};
    background-image: linear-gradient(${corFundoPrimaria}, ${corFundoSecundario});
    font-weight: bold;
};

@media screen and (max-width: 600px) {
    margin-top: 15%;
    padding-top: 5%;
    margin-bottom: 20%;
    width: 80%;
}

@media screen and (min-width: 601px) and (max-width: 736px) {
    margin-top: 10%;
    margin-bottom: 10%;
    padding-top: 2%;
}

@media screen and (min-width: 737px) and (max-width: 960px) {
    margin-top: 15%;
    padding-top: 2%;
}
`;