import React, { useEffect, useContext } from "react";
import "../restaurantsStyle.css";
import Header from "./Header";
import Filters from "./Filters";
import RestaurantListings from "./RestaurantListings";
import TopRated from "./TopRated";
import MapView from "../MapView";

import RestaurantsContext from "../contexts/restaurantsContext";

const Restaurants = ({ logo }) => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://redi-final-restaurants.herokuapp.com/restaurants"
      );
      const data = await response.json();

      setRestaurants(data.results);
    })();
  }, []);

  return (
    <div id="container">
      <div className="contentWrapper">
        <Header logo={logo} />
        <div id="resultsDiv">
          <div id="listOfRestautants">
            <Filters restaurants={restaurants} />
            <RestaurantListings restaurants={restaurants} />
            <TopRated restaurants={restaurants} />
          </div>
          <div className="mapView">
            <MapView restaurants={restaurants} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Restaurants;
