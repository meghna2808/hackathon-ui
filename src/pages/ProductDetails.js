import React from 'react';
import jacket3 from "../assets/jacket.jpg";
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state?.product; // Add additional checks

  // if (!product) {
  //   // Render a loading state or return null if the product is null or undefined
  //   return null;
  // }
  console.log(product);

  return (
    <div>
    {
      product?(<div className=''>
        <img src={product.image || jacket3} alt={product.productName} width="100%" height="100" />
        <p>{product.productName}</p>
        <p>{product.price}</p>
        <p>{product.sellerName}</p>
        <button>Add to Cart</button>
      </div>):(<p className='spinner'><b>Loading data...</b></p>)
    }
    {/* </div>
    <div>
      <img src={product.image || jacket3} alt={product.productName} width="100%" height="100" />
      <p>{product.productName}</p>
      <p>{product.price}</p>
      <p>{product.sellerName}</p>
      <button>Add to Cart</button>
    </div> */}
    </div>
  );
};

export default ProductDetails;