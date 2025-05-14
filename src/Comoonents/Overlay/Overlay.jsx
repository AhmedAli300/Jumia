import React from "react";
import "./Overlay.css";

const Overlay = ({ isVisible, data }) => {
  if (!isVisible) return null;
  return (
    <>
    {/* {console.log(data?.categories?.map((cat) => cat.subcategories))}; */}
    {/* {console.log(data?.categories)}; */}
     <div className="overlay-container">
       {data?.categories?.map((cat, index) => (
          <div key={index} className="overlay-col">
            {/* <h3 className="overlay-title">{cat.name}</h3> */}
            <ul className="overlay-list">
              {cat.subcategories.map((sub, subIndex) => (
                  <li key={subIndex} className="overlay-item">{sub.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
    </>
  );
};

export default Overlay;
