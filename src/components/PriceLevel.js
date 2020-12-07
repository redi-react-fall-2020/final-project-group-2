import React from "react";

const PriceLevel = (level) => {
  return <div>{Array.from(Array(level).keys()).map((i) => "$")}</div>;
};

export default PriceLevel;
