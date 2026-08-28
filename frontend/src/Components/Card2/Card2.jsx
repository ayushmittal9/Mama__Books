import React from 'react';
import './Card2.css'; // Import your CSS

function Card2() {
  return (
    <div className="cards-container">
      <div className="hover-3d card-item">
        <figure className="w-60 rounded-2xl">
          <img src="https://img.daisyui.com/images/stock/card-1.webp?x" alt="Tailwind CSS 3D card" />
        </figure>
        {/* 8 empty divs for hover zones */}
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>

      <div className="hover-3d card-item">
        <figure className="w-60 rounded-2xl">
          <img src="https://img.daisyui.com/images/stock/card-2.webp?x" alt="Tailwind CSS 3D hover" />
        </figure>
        {/* 8 empty divs for hover zones */}
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>

      <div className="hover-3d card-item">
        <figure className="w-60 rounded-2xl">
          <img src="https://img.daisyui.com/images/stock/card-3.webp?x" alt="Tailwind CSS 3D hover" />
        </figure>
        {/* 8 empty divs for hover zones */}
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>
  );
}

export default Card2;