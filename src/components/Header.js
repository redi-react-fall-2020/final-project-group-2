import React from "react";

const Header = ({ logo }) => {
  return (
    <div className="header">
      <div id="logo">
        {" "}
        <img src={logo} alt="logo" />
      </div>
      <div>
        <input
          type="text"
          className="searchInput"
          placeholder="Find restaurants in your area"
        />
      </div>
    </div>
  );
};

export default Header;
