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
        <select
          className="filterSelect"
          onChange={(e) => handleChange("price_level", e.target.value)}
        >
          <option default>Price</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
        </select>

        <label>
          <input
            type="checkbox"
            name="pickup"
            checked={selectedFilters.pickup || false}
            onChange={(e) => handleChange("pickup", e.target.checked)}
          />
          Pickup
        </label>
        <label>
          <input
            type="checkbox"
            name="delivery"
            checked={selectedFilters.delivery || false}
            onChange={(e) => handleChange("delivery", e.target.checked)}
          />
          Delivery
        </label>
        <label>
          <input
            type="checkbox"
            name="open"
            checked={selectedFilters.open || false}
            onChange={(e) => handleChange("open", e.target.checked)}
          />
          Open Now
        </label>
        {/* 
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
        </select> */}
      </div>
    </div>
  );
};

export default Filters;
