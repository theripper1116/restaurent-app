"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const EditFoodItem = ({ params: { foodId } }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const validateEditFoodFormData = () => {
    if (!name || !price || !imagePath || !description) {
      alert("Please fill out all Fields");
      return false;
    }
    return true;
  };

  const handleEditFoodItem = async () => {
    const isValidateSuccess = validateEditFoodFormData();
    if (isValidateSuccess) {
      const updatedFoodDetails = {
        name,
        price,
        imagePath,
        description,
      };
      try {
        const response = await fetch(
          "http://localhost:3000/api/restaurant/foods/edit/" + foodId,
          {
            method: "put",
            body: JSON.stringify(updatedFoodDetails),
          }
        );
        const data = await response.json();
        if (response.status === 200 && data) {
          alert(`${updatedFoodDetails.name} updated successfully`);
          router.push("../dashboard");
        }
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  const fetchFoodItemData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/restaurant/foods/edit/" + foodId
      );
      const data = await response.json();
      console.log(data);
      if (response.status === 200 && data) {
        setName(data[0].name);
        setDescription(data[0].description);
        setImagePath(data[0].imagePath);
        setPrice(data[0].price);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchFoodItemData();
  }, []);

  return (
    <div className="container">
      <h1>Edit Food</h1>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter Food Item"
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="number"
          className="input-field"
          placeholder="Enter Price"
          onChange={(e) => setPrice(e.target.value)}
          defaultValue={price}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter Image Path"
          onChange={(e) => setImagePath(e.target.value)}
          defaultValue={imagePath}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter Description"
          onChange={(e) => setDescription(e.target.value)}
          defaultValue={description}
        />
      </div>
      <div className="input-wrapper">
        <button className="button" onClick={() => handleEditFoodItem()}>
          Edit Food Item
        </button>
      </div>
    </div>
  );
};

export default EditFoodItem;
