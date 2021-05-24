import React, { useState } from "react";
import Star from "../assets/img/icons/star.svg";
import StarEmpty from "../assets/img/icons/star-empty.svg";
import Carousel from "react-elastic-carousel";
import CurrencyFormat from "react-currency-format";

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

      /* número de parcelas */
      const plots =
        product.installments.length > 0 ? product.installments[0].quantity : "";

      const valuePlots =  product.installments.length > 0 ? product.installments[0].value : "";

      /* esconder divs desnecessárias para o produto */
      const hidden =
        product.listPrice === null ? "hidden" : parseInt(product.listPrice);

      /* Preço sem desconto */
      const OfferDiscount = parseInt(product.listPrice);

      /* preço do produto */
      const price = parseInt(product.price);

      const createStars = (stars) => {
        const limit = 5;
        //console.log(stars);
      };

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
                <div className="star-avaliation">
                  {/*createStars(product.stars)*/}
                  
                  <img src={Star} alt="Avaliation" />
                  <img src={StarEmpty} alt="Avaliation" />
                  <img src={StarEmpty} alt="Avaliation" />
                  <img src={StarEmpty} alt="Avaliation" />
                  <img src={StarEmpty} alt="Avaliation" />
                </div>
                <div className="offer-price">

                  <span className={`offer-discount ${hidden}`} >
                    de <CurrencyFormat value={OfferDiscount} displayType={'text'} thousandSeparator={true} prefix={'R$'} />
                  </span>

                  <p>
                    por <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'R$'} /> 
                  </p>
                  <span className={product.installments.length <= 0 ? "hidden" : ""}>{`ou em ${plots} de `}<CurrencyFormat value={valuePlots} displayType={'text'} thousandSeparator={true} prefix={'R$'} /> </span>
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
        <div className="products">
          {renderProducts()}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
