import React from "react";
import SliderImage from "../assets/img/slider-image.svg"
import SliderDark from "../assets/img/Banner.svg"

const Banner = (props) => {
  return (
    <section className="banner-area nunito" style={{backgroundImage: `url(${SliderDark})`}}>
      <img src={SliderImage} alt="criar ou migrar seu e-commerce" />
      <div>
        <div className="banner-text">
          <span>Olá, o que você está procurando?</span>
          <h1>Criar ou migrar seu e-coommerce?</h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
