import React from "react";
import "./Navbar2.css";

function Navbar2() {
  const shopCategories = [
    {
      name: "Stationery Shop",
      nestedItems: {
        Pens: ["Gel Pen", "Ball Pen", "Fountain Pen", "Rollerball Pen"],
        Notebooks: [
          "Plain Page Notebook",
          "Spiral Notebook",
          "Hardcover Register",
          "6-Subject Notebook",
        ],
      },
      flatItems: [
        "Sticky Notes & Highlighters",
        "Geometry Box & Rulers",
        "Pencils, Erasers & Sharpeners",
        "Whiteboard & Notepads",
      ],
    },
    {
      name: "Sports Shop",
      nestedItems: {
        "Cricket Gear": [
          "English Willow Bat",
          "Kashmir Willow Bat",
          "Leather Ball",
          "Tennis Cricket Ball",
        ],
        "Fitness & Gym": [
          "Water Bottles & Flasks",
          "Gym Shakers",
          "Sports Towels",
        ],
      },
      flatItems: [
        "Sports Shoes",
        "Badminton & Rackets",
        "Protective Gear & Grips",
        "Training & Outdoor Gear",
      ],
    },
    {
      name: "Bags Shop",
      nestedItems: {
        Backpacks: [
          "Ergonomic School Bag",
          "College & Campus Bag",
          "Laptop Backpack 30L",
          "Waterproof Backpack",
        ],
        "Kids & Cartoon Bags": [
          "Printed Cartoon Bag",
          "Primary School Backpack",
          "Mini Daypack",
        ],
      },
      flatItems: [
        "Travel & Duffel Bags",
        "Gym & Sports Bags",
        "Lunch Bags & Sleeves",
        "Pouches & Organizers",
      ],
    },
    {
      name: "Office & Art Shop",
      nestedItems: {
        "Art Supplies": [
          "Watercolor Set",
          "Acrylic Colors",
          "Drawing Sketchbook",
          "Colored Pencils",
        ],
        "Desk Essentials": [
          "Stapler & Staples",
          "Files & Display Folders",
          "Calculators",
          "Adhesives & Tapes",
        ],
      },
      flatItems: [
        "Correction Pens & Erasers",
        "Paper Clips & Pins",
        "Desk Organizers",
        "Scissors & Cutters",
      ],
    },
  ];

  return (
    <div className="navbar3">
      {shopCategories.map((cat) => (
        <div className="dropdown-container" key={cat.name}>
          <a href="#" className="dropdown-button">
            <span>{cat.name}</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              fillRule="evenodd"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
              role="presentation"
              className="icon"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </a>

          <div className="dropdown-menu">
            <div className="category">
              <ul>
                {Object.entries(cat.nestedItems).map(([label, items]) => (
                  <li className="nested-dropdown" key={label}>
                    <a href="#" className="nested-button">
                      {label}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        fillRule="evenodd"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        focusable="false"
                        role="presentation"
                        className="nested-icon"
                      >
                        <path d="M9 6l6 6-6 6"></path>
                      </svg>
                    </a>
                    <div className="nested-menu">
                      <ul>
                        {items.map((item) => (
                          <li key={item}>
                            <a href="#">{item}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}

                {cat.flatItems.map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}

      {/* Final Button */}
      <div className="dropdown-container">
        <a href="#" className="dropdown-button">
          <span>More Categories</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            fillRule="evenodd"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
            role="presentation"
            className="icon"
          >
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Navbar2;
