import React from "react";
import "./about.scss";
import qrcode from "../../assets/qrcode.svg";
import AppInUse from "../../components/appInUse/appInUse";

export default function About() {
  return (
    <div id="about" className="about">
      <h1>About</h1>
      <div className="aboutbox">
        <div className="textbox">
        <img className="qrcode" src={qrcode} alt="QR Code"></img>
          <p>Scan the code to get the app</p>
          <p>and start cooking Fridgefuly today</p>
        </div>
        <AppInUse />
        </div>
        <p>Fridgeful was designed to help you reduce food waste by suggesting new delicious recipes based on the contents of your fridge.</p>
        <p>Simply add your ingredients to your fridge, specifying quantity and expiry date</p>
        <p>Fridgeful will let you know when an item is going out od date and needs to be used up</p>
        <p>Select the ingredients you would like to use up and Fridgeful will return you a list of specific recipes to allow you to use those items</p>
      </div>
  );
}
