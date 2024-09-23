const DisplayFoodItem = ({ foodItem }) => {
  const { name, price, description, imagePath } = foodItem;
  return (
    <>
      <div className="list-item">
        <div>
          <img style={{ width: "100px" }} src={imagePath} />
        </div>
        <div>
          <div>{name}</div>
          <div>{price}</div>
          <div className="description">{description}</div>
          <button>Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default DisplayFoodItem;
