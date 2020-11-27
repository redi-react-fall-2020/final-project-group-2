import React from "react";
import { ViewRestaurantText, AnchorTag } from "../StyledComp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ViewRestaurants = () => {
  return (
    <>
      <ViewRestaurantText>
        or view <strong>popular restaurants</strong> in{" "}
        <Link to="/restaurants/berlin">Berlin</Link>
      </ViewRestaurantText>
    </>
  );
};

export default ViewRestaurants;
