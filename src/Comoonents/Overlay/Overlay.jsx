import React from "react";

const Overlay = ({ isVisible, data }) => {
  if (!isVisible) return null; // Don't render the overlay if not visible
  return (
    <div
      className="position-absolute top-0 w-75 start-0"
      style={{ zIndex: 9, height: "70vh", background: "lightgrey" }}
    >
      {JSON.stringify(data)}
      {/* {data.map((item)=> item)} */}
    </div>
  );
};

export default Overlay;
