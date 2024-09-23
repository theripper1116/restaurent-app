"use client";

import { useEffect, useState } from "react";

import CustomerHeader from "@/app/_components/foodOrderingFlowComponents/CustomerHeader";
import RestaurantDetail from "@/app/_components/foodOrderingFlowComponents/RestaurantDetail";
import DisplayFoodItem from "@/app/_components/foodOrderingFlowComponents/DisplayFoodItems";
import Footer from "@/app/_components/restaurantFlowComponents/Footer";

const RestaurantDetailPage = ({
  params: { restaurantName },
  searchParams: { restaurantId },
}) => {
  const [restaurantDetail, setRestaurantDetail] = useState();
  const [foodItemList, setFoodItemList] = useState();
  const [error, setError] = useState();

  const fetchRestaurantDetails = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/customer/${restaurantId}`
      );
      const data = await response.json();
      if (response.status === 200 && (!data.message || !data.error)) {
        setRestaurantDetail(data.restaurantDetails);
        setFoodItemList(data.foodItems);
      } else setError(data.message || data.error);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchRestaurantDetails();
  }, []);

  return (
    <div>
      <CustomerHeader />
      <div className="restaurant-page-banner">
        <h1>{decodeURI(restaurantName)}</h1>
      </div>
      <div className="detail-wrapper">
        {restaurantDetail && (
          <RestaurantDetail restaurantDetail={restaurantDetail} />
        )}
      </div>
      <div className="food-item-wrapper">
        {foodItemList?.length >= 1 ? (
          foodItemList.map((foodItem) => (
            <DisplayFoodItem key={foodItem._id} foodItem={foodItem} />
          ))
        ) : (
          <h1>No Food Items Found!!</h1>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default RestaurantDetailPage;
