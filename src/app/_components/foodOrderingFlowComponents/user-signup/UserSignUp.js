"use client";

import validateSignUpFormData from "@/app/utils/validations/validateSignUpFormData";
import { useState } from "react";

const UserSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setC_Password] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  const formDataObj = {
    email,
    password,
    c_password,
    name,
    city,
    address,
    contact,
  };

  const handleSignUpFormData = async () => {
    const isValidateSuccess = validateSignUpFormData(formDataObj);
    if (isValidateSuccess) {
      try {
        const response = await fetch("http://localhost:3000/api/user", {
          method: "post",
          body: JSON.stringify(formDataObj),
        });
        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  return (
    <>
      <div className="container">
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
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default UserSignUp;
