"use client";

import { useState } from "react";

import "./style.css";

import RestaurantHeader from "../_components/RestaurantHeader";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignUp from "../_components/RestaurantSignUp";
import RestaurantFooter from "../_components/RestaurantFooter";

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
      <RestaurantFooter />
    </>
  );
};

export default Restaurent;
