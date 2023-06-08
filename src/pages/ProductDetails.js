import React from 'react';

const ProductDetails = ({ match, data }) => {
  const { productName } = match.params;

  // Find the product with the matching name
  const product = data.find((product) => product.productName === productName);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <img src={product.image} alt={product.productName} />
      <p>{product.productName}</p>
      <p>{product.price}</p>
    </div>
  )
}
export default ProductDetails;
