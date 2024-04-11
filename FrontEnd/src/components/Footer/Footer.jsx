import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            omnis, hic nesciunt impedit ducimus veritatis non at alias ex
            similique dolorum accusamus! Est, nisi. Officiis atque similique
            placeat pariatur exercitationem!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h1>GET IN TOUCH </h1>
          <ul>
            <li>+971-55-370-8833</li>
            <li>tomato123@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Tomato.com || All right reserved.
      </p>
    </div>
  );
};

export default Footer;
