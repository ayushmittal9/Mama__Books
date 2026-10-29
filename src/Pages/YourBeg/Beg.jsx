import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../Components/Navbar1/Navbar';
import Footer from '../../Components/Footer/Footer';
import defaultProductData from '../../Database/Product.json';
import './Beg.css';

function Beg() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUserId = () => {
    const storedUserId = localStorage.getItem("userId");
    const loggedUserString = localStorage.getItem("loggedInUser");

    let currentUser = null;
    if (loggedUserString) {
      try {
        currentUser = JSON.parse(loggedUserString);
      } catch (err) {
        console.error("Error parsing loggedInUser in Beg.jsx:", err);
      }
    }

    const userId = storedUserId || (currentUser ? currentUser.id || currentUser.userId : null);
    return { userId, currentUser };
  };

  useEffect(() => {
    const { userId, currentUser } = getUserId();
    setUser(currentUser);

    if (!userId) {
      setLoading(false);
      return;
    }

    const begKey = `beg_${userId}`;
    const begIds = JSON.parse(localStorage.getItem(begKey)) || [];

    // Load products from default json + localStorage + backend API
    let localCustomProducts = [];
    try {
      localCustomProducts = JSON.parse(localStorage.getItem('custom_products')) || [];
    } catch (err) {
      console.error("Error reading custom_products:", err);
    }

    const initialProducts = defaultProductData.products || [];

    const processAndMatch = (apiProducts = []) => {
      const combinedMap = new Map();
      [...initialProducts, ...localCustomProducts, ...apiProducts].forEach((item) => {
        if (item && item.id) {
          combinedMap.set(item.id.toString(), item);
        }
      });

      const matched = [];
      const initialQtys = {};

      begIds.forEach((id) => {
        const product = combinedMap.get(id.toString());
        if (product) {
          matched.push(product);
          initialQtys[product.id.toString()] = 1;
        }
      });

      setCartItems(matched);
      setQuantities(initialQtys);
      setLoading(false);
    };

    axios
      .get("http://localhost:1004/products")
      .then((res) => processAndMatch(res.data))
      .catch(() => processAndMatch([]));
  }, []);

  const updateQuantity = (id, delta) => {
    const strId = id.toString();
    setQuantities((prev) => {
      const current = prev[strId] || 1;
      const updated = Math.max(1, current + delta);
      return { ...prev, [strId]: updated };
    });
  };

  const removeItem = (id) => {
    const { userId } = getUserId();
    if (!userId) return;

    const strId = id.toString();
    const begKey = `beg_${userId}`;
    let begIds = JSON.parse(localStorage.getItem(begKey)) || [];
    begIds = begIds.filter((item) => item.toString() !== strId);
    localStorage.setItem(begKey, JSON.stringify(begIds));

    setCartItems((prev) => prev.filter((item) => item.id.toString() !== strId));
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => {
      const qty = quantities[item.id.toString()] || 1;
      const mrp = Number(item.price) || 0;
      const offerPrice = Math.round((mrp - mrp * 0.15) * 100) / 100;
      return acc + offerPrice * qty;
    }, 0);
  };

  const handleCheckout = () => {
    const { userId, currentUser } = getUserId();

    if (!userId) {
      alert("Please login first to complete your purchase.");
      navigate('/login');
      return;
    }

    if (cartItems.length === 0) {
      alert("Your Beg is empty!");
      return;
    }

    const orderItems = cartItems.map((item) => {
      const qty = quantities[item.id.toString()] || 1;
      const mrp = Number(item.price) || 0;
      const offerPrice = Math.round((mrp - mrp * 0.15) * 100) / 100;
      return {
        id: item.id,
        product_name: item.product_name,
        category: item.category,
        brand: item.brand,
        price: offerPrice,
        product_image: item.product_image,
        quantity: qty,
      };
    });

    const totalAmount = Math.round(calculateTotal() * 100) / 100;

    const newOrder = {
      id: "ORD-" + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      userName: currentUser?.username || currentUser?.email || "Customer",
      items: orderItems,
      totalAmount: totalAmount,
      status: "Order Placed - Fast Delivery"
    };

    const ordersKey = `orders_${userId}`;
    const storedOrders = JSON.parse(localStorage.getItem(ordersKey)) || [];
    storedOrders.unshift(newOrder);
    localStorage.setItem(ordersKey, JSON.stringify(storedOrders));

    // Clear cart
    const begKey = `beg_${userId}`;
    localStorage.removeItem(begKey);
    setCartItems([]);

    alert("Order placed successfully! Thank you for shopping with us.");
    navigate('/orders');
  };

  if (!user && !localStorage.getItem("userId")) {
    return (
      <>
        <Navbar />
        <div className="beg-container empty-beg">
          <h2>Your Beg (Shopping Cart)</h2>
          <p>Please login to view and manage items in your Beg.</p>
          <button className="btn-beg-shop" onClick={() => navigate('/login')}>
            Login Now
          </button>
        </div>
        <Footer />
      </>
    );
  }

  const grandTotal = Math.round(calculateTotal() * 100) / 100;

  return (
    <>
      <Navbar />
      <div className="beg-container">
        <h1 className="beg-title">Your Beg (Shopping Cart)</h1>

        {loading ? (
          <p style={{ textAlign: 'center', margin: '40px 0' }}>Loading cart items...</p>
        ) : cartItems.length === 0 ? (
          <div className="empty-beg">
            <h3>Your Shopping Beg is empty</h3>
            <p>Explore our wide collection of stationery products and add them to your beg!</p>
            <button className="btn-beg-shop" onClick={() => navigate('/')}>
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="beg-content">
            <div className="beg-items-list">
              {cartItems.map((item) => {
                const qty = quantities[item.id.toString()] || 1;
                const mrp = Number(item.price) || 0;
                const offerPrice = Math.round((mrp - mrp * 0.15) * 100) / 100;

                return (
                  <div key={item.id} className="beg-item-card">
                    <img
                      src={item.product_image}
                      alt={item.product_name}
                      className="beg-item-img"
                    />
                    <div className="beg-item-details">
                      <h3
                        className="beg-item-name"
                        onClick={() => navigate(`/viewproduct/${item.id}`, { state: item })}
                      >
                        {item.product_name}
                      </h3>
                      <p className="beg-item-meta">
                        Category: {item.category || "General"} | Brand: {item.brand || "Generic"}
                      </p>
                      {item.userId && (
                        <p className="beg-item-seller">Seller ID: {item.userId}</p>
                      )}
                      <p className="beg-item-stock">In Stock</p>

                      <div className="beg-qty-controls">
                        <label>Qty:</label>
                        <button
                          className="btn-qty"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          -
                        </button>
                        <span className="qty-value">{qty}</span>
                        <button
                          className="btn-qty"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          +
                        </button>
                        <span
                          className="btn-delete-link"
                          onClick={() => removeItem(item.id)}
                        >
                          Delete
                        </span>
                      </div>
                    </div>

                    <div className="beg-item-price-col">
                      <div className="item-price-main">₹{offerPrice * qty}</div>
                      {mrp > offerPrice && (
                        <div className="item-mrp-saving">
                          M.R.P: <strike>₹{mrp * qty}</strike>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="beg-summary-card">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Items ({cartItems.reduce((acc, item) => acc + (quantities[item.id.toString()] || 1), 0)}):</span>
                <span>₹{grandTotal}</span>
              </div>
              <div className="summary-row">
                <span>Delivery Charge:</span>
                <span style={{ color: '#007600', fontWeight: 600 }}>FREE</span>
              </div>
              <hr />
              <div className="summary-row total-row">
                <span>Total Amount:</span>
                <span>₹{grandTotal}</span>
              </div>

              <button className="btn-proceed-checkout" onClick={handleCheckout}>
                Proceed to Buy
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Beg;
