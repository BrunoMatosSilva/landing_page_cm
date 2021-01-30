/* eslint-disable linebreak-style */
import styled from 'styled-components';
import { StyleSobre, TituloSobre } from '../Sobre/Sobre.elements';

export const StyleContato = styled(StyleSobre)`
    border-radius: 0;
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

export const TituloContato = styled(TituloSobre)`
    padding-top: 5%;
`;

export const StyleFormulario = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    flex-direction: column;

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;

export const Formulario = styled.form`
    display: flex;
    align-items: center;

@media screen and (max-width: 600px) {
    width: 100%;
}
`;

export const FormLista = styled.ul`
    list-style: none;

@media screen and (max-width: 600px) {
    width: 90%;
    margin-left: 20px;
}
`;

export const FormInput = styled.input`
    height: 35px;
    margin-top: 10px;
    width: 400px;
    padding-left: 10px;
    border: 2px solid #333;

    &:hover{
        border: 2px solid #FAFF00;
    }

@media screen and (max-width: 600px) {
        width: 100%;
}
`;

export const FormTextarea = styled.textarea`
    width: 400px;
    height: 80px;
    margin-top: 10px;
    padding-top: 10px;
    padding-left: 10px;
    border: 2px solid #333;
    resize: none;

    &:hover{
        border: 2px solid #FAFF00;
    }

@media screen and (max-width: 600px) {
        width: 100%;
}
`;

export const EnviarInput = styled.button`
    height: 35px;
    width: 120px;
    margin-top: 10px;
    margin-bottom: 2rem;
    text-align: center;
    background: #FAFF00;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover{
        background: #fff;
    }
`;

export const SessaoIcon = styled.section`
    margin-top: 4rem;
    color: #fff;
`;

export const Telefone = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const Social = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    align-items: center;
`;

export const LinkIcon = styled.a`
    padding: 10px;
`;

export const IconTel = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 1rem;
`;

export const Icon = styled.img`
    width: 35px;
    height: 35px;
    margin: 10px;
    cursor: pointer;

    &:hover{
        opacity: 60%;
    }
`;
