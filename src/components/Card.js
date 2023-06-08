import React from "react";
import jacket3 from "../assets/laptop.png";
import "./card.css"
const Card = ({category,images}) => {
return (
  <div className="category-container">
    <h2>{category}</h2>
    <div className="scrollable-row">
      {images.map((image, index) => (
        <div className="image-item" key={index}>
          <img src={images.image!=null?images.image:jacket3} alt={images.productName} />
          <div className="image-info">
            <p className="image-name">{images.productName}</p>
            <p className="image-price">{images.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default Card;
