import { useRouter } from "next/navigation";

export const RestaurantList = ({ restaurantDetail }) => {
  const { name, contact, city, address, email, _id } = restaurantDetail;
  const router = useRouter();
  return (
    <div
      className="restaurant-wrapper"
      onClick={() => {
        router.push(`/restaurantDetail/${name}?restaurantId=${_id}`);
      }}
    >
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
