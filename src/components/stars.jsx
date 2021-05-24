import React from "react";
import Star from "../assets/img/icons/star.svg";
import StarEmpty from "../assets/img/icons/star-empty.svg";

/* RENDERIZAÇÃO CONDIONAL PARA AS STARS */
const Stars = (props) => {
  console.log(props);
  if (props.numberStars == 1) {
    return (
      <div className="star-avaliation">
        <img src={Star} alt="Avaliation" />
        <img src={StarEmpty} alt="Avaliation" />
        <img src={StarEmpty} alt="Avaliation" />
        <img src={StarEmpty} alt="Avaliation" />
        <img src={StarEmpty} alt="Avaliation" />
      </div>
    );
  }
  if (props.numberStars == 2) {
    return (
      <div className="star-avaliation">
        <img src={Star} alt="Avaliation" />
        <img src={Star} alt="Avaliation" />
        <img src={StarEmpty} alt="Avaliation" />
        <img src={StarEmpty} alt="Avaliation" />
        <img src={StarEmpty} alt="Avaliation" />
      </div>
    );
  }
  if (props.numberStars == 3) {
    return (
      <div className="star-avaliation">
        <img src={Star} alt="Avaliation" />
        <img src={Star} alt="Avaliation" />
        <img src={Star} alt="Avaliation" />
        <img src={StarEmpty} alt="Avaliation" />
        <img src={StarEmpty} alt="Avaliation" />
      </div>
    );
  }
  if (props.numberStars == 4) {
    return (
      <div className="star-avaliation">
        <img src={Star} alt="Avaliation" />
        <img src={Star} alt="Avaliation" />
        <img src={Star} alt="Avaliation" />
        <img src={Star} alt="Avaliation" />
        <img src={StarEmpty} alt="Avaliation" />
      </div>
    );
  }
  if (props.numberStars == 5) {
    return (
      <div className="star-avaliation">
        <img src={Star} alt="Avaliation" />
        <img src={Star} alt="Avaliation" />
        <img src={Star} alt="Avaliation" />
        <img src={Star} alt="Avaliation" />
        <img src={Star} alt="Avaliation" />
      </div>
    );
  }
  return (
    <div className="star-avaliation">
      <img src={Star} alt="Avaliation" />
      <img src={Star} alt="Avaliation" />
      <img src={Star} alt="Avaliation" />
      <img src={Star} alt="Avaliation" />
      <img src={Star} alt="Avaliation" />
    </div>
  );
};

export default Stars;
