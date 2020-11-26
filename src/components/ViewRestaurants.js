import React from "react";
import { ViewRestaurantText, AnchorTag } from "../StyledComp";
const ViewRestaurants = () => {
  return (
    <>
      <ViewRestaurantText>
        or view <strong>popular restaurants</strong> in{" "}
        <AnchorTag href="">Berlin</AnchorTag>
      </ViewRestaurantText>
    </>
  );
};

export default ViewRestaurants;
