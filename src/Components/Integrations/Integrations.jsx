import React from "react";
import "./Integrations.css";

function Integrations() {
  const integrations = [
    {
      name: "Amazon Kindle",
      category: "Publishing",
      description: "Sync your catalog and publish ebooks directly to Kindle store.",
      icon: "📚",
    },
    {
      name: "Goodreads",
      category: "Community",
      description: "Gather book reviews, reader ratings, and community insights.",
      icon: "⭐",
    },
    {
      name: "Google Books",
      category: "Search & Preview",
      description: "Expand discovery through Google Books preview & indexing.",
      icon: "🔍",
    },
    {
      name: "Shopify Store",
      category: "E-Commerce",
      description: "Connect your storefront for automated inventory and order sync.",
      icon: "🛒",
    },
    {
      name: "Stripe",
      category: "Payments",
      description: "Process global credit card and digital wallet payments safely.",
      icon: "💳",
    },
    {
      name: "Razorpay",
      category: "Payments",
      description: "Seamless UPI, Netbanking, and card payments for Indian markets.",
      icon: "⚡",
    },
    {
      name: "FedEx Express",
      category: "Shipping",
      description: "Automate shipping labels, dispatch, and real-time package tracking.",
      icon: "🚚",
    },
    {
      name: "DHL Logistics",
      category: "Fulfillment",
      description: "Global warehousing and door-to-door delivery for bulk orders.",
      icon: "📦",
    },
  ];

  return (
    <section className="integrations-section">
      <div className="integrations-container">
        <div className="integrations-header">
          <span className="integrations-badge">✶ Integration</span>
          <h2 className="integrations-title">One tool for all book platforms</h2>
          <p className="integrations-subtitle">
            Save time and automate publishing, payments, storefronts, and logistics all at once.
          </p>
        </div>

        <div className="integrations-grid">
          {integrations.map((item, index) => (
            <div className="integration-card" key={index}>
              <div className="card-top">
                <div className="integration-icon">{item.icon}</div>
                <span className="integration-cat">{item.category}</span>
              </div>
              <h3 className="integration-name">{item.name}</h3>
              <p className="integration-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Integrations;
