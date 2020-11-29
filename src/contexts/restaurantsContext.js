import React, { createContext } from "react";

const RestaurantsContext = createContext({
  restaurants: [],
  setRestaurants: () => {},
});

export default RestaurantsContext;
