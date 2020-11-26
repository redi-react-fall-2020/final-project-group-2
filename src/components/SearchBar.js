import React from "react";
import { Address } from "../StyledComp";

const SearchBar = () => {
  return (
    <div>
      <Address
        type="text"
        placeholder="Find restuarants in your area "
      ></Address>
    </div>
  );
};

export default SearchBar;
