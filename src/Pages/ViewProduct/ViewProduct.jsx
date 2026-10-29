import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar1/Navbar';
import Footer from '../../Components/Footer/Footer';
import './ViewProduct.css';

function ViewProduct() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;

  if (!product) {
    navigate('/');
    return null;
  }

  const getLoggedInUserId = () => {
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

    return userId;
  };

  const handleAddToBeg = () => {
    const userId = getLoggedInUserId();

    if (!userId) {
      alert("Please login first to add items to your Beg/Cart");
      navigate('/login');
      return;
    }

    const begKey = `beg_${userId}`;
    let beg = JSON.parse(localStorage.getItem(begKey)) || [];

    if (!beg.includes(product.id.toString())) {
      beg.push(product.id.toString());
      localStorage.setItem(begKey, JSON.stringify(beg));
      alert(`${product.product_name} added to your Beg!`);
    } else {
      alert(`${product.product_name} is already in your Beg!`);
    }
  };

  const handleBuyNow = () => {
    const userId = getLoggedInUserId();

    if (!userId) {
      alert("Please login first to complete your purchase");
      navigate('/login');
      return;
    }

    const loggedUserString = localStorage.getItem("loggedInUser");
    let userName = "Customer";
    if (loggedUserString) {
      try {
        const parsed = JSON.parse(loggedUserString);
        userName = parsed.username || parsed.email || "Customer";
      } catch (err) {
        console.error("Error parsing loggedInUser name:", err);
      }
    }

    const mrp = Number(product.price) || 0;
    const finalPrice = Math.round(mrp * 0.85 * 100) / 100;

    const newOrder = {
      id: "ORD-" + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      userName: userName,
      items: [
        {
          id: product.id,
          product_name: product.product_name,
          category: product.category,
          brand: product.brand,
          price: finalPrice,
          product_image: product.product_image,
          quantity: 1,
        }
      ],
      totalAmount: finalPrice,
      status: "Order Placed - Fast Delivery"
    };

    const ordersKey = `orders_${userId}`;
    const storedOrders = JSON.parse(localStorage.getItem(ordersKey)) || [];
    storedOrders.unshift(newOrder);
    localStorage.setItem(ordersKey, JSON.stringify(storedOrders));

    alert(`Order placed successfully for ${product.product_name}! Redirecting to Your Orders.`);
    navigate('/orders');
  };

  const mrp = Number(product.price) || 0;
  const offerPrice = Math.round((mrp - mrp * 0.15) * 100) / 100;

  return (
    <>
      <Navbar />
      <div className="Viewproduct">
        <div className="thumbnail">
          <img src={product.product_image} alt={product.product_name} />
        </div>
        <div className="desc">
          <h1>
            {product.product_name}
          </h1>
          <div className="product-sub-info">
            <span className="badge-tag">Category: {product.category || "Stationery"}</span>
            <span className="badge-tag">Brand: {product.brand || "Generic"}</span>
            {product.userId && (
              <span className="badge-tag seller-tag">Seller ID: {product.userId}</span>
            )}
          </div>

          <div className="price-section">
            <h2>
              M.R.P: <strike>₹{mrp}</strike>
            </h2>
            <h2>
              <span>Offer Price: ₹{offerPrice}</span> <small>(15% OFF)</small>
            </h2>
          </div>

          <h4>{product.description}</h4>
          <h3>
            <span className="rating">In Stock: {product.stock || "Available"}</span>
          </h3>

          <div className="amazon-buttons-container">
            <button
              className="btn-amazon btn-add-cart"
              onClick={handleAddToBeg}
            >
              🛒 Add to Cart
            </button>
            <button
              className="btn-amazon btn-buy-now"
              onClick={handleBuyNow}
            >
              ⚡ Buy Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ViewProduct;
