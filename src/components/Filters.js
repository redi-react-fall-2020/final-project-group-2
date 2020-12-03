import React from "react";

const Filters = ({
  selectedFilters,
  setSelectedFilter,
  handleChange,
  resto,
}) => {
  return (
    <div className="filterArea">
      <div className="selectWrapper">
        <select className="filterSelect" onChange={handleChange}>
          <option default>Price</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
        </select>
        <select className="filterSelect" onChange={handleChange}>
          <option default>Open Now</option>
          <option value="true">Open</option>
        </select>
        <select className="filterSelect">
          <option default>By rating</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
        </select>
        <select className="filterSelect">
          <option default>Delivery</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
        </select>
        <select className="filterSelect">
          <option default>dietary</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
        </select>
        <select className="filterSelect">
          <option default>Category</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
