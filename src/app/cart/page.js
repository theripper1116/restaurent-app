"use client";

import { useState } from "react";
import CustomerHeader from "../_components/foodOrderingFlowComponents/CustomerHeader";
import DisplayFoodItem from "../_components/foodOrderingFlowComponents/DisplayFoodItems";
import Footer from "../_components/restaurantFlowComponents/Footer";
import { DELIVERY_CHARGES, TAX } from "../utils/constants/constants";

const Cart = () => {
  const [foodItemList, setFoodItemList] = useState(
    JSON.parse(localStorage.getItem("cartItems"))
  );
  const [foodCharges] = useState(() =>
    foodItemList?.length === 1
      ? foodItemList?.price
      : foodItemList?.reduce((agg, foodItemDetail) => {
          return foodItemDetail.price + agg;
        }, 0)
  );

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
              removeFromCart={removeFromCart}
            />
          ))
        ) : (
          <h1>No Food Items Found!!</h1>
        )}
      </div>
      <div className="total-wrapper">
        <div>
          <div className="row">
            <span>Food Charges: </span>
            <span>{foodCharges}</span>
          </div>
          <div className="row">
            <span>Tax: </span>
            <span>{foodCharges * (TAX / 100)}</span>
          </div>
          <div className="row">
            <span>Delivery Charges </span>
            <span>{DELIVERY_CHARGES}</span>
          </div>
          <div className="row">
            <span>Total Amount: </span>
            <span>
              {foodCharges + foodCharges * (TAX / 100) + DELIVERY_CHARGES}
            </span>
          </div>
        </div>
        <div>
          <button className="order-now-button">Order Now</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
