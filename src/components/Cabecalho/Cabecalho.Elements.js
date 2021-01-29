import styled from 'styled-components';
import { Link } from 'react-scroll';
import { corTextoPrimaria, corTextoSecundario, corFundoPrimaria } from '../UI/variaveis';


export const StyleHeader = styled.div`
background-color: #333;
display: flex;
justify-content: space-between;
width:100%;
height: 80px;
position: sticky;
top:0%;

@media screen and (max-width: 600px) {
    align-items: center;
}
`;

export const LinkLogo = styled(Link)`
text-decoration: none;
border-bottom: none;
cursor: pointer;

&:hover{
    border-bottom: none;
}
`;

export const Logo = styled.img`
width: 70px;
height: 70px;
margin-left: 60px;
margin-top: 5px;
margin-bottom: 20px;

@media screen and (max-width: 600px) {
    margin-top: 20px;
    margin-left: 60px;
}
`;

export const MobileIcone = styled.div`
display: none;

@media screen and (max-width: 960px) {
    display: block;
    transform: translate(-100%, 15%);
    font-size: 2.5rem;
    color: ${corTextoPrimaria};
    cursor:pointer;
}
`;

export const ListMenu = styled.ul`
display:flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: 60px;
flex-direction: wrap;

@media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease-in-out;
    background: ${corFundoPrimaria};
}
`;

export const MenuItem = styled.li`
    padding: 5px 20px;
`;

export const BtnMenu = styled(Link)`
text-align: center;
color: ${corTextoPrimaria};
font-size: 1.2rem;
text-decoration: none;
cursor: pointer;

@media screen and (max-width: 768px) {
    text-align: center;
    padding: 1.5rem;
    width: 100%;
    display: table;
}

&:hover {
    transition: all 0.5s ease-in-out;
    color: ${corTextoSecundario};
}
`;