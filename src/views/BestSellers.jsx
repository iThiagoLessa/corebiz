import React from "react";

const BestSeller = (props) => {
  return (
    <section className="area-best-sellers">
      <header className="nunito">
        <h2>Mais Vendidos</h2>
        <hr align="left" />
      </header>
      <div className="products">
        <div className="product">
          <div>
            <figure>
              <img src="" />
            </figure>
            <div className="infos-product nunito">
              <h3>Sapato floater preto</h3>
              <div className="offer-price">
                <p>por R$ 259,90</p>
                <span>ou em 9x de R$ 28,87</span>
              </div>
            </div>
            <button>Comprar</button>
          </div>
        </div>
        <div className="product">
          <div>
            <figure>
              <img src="" />
            </figure>
            <div className="infos-product nunito">
              <h3>Sapato floater preto</h3>
              <div className="offer-price">
                <span className="offer-discount">de R$ 299,00</span>
                <p>por R$ 199,00</p>
                <span>ou em 9x de R$ 28,87</span>
              </div>
            </div>
            <button>Comprar</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
