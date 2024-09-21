"use client";

import { useState } from "react";
import "./style.css";

import RestaurantHeader from "../_components/restaurantFlowComponents/RestaurantHeader";
import RestaurantLogin from "../_components/restaurantFlowComponents/RestaurantLogin";
import RestaurantSignUp from "../_components/restaurantFlowComponents/RestaurantSignUp";
import Footer from "../_components/restaurantFlowComponents/Footer";

const Restaurent = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <div className="container">
        <RestaurantHeader />
        <h2>Restaurant Login/SignUp Page</h2>
        {login ? <RestaurantLogin /> : <RestaurantSignUp />}

        <div>
          <button
            className="button-link"
            onClick={() => setLogin((prev) => !prev)}
          >
            {login
              ? "Don't have an account? SignUp"
              : "Already have an account? SignIn"}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Restaurent;
