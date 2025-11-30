

// import React, { useState } from "react";
// import "./CardSection.css";

// function CardSection() {
//   const cards = [
//     {
//       id: 1,
//       images: [
//         "https://img.daisyui.com/images/stock/daisyui-hat-1.webp",
//         "https://img.daisyui.com/images/stock/daisyui-hat-2.webp",
//         "https://img.daisyui.com/images/stock/daisyui-hat-3.webp",
//         "https://img.daisyui.com/images/stock/daisyui-hat-4.webp",
//       ],
//       title: "daisyUI Hat",
//       price: "$25",
//     },
//     {
//       id: 2,
//       images: [
//         "https://img.daisyui.com/images/stock/daisyui-hat-1.webp",
//         "https://img.daisyui.com/images/stock/daisyui-hat-2.webp",
//         "https://img.daisyui.com/images/stock/daisyui-hat-3.webp",
//         "https://img.daisyui.com/images/stock/daisyui-hat-4.webp",
//       ],
//       title: "daisyUI Hat",
//       price: "$25",
//     },
//     {
//       id: 3,
//       images: [
//         "https://img.daisyui.com/images/stock/daisyui-hat-1.webp",
//         "https://img.daisyui.com/images/stock/daisyui-hat-2.webp",
//         "https://img.daisyui.com/images/stock/daisyui-hat-3.webp",
//         "https://img.daisyui.com/images/stock/daisyui-hat-4.webp",
//       ],
//       title: "daisyUI Hat",
//       price: "$25",
//     },
//     {
//       id: 4,
//       images: [
//         "https://img.daisyui.com/images/stock/daisyui-hat-1.webp",
//         "https://img.daisyui.com/images/stock/daisyui-hat-2.webp",
//         "https://img.daisyui.com/images/stock/daisyui-hat-3.webp",
//         "https://img.daisyui.com/images/stock/daisyui-hat-4.webp",
//       ],
//       title: "daisyUI Hat",
//       price: "$25",
//     },
//     {
//       id: 5,
//       images: [
//         "https://img.daisyui.com/images/stock/daisyui-hat-1.webp",
//         "https://img.daisyui.com/images/stock/daisyui-hat-2.webp",
//         "https://img.daisyui.com/images/stock/daisyui-hat-3.webp",
//         "https://img.daisyui.com/images/stock/daisyui-hat-4.webp",
//       ],
//       title: "daisyUI Hat",
//       price: "$25",
//     },
//     {
//       id: 6,
//       images: [
//         "https://img.daisyui.com/images/stock/daisyui-hat-1.webp",
//         "https://img.daisyui.com/images/stock/daisyui-hat-2.webp",
//         "https://img.daisyui.com/images/stock/daisyui-hat-3.webp",
//         "https://img.daisyui.com/images/stock/daisyui-hat-4.webp",
//       ],
//       title: "daisyUI Hat",
//       price: "$25",
//     },
//     {
//       id: 7,
//       images: [
//         "https://img.daisyui.com/images/stock/daisyui-hat-1.webp",
//         "https://img.daisyui.com/images/stock/daisyui-hat-2.webp",
//         "https://img.daisyui.com/images/stock/daisyui-hat-3.webp",
//         "https://img.daisyui.com/images/stock/daisyui-hat-4.webp",
//       ],
//       title: "daisyUI Hat",
//       price: "$25",
//     },
//     {
//       id: 8,
//       images: [
//         "https://img.daisyui.com/images/stock/daisyui-hat-1.webp",
//         "https://img.daisyui.com/images/stock/daisyui-hat-2.webp",
//         "https://img.daisyui.com/images/stock/daisyui-hat-3.webp",
//         "https://img.daisyui.com/images/stock/daisyui-hat-4.webp",
//       ],
//       title: "daisyUI Hat",
//       price: "$25",
//     },
//   ];

//   const [start, setStart] = useState(0);

//   const next = () => {
//     if (start < cards.length - 5) setStart(start + 1);
//   };

//   const prev = () => {
//     if (start > 0) setStart(start - 1);
//   };

//   return (
//     <div className="CardSection">
//       <div className="para">
//         <p>Check out our latest products!</p>
//       </div>

//       <div className="slider-wrapper">
//         <button className="arrow-btn" onClick={prev} disabled={start === 0}>
//           &lt;
//         </button>

//         <div className="slider">
//           {cards.slice(start, start + 5).map((item) => (
//             <div className="slide-card" key={item.id}>
//               <div className="card card-sm bg-base-200 shadow max-w-60">
//                 <figure className="hover-gallery">
//                   {item.images.map((src, index) => (
//                     <img key={index} src={src} alt="product" />
//                   ))}
//                 </figure>

//                 <div className="card-body">
//                   <h2 className="card-title flex justify-between">
//                     {item.title}
//                     <span className="font-normal">{item.price}</span>
//                   </h2>
//                   <p>High Quality classic cap hat with stitch logo</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <button
//           className="arrow-btn"
//           onClick={next}
//           disabled={start >= cards.length - 5}
//         >
//           &gt;
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CardSection;

