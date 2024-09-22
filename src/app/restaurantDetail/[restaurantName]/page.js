import CustomerHeader from "@/app/_components/foodOrderingFlowComponents/CustomerHeader";

const RestaurantDetailPage = ({ params: { restaurantName } }) => {
  return (
    <div>
      <CustomerHeader />
      <div className="restaurant-page-banner">
        <h1>{decodeURI(restaurantName)}</h1>
      </div>
    </div>
  );
};

export default RestaurantDetailPage;
