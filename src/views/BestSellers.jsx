import React, { useState } from "react";
import Star from "../assets/img/icons/star.svg";
import StarEmpty from "../assets/img/icons/star-empty.svg";

const BestSeller = (props) => {
  const renderProducts = () => {
    
    /* Pegando a lista de produtos */
    const list = props.products || [];

    /* mapeando a lista de produtos */
    return list.map((product) => {
      //console.log(product);
      
      /* número de parcelas */
      const plots =
        product.installments.length > 0 ? product.installments[0].quantity : "";

      /* esconder divs desnecessárias para o produto */
      const hidden =
        product.listPrice === null ? "hidden" : parseInt(product.listPrice);

      /* Preço sem desconto */
      const OfferDiscount = parseInt(product.listPrice);

      /* preço do produto */
      const price = parseInt(product.price);
      
      const createStars= (stars) => {
        const limit = 5;
      }

      return (
        <div className="product" key={product.productId}>
          <div>
            <figure className="area-image-product">
              <img src={product.imageUrl} alt={product.productName} />
              <div className={`discount-spotlight ${hidden}`}></div>
              <span className={`off nunito ${hidden}`}>OFF</span>
            </figure>
            <div className="infos-product nunito">
              <div>
                <h3>{product.productName}</h3>
              </div>
              <div className="star-avaliation">
                {createStars(product.stars)}
                <img src={Star} alt="Avaliation" />
                <img src={StarEmpty} alt="Avaliation" />
                <img src={StarEmpty} alt="Avaliation" />
                <img src={StarEmpty} alt="Avaliation" />
                <img src={StarEmpty} alt="Avaliation" />
              </div>
              <div className="offer-price">
                <span className={`offer-discount ${hidden}`}>{`de R$ ${parseInt(
                  product.listPrice
                ).toFixed(2)}`}</span>
                <p>por {`R$ ${price}`} </p>
                <span>{`ou em ${plots} de R$ 28,87`}</span>
              </div>
            </div>
            <div className="button">
              <button>Comprar</button>
            </div>
          </div>
        </div>
      );
    });
  };

  /* RETORNO DO COMPONENTE */
  return (
    <section className="area-best-sellers">
      <header className="nunito">
        <h2>Mais Vendidos</h2>
        <hr align="left" />
      </header>
      <div className="products">{renderProducts()}</div>
    </section>
  );
};

export default BestSeller;
