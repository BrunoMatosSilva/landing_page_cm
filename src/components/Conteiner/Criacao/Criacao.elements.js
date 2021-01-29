/* eslint-disable linebreak-style */
import styled from 'styled-components';
import { corFundoTerceiro } from '../../UI/variaveis';
import { Titulo } from '../Banner/Banner.elements';

export const options = {
  settings: {
    overlayColor: '#333',
    autoplaySpeed: 1500,
    transitionSpeed: 900,
  },
  buttons: {
    backgroundColor: '#fff',
    iconColor: '#C3B003',
  },
  caption: {
    captionColor: '#a6cfa5',
    captionFontFamily: 'Raleway, sans-serif',
    captionFontWeight: '300',
    captionTextTransform: 'uppercase',
  },
  progressBar: {
    height: '20px',
    fillColor: '#C3B003',
    backgroundColor: '#ffffff',
  },
};

export const StyleCriacao = styled.section`
background-color: ${corFundoTerceiro};
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
padding-bottom: 5%;

@media screen and (max-width: 600px){
    height: 100%;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
        height: 100vh;
}

`;

export const TituloCriacao = styled(Titulo)`
    padding-top: 5%;
    padding-bottom: 2%;
    text-align: center;
`;

export const MenuCriacao = styled.div`
padding: 20px 0px;
background-color: #fff;
text-align: center;
`;
