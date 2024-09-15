const RestaurantSignUp = () => {
  return (
    <>
      <h3>Restaurant Login</h3>
      <div className="input-wrapper">
        <input
          className="input-field"
          type="text"
          placeholder="Enter email id"
        />
      </div>
      <div className="input-wrapper">
        <input
          className="input-field"
          type="password"
          placeholder="Enter password"
        />
      </div>
      <div className="input-wrapper">
        <input
          className="input-field"
          type="password"
          placeholder="Confirm password"
        />
      </div>
      <div className="input-wrapper">
        <input
          className="input-field"
          type="text"
          placeholder="Enter Restaurent Name"
        />
      </div>
      <div className="input-wrapper">
        <input className="input-field" type="text" placeholder="Enter City" />
      </div>
      <div className="input-wrapper">
        <input
          className="input-field"
          type="text"
          placeholder="Enter Full Address"
        />
      </div>
      <div className="input-wrapper">
        <input
          className="input-field"
          type="text"
          placeholder="Enter Contact no."
        />
      </div>
      <div>
        <button className="button">SignUp</button>
      </div>
    </>
  );
};

export default RestaurantSignUp;
