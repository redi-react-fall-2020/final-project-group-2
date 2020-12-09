import React from "react";
import { HeaderWarper } from "../StyledComp";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = ({ logo }) => {
  return (
    <HeaderWarper>
      <div id="logo">
        {" "}
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <SearchBar />
    </HeaderWarper>
  );
};

export default Header;
