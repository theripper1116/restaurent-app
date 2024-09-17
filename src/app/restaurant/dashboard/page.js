"use client";

import RestaurantHeader from "@/app/_components/RestaurantHeader";
import "./../style.css";
import AddFoodItem from "@/app/_components/AddFoodItem";
import { useState } from "react";

const Dashboard = () => {
  const [addItem, setAddItem] = useState(false);

  return (
    <>
      <RestaurantHeader />
      <button onClick={() => setAddItem(true)}>Add Food</button>
      <button>Dashboard</button>
      {addItem ? <AddFoodItem /> : <h1>Dashboard</h1>}
    </>
  );
};

export default Dashboard;
