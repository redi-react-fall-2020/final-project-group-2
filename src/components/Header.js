import React from "react";
import { Address, AddressWraper } from "../StyledComp";
import {Link} from "react-router-dom";


const Header = ({ logo }) => {
  return (
    <div className="header">
      <div id="logo">
        {" "}
        <img src={logo} alt="logo" />
      </div>
      <AddressWraper>
        <Address
          type="text"
          className="searchInput"
          placeholder="Find restaurants in your area"
        />
        <Link to="/restaurants/berlin/?">
        <i className="fa fa-search" style={{color:"#E79F9F",paddingTop: "10px", position:"relative",left:"-2rem"}} 
       aria-hidden="true"></i>
       </Link>
      </AddressWraper>
      
    </div>
  );
};

export default Header;
