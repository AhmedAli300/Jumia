import React from "react";
import "./Overlay.css";

const Overlay = ({ isVisible, data }) => {
  if (!isVisible) return null;
  return (
    <div className="overlay-container">
      {data.map((subCategory, index) => (
        <div key={index} className="overlay-col">
          <h3 className="overlay-title">{subCategory.title}</h3>
          <ul className="overlay-list">
            {subCategory.items.map((item, itemIndex) => (
              <li key={itemIndex} className="overlay-item">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Overlay;
