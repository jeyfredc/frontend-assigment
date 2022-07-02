import React from "react";
import logo from "../../assets/logo-docred.png";
import "../../styles/LandingPage/Footer.scss"

const Footer = () => {
  return (
    <div className="footer__content">
      <div className="footer__title">
        <img src={logo} alt="logo" className="logo" />
        <div className="footer__title">
          doc <b>red</b>
        </div>
      </div>
      <div className="footer__links">
        <ul>
          <li>Preguntas frecuentes</li>
          <li>Contáctanos</li>
          <li>Información</li>
        </ul>
      </div>

      <div className="footer__author">
      <p>DocRed &copy; 2019. Todos los derechos reservados</p>
      </div>
    </div>
  );
};

export default Footer;
