/* eslint-disable react/react-in-jsx-scope *//* eslint-disable linebreak-style */
import {
  StyleBanner, SectionBanner, Titulo, Subtitulo, Paragrafo, BtnChamada,
} from './Banner.elements';

export function Banner() {
  return (
    <StyleBanner id="home">
      <SectionBanner>
        <Titulo>Criação de Canários</Titulo>
        <Subtitulo>Alimentação ● Procriação ● Tratamento</Subtitulo>
        <Paragrafo>Criar com qualidade, excelência e sobretudo, respeito às aves.</Paragrafo>
        <BtnChamada spy smooth offset={-80} duration={500} to="contato">Fale Conosco</BtnChamada>
      </SectionBanner>
    </StyleBanner>

  );
}

export default Banner;
