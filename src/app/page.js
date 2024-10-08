"use client";

import { useState, useEffect } from "react";

import CustomerHeader from "./_components/foodOrderingFlowComponents/CustomerHeader";
import Footer from "./_components/restaurantFlowComponents/Footer";
import { RestaurantList } from "./_components/foodOrderingFlowComponents/RestaurantList";

export default function Home() {
  const [restaurantLocations, setRestaurantLocations] = useState();
  const [selectedLocation, setSelectedLocation] = useState();
  const [
    visibilityForRestaurantLocations,
    setVisibilityForRestaurantLocations,
  ] = useState(false);
  const [restaurantlist, setRestaurantList] = useState();
  const [error, setError] = useState();

  let selectedRestaurant;

  const fetchLocations = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/customer/locations"
      );
      const data = await response.json();
      if (!data.error) {
        if (response.status === 200 && data) {
          setRestaurantLocations(data.cityList);
        } else setError("Something went wrong");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const fetchRestaurants = async (selectedRestaurantName) => {
    try {
      let response;
      console.log("inside function");
      if (selectedRestaurantName) {
        console.log("inside if");
        response = await fetch(
          `http://localhost:3000/api/customer?restaurantName=${selectedRestaurantName}`
        );
      } else {
        response = await fetch("http://localhost:3000/api/customer");
      }
      let data = await response.json();
      if (response.status === 200 && (!data.message || !data.error))
        setRestaurantList(data);
      else if (data.messaage || data.error) {
        setError(data.message || data.error);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, [selectedLocation]);

  useEffect(() => {
    fetchRestaurants(selectedRestaurant);
  }, [selectedRestaurant]);

  if (error) return <h3>{error}</h3>;

  return (
    <>
      <CustomerHeader />
      <div className="main-page-banner">
        <h1>Restaurent app</h1>
        <div className="input-wrapper">
          <input
            type="text"
            className="select-input"
            placeholder="Select place"
            value={selectedLocation}
            onClick={() => setVisibilityForRestaurantLocations(true)}
          />
          {visibilityForRestaurantLocations && (
            <ul className="location-list">
              {restaurantLocations?.map((cityName, index) => {
                return (
                  <li
                    onClick={() => {
                      setSelectedLocation(cityName);
                      setVisibilityForRestaurantLocations(false);
                    }}
                    key={index}
                  >
                    {cityName}
                  </li>
                );
              })}
            </ul>
          )}

          <input
            type="text"
            className="search-input"
            placeholder="Enter Food or Restaurant Name"
            onChange={(event) => (selectedRestaurant = event.target.value)}
          />
        </div>
      </div>
      <div className="restaurant-list-container">
        {restaurantlist?.map((restaurantDetail) => (
          <RestaurantList
            key={restaurantDetail._id}
            restaurantDetail={restaurantDetail}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
