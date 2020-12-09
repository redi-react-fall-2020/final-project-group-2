import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./img/logo.svg";
import italian from "./img/Italian.svg";
import chinese from "./img/chinese.svg";
import indian from "./img/indian.svg";
import mexican from "./img/mexican.svg";
import thai from "./img/thai.svg";
import turkish from "./img/turkish.svg";
import sun from "./img/sun.svg";
import moon from "./img/moon.svg";
import Restaurants from "./components/Restaurants";
import RestaurantDetail from "./components/RestaurantDetail";
import { ThemeProvider } from "styled-components";
import "./App.css";
import LandingPage from "./LandingPage";
import { GlobalStyle } from "./StyledComp";
import RestaurantsContext from "./contexts/restaurantsContext";
import QueryContext from "./contexts/queryContext";

function App() {
  const [globalStyle, setGlobalStyle] = useState("light");

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
  const [query, setQuery] = useState("");

  const value = { restaurants, setRestaurants };
  const queryValue = { query, setQuery };

  const toggelTheme = () => {
    document.querySelector(".tumbler").classList.toggle("tumbler--night-mode");
    if (globalStyle === "light") {
      setGlobalStyle("dark");
    } else {
      setGlobalStyle("light");
    }
  };

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

  return (
    <ThemeProvider theme={{ mode: globalStyle }}>
      <GlobalStyle />
      <RestaurantsContext.Provider value={value}>
        <QueryContext.Provider value={queryValue}>
          <Router>
            <Switch>
              <Route exact path="/">
                <LandingPage
                  isSelected={isSelected}
                  handleCategoryClicked={handleCategoryClicked}
                  cuisines={cuisines}
                  selectedCategories={selectedCategories}
                />
                <div class="tumbler__wrapper">
                  <button onClick={toggelTheme} class="tumbler"></button>
                  <img style={{ width: "12px" }} src={sun} alt="logo sun" />
                  <img style={{ width: "12px" }} src={moon} alt="logo moon" />
                </div>
              </Route>
              <Route exact path="/restaurants/berlin">
                <Restaurants logo={logo} />
                <div class="tumbler__wrapper">
                  <button onClick={toggelTheme} class="tumbler"></button>
                  <img style={{ width: "12px" }} src={sun} alt="logo sun" />
                  <img style={{ width: "12px" }} src={moon} alt="logo moon" />
                </div>
              </Route>
              <Route exact path="/restaurants/berlin/:id">
                <RestaurantDetail logo={logo} />
                <div class="tumbler__wrapper">
                  <button onClick={toggelTheme} class="tumbler"></button>
                  <img style={{ width: "12px" }} src={sun} alt="logo sun" />
                  <img style={{ width: "12px" }} src={moon} alt="logo moon" />
                </div>
              </Route>
            </Switch>
          </Router>
        </QueryContext.Provider>
      </RestaurantsContext.Provider>
    </ThemeProvider>
  );
}

export default App;
