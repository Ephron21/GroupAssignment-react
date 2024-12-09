import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams(); // Get the productId from the URL
  
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Product Details</h1>
      <p>Displaying details for product ID: {productId}</p>
      {/* You can fetch the product data from an API or use static data */}
      {/* Example static data */}
      <div>
        <h2>Product Name: Product {productId}</h2>
        <p>Product description and other details can be displayed here...</p>
      </div>
    </div>
  );
};

export default ProductDetails;
