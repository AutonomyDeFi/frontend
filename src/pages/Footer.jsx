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
            <div className="heading">
              <p className="sign-up-to-get-the">
                Sign up to get the latest news and updates on
                <br />
                APE-I
              </p>
            </div>
            <div className="form">

              
               {/* <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={email}
                onChange={handleInputChange}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Submit
              </Button>  */}
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

