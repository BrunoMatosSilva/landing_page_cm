import { StyleSobre, TituloSobre,StyleContainer, ParagrafoSobre, ImgSobre } from './Sobre.elements';
import img from '../../../imagens/natureza.svg'

export function Sobre () {
    return (
        <StyleSobre id="sobre">
            <TituloSobre>Sobre</TituloSobre>
            <StyleContainer>
                <ParagrafoSobre>
                    Somos apaixonados por canários e fazemos questão de criar com qualidade, excelência e sobretudo, respeito às aves. 
                    Essa via de acesso são para àqueles que desejarem adquirir nossas aves e difundir a criação de canários de cor e porte pelo Brasil.
                </ParagrafoSobre>
                <ImgSobre src={img}/>
            </StyleContainer>
        </StyleSobre>
    );
}

export default Sobre;