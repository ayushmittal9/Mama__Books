import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './ViewProduct.css';

function ViewProduct() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;

  if (!product) {
    navigate('/Dashboard');
    return null;
  }

  return (
    <div className="Viewproduct">
      <div className="thumbnail">
        <img src={product.product_image} alt={product.product_name} />
      </div>
      <div className="desc">
        <h1>{product.product_name} | {product.category} | {product.brand}</h1>
        <h2>M.R.P <strike>{product.price}</strike></h2>
        <h2><span>Offer Price: {product.price - product.price * 0.15}</span></h2>
        <h4>{product.description}</h4>
        <h3><span className="rating"> Stock :{product.stock}</span></h3>
      </div>
    </div>
  )
}

export default ViewProduct;
