import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar1/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Orders.css';

function Orders() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    const loggedUserString = localStorage.getItem("loggedInUser");

    let currentUser = null;
    if (loggedUserString) {
      try {
        currentUser = JSON.parse(loggedUserString);
      } catch (err) {
        console.error("Error parsing loggedInUser in Orders.jsx:", err);
      }
    }

    const userId = storedUserId || (currentUser ? currentUser.id || currentUser.userId : null);

    if (!userId) {
      setUser(null);
      setOrders([]);
      return;
    }

    setUser(currentUser);
    const ordersKey = `orders_${userId}`;
    const storedOrders = JSON.parse(localStorage.getItem(ordersKey)) || [];
    setOrders(storedOrders);
  }, []);

  if (!user && !localStorage.getItem("userId")) {
    return (
      <>
        <Navbar />
        <div className="orders-container empty-orders">
          <h2>Please Login to View Your Orders</h2>
          <button className="btn-shop" onClick={() => navigate('/login')}>
            Go to Login
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="orders-container">
        <h1 className="orders-title">Your Orders</h1>

        {orders.length === 0 ? (
          <div className="no-orders">
            <h3>You haven't placed any orders yet.</h3>
            <p>Browse our collection and order items today!</p>
            <button className="btn-shop" onClick={() => navigate('/')}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map((order) => (
              <div key={order.id} className="order-card">
                <div className="order-header">
                  <div className="order-header-info">
                    <div>
                      <span className="header-label">ORDER PLACED</span>
                      <span className="header-value">{order.date}</span>
                    </div>
                    <div>
                      <span className="header-label">TOTAL</span>
                      <span className="header-value">₹{order.totalAmount}</span>
                    </div>
                    <div>
                      <span className="header-label">SHIP TO</span>
                      <span className="header-value">{order.userName || user?.username || "Customer"}</span>
                    </div>
                  </div>
                  <div className="order-header-id">
                    <span className="header-label">ORDER # {order.id}</span>
                  </div>
                </div>

                <div className="order-body">
                  <div className="order-status">
                    <h3>Status: <span className="status-badge">{order.status || "Placed"}</span></h3>
                  </div>

                  <div className="order-items">
                    {order.items && order.items.map((item, index) => (
                      <div key={index} className="order-item-row">
                        <img
                          src={item.product_image}
                          alt={item.product_name}
                          className="order-item-img"
                        />
                        <div className="order-item-details">
                          <h4
                            className="item-name"
                            onClick={() => navigate(`/viewproduct/${item.id}`, { state: item })}
                          >
                            {item.product_name}
                          </h4>
                          <p className="item-meta">Category: {item.category || "General"}</p>
                          <p className="item-meta">Brand: {item.brand || "N/A"}</p>
                          <p className="item-quantity">Qty: {item.quantity || 1}</p>
                          <p className="item-price">₹{item.price}</p>
                        </div>
                        <div className="order-item-actions">
                          <button
                            className="btn-view-item"
                            onClick={() => navigate(`/viewproduct/${item.id}`, { state: item })}
                          >
                            View Product
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Orders;
