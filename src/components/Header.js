import React, { useContext } from "react";
import ToggleContext from "../Context";

const Header = () => {
  const { checked, setChecked } = useContext(ToggleContext);

  const handleClick = () => {
    setChecked(!checked);
    if (!checked) {
      document.body.style.backgroundColor = "#ffffff";
    } else {
      document.body.style.backgroundColor = "#1e202a";
    }
  };

  return (
    <div className={`heading ${checked ? "light" : ""}`}>
      <div className="mainHead">
        <p className="fHead">Social Media Dashboard</p>
        <small className="secHead">Total Followers: 23,004</small>
      </div>
      <div className="toggle">
        <small className="darkHead">Dark Mode</small>
        <label className="switch">
          <input type="checkbox" checked={checked} onChange={handleClick} />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default Header;
