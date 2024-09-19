"use client";

import RestaurantHeader from "@/app/_components/RestaurantHeader";
import "./../style.css";
import AddFoodItem from "@/app/_components/AddFoodItem";
import { useState } from "react";
import FoodItemList from "@/app/_components/FoodItemList";

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
