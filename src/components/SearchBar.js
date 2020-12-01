import React from "react";
import { Address, AddressWraper } from "../StyledComp";
import {Link} from "react-router-dom";


const SearchBar = () => {
  return (
    <div style={{width:"500px",display:'flex'}}>
     <AddressWraper><Address
        type="text"
        placeholder="Find restaurants in your area "
      ></Address>
      <Link to="/restaurants/berlin">
        <i className="fa fa-search" style={{color:"#E79F9F",paddingTop: "10px", position:"relative",left:"-2rem"}} 
       aria-hidden="true"></i>
       </Link>
       </AddressWraper> 

      
    </div>
  );
};

export default SearchBar;
