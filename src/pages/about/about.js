import React from "react";
import "./about.scss";
import qrcode from "../../assets/qrcode.svg";
import AppInUse from "../../components/appInUse/appInUse";
import Outline from "../contact/outline";

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
        <h2>
          Fridgeful was designed to help you reduce food waste by suggesting new
          delicious recipes based on the contents of your fridge.
        </h2>
      </div>
      <AppInUse />
      <Outline />
    </div>
  );
}
