import React from "react";
import "./Navbar2.css";

function Navbar2() {
  const categories = [
    { name: "Stationery" },
    { name: "Office Supplies" },
    { name: "Art Supplies" },
    { name: "Desk Accessories" },
  ];

  const nestedItems = {
    Pens: ["Gel Pen", "Blue Pen", "Fountain Pen"],
    Notebooks: [
      "Plain Page Notebook",
      "One Side Plain Notebook",
      "Spring Plain Notebook",
      "Simple Spring Notebook",
    ],
  };

  const flatItems = [
    "Sticky Notes",
    "Highlighter",
    "Ruler and Measuring Tool",
    "Whiteboard or Notepad",
    "Pencils Sharpener or Eraser",
  ];

  return (
    <div className="navbar3">
      {categories.map((cat) => (
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
                {Object.entries(nestedItems).map(([label, items]) => (
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

                {flatItems.map((item) => (
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
