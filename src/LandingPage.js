import React from "react";
import logo from "./img/logo.svg";
import { HeadingText, ListCategories, AppTheme } from "./StyledComp";

import CategorySelector from "./components/CategorySelector";
import SearchBar from "./components/SearchBar";
import ViewRestaurants from "./components/ViewRestaurants";

// import QueryContext from "./contexts/queryContext";

const LandingPage = ({ isSelected, handleCategoryClicked, cuisines }) => {
  return (
    <AppTheme>
      <div className="content-container">
        <img src={logo} className="App-logo" alt="logo" />
        <HeadingText>
          <strong>Support </strong>Local Restaurant,
          <br />
          Eat&nbsp;
          <strong style={{ textDecoration: "underline" }}>
            {" "}
            Great Food
          </strong>{" "}
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
    </AppTheme>
  );
};

export default LandingPage;
