import { useState } from "react";

const AddFoodItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");

  const handleAddFoodItem = () => {
    console.log("inside handleAddFoodItem");
  };

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
          type="text"
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
