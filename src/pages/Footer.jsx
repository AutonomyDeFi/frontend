import React from "react";
import "./footerstyling.css";

function Footer() {
  return (
    <div className="footer-container"> 
    <div className="div-relative">
      <div className="div-flex">
        <div className="div-w-full">
          <div className="heading">
            <p className="sign-up-to-get-the">
              Sign up to get the latest news and updates on
              <br />
              APE-I
            </p>
          </div>
          <div className="form">
            <div className="input">
              <div className="div-placeholder">
                <input className="your-email-address" placeholder="Your email address" type="email" />
              </div>g
            </div>
            <img className="button" alt="Button" src="button.svg" />
          </div>
        </div>
        <div className="div-margin" />
      </div>
      <div className="div-mt">
        <div className="p-opacity">
          <p className="text-wrapper">© 2023 APE-I. All rights reserved.</p>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Footer;
