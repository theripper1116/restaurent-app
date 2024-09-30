import { useState } from "react";

const DisplayFoodItem = ({ foodItem, addToCart, removeFromCart, isCart }) => {
  const { name, price, description, imagePath, _id } = foodItem;
  const [cartFoodIdList] = useState(
    JSON.parse(localStorage.getItem("cartItems"))?.map((foodItem) => {
      return foodItem._id;
    })
  );

  return (
    <>
      {!isCart ? (
        <div className="list-item">
          <div>
            <img style={{ width: "100px" }} src={imagePath} />
          </div>
          <div>
            <div>{name}</div>
            <div>{price}</div>
            <div className="description">{description}</div>

            {cartFoodIdList?.includes(_id) ? (
              <button
                onClick={() => {
                  removeFromCart(foodItem);
                }}
              >
                Remove from Cart
              </button>
            ) : (
              <button
                onClick={() => {
                  addToCart(foodItem);
                }}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="list-item">
          <div className="list-item-block-1">
            <img style={{ width: "100px" }} src={imagePath} />
          </div>
          <div  className="list-item-block-2">
            <div>{name}</div>
            <div className="description">{description}</div>
            <button>Remove from Cart</button>
          </div>
          <div  className="list-item-block-3">Price : {price}</div>
        </div>
      )}
    </>
  );
};

export default DisplayFoodItem;
