import React from "react";
import { Category, CuisineName } from "../StyledComp";

const CategorySelector = ({ cuisine, isSelected, handleCategoryClicked }) => {
  return (
    < div /* className = "category-wrapper" */ >
      < Category className = "categoryImg"
        selected={isSelected(cuisine.name)}
        onClick={() => {
          handleCategoryClicked(cuisine.name);
        }}
      >
        <img src={cuisine.image} alt={`${cuisine.name} Check`} />
      </Category>
      <CuisineName>{cuisine.name}</CuisineName>
    </div>
  );
};

export default CategorySelector;
