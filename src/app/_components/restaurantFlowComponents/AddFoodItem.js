import { useState } from "react";

const AddFoodItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const validateAddFoodFormData = () => {
    if (!name || !price || !path || !description) {
      alert("Please fill out all Fields");
      return false;
    }
    return true;
  };

  const handleAddFoodItem = async () => {
    const isValidateSuccess = validateAddFoodFormData();
    if (isValidateSuccess) {
      const getCurrentRestaurantDetails = JSON.parse(
        localStorage.getItem("restaurantUser")
      );
      if (getCurrentRestaurantDetails) {
        try {
          const response = await fetch(
            "http://localhost:3000/api/restaurant/foods",
            {
              method: "POST",
              body: JSON.stringify({
                name,
                price,
                imagePath: path,
                description,
                restaurantId: getCurrentRestaurantDetails._id,
              }),
            }
          );
          const data = await response.json();
          if (!data.message) {
            alert("Food Item Inserted successfully");
          } else setError(data.message);
        } catch (err) {
          console.error(err.message);
        }
      }
    }
  };

  if (error) return <h3>Food Item not saved due to: {error}</h3>;

  return (
    <div className="container">
      <h1>Food Items</h1>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter Food Item"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="number"
          className="input-field"
          placeholder="Enter Price"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter Image Path"
          onChange={(e) => setPath(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter Description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <button className="button" onClick={() => handleAddFoodItem()}>
          Add Food Item
        </button>
      </div>
    </div>
  );
};

export default AddFoodItem;
