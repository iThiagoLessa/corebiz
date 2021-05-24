import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Stars from "../components/stars";

const BestSeller = (props) => {
  /* BREAKPOINTS PARA O SLIDER */
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  const renderProducts = () => {
    /* Pegando a lista de produtos */
    const list = props.products || [];

    /* mapeando a lista de produtos */
    return list.map((product) => {
      //console.log(product);

      /* quantidade de parcelas */
      const plots =
        product.installments.length > 0 ? product.installments[0].quantity : "";

        /* valor das parcelas */
      const valuePlots =
        product.installments.length > 0
          ? parseInt(product.installments[0].value / 100)
              .toFixed(2)
              .toString()
              .replace(".", ",")
          : "";

      /* esconder divs desnecessárias para o produto */
      const hidden =
        product.listPrice === null ? "hidden" : parseInt(product.listPrice);

      /* Preço sem desconto já formatado em real */
      const OfferDiscount = parseInt(product.listPrice / 100)
        .toFixed(2)
        .toString()
        .replace(".", ",");

      /* preço do produto */
      const price = parseInt(product.price / 100)
        .toFixed(2)
        .toString()
        .replace(".", ",");
      
      const renderStars = (stars) => {
        return(
          <Stars numberStars={stars} />
        )
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
              <div className="product-name">
                <h3>{product.productName}</h3>
              </div>
              {renderStars(product.stars)}
              <div className="offer-price">
                <span className={`offer-discount`}>
                  {product.listPrice !== null ? `de R$ ${OfferDiscount}` : ""}
                </span>

                <p>por {`R$ ${price}`}</p>
                <span>
                  {product.installments.length > 0 ? `ou em ${plots}x de ${valuePlots}` : ""}
                </span>
              </div>
            </div>
            <div className="button">
              <button onClick={props.addToCart}>Comprar</button>
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
      <div className="carousel-wrapper">
        <div className="products">{renderProducts()}</div>
      </div>
    </section>
  );
};

export default BestSeller;
