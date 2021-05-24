import React, { useState } from "react";
import Stars from "../components/stars";
import AngleRight from "../assets/img/icons/angle-right.svg";
import AngleLeft from "../assets/img/icons/angle-left.svg";

const BestSeller = (props) => {
  //console.log(props);

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
        return <Stars numberStars={stars} />;
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
              {renderStars(product.stars)}
              <div className="offer-price">
                <span className={`offer-discount`}>
                  {product.listPrice !== null ? `de R$ ${OfferDiscount}` : ""}
                </span>

                <p>por {`R$ ${price}`}</p>
                <span>
                  {product.installments.length > 0
                    ? `ou em ${plots}x de ${valuePlots}`
                    : ""}
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

  const [disabledLeft, setDisabledLeft] = useState(false);
  const [disabledRight, setDisabledRight] = useState(false);

  const moveLeft = () => {
    const products = document.getElementById("products");
    products.style.left = "-240px";
    setDisabledLeft(true);
    setDisabledRight(false);
  };

  const moveRight = () => {
    const products = document.getElementById("products");
    products.style.left = "0";
    setDisabledRight(true);
    setDisabledLeft(false);
  };

  /* RETORNO DO COMPONENTE */
  return (
    <section className="area-best-sellers">
      <header className="nunito">
        <h2>Mais Vendidos</h2>
        <hr align="left" />
      </header>
      <div className="carousel-wrapper">
        <div
          id="products"
          className="products"
        >
          {renderProducts()}
        </div>
      </div>
      <button
        className="angle-right"
        disabled={disabledLeft}
        onClick={() => moveLeft()}
      >
        <img src={AngleRight} alt="dots" />
      </button>
      <button className="angle-left" disabled={disabledRight} onClick={() => moveRight()}>
        <img src={AngleLeft} alt="dots" />
      </button>
    </section>
  );
};

export default BestSeller;
