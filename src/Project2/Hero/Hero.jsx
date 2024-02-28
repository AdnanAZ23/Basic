import React from "react";
import "./Hero.css";

export const Hero = () => {
  return (
    <div className="main-cover">
      <div className="main-text-cover">
        <div className="Heading">YOUR FEET DESERVE THE BEST</div>
        <div className="text">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </div>
        <div className="btn-cover">
          <div className="p-btn">Shop Now</div>
          <div className="gray">Category</div>
        </div>
        <div>
          <p>Also Available On</p>
          <div className="images-fav">
            <img src="/amazon.png" alt="" />
            <img src="/flipkart.png" alt="" />
          </div>
        </div>
      </div>
      <div className="shoe-image">
        <img src="/shoe_image.png" alt="" />
      </div>
    </div>
  );
};
