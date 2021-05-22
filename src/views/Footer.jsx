import React from "react";
import Mail from "../assets/img/icons/mail.svg";
import Contact from "../assets/img/icons/contact-us.svg";
import LogoBranca from "../assets/img/logo-corebiz-branca.svg";
import Vtex from "../assets/img/vtex.svg";

const Footer = (props) => {
  return (
    <section className="footer-area">
      <div className="adrres-infos nunito">
        <header>
          <h2>Localização</h2>
          <hr align="left" />
        </header>
        <div>
          <p>
            Avenida Andrômeda, 2000. Bloco 6 e 8 <br /> Alphavile SP
            <br /> brasil@corebiz.ag <br />
            +55 11 3090 1039
          </p>
        </div>
      </div>
      <div className="contacts nunito">
        <button>
          <div>
            <img src={Mail} alt="entre em contato conosco" />
          </div>
          <div>
            <span>entre em contato</span>
          </div>
        </button>
        <button>
          <div>
            <img src={Contact} alt="fale com nosso consultor" />
          </div>
          <div>
            <span>Fale com nosso consultor online</span>
          </div>
        </button>
      </div>
      <div className="logos-footer">
        <div>
          <span>Created by</span>
          <img src={LogoBranca} alt="Logo Corebiz branca" />
        </div>
        <div>
          <span>Created by</span>
          <img src={Vtex} alt="Logo plataforma vtex" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
