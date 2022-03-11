import React from "react";
import Logo from "../../components/logo/logo";

import corn from "../../assets/corn.svg";
import tomato from "../../assets/tomato.svg";
import broccoli from "../../assets/broccoli.svg";
import radish from "../../assets/radish.svg";
import tick from "../../assets/tick.svg";
import logo from "../../assets/logo-name.svg";
import "./home.scss";

export default function Home() {
  return (
    <div id="home" className="home">
      <h1 className="title">
        <img className="logo-name" src={logo} alt="Fridgeful" />
      </h1>
      <div className="logobox">
        <div className="comments1">
          <div className="comment">
            <p>
              <img className="tick" src={tick} alt="tick" />
              <img className="icon" src={radish} alt="radish" />
              Keep on top of what's in your frige
            </p>
          </div>
          <div className="comment">
            <p>
              <img className="tick" src={tick} alt="tick" />
              <img className="icon" src={broccoli} alt="broccoli" />
              Track expiry dates and add items to your shopping list
            </p>
          </div>
        </div>
        <Logo />
        <div className="comments2">
          <div className="comment">
            <p>
              <img className="tick" src={tick} alt="tick" />
              <img className="icon" src={corn} alt="corn" />
              Reduce food and money wastage
            </p>
          </div>
          <div className="comment">
            <p>
              <img className="tick" src={tick} alt="tick" />
              <img className="icon" src={tomato} alt="tomato" />
              Discover new recipes based on your current ingredients
            </p>
          </div>
        </div>
      </div>
      <h1 className="tag-line">
        <h1 className="tag-line">
          <span>Buy</span> wisely
        </h1>
        <h1 className="tag-line">
          <span>Cook</span> Fridgefully
        </h1>
        <h1 className="tag-line">
          <span>Eat</span> everything
        </h1>{" "}
      </h1>
    </div>
  );
}
