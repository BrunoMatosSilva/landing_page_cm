import styled from 'styled-components';
import { corTextoTerceiro, corTextoSecundario } from '../../UI/variaveis';

export const StyleRodape = styled.section`
    background: ${corTextoTerceiro};
    display: flex;
    justify-content: center;
    border-top: solid 4px ${corTextoSecundario};
`;

export const RodapeTexto = styled.div`
    margin: 1rem;
`;