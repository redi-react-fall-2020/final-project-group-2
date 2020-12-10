import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import MapView from "../../src/MapView";
import Header from "./Header";
import RestaurantsContext from "../contexts/restaurantsContext";
import backIcon from "../img/Back.svg";
import ratingscore from "../img/ratingscore.svg";
import addressIcon from "../img/adressIcon.svg";
import phoneIcon from "../img/phoneIcon.svg";
import openNowIcon from "../img/Open-now-Icon.svg";
import halal from "../img/halal.svg";
import pickupIcon from "../img/pickup.svg";
import italian from "../img/Italian.svg";
import "../img/restaurantDetailStyle.css";
import {
  ResturantListingHeadingText,
  AnchorTagBold,
  MapWraper,
} from "../StyledComp";
import PriceLevel from "./PriceLevel";

const RestaurantDetail = ({ logo }) => {
  const { restaurants } = useContext(RestaurantsContext);
  const { id } = useParams();

  const [selectedRestaurant, setSelectedRestaurant] = useState();

  useEffect(() => {
    const result = restaurants.find((item) => item.id === id);
    setSelectedRestaurant(result);
  }, [restaurants, id]);

  return (
    <>
      {selectedRestaurant && (
        <div id="container">
          <div className="contentWrapper">
            {/* <!-- STAR of Header  --> */}

            <Header logo={logo} />
            {/* <!-- END of Header  --> */}

            <div id="resultsDiv">
              {/* <!-- START of right side (listOfRestautants) --> */}
              <div id="listOfRestautants">
                {/* <!-- START of Go back Button --> */}
                <div className="goBackBtn">
                  <Link to="/restaurants/berlin/">
                    <img src={backIcon} alt="backIcon" />
                    <AnchorTagBold> Back </AnchorTagBold>
                  </Link>
                </div>
                {/* <!-- END of Go back Button -->

                    <!-- START Image Slider --> */}

                <div className="imgSliderDiv">
                  <img
                    className="imgSlider"
                    src={selectedRestaurant.photos[0].links[0]}
                    alt="restaurantPhoto"
                  />
                </div>
                {/* <!-- END Image Slider -->


                    <!-- start Restaurant Title --> */}
                <div className="restaurantTitle">
                  <ResturantListingHeadingText>
                    {selectedRestaurant.name}
                  </ResturantListingHeadingText>
                </div>
                {/* <!-- END Restaurant Title -->

                    <!-- start Restaurant Rating - Price - OpenNow--> */}
                <div className="restaurant-Rate-Price-OpenNow">
                  <div className=" restaurant-rating-scoreVar ">
                    <div className=" restaurant-rating ">
                      <img
                        className=" rating-score "
                        src={ratingscore}
                        alt="rating"
                      />
                    </div>
                    <div className=" rateScorVar ">
                      {" "}
                      {selectedRestaurant.rating}
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="restaurant-Price">
                    <PriceLevel level={selectedRestaurant.price_level} />
                  </div>
                  <div className="divider"></div>
                  {selectedRestaurant.opening_hours.open_now && (
                    <div className=" restaurant-OpenNow ">
                      <p>Open now</p>
                      <img src={openNowIcon} alt="openNow" />
                    </div>
                  )}
                  {!selectedRestaurant.opening_hours.open_now && (
                    <div className="restaurant-OpenNow">
                      <p>Closed</p>
                      <img src={openNowIcon} alt="openNowIcon" />
                    </div>
                  )}
                  {selectedRestaurant.delivery && (
                    <div className=" restaurant-OpenNow ">
                      <span>Delivery</span>
                    </div>
                  )}
                  {selectedRestaurant.pickup && (
                    <div className="CuisineTitle">
                      <p>Pickup</p>
                    </div>
                  )}
                </div>
                {/* <!-- END Restaurant Rating - Price - OpenNow-->


                    <!-- start Restaurant Cuisine / DietaryRestriction / Delivery --> */}
                <div className="restaurant-Cuisine-DietaryRestriction-Delivery">
                  <div className="restaurant-Cuisine CuisineContainer">
                    <div className="CuisineImg">
                      <img src={italian} alt="italian" />
                    </div>
                    <div className="CuisineTitle">
                      <p>{selectedRestaurant.cuisine}</p>
                    </div>
                  </div>
                  <div className="categoryDivider"></div>
                  <div className="restaurant-DietaryRestriction CuisineContainer">
                    <div className="CuisineImg">
                      <img src={halal} alt="halal" />
                    </div>
                    <div className="CuisineTitle">
                      <p>Halal</p>
                    </div>
                  </div>
                  <div className="categoryDivider"></div>
                  <div className="restaurant-Delivery CuisineContainer">
                    <div className="CuisineImg">
                      <img src={pickupIcon} alt="pickUp" />
                    </div>

                    <div className="CuisineTitle">
                      <p>pickup</p>
                    </div>
                  </div>
                </div>
                {/* <!-- END Restaurant Cuisine / DietaryRestriction / Delivery -->


                    <!-- start Restaurant Description --> */}
                <br />
                <div className="restaurantDescription">
                  <p style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                    Entdecken Sie unser Menü und bestellen Sie direkt auf der
                    Website. Ihr Essen ist schnell zubereitet und bereit, Sie zu
                    bedienen. Kommen Sie mit und kehren Sie zu dem wunderbaren
                    und unvergesslichen Erlebnis zurück!.
                  </p>
                </div>
                {/* <!-- End Restaurant Description -->

                    <!-- start Restaurant Address --> */}
                <br />
                <div className="restaurant-Address">
                  <img
                    className="Img-Icon"
                    src={addressIcon}
                    alt="addressIcon"
                  />
                  <div className="textInfo">
                    {selectedRestaurant.formatted_address}
                  </div>
                </div>
                {/* <!-- END Restaurant Address -->

                    <!-- start Restaurant Phone Number --> */}
                <br />
                <div className="restaurant-tel ">
                  <img
                    className="Img-Icon"
                    src={phoneIcon}
                    className="restaurant-tel-Icon"
                    alt="phoneIcon"
                  />

                  <div className="textInfo">
                    {selectedRestaurant.social.phone}
                  </div>
                </div>
                {/* <!-- END Restaurant Phone Number -->

                    <!-- start Restaurant OpningTime --> */}
                <br />
                <div className="restaurant-OpningTime">
                  <img className="Img-Icon" src={openNowIcon} alt="openNow" />
                  <div className="textInfo" className="openFromTo">
                    From {selectedRestaurant.opening_hours.hours.open} to{" "}
                    {selectedRestaurant.opening_hours.hours.close}
                  </div>
                </div>
                {/* <!-- END Restaurant OpningTime --> */}
              </div>
              {/* <!-- END of right side (listOfRestautants) -->


                <!-- START of left side (mapView) --> */}
              {/* <div className="mapView"></div> */}
              <MapWraper>
                <MapView restaurants={[selectedRestaurant]} />
              </MapWraper>
              {/* <div className="mapView">
                <MapView restaurants={restaurants} />
              </div> */}
              {/* <!-- END of left side (mapView) --> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantDetail;
