import React, { useState, useEffect } from "react";
import "../restaurantsStyle.css";
import Header from "./Header";
import Filters from "./Filters";
import RestaurantListings from "./RestaurantListings";
import MapView from "../MapView";


const Restaurants = ({ logo }) => {
  const [restaurants, setRestuarants] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://redi-final-restaurants.herokuapp.com/restaurants"
      );
      const data = await response.json();

      setRestuarants(data.results);
    })();
  }, []);

  return (
<>
    <div id="container">


      <div className="contentWrapper">
        <Header logo={logo} />
        <div id="resultsDiv">
          <div id="listOfRestautants">
            <Filters />
            <RestaurantListings restaurants={restaurants} />

            <div className="Popular-Restaurants">
              <div className="Popular-sectionTitle">
                <h2>
                  Popular Italian restaurants in <span>Berlin</span>{" "}
                </h2>
              </div>
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
                        Takeout, Reservation, seating, waitstaff, Serves
                        Alcohol, wine and beer.
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
                        Takeout, Reservation, seating, waitstaff, Serves
                        Alcohol, wine and beer.
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
                        Takeout, Reservation, seating, waitstaff, Serves
                        Alcohol, wine and beer.
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
          </div>
            <div className="mapView"><MapView restaurants={restaurants}/></div>
                 
        </div>
      </div>
    </div>

 </>
  );
};

export default Restaurants;
