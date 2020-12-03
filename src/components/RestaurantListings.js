import React from "react";
import RestaurantCard from "./RestaurantCard";

const RestaurantListings = ({ restaurants }) => {
  return (
    <>
      <div className="sectionTitle">
        <h2 style={{ marginBottom: "10px", marginLeft: "15px" }}>
          Restaurants in Berlin{" "}
        </h2>
      </div>

      <div className="results-for-restaurants">
        {restaurants &&
          restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
      </div>
    </>
  );
};

export default RestaurantListings;
