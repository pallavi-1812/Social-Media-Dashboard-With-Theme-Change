import React from "react";

const Header = () => {
  return (
    <div className="heading">
      <div className="mainHead">
        <p className="fHead">Social Media Dashboard</p>
        <small className="secHead">Total Followers: 23,004</small>
      </div>
      <div className="toggle">
        <small className="darkHead">Dark Mode</small>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default Header;
