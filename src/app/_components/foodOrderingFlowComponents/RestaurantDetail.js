const RestaurantDetail = ({ restaurantDetail }) => {
  const { contact, city, address, email } = restaurantDetail;
  return (
    <>
      <h4>Contact: {contact}</h4>
      <h4>City: {city}</h4>
      <h4>Address: {address}</h4>
      <h4>Email: {email}</h4>
    </>
  );
};

export default RestaurantDetail;
