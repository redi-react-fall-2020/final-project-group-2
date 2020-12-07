import React from "react";
import { Link } from "react-router-dom";
import ratingscore from "../img/ratingscore.svg";
import openNowIcon from "../img/Open-now-Icon.svg";
import navLeft from "../img/navLeft.svg";
import navRight from "../img/navRight.svg";

const TopRated = ({ restaurants }) => {
  const topRestaurants = restaurants
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="Popular-Restaurants">
      <div className="Popular-sectionTitle">
        <h2>Most Rated restaurants in Berlin </h2>
      </div>
      <div className="Popular-Restaurants-wrapper">
        <div className="navIcon">
          <div className="navLeft">
            <img src={navLeft} alt="nav-left" />
          </div>
          <div className="navRight">
            <img src={navRight} alt="nav-right" />
          </div>
        </div>
      </div>

      <div className="Popular-Restaurants-wrapper">
        {/* <div className="navIcon">
          <div className="navLeft">
            <a href="">
              <img src={navLeft} alt="nav-left" />
            </a>
          </div>
          <div className="navRight">
            <a href="">
              <img src={navRight} alt="" />
            </a>
          </div>
        </div> */}
        {topRestaurants.map((restaurant) => (
          <Link to={`/restaurants/berlin/${restaurant.id}`} key={restaurant.id}>
            <div className="Popular-restaurant-info" key={restaurant.name}>
              <div className="Popular-restaurant-img">
                <img
                  className=" Popular-restaurant-img-link "
                  src={restaurant.photos[0].links[0]}
                  alt="restaurantPhoto"
                />
              </div>
              <div className="Popular-restaurant-text-info">
                <div className="Popular-restaurant-text-Title-favoriteIcon">
                  <h3 className=" Popular-restaurant-title ">
                    {restaurant.name}
                  </h3>
                </div>
                <div className=" Popular-restaurant-description ">
                  <p>
                    Takeout, Reservation, seating, waitstaff, Serves Alcohol,
                    wine and beer.
                  </p>
                </div>
                <div className=" Popular-restaurant-rating-scoreVar ">
                  <div className="Popular-restaurant-rating-wrapper">
                    <div className=" Popular-restaurant-rating ">
                      <img
                        className=" Popular-rating-score "
                        src={ratingscore}
                        alt="ratingScore"
                      />
                    </div>
                    <div className=" Popular-rateScorVar ">
                      {restaurant.rating}
                    </div>
                  </div>

                  {restaurant.opening_hours.open_now && (
                    <div className="Popular-restaurant-OpenNow ">
                      <p>Open now</p>
                      <img src={openNowIcon} alt="openNowIcon" />
                    </div>
                  )}
                </div>
                <div style={{ display: "flex" }}>
                  {!restaurant.opening_hours.open_now && (
                    <div className="Popular-restaurant-OpenNow ">
                      <p>Closed</p>
                      <img
                        src={openNowIcon}
                        alt="openNowIcon"
                        style={{ paddingRight: "12px" }}
                      />
                    </div>
                  )}
                  {restaurant.pickup && (
                    <div className="Popular-restaurant-OpenNow ">
                      <span style={{ paddingRight: "12px" }}>Pick Up</span>
                    </div>
                  )}
                  {restaurant.delivery && (
                    <div className="Popular-restaurant-OpenNow ">
                      <span>Delivery</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopRated;
