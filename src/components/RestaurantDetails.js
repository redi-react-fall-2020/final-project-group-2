import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantsContext from "../contexts/restaurantsContext";

const RestaurantDetails = () => {
  const { restaurants } = useContext(RestaurantsContext);
  const { id } = useParams();

  const [selectedRestaurant, setSelectedRestaurant] = useState();

  useEffect(() => {
    const result = restaurants.find((item) => item.id === id);
    setSelectedRestaurant(result);
  }, [id]);

  return (
    <>
      {selectedRestaurant && (
        <div className="restaurant-info">
          <div className="restaurant-img">
            <img
              className=" restaurant-img-link "
              src={selectedRestaurant.photos[0].links[0]}
              alt=" "
            />
          </div>
          <div className=" restaurant-text-info ">
            <div className=" restaurant-text-Title-favoriteIcon ">
              <h3 className=" restaurant-title ">{selectedRestaurant.name}</h3>
              <div className=" favoriteIcon ">
                <img src="" alt=" " />
              </div>
            </div>
            <div className=" restaurant-adress ">
              <img src="" alt="adressIcon" />
              <div>formatted_address</div>
            </div>

            <div className=" restaurant-rating-scoreVar ">
              <div className=" restaurant-rating ">
                <img
                  className=" rating-score"
                  // style={{ width: (selectedRestaurant.rating * 100) / 5 + "%" }}
                  src=""
                  alt=" "
                />
              </div>
              <div className=" rateScorVar ">rating</div>
            </div>

            <div className=" restaurant-description ">
              <p>
                Takeout, Reservation, seating, waitstaff, Serves Alcohol, wine
                and beer.
              </p>
            </div>
            <div className=" restaurant-tel-cuisine-openNow ">
              <div className=" restaurant-tel ">
                <img src="" className="restaurant-tel-Icon" alt="phoneIcon" />
                <p>restaurant.social.phone</p>
              </div>
              <div className=" restaurant-category-tag ">cuisine</div>

              {/* {restaurant.opening_hours.open_now && (
            <div className=" restaurant-OpenNow ">
              <p>Open now</p>
              <img src="" alt="openNowIcon" />
            </div>
          )} */}
              {/* {!restaurant.opening_hours.open_now && (
            <div className=" restaurant-OpenNow ">
              <p>Closed</p>
              <img src="" alt="openNowIcon" />
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
          )} */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantDetails;
