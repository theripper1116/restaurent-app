"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import validateSignInFormData from "../utils/validations/validateSignInFormData";

const RestaurantLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignInFormData = async () => {
    const isValidateSuccess = validateSignInFormData(email, password);
    if (isValidateSuccess) {
      let response = await fetch("http://localhost:3000/api/restaurant", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
          login: true,
        }),
      });
      let data = await response.json();
      if (response.status === 200) {
        alert("Login Successfull");
        delete data.password;
        localStorage.setItem("restaurantUser", JSON.stringify(data));
        router.push("/restaurant/dashboard");
      }
    }
  };

  return (
    <>
      <h3>Restaurant Login</h3>
      <div className="input-wrapper">
        <input
          className="input-field"
          type="text"
          placeholder="Enter email id"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          className="input-field"
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <button className="button" onClick={() => handleSignInFormData()}>
          Login
        </button>
      </div>
    </>
  );
};

export default RestaurantLogin;
