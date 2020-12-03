import React from "react";
import RestaurantCard from "./RestaurantCard";

const RestaurantListings = ({ restaurants }) => {
  return (
    <div className="results-for-restaurants">
      <div className="sectionTitle">
        {restaurants && (
          <h2 style={{ marginBottom: "10px", marginLeft: "15px" }}>
            Restaurants in Berlin{" "}
          </h2>
        )}
      </div>
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantListings;
