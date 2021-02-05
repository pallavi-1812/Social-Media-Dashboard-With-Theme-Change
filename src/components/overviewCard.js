import React from "react";
import facebookIcon from "./images/icon-facebook.svg";
import upIcon from "./images/icon-up.svg";
import downIcon from "./images/icon-down.svg";
import twitterIcon from "./images/icon-twitter.svg";
import instagramIcon from "./images/icon-instagram.svg";
import youtubeIcon from "./images/icon-youtube.svg";

const OverviewCard = () => {
  return (
    <>
      <div className="overview-cards">
        <div>
          <p>Page Views</p>
          <img src={facebookIcon} alt="Facebook Icon" />
        </div>
        <div>
          <p>87</p>
          <span>
            <img src={upIcon} alt="up Icon" />
          </span>
          3%
        </div>
      </div>
      <div className="overview-cards">
        <div>
          <p>Likes</p>
          <img src={facebookIcon} alt="Facebook Icon" />
        </div>
        <div>
          <p>52</p>
          <span>
            <img src={downIcon} alt="down Icon" />
          </span>
          2%
        </div>
      </div>
      <div className="overview-cards">
        <div>
          <p>Likes</p>
          <img src={instagramIcon} alt="instagram Icon" />
        </div>
        <div>
          <p>5462</p>
          <span>
            <img src={upIcon} alt="up Icon" />
          </span>
          2257%
        </div>
      </div>
      <div className="overview-cards">
        <div>
          <p>Profile Views</p>
          <img src={instagramIcon} alt="instagram Icon" />
        </div>
        <div>
          <p>52K</p>
          <span>
            <img src={upIcon} alt="up Icon" />
          </span>
          1375%
        </div>
      </div>
      <div className="overview-cards">
        <div>
          <p>Retweets</p>
          <img src={twitterIcon} alt="twitter Icon" />
        </div>
        <div>
          <p>117</p>
          <span>
            <img src={upIcon} alt="up Icon" />
          </span>
          303%
        </div>
      </div>
      <div className="overview-cards">
        <div>
          <p>Likes</p>
          <img src={twitterIcon} alt="twitter Icon" />
        </div>
        <div>
          <p>507</p>
          <span>
            <img src={upIcon} alt="up Icon" />
          </span>
          553%
        </div>
      </div>
      <div className="overview-cards">
        <div>
          <p>Likes</p>
          <img src={youtubeIcon} alt="youtube Icon" />
        </div>
        <div>
          <p>107</p>
          <span>
            <img src={downIcon} alt="down Icon" />
          </span>
          19%
        </div>
      </div>
      <div className="overview-cards">
        <div>
          <p>Total Views</p>
          <img src={youtubeIcon} alt="youtube Icon" />
        </div>
        <div>
          <p>1407</p>
          <span>
            <img src={downIcon} alt="down Icon" />
          </span>
          12%
        </div>
      </div>
    </>
  );
};

export default OverviewCard;
