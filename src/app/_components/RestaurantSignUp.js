"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const RestaurantSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setC_Password] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const router = useRouter();

  const handleSignUpFormData = async () => {
    let response = await fetch("http://localhost:3000/api/restaurant", {
      method: "POST",
      body: JSON.stringify({ email, password, name, city, address, contact }),
    });
    let data = await response.json();
    if (response.status === 200) {
      delete data.password;
      localStorage.setItem("restaurantUser", JSON.stringify(data));
      router.push("/restaurant/dashboard");
    }
  };

  return (
    <>
      <h3>Restaurant SignUp</h3>
      <div className="input-wrapper">
        <input
          className="input-field"
          type="text"
          placeholder="Enter email id"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          className="input-field"
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          className="input-field"
          type="password"
          placeholder="Confirm password"
          onChange={(e) => setC_Password(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          className="input-field"
          type="text"
          placeholder="Enter Restaurent Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          className="input-field"
          type="text"
          placeholder="Enter City"
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          className="input-field"
          type="text"
          placeholder="Enter Full Address"
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          className="input-field"
          type="text"
          placeholder="Enter Contact no."
          onChange={(e) => setContact(e.target.value)}
        />
      </div>
      <div>
        <button className="button" onClick={() => handleSignUpFormData()}>
          SignUp
        </button>
      </div>
    </>
  );
};

export default RestaurantSignUp;
