import React, { useContext } from "react";
import ToggleContext from '../Context';
import facebookIcon from "./images/icon-facebook.svg";
import upIcon from "./images/icon-up.svg";
import downIcon from "./images/icon-down.svg";
import twitterIcon from "./images/icon-twitter.svg";
import instagramIcon from "./images/icon-instagram.svg";
import youtubeIcon from "./images/icon-youtube.svg";

const Card = () => {

  const { checked } = useContext(ToggleContext);

  return (
    <div className="allCards">
      <div className={`card facebook ${checked ? "light" : ""}`}>
        <div className="tag">
          <span>
            <img src={facebookIcon} alt="Facebook Icon" />
          </span>
          <p>@nathanf</p>
        </div>
        <div className="follow">
          <p className="followNum">1987</p>
          <p className="numName">FOLLOWERS</p>
        </div>
        <div className="dif">
          <span>
            <img src={upIcon} alt="up Icon" />
          </span>
          <p>12 Today</p>
        </div>
      </div>
      <div className={`card twitter ${checked ? "light" : ""}`}>
        <div className="tag">
          <span>
            <img src={twitterIcon} alt="twitter Icon" />
          </span>
          <p>@nathanf</p>
        </div>
        <div className="follow">
          <p className="followNum">1044</p>
          <p className="numName">FOLLOWERS</p>
        </div>
        <div className="dif">
          <span>
            <img src={upIcon} alt="up Icon" />
          </span>
          <p>99 Today</p>
        </div>
      </div>
      <div className={`card insta ${checked ? "light" : ""}`}>
        <div className="tag">
          <span>
            <img src={instagramIcon} alt="instagram Icon" />
          </span>
          <p>@realnathanf</p>
        </div>
        <div className="follow">
          <p className="followNum">11k</p>
          <p className="numName">FOLLOWERS</p>
        </div>
        <div className="dif">
          <span>
            <img src={upIcon} alt="up Icon" />
          </span>
          <p>1099 Today</p>
        </div>
      </div>
      <div className={`card utube ${checked ? "light" : ""}`}>
        <div className="tag">
          <span>
            <img src={youtubeIcon} alt="youtube Icon" />
          </span>
          <p>Nathan F.</p>
        </div>
        <div className="follow">
          <p className="followNum">8239</p>
          <p className="numName">SUBSCRIBERS</p>
        </div>
        <div className="dif decrease">
          <span>
            <img src={downIcon} alt="down Icon" />
          </span>
          <p>144 Today</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
