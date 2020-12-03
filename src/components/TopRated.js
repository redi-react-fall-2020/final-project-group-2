import React from "react";

const TopRated = ({ restaurants }) => {
  const topRestaurants = restaurants
    .sort((a, b) => a.rating - b.rating)
    .slice(0, 3);

    return (
      <div className="Popular-Restaurants">
        <div className="Popular-sectionTitle">
          <h2>
            Popular Italian restaurants in <span>Berlin</span>{" "}
          </h2>
        </div>
            {topRestaurants.map((restaurant) => {
            
                
        })}
        <div className="Popular-Restaurants-wrapper">
          <div className="navIcon">
            <div className="navLeft">
              <a href="">
                <img src="img/navLeft.svg" alt="" />
              </a>
            </div>
            <div className="navRight">
              <a href="">
                <img src="img/navRight.svg" alt="" />
              </a>
            </div>
          </div>

          <div className="Popular-restaurant-info">
            <div className="Popular-restaurant-img">
              <a href="#">
                <img
                  className=" Popular-restaurant-img-link "
                  src=" img/restaurant-3.jfif "
                  alt=" "
                />
              </a>
            </div>
            <div className=" Popular-restaurant-text-info ">
              <div className=" Popular-restaurant-text-Title-favoriteIcon ">
                <h3 className=" Popular-restaurant-title ">
                  <a href=" # ">La Femme Patisserie</a>
                </h3>
              </div>

              <div className=" Popular-restaurant-description ">
                <p>
                  Takeout, Reservation, seating, waitstaff, Serves Alcohol, wine
                  and beer.
                </p>
              </div>

              <div className=" Popular-restaurant-rating-scoreVar ">
                <div className="Popular-restaurant-rating-wrapper">
                  <div className=" Popular-restaurant-rating ">
                    <img
                      className=" Popular-rating-score "
                      src=" img/ratingscore.svg "
                      alt=" "
                    />
                  </div>
                  <div className=" Popular-rateScorVar ">4.9</div>
                </div>
                <div className=" Popular-restaurant-OpenNow ">
                  <p>Open now</p>
                  <img src=" img/Open-now-Icon.svg " alt=" " />
                </div>
              </div>

              <div className=" Popular-restaurant-tel-cuisine-openNow "></div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default TopRated;
