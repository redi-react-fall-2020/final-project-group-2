import React, { useState, useEffect, useContext } from "react";
import "../restaurantsStyle.css";
import Header from "./Header";
import Filters from "./Filters";
import RestaurantListings from "./RestaurantListings";
import TopRated from "./TopRated";
import MapView from "../MapView";

import RestaurantsContext from "../contexts/restaurantsContext";

const Restaurants = ({ logo }) => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);

  const [selectedFilters, setSelectedFilters] = useState({});
  const [resto, setResto] = useState([]);

  useEffect(() => {
    const result = restaurants.filter(
      (item) => item.price_level == selectedFilters
    );
    setResto(result);
  }, [selectedFilters]);

  const handleChange = (e) => {
    setSelectedFilters(e.target.value);
  };

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
            <Filters
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
              handleChange={handleChange}
              resto={resto}
            />
            {resto.length >= 1 && <RestaurantListings restaurants={resto} />}
            {resto.length === 0 && (
              <RestaurantListings restaurants={restaurants} />
            )}
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
