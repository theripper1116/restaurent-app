"use client";

import RestaurantHeader from "@/app/_components/RestaurantHeader";
import "./../style.css";
import AddFoodItem from "@/app/_components/AddFoodItem";
import { useState } from "react";
import FoodItemList from "@/app/_components/FoodItemList";

const Dashboard = () => {
  const [addItem, setAddItem] = useState(false);

  return (
    <>
      <RestaurantHeader />
      <button onClick={() => setAddItem(true)}>Add Food</button>
      <button>Dashboard</button>
      {addItem ? <AddFoodItem /> : <FoodItemList />}
    </>
  );
};

export default Dashboard;
