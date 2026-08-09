// import React from "react";
// import "./Navbar2.css";
// function Navbar2() {
//   return (
//     <>
//       <div className="navbar3">
//         {" "}
//         {/* Dropdown Container 1 - Stationery */}{" "}
//         <div className="dropdown-container">
//           {" "}
//           <a href="#" className="dropdown-button">
//             {" "}
//             <span>Stationery</span>{" "}
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               fill="none"
//               fillRule="evenodd"
//               stroke-linejoin="round"
//               aria-hidden="true"
//               focusable="false"
//               role="presentation"
//               className="icon"
//             >
//               {" "}
//               <path d="M6 9l6 6 6-6"></path>{" "}
//             </svg>{" "}
//           </a>{" "}
//           <div className="dropdown-menu">
//             {" "}
//             <div className="category">
//               {" "}
//               <ul>
//                 {" "}
//                 <li className="nested-dropdown">
//                   {" "}
//                   <a href="#" className="nested-button">
//                     {" "}
//                     Pens{" "}
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth="1.5"
//                       fill="none"
//                       fillRule="evenodd"
//                       stroke-linejoin="round"
//                       aria-hidden="true"
//                       focusable="false"
//                       role="presentation"
//                     >
//                       {" "}
//                       <path d="M9 6l6 6-6 6"></path>{" "}
//                     </svg>{" "}
//                   </a>{" "}
//                   <div className="nested-menu">
//                     {" "}
//                     <ul>
//                       {" "}
//                       <li>
//                         {" "}
//                         <a href="#">Gel Pen</a>{" "}
//                       </li>{" "}
//                       <li>
//                         {" "}
//                         <a href="#">Blue Pen</a>{" "}
//                       </li>{" "}
//                       <li>
//                         {" "}
//                         <a href="#">Fountain Pen</a>{" "}
//                       </li>{" "}
//                     </ul>{" "}
//                   </div>{" "}
//                 </li>{" "}
//                 <li className="nested-dropdown">
//                   {" "}
//                   <a href="#" className="nested-button">
//                     {" "}
//                     Notebooks{" "}
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth="1.5"
//                       fill="none"
//                       fillRule="evenodd"
//                       stroke-linejoin="round"
//                       aria-hidden="true"
//                       focusable="false"
//                       role="presentation"
//                     >
//                       {" "}
//                       <path d="M9 6l6 6-6 6"></path>{" "}
//                     </svg>{" "}
//                   </a>{" "}
//                   <div className="nested-menu">
//                     {" "}
//                     <ul>
//                       {" "}
//                       <li>
//                         {" "}
//                         <a href="#">Plain Page Notebook</a>{" "}
//                       </li>{" "}
//                       <li>
//                         {" "}
//                         <a href="#">One Side Plain Notebook</a>{" "}
//                       </li>{" "}
//                       <li>
//                         {" "}
//                         <a href="#">Spring Plain Notebook</a>{" "}
//                       </li>{" "}
//                       <li>
//                         {" "}
//                         <a href="#">Simple Spring Notebook</a>{" "}
//                       </li>{" "}
//                     </ul>{" "}
//                   </div>{" "}
//                 </li>{" "}
//                 <li>
//                   {" "}
//                   <a href="#">Sticky Notes</a>{" "}
//                 </li>{" "}
//                 <li>
//                   {" "}
//                   <a href="#">Highlighter</a>{" "}
//                 </li>{" "}
//                 <li>
//                   {" "}
//                   <a href="#">Ruler and Measuring Tool</a>{" "}
//                 </li>{" "}
//                 <li>
//                   {" "}
//                   <a href="#">Whiteboard or Notepad</a>{" "}
//                 </li>{" "}
//                 <li>
//                   {" "}
//                   <a href="#">Pencils Sharpener or Eraser</a>{" "}
//                 </li>{" "}
//               </ul>{" "}
//             </div>{" "}
//           </div>{" "}
//         </div>{" "}
//         {/* Dropdown Container 2 - Office Supplies */}{" "}
//         <div className="dropdown-container">
//           {" "}
//           <a href="#" className="dropdown-button">
//             {" "}
//             <span>Office Supplies</span>{" "}
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               fill="none"
//               fillRule="evenodd"
//               stroke-linejoin="round"
//               aria-hidden="true"
//               focusable="false"
//               role="presentation"
//               className="icon"
//             >
//               {" "}
//               <path d="M6 9l6 6 6-6"></path>{" "}
//             </svg>{" "}
//           </a>{" "}
//           <div className="dropdown-menu">
//             {" "}
//             <div className="category">
//               {" "}
//               <ul>
//                 {" "}
//                 <li className="nested-dropdown">
//                   {" "}
//                   <a href="#" className="nested-button">
//                     {" "}
//                     Pens{" "}
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth="1.5"
//                       fill="none"
//                       fillRule="evenodd"
//                       stroke-linejoin="round"
//                       aria-hidden="true"
//                       focusable="false"
//                       role="presentation"
//                     >
//                       {" "}
//                       <path d="M9 6l6 6-6 6"></path>{" "}
//                     </svg>{" "}
//                   </a>{" "}
//                   <div className="nested-menu">
//                     {" "}
//                     <ul>
//                       {" "}
//                       <li>
//                         {" "}
//                         <a href="#">Gel Pen</a>{" "}
//                       </li>{" "}
//                       <li>
//                         {" "}
//                         <a href="#">Blue Pen</a>{" "}
//                       </li>{" "}
//                       <li>
//                         {" "}
//                         <a href="#">Fountain Pen</a>{" "}
//                       </li>{" "}
//                     </ul>{" "}
//                   </div>{" "}
//                 </li>{" "}
//                 <li className="nested-dropdown">
//                   {" "}
//                   <a href="#" className="nested-button">
//                     {" "}
//                     Notebooks{" "}
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth="1.5"
//                       fill="none"
//                       fillRule="evenodd"
//                       stroke-linejoin="round"
//                       aria-hidden="true"
//                       focusable="false"
//                       role="presentation"
//                     >
//                       {" "}
//                       <path d="M9 6l6 6-6 6"></path>{" "}
//                     </svg>{" "}
//                   </a>{" "}
//                   <div className="nested-menu">
//                     {" "}
//                     <ul>
//                       {" "}
//                       <li>
//                         {" "}
//                         <a href="#">Plain Page Notebook</a>{" "}
//                       </li>{" "}
//                       <li>
//                         {" "}
//                         <a href="#">One Side Plain Notebook</a>{" "}
//                       </li>{" "}
//                       <li>
//                         {" "}
//                         <a href="#">Spring Plain Notebook</a>{" "}
//                       </li>{" "}
//                       <li>
//                         {" "}
//                         <a href="#">Simple Spring Notebook</a>{" "}
//                       </li>{" "}
//                     </ul>{" "}
//                   </div>{" "}
//                 </li>{" "}
//                 <li>
//                   {" "}
//                   <a href="#">Sticky Notes</a>{" "}
//                 </li>{" "}
//                 <li>
//                   {" "}
//                   <a href="#">Highlighter</a>{" "}
//                 </li>{" "}
//                 <li>
//                   {" "}
//                   <a href="#">Ruler and Measuring Tool</a>{" "}
//                 </li>{" "}
//                 <li>
//                   {" "}
//                   <a href="#">Whiteboard or Notepad</a>{" "}
//                 </li>{" "}
//                 <li>
//                   {" "}
//                   <a href="#">Pencils Sharpener or Eraser</a>{" "}
//                 </li>{" "}
//               </ul>{" "}
//             </div>{" "}
//           </div>{" "}
//         </div>{" "}
//         {/* Dropdown Container 3 - Art Supplies */}{" "}
//         <div className="dropdown-container">
//           {" "}
//           <a href="#" className="dropdown-button">
//             {" "}
//             <span>Art Supplies</span>{" "}
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               fill="none"
//               fillRule="evenodd"
//               stroke-linejoin="round"
//               aria-hidden="true"
//               focusable="false"
//               role="presentation"
//               className="icon"
//             >
//               {" "}
//               <path d="M6 9l6 6 6-6"></path>{" "}
//             </svg>{" "}
//           </a>{" "}
//           <div className="dropdown-menu">
//             {" "}
//             <div className="category">
//               {" "}
//               <ul>
//                 {" "}
//                 <li className="nested-dropdown">
//                   {" "}
//                   <a href="#" className="nested-button">
//                     {" "}
//                     Pens{" "}
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth="1.5"
//                       fill="none"
//                       fillRule="evenodd"
//                       stroke-linejoin="round"
//                       aria-hidden="true"
//                       focusable="false"
//                       role="presentation"
//                     >
//                       {" "}
//                       <path d="M9 6l6 6-6 6"></path>{" "}
//                     </svg>{" "}
//                   </a>{" "}
//                   <div className="nested-menu">
//                     {" "}
//                     <ul>
//                       {" "}
//                       <li>
//                         {" "}
//                         <a href="#">Gel Pen</a>{" "}
//                       </li>{" "}
//                       <li>
//                         {" "}
//                         <a href="#">Blue Pen</a>{" "}
//                       </li>{" "}
//                       <li>
//                         {" "}
//                         <a href="#">Fountain Pen</a>{" "}
//                       </li>{" "}
//                     </ul>{" "}
//                   </div>{" "}
//                 </li>{" "}
//                 <li className="nested-dropdown">
//                   {" "}
//                   <a href="#" className="nested-button">
//                     {" "}
//                     Notebooks{" "}
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth="1.5"
//                       fill="none"
//                       fillRule="evenodd"
//                       stroke-linejoin="round"
//                       aria-hidden="true"
//                       focusable="false"
//                       role="presentation"
//                     >
//                       {" "}
//                       <path d="M9 6l6 6-6 6"></path>{" "}
//                     </svg>{" "}
//                   </a>{" "}
//                   <div className="nested-menu">
//                     {" "}
//                     <ul>
//                       {" "}
//                       <li>
//                         {" "}
//                         <a href="#">Plain Page Notebook</a>{" "}
//                       </li>{" "}
//                       <li>
//                         {" "}
//                         <a href="#">One Side Plain Notebook</a>{" "}
//                       </li>{" "}
//                       <li>
//                         {" "}
//                         <a href="#">Spring Plain Notebook</a>{" "}
//                       </li>{" "}
//                       <li>
//                         {" "}
//                         <a href="#">Simple Spring Notebook</a>{" "}
//                       </li>{" "}
//                     </ul>{" "}
//                   </div>{" "}
//                 </li>{" "}
//                 <li>
//                   {" "}
//                   <a href="#">Sticky Notes</a>{" "}
//                 </li>{" "}
//                 <li>
//                   {" "}
//                   <a href="#">Highlighter</a>{" "}
//                 </li>{" "}
//                 <li>
//                   {" "}
//                   <a href="#">Ruler and Measuring Tool</a>{" "}
//                 </li>{" "}
//                 <li>
//                   {" "}
//                   <a href="#">Whiteboard or Notepad</a>{" "}
//                 </li>{" "}
//                 <li>
//                   {" "}
//                   <a href="#">Pencils Sharpener or Eraser</a>{" "}
//                 </li>{" "}
//               </ul>{" "}
//             </div>{" "}
//           </div>{" "}
//         </div>{" "}
//         {/* Dropdown Container 4 - Desk Accessories */}{" "}
//         <div className="dropdown-container">
//           {" "}
//           <a href="#" className="dropdown-button">
//             {" "}
//             <span>Desk Accessories</span>{" "}
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               fill="none"
//               fillRule="evenodd"
//               stroke-linejoin="round"
//               aria-hidden="true"
//               focusable="false"
//               role="presentation"
//               className="icon"
//             >
//               {" "}
//               <path d="M6 9l6 6 6-6"></path>{" "}
//             </svg>{" "}
//           </a>{" "}
//           <div className="dropdown-menu">
//             {" "}
//             <div className="category">
//               {" "}
//               <ul>
//                 {" "}
//                 <li className="nested-dropdown">
//                   {" "}
//                   <a href="#" className="nested-button">
//                     {" "}
//                     Pens{" "}
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth="1.5"
//                       fill="none"
//                       fillRule="evenodd"
//                       stroke-linejoin="round"
//                       aria-hidden="true"
//                       focusable="false"
//                       role="presentation"
//                     >
//                       {" "}
//                       <path d="M9 6l6 6-6 6"></path>{" "}
//                     </svg>{" "}
//                   </a>{" "}
//                   <div className="nested-menu">
//                     {" "}
//                     <ul>
//                       {" "}
//                       <li>
//                         {" "}
//                         <a href="#">Gel Pen</a>{" "}
//                       </li>{" "}
//                       <li>
//                         {" "}
//                         <a href="#">Blue Pen</a>{" "}
//                       </li>{" "}
//                       <li>
//                         {" "}
//                         <a href="#">Fountain Pen</a>{" "}
//                       </li>{" "}
//                     </ul>{" "}
//                   </div>{" "}
//                 </li>{" "}
//                 <li className="nested-dropdown">
//                   {" "}
//                   <a href="#" className="nested-button">
//                     {" "}
//                     Notebooks{" "}
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth="1.5"
//                       fill="none"
//                       fillRule="evenodd"
//                       stroke-linejoin="round"
//                       aria-hidden="true"
//                       focusable="false"
//                       role="presentation"
//                     >
//                       {" "}
//                       <path d="M9 6l6 6-6 6"></path>{" "}
//                     </svg>{" "}
//                   </a>{" "}
//                   <div className="nested-menu">
//                     {" "}
//                     <ul>
//                       {" "}
//                       <li>
//                         {" "}
//                         <a href="#">Plain Page Notebook</a>{" "}
//                       </li>{" "}
//                       <li>
//                         {" "}
//                         <a href="#">One Side Plain Notebook</a>{" "}
//                       </li>{" "}
//                       <li>
//                         {" "}
//                         <a href="#">Spring Plain Notebook</a>{" "}
//                       </li>{" "}
//                       <li>
//                         {" "}
//                         <a href="#">Simple Spring Notebook</a>{" "}
//                       </li>{" "}
//                     </ul>{" "}
//                   </div>{" "}
//                 </li>{" "}
//                 <li>
//                   {" "}
//                   <a href="#">Sticky Notes</a>{" "}
//                 </li>{" "}
//                 <li>
//                   {" "}
//                   <a href="#">Highlighter</a>{" "}
//                 </li>{" "}
//                 <li>
//                   {" "}
//                   <a href="#">Ruler and Measuring Tool</a>{" "}
//                 </li>{" "}
//                 <li>
//                   {" "}
//                   <a href="#">Whiteboard or Notepad</a>{" "}
//                 </li>{" "}
//                 <li>
//                   {" "}
//                   <a href="#">Pencils Sharpener or Eraser</a>{" "}
//                 </li>{" "}
//               </ul>{" "}
//             </div>{" "}
//           </div>{" "}
//         </div>{" "}
//         {/* Final Button */}{" "}
//         <div className="dropdown-container">
//           {" "}
//           <a href="#" className="dropdown-button">
//             {" "}
//             <span>More Categories</span>{" "}
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               fill="none"
//               fillRule="evenodd"
//               stroke-linejoin="round"
//               aria-hidden="true"
//               focusable="false"
//               role="presentation"
//               className="icon"
//             >
//               {" "}
//               <path d="M6 9l6 6 6-6"></path>{" "}
//             </svg>{" "}
//           </a>{" "}
//         </div>{" "}
//       </div>
//     </>
//   );
// }

// export default Navbar2;


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