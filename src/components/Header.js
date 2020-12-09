import React from "react";
import { HeaderWarper } from "../StyledComp";
import SearchBar from "./SearchBar";


const Header = ({ logo}) => {
  
  return (
    <HeaderWarper>
      <div id="logo">
        {" "}
        <img src={logo} alt="logo" />
      </div>
      <SearchBar />
</HeaderWarper>
  );
};

export default Header;
