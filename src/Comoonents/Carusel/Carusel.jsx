import React from "react";
import CaruselOffers from "./CaruselOffers";
import CarouselCategoryView from "./CarouselCategoryView";

const Carusel = ({ activeCategory }) => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide col-md-8 ps-2 pe-2 h-100"
      data-bs-ride="carousel"
      data-bs-interval="2000"
    >
      {activeCategory ? (
        <CarouselCategoryView activeCategory={activeCategory} />
      ) : (
        <CaruselOffers />
      )}
    </div>
  );
};

export default Carusel;
