import React from "react";
import RestaurantCard from "./RestaurantCard";

const RestaurantListings = ({ restaurants }) => {
  return (
    <div className="results-for-restaurants">
      <div className="sectionTitle">
        <h2>
          Italian restaurants in <span>Berlin</span>{" "}
        </h2>
      </div>
      {restaurants.map((restaurant) => (
        <RestaurantCard restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantListings;
