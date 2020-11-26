import React from "react";
import { Category, CuisineName } from "../StyledComp";

const CategorySelector = ({ cuisine }) => {
  return (
    <div>
      <Category>
        <img src={cuisine.image} alt={`${cuisine.name} Check`} />
      </Category>
      <CuisineName>{cuisine.name}</CuisineName>
    </div>
  );
};

export default CategorySelector;
