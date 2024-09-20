"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const FoodItemList = () => {
  const [foodItems, setFoodItems] = useState();
  const [error, setError] = useState(false);

  const router = useRouter();

  const handleDeleteFoodItem = async (foodId) => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/restaurant/foods/" + foodId,
        {
          method: "delete",
        }
      );
      const data = await response.json();
      if (response.status === 200 && data) {
        alert("Food Item Deleted");
        getAllFoodItems();
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const getAllFoodItems = async () => {
    const getRestaurantId = JSON.parse(localStorage.getItem("restaurantUser"));
    try {
      const response = await fetch(
        "http://localhost:3000/api/restaurant/foods/" + getRestaurantId._id
      );
      const data = await response.json();
      if (!data.error) {
        setFoodItems(data.message);
      } else setError(data.error);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getAllFoodItems();
  }, []);

  if (error) return <h3>Failed to fetch data due to: {error}</h3>;

  return (
    <div>
      <h1>Food Items</h1>
      <table>
        <thead>
          <tr>
            <td>S.No.</td>
            <td>Name</td>
            <td>Price</td>
            <td>Description</td>
            <td>Image</td>
            <td>Operations</td>
          </tr>
        </thead>
        <tbody>
          {foodItems?.map((foodItem, index) => {
            return (
              <tr key={foodItem._id}>
                <td>{index + 1}</td>
                <td>{foodItem.name}</td>
                <td>{foodItem.price}</td>
                <td>{foodItem.description}</td>
                <td>
                  <img
                    style={{ height: "150px", width: "150px" }}
                    src={foodItem.imagePath}
                  />
                </td>
                <td>
                  <button onClick={() => handleDeleteFoodItem(foodItem._id)}>
                    Delete
                  </button>
                  <button
                    onClick={() => router.push(`dashboard/${foodItem._id}`)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FoodItemList;
