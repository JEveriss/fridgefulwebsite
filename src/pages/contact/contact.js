import React from "react";
import "./contact.scss";
import { Headshots } from "../../components/headshots/headshots";

export default function Contact() {
  return (
    <div id="contact" className="contact">
      <h1>Contact</h1>
      <div className="profile-container">
        <Headshots />
      </div>
    </div>
  );
}
