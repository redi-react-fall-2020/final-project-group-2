import React from "react";
import Restaurant from "./Restaurant";

const RestaurantListings = ({ restaurants }) => {
  return (
    <div className="results-for-restaurants">
      <div className="sectionTitle">
        <h2>
          Italian restaurants in <span>Berlin</span>{" "}
        </h2>
      </div>
      {restaurants.map((restaurant) => (
        <Restaurant restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantListings;
