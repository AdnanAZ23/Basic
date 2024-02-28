import React from "react";

export const FoodCard = (props) => {
  const { image, name, price, text } = props.data;
  return (
    <div className="food-card">
      <div className="food-card-image">
        <img src={image} alt="" />
      </div>
      <div className="food-card-content">
        <div>
          <div className="food-card-heading">{name}</div>
          <div className="food-card-text">{text}</div>
        </div>
        <div className="food-btns">${price}.00</div>
      </div>
    </div>
  );
};
