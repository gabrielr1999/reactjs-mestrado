import React from 'react';
import logo from '../assets/images/png/Rick-And-Morty-Logo.png';

function Footer() {
  return (
    <footer>
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <p>Todos direitos reservados - 2024</p>
    </footer>
  );
}

export default Footer;
