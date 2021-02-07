import React, { useContext } from "react";
import facebookIcon from "./images/icon-facebook.svg";
import upIcon from "./images/icon-up.svg";
import downIcon from "./images/icon-down.svg";
import twitterIcon from "./images/icon-twitter.svg";
import instagramIcon from "./images/icon-instagram.svg";
import youtubeIcon from "./images/icon-youtube.svg";
import ToggleContext from "../Context";

const OverviewCard = () => {
  const { checked } = useContext(ToggleContext);

  return (
    <>
      <div className="overall">
        <div className={`overview-cards ${checked ? "light" : ""}`}>
          <div className="fRow">
            <p>Page Views</p>
            <span>
              <img src={facebookIcon} alt="Facebook Icon" />
            </span>
          </div>
          <div className="sRow">
            <p className="num">87</p>
            <div className="number">
              <span>
                <img src={upIcon} alt="up Icon" />
              </span>
              <p>3%</p>
            </div>
          </div>
        </div>
        <div className={`overview-cards ${checked ? "light" : ""}`}>
          <div className="fRow">
            <p>Likes</p>
            <span>
              <img src={facebookIcon} alt="Facebook Icon" />
            </span>
          </div>
          <div className="sRow">
            <p className="num">52</p>
            <div className="number decrease">
              <span>
                <img src={downIcon} alt="down Icon" />
              </span>
              <p>2%</p>
            </div>
          </div>
        </div>
        <div className={`overview-cards ${checked ? "light" : ""}`}>
          <div className="fRow">
            <p>Likes</p>
            <span>
              <img src={instagramIcon} alt="instagram Icon" />
            </span>
          </div>
          <div className="sRow">
            <p className="num">5462</p>
            <div className="number">
              <span>
                <img src={upIcon} alt="up Icon" />
              </span>
              <p>2257%</p>
            </div>
          </div>
        </div>
        <div className={`overview-cards ${checked ? "light" : ""}`}>
          <div className="fRow">
            <p>Profile Views</p>
            <span>
              <img src={instagramIcon} alt="instagram Icon" />
            </span>
          </div>
          <div className="sRow">
            <p className="num">52k</p>
            <div className="number">
              <span>
                <img src={upIcon} alt="up Icon" />
              </span>
              <p>1375%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="overall">
        <div className={`overview-cards ${checked ? "light" : ""}`}>
          <div className="fRow">
            <p>Retweets</p>
            <span>
              <img src={twitterIcon} alt="twitter Icon" />
            </span>
          </div>
          <div className="sRow">
            <p className="num">117</p>
            <div className="number">
              <span>
                <img src={upIcon} alt="up Icon" />
              </span>
              <p>303%</p>
            </div>
          </div>
        </div>
        <div className={`overview-cards ${checked ? "light" : ""}`}>
          <div className="fRow">
            <p>Likes</p>
            <span>
              <img src={twitterIcon} alt="twitter Icon" />
            </span>
          </div>
          <div className="sRow">
            <p className="num">507</p>
            <div className="number">
              <span>
                <img src={upIcon} alt="up Icon" />
              </span>
              <p>553%</p>
            </div>
          </div>
        </div>
        <div className={`overview-cards ${checked ? "light" : ""}`}>
          <div className="fRow">
            <p>Likes</p>
            <span>
              <img src={youtubeIcon} alt="youtube Icon" />
            </span>
          </div>
          <div className="sRow">
            <p className="num">107</p>
            <div className="number decrease">
              <span>
                <img src={downIcon} alt="down Icon" />
              </span>
              <p>19%</p>
            </div>
          </div>
        </div>
        <div className={`overview-cards ${checked ? "light" : ""}`}>
          <div className="fRow">
            <p>Total Views</p>
            <span>
              <img src={youtubeIcon} alt="youtube Icon" />
            </span>
          </div>
          <div className="sRow">
            <p className="num">1407</p>
            <div className="number decrease">
              <span>
                <img src={downIcon} alt="down Icon" />
              </span>
              <p>12%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewCard;
