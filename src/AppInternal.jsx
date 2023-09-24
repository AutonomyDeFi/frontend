import * as React from "react";

import { useSDK } from "@metamask/sdk-react";
import { usePrivy } from "@privy-io/react-auth";

import AuthPage from "./pages/Auth.page";
import MainScreen from "./pages/MainScreen";
import "./App.css";

const AppInternal = ({
  account,
  isAuthComplete,
  isMetamaskAuth,
  setAccount,
  setIsAuthComplete,
  setIsMetamaskAuth,
}) => {
  const { sdk } = useSDK();
  const { logout } = usePrivy();

  const handleLogout = async () => {
    if (isMetamaskAuth) {
      await sdk?.disconnect();
    } else {
      await logout();
    }

    setAccount(null);
    setIsMetamaskAuth(false);
    setIsAuthComplete(false);
  };
  console.log(
    `----- isAuthComplete: ${isAuthComplete}`,
  );

  if (isAuthComplete) {
    return (
      <MainScreen
        account={account}
        isMetamaskAuth={isMetamaskAuth}
        handleLogout={handleLogout}
      />
    );
  } else {
    return (
      <AuthPage
        setAccount={setAccount}
        setIsAuthComplete={setIsAuthComplete}
        setIsMetamaskAuth={setIsMetamaskAuth}
      />
    );
  }
};

export default AppInternal;
