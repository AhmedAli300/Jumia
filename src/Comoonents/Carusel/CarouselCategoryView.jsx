import React from "react";

const CarouselCategoryView = ({ activeCategory }) => {
  return (
    <div className=" rounded-3 p-3" style={{minHeight: "450px"}}>
      {activeCategory?.subcategories?.map((sub) => (
        <a  key={sub.id} href="#" className="subcategory-item mx-3 d-inline-block">
          {sub.name}
        </a>
      ))}
    </div>
  );
};

export default CarouselCategoryView;
