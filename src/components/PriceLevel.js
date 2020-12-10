import React from "react";

const PriceLevel = ({ level }) => {
  return <>{Array.from(Array(level).keys()).map((i) => "€")}</>;
};

export default PriceLevel;
