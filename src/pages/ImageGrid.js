import React from 'react';
// import './ImageGrid.css'; // Import the CSS file for styling
import jacket3 from "../assets/laptop.png";

const ImageGrid = (data) => {
  return (
    <div className="image-grid">
      {data.map((component, index) => (
        <div className="image-item" key={index}>
          <img src={component.image!=null?component.image:jacket3} alt={component.name} />
          <div className="image-info">
            <h3>{component.name}</h3>
            <p>{component.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;