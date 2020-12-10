import React from "react";

const PriceLevel = ({
  level
}) => {
  return ( <
    div className = "rateScorVar" >
     - {
      Array.from(Array(level).keys()).map((i) => "€")
    } <
    /div>
  );
};

export default PriceLevel;