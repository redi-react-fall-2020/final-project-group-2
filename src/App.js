import React, { useState } from "react";
import logo from "./img/logo.svg";
import italian from "./img/Italian.svg";
import chinese from "./img/chinese.svg";
import indian from "./img/indian.svg";
import mexican from "./img/mexican.svg";
import thai from "./img/thai.svg";
import turkish from "./img/turkish.svg";
import "./App.css";
import { HeadingText, ListCategories } from "./StyledComp";
import CategorySelector from "./components/CategorySelector";
import SearchBar from "./components/SearchBar";
import ViewRestaurants from "./components/ViewRestaurants";

function App() {
  const [cuisines, setCuisines] = useState([
    { name: "italian", image: italian },
    { name: "chinese", image: chinese },
    { name: "thai", image: thai },
    { name: "indian", image: indian },
    { name: "mexican", image: mexican },
    { name: "turkish", image: turkish },
  ]);
  const [selectedCategories, setSelectedCategories] = useState(["indian"]);

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
    <div className="App">
      <div className="content-container">
        <img src={logo} className="App-logo" alt="logo" />
        <HeadingText>
          <strong>Support </strong>Local Restuarant, Eat <br />{" "}
          <strong style={{ textDecoration: "underline" }}>Great Food</strong>{" "}
        </HeadingText>

        <ListCategories>
          {cuisines.map((cuisine) => (
            <CategorySelector
              cuisine={cuisine}
              key={cuisine.name}
              isSelected={isSelected}
              handleCategoryClicked={handleCategoryClicked}
            />
          ))}
        </ListCategories>
        <SearchBar />
        <ViewRestaurants />
      </div>
      <div className="empty-space"></div>
    </div>
  );
}

export default App;
