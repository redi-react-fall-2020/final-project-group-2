import React, { useContext, useState} from "react";
import { useParams } from "react-router-dom";
import RestaurantsContext from "../contexts/restaurantsContext"; 


const RestaurantDetails = () => {
  const { restaurants } = useContext(RestaurantsContext);
  const {id}  = useParams();
  let slectedResturants ={};

const getResturant =()=>{restaurants.map(item =>{
  if (item.id===id){
    slectedResturants=item;
  }
});}
getResturant();

 return (

    <div className="restaurant-info">
      <div className="restaurant-img">
      <img
          className=" restaurant-img-link "
          src={slectedResturants.photos[0].links[0]}
          alt="Resturant photo "
        />
      </div>
      <div className=" restaurant-text-info ">
        <div className=" restaurant-text-Title-favoriteIcon ">
          <h3 className=" restaurant-title ">{slectedResturants.name}</h3>
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
              // style={{ width: (restaurant.rating * 100) / 5 + "%" }}
              src=""
              alt=" "
            />
          </div>
          <div className=" rateScorVar ">rating</div>
        </div>

        <div className=" restaurant-description ">
          <p>
            Takeout, Reservation, seating, waitstaff, Serves Alcohol, wine and
            beer.
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
);
};

export default RestaurantDetails;
