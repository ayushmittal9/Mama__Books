

import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './AllProduct.css';

function AllProduct({
  showActions = false,
  title = "All Products",
  userId = null,
  filterIds = null,
}) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [force, setForce] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:1004/products")
      .then((response) => {
        let fetchedProducts = response.data;

        // sirf specific user ke products (agar userId diya ho)
        if (userId) {
          fetchedProducts = fetchedProducts.filter(
            (product) => product.userId === userId
          );
        }

        // Beg/cart filter: sirf filterIds wale products
        if (Array.isArray(filterIds)) {
          const ids = filterIds.map(id => id.toString());
          fetchedProducts = fetchedProducts.filter((product) =>
            ids.includes(product.id.toString())
          );
        }

        setProducts(fetchedProducts);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [force, userId, filterIds]);

  function remove_item(id, name) {
    axios
      .delete(`http://localhost:1004/products/${id}`)
      .then(() => {
        toast.success(`${name} has been deleted`);
        setForce((prev) => prev + 1);
      })
      .catch(() => {
        toast.error("Item not found");
      });
  }

  function viewProduct(product) {
    navigate(`../viewproduct/${product.id}`, { state: product });
  }

  function edit_item(id) {
    navigate(`/updateproduct/${id}`);
  }

  return (
    <div className="Dashboard">
      <div className="dashboard-content">
        <h3>{title}</h3>

        {userId && (
          <p
            style={{
              fontSize: '0.9em',
              color: '#666',
              marginBottom: '1rem',
            }}
          >
            Showing products added by you.
          </p>
        )}

        <div className="products-grid">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="product-card">
                <img
                  src={product.product_image}
                  alt={product.product_name}
                  className="product-image"
                />
                <h4
                  onClick={() => viewProduct(product)}
                  style={{ cursor: 'pointer', color: '#4CAF50' }}
                >
                  {product.product_name}
                </h4>
                <p>{product.category}</p>
                <p>{product.brand}</p>
                <p>Price: ₹{product.price}</p>
                <p>Stock: {product.stock}</p>
                <p>{product.description}</p>

                {showActions && (
                  <div className="buttons">
                    <button onClick={() => edit_item(product.id)}>Edit</button>
                    <button
                      onClick={() =>
                        remove_item(product.id, product.product_name)
                      }
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p
              style={{
                textAlign: 'center',
                color: '#666',
                fontSize: '1rem',
              }}
            >
              No products available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllProduct;

