import React from "react";
import logo from "./img/logo.svg";
import { HeadingText, ListCategories } from "./StyledComp";

import CategorySelector from "./components/CategorySelector";
import SearchBar from "./components/SearchBar";
import ViewRestaurants from "./components/ViewRestaurants";
import Header from "./components/Header";

const LandingPage = ({
  isSelected,
  handleCategoryClicked,
  cuisines,
  selectedCategories,
}) => {
  return (
    <div className="App">
      {/* <Header logo={logo} /> */}
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
};

export default LandingPage;
