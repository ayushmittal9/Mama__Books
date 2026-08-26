import React from "react";
import "./CardSection.css";

function CardSection() {
  const cards = [
    {
      id: 1,
      images: [
        "https://images-cdn.ubuy.co.in/65705b558311aa30913a64e7-kuromi-keychain-ornaments-cute-cartoon.jpg",
        "https://my-test-11.slatic.net/p/bd974dfb5a6232864a9ef515903bde00.jpg",
        "https://img4.dhresource.com/webp/m/0x0/f3/albu/jc/l/13/303a4a39-16c5-4885-9fab-6730bb2d4788.jpg",
        "https://5.imimg.com/data5/ECOM/Default/2024/3/403748549/FI/JQ/QE/217528291/kawaii-kuromi-3d-keychain-bear-hugs-1.jpg",
      ],
      title: "Kuromi Keychain",
      price: "Rs-25",
    },
    {
      id: 2,
      images: [
        "https://doodlecollection.com/cdn/shop/products/DoodleCutenessOverloadHardBoundB5Diary-Wiro.jpg?v=1757074174",
        "https://m.media-amazon.com/images/I/713z0uJjO5L._AC_UF1000,1000_QL80_.jpg",
        "https://bulletplannerideas.com/wp-content/uploads/2019/07/bullet-journal-step-by-step-doodle-4.jpg",
        "https://m.media-amazon.com/images/I/71QWCHpGHwL.jpg",
      ],
      title: "Doodle Diary",
      price: "Rs-150",
    },
    {
      id: 3,
      images: [
        "https://www.tinyminymo.com/cdn/shop/files/Hello-Kawaii-Gel-Pens-Set-of-6-28_1200x1200.png?v=1745579528",
        "https://image.made-in-china.com/202f0j00kTJobEOqHLrY/Cute-Korean-Cartoon-Animals-Design-School-Student-Gel-Pens-Set-Stationery.webp",
        "https://images-cdn.ubuy.co.in/633ab2e59b2f5c14232dd416-sitake-8-pcs-cute-pens-kawaii-pens-fun.jpg",
        "https://www.creamiicandy.com/wp-content/uploads/2020/09/sweet-peach-pen-kawaii-pens-australia-cute-pens-1000x1000.jpg",
      ],
      title: "Kawaii Gel Pens",
      price: "Rs-25",
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

  const visibleCards = 8;
  const cardWidth = 100 / visibleCards;

  return (
    <div className="CardSection">
      <div className="para">
        <p>Check out our latest products!</p>
        <p> sckdjscbkdsncjkdjk djkcdcd kjdskchlkdn </p>
      </div>

      <div className="slider-wrapper">
        <div className="slider">
          {[...cards, ...cards].map((item, index1) => (
            <div
              className="slide-card"
              key={index1}
              style={{ width: `calc(${cardWidth}% - 10px)` }}
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
                    <span>{item.price}</span>
                  </h2>

                  <p>High Quality classic cap hat with stitch logo</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardSection;
