/* eslint-disable linebreak-style */
import React from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import { GlobalStyle } from '../components/UI/globalStyles';
import { Cabecalho } from '../components/Cabecalho';
import { Banner } from '../components/Conteiner/Banner';
import { Sobre } from '../components/Conteiner/Sobre';
import { Criacao } from '../components/Conteiner/Criacao';
import { Contato } from '../components/Conteiner/Contato';
import { Rodape } from '../components/Conteiner/Rodape';

const Home = () => (
  <>
    <GlobalStyle />
    <Cabecalho />
    <Banner />
    <Sobre />
    <SimpleReactLightbox>
      <Criacao />
    </SimpleReactLightbox>
    <Contato />
    <Rodape />
  </>
);

export default Home;
