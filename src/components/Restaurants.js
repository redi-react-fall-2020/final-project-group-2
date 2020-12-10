import React, { useState, useEffect, useContext } from "react";
import "../restaurantsStyle.css";
import Header from "./Header";
import Filters from "./Filters";
import RestaurantListings from "./RestaurantListings";
import TopRated from "./TopRated";
import MapView from "../MapView";
import { Label, FiltersWraper, MapWraper } from "../StyledComp";
import RestaurantsContext from "../contexts/restaurantsContext";
import QueryContext from "../contexts/queryContext";
import App from "../App";

const Restaurants = ({ logo, theme }) => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  const { query, setQuery } = useContext(QueryContext);

  const [selectedFilters, setSelectedFilters] = useState({});
  const [resto, setResto] = useState([]);

  useEffect(() => {
    const result = restaurants.filter((item) => {
      let shouldReturn = true;
      if (selectedFilters.price_level) {
        shouldReturn =
          shouldReturn && item.price_level == selectedFilters.price_level;
      }
      if (selectedFilters.pickup) {
        shouldReturn = shouldReturn && item.pickup;
      }
      if (selectedFilters.delivery) {
        shouldReturn = shouldReturn && item.delivery;
      }
      if (selectedFilters.open) {
        shouldReturn = shouldReturn && item.opening_hours.open_now;
      }
      if (query.length > 0) {
        shouldReturn =
          shouldReturn && item.name.toLowerCase().includes(query.toLowerCase());
      }
      return shouldReturn;
    });
    setResto(result);
  }, [selectedFilters]);

  useEffect(() => {
    const result = restaurants.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });

    setResto(result);
  }, [query]);

  const handleChange = (type, value) => {
    setSelectedFilters((prevSelectedFilters) => {
      return { ...prevSelectedFilters, [type]: value };
    });
  };

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://redi-final-restaurants.herokuapp.com/restaurants"
      );
      const data = await response.json();

      setRestaurants(data.results);
      if (query && query.length > 0) {
        const result = data.results.filter((item) => {
          return item.name.toLowerCase().includes(query.toLowerCase());
        });
        setResto(result);
      }
    })();
  }, []);

  const clearFilters = () => {
    setSelectedFilters({});
    setQuery("");
  };

  return (
    <div id="container">
      <div className="contentWrapper">
        <Header logo={logo} />
        <div id="resultsDiv">
          <div id="listOfRestautants">
            <FiltersWraper>
              {" "}
              <Filters
                selectedFilters={selectedFilters}
                setSelectedFilters={setSelectedFilters}
                handleChange={handleChange}
                resto={resto}
              />
              <Label onClick={clearFilters}>Clear filters</Label>
            </FiltersWraper>
            {resto.length > 0 && <RestaurantListings restaurants={resto} />}
            {resto.length === 0 && query === "" && (
              <RestaurantListings restaurants={restaurants} />
            )}

            {resto.length === 0 && query !== "" && (
              <span>No Restaurants found</span>
            )}

            <TopRated restaurants={restaurants} />
          </div>
          <MapWraper>
            <MapView restaurants={restaurants} />
          </MapWraper>
        </div>
      </div>
    </div>
  );
};
export default Restaurants;
