const RestaurentLogin = () => {
  return (
    <>
      <h3>Restaurent Login</h3>
      <div className="input-wrapper">
        <input
          className="input-field"
          type="text"
          placeholder="Enter email id"
        />
      </div>
      <div>
        <input
          className="input-field"
          type="password"
          placeholder="Enter password"
        />
      </div>
      <div className="input-wrapper">
        <button className="button">Login</button>
      </div>
    </>
  );
};

export default RestaurentLogin;
