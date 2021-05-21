import React from "react";
import MenuHambuguer from "../assets/img/icons/menu-icon.svg";
import Logo from "../assets/img/logo-corebiz.svg";
import ShoppingCart from "../assets/img/shopping-cart.svg";

const App = (props) => {
  return (
    <main>
      <header className="nunito">
        <div className="top">
          <nav>
            <img src={MenuHambuguer} alt="Menu" />
          </nav>
          <div className="logo">
            <img src={Logo} alt="Logo Corebiz" />
          </div>
          <div className="cart">
            <img src={ShoppingCart} alt="Shopping Cart" />
          </div>
        </div>
      </header>
    </main>
  );
};

export default App;
