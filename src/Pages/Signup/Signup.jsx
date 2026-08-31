import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (
      !formData.email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Valid email is required";
    }

    if (
      !formData.phone ||
      !/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))
    ) {
      newErrors.phone = "Valid 10-digit phone is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.postalCode.trim()) {
      newErrors.postalCode = "Postal code is required";
    }

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:1002/formData",
        formData
      );

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(res.data)
      );

      toast.success("Signup successful!");

      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error("Error while signing up:", error);
      toast.error("Something went wrong during signup!");
    }
  };

  return (
    <div className="signup-container">

      <div className="signup-card">

        {/* LEFT SIDE */}
        <div className="signup-left">

          <h2>Create Your Account</h2>

          <p className="subtitle">
            Join us to shop the best stationery!
          </p>

          {/* First Name */}
          <div className="form-row">

            <div className="form-group">
              <label htmlFor="firstName">
                First Name
              </label>

              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
              />

              {errors.firstName && (
                <span className="error">
                  {errors.firstName}
                </span>
              )}
            </div>

            {/* Last Name */}
            <div className="form-group">
              <label htmlFor="lastName">
                Last Name
              </label>

              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
              />

              {errors.lastName && (
                <span className="error">
                  {errors.lastName}
                </span>
              )}
            </div>

          </div>

          {/* Username */}
          <div className="form-group">
            <label htmlFor="username">
              Username
            </label>

            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Choose a username"
            />

            {errors.username && (
              <span className="error">
                {errors.username}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
            />

            {errors.email && (
              <span className="error">
                {errors.email}
              </span>
            )}
          </div>

          {/* Phone */}
          <div className="form-group">
            <label htmlFor="phone">
              Phone Number
            </label>

            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit phone number"
            />

            {errors.phone && (
              <span className="error">
                {errors.phone}
              </span>
            )}
          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="signup-right">

          {/* Address */}
          <div className="form-group">
            <label htmlFor="address">
              Address
            </label>

            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Street address"
            />

            {errors.address && (
              <span className="error">
                {errors.address}
              </span>
            )}
          </div>


          {/* City + Postal Code */}
          <div className="form-row">

            <div className="form-group">
              <label htmlFor="city">
                City
              </label>

              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
              />

              {errors.city && (
                <span className="error">
                  {errors.city}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="postalCode">
                Postal Code
              </label>

              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="Postal code"
              />

              {errors.postalCode && (
                <span className="error">
                  {errors.postalCode}
                </span>
              )}
            </div>

          </div>


          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Minimum 6 characters"
            />

            {errors.password && (
              <span className="error">
                {errors.password}
              </span>
            )}
          </div>


          {/* Confirm Password */}
          <div className="form-group">
            <label htmlFor="confirmPassword">
              Confirm Password
            </label>

            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
            />

            {errors.confirmPassword && (
              <span className="error">
                {errors.confirmPassword}
              </span>
            )}
          </div>


          {/* Button */}
          <button
            type="button"
            className="submit-btn"
            onClick={handleSubmit}
          >
            Create Account
          </button>

          <p className="login-text">
            Already have an account?
            <span onClick={() => navigate("/login")}>
              Login
            </span>
          </p>

        </div>

      </div>

      <ToastContainer position="top-right" />

    </div>
  );
}

export default Signup;
