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
    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:1003/contactData", {
        name: contactData.name,
        email: contactData.email,
        subject: contactData.subject,
        message: contactData.message,
      })
      .then((response) => {
        console.log("Success:", response);
        alert("Your Contact Post successful!");
        setContactData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Get in touch with us for any inquiries.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={contactData.name}
            required
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={contactData.email}
            required
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={contactData.subject}
            required
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={contactData.message}
            required
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;