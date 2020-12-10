import React from "react";
import { Link } from "react-router-dom";
import favoriteIcon from "../img/favoriteIcon.svg";
import adressIcon from "../img/adressIcon.svg";
import ratingscore from "../img/ratingscore.svg";
import phoneIcon from "../img/phoneIcon.svg";
import openNowIcon from "../img/Open-now-Icon.svg";
import PriceLevel from "./PriceLevel";
import {
  RestaurantCardInfo,
  ResturantTitle,
  ResturantTelImg,
  ResturantGategoryTag,
} from "../StyledComp";

const RestaurantCard = ({ restaurant }) => {
  return (
    <Link to={`/restaurants/berlin/${restaurant.id}`}>
      <RestaurantCardInfo>
        <div className="restaurant-img">
          <img
            className="restaurant-img-link "
            src={restaurant.photos[0].links[0]}
            alt="restaurantImg"
          />
        </div>
        <div className=" restaurant-text-info ">
          <div className=" restaurant-text-Title-favoriteIcon ">
            <ResturantTitle>{restaurant.name}</ResturantTitle>
            <div className=" favoriteIcon ">
              <img src={favoriteIcon} alt="favoriteIcon" />
            </div>
          </div>
          <div className=" restaurant-adress ">
            <img src={adressIcon} alt="adressIcon" />
            <div>{restaurant.formatted_address}</div>
          </div>

          <div className=" restaurant-rating-scoreVar ">
            <div className=" restaurant-rating ">
              <img
                className="rating-score"
                style={{ width: (restaurant.rating * 100) / 5 + "%" }}
                src={ratingscore}
                alt=" "
              />
            </div>
            <div className="rateScorVar">{restaurant.rating} </div>{" "}
            <PriceLevel level={restaurant.price_level} />
          </div>

          <div className=" restaurant-description ">
            <p>
              Takeout, Reservation, seating, waitstaff, Serves Alcohol, wine and
              beer.
            </p>
          </div>
          <div className=" restaurant-tel-cuisine-openNow ">
            <div className=" restaurant-tel ">
              <ResturantTelImg src={phoneIcon} alt="phoneIcon" />
              <p>{restaurant.social.phone}</p>
            </div>
            <ResturantGategoryTag>{restaurant.cuisine}</ResturantGategoryTag>

            {restaurant.opening_hours.open_now && (
              <div className=" restaurant-OpenNow ">
                <p>Open now</p>
                <img src={openNowIcon} alt="openNowIcon" />
              </div>
            )}
            {!restaurant.opening_hours.open_now && (
              <div className=" restaurant-OpenNow ">
                <p>Closed</p>
                <img src={openNowIcon} alt="openNowIcon" />
              </div>
            )}
            {restaurant.pickup && (
              <div className=" restaurant-OpenNow ">
                <span>Pick Up</span>
              </div>
            )}
            {restaurant.delivery && (
              <div className=" restaurant-OpenNow ">
                <span>Delivery</span>
              </div>
            )}
          </div>
        </div>
      </RestaurantCardInfo>
    </Link>
  );
};

export default RestaurantCard;
