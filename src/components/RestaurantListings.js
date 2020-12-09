import React from "react";
import RestaurantCard from "./RestaurantCard";
import {ResturantListingHeadingText} from "../StyledComp";

const RestaurantListings = ({ restaurants }) => {
  return (
    <>
      <div className="sectionTitle">
        <ResturantListingHeadingText>
          Restaurants in Berlin{" "}
        </ResturantListingHeadingText>
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
