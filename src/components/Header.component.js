import React from 'react';
import logo from '../assets/img/logo-calculadora-de-vacunas.svg';

const Header = () => (
  <header>
    <div className="logo"><img src={logo} alt="Calculadora de Vacunas" /></div>
    <div class="buscar"><i class="demo-icon icon-buscar"></i></div>
  </header>
);

export default Header;