import React, { useState } from "react";
import "./CardSection.css";

function CardSection() {
  const cards = [
    {
      id: 1,
      images: [
        "https://img.daisyui.com/images/stock/daisyui-hat-1.webp",
        "https://img.daisyui.com/images/stock/daisyui-hat-2.webp",
        "https://img.daisyui.com/images/stock/daisyui-hat-3.webp",
        "https://img.daisyui.com/images/stock/daisyui-hat-4.webp",
      ],
      title: "daisyUI Hat",
      price: "$25",
    },
    {
      id: 2,
      images: [
        "https://img.daisyui.com/images/stock/daisyui-hat-1.webp",
        "https://img.daisyui.com/images/stock/daisyui-hat-2.webp",
        "https://img.daisyui.com/images/stock/daisyui-hat-3.webp",
        "https://img.daisyui.com/images/stock/daisyui-hat-4.webp",
      ],
      title: "daisyUI Hat",
      price: "$25",
    },
    {
      id: 3,
      images: [
        "https://img.daisyui.com/images/stock/daisyui-hat-1.webp",
        "https://img.daisyui.com/images/stock/daisyui-hat-2.webp",
        "https://img.daisyui.com/images/stock/daisyui-hat-3.webp",
        "https://img.daisyui.com/images/stock/daisyui-hat-4.webp",
      ],
      title: "daisyUI Hat",
      price: "$25",
    },
    {
      id: 4,
      images: [
        "https://img.daisyui.com/images/stock/daisyui-hat-1.webp",
        "https://img.daisyui.com/images/stock/daisyui-hat-2.webp",
        "https://img.daisyui.com/images/stock/daisyui-hat-3.webp",
        "https://img.daisyui.com/images/stock/daisyui-hat-4.webp",
      ],
      title: "daisyUI Hat",
      price: "$25",
    },
    {
      id: 5,
      images: [
        "https://img.daisyui.com/images/stock/daisyui-hat-1.webp",
        "https://img.daisyui.com/images/stock/daisyui-hat-2.webp",
        "https://img.daisyui.com/images/stock/daisyui-hat-3.webp",
        "https://img.daisyui.com/images/stock/daisyui-hat-4.webp",
      ],
      title: "daisyUI Hat",
      price: "$25",
    },
    {
      id: 6,
      images: [
        "https://img.daisyui.com/images/stock/daisyui-hat-1.webp",
        "https://img.daisyui.com/images/stock/daisyui-hat-2.webp",
        "https://img.daisyui.com/images/stock/daisyui-hat-3.webp",
        "https://img.daisyui.com/images/stock/daisyui-hat-4.webp",
      ],
      title: "daisyUI Hat",
      price: "$25",
    },
    {
      id: 7,
      images: [
        "https://img.daisyui.com/images/stock/daisyui-hat-1.webp",
        "https://img.daisyui.com/images/stock/daisyui-hat-2.webp",
        "https://img.daisyui.com/images/stock/daisyui-hat-3.webp",
        "https://img.daisyui.com/images/stock/daisyui-hat-4.webp",
      ],
      title: "daisyUI Hat",
      price: "$25",
    },
    {
      id: 8,
      images: [
        "https://img.daisyui.com/images/stock/daisyui-hat-1.webp",
        "https://img.daisyui.com/images/stock/daisyui-hat-2.webp",
        "https://img.daisyui.com/images/stock/daisyui-hat-3.webp",
        "https://img.daisyui.com/images/stock/daisyui-hat-4.webp",
      ],
      title: "daisyUI Hat",
      price: "$25",
    },
  ];

  const [start, setStart] = useState(0);
  const visibleCards = 5;
  const cardWidthPercentage = 100 / visibleCards; // 20%

  const next = () => {
    if (start < cards.length - visibleCards) setStart(start + 1);
  };

  const prev = () => {
    if (start > 0) setStart(start - 1);
  };

  const sliderStyle = {
    transform: `translateX(-${start * cardWidthPercentage}%)`,
  };

  return (
    <div className="CardSection">
      <div className="para">
        <p>Check out our latest products!</p>
      </div>

      <div className="slider-wrapper">
        <button className="arrow-btn" onClick={prev} disabled={start === 0}>
          &lt;
        </button>

        <div className="slider" style={sliderStyle}>
          {cards.map((item) => (
            <div
              className="slide-card"
              key={item.id}
              style={{ width: `${cardWidthPercentage}%` }}
            >
              <div className="card card-sm bg-base-200 shadow max-w-60">
                <figure className="hover-gallery">
                  {item.images.map((src, index) => (
                    <img key={index} src={src} alt="product" />
                  ))}
                </figure>

                <div className="card-body">
                  <h2 className="card-title flex justify-between">
                    {item.title}
                    <span className="font-normal">{item.price}</span>
                  </h2>
                  <p>High Quality classic cap hat with stitch logo</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="arrow-btn"
          onClick={next}
          disabled={start >= cards.length - visibleCards}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default CardSection;


