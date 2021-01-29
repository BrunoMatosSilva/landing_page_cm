import { StyleContato, TituloContato, StyleFormulario,Formulario, FormLista, FormInput,FormTextarea, EnviarInput,LinkIcon, Icon, SessaoIcon, Social, Telefone, IconTel } from './Contato.elements';
import IconWhats from '../../../imagens/whatsapp.svg';
import IconFace from '../../../imagens/facebook.svg';
import IconInsta from '../../../imagens/instagram.svg';
import IconYoutube from '../../../imagens/youtube.svg';
import IconTwitter from '../../../imagens/twitter.svg';

export function Contato () {
    return (
        <StyleContato id="contato">
            <TituloContato>Fale Conosco</TituloContato>
            <StyleFormulario>
                <Formulario>
                    <FormLista>
                        <li>
                            <FormInput placeholder="Nome *" required="required" />
                        </li>
                        <li>
                            <FormInput placeholder="Telefone" type="tel" />
                        </li>
                        <li>
                            <FormInput placeholder="E-mail *" required="required" type="email"/>
                        </li>
                        <li>
                            <FormTextarea placeholder="Mensagem *" required="required" />
                        </li>
                        <li>
                            <EnviarInput class="enviar" onclick="Enviar();" value="Enviar">Enviar</EnviarInput>
                        </li>
                    </FormLista>
                </Formulario>
            </StyleFormulario>

            <SessaoIcon>
                <Telefone><IconTel src={IconWhats}/> (11) 98866 - 3315</Telefone>
                <Social>
                    <LinkIcon href="https://www.facebook.com" target="_blank"><Icon src={IconFace}/></LinkIcon>
                    <LinkIcon href="https://www.instagram.com" target="_blank"><Icon src={IconInsta}/></LinkIcon>
                    <LinkIcon href="https://www.youtube.com" target="_blank"><Icon src={IconYoutube}/></LinkIcon>
                    <LinkIcon href="https://www.twitter.com" target="_blank"><Icon src={IconTwitter}/></LinkIcon>
                </Social>
            </SessaoIcon>
        </StyleContato>
    );
}

export default Contato;