import React , { useState, useEffect } from 'react'
import './Home.css'
function Home() {
    const images = [
    {
      src: "https://img.freepik.com/free-photo/flat-lay-school-essentials-with-medical-masks-colorful-pencils_23-2148587493.jpg?semt=ais_hybrid&w=740&q=80",
      text: "“Anyone who has never made a mistake has never tried anything new.”",
    },
    {
      src: "https://img.freepik.com/free-photo/top-view-colorful-pencils-with-paints-notepad-stickers-white-desk-art-drawing-color-paint_140725-65718.jpg?semt=ais_hybrid&w=740&q=80",
      text: "“The only person who is educated is the one who has learned how to learn …and change.”",
    },
    {
      src: "https://img.freepik.com/premium-photo/school-supplies-pink-background-with-copy-space-back-school-concept_106006-6303.jpg?semt=ais_hybrid&w=740&q=80",
      text: "“A man’s mind, stretched by new ideas, may never return to its original dimensions.”",
    },
  ];

  const [index, setIndex] = useState(0);
  const [quoteVisible, setQuoteVisible] = useState(true); // For stable fade

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteVisible(false); // Fade out first
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setQuoteVisible(true); // Fade in new
      }, 300); // Half transition time
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="card-component">
      <div className="split-container">
        <div className="image-side">
          <img
            src={images[index].src}
            alt={`slide-${index}`}
            className="full-image"
          />
        </div>
        <div className="text-side">
          <div className="card-carousel-caption">
            <h2>Welcome To Our Store</h2>
            <p className={quoteVisible ? "animate-in" : ""}>{images[index].text}</p>
            <div className="card-carousel-buttons">
              <button className="card-btn red">Technology</button>
              <button className="card-btn blue">Success</button>
              <button className="card-btn green">Competition</button>
            </div>
          </div>
        </div>
      </div>

      <div className="card-carousel-indicators">
        {images.map((_, i) => (
          <span
            key={i}
            className={`card-carousel-dot ${i === index ? "active-dot" : ""}`}
            onClick={() => {
              setQuoteVisible(false);
              setTimeout(() => {
                setIndex(i);
                setQuoteVisible(true);
              }, 300);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Home