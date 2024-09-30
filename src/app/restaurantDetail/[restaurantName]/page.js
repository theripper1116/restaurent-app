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

  const addToCart = (foodItem) => {
    const foodItemList = JSON.parse(localStorage.getItem("cartItems"));
    if (
      foodItemList &&
      foodItemList[0].restaurantId === foodItem.restaurantId
    ) {
      localStorage.setItem(
        "cartItems",
        JSON.stringify([...foodItemList, foodItem])
      );
    } else {
      localStorage.setItem("cartItems", JSON.stringify([foodItem]));
    }
  };

  const removeFromCart = (foodItem) => {
    const getCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (getCartItems) {
      if (getCartItems.length > 1) {
        localStorage.setItem(
          "cartItems",
          JSON.stringify(
            getCartItems.filter((cartItem) => cartItem._id !== foodItem._id)
          )
        );
      } else if (getCartItems.length === 1) {
        localStorage.removeItem("cartItems");
      }
    } else {
      alert("No item found in Cart");
    }
  };

  useEffect(() => {
    fetchRestaurantDetails();
  }, []);

  if (error) <h2>{error}</h2>;

  return (
    <div>
      <CustomerHeader
        cartItemLength={JSON.parse(localStorage.getItem("cartItems"))?.length}
      />
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
            <DisplayFoodItem
              key={foodItem._id}
              foodItem={foodItem}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              isCart={false}
            />
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
