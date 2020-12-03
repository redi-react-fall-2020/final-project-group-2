import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./img/logo.svg";
import italian from "./img/Italian.svg";
import chinese from "./img/chinese.svg";
import indian from "./img/indian.svg";
import mexican from "./img/mexican.svg";
import thai from "./img/thai.svg";
import turkish from "./img/turkish.svg";
import Restaurants from "./components/Restaurants";
import RestaurantDetail from "./components/RestaurantDetail";
import "./App.css";
import LandingPage from "./LandingPage";
import "./App.css";

import RestaurantsContext from "./contexts/restaurantsContext";

function App() {
  const [cuisines, setCuisines] = useState([
    { name: "italian", image: italian },
    { name: "chinese", image: chinese },
    { name: "thai", image: thai },
    { name: "indian", image: indian },
    { name: "mexican", image: mexican },
    { name: "turkish", image: turkish },
  ]);
  const [selectedCategories, setSelectedCategories] = useState(["chinese"]);
  const [restaurants, setRestaurants] = useState([]);
  const value = { restaurants, setRestaurants };

  const isSelected = (name) => {
    //checks if the name is include
    return selectedCategories.includes(name);
  };

  const handleCategoryClicked = (name) => {
    // to remove already clicked category
    if (isSelected(name)) {
      setSelectedCategories((prevState) => {
        return prevState.filter((item) => item !== name);
      });
      return;
    }
    // add clicked category into the list
    setSelectedCategories((prevState) => {
      return [...prevState, name];
    });
  };

  // const updateRestaurants = (list) => {
  //   setRestuarants(list);
  // };

  return (
    <RestaurantsContext.Provider value={value}>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage
              isSelected={isSelected}
              handleCategoryClicked={handleCategoryClicked}
              cuisines={cuisines}
              selectedCategories={selectedCategories}
            />
          </Route>
          <Route exact path="/restaurants/berlin">
            <Restaurants logo={logo} />
          </Route>
          <Route exact path="/restaurants/berlin/:id">
            <RestaurantDetail logo={logo} />
          </Route>
        </Switch>
      </Router>
    </RestaurantsContext.Provider>
  );
}

export default App;
