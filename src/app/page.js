"use client";

import { useState, useEffect } from "react";

import CustomerHeader from "./_components/foodOrderingFlowComponents/CustomerHeader";
import Footer from "./_components/restaurantFlowComponents/Footer";

export default function Home() {
  const [restaurantLocations, setRestaurantLocations] = useState();
  const [selectedLocation, setSelectedLocation] = useState();
  const [error, setError] = useState();

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

  useEffect(() => {
    fetchLocations();
  }, []);

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
          />
          {selectedLocation && (
            <ul className="location-list">
              {restaurantLocations?.map((cityName, index) => {
                return (
                  <li onClick={() => setSelectedLocation(cityName)} key={index}>
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
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
