import React from "react";

const Filters = () => {
  return (
    <div className="filterArea">
      <div className="selectWrapper">
        <select className="filterSelect">
          <option selected>Price</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
        </select>
        <select className="filterSelect">
          <option selected>Open Now</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
        </select>
        <select className="filterSelect">
          <option selected>By rating</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
        </select>
        <select className="filterSelect">
          <option selected>Delivery</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
        </select>
        <select className="filterSelect">
          <option selected>dietary</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
        </select>
        <select className="filterSelect">
          <option selected>Category</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
