import React, { useState } from "react";
import "./footerstyling.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MailChimp from './MailChimp';
function Footer() {
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    // Send the email to a Google Sheet or perform any other action here
    console.log("Submitted email:", email);
    // Clear the input field after submission
    setEmail("");
  };

  return (
    <div className="footer-container">
      <div className="div-relative">
        <div className="div-flex">
          <div className="div-w-full">
            <div className="form">
             <MailChimp/> 
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


