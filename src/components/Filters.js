import React, { useState, useEffect } from "react";

const Filters = ({ restaurants }) => {
  const [selectedPrice, setSelectedPrice] = useState();
  const [resto, setResto] = useState([]);

  useEffect(() => {
    const result = restaurants.filter(
      (item) => item.price_level == selectedPrice
    );
    setResto(result);
  }, [selectedPrice]);

  const handleGameChange = (e) => {
    setSelectedPrice(e.target.value);
  };

  console.log("resto: ", resto, resto.length);

  return (
    <div className="filterArea">
      <div className="selectWrapper">
        <select className="filterSelect" onChange={handleGameChange}>
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
