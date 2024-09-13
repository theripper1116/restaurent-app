"use client";

import { useState } from "react";

import "./style.css";

import RestaurentHeader from "../_components/RestaurentHeader";
import RestaurentLogin from "../_components/RestaurentLogin";
import RestaurentSignUp from "../_components/RestaurentSignUp";
import RestaurentFooter from "./RestaurentFooter";

const Restaurent = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <div className="container">
        <RestaurentHeader />
        <h2>Restaurant Login/SignUp Page</h2>
        {login ? <RestaurentLogin /> : <RestaurentSignUp />}

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
      <RestaurentFooter />
    </>
  );
};

export default Restaurent;
