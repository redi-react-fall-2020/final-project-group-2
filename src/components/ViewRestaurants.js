import React from "react";
import { ViewRestaurantText, AnchorTagBold } from "../StyledComp";
import "../App.css";
import { Link } from "react-router-dom";

const ViewRestaurants = () => {
  return (
    <>
      <ViewRestaurantText>
        or click to view{" "}
        <Link to="/restaurants/berlin">
          <AnchorTagBold> popular restaurants</AnchorTagBold>
        </Link>{" "}
        in{" "}
        <Link to="/restaurants/berlin">
          <AnchorTagBold>Berlin</AnchorTagBold>
        </Link>
      </ViewRestaurantText>
    </>
  );
};

export default ViewRestaurants;
