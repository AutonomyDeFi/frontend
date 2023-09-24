import * as React from "react";

import { PrivyProvider } from "@privy-io/react-auth";

import bannerImage from "./assets/ape_banner_text-white.png";
import AppInternal from "./AppInternal";
import "./App.css";

const App = () => {
  const [isAuthComplete, setIsAuthComplete] =
    React.useState(false);
  const [isMetamaskAuth, setIsMetamaskAuth] =
    React.useState(false);
  const [account, setAccount] =
    React.useState(null);

  const handleLogin = () => {
    setIsAuthComplete(true);

    // Construct Biconomy smart account
  };

  const handleLoginWithPrivy = (user) => {
    setAccount(user.id);
    setIsMetamaskAuth(false);
    handleLogin();
  };

  return (
    <>
      <PrivyProvider
        appId={process.env.REACT_APP_PRIVY_APP_ID}
        onSuccess={handleLoginWithPrivy}
        config={{
          loginMethods: ["email"],
          appearance: {
            theme: "dark",
            accentColor: "#d32f2f",
            logo: bannerImage,
          },
        }}
      >
        <AppInternal
          account={account}
          handleLogin={handleLogin}
          isAuthComplete={isAuthComplete}
          isMetamaskAuth={isMetamaskAuth}
          setAccount={setAccount}
          setIsAuthComplete={setIsAuthComplete}
          setIsMetamaskAuth={setIsMetamaskAuth}
        />
      </PrivyProvider>
    </>
  );
};

export default App;
