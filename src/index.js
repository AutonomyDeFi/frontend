import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PrivyProvider } from "@privy-io/react-auth";

import bannerImage from "./assets/ape_banner_text-white.png";

const root = ReactDOM.createRoot(
  document.getElementById("root"),
);

// This method will be passed to the PrivyProvider as a callback
// that runs after successful login.
const handleLogin = (user) => {
  console.log(`User ${user.id} logged in!`);
};

root.render(
  <React.StrictMode>
    <PrivyProvider
      appId={process.env.REACT_APP_PRIVY_APP_ID}
      onSuccess={handleLogin}
      config={{
        loginMethods: ["email", "google"],
        appearance: {
          theme: "dark",
          accentColor: "#d32f2f",
          logo: bannerImage,
        },
      }}
    >
      <App />
    </PrivyProvider>
  </React.StrictMode>,
);

// See https://docs.privy.io/guide/troubleshooting/webpack for how to handle
// common build issues with web3 projects bootstrapped with Create React App

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
