/* eslint-disable object-curly-newline *//* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import {
  StyleHeader, LinkLogo, Logo, ListMenu, MobileIcone, MenuItem, BtnMenu,
} from './Cabecalho.Elements';
import banklogo from '../../imagens/logoCM.svg';

export function Cabecalho() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <StyleHeader>
      <LinkLogo spy smooth offset={-80} duration={500} to="home">
        <Logo src={banklogo} />
      </LinkLogo>
      <MobileIcone onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </MobileIcone>
      <ListMenu onClick={handleClick} click={click}>
        <MenuItem>
          <BtnMenu spy smooth offset={-80} duration={500} to="home" onClick={handleClick}>Home</BtnMenu>
        </MenuItem>
        <MenuItem>
          <BtnMenu spy smooth offset={-80} duration={500} to="sobre" onClick={handleClick}>Sobre</BtnMenu>
        </MenuItem>
        <MenuItem>
          <BtnMenu spy smooth offset={-80} duration={500} to="criacao" onClick={handleClick}>Criação</BtnMenu>
        </MenuItem>
        <MenuItem>
          <BtnMenu spy smooth offset={-80} duration={500} to="contato" onClick={handleClick}>Contato</BtnMenu>
        </MenuItem>
      </ListMenu>
    </StyleHeader>
  );
}

export default Cabecalho;
