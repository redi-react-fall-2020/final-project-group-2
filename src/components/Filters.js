import React from "react";

const Filters = () => {
  return (
    <div className="filterArea">
      <div className="selectWrapper">
        <select className="filterSelect">
          <option default>Price</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
        </select>
        <select className="filterSelect">
          <option default>Open Now</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
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
