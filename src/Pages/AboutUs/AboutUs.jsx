import React from "react";
import Navbar from "../../Components/Navbar1/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./AboutUs.css";

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="about-page">
        <div className="about-hero">
          <span className="about-small-title">ABOUT MAMA BOOK DEPO</span>
          <h1>Your Trusted Companion in Education & Literature</h1>
          <p className="about-subtitle">
            Providing students, educators, and avid readers across India with authentic books, academic resources, and premium stationery since 2000.
          </p>
        </div>

        <div className="about-container">
          <section className="about-section grid-section">
            <div className="about-card">
              <div className="card-icon">📚</div>
              <h3>Wide Selection</h3>
              <p>
                From academic textbooks and competitive exam guides to bestseller novels and quality stationery, Mama Book Depo offers a vast collection for every learner.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">🏷️</div>
              <h3>Affordable Pricing</h3>
              <p>
                We believe education and literature should be accessible to all. Enjoy competitive pricing, exclusive student discounts, and special offers.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">🚚</div>
              <h3>Fast & Reliable Delivery</h3>
              <p>
                Based in Agra, Uttar Pradesh, we ensure fast packaging and nationwide shipping so your books reach your doorstep without delay.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">🤝</div>
              <h3>Customer First</h3>
              <p>
                Our dedicated customer support team is always ready to assist you with order inquiries, book availability, and personalized recommendations.
              </p>
            </div>
          </section>

          <section className="about-section narrative-section">
            <h2>Our Story</h2>
            <p>
              Founded in Agra, Uttar Pradesh, <strong>Mama Book Depo</strong> started with a clear vision: to empower minds by making books and quality stationery easily accessible to everyone. Over the years, we have grown into a preferred hub for students preparing for competitive exams, school and college curricula, as well as general book lovers.
            </p>
            <p>
              Whether you are looking for gel pens, notebooks, engineering textbooks, competitive examination materials, or inspirational reads, Mama Book Depo is dedicated to supplying genuine products at affordable rates.
            </p>
          </section>

          <section className="about-section contact-info-section">
            <h2>Visit or Contact Us</h2>
            <div className="about-contact-box">
              <p><strong>Mama Book Depo</strong></p>
              <p><strong>Address:</strong> Agra, Uttar Pradesh, India</p>
              <p><strong>Email:</strong> support@mamabookdepo.com</p>
              <p><strong>Phone:</strong> +91 98765 43210</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
