"use client";

import { useState } from "react";
import "./../style.css";

import RestaurantHeader from "@/app/_components/restaurantFlowComponents/RestaurantHeader";
import AddFoodItem from "@/app/_components/restaurantFlowComponents/AddFoodItem";
import FoodItemList from "@/app/_components/restaurantFlowComponents/FoodItemList";

const Dashboard = () => {
  const [addItem, setAddItem] = useState(false);
  const [dashboardVisibility, setDashboardVisibility] = useState(false);

  return (
    <>
      <RestaurantHeader />
      <button
        onClick={() => {
          setAddItem(true);
          if (dashboardVisibility) setDashboardVisibility(false);
        }}
      >
        Add Food
      </button>
      <button
        onClick={() => {
          setDashboardVisibility(true);
          if (addItem) setAddItem(false);
        }}
      >
        Dashboard
      </button>
      {addItem && <AddFoodItem />}
      {dashboardVisibility && <FoodItemList />}
    </>
  );
};

export default Dashboard;
