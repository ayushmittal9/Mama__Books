import React from "react";
import Navbar from "../../Components/Navbar1/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./TermsOfUse.css";

function TermsOfUse() {
  return (
    <>
      <Navbar />
      <div className="terms-page">
        <div className="terms-container">
          <h1>Terms of Use</h1>
          <p className="last-updated">
            <strong>Last Updated:</strong> October 2026
          </p>

          <p>
            Welcome to <strong>Mama Book Depo</strong>! These Terms of Use govern
            your use of our website, services, and purchase of books and
            stationery products from Mama Book Depo, located in Agra, Uttar
            Pradesh, India.
          </p>

          <p>
            By accessing or using our website, you agree to be bound by these
            Terms of Use. If you do not agree to these terms, please do not use
            our website.
          </p>

          <h2>1. Use of Website and Services</h2>
          <p>
            You agree to use Mama Book Depo only for lawful purposes and in a
            manner that does not infringe upon the rights of others or restrict
            their use and enjoyment of the platform.
          </p>
          <ul>
            <li>You must be at least 18 years old or under adult supervision to place orders.</li>
            <li>You agree to provide accurate and complete information when registering or purchasing.</li>
            <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
          </ul>

          <h2>2. Product Listings and Pricing</h2>
          <p>
            We strive to display accurate descriptions, book details, availability, and pricing.
            However, minor errors or discrepancies may occasionally occur.
          </p>
          <ul>
            <li>Prices are listed in Indian Rupees (INR) and are subject to change without prior notice.</li>
            <li>In case of a pricing error on an ordered item, Mama Book Depo reserves the right to cancel or revise the order.</li>
            <li>Product images are representative and actual product covers or editions may vary slightly.</li>
          </ul>

          <h2>3. Orders, Shipping & Delivery</h2>
          <p>
            When you place an order with Mama Book Depo, you agree to purchase the items in accordance with these Terms:
          </p>
          <ul>
            <li>Order acceptance is subject to product availability and payment verification.</li>
            <li>Delivery times provided are estimates. We make every effort to deliver items promptly across India.</li>
            <li>Shipping charges, if applicable, will be displayed during checkout.</li>
          </ul>

          <h2>4. Cancellations and Returns</h2>
          <p>
            Customers may request cancellations or returns according to Mama Book Depo's return policies:
          </p>
          <ul>
            <li>Orders can be cancelled before dispatch.</li>
            <li>Damaged, defective, or incorrect items received must be reported within 7 days of delivery.</li>
          </ul>

          <h2>5. Intellectual Property Rights</h2>
          <p>
            All content on Mama Book Depo, including text, logos, graphics, icons, and software code, is the property of Mama Book Depo or its content suppliers and is protected by intellectual property laws.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            Mama Book Depo shall not be liable for any indirect, incidental, or consequential damages resulting from your use of or inability to use our services or products.
          </p>

          <h2>7. Governing Law and Jurisdiction</h2>
          <p>
            These Terms of Use are governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in Agra, Uttar Pradesh, India.
          </p>

          <h2>8. Contact Information</h2>
          <p>
            If you have any questions or concerns regarding these Terms of Use, please contact us:
          </p>
          <div className="terms-contact-box">
            <p><strong>Mama Book Depo</strong></p>
            <p><strong>Address:</strong> Agra, Uttar Pradesh, India</p>
            <p><strong>Email:</strong> support@mamabookdepo.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TermsOfUse;
