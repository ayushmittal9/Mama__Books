import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

function Contact() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:1003/contactData",
        contactData
      );

      console.log("Success:", response.data);

      alert("Your message has been sent successfully!");

      setContactData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("There was an error!", error);

      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="contact-page">

      <div className="contact-card">

        {/* =====================================
            LEFT INFORMATION SECTION
        ====================================== */}

        <section className="contact-info">

          <div className="contact-info-content">

            <span className="contact-small-title">
              GET IN TOUCH
            </span>

            <h1>
              We'd love to hear
              <br />
              <span>from you.</span>
            </h1>

            <p className="contact-description">
              Have a question, suggestion, or need help with
              your order? Send us a message and our team will
              get back to you as soon as possible.
            </p>

          </div>


          {/* Contact Details */}

          <div className="contact-details">

            <div className="contact-detail">

              <div className="contact-icon">
                <span>✉</span>
              </div>

              <div className="contact-detail-content">
                <h4>Email</h4>
                <p>support@example.com</p>
              </div>

            </div>


            <div className="contact-detail">

              <div className="contact-icon">
                <span>☎</span>
              </div>

              <div className="contact-detail-content">
                <h4>Phone</h4>
                <p>+91 98765 43210</p>
              </div>

            </div>


            <div className="contact-detail">

              <div className="contact-icon">
                <span>📍</span>
              </div>

              <div className="contact-detail-content">
                <h4>Address</h4>
                <p>Agra, Uttar Pradesh, India</p>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================
            RIGHT FORM SECTION
        ====================================== */}

        <section className="contact-form-section">

          <div className="form-header">

            <h2>Send us a message</h2>

            <p className="form-subtitle">
              Fill in the details below and we'll get back to
              you as soon as possible.
            </p>

          </div>


          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* Name + Email */}

            <div className="input-row">

              <div className="form-group">

                <label htmlFor="name">
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={contactData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="email">
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />

              </div>

            </div>


            {/* Subject */}

            <div className="form-group">

              <label htmlFor="subject">
                Subject
              </label>

              <input
                type="text"
                id="subject"
                name="subject"
                value={contactData.subject}
                onChange={handleChange}
                placeholder="How can we help?"
                required
              />

            </div>


            {/* Message */}

            <div className="form-group message-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={contactData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="5"
                required
              />

            </div>


            {/* Submit Button */}

            <button
              type="submit"
              className="contact-submit"
            >
              <span className="button-text">
                Send Message
              </span>

              <span className="button-arrow">
                →
              </span>
            </button>

          </form>

        </section>

      </div>

    </main>
  );
}

export default Contact;