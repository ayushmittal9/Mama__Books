import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Addproduct.css';

function AddProduct() {
    // Get logged-in user's ID from localStorage
  const userId = localStorage.getItem('userId'); // e.g. "878d"
  const navigate = useNavigate();
  const [product, setProduct] = React.useState({
    product_name: "",
    category: "",
    brand: "",
    price: "",
    product_image: "",
    description: "",
    stock: "",
  });

  const productNames = [
    "Ball Pen",
    "Gel Pen",
    "Notebook",
    "Sketchbook",
    "Pencil Box",
    "Eraser",
    "Sharpener",
    "Highlighter",
    "Marker",
    "Stapler",
  ];

  const categories = [
    "Writing Instruments",
    "Notebooks & Paper",
    "Art Supplies",
    "Office Essentials",
    "School Stationery",
    "Files & Folders",
    "Adhesives & Tape",
    "Craft Materials",
    "Organizers",
    "Miscellaneous",
  ];

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

   async function handleSubmit(event) {
    event.preventDefault();

    if (!userId) {
      alert("User not logged in!");
      return;
    }

    // create a random product id
    const productId = Math.random().toString(36).substring(2, 6);

    const newProduct = {
      id: productId,
      userId: userId, // associate with logged-in user
      ...product,
    };

    try {
      await axios.post("http://localhost:1004/products", newProduct);
      alert("Product added successfully!");
      navigate('/');
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }

  return (
    <div className="add-product">
      <div>Add Stationery Product</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="product-name">Product Name</label>
        <select
          id="product-name"
          name="product_name"
          value={product.product_name}
          onChange={handleChange}
          required
        >
          <option value="">Select a Product Name</option>
          {productNames.map((name, index) => (
            <option key={index} value={name}>{name}</option>
          ))}
        </select>

        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={product.category}
          onChange={handleChange}
          required
        >
          <option value="">Select a Category</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>

        <label htmlFor="brand">Brand</label>
        <input
          type="text"
          id="brand"
          name="brand"
          placeholder="Enter brand name (e.g., Classmate, Cello)"
          value={product.brand}
          onChange={handleChange}
          required
        />

        <label htmlFor="price">Price (₹)</label>
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Enter price"
          value={product.price}
          onChange={handleChange}
          required
        />

        <label htmlFor="product-image">Product Image URL</label>
        <input
          type="text"
          id="product-image"
          name="product_image"
          placeholder="Enter image URL"
          value={product.product_image}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter product description"
          value={product.description}
          onChange={handleChange}
          rows="3"
          required
        ></textarea>

        <label htmlFor="stock">Stock Quantity</label>
        <input
          type="number"
          id="stock"
          name="stock"
          placeholder="Enter stock quantity"
          value={product.stock}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Stationery Item</button>
      </form>
    </div>
  );
}

export default AddProduct;