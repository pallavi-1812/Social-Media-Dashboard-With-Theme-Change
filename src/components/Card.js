import React from "react";
import facebookIcon from "./images/icon-facebook.svg";
import upIcon from "./images/icon-up.svg";
import downIcon from "./images/icon-down.svg";
import twitterIcon from "./images/icon-twitter.svg";
import instagramIcon from "./images/icon-instagram.svg";
import youtubeIcon from "./images/icon-youtube.svg";

const Card = () => {
  return (
    <>
      <div className="card">
        <div>
          <span>
            <img src={facebookIcon} alt="Facebook Icon" />
          </span>
          @nathanf
        </div>
        <div>
          <p>1987</p>
          <p>FOLLOWERS</p>
        </div>
        <div>
          <span>
            <img src={upIcon} alt="up Icon" />
          </span>
          12 Today
        </div>
      </div>
      <div className="card">
        <div>
          <span>
            <img src={twitterIcon} alt="twitter Icon" />
          </span>
          @nathanf
        </div>
        <div>
          <p>1044</p>
          <p>FOLLOWERS</p>
        </div>
        <div>
          <span>
            <img src={upIcon} alt="up Icon" />
          </span>
          99 Today
        </div>
      </div>
      <div className="card">
        <div>
          <span>
            <img src={instagramIcon} alt="instagram Icon" />
          </span>
          @realnathanf
        </div>
        <div>
          <p>11K</p>
          <p>FOLLOWERS</p>
        </div>
        <div>
          <span>
            <img src={upIcon} alt="up Icon" />
          </span>
          1099 Today
        </div>
      </div>
      <div className="card">
        <div>
          <span>
            <img src={youtubeIcon} alt="youtube Icon" />
          </span>
          Nathan F.
        </div>
        <div>
          <p>8239</p>
          <p>SUBSCRIBERS</p>
        </div>
        <div>
          <span>
            <img src={downIcon} alt="down Icon" />
          </span>
          144 Today
        </div>
      </div>
    </>
  );
};

export default Card;
