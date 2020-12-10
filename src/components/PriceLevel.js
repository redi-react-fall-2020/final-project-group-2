import React from "react";

const PriceLevel = ({ level }) => {
  return (
    <div className="rateScorVar">
      Price-level: {Array.from(Array(level).keys()).map((i) => "$")}
    </div>
  );
};

export default PriceLevel;
