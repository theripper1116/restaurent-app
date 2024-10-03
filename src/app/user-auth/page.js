import CustomerHeader from "../_components/foodOrderingFlowComponents/CustomerHeader";
import UserSignUp from "../_components/foodOrderingFlowComponents/user-signup/UserSignUp";
import Footer from "../_components/restaurantFlowComponents/Footer";

const UserAuth = () => {
  return (
    <div>
      <CustomerHeader />
      <div classname="container">
        <h1>User Sign Up Form</h1>
        <UserSignUp />
      </div>
      <Footer />
    </div>
  );
};

export default UserAuth;
