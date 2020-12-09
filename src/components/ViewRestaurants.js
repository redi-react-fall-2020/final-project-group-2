import React from "react";
import { ViewRestaurantText, AnchorTagBold } from "../StyledComp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ViewRestaurants = () => {
  return (
    <>
      <ViewRestaurantText>
        or view <AnchorTagBold>popular restaurants</AnchorTagBold> in{" "}
        <Link to="/restaurants/berlin">
          <AnchorTagBold>Berlin</AnchorTagBold>
        </Link>
      </ViewRestaurantText>
    </>
  );
};

export default ViewRestaurants;
