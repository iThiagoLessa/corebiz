import React from "react";
import MenuHambuguer from "../assets/img/icons/menu-icon.svg";
import Logo from "../assets/img/logo-corebiz.svg";
import ShoppingCart from "../assets/img/shopping-cart.svg";
import IconSearch from "../assets/img/magnifying-glass.svg"

const Top = (props) => {
  return (
    <header className="nunito top">
      <nav>
        <img src={MenuHambuguer} alt="Menu" />
      </nav>
      <div className="logo">
        <img src={Logo} alt="Logo Corebiz" />
      </div>
      <div className="cart">
        <img src={ShoppingCart} alt="Shopping Cart" />
        <span>1</span>
      </div>
      <div>
        <input type="text" placeholder="O que você está procurando?" />
        <img src={IconSearch} alt="O que você está procurando?" />
      </div>
    </header>
  );
};

export default Top;