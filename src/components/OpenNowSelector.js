import React from "react";

const OpenNowSelector = () => {
  return (
    <select className="filterSelect">
      <option selected>Open Now</option>
      <option value="1">$</option>
      <option value="2">$$</option>
      <option value="3">$$$</option>
    </select>
  );
};

export default OpenNowSelector;
