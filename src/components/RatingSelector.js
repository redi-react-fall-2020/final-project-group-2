import React from "react";

const RatingSelector = () => {
  return (
    <select className="filterSelect">
      <option selected>By rating</option>
      <option value="1"> € </option>
      <option value="2"> €€</option>
      <option value="3"> €€€ </option>
    </select>
  );
};

export default RatingSelector;
