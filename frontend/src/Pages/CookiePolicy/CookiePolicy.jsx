import React from "react";
import Navbar from "../../Components/Navbar1/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./CookiePolicy.css";

function CookiePolicy() {
  return (
    <>
      <Navbar />
      <div className="cookie-page">
        <div className="cookie-container">
          <h1>Cookie Policy</h1>
          <p className="last-updated">
            <strong>Last Updated:</strong> October 2026
          </p>

          <p>
            This Cookie Policy explains how <strong>Mama Book Depo</strong> ("we",
            "us", or "our") uses cookies and similar tracking technologies when you
            visit or interact with our website.
          </p>

          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your computer, smartphone, or
            other device by your web browser when you visit a website. They allow
            the website to recognize your device, remember preferences, and optimize
            your user experience.
          </p>

          <h2>2. How Mama Book Depo Uses Cookies</h2>
          <p>We use cookies for various essential and functional purposes, including:</p>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for the fundamental operation of our website, such as user login session management and cart/beg persistence.</li>
            <li><strong>Functional Cookies:</strong> Help remember your saved preferences, such as selected themes or location settings.</li>
            <li><strong>Performance & Analytics Cookies:</strong> Help us analyze web traffic and understand how visitors interact with our pages to continuously improve performance.</li>
          </ul>

          <h2>3. Types of Cookies We Use</h2>
          <h3>Session Cookies</h3>
          <p>
            Temporary cookies that remain on your device until you leave our website or close your browser session.
          </p>
          <h3>Persistent Cookies</h3>
          <p>
            Cookies stored on your device for a specified duration or until manually deleted, helping recognize returning visitors.
          </p>

          <h2>4. Managing and Controlling Cookies</h2>
          <p>
            You have the right to accept or decline cookies. Most web browsers automatically accept cookies, but you can modify browser settings to decline or clear cookies if preferred.
          </p>
          <p>
            Please note that restricting or disabling cookies may impact certain features and functionalities of the Mama Book Depo website.
          </p>

          <h2>5. Updates to This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in legal, operational, or technical requirements. Any updates will be published on this page.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have any questions regarding our use of cookies, please contact us at:
          </p>
          <div className="cookie-contact-box">
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

export default CookiePolicy;
