import React from "react";

const Header = () => {
  return (
    <>
      <div>
        <h1>Social Media Dashboard</h1>
        <small>Total Followers: 23,004</small>
      </div>
      <div>
        <small>Dark Mode</small>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    </>
  );
};

export default Header;
