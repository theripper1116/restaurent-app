"use client";

import { useEffect, useState } from "react";
import CustomerHeader from "../_components/foodOrderingFlowComponents/CustomerHeader";
import DisplayFoodItem from "../_components/foodOrderingFlowComponents/DisplayFoodItems";

const Cart = () => {
  const [foodItemList, setFoodItemList] = useState();

  const fetchAllFoodItems = () => {
    setFoodItemList(JSON.parse(localStorage.getItem("cartItems")));
  };

  useEffect(() => {
    fetchAllFoodItems();
  }, []);

  return (
    <div>
      <CustomerHeader
        cartItemLength={JSON.parse(localStorage.getItem("cartItems"))?.length}
      />
      <div className="food-item-wrapper">
        {foodItemList?.length >= 1 ? (
          foodItemList.map((foodItem) => (
            <DisplayFoodItem
              key={foodItem._id}
              foodItem={foodItem}
              isCart={true}
            />
          ))
        ) : (
          <h1>No Food Items Found!!</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
