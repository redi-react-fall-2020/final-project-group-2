import React from "react";
import RestaurantCard from "./RestaurantCard";
import Restaurants from "./Restaurants";

const RestaurantListings = ({ restaurants }) => {
  return (
    <div className="results-for-restaurants">
      <div className="sectionTitle">
        <h2>
          Italian restaurants in <span>Berlin</span>{" "}
        </h2>
      </div>
      {restaurants.map(
        (restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantListings;
