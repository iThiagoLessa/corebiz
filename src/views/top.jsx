import React from "react";
import MenuHambuguer from "../assets/img/icons/menu-icon.svg";
import Logo from "../assets/img/logo-corebiz.svg";
import ShoppingCart from "../assets/img/shopping-cart.svg";
import IconSearch from "../assets/img/magnifying-glass.svg";
import UserIcon from "../assets/img/icons/user.svg";

const Top = (props) => {
  const quantidadeProdutos = () => {
    if (props.productsInCart > 0) {
      localStorage.setItem("shoppingCart", props.productsInCart);
      return <span>{props.productsInCart}</span>;
    }
  };

  return (
    <header className="nunito top">
      <nav>
        <img src={MenuHambuguer} alt="Menu" />
      </nav>
      <div className="logo">
        <img src={Logo} alt="Logo Corebiz" />
      </div>
      <div className="cart">
        <div className="user-account">
          <img src={UserIcon} alt="Shopping Cart" />
          <span>Minha Conta</span>
        </div>
        <img src={ShoppingCart} alt="Shopping Cart" />
        {quantidadeProdutos()}
      </div>
      <div>
        <input type="text" placeholder="O que você está procurando?" />
        <img src={IconSearch} alt="O que você está procurando?" />
      </div>
    </header>
  );
};

export default Top;
