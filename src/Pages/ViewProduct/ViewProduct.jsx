


import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ViewProduct.css';

function ViewProduct({ Add = "Add to Cart" }) {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;

  if (!product) {
    navigate('/Dashboard');
    return null;
  }

  const handleAddToBeg = () => {
    // 🔹 Login ka data localStorage se
    const storedUserId = localStorage.getItem("userId");
    const loggedUserString = localStorage.getItem("loggedInUser");

    let userId = storedUserId || null;

    if (!userId && loggedUserString) {
      try {
        const loggedUser = JSON.parse(loggedUserString);
        userId = loggedUser.id || loggedUser.userId || null;
      } catch (err) {
        console.error("Error parsing loggedInUser:", err);
      }
    }

    // ❌ agar userId nahi mila -> login nahi hua
    if (!userId) {
      alert("Please login first to add items to your Beg");
      return;
    }

    const begKey = `beg_${userId}`; // har user ke liye alag Beg
    let beg = JSON.parse(localStorage.getItem(begKey)) || [];

    if (!beg.includes(product.id)) {
      beg.push(product.id);
      localStorage.setItem(begKey, JSON.stringify(beg));
      alert(`${product.product_name} added to your Beg`);
    } else {
      alert(`${product.product_name} is already in your Beg`);
    }
  };

  const mrp = Number(product.price) || 0;
  const offerPrice = mrp - mrp * 0.15;

  return (
    <div className="Viewproduct">
      <div className="thumbnail">
        <img src={product.product_image} alt={product.product_name} />
      </div>
      <div className="desc">
        <h1>
          {product.product_name} | {product.category} | {product.brand}
        </h1>
        <h2>
          M.R.P <strike>₹{mrp}</strike>
        </h2>
        <h2>
          <span>Offer Price: ₹{offerPrice}</span>
        </h2>
        <h4>{product.description}</h4>
        <h3>
          <span className="rating">Stock: {product.stock}</span>
        </h3>

        <button
          className="btn btn-active btn-info"
          onClick={handleAddToBeg}
        >
          {Add}
        </button>
      </div>
    </div>
  );
}

export default ViewProduct;
