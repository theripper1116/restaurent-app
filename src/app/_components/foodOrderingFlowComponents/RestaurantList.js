export const RestaurantList = ({ restaurantDetail }) => {
  const { name, contact, city, address, email } = restaurantDetail;
  return (
    <div className="restaurant-wrapper">
      <div className="heading-wrapper">
        <h3>{name}</h3>&nbsp;
        <h5>Contact: {contact}</h5>
      </div>
      <div className="address-wrapper">
        <div>{city}&nbsp;</div>
        <div>
          {address}, Email: {email}
        </div>
      </div>
    </div>
  );
};

export default RestaurantList;
