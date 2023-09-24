import React from "react";
import ReactDOM from "react-dom/client";
import { MetaMaskUIProvider } from "@metamask/sdk-react-ui";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root"),
);

root.render(
  <MetaMaskUIProvider
    sdkOptions={{
      dappMetadata: {
        name: "Ape-I",
      },
    }}
  >
    <App />
  </MetaMaskUIProvider>,
);

// See https://docs.privy.io/guide/troubleshooting/webpack for how to handle
// common build issues with web3 projects bootstrapped with Create React App

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
