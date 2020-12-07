import React, { useState, useContext } from "react";
import { Address, AddressWraper } from "../StyledComp";
import QueryContext from "../contexts/queryContext";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const { setQuery } = useContext(QueryContext);
  const [value, setValue] = useState("");

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(value);
    history.push("/restaurants/berlin");
  };
  return (
    <div style={{ width: "500px", display: "flex" }}>
      <form onSubmit={handleSubmit}>
        <AddressWraper>
          <Address
            type="text"
            placeholder="Find restaurants by Name "
            name="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <i
            className="fa fa-search"
            style={{
              color: "#E79F9F",
              paddingTop: "10px",
              position: "relative",
              left: "-2rem",
            }}
            aria-hidden="true"
          ></i>
        </AddressWraper>
      </form>
    </div>
  );
};

export default SearchBar;
