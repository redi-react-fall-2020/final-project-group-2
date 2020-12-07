import React from "react";
import { Address, AddressWraper } from "../StyledComp";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = ({ logo }) => {
  return (
    <div className="header">
      <div id="logo">
        {" "}
        <img src={logo} alt="logo" />
      </div>
      <SearchBar />
    </div>
  );
};

export default Header;
