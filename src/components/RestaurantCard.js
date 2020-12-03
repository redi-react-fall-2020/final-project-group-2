import React from "react";
import { Link } from "react-router-dom";
import favoriteIcon from "../img/favoriteIcon.svg";
import adressIcon from "../img/adressIcon.svg";
import ratingscore from "../img/ratingscore.svg";
import phoneIcon from "../img/phoneIcon.svg";
import openNowIcon from "../img/Open-now-Icon.svg";

const RestaurantCard = ({ restaurant }) => {
  return (
    <Link to={`/restaurants/berlin/${restaurant.id}`}>
      <div className="restaurant-info">
        <div className="restaurant-img">
         
            <img
              className=" restaurant-img-link "
              src={restaurant.photos[0].links[0]}
              alt=" "
            />

        </div>
        <div className=" restaurant-text-info ">
          <div className=" restaurant-text-Title-favoriteIcon ">
            <h3 className=" restaurant-title ">
              {restaurant.name}
            </h3>
            <div className=" favoriteIcon ">
              <img src={favoriteIcon} alt=" " />
            </div>
          </div>
          <div className=" restaurant-adress ">
            <img src={adressIcon} alt="adressIcon" />
            <div>{restaurant.formatted_address}</div>
          </div>

          <div className=" restaurant-rating-scoreVar ">
            <div className=" restaurant-rating ">
              <img
                className=" rating-score"
                style={{ width: (restaurant.rating * 100) / 5 + "%" }}
                src={ratingscore}
                alt=" "
              />
            </div>
            <div className=" rateScorVar ">{restaurant.rating}</div>
          </div>

          <div className=" restaurant-description ">
            <p>
              Takeout, Reservation, seating, waitstaff, Serves Alcohol, wine and
              beer.
            </p>
          </div>
          <div className=" restaurant-tel-cuisine-openNow ">
            <div className=" restaurant-tel ">
              <img
                src={phoneIcon}
                className="restaurant-tel-Icon"
                alt="phoneIcon"
              />
              <p>{restaurant.social.phone}</p>
            </div>
            <div className=" restaurant-category-tag ">
              {restaurant.cuisine}
            </div>

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
      </div>
    </Link>
  );
};

export default RestaurantCard;